# Revision Checklist — JMIR Medical Education Round 2 (ms #90064)

Due: **2026-04-20**
Source: `reviewers_comments.txt` / template: `one_by_one_reply.md`

Legend: **AUTO** = 既存情報で機械的に対応可 / **PARTIAL** = ドラフト可だが著者確認要 / **NEEDS-INPUT** = 著者判断・新規作業必須

---

## Phase 0: 方針決定（着手前に合意が必要）

- [x] **E1 方針**: JARS qualitative要素を既存Methodsに「見出しだけ付け直す」方式か、新規subsectionを追加する方式か
  - 決定: 最小侵襲 — `#### Methodological Integrity` subsection を新設し、Reflexivity には researcher-participant relationship の1文追加。旧 saturation 段落（L.221）は Methodological Integrity に吸収して削除。
- [x] **E2 方針**: thematic mapを mermaid（qmdに埋込可）で描くか、別ツールで画像化するか
  - 決定: PptxGenJS + YAML data で既存 JARS_flowchart パターンに倣って SVG/PNG 生成。Ahmed et al. 2025 準拠で RQ / AI-Supervisor pole / 5 themes + sub-themes / complementarity 結論 のシンプル階層構造。dimension groupingは本文・Table 2と乖離するため不採用。
- [x] **F-Major.2 論拠**: detectability理論化でどの先行文献に立脚するか（既存library内で足りるか、`search-hub`調査が必要か）
  - 調査メモ (2026-04-20): ref library 内を検索し、候補として `Maher2026-au` (Perspectives on Medical Education, 2026 — "Whose Voice is it Anyway? ... Crisis of Authenticity" / authenticity・voice の理論枠組み) と `Morris2026-sa` (arXiv, 2026 — "Same Feedback, Different Source" / ecological validity・learner engagement attribution effect Cohen d=0.88–1.56) を抽出し `library.json` に追加済。採用可否は方針検討後に決定。既存 `van-de-Ridder2014-ld` / `Tripodi2021-mc` は implicit bias 論点で引き続き利用可。
  - 決定 (2026-04-21): 両論文採用。Maher2026-au は voice/authenticity の概念語彙と feature(transparency) vs limitation(authenticity gap) の両義性フレーミング、Morris2026-sa は (i) implicit bias 補強 (ii) ecological validity / 直接提供時の attribution effect Cohen d=0.88–1.56 の定量根拠、に用いる。「なぜ識別容易か」は自研究の5 themes で機構的に説明し Maher は解釈語彙として位置付ける（mechanism を外部文献には求めない）。
- [x] **F-Major.3 論拠**: prompt設計を「educational valuesのoperationalization」として位置付ける際の参照枠組み（例: curriculum alignment理論、learning design文献）
  - 決定 (2026-04-21): 3件採用。`Biggs1996-yt` (constructive alignment, Higher Education) を理論基盤、`snchezmendiola-2025` (MedEdPublish 2025, prompt literacy as core competence + CRAFT framework で reference framework の埋め込みを推奨) を contemporary HPE application、`Yavuz2024-vj` (BJET 2024, fine-tuned prompt + low temp で ICC=0.972 / SD=0.00 達成) を経験的根拠。fulltext 全件確認済 → library.json 追加済。Triola2024 と Meincke2025 は本論点に直接合致しないため不採用。
- [x] **F-Minor.2 方針**: Table 2のどの列を本文に残し、どれをappendixに移すか
  - 決定 (2026-04-21): Minor コメントの意図（本文密度の軽減のみ、分析構造は変更せず）に沿い、**標準案**（7列→5列に削減 + Multimedia Appendix 4 で全列版を保持）を採用。本文 Table 2 に残すのは `Item / AI Mean (95% CI) / Supervisor Mean (95% CI) / Cohen d (95% CI) / Corrected P value` の5列。`Mean Difference (95% CI)` と `uncorrected P value` を Multimedia Appendix 4 へ。外部ファイル方式（Multimedia Appendix 1–3 のパターン踏襲）で `src/assets/appendix/Multimedia Appendix 4. full paired t-test results.docx` を `manuscript.qmd` の `include: false` R chunk から自動生成。

