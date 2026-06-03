# JMIR Med Educ 90064 — Copyediting (Author Revisions) 対応ドラフト

作成日: 2026-06-03 / 対象: Kriyadocs proof_review（コピーエディット段階）

本ファイルは Kriyadocs 上の校正（コピーエディット）に対応するための作業メモと回答ドラフトです。
**確認・下書きまで**の段階であり、Kriyadocs への入力・Approve・Submit は未実施です。

---

## 0. 全体状況と方針

- クエリ（Author Query / AQ）カード: **42 件**（うち Pre-editor 6 件、Copyeditor 約 36 件）。「unresolved」表示は 26 件。
- トラックチェンジ（コピーエディタの編集）: **749 件**（削除 699・書式 35・挿入 15）。
- 重要ルール（Q30, コピーエディタ Indumathi より）:
  - **トラックチェンジは reject しない**。異議がある場合は reject せず、コピーエディタ宛クエリ（CQ）を立てる。
  - 直接編集できない項目（メタデータ・所属・図など）は、クエリへの「返信」として変更内容を記載すれば、最終編集段階（Copyediting Final）でコピーエディタが反映する。
  - 期限は 2〜3 営業日。延長が必要なら連絡。

### 先に確認すべき横断的な問題（プルーフ表示で気づいた点）
- **所属(affiliation)の重複**: プルーフ著者欄に「5 Center for Medical Education, Nagoya University ... Nagoya city, Aichi, Japan, 65, Tsurumai-cho ...」という**所属 5 が重複表示**されている（所属 1 と実質同一）。原稿(qmd)では所属は 4 件（nagoya / SHE Maastricht / ERD Maastricht / Pathology Maastricht）のみ。→ Q32 への返信で「所属 5 を削除し、所属 1 に統合」を依頼する。
- 責任著者ブロックに電話番号(81 52 741 2111)が重複している箇所がある。→ Q31/Q32 で確認。

凡例: 【回答可】=この場で英語回答案を確定可 / 【著者判断】=近藤先生の確認・決定が必要 / 【要作業】=原稿・図の修正や再アップロードが必要

---

## A. 統計値の提示（数値は結果CSVから抽出済み・回答可）

### Q1 — t test は 1-tailed か 2-tailed か（全箇所）【回答可】
Methods に「all tests were two-sided」と明記済み。
- 返信案: "All t tests were two-tailed (two-sided), as stated in the Quantitative Analysis section. We have ensured this is explicit in each instance."

### Q2 — mean に SD を併記（feedback length）【回答可】
出典: `result/quantitative/paired_ttest_length_results.csv`
- AI: mean 382.02 characters, **SD 81.82**
- Supervisor: mean 97.87 characters, **SD 73.66**
- 返信/修正案（Abstract・Results 双方）: "mean 382.02 (SD 81.82) vs 97.87 (SD 73.66) characters"
  - Abstract の "mean 382 vs 98 characters" → "mean 382 (SD 82) vs 98 (SD 74) characters" に更新。

### Q9 — median に IQR を併記【回答可】
出典: `result/quantitative/log_characteristics.csv`（weekly clerkship log length, n=161）
- median 551, **IQR 313–1021**（mean 675.2, SD 459.8, range 51–2342）
- 修正案（Results 冒頭）: "...（mean 675.2 characters, SD 459.8; median 551, IQR 313–1021; range 51–2342）"
- ※ 他に median を報告している箇所があれば同様に IQR を併記。

### Q16 — SD に mean を併記（consistency セクション）【回答可】
現状: "supervisors (Var=1.011, SD=1.005) ... AI (Var=0.262, SD=0.512)"。
per-record mean rubric score の平均を併記する（出典: `mean_score_by_record_person.csv` から算出）。
- AI: **mean 4.32**, SD 0.51 (Var 0.262)
- Supervisor: **mean 3.44**, SD 1.01 (Var 1.011)
- 修正案: "The per–clinical clerkship log mean score was significantly more dispersed for supervisors (mean 3.44, SD 1.01, Var 1.011) than for AI (mean 4.32, SD 0.51, Var 0.262)..."

