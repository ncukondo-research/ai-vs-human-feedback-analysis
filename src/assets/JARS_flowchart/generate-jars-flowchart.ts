import PptxGenJS from "pptxgenjs";
import { parse } from "yaml";
import { readFileSync } from "fs";

// --- Load data ---
const raw = readFileSync("participant_flowchart_data.yaml", "utf-8");
const data = parse(raw);

// --- Presentation setup ---
const pres = new PptxGenJS();
pres.defineLayout({ name: "JARS", width: 11, height: 8.5 });
pres.layout = "JARS";
pres.title = "JARS-Quant Participant Flow Diagram";

const slide = pres.addSlide();

// --- Style constants (matching JARS sample) ---
const FONT = "Arial";
const BLACK = "000000";
const WHITE = "FFFFFF";
const LABEL_PINK = "F4C2C2"; // salmon/pink for stage labels
const BORDER: PptxGenJS.ShapeLineProps = { color: BLACK, width: 0.75 };
const ARROW: PptxGenJS.ShapeLineProps = {
  color: BLACK,
  width: 1,
  endArrowType: "triangle",
};
const LINE: PptxGenJS.ShapeLineProps = { color: BLACK, width: 1 };
const RADIUS = 0.08; // rounded corner radius

// --- Layout grid ---
// Main flow centered at cx=3.8 (left of page center, room for exclusion box)
const MAIN_CX = 3.8;
const MAIN_W = 3.4;
const MAIN_X = MAIN_CX - MAIN_W / 2;

// Exclusion box (right side)
const EXCL_X = 6.5;
const EXCL_W = 3.5;

// Split columns (symmetric around MAIN_CX)
const SPLIT_OFF = 1.7;
const SPLIT_W = 2.6;
const LEFT_CX = MAIN_CX - SPLIT_OFF;
const RIGHT_CX = MAIN_CX + SPLIT_OFF;
const LEFT_X = LEFT_CX - SPLIT_W / 2;
const RIGHT_X = RIGHT_CX - SPLIT_W / 2;

// Stage labels (centered on flow spine)
const STAGE_W = 2.4;
const STAGE_X = MAIN_CX - STAGE_W / 2;
const STAGE_H = 0.32;

// --- Helper: content box (rounded rectangle shape + text overlay) ---
// Shape and text are separate layers to prevent text distortion from roundRect.
function addBox(
  x: number,
  y: number,
  w: number,
  h: number,
  text: string | PptxGenJS.TextProps[],
  opts: Partial<PptxGenJS.TextPropsOptions> = {}
) {
  slide.addShape(pres.ShapeType.roundRect, {
    x,
    y,
    w,
    h,
    fill: { color: WHITE },
    line: BORDER,
    rectRadius: RADIUS,
  });
  slide.addText(text, {
    x,
    y,
    w,
    h,
    fontSize: 9,
    fontFace: FONT,
    color: BLACK,
    align: "left",
    valign: "middle",
    margin: [4, 8, 4, 8],
    wrap: true,
    ...opts,
  });
}

// --- Helper: stage label (pink rounded rectangle shape + text overlay) ---
function addStageLabel(y: number, label: string) {
  slide.addShape(pres.ShapeType.roundRect, {
    x: STAGE_X,
    y,
    w: STAGE_W,
    h: STAGE_H,
    fill: { color: LABEL_PINK },
    line: BORDER,
    rectRadius: RADIUS,
  });
  slide.addText(label, {
    x: STAGE_X,
    y,
    w: STAGE_W,
    h: STAGE_H,
    fontSize: 11,
    fontFace: FONT,
    bold: true,
    color: BLACK,
    align: "center",
    valign: "middle",
  });
}

// --- Helper: arrows / lines ---
function arrowDown(cx: number, y1: number, y2: number) {
  slide.addShape(pres.ShapeType.line, {
    x: cx,
    y: y1,
    w: 0,
    h: y2 - y1,
    line: ARROW,
  });
}