---

## Phase 1: 追加文献・データ調査（NEEDS-INPUT）

- [x] **G-Minor.2: GAIDeT引用追加**
  - ✅ 完了 (2026-04-22): `search-hub` で PubMed 検索 (PMID: 40781729) → 原著 Suchikova, Tsybuliak, Teixeira da Silva, Nazarovets (2026, Accountability in Research, 33[3], 2544331) を特定。`ref add -i pmid 40781729` で citation key `suchikova-2026` として登録、`library.json` に追加 (68 entries)。Taylor & Francis 本文は Cloudflare ブロックで入手不可だったが、公式 GitHub リポジトリ (panbibliotekar/gaidet-declaration) の `_data/terms.yml` で完全な taxonomy を取得し、manuscript の 3 タスク (literature search and systematization / code generation / translation) がすべて GAIDeT 正式 term label (0000008 / 0000017 / 0000035) と完全一致することを確認。manuscript L.665 の Acknowledgements 段落に `[@suchikova-2026]` を挿入。
- [x] **E3: Discussion追加引用候補の抽出**
  - ✅ 完了 (2026-04-22): Discussion 全段落を再監査し、substantive claim で引用を欠く2箇所を特定。(1) Comparison with the Literature 第3段落 L.631 の tacit knowledge / clerkship learning クレーム → `Dornan2014-eu` (ExBL / clerkship学習のtacit性) と `Yardley2012-ci` (AMEE Guide 63 / tacit workplace learning の articulate困難性) を `library.json` に追加して引用。(2) Implications of Findings 第2段落 L.645 の hybrid-approaches 列挙 → 既存 `Banihashem2025-zo` に加え `Zhang2025-cg` (Claude 3.5 Sonnet での co-produced feedback empirical study) を追加。Holstein2019-iv は pre-generative-AI era の ITS paradigm で整合性が取れないため不採用。fulltext 全件確認済。Principal Findings / Conclusions 要約文、integrative sentence、future research directions は author interpretation として意図的に uncited のままとした。
- [x] **F-Major.2 サポート文献調査**（detectability理論化）
  - AIテキスト検出可能性、epistemic stance、AI authenticity/trust関連
  - ✅ 完了 (2026-04-21): `Maher2026-au` (voice/authenticity), `Morris2026-sa` (attribution effect Cohen d=0.88–1.56) を採用決定。既存 `van-de-Ridder2014-ld` / `Tripodi2021-mc` と併用。
- [x] **F-Major.3 サポート文献調査**（prompt-as-design-principle）
  - prompt engineering as pedagogical design、curriculum operationalization
  - ✅ 完了 (2026-04-21): `Biggs1996-yt`, `snchezmendiola-2025`, `Yavuz2024-vj` 採用、fulltext 全件確認済。

## Phase 2: 新規生成物（NEEDS-INPUT）

- [x] **E1: JARS Qualitative Methodological Integrity セクション追加**
  - Researcher Description / Data & analytic strategy / Findings–interpretation / Transferability / Methodological Integrity
  - 既存Qualitative Analysis節（L.217–227）との整合をとりつつ追記
  - ✅ 完了 (2026-04-20): `src/manuscript.qmd` L.227 に `#### Methodological Integrity` 新設、3段落でadequacy/groundedness、credibility/triangulation/audit trail/negative case analysis、member checks非実施の論拠/coherence/transferabilityを網羅。Reflexivity末尾にresearcher-participant relationshipの1文追加。旧L.221は削除。`Levitt2018-jq` (APA JARS-Qual) を `library.json` に追加。
