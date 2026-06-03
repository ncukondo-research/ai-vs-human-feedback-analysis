# JMIR Med Educ 90064 — AQ 最終reply文（Kriyadocs貼り付け用）

決定事項反映済み。**すべての修正は AQ への reply として記載**（直接編集不可）。図はローカルで修正・再生成済み（`5_copyedit/figures_revised/`）で、Kriyadocs の各図 "Replace" でアップロードする。トラックチェンジは reject しない。所属5は既に取り消し線済みのため対応不要。

凡例: 各項目に「英語reply（貼り付け用）」を記載。番号 Q* は本フォルダ `copyedit_queries_raw.json` の index に対応。

---

## 統計値の追記

**Q1（t test 1/2-tailed, 全箇所）**
> All t tests in this study were two-tailed (two-sided), as stated in the Quantitative Analysis section ("all tests were two-sided"). No one-tailed tests were used.

**Q2（feedback length の mean に SD 併記）**
> Please add the SDs. AI feedback: mean 382.02 characters (SD 81.82). Supervisor feedback: mean 97.87 characters (SD 73.66). In the Abstract, please revise "mean 382 vs 98 characters" to "mean 382 (SD 82) vs 98 (SD 74) characters".

**Q9（median に IQR 併記; weekly clerkship log length）**
> Please revise to: "mean 675.2 characters, SD 459.8; median 551, IQR 313-1021; range 51-2342". (IQR = 25th-75th percentile.)

**Q16（consistency セクションの SD に mean 併記）**
> Please add the means of the per-clinical clerkship log mean scores: AI mean 4.32 (SD 0.51, variance 0.262); supervisor mean 3.44 (SD 1.01, variance 1.011). Suggested wording: "the per-clinical clerkship log mean score was significantly more dispersed for supervisors (mean 3.44, SD 1.01, variance 1.011) than for AI (mean 4.32, SD 0.51, variance 0.262)".

---

## P 値の表記（Q3 / Q18 / Q19 / Q39 / Q40）

**共通reply（該当する全AQに記載）**
> All P values have been formatted to two decimal places, or three decimals when P<.01, with no leading zero, per JMIR/AMA style. P values reported as 1.000 are changed to ">.99". The specific corrected values for the Cumulative Link Mixed-Effects Models table are listed below; please apply the same rule to all tables.

Cumulative Link Mixed-Effects Models 表（Table 3）の補正後の表記（uncorrected P → corrected P）:
- Criteria-based — Provider: AI: <.001 → <.001
- Criteria-based — Assessor type: student: .02 → .33
- Criteria-based — Interaction: .68 → >.99
- Clear direction — Provider: AI: <.001 → <.001
- Clear direction — Assessor type: student: .12 → >.99
- Clear direction — Interaction: .78 → >.99
- Accurate — Provider: AI: .14 → >.99
- Accurate — Assessor type: student: .008 → .13
- Accurate — Interaction: .96 → >.99
- Prioritization — Provider: AI: .007 → .10
- Prioritization — Assessor type: student: .28 → >.99
- Prioritization — Interaction: .10 → >.99
- Supportive — Provider: AI: .19 → >.99
- Supportive — Assessor type: student: .06 → .83
- Supportive — Interaction: .60 → >.99

（本文・Abstract の P<.001, P=.098, P>.99 等は既に準拠。Spearman 相関表・分散検定の P 値も同ルールで統一。）

---

## 略語の展開（Q34 / Q35 / Q38）

**Q34（API 初出, Prompt Development）**
> Please expand at first use: "...we employed the corresponding application programming interface (API) of the ChatGPT model...". Subsequent uses remain "API".

**Q35（UTF-8）**
> Please expand: "the number of Unicode (UTF-8, 8-bit Unicode Transformation Format) characters".

**Q38（MCAR）**
> Please expand: "a missingness test (such as Little missing completely at random [MCAR] test)".

---

## 不明瞭文の言い換え（Q4 / Q21）

**Q4（Introduction）**
> Please replace the sentence with: "In clinical clerkships, supervising physicians work closely with students. Their feedback can therefore draw on direct observation of student behavior, tacit professional norms, and shared patient-care experiences. These dimensions are difficult for AI to approximate, because AI has access only to the written log."

**Q21（Integration, Index 2）**
> Please replace with: "Quantitatively, AI feedback scored significantly higher than supervisor feedback on the clear-direction and criteria-based items, and showed a non-significant trend toward higher scores on the remaining items. These results were complemented by the qualitative theme of adherence to feedback criteria and structure and by the difference in text length."

---

## 節タイトル（Q12 / Q33 / Q28 / Q36 / Q37 / Q41）

**Q12（"see below" → 節名; Quantitative Analysis 内）**
> Please replace "see below" with "see the Comparison of Scores subsection".