### Q3 / Q19 / Q39 — P 値の表記（2桁、P<.01 は3桁）【要作業・回答可】
JMIR/AMA ルール: 小数2桁。ただし P<.01 や丸めで有意性が変わる場合は3桁。先頭ゼロなし。
- 本文・Abstract の `P<.001`, `P=.098`, `P>.99` は既に準拠。
- **CLMM 表 (`clmm_summary_formatted_bonferroni.csv`) の補正 P 値が要修正**:
  - 0.125→.13 / 0.328→.33 / 0.833→.83 / 0.098→.10 / 0.008→.008（<.01 は3桁）/ 0.022→.02 / 0.056→.06 / 0.142→.14 / 0.189→.19 / 0.281→.28 / 0.780→.78 / 0.956→.96 / 0.684→.68 / 0.097→.10 / 0.120→.12 / 0.956→.96 / 0.603→.60 / 0.007→.007
  - 先頭ゼロを削除し小数2桁（<.01 は3桁）に統一。
- 返信案: "All P values have been reformatted to two decimal places (three when P<.01), without a leading zero, per JMIR/AMA style. Revised values are listed in the updated tables."

### Q18 / Q40 — P=1.000 は ">.99" に【要作業・回答可】
CLMM 表で補正 P=1.000 の行（Accurate: provider/interaction, Clear Direction: assessor/interaction, Criteria Based: interaction, Prioritization: assessor/interaction, Supportive: provider/interaction など）。
- 全て `1.000` → **`>.99`** に置換。本文は既に ">.99" 表記。
- 返信案: "P values reported as 1.000 have been changed to '>.99' in all instances (text and tables)."

---

## B. 文章の言い換え・節タイトル（ドラフト済み）

### Q4 — 意味が不明瞭、要言い換え（Introduction）【著者判断・案あり】
対象: "In clinical clerkships, supervising physicians work closely with students, allowing feedback to draw on direct observation of behaviors, tacit professional norms, and shared patient care experiences, dimensions that may be difficult to approximate when using AI."
- 言い換え案: "In clinical clerkships, supervising physicians work closely with students. Their feedback can therefore draw on direct observation of student behavior, tacit professional norms, and shared patient-care experiences. These dimensions are difficult for AI to approximate, because AI has access only to the written log."

### Q21 — 意味が不明瞭、要言い換え（Integration / Index 2）【著者判断・案あり】
対象: "The quantitative results showing AI feedback scored significantly higher in clear direction and criteria-based categories, with higher trends in other rubric items, were complemented by qualitative findings regarding adherence to feedback criteria and structure, as well as text length."
- 言い換え案: "Quantitatively, AI feedback scored significantly higher than supervisor feedback on the clear-direction and criteria-based items, and showed a non-significant trend toward higher scores on the remaining items. These results were complemented by the qualitative theme of adherence to feedback criteria and structure and by the difference in text length."

### Q12 — "see below" を適切な節タイトルに（Quantitative Analysis 内）【回答可】
"cumulative link mixed-effects models (see below)" の "see below" を具体節名に。
- 修正案: "see below" → "see the Comparison of Scores subsection".

### Q33 — "see below" を適切な節タイトルに（Design）【回答可】
"...generated feedback using AI on the clinical clerkship logs (AI feedback), see below for further details of this preparation process."
- 修正案: "see below for further details" → "the Materials section (Generating AI Feedback and Prompt Development subsections) provides further details of this preparation process".

### Q28 / Q36 / Q37 / Q41 — コピーエディタが追加した小見出し "Overview" の確認【著者判断・案あり】
構造要件で各セクション冒頭に "Overview" 見出しが自動付与されている。より適切な見出しに変更可。提案:
- Q28（Integration of results 冒頭, JDA 説明）: "Overview" → "Integration Approach (Joint Display Analysis)"
- Q36（Qualitative Analysis 冒頭, thematic analysis 手順）: "Overview" → "Analytic Procedure"
- Q37（Results 冒頭, データ収集の記述）: "Overview" → "Dataset Overview"
- Q41（Qualitative results 冒頭, テーマ概観）: "Overview" → "Thematic Overview"
- いずれも現状の "Overview" のままでも可。近藤先生の好みで決定。