- [x] **E2: Thematic Map 図作成**
  - themes と sub-themes の関係を可視化
  - Figure番号・キャプション・本文参照位置を決定
  - ✅ 完了 (2026-04-20): `src/assets/thematic_map/` に PptxGenJS 生成スクリプト + YAML data + PPTX/PNG/SVG 出力を配置。theme/sub-theme名は Table 2 (`theme_table_en_simple.csv`) と完全一致、5 themes の並びは manuscript L.488 と一致。新造概念（dimension grouping）は本文・表との乖離を避けるため不採用。`manuscript.qmd` Qualitative analysis Results 冒頭に `{#fig-thematic_map}` として挿入し、本文で `[@fig-thematic_map]` / `[@tbl-themes]` に cross-reference。Ahmed 2025 を `@Ahmed2025-tm` で引用。

## Phase 3: 原稿修正（PARTIAL — ドラフト→著者レビュー）

- [x] **F-Major.1: 「higher quality / superior」→「better alignment with rubric criteria」**
  - ✅ 完了 (2026-04-22): sub-agent で Abstract/Results/Discussion を exhaustive audit し、rubric-specific 以外の "quality" / "superior" を 8箇所特定。方針1（最小侵襲 tightening）で以下を適用: (1) Results 3 subsection titles (Consistency of Rubric Scores / Length-Score Correlation Patterns / Rubric-Score Consistency and Variability), (2) Results Consistency段落本文 (quality→rubric scores), (3) Integration Index 2/3/4 (excels→systematically covers / quality→rubric scores 等), (4) Discussion Principal Findings (superior adherence→greater adherence, quality→rubric scores ×3), (5) Discussion Comparison with Literature length paragraph (length-quality→length-rubric scores ×2)。Curtis2024 引用の "quality improvement" は引用元主張として保持。L.597 (multidimensional quality), L.647 (prompt design で "conception of feedback quality"), L.629 (broad literature discussion) は文脈上 "quality" が適切なため保持。Limitations #5 と Methods の Evaluation Instrument 段落に既に "rubric does not capture overall educational quality" の明示 caveat あり、reply で cross-reference。
- [x] **F-Major.2: detectability考察の拡張**
  - なぜ識別可能か（lexical uniformity, structural completeness, 日本語生成の不自然さ）
  - feature（transparency）vs limitation（authenticity/trust）の両義性
  - ecological validity / implicit bias / real-world implementation への影響
  - ✅ 完了 (2026-04-21): Discussion 3箇所に分散配置で対応。(1) Comparison with the Literature L.596 を2段落に分割: 段落A=評価者 implicit bias (van-de-Ridder/Tripodi + Morris2026-sa 補強), 段落B=自研究5 themes による機構的説明 + voice/epistemic stance (Maher2026-au) + transparency vs authenticity gap 両義性 + 新LLMs caveat。F-Minor.3 / L-Minor.1 の language-detectability link を段落B に吸収。(2) Implications L.604 に3文追加: 学習者も source 認識する蓋然性 + Morris2026-sa の attribution effect + rubric 優位性が learner uptake に直訳されない留保。(3) Limitations #8 を拡張: 第三者評価者デザイン vs 学習者受領の scope 差異を Morris2026-sa 引用で明示。
- [x] **F-Major.3: prompt設計の再定位**
  - 既存の「limitation」記述に加え、「educational valuesをoperationalizeする設計原理」としての位置付けをDiscussion（Implications または新規段落）に追加
  - ✅ 完了 (2026-04-21): Implications L.606 に新段落追加 (constructive alignment Biggs1996-yt, prompt literacy snchezmendiola-2025, prompt-driven consistency Yavuz2024-vj の3引用)。L-Minor.2 (rubric-embedded prompting の Discussion 再言及) も同段落で兼ねる。
