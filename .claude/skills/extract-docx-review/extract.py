#!/usr/bin/env python3
"""Extract comments and track changes from a .docx file into sidecar JSON.

Usage:
    python3 extract.py <docx-path> <output-directory> [--md-file <name.md>]

The script expects a Markdown file (produced by pandoc) to already exist
in the output directory. If --md-file is not given, it looks for the first
*.md file in the output directory.

Output: <output-directory>/review-comments.json
"""

import argparse
import json
import os
import re
import sys
import zipfile
from datetime import date
from pathlib import Path

from lxml import etree

WNS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"


# ---------------------------------------------------------------------------
# Markdown helpers
# ---------------------------------------------------------------------------

def load_markdown(md_path: str) -> tuple[list[str], str]:
    with open(md_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    return lines, "".join(lines)


def build_section_markers(md_lines: list[str]) -> list[tuple[int, str]]:
    """Detect section headings from Markdown lines.

    Handles both proper Markdown headings (## Heading) and form-style
    headings (short label at line start followed by content).
    """
    markers: list[tuple[int, str]] = []

    for i, line in enumerate(md_lines):
        stripped = line.strip()
        if not stripped:
            continue

        # Proper Markdown headings
        m = re.match(r"^(#{1,6})\s+(.+)", stripped)
        if m:
            markers.append((i + 1, m.group(2).strip()))
            continue

        # Form-style: short standalone heading (< 40 chars, no period at end)
        if len(stripped) < 40 and not stripped.endswith((".", ":")):
            next_line = md_lines[i + 1].strip() if i + 1 < len(md_lines) else ""
            if next_line == "":
                markers.append((i + 1, stripped))
                continue

        # Form-style: label at start of a longer line (e.g., "Background Medical...")
        # Match known registration-form patterns
        for label in _KNOWN_LABELS:
            if stripped.startswith(label) and (
                len(stripped) == len(label)
                or stripped[len(label)] in (" ", ":")
            ):
                markers.append((i + 1, label))
                break

    return markers


_KNOWN_LABELS = [
    "Background", "Primary research question", "Secondary research question",
    "Expectations / hypotheses", "Dependent variable", "Independent variable",
    "Additional variable", "Software", "Funding", "Conflicts of interest",
    "Overlapping authorships", "Search Strategy", "Databases", "Interfaces",
    "Grey literature", "Inclusion and exclusion criteria", "Query strings",
    "Search validation procedure", "Other search strategies",
    "Procedures to contact authors", "Results of contacting authors",
    "Search expiration", "Search strategy justification",
    "Miscellaneous search strategy", "Screening", "Screening stages",
    "Screened fields", "Used exclusion criteria", "Screener instructions",
    "Screening reliability", "Screening reconciliation",
    "Sampling and sample size", "Screening procedure justification",
    "Data management and sharing", "Miscellaneous screening",
    "Extraction", "Entities to extract", "Extraction stages",
    "Extractor instructions", "Extractor masking", "Extraction reliability",
    "Extraction reconciliation", "Extraction procedure justification",
    "Miscellaneous extraction", "Synthesis and Quality Assessment",
    "Planned data transformations", "Missing data", "Data validation",
    "Quality assessment", "Synthesis plan", "Criteria for conclusions",
    "Synthesist blinding", "Synthesis reliability", "Synthesis reconciliation",
    "Publication bias", "Sensitivity analyses",
    "Synthesis procedure justification", "Synthesis data management",
    "Miscellaneous synthesis",
]


def find_section(markers: list[tuple[int, str]], line_num: int | None) -> str:
    if line_num is None:
        return "(Unknown)"
    best = "(Preamble)"
    for sline, slabel in markers:
        if sline <= line_num:
            best = slabel
        else:
            break
    return best


def find_md_line(md_text: str, search_text: str) -> int | None:
    if not search_text:
        return None
    search_text = search_text.strip()
    if not search_text:
        return None
    # Exact match
    pos = md_text.find(search_text)
    if pos >= 0:
        return md_text[:pos].count("\n") + 1
    # Pandoc escape variants
    for old, new in [("~", r"\~"), ("'", "\\'"), (">", r"-\>")]:
        escaped = search_text.replace(old, new)
        if escaped != search_text:
            pos = md_text.find(escaped)
            if pos >= 0:
                return md_text[:pos].count("\n") + 1
    # Substring fallback
    if len(search_text) > 15:
        for length in [50, 40, 30, 20, 15]:
            sub = search_text[:length]
            pos = md_text.find(sub)
            if pos >= 0:
                return md_text[:pos].count("\n") + 1
    return None


def build_context(anchor: str, para_text: str, max_wing: int = 80, offset: int = 0) -> str:
    # Try to center context on anchor text
    if anchor and len(anchor) > 5:
        idx = para_text.find(anchor)
        if idx >= 0:
            before = para_text[:idx]
            after = para_text[idx + len(anchor):]
            if len(before) > max_wing:
                before = "..." + before[-max_wing:]
            if len(after) > max_wing:
                after = after[:max_wing] + "..."
            return f"{before}{anchor}{after}".strip()
    # Fallback: center on offset position from XML with wider window and marker
    long_wing = 150
    if offset > 0 and offset < len(para_text):
        start = max(0, offset - long_wing)
        end = min(len(para_text), offset + long_wing)
        before = para_text[start:offset]
        after = para_text[offset:end]
        prefix = "..." if start > 0 else ""
        suffix = "..." if end < len(para_text) else ""
        return f"{prefix}{before}>>|<<{after}{suffix}".strip()
    # Last resort: beginning of paragraph
    return para_text.strip()[:300] + ("..." if len(para_text.strip()) > 300 else "")


# ---------------------------------------------------------------------------
# Docx XML parsing
# ---------------------------------------------------------------------------

def extract_from_docx(docx_path: str) -> dict:
    """Return {"comments": [...], "revisions": [...], "para_texts": [...]}."""
    with zipfile.ZipFile(docx_path) as z:
        # --- Comments ---
        comment_map: dict[str, dict] = {}
        if "word/comments.xml" in z.namelist():
            with z.open("word/comments.xml") as f:
                ctree = etree.parse(f)
            for c in ctree.getroot().findall(f".//{{{WNS}}}comment"):
                cid = c.get(f"{{{WNS}}}id")
                comment_map[cid] = {
                    "author": c.get(f"{{{WNS}}}author"),
                    "date": c.get(f"{{{WNS}}}date"),
                    "text": "".join(
                        t.text or "" for t in c.iter(f"{{{WNS}}}t")
                    ),
                }

        # --- Document body ---
        with z.open("word/document.xml") as f:
            dtree = etree.parse(f)
        root = dtree.getroot()
        paragraphs = root.findall(f".//{{{WNS}}}p")

        para_texts = []
        for para in paragraphs:
            para_texts.append(
                "".join(t.text or "" for t in para.iter(f"{{{WNS}}}t"))
            )

        # --- Comment ranges ---
        open_ranges: dict[str, dict] = {}
        anchor_results: dict[str, dict] = {}

        for pi, para in enumerate(paragraphs):
            events = _collect_events(para)
            active = set(open_ranges.keys())
            text_offset = 0

            for etype, val in events:
                if etype == "start":
                    open_ranges[val] = {"anchor_parts": [], "para_idx": pi, "offset": text_offset}
                    active.add(val)
                elif etype == "text":
                    for cid in active:
                        if cid in open_ranges:
                            open_ranges[cid]["anchor_parts"].append(val)
                    text_offset += len(val)
                elif etype == "end":
                    if val in open_ranges:
                        data = open_ranges.pop(val)
                        anchor = "".join(data["anchor_parts"]).strip()
                        sp = data["para_idx"]
                        if sp == pi:
                            ctx = para_texts[pi]
                        else:
                            ctx = " ".join(
                                para_texts[i].strip()
                                for i in range(sp, pi + 1)
                                if para_texts[i].strip()
                            )
                        anchor_results[val] = {
                            "anchor_text": anchor,
                            "para_text": ctx,
                            "offset": data.get("offset", 0),
                        }
                        active.discard(val)

            for cid in open_ranges:
                open_ranges[cid]["anchor_parts"].append(" ")

        # --- Track changes (insertions / deletions) ---
        revisions = _extract_revisions(paragraphs, para_texts)

    return {
        "comment_map": comment_map,
        "anchor_results": anchor_results,
        "revisions": revisions,
        "para_texts": para_texts,
    }


def _collect_events(para) -> list[tuple[str, str]]:
    events = []
    for elem in para.iter():
        tag = elem.tag.split("}")[-1] if "}" in elem.tag else elem.tag
        if tag == "commentRangeStart":
            events.append(("start", elem.get(f"{{{WNS}}}id")))
        elif tag == "commentRangeEnd":
            events.append(("end", elem.get(f"{{{WNS}}}id")))
        elif tag == "t":
            events.append(("text", elem.text or ""))
        elif tag == "delText":
            events.append(("text", elem.text or ""))
    return events


def _extract_revisions(
    paragraphs: list, para_texts: list[str]
) -> list[dict]:
    """Extract w:ins and w:del track changes."""
    revisions: list[dict] = []
    rid = 0

    for pi, para in enumerate(paragraphs):
        # Insertions
        for ins in para.findall(f".//{{{WNS}}}ins"):
            author = ins.get(f"{{{WNS}}}author")
            dt = ins.get(f"{{{WNS}}}date")
            content = "".join(
                t.text or "" for t in ins.iter(f"{{{WNS}}}t")
            ).strip()
            if not content:
                continue
            revisions.append({
                "id": f"r{rid}",
                "type": "insertion",
                "author": author,
                "date": dt,
                "content": content,
                "para_idx": pi,
                "para_text": para_texts[pi],
            })
            rid += 1

        # Deletions
        for dl in para.findall(f".//{{{WNS}}}del"):
            author = dl.get(f"{{{WNS}}}author")
            dt = dl.get(f"{{{WNS}}}date")
            content = "".join(
                t.text or "" for t in dl.iter(f"{{{WNS}}}delText")
            ).strip()
            if not content:
                continue
            revisions.append({
                "id": f"r{rid}",
                "type": "deletion",
                "author": author,
                "date": dt,
                "deleted_text": content,
                "para_idx": pi,
                "para_text": para_texts[pi],
            })
            rid += 1

    return revisions


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Extract docx comments and track changes to sidecar JSON."
    )
    parser.add_argument("docx_path", help="Path to the .docx file")
    parser.add_argument("output_dir", help="Output directory (must contain .md)")
    parser.add_argument(
        "--md-file", default=None,
        help="Name of the Markdown file in output_dir (auto-detected if omitted)",
    )
    args = parser.parse_args()

    docx_path = args.docx_path
    out_dir = args.output_dir

    # Find the Markdown file
    if args.md_file:
        md_path = os.path.join(out_dir, args.md_file)
    else:
        md_files = sorted(Path(out_dir).glob("*.md"))
        if not md_files:
            print(f"Error: no .md file found in {out_dir}", file=sys.stderr)
            sys.exit(1)
        md_path = str(md_files[0])

    md_lines, md_text = load_markdown(md_path)
    markers = build_section_markers(md_lines)

    data = extract_from_docx(docx_path)

    # Build comments
    comments_out = []
    for cid, cdata in sorted(
        data["comment_map"].items(), key=lambda x: int(x[0])
    ):
        r = data["anchor_results"].get(cid, {})
        anchor = r.get("anchor_text", "")
        para_text = r.get("para_text", "")
        offset = r.get("offset", 0)
        search_key = anchor if len(anchor) > 10 else para_text[:80]
        ml = find_md_line(md_text, search_key)
        section = find_section(markers, ml)
        context = build_context(anchor, para_text, offset=offset)

        comments_out.append({
            "id": f"c{cid}",
            "type": "comment",
            "author": cdata["author"],
            "date": cdata["date"],
            "section": section,
            "md_line": ml,
            "anchor_text": anchor if len(anchor) > 5 else None,
            "context": context,
            "comment": cdata["text"],
            "status": "pending",
        })

    # Build revisions
    revisions_out = []
    for rev in data["revisions"]:
        para_text = rev.get("para_text", "")
        if rev["type"] == "insertion":
            search_key = rev["content"] if len(rev["content"]) > 10 else para_text[:80]
            ml = find_md_line(md_text, search_key)
            section = find_section(markers, ml)
            context = build_context(rev["content"], para_text)
            revisions_out.append({
                "id": rev["id"],
                "type": "insertion",
                "author": rev["author"],
                "date": rev["date"],
                "section": section,
                "md_line": ml,
                "content": rev["content"],
                "context_accepted": context,
                "status": "pending",
            })
        elif rev["type"] == "deletion":
            search_key = para_text[:80]
            ml = find_md_line(md_text, search_key)
            section = find_section(markers, ml)
            revisions_out.append({
                "id": rev["id"],
                "type": "deletion",
                "author": rev["author"],
                "date": rev["date"],
                "section": section,
                "md_line": ml,
                "deleted_text": rev["deleted_text"],
                "context_accepted": para_text.strip()[:300],
                "status": "pending",
            })

    output = {
        "source": os.path.basename(docx_path),
        "extraction_date": str(date.today()),
        "markdown_file": os.path.basename(md_path),
        "comments": comments_out,
        "revisions": revisions_out,
    }

    json_path = os.path.join(out_dir, "review-comments.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    # Summary
    print(f"Extracted {len(comments_out)} comments, {len(revisions_out)} revisions")
    print(f"  Markdown: {md_path}")
    print(f"  JSON:     {json_path}")

    sections: dict[str, int] = {}
    for c in comments_out + revisions_out:
        s = c["section"]
        sections[s] = sections.get(s, 0) + 1
    if sections:
        print("\n  By section:")
        for s, n in sections.items():
            print(f"    {s}: {n}")

    nulls = [c["id"] for c in comments_out + revisions_out if c.get("md_line") is None]
    if nulls:
        print(f"\n  WARNING: unresolved md_line: {nulls}")


if __name__ == "__main__":
    main()
