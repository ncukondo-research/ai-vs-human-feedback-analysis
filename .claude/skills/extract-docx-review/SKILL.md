---
name: extract-docx-review
description: Extract comments and track changes from a .docx file into clean Markdown plus a sidecar JSON. Use when the user provides a reviewed/annotated docx file and wants to process co-author feedback.
argument-hint: <docx-path> <output-directory>
allowed-tools: Bash(pandoc *), Bash(python3 *), Bash(mkdir *), Bash(ls *), Read, Write, Glob
---

# Extract Docx Review Comments and Revisions

Input: $ARGUMENTS

## Purpose

Convert a reviewed .docx file (with comments and/or track changes) into:
1. **Clean Markdown** (changes accepted) for editing
2. **Sidecar JSON** recording all comments and revisions with position anchors

Each comment/revision is linked back to the Markdown via `section`, `md_line`, `anchor_text`, and `context`.

## Workflow

### Step 1: Parse arguments

Extract from `$ARGUMENTS`:
- **docx-path**: Path to the .docx file
- **output-directory**: Where to place the output files

If output-directory is not provided, prompt the user.

### Step 2: Convert to Markdown

```bash
pandoc "<docx-path>" -t markdown --wrap=none -o "<output-dir>/<name>.md"
```

### Step 3: Extract comments and revisions

Run the extraction script bundled with this skill:

```bash
python3 .claude/skills/extract-docx-review/extract.py "<docx-path>" "<output-dir>"
```

The script:
- Parses `word/comments.xml` for comment text, author, date
- Parses `word/document.xml` for `commentRangeStart`/`commentRangeEnd` anchors and `w:ins`/`w:del` track changes
- Matches each anchor to the Markdown output to determine `md_line` and `section`
- Outputs a JSON file alongside the Markdown

### Step 4: Verify and report

1. Read the generated JSON and confirm all comments have valid `md_line` values
2. Fix any `null` md_line entries by manually finding the text in the Markdown
3. Report a summary to the user:
   - Total comments and revisions extracted
   - Breakdown by section
   - Any entries that could not be anchored

## Output format

### Sidecar JSON structure

```json
{
  "source": "<original docx filename>",
  "extraction_date": "YYYY-MM-DD",
  "markdown_file": "<markdown filename>",
  "comments": [
    {
      "id": "c0",
      "type": "comment",
      "author": "Author Name",
      "date": "ISO-8601",
      "section": "Background",
      "md_line": 29,
      "anchor_text": "the text the comment was placed on",
      "context": "...surrounding text providing location context...",
      "comment": "The reviewer's comment text",
      "status": "pending"
    }
  ],
  "revisions": [
    {
      "id": "r0",
      "type": "insertion|deletion|replacement",
      "author": "Author Name",
      "date": "ISO-8601",
      "section": "Methods",
      "md_line": 95,
      "content": "inserted text (for insertion)",
      "deleted_text": "removed text (for deletion/replacement)",
      "new_text": "replacement text (for replacement)",
      "context_accepted": "...text as it appears in the accepted Markdown...",
      "anchor_before": "text immediately before the change",
      "anchor_after": "text immediately after the change",
      "status": "pending"
    }
  ]
}
```

### Field definitions

| Field | Description |
|-------|-------------|
| `section` | Nearest preceding section heading in the Markdown |
| `md_line` | 1-indexed line number in the Markdown file |
| `anchor_text` | The exact text the comment range covers; `null` if the range was too short (e.g., a period) |
| `context` | Surrounding paragraph text centered on the anchor; full paragraph excerpt if anchor is short |
| `status` | Tracking field for response workflow: `pending` → `addressed` → `resolved` |

## Section detection

The docx may not use Word heading styles. Detect sections by matching known heading patterns at the start of Markdown lines. Build a `(line_number, section_name)` list from the Markdown, then for each comment find the nearest preceding section.

## Handling short anchors

When a comment is placed on very short text (punctuation, single characters), set `anchor_text` to `null` and populate `context` with the first 300 characters of the containing paragraph.

## Dependencies

- `pandoc` (for docx-to-markdown conversion)
- `python3` with `lxml` (for XML parsing; standard on most systems)