---

## C. 略語の展開（回答可）

### Q34 — API の展開【回答可】
初出: Prompt Development 節。
- 修正案: 初出を "application programming interface (API)" とし、以降 API。
  - "...we employed the corresponding application programming interface (API) of the ChatGPT model..."

### Q35 — UTF-8 の展開【回答可】
- 修正案: "the number of Unicode characters (8-bit Unicode Transformation Format, UTF-8)" もしくは簡潔に "(UTF-8 encoding)"。
  - 推奨: "the number of Unicode (UTF-8, 8-bit Unicode Transformation Format) characters"

### Q38 — MCAR の展開【回答可】
- 修正案: "Little's missing completely at random (MCAR) test"

---

## D. 図の修正（house style・要作業＝再生成して Replace で再アップロード）

コピーエディタの共通要求: 図中ラベルを **sentence case**、`=` の前後スペース削除、4桁数値の桁区切りカンマ削除、数値前のハイフンは**マイナス記号(−)**に、等。原稿の図ソースは `src/assets/` と `result/quantitative/*.svg`。

### Q5 — Figure 1（flow_of_feedback_and_evaluation）【要作業】
- "Preparation of Feedback for Evaluation" → "Preparation of feedback for evaluation"
- "supervisor feedback" → "Supervisor feedback"（文頭/ラベル先頭の大文字化）
- ソース: `src/assets/flow_of_feedback_and_evaluation/`

### Q11 — Figure 2（JARS participant flowchart）【要作業】
1. 全テキストラベルを sentence case（例: "Feedback generation", "Supervisor feedback"）
2. 数値の正確性を確認
3. `=` 前後のスペース削除
4. 4桁数値の桁区切りカンマ削除（例: 3,220 → 3220）
- ソース: `src/assets/JARS_flowchart/`

### Q13 — Figure 3（fig_length_distribution）【要作業】
- 全ラベルを sentence case（例: "Feedback provider", "AI", "Supervisor"）
- ソース: `result/quantitative/fig_length_distribution.svg`（生成スクリプト要）

### Q15 + Q14 — Figure 4（fig_diff_ai_vs_supervisor）【要作業＋著者判断】
- Q15（house style）: 全ラベル sentence case（"Assessor type", "Faculty" 等）/ "Criteria Based"→"Criteria-based" / 数値前ハイフン→マイナス記号
- Q14（厳密値）: 比較棒グラフは厳密値を図中表示するか、データを表/Multimedia Appendix として提供する必要。
  - 選択肢: (a) 図に厳密値を併記、(b) 元データを Word 表でアップロード、(c) 図を Multimedia Appendix へ移動。
  - 推奨: スコア差の分布図のため厳密値併記は煩雑 → **元データ表を Multimedia Appendix として提供**が無難。要・近藤先生判断。
- ソース: `result/quantitative/fig_diff_ai_vs_supervisor.svg`

### Q17 — Figure 5（fig_mean_score_per_record）【要作業】
- 全ラベル sentence case（"Feedback provider", "AI", "Supervisor" 等）
- ソース: `result/quantitative/fig_mean_score_per_record.svg`

### Q20 — Figure 6（thematic_map）の画像が未挿入【要作業】
- thematic map の画像が proof に入っていない。`src/assets/thematic_map/thematic_map.svg` を Replace でアップロード。
- 返信案: "The image for Figure 6 (thematic map) is provided; we have uploaded it via the Replace button." （要・実アップロード）

---

## E. 文献（References）

### Q8 — 文献[47]（R software）の扱い【回答可】
現状 [47] = "R. The R project for statistical computing. 2024. URL: https://www.R-project.org/"。
JMIR ルール: ソフトは論文の主題でない限り Web 文献にせず、本文中に開発元を括弧書き。
- 対応案: 本文 "All quantitative analyses were conducted in R (version 4.4.2) [47]." → "...in **R (version 4.4.2; R Foundation for Statistical Computing)**." とし、**[47] を削除**（同様に Qualitative Analysis 節の R 4.4.2 記載も）。
- 返信案: "Reference [47] has been removed; R is now cited in the Methods as 'R (version 4.4.2; R Foundation for Statistical Computing)'."

