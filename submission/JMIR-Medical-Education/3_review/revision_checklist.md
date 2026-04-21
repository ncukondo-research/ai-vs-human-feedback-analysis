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
- [ ] **F-Minor.2 方針**: Table 2のどの列を本文に残し、どれをappendixに移すか

---

## Phase 1: 追加文献・データ調査（NEEDS-INPUT）

- [ ] **G-Minor.2: GAIDeT引用追加**
  - `ref search GAIDeT` / `ref search "generative AI delegation taxonomy"` で既存libraryを確認
  - 未登録なら `search-hub` で検索 → `ref add`
  - `library.json` 更新 → manuscript L.614 付近に `@<key>` で挿入
- [ ] **E3: Discussion追加引用候補の抽出**
  - Principal Findings（L.576付近）で解釈的claimに足すべき文献をリスト化
  - 他subsectionの軽引用箇所も洗い出し
  - 必要なら `ref search` / `search-hub` で補充
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

- [ ] **F-Major.1: 「higher quality / superior」→「better alignment with rubric criteria」**
  - Abstract, Results, Principal Findings（特にL.576）, Discussion 内の該当箇所を一括で洗い出し
  - 置換案を複数候補提示
- [x] **F-Major.2: detectability考察の拡張**
  - なぜ識別可能か（lexical uniformity, structural completeness, 日本語生成の不自然さ）
  - feature（transparency）vs limitation（authenticity/trust）の両義性
  - ecological validity / implicit bias / real-world implementation への影響
  - ✅ 完了 (2026-04-21): Discussion 3箇所に分散配置で対応。(1) Comparison with the Literature L.596 を2段落に分割: 段落A=評価者 implicit bias (van-de-Ridder/Tripodi + Morris2026-sa 補強), 段落B=自研究5 themes による機構的説明 + voice/epistemic stance (Maher2026-au) + transparency vs authenticity gap 両義性 + 新LLMs caveat。F-Minor.3 / L-Minor.1 の language-detectability link を段落B に吸収。(2) Implications L.604 に3文追加: 学習者も source 認識する蓋然性 + Morris2026-sa の attribution effect + rubric 優位性が learner uptake に直訳されない留保。(3) Limitations #8 を拡張: 第三者評価者デザイン vs 学習者受領の scope 差異を Morris2026-sa 引用で明示。
- [x] **F-Major.3: prompt設計の再定位**
  - 既存の「limitation」記述に加え、「educational valuesをoperationalizeする設計原理」としての位置付けをDiscussion（Implications または新規段落）に追加
  - ✅ 完了 (2026-04-21): Implications L.606 に新段落追加 (constructive alignment Biggs1996-yt, prompt literacy snchezmendiola-2025, prompt-driven consistency Yavuz2024-vj の3引用)。L-Minor.2 (rubric-embedded prompting の Discussion 再言及) も同段落で兼ねる。
- [ ] **F-Minor.3 / L-Minor.1: 日本語・文脈依存 ↔ detectability の明示的リンク**
  - 既存散在（L.509 theme, L.590–591）を橋渡しする1–2文をDiscussionに挿入
  - 同時に external validity への含意も明記（L-Minor.1を兼ねる）
- [x] **L-Minor.2: rubric-embedded promptingのDiscussion再言及**
  - Implicationsセクションで findings を prompt設計に明示的に帰属させる一文を追加（F-Major.3と整合）
  - ✅ 完了 (2026-04-21): F-Major.3 と同一の Implications L.606 新段落で対応。「The rubric-score consistency we observed for AI feedback should therefore be read not as an inherent property of GPT-4o but as an outcome of how educational values were translated into the prompt design」で明示的に帰属。
- [ ] **E3: Discussion引用補充**
  - Phase 1で特定した箇所に `@<key>` を挿入

## Phase 4: 原稿修正（AUTO — 機械的編集）