function arrowRight(x1: number, cy: number, x2: number) {
  slide.addShape(pres.ShapeType.line, {
    x: x1,
    y: cy,
    w: x2 - x1,
    h: 0,
    line: ARROW,
  });
}

function lineDown(cx: number, y1: number, y2: number) {
  slide.addShape(pres.ShapeType.line, {
    x: cx,
    y: y1,
    w: 0,
    h: y2 - y1,
    line: LINE,
  });
}

function lineH(x1: number, cy: number, x2: number) {
  slide.addShape(pres.ShapeType.line, {
    x: x1,
    y: cy,
    w: x2 - x1,
    h: 0,
    line: LINE,
  });
}

// ================================================================
// DATA
// ================================================================
const enroll = data.enrollment;
const excl = data.exclusion;
const fb = data.feedback_generation;
const evalR = data.evaluator_recruitment;
const analysis = data.analysis;

// ================================================================
// ROW 1: ASSESSED FOR ELIGIBILITY
// ================================================================
const r1y = 0.3;
const r1h = 0.5;

addBox(
  MAIN_X,
  r1y,
  MAIN_W,
  r1h,
  `Assessed for eligibility\n(n = ${enroll.logs_collected.total} logs from ${enroll.students.total} students)`,
  { align: "center" }
);

// Excluded box (right side, taller to fit text)
const exclH = 0.7;
const exclY = r1y + r1h / 2 - exclH / 2; // vertically centered with Assessed box
addBox(EXCL_X, exclY, EXCL_W, exclH, [
  {
    text: `Excluded (total n = ${excl.logs_excluded.total}) because\n`,
    options: { fontSize: 9, bold: true },
  },
  {
    text: `Did not meet inclusion criteria (n = ${excl.logs_excluded.total})\n`,
    options: { fontSize: 8 },
  },
  {
    text: excl.logs_excluded.reason,
    options: { fontSize: 8, italic: true },
  },
]);

arrowRight(MAIN_X + MAIN_W, r1y + r1h / 2, EXCL_X);

// ================================================================
// ENROLLMENT LABEL
// ================================================================
const el_y = 1.2;
arrowDown(MAIN_CX, r1y + r1h, el_y);
addStageLabel(el_y, "Enrollment");

// ================================================================
// ROW 2: ELIGIBLE LOGS
// ================================================================
const r2y = 1.7;
const r2h = 0.4;

arrowDown(MAIN_CX, el_y + STAGE_H, r2y);
addBox(MAIN_X, r2y, MAIN_W, r2h, `Eligible logs (n = ${excl.logs_remaining})`, {
  align: "center",
});

// ================================================================
// FEEDBACK GENERATION LABEL
// ================================================================
const fl_y = 2.25;
arrowDown(MAIN_CX, r2y + r2h, fl_y);
addStageLabel(fl_y, "Feedback Generation");

// ================================================================
// ROW 3: SPLIT — SUPERVISOR / AI FEEDBACK
// ================================================================
const r3y = 2.85;
const r3h = 0.8;

// Split: line down from label, horizontal bar, arrows to each arm
const sj1 = fl_y + STAGE_H + 0.12;
lineDown(MAIN_CX, fl_y + STAGE_H, sj1);
lineH(LEFT_CX, sj1, RIGHT_CX);
arrowDown(LEFT_CX, sj1, r3y);
arrowDown(RIGHT_CX, sj1, r3y);

addBox(LEFT_X, r3y, SPLIT_W, r3h, [
  { text: "Supervisor Feedback\n", options: { fontSize: 10, bold: true } },
  { text: `(n = ${fb.supervisor_feedback.total})\n`, options: { fontSize: 9 } },
  { text: fb.supervisor_feedback.description, options: { fontSize: 8 } },
]);