### Q27 — 文献[41]（Jacobsen & Weber, OSF Preprint）の更新【著者判断・要確認】
現状 "OSF Preprints. Preprint posted online on" の後に**投稿日が欠落**。
- 対応: OSF 投稿日を補う。例 "OSF Preprints. Preprint posted online June 13, 2023." （正確な日付を要確認）。
- ※ `ref` CLI で当該文献の date フィールドを確認・補完してから返信。

### Q26 — 文献[12, 35, 48, 64]の詳細確認【著者判断・要確認】
- [12] Dai W, Lin J, Jin H, **et al.** — JMIR/AMA は著者6名まで列挙。"et al." を**全著者名に展開**できるか確認。
- [35] Rüdian S, ... "Mar 3-7, 2025; Dublin, Ireland. Mar 3, 2025." — **日付の重複**を整理（会議期間と posted 日の重複表記を修正）。
- [48] Zhang L, Komachi M. — 会議録、体裁は概ね可。doi 有り。要・最終確認。
- [64] Banihashem SK, ... Innov Educ Teach Int. 2026;63(2):554-570 — 体裁可。
- 返信案: 各文献を `ref` で照合し、正確な書誌に更新（特に[12]全著者、[35]日付重複、[41]投稿日）。

---

## F. 著者・所属・メタデータ

### Q7 — イニシャル NK, OS, NY, DI が著者欄に無い【著者判断・要対応】
Evaluation Instrument 節の TRAPD 翻訳プロセスに登場:
- NK = レビューを行った medical education expert
- OS = 相違を調整した professional translator
- NY = pretesting の clinical educator
- DI = pretesting の medical student
これらは**著者ではなく協力者**。JMIR は著者バイラインに無いイニシャルを不可とする。
- 対応案（いずれか）:
  - (a) フルネームに展開し Acknowledgements に謝辞を追加（本人同意が必要）、または
  - (b) イニシャルを役割記述に置換（例: "reviewed by a medical education expert", "resolved by a professional translator", "pretested with a clinical educator and a medical student"）。
  - 推奨: **(b) 役割名への置換**（同意取得不要で簡便）。
- 返信案: "NK, OS, NY, and DI are not authors; they were collaborators in the rubric translation. We have replaced the initials with role descriptions (a medical education expert, a professional translator, a clinical educator, and a medical student)."

### Q0 — 所属[2]の Department【著者判断】
所属2 = "The School of Health Professions Education, Maastricht University"。
- これはスクール単位で別途 Department は不要と思われる。
- 返信案: "Affiliation 2 (School of Health Professions Education, Maastricht University) is a school-level unit; no separate department applies."（要・共著者確認）

### Q32 — 全所属の表示確認【著者判断・要対応】
- **所属 5 の重複を削除**（上記「横断的問題」参照）。正しくは 4 所属:
  1. Center for Medical Education, Nagoya University Graduate School of Medicine（住所: 65, Tsurumai-cho, Showa-ku, Nagoya, Aichi 466-8550, Japan）
  2. School of Health Professions Education, Maastricht University, Maastricht, The Netherlands
  3. Department of Educational Research and Educational Design, Maastricht University
  4. Department of Pathology, Maastricht University
- 著者-所属の対応（qmd より）: Kondo=1,2 / Donkers=2,3 / Nishigori=1 / Rovers=2,4 / Heeneman=2,4
- 返信案: "Please remove the duplicated affiliation 5 (identical to affiliation 1). The correct affiliations and author-affiliation links are: [上記]."

### Q31 — 著者メタデータの抽出確認【著者判断】
- 氏名・degrees・ORCID・責任著者・email を確認。
  - degrees（qmd）: Kondo=MD,MHPE,PhD / Donkers=PhD / Nishigori=MD,MMEd,PhD / Rovers=PhD / Heeneman=PhD
  - 責任著者: Kondo（email: ncukondo@gmail.com）
  - 電話番号の重複表示があれば CQ で指摘。