- [x] **F-Minor.3 / L-Minor.1: 日本語・文脈依存 ↔ detectability の明示的リンク**
  - ✅ 完了 (2026-04-22): 再点検の結果、既存テキストで実質的に対応済のため manuscript 追加編集なし。F-Minor.3 は L.637 (F-Major.2 Addition 1 第2段落) の "language-level cues such as translation-like phrasing, formatting artifacts, and a formulaic register being particularly salient" が explicit な language-detectability リンクを提供。L-Minor.1 は L.639 (Japanese/cultural context 段落末尾) の "underscore the importance of conducting AI feedback research across diverse linguistic and cultural settings" + L.653 (Limitations #1) の "generalizability of our findings to other institutions or cultural contexts needs to be confirmed" で external validity 含意を2箇所 covering。reply 側は両 minor comment に verbatim quote 付きで existing text への pointer を記載し、F-Major.2 追加との duplication 回避を明示。
- [x] **L-Minor.2: rubric-embedded promptingのDiscussion再言及**
  - Implicationsセクションで findings を prompt設計に明示的に帰属させる一文を追加（F-Major.3と整合）
  - ✅ 完了 (2026-04-21): F-Major.3 と同一の Implications L.606 新段落で対応。「The rubric-score consistency we observed for AI feedback should therefore be read not as an inherent property of GPT-4o but as an outcome of how educational values were translated into the prompt design」で明示的に帰属。
- [x] **E3: Discussion引用補充**
  - ✅ 完了 (2026-04-22): L.631 に `[@Dornan2014-eu]` と `[@Yardley2012-ci]` を sub-claim 毎に分割挿入。L.645 の既存 `[@Banihashem2025-zo]` を `[@Banihashem2025-zo; @Zhang2025-cg]` に拡張。本文の文言は一切変更せず citation key 追加のみ。

## Phase 4: 原稿修正（AUTO — 機械的編集）

- [x] **E4: MCAR/missing data 明示文を追加**
  - ✅ 完了 (2026-04-22): L.280 の「100% data completeness」文末尾に "Because the dataset was complete, we did not perform a missingness test (such as Little's MCAR test) or apply multiple imputation." を1文追加。
- [x] **G-Minor.1: Limitations を8段落に分割**
  - ✅ 完了 (2026-04-22): L.653 の1段落（冒頭 + 8限界）を9段落に機械分割。文言は F-Minor.1 の fifth 限界末尾トリム以外は不変。
- [x] **F-Minor.1: 冗長整理**
  - ✅ 完了 (2026-04-22): 2箇所の冗長を整理。(1) Results Comparison of Scores 直後の caveat を3文→3文（短縮版）に圧縮、受動態の重複記述を削除。(2) Limitations 第5限界末尾の "which were also explicitly embedded in the AI prompt" を削除（L.193 Methods / L.406 caveat / L.647 Implications で既述のため重複）。Methods 定義文 (L.193) / Discussion Consistency 段落 (L.629) / Implications F-Major.3 新段落 (L.647) / Conclusion (L.657) は各々異なる framing role を持つため保持。
- [x] **F-Minor.2: Table 2 をスリム化 / 一部appendix移動**
  - ✅ 完了 (2026-04-21): Phase 0 方針に従い、`src/manuscript.qmd` L.305-336 の `tbl-paired_ttest_results` を 7列→5列に削減（`select(Item, mean_ai, mean_supervisor, cohens_d, p_bonferroni)`）。`include: false` の新 R chunk (`appendix-4-full-ttest`) を直下に追加し `flextable::save_as_docx()` で 7列完全版を `src/assets/appendix/Multimedia Appendix 4. full paired t-test results.docx` に出力。本文 L.302 の参照文と Table 2 caption を "mean differences and uncorrected P values are provided in Multimedia Appendix 4" に更新。Data Availability の Appendix 列挙を "1, 2, 3, and 4" に更新、`## Multimedia Appendix 4` セクションを新規追加。`compile.sh` 通過確認済。

## Phase 5: Reply文書作成

- [x] `one_by_one_reply.md` のTODOを各項目のdraftで埋める (2026-04-22 全TODO充填完了)
  - [x] Editor General comments (2026-04-22): 改訂全11点 (a)-(k) を1段落にまとめた summary of changes を記載。
  - [x] Editor Comment.1 (E1 / JARS): 追加本文を verbatim 転記 + JARS要素 inline annotation 形式で完成
  - [x] Editor Comment.2 (E2 / Thematic map): Ahmed 2025 準拠のdesign説明 + 追加sentence verbatim + 図要素の列挙。`Ahmed2025-tm` を library.json に追加、manuscriptで `@Ahmed2025-tm` で引用
  - [x] Editor Comment.3 (E3 / Discussion references) (2026-04-22): 2箇所の verbatim block quote + 各文献の source-paper quote 付き記述で完了。`Dornan2014-eu` / `Yardley2012-ci` を `library.json` に追加。
  - [x] Editor Comment.4 (E4 / Missing data) (2026-04-22): 改訂後 Participants 段落の verbatim block quote で 100% completeness + MCAR/imputation 不要の明示を示す。
  - [x] Reviewer F General comments (2026-04-22): 3 Major reframing (language tightening / detectability theorization / prompt design reframing) の要旨を1段落で記載。
  - Reviewer F:
    - [x] Major.1 (2026-04-22): 8箇所の rubric-specific tightening。3 section title + 5 本文 verbatim を reply に列挙。
    - [x] Major.2 (2026-04-21): detectability 理論化。Addition 1 (L.596 2段落化, Maher2026-au + Morris2026-sa 引用) / Addition 2 (Implications L.604) / Addition 3 (Limitations #8 scope 拡張) の3箇所に verbatim quote 付きで記載。F-Minor.3 / L-Minor.1 吸収を末尾 coverage 段落で明記。
    - [x] Major.3 (2026-04-21): prompt design as operationalization of educational values。Implications L.606 新段落 verbatim 転記、Biggs1996-yt + snchezmendiola-2025 + Yavuz2024-vj 引用、L-Minor.2 統合の cross-reference を末尾に追加。
    - [x] Minor.1 (2026-04-22): 改訂後 Results caveat (L.406) と Limitations #5 (L.653) の verbatim block quote 2本で冗長削減箇所を明示。Methods/Discussion Consistency/Implications F-Major.3/Conclusion は各々異なる framing role のため保持した旨を末尾に明記。
    - [x] Minor.2 (2026-04-21): Table 2 を 5 列にスリム化（Item / AI Mean / Supervisor Mean / Cohen d / Corrected P）し、完全版（7列、Mean Difference と uncorrected P を含む）を新規 Multimedia Appendix 4 に外出し。reply doc に verbatim の caption 追記と該当本文の before/after を記載予定。
    - [x] Minor.3 (2026-04-22): manuscript L.637 の verbatim block quote (translation-like phrasing / formatting artifacts / formulaic register) で language-detectability link を示し、F-Major.2 との duplication 回避を末尾に明記。
  - [x] Reviewer G General comments (2026-04-22): 両 round 通した review への謝辞を1文で記載。
  - Reviewer G:
    - [x] Minor.1 (2026-04-22): Limitations 1 段落→9 段落分割（冒頭 lead-in + First〜Eighth）。文言は F-Minor.1 の fifth 限界末尾トリム以外不変。
    - [x] Minor.2 (2026-04-22): GAIDeT 原著 (`suchikova-2026`) を `library.json` 追加、Acknowledgements の GAIDeT 言及に `[@suchikova-2026]` 挿入。reply doc に revised sentence verbatim + taxonomy 一致確認の言及を記載。
  - [x] Reviewer L General comments (2026-04-22): 好意的評価への謝辞 + 2 Minor 対応への導入を1文で記載。
  - Reviewer L:
    - [x] Minor.1 (2026-04-22): L.639 (Japanese/cultural context 段落末尾) と L.653 (Limitations #1) の verbatim block quote 2本で language/context dependency の external validity 含意を示す。Strasser2026 / Harigai2024 / Nishigori2014 の既存引用を empirical anchors として明記。
    - [x] Minor.2 (2026-04-21): F-Major.3 と同一段落で対応。reply doc では F-Major.3 へ cross-reference + 該当 clauses を再掲。
  - [x] Reviewer N: 謝辞のみ
- [ ] 手動引用（Pandoc展開されない形式）で統一
- [ ] セクション名参照で統一（render前はpage番号を置かない。render後に必要なら追記）
- [x] Editor宛カバー文（summary of changes）を冒頭に追加 (2026-04-22): Editor General comments RESPONSE に改訂全11点 (a)-(k) の summary を記載。

## Phase 6: ビルド・提出物生成

- [ ] `library.json` 更新確認（Levitt2018-jq 済 / Ahmed2025-tm 済 / Dornan2014-eu 済 / Yardley2012-ci 済 / suchikova-2026 済）
- [x] `compile.sh` でmanuscript DOCX生成 (2026-04-22): `history/2026_04_22_study1_manuscript.docx` 生成、`result/src/manuscript.docx` 経由で flextable OOXML 修正後に出力。
- [x] `new_YYYY_MM_DD_study1_manuscript.docx` として `3_review/` に保存 (2026-04-22): `new_2026_04_22_study1_manuscript.docx` (104K) を `3_review/` に配置。
- [x] `tracked-changes` skillで旧版（`new_2026_03_19_study1_manuscript.docx`）との比較DOCX生成 (2026-04-22): `3_review/tracked_changes.docx` (948K) 生成、Word CompareDocuments 経由で redline 作成。
- [x] `one_by_one_reply.md` → DOCX生成 (2026-04-22): `pandoc` で `3_review/one_by_one_reply.docx` (23K) 生成。
- [ ] co-author（Sylvia, Hiroshi, Jeroen, Sanne）への回覧判断

## Phase 7: 提出

- [ ] Revised Ms Upload（clean版）
- [ ] Author Response（reply本文をメール本文にペースト）
- [ ] Supplementary: tracked-changes docx

## Phase 8: Open data / Zenodo 同期（提出後〜acceptance 時に処理）

- [ ] **Open-data GitHub repo (`../ai-vs-human-feedback-analysis-open-data`) を src と同期**
  - F-Major.1 で `src/analysis/quantitative/quantitative.qmd` と `src/analysis/intagration/joint_display_analysis.md` に "quality" → "rubric scores" 系の terminology 変更を適用済。対応する open-data 側 (`analysis/quantitative/quantitative.qmd` / `analysis/integration/joint_display_analysis.md`) は未同期 → 差分を apply して commit
  - 本件以前から、Round 1 / Round 2 の manuscript 側修正は open-data repo に反映されていない。必要に応じて過去の累積差分も一括 sync する判断要（co-author 確認推奨）
- [ ] **Zenodo DOI 形式の確認**
  - manuscript L.671 の引用 `10.5281/zenodo.18868578` が concept DOI か specific version DOI かを Zenodo 上で確認
  - concept DOI の場合: citation は不変のまま、新バージョンアップロードで最新版に resolve される
  - specific version DOI の場合: 新バージョンデポジット時に manuscript 側の DOI 更新が必要
- [ ] **Zenodo 新バージョンデポジット（acceptance 直前に実施）**
  - open-data repo を最新状態でタグ付け → Zenodo 連携で新バージョン作成
  - 実施タイミングは acceptance 通知後〜proof 前が推奨（最終原稿と deposit 内容の一致が確実）
  - データ・分析結果は不変で terminology のみの差分のため、round 3 acceptance 後に一括処理で可

---

## 未対応項目

- **Reviewer N**: 追加対応不要（謝辞のみ `one_by_one_reply.md` に記入済）

## 関連リポジトリ / 外部成果物

- Open-data GitHub: `../ai-vs-human-feedback-analysis-open-data` (README.md 参照。Round 1/2 以降未更新)
- Zenodo DOI: https://doi.org/10.5281/zenodo.18868578 (manuscript L.671 で引用)
- GAIDeT declaration tool: https://github.com/panbibliotekar/gaidet-declaration (G-Minor.2 対応時に taxonomy 確認用途で参照)

## 参照ファイル

- 受信メール: `reviewers_comments.txt`
- Reply template: `one_by_one_reply.md`
- 前回の完成原稿: `../2_review/new_2026_03_19_study1_manuscript.docx`
- 前回のreply: `../2_review/one_by_one_reply.md`
- Manuscript source: `../../../src/manuscript.qmd`
- Library: `../../../library.json`
