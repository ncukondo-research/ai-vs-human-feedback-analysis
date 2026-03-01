#!/bin/bash
set -e

# --- Environment setup ---
# Add Homebrew lib paths so the dynamic linker can find shared libraries
# (e.g., libxml2.so.16 for xml2, libharfbuzz for ragg).
# These paths are harmless when they do not exist (e.g., in devcontainer).
export LD_LIBRARY_PATH="/home/linuxbrew/.linuxbrew/lib${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"

# --- Pre-build cleanup ---
# Remove stale lock directories left by failed package installs.
if ls renv/library/*/*/*/*/00LOCK-* 1>/dev/null 2>&1; then
  echo "[compile] Removing stale 00LOCK-* directories..."
  rm -rf renv/library/*/*/*/*/00LOCK-*
fi

# Remove broken package directories (empty dirs without DESCRIPTION).
for pkg_dir in renv/library/*/*/*/*/; do
  pkg_name=$(basename "$pkg_dir")
  case "$pkg_name" in 00LOCK-*|.|..) continue ;; esac
  if [ -d "$pkg_dir" ] && [ ! -f "$pkg_dir/DESCRIPTION" ]; then
    echo "[compile] Removing broken package directory: $pkg_dir"
    rm -rf "$pkg_dir"
  fi
done

# Ensure all renv-locked packages are installed.
# Use --no-init-file to skip .Rprofile (which loads packages not yet installed).
echo "[compile] Ensuring renv packages are up to date..."
Rscript --no-init-file -e 'source("renv/activate.R"); renv::restore(prompt = FALSE)'

# --- Build ---
current_date=$(date +"%Y_%m_%d")

input_file="./src/manuscript.qmd"
base_name=$(basename "$input_file" .qmd)
output_file="history/${current_date}_study1_${base_name}.docx"

quarto render "$input_file" --to docx

# Quarto outputs to result/ directory (configured in _quarto.yml output-dir)
rendered_file="result/src/${base_name}.docx"

mkdir -p "$(dirname "$output_file")"
mv "${rendered_file}" "$output_file"
echo "Manuscript compiled and saved to $output_file"