- [ ] **E4: MCAR/missing data 明示文を追加**
  - 既存のL.274「100% data completeness」に続けて、「no missing data were present; therefore an MCAR test and imputation were not required」を明記
- [ ] **G-Minor.1: Limitations を8段落に分割**
  - 現在L.602–603の1段落を限界ごとに分割
- [ ] **F-Minor.1: 冗長整理**
  - prompt/rubric説明のMethods / Discussion / Limitations間の重複を集約
- [ ] **F-Minor.2: Table 2 をスリム化 / 一部appendix移動**
  - Phase 0の方針決定に従って列/行を整理

## Phase 5: Reply文書作成

- [ ] `one_by_one_reply.md` のTODOを各項目のdraftで埋める
  - [x] Editor Comment.1 (E1 / JARS): 追加本文を verbatim 転記 + JARS要素 inline annotation 形式で完成
  - [x] Editor Comment.2 (E2 / Thematic map): Ahmed 2025 準拠のdesign説明 + 追加sentence verbatim + 図要素の列挙。`Ahmed2025-tm` を library.json に追加、manuscriptで `@Ahmed2025-tm` で引用
  - [ ] Editor Comment.3 (E3 / Discussion references)
  - [ ] Editor Comment.4 (E4 / Missing data)
  - Reviewer F:
    - [ ] Major.1
    - [x] Major.2 (2026-04-21): detectability 理論化。Addition 1 (L.596 2段落化, Maher2026-au + Morris2026-sa 引用) / Addition 2 (Implications L.604) / Addition 3 (Limitations #8 scope 拡張) の3箇所に verbatim quote 付きで記載。F-Minor.3 / L-Minor.1 吸収を末尾 coverage 段落で明記。
    - [x] Major.3 (2026-04-21): prompt design as operationalization of educational values。Implications L.606 新段落 verbatim 転記、Biggs1996-yt + snchezmendiola-2025 + Yavuz2024-vj 引用、L-Minor.2 統合の cross-reference を末尾に追加。
    - [ ] Minor.1
    - [ ] Minor.2
    - [ ] Minor.3
  - [ ] Reviewer G (Minor.1 / Minor.2)
  - Reviewer L:
    - [ ] Minor.1
    - [x] Minor.2 (2026-04-21): F-Major.3 と同一段落で対応。reply doc では F-Major.3 へ cross-reference + 該当 clauses を再掲。
  - [x] Reviewer N: 謝辞のみ
- [ ] 手動引用（Pandoc展開されない形式）で統一
- [ ] セクション名参照で統一（render前はpage番号を置かない。render後に必要なら追記）
- [ ] Editor宛カバー文（summary of changes）を冒頭に追加

## Phase 6: ビルド・提出物生成

- [ ] `library.json` 更新確認（Levitt2018-jq 済 / Ahmed2025-tm 済 / GAIDeT他の追加分）
- [ ] `compile.sh` でmanuscript DOCX生成
- [ ] `new_YYYY_MM_DD_study1_manuscript.docx` として `3_review/` に保存
- [ ] `tracked-changes` skillで旧版（`new_2026_03_19_study1_manuscript.docx`）との比較DOCX生成
- [ ] `one_by_one_reply.md` → DOCX生成
- [ ] co-author（Sylvia, Hiroshi, Jeroen, Sanne）への回覧判断

## Phase 7: 提出

- [ ] Revised Ms Upload（clean版）
- [ ] Author Response（reply本文をメール本文にペースト）
- [ ] Supplementary: tracked-changes docx

---

## 未対応項目

- **Reviewer N**: 追加対応不要（謝辞のみ `one_by_one_reply.md` に記入済）

## 参照ファイル

- 受信メール: `reviewers_comments.txt`
- Reply template: `one_by_one_reply.md`
- 前回の完成原稿: `../2_review/new_2026_03_19_study1_manuscript.docx`
- 前回のreply: `../2_review/one_by_one_reply.md`
- Manuscript source: `../../../src/manuscript.qmd`
- Library: `../../../library.json`