addBox(RIGHT_X, r3y, SPLIT_W, r3h, [
  { text: "AI Feedback\n", options: { fontSize: 10, bold: true } },
  { text: `(n = ${fb.ai_feedback.total})\n`, options: { fontSize: 9 } },
  { text: fb.ai_feedback.model, options: { fontSize: 8 } },
]);

// Within-subjects annotation
slide.addText(
  "Within-subjects design:\neach log receives both\nfeedback types",
  {
    x: RIGHT_X + SPLIT_W + 0.2,
    y: r3y + 0.15,
    w: 2.2,
    h: 0.6,
    fontSize: 8,
    fontFace: FONT,
    italic: true,
    color: "666666",
    align: "left",
    valign: "top",
  }
);

// ================================================================
// ROW 4: MERGE — DATASETS ASSEMBLED
// ================================================================
const r4y = 4.0;
const r4h = 0.4;

// Merge: lines down from both arms, horizontal bar, arrow to center
const mj1 = r3y + r3h + 0.12;
lineDown(LEFT_CX, r3y + r3h, mj1);
lineDown(RIGHT_CX, r3y + r3h, mj1);
lineH(LEFT_CX, mj1, RIGHT_CX);
arrowDown(MAIN_CX, mj1, r4y);

addBox(
  MAIN_X,
  r4y,
  MAIN_W,
  r4h,
  `Paired datasets assembled (n = ${fb.datasets_assembled})`,
  { align: "center" }
);

// ================================================================
// EVALUATION LABEL
// ================================================================
const evl_y = 4.6;
arrowDown(MAIN_CX, r4y + r4h, evl_y);
addStageLabel(evl_y, "Evaluation");

// ================================================================
// ROW 5: EVALUATORS
// ================================================================
const r5y = 5.1;
const r5h = 0.65;

arrowDown(MAIN_CX, evl_y + STAGE_H, r5y);
addBox(MAIN_X, r5y, MAIN_W, r5h, [
  { text: "Evaluators\n", options: { fontSize: 10, bold: true } },
  {
    text: `${evalR.faculty.recruited} faculty + ${evalR.students.recruited} students\n`,
    options: { fontSize: 9 },
  },
  { text: "Blinded to feedback source", options: { fontSize: 8 } },
]);

// ================================================================
// ANALYSIS LABEL
// ================================================================
const al_y = 5.95;
arrowDown(MAIN_CX, r5y + r5h, al_y);
addStageLabel(al_y, "Analysis");

// ================================================================
// ROW 6: SPLIT — QUANTITATIVE / QUALITATIVE
// ================================================================
const r6y = 6.55;
const r6h = 0.8;

// Split: line down from label, horizontal bar, arrows to each arm
const sj2 = al_y + STAGE_H + 0.12;
lineDown(MAIN_CX, al_y + STAGE_H, sj2);
lineH(LEFT_CX, sj2, RIGHT_CX);
arrowDown(LEFT_CX, sj2, r6y);
arrowDown(RIGHT_CX, sj2, r6y);

addBox(LEFT_X, r6y, SPLIT_W, r6h, [
  { text: "Quantitative Analysis\n", options: { fontSize: 10, bold: true } },
  {
    text: `n = ${analysis.quantitative.logs_analyzed} logs\n`,
    options: { fontSize: 9 },
  },
  {
    text: `${analysis.quantitative.total_observations.toLocaleString()} observations`,
    options: { fontSize: 8 },
  },
]);

addBox(RIGHT_X, r6y, SPLIT_W, r6h, [
  { text: "Qualitative Analysis\n", options: { fontSize: 10, bold: true } },
  {
    text: `n = ${analysis.qualitative.logs_analyzed} logs\n`,
    options: { fontSize: 9 },
  },
  { text: analysis.qualitative.method, options: { fontSize: 8 } },
]);

// === Save ===
await pres.writeFile({ fileName: "jars-quant-participant-flowchart.pptx" });
console.log("Done: jars-quant-participant-flowchart.pptx");
