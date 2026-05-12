# Publication Snapshot

Production-ready snapshot of "AI-generated versus human supervisor feedback on medical students' clinical clerkship logs: cross-sectional convergent mixed methods study" (JMIR Medical Education, ms#90064, accepted 2026-05-11).

This directory mirrors the files used for the final acceptance-round upload. Originals remain in their repository locations (`src/`, `submission/`); the copies here are an immutable record of what was published.

## Structure

### `source/` — manuscript source

Files needed to render the publication-version manuscript.

- `manuscript.qmd` — Quarto source (copy of `src/manuscript.qmd`). Author byline removed from the body per JMIR's final-upload requirement; metadata is supplied via the journal submission system.
- `_quarto.yml` — Quarto project configuration.
- `JMIR.csl` — Citation Style Language file for JMIR.
- `library.json` — CSL JSON reference library (only references cited in the manuscript; includes PMIDs added for the acceptance round).
- `reference.docx` — Word reference template used by Pandoc.
- `compile.sh` — Build script invoking `quarto render` and `fix_docx.py`.
- `fix_docx.py` — Post-processing for flextable OOXML compatibility.
- `custom-filters/` — Pandoc Lua filters (`meta-ref.lua`, `strip-title-author.lua`).
- `assets/`
  - `flow_of_feedback_and_evaluation/` — Figure 1 source (SVG, PPTX).
  - `JARS_flowchart/` — Figure 2 (JARS-Quant participant flowchart) source: TypeScript generator, data YAML, SVG/PNG/PPTX outputs.
  - `thematic_map/` — Figure 3 (thematic map) source: TypeScript generator, data YAML, SVG/PNG/PPTX outputs.
  - `appendix/Appendix prompt_en.txt` — English translation of the AI prompt (source for Multimedia Appendix 1).

Note: the original Quarto build expects this content under `src/...` of the repository root; paths inside `manuscript.qmd` (`../src/assets/...`) reflect that layout. To rebuild from this snapshot, place the contents back into the matching repository layout.

### `output/` — published deliverables

- `final_manuscript_no_authors.docx` — Final rendered manuscript uploaded to JMIR. Author block removed from the body, includes a Word comment on the title approving authorship as listed on the journal's preview page, and emits 48 PMID hyperlinks via the JMIR CSL.
- `multimedia_appendices/`
  - `Multimedia Appendix1. Prompt and Prompt Development.docx`
  - `Multimedia Appendix 2.feedback evaluation form.pdf`
  - `Multimedia Appendix 3. translation_process of rubric.docx`
  - `Multimedia Appendix 4. full paired t-test results.docx`

### Other

- `invoice.pdf`, `payment.png` — APC-related records (pre-existing in this directory).