**Q33（"see below" → 節名; Design）**
> Please replace "see below for further details of this preparation process" with "further details of this preparation process are provided in the Materials section (Generating AI Feedback and Prompt Development subsections)".

**Q28（追加見出し "Overview"; Integration of results）**
> Please change this subheading from "Overview" to "Integration Approach (Joint Display Analysis)".

**Q36（追加見出し "Overview"; Qualitative Analysis 手順）**
> Please change this subheading from "Overview" to "Analytic Procedure".

**Q37（追加見出し "Overview"; Results 冒頭）**
> Please change this subheading from "Overview" to "Dataset Overview".

**Q41（追加見出し "Overview"; Qualitative results 冒頭）**
> Please change this subheading from "Overview" to "Thematic Overview".

---

## 図（Q5 / Q11 / Q13 / Q14 / Q15 / Q17 / Q20）

いずれもローカルで修正・再生成済み（`5_copyedit/figures_revised/`）。各図の "Replace" でアップロードのうえ、以下を reply。

**Q5（Figure 1）**
> A revised Figure 1 has been uploaded. "Preparation of Feedback for Evaluation" is changed to "Preparation of feedback for evaluation", and "supervisor feedback" to "Supervisor feedback".

**Q11（Figure 2）**
> A revised Figure 2 has been uploaded: all text labels are in sentence case (eg, "Feedback generation", "Supervisor feedback", "AI feedback", "Quantitative analysis", "Qualitative analysis"); spaces around "=" are removed (eg, "n=161"); and the thousands separator is removed from four-digit numerals (3220). The numbers have been verified.

**Q13（Figure 3）**
> A revised Figure 3 has been uploaded with all text labels in sentence case (legend "Feedback provider"; categories "AI" and "Supervisor"; axis "Letter count").

**Q14（Figure 4 の厳密値）**
> The exact underlying data for Figure 4 are provided as a Multimedia Appendix (a Word document, "Multimedia Appendix 5. Figure 4 underlying data"), uploaded via the Upload file button. The table gives, for each rubric item and assessor type (faculty/student), the number of logs at each score difference (AI minus supervisor, -4 to 4), with n, mean difference, and SD. Figure 4 is retained as is.

**Q15（Figure 4 house style）**
> A revised Figure 4 has been uploaded: all text labels are in sentence case ("Assessor type", "Faculty", "Student"); "Criteria Based" is changed to "Criteria-based"; and hyphens before numerals on the x-axis are changed to the minus sign.

**Q17（Figure 5）**
> A revised Figure 5 has been uploaded with all text labels in sentence case (legend "Feedback provider"; categories "AI" and "Supervisor"; axis "Per-record mean score").

**Q20（Figure 6 画像）**
> The image for Figure 6 (thematic map) has been uploaded via the Replace button.

---

## 文献（Q8 / Q26 / Q27）

**Q8（文献[47] = R）**
> Reference [47] should be removed. Please cite R in the Methods (both the Quantitative Analysis and Qualitative Analysis sections) as "R (version 4.4.2; R Foundation for Statistical Computing)" instead of a numbered web reference.

**Q26（文献[12, 35, 48, 64] の詳細）**
> Verified against source:
> [12] Dai W, Lin J, Jin H, Li T, Tsai Y, Gašević D, Chen G. Can large language models provide feedback to students? A case study on ChatGPT. Presented at: 2023 IEEE International Conference on Advanced Learning Technologies (ICALT); Jul 10-13, 2023; Orem, UT, USA:323-325. [doi:10.1109/ICALT58122.2023.00100] — please add the page range 323-325.
> [35] Rüdian S, Podelo J, Kužílek J, Pinkwart N. Feedback on feedback: students' perceptions for feedback from teachers and few-shot LLMs. Presented at: 15th International Learning Analytics and Knowledge Conference (LAK '25); Mar 3-7, 2025; Dublin, Ireland:82-92. [doi:10.1145/3706468.3706479] — please remove the duplicated trailing date "Mar 3, 2025" and add the page range 82-92.
> [48] Zhang L, Komachi M. Neural machine translation of logographic language using sub-character level information. Presented at: Third Conference on Machine Translation: Research Papers; Oct 31-Nov 1, 2018; Brussels, Belgium:17-25. [doi:10.18653/v1/W18-6303] — please add ": Research Papers" and the page range 17-25.
> [64] Banihashem SK, Noroozi O, Khosravi H, Schunn CD, Drachsler H. Pedagogical framework for hybrid intelligent feedback. Innov Educ Teach Int. 2026;63(2):554-570. [doi:10.1080/14703297.2025.2499174] — details are correct.

**Q27（文献[41] = Jacobsen & Weber）**
> Please update with the posting date: Jacobsen LJ, Weber KE. The promises and pitfalls of ChatGPT as a feedback provider in higher education: an exploratory study of prompt engineering and the quality of AI-driven feedback. OSF Preprints. Preprint posted online September 29, 2023. [doi:10.31219/osf.io/cr257]

