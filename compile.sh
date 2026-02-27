#!/bin/bash
set -e

# Get the current date
current_date=$(date +"%Y_%m_%d")

# Define the input and output files
input_file="./src/manuscript.qmd"
base_name=$(basename "$input_file" .qmd)
output_file="history/${current_date}_study1_${base_name}.docx"

# Render the manuscript.qmd to manuscript.docx using quarto
quarto render "$input_file" --to docx

# Create the history directory if it doesn't exist
mkdir -p "$(dirname "$output_file")"

# Move and rename the generated manuscript.docx to the output_file location
mv ${base_name}.docx "$output_file"
echo "Manuscript compiled and saved to $output_file"