- 返信案: メタデータが上記と一致するか確認の上 "Author metadata are correct" もしくは差分を CQ。

---

## G. データ共有・URL

### Q22 — Data sharing 文の KB テンプレ選択【著者判断・案あり】
本研究は匿名化データ・コード・AIシステムを Zenodo で公開。一部（学生ログ原文）は非公開。
- 推奨テンプレ（JMIR KB の「一部公開」型）に沿った文:
  "The datasets generated and analyzed during this study, together with the analysis code and the source code of the AI feedback generation system, are available in the Zenodo repository [reference]. The original clinical clerkship logs are not publicly available because they may contain personally identifiable information about students and their release would exceed the scope of the opt-out consent approved by the ethics committee, but are available from the corresponding author on reasonable request."
- 要・近藤先生確認（"on reasonable request" を付すか）。

### Q23 — 本文中の URL（zenodo DOI）は不可【著者判断・案あり】
"...publicly available (https://doi.org/10.5281/zenodo.18868578)." の URL を本文から除去し、文献として引用。
- 対応案: Zenodo データセットを**参照文献として追加**し、本文は "[ref]" で引用。
  - 必要書誌: Kondo T. AI-generated versus human supervisor feedback ... [dataset]. Zenodo; 2026. doi:10.5281/zenodo.18868578
- 返信案: "We have moved the Zenodo DOI to the reference list and cite it in the text; full reference details are provided."（Data Availability 節の同 URL も同様に処理）

---

## H. 図・表・付録キャプションの確認

### Q6 — 図のキャプション/内容を精査【著者判断】 → 図修正(D)後に全図キャプションを最終確認。
### Q10 — 表のキャプション/内容/脚注を精査【著者判断】 → Table 1 脚注（*†‡）の記号対応を確認。
### Q24 — 全 Multimedia Appendix のキャプション確認【著者判断】
- Appendix 1: feedback generation prompt と開発過程
- Appendix 2: 評価ルーブリック
- Appendix 3: ルーブリック翻訳過程
- Appendix 4: full paired t-test results
- 本文の見出し（Multimedia Appendix 1–4）と一致するか確認。
### Q25 — Multimedia Appendix 4 のキャプション不一致【著者判断・要対応】
本文側と添付ファイル側でキャプションが異なる。採用するキャプションを統一。
- 推奨（本文 qmd と一致）: "Full paired t-test results comparing AI and supervisor feedback scores on the Steiss et al. five-item analytic rubric, including mean differences and uncorrected P values omitted from Table 2 for readability."
### Q29 — Acknowledgments の確認【著者判断】
- 評価者22名の謝辞・貢献者記述(TK/JD/NH/SR/SH)・GAIDeT 開示・JSPS 25K06542 の記載を確認。問題なければ "correct" と返信。

---

## I. 標準クエリ・対応不要

### Q30 — コピーエディタからの標準案内（AQ対応依頼・CQ運用説明）【対応不要】
- 内容を了解。トラックチェンジは reject せず CQ 運用。返信不要（または "Noted, thank you."）。

---

## 次のアクション（近藤先生の判断が必要な主な点）
1. Q7: NK/OS/NY/DI → 役割名置換(推奨) か フルネーム展開か。
2. Q14: Figure 4 → 厳密値併記 / データ表添付(推奨) / Appendix 移動 のいずれか。
3. Q22/Q23: データ共有文の文言、Zenodo を "on request" 表現にするか・参照文献化。
4. Q26/Q27: 文献[12]全著者、[35]日付重複、[41]投稿日 の確定（`ref` で照合）。
5. 図 5 件（Q5,11,13,15,17,20）の再生成・Replace アップロード（実作業）。
6. 所属 5 重複の削除依頼（Q32）。

上記が確定すれば、各クエリへの返信入力と（同意の上で）図の再生成・トラックチェンジ確認・Approve/Submit に進めます。
