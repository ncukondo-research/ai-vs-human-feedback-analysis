# JARS-Quant Participant Flowchart

Programmatic generation of a JARS-Quant compliant participant flowchart using PptxGenJS (Editor Comment 5).

## Usage

```bash
bun install
bun run build       # Generate PPTX and convert to PNG
```

Individual steps:

```bash
bun run generate    # Generate PPTX only
bun run screenshot  # Convert existing PPTX to PNG (via Windows PowerPoint)
```

## Files

| File | Description |
|------|-------------|
| `participant_flowchart_data.yaml` | Data source for the flowchart |
| `generate-jars-flowchart.ts` | PPTX generation script |
| `sample-jars-quant-participant-flowchart.pdf` | APA JARS-Quant template (reference) |
| `jars-quant-participant-flowchart.pptx` | Generated PPTX output |
| `jars-quant-participant-flowchart.png` | Generated PNG output |

## Design

Adapted from the APA JARS-Quant Figure 2 template for a within-subjects design:

- Pink rounded stage labels (Enrollment → Feedback Generation → Evaluation → Analysis)
- Split/merge pattern for Supervisor Feedback and AI Feedback to represent within-subjects design
- Split into Quantitative and Qualitative Analysis at the bottom
