#!/bin/bash
# compare-docx.sh - Generate a tracked-changes DOCX by comparing two documents
# Requires: WSL2 with Microsoft Word installed on the Windows side
#
# Usage: compare-docx.sh <old.docx> <new.docx> <output.docx>

set -euo pipefail

if [ $# -ne 3 ]; then
  echo "Usage: $0 <old.docx> <new.docx> <output.docx>" >&2
  exit 1
fi

OLD_DOCX="$1"
NEW_DOCX="$2"
OUT_DOCX="$3"

# Verify input files exist
for f in "$OLD_DOCX" "$NEW_DOCX"; do
  if [ ! -f "$f" ]; then
    echo "Error: File not found: $f" >&2
    exit 1
  fi
done

# Convert to absolute paths
OLD_DOCX="$(realpath "$OLD_DOCX")"
NEW_DOCX="$(realpath "$NEW_DOCX")"
OUT_DIR="$(dirname "$(realpath -m "$OUT_DOCX")")"
OUT_DOCX="$(realpath -m "$OUT_DOCX")"

if [ ! -d "$OUT_DIR" ]; then
  echo "Error: Output directory does not exist: $OUT_DIR" >&2
  exit 1
fi

# Convert WSL paths to Windows paths
OLD_WIN="$(wslpath -w "$OLD_DOCX")"
NEW_WIN="$(wslpath -w "$NEW_DOCX")"
OUT_WIN="$(wslpath -w "$OUT_DOCX")"

echo "Comparing documents..."
echo "  Old: $OLD_DOCX"
echo "  New: $NEW_DOCX"
echo "  Out: $OUT_DOCX"

# Use Word COM automation via PowerShell to compare documents
powershell.exe -NoProfile -Command "
\$ErrorActionPreference = 'Stop'
\$word = New-Object -ComObject Word.Application
\$word.Visible = \$false
try {
    \$oldDoc = \$word.Documents.Open('$OLD_WIN')
    \$newDoc = \$word.Documents.Open('$NEW_WIN')
    \$compDoc = \$word.CompareDocuments(\$oldDoc, \$newDoc)
    \$compDoc.SaveAs2('$OUT_WIN', 16)
    \$compDoc.Close([ref]\$false)
    \$oldDoc.Close([ref]\$false)
    \$newDoc.Close([ref]\$false)
    Write-Output 'OK'
} catch {
    Write-Error \$_.Exception.Message
    exit 1
} finally {
    \$word.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject(\$word) | Out-Null
}
"

if [ -f "$OUT_DOCX" ]; then
  SIZE=$(du -h "$OUT_DOCX" | cut -f1)
  echo "Success: $OUT_DOCX ($SIZE)"
else
  echo "Error: Output file was not created" >&2
  exit 1
fi