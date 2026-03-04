---
name: tracked-changes
description: Generate a tracked-changes DOCX by comparing old and new manuscript versions using Word's CompareDocuments
argument-hint: [old.docx new.docx [output.docx]]
allowed-tools: Bash, Read, Glob, Grep, AskUserQuestion
---

# Generate Tracked-Changes DOCX

Compare two DOCX files and produce a new DOCX with Word tracked changes (redline).

## Procedure

1. Determine the old and new DOCX file paths from `$ARGUMENTS`. If arguments are missing or ambiguous, use Glob to search for candidate DOCX files and ask the user to confirm.
2. If no output path is specified, default to `tracked_changes.docx` in the same directory as the new DOCX.
3. Run the comparison script:

```
bash .claude/skills/tracked-changes/compare-docx.sh <old.docx> <new.docx> <output.docx>
```

4. Report the result to the user, including the output file path and size.

## Requirements

- WSL2 environment with Microsoft Word installed on the Windows side
- Both input files must be DOCX format