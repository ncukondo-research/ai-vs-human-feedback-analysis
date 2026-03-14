# Co-Author Review: Jeroen Donkers (2026-03-13)

## Source

Email from Jeroen Donkers (2026-03-13)

## Overall Assessment

Responded very thoroughly to reviewers' comments. Had 4 good reviewers and extensive questions by the editor.

## Comments

### 1. Comments in response letter and manuscript

**Context**: Added comments directly in the response letter (one_by_one_reply-JD.docx) and the manuscript (2026_03_13_01_study1_manuscript_JD.docx).

**Action**: See manuscript-review-comments.json and reply-review-comments.json for extracted comments.

### 2. Table 4 issue

**Context**: Table 4 seems a bit broken.

**Action**: Check and fix Table 4 in the manuscript.

## Changes Applied (2026-03-14)

All comments have been addressed. Status updated in both JSON files.

### Manuscript changes (`src/manuscript.qmd`)

| Comment | Issue | Resolution |
|---------|-------|------------|
| c28 | JARS not needed in Figure 2 caption | Removed "Journal Article Reporting Standards (JARS)" from caption |
| c36 | Cohen d header needs line break | Added `\n` in Table 2 header: "Cohen d\n(95% CI)" and "Corrected\nP value" |
| c41 | "Corrected P value" needs line break | Added `\n` in Table 4 merged header row |
| c46 | Table 4 supervisor rows shifted | Added `select(-p_uncorrected)` before `pivot_wider` to fix row merging |
| c50 | Table 5 headers/layout need improvement | Added line breaks to all headers; set custom column widths |

### Reply document changes (`one_by_one_reply.md`)

| Comment | Issue | Resolution |
|---------|-------|------------|
| r0 | "mixed models" should be "mixed effect models" | Inserted "effect" in Editor Comment.3 response |
| c27 | Add note about testing multiple prompts | Added sentence about pilot prompt testing and AI+prompt inseparability to F4 response |
| c32 | Add table number reference | Added "of Table 7 (Joint Display)" to F6 response |

### No action needed (positive feedback)

| Comment | Section | Feedback |
|---------|---------|----------|
| c26 | F4 | AI+prompt inseparability acknowledged (reflected in c27 edit) |
| c30 | F5 | "Excellent analysis and response" |
| c45 | G5 | Cohen's d not ideal for text lengths but acceptable if reviewer requests |
| c53 | H3 | "Good point, good response!" |

### Regenerated files

- `submission/.../one_by_one_reply.docx` — regenerated from updated markdown
- `submission/.../new_2026_03_14_study1_manuscript.docx` — from fresh compile
- `submission/.../tracked_changes.docx` — regenerated with all manuscript changes
