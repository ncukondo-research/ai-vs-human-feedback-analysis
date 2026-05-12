import PptxGenJS from "pptxgenjs";
import { parse } from "yaml";
import { readFileSync } from "fs";

// ================================================================
// DATA
// ================================================================
interface ThemeData {
  name: string;
  ai: string[];
  supervisor: string[];
}
interface MapData {
  title: string;
  research_question: string;
  ai_pole: string;
  supervisor_pole: string;
  themes: ThemeData[];
}

const raw = readFileSync("themes_data.yaml", "utf-8");
const data = parse(raw) as MapData;

// ================================================================
// PRESENTATION SETUP
// ================================================================
const PAGE_W = 10;
const PAGE_H = 8.5;

const pres = new PptxGenJS();
pres.defineLayout({ name: "TM", width: PAGE_W, height: PAGE_H });
pres.layout = "TM";
pres.title = "Thematic map of AI vs supervisor feedback differences";

const slide = pres.addSlide();

// ================================================================
// STYLE CONSTANTS
// ================================================================
const FONT = "Arial";

// Provider-coded palette (WCAG AAA contrast for text on fill)
const AI_FILL = "D8E6F3";    // light blue
const AI_TEXT = "1F3A5F";    // dark navy
const AI_BORDER = "2E5A8A";  // medium blue

const SUP_FILL = "F5E0CB";   // light amber
const SUP_TEXT = "6B3410";   // dark brown
const SUP_BORDER = "8B5A2B"; // medium brown

const THEME_FILL = "F7F7F7";
const THEME_BORDER = "4A4A4A";
const THEME_TEXT = "1A1A1A";

const TITLE_FILL = "FFFFFF";
const TITLE_BORDER = "1A1A1A";
const TITLE_TEXT = "1A1A1A";

const RADIUS = 0.06;

// ================================================================
// LAYOUT CONSTANTS
// ================================================================
const MARGIN_X = 0.3;
const MARGIN_Y_TOP = 0.2;
const MARGIN_Y_BOT = 0.2;

const CONTENT_X = MARGIN_X;
const CONTENT_W = PAGE_W - 2 * MARGIN_X; // 9.4

const COL_GAP = 0.08;
const AI_COL_X = CONTENT_X;
const AI_COL_W = 3.2;
const THEME_COL_X = AI_COL_X + AI_COL_W + COL_GAP;
const THEME_COL_W = 2.72;
const SUP_COL_X = THEME_COL_X + THEME_COL_W + COL_GAP;
const SUP_COL_W = 3.2;

const TITLE_H = 0.55;
const POLE_H = 0.40;
const SUB_BOX_H = 0.53;
const SUB_BOX_GAP = 0.06;
const ROW_GAP = 0.12;
const SECTION_GAP = 0.14;

// ================================================================
// HELPERS
// ================================================================
function addBox(
  x: number,
  y: number,
  w: number,
  h: number,
  text: string,
  opts: {
    fill: string;
    border: string;
    textColor: string;
    fontSize: number;
    bold?: boolean;
    align?: "left" | "center" | "right";
    valign?: "top" | "middle" | "bottom";
    lineWidth?: number;
  }
) {
  slide.addShape(pres.ShapeType.roundRect, {
    x,
    y,
    w,
    h,
    fill: { color: opts.fill },
    line: { color: opts.border, width: opts.lineWidth ?? 0.75 },
    rectRadius: RADIUS,
  });
  slide.addText(text, {
    x,
    y,
    w,
    h,
    fontSize: opts.fontSize,
    fontFace: FONT,
    bold: opts.bold ?? false,
    color: opts.textColor,
    align: opts.align ?? "center",
    valign: opts.valign ?? "middle",
    margin: [3, 6, 3, 6],
    wrap: true,
  });
}

// ================================================================
// LAYOUT
// ================================================================
let curY = MARGIN_Y_TOP;

// --- Title / research question ---
addBox(CONTENT_X, curY, CONTENT_W, TITLE_H, data.research_question, {
  fill: TITLE_FILL,
  border: TITLE_BORDER,
  textColor: TITLE_TEXT,
  fontSize: 13,
  bold: true,
  align: "center",
  lineWidth: 1.25,
});
curY += TITLE_H + SECTION_GAP;

// --- Pole headers ---
const poleY = curY;
addBox(AI_COL_X, poleY, AI_COL_W, POLE_H, data.ai_pole, {
  fill: AI_FILL,
  border: AI_BORDER,
  textColor: AI_TEXT,
  fontSize: 12,
  bold: true,
  lineWidth: 1,
});
addBox(SUP_COL_X, poleY, SUP_COL_W, POLE_H, data.supervisor_pole, {
  fill: SUP_FILL,
  border: SUP_BORDER,
  textColor: SUP_TEXT,
  fontSize: 12,
  bold: true,
  lineWidth: 1,
});
curY += POLE_H + SECTION_GAP;

// --- Theme rows ---
for (let t = 0; t < data.themes.length; t++) {
  const theme = data.themes[t];
  const nAi = theme.ai.length;
  const nSup = theme.supervisor.length;
  const nMax = Math.max(nAi, nSup);
  const rowH = nMax * SUB_BOX_H + (nMax - 1) * SUB_BOX_GAP;

  // Theme box (middle column) — spans full row height
  addBox(THEME_COL_X, curY, THEME_COL_W, rowH, theme.name, {
    fill: THEME_FILL,
    border: THEME_BORDER,
    textColor: THEME_TEXT,
    fontSize: 11,
    bold: true,
  });

  // AI sub-themes
  theme.ai.forEach((st, i) => {
    const y = curY + i * (SUB_BOX_H + SUB_BOX_GAP);
    addBox(AI_COL_X, y, AI_COL_W, SUB_BOX_H, st, {
      fill: AI_FILL,
      border: AI_BORDER,
      textColor: AI_TEXT,
      fontSize: 10,
      align: "left",
    });
  });

  // Supervisor sub-themes
  theme.supervisor.forEach((st, i) => {
    const y = curY + i * (SUB_BOX_H + SUB_BOX_GAP);
    addBox(SUP_COL_X, y, SUP_COL_W, SUB_BOX_H, st, {
      fill: SUP_FILL,
      border: SUP_BORDER,
      textColor: SUP_TEXT,
      fontSize: 10,
      align: "left",
    });
  });

  curY += rowH;
  if (t < data.themes.length - 1) curY += ROW_GAP;
}

// ================================================================
// SAVE
// ================================================================
pres.writeFile({ fileName: "thematic_map.pptx" }).then((file) => {
  console.log(`Wrote ${file}`);
  console.log(`Final content height: ${(curY + MARGIN_Y_BOT).toFixed(2)} / ${PAGE_H}`);
});
