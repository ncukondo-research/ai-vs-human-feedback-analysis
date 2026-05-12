# Thematic Map

Programmatic generation of the thematic map referenced in the Qualitative Analysis Results section (Editor Comment 2, JMIR Medical Education round 2).

## Usage

```bash
bun install
bun run build       # Generate PPTX, PNG, SVG
```

Individual steps:

```bash
bun run generate    # Generate PPTX only
bun run screenshot  # Convert existing PPTX to PNG (via Windows PowerPoint)
bun run svg         # Convert existing PPTX to SVG (via Windows PowerPoint)
```

## Files

| File | Description |
|------|-------------|
| `themes_data.yaml` | Data source for the map (axes, themes, sub-themes) |
| `generate-thematic-map.ts` | PPTX generation script |
| `thematic_map.pptx` | Generated PPTX output (editable source) |
| `thematic_map.png` | Generated PNG output |
| `thematic_map.svg` | Generated SVG output (embedded in the manuscript) |

## Design

The map follows the thematic-map guidance from Ahmed et al. (2025, *Journal of Medicine, Surgery, and Public Health*; the reference cited in the editorial request). It shows:

- Research question at the top
- Two feedback-mode poles ("AI-generated feedback", "Supervisor feedback") as column headers
- Five themes (verbatim from `result/qualitative/theme_table_en_simple.csv`) with their AI and supervisor sub-themes arranged on the left and right, respectively

Design principles: generous margins; WCAG AAA color contrast for provider-coded palettes; consistent box dimensions within each role; hierarchical grouping via the proximity principle.