---

## データ共有・URL（Q22 / Q23）

**Q22（Data sharing 文）**
> Suggested statement (please apply in the Data Availability section): "The datasets generated and analyzed during this study, together with the analysis code and the source code of the AI feedback generation system, are openly available in the Zenodo repository [ref]. The original clinical clerkship logs are not publicly available because they may contain personally identifiable information about students, and their release would exceed the scope of the opt-out consent approved by the ethics committee."
> （注: 学生ログについて "available from the corresponding author on reasonable request" は記載しない。）

**Q23（本文中の URL を文献化）**
> Please remove the URL from the main text and instead cite it as a reference. The Zenodo DOI should appear in the reference list, cited in the Data Availability section. Reference details:
> Kondo T. AI-generated versus human supervisor feedback on medical students' clinical clerkship logs: open data and analysis code. Zenodo. 2026. [doi:10.5281/zenodo.18868578]
> Please apply the same change to the in-text URL in the Methods (Data Availability) wherever the Zenodo DOI currently appears as a URL.

---

## 著者・所属・メタデータ（Q0 / Q7 / Q31 / Q32）

**Q7（イニシャル NK / OS / NY / DI）**
> NK, OS, NY, and DI are not authors; they were collaborators in the rubric translation process (described in Multimedia Appendix 3). Their full names are: NK = Noriki Kamihiro (reviewer); OS = Oliver Stanyon (professional translator/adjudicator); NY = Naoki Yamada (clinical educator pretester); DI = Dai Iwata (medical student pretester).
> (1) In the Methods (Evaluation Instrument subsection), please remove the parenthetical initials and use role descriptions only: "The translations were reviewed by a medical education expert. Discrepancies were resolved by a professional translator. Pretesting involved a clinical educator and a medical student, leading to minor adjustments while preserving the original intent."
> (2) Please add the following sentence to the Acknowledgments: "We also thank Noriki Kamihiro, Oliver Stanyon, Naoki Yamada, and Dai Iwata for their contributions to the translation and pretesting of the evaluation rubric." (Naoki Yamada and Dai Iwata already appear in the evaluator acknowledgments; this additional sentence credits their separate contribution to the rubric translation.)

**Q0（所属[2]の Department）**
> Affiliation 2 (School of Health Professions Education, Maastricht University) is a school-level unit; no separate department applies.

**Q32（全所属の表示）**
> 所属5は取り消し線済みのため問題なし。残り4所属と著者対応で正しい（Kondo: 1,2 / Donkers: 2,3 / Nishigori: 1 / Rovers: 2,4 / Heeneman: 2,4）。

**Q31（メタデータ）**
> Author metadata (names, degrees, ORCID, corresponding author, email) are correct as listed. （電話番号の重複表示があれば CQ で指摘。）

---

## キャプション確認・標準クエリ（Q6 / Q10 / Q24 / Q25 / Q29 / Q30）

**Q6（図キャプション）**: 図再アップロード後、全図キャプションが本文と一致することを確認のうえ "Captions and figure content checked and correct."

**Q10（表キャプション/脚注）**: Table 1 の脚注記号（*†‡）対応を確認のうえ "Table captions, content, and footnotes checked and correct."

**Q24（全 Multimedia Appendix キャプション）**: Appendix 1-4（+新規 5）のキャプションが本文と一致することを確認のうえ "Captions of all multimedia appendices checked and correct."

**Q25（Multimedia Appendix 4 キャプション不一致）**
> Please retain this caption for Multimedia Appendix 4: "Full paired t-test results comparing AI and supervisor feedback scores on the Steiss et al five-item analytic rubric, including mean differences and uncorrected P values omitted from Table 2 for readability." Please make the caption in the appendix file match this.

**Q29（Acknowledgments）**: 評価者22名・貢献者記述・GAIDeT 開示・JSPS 25K06542 を確認のうえ "Acknowledgments statement checked and correct."（Q7 のフルネーム追記を反映）

**Q30（標準案内）**: 対応不要。必要なら "Noted, thank you. We have addressed all AQs and added CQs where applicable; no tracked changes were rejected."

---

## 追加で用意した成果物（本フォルダ）
- `figures_revised/`：Figure 1-6 の修正版 SVG + 高解像度 PNG（Replace 用）
- `Multimedia Appendix 5. Figure 4 underlying data.docx`：Q14 用データ表
- `appendix5_fig4_data.csv`：同データの CSV
- 図ソースの恒久反映: `src/analysis/quantitative/quantitative.qmd`（Fig 3-5 ラベル）、`src/assets/JARS_flowchart/generate-jars-flowchart.ts`（Fig 2）、`src/assets/flow_of_feedback_and_evaluation/flow_of_feedback_and_evaluation.svg`（Fig 1）を更新済み。
