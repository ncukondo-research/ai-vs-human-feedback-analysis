# Revision Checklist for JMIR Medical Education Submission

## Progress Summary

| フェーズ | 完了 | 合計 | 進捗率 |
|---------|------|------|--------|
| Phase 1: 別リポジトリでの分析 | 11 | 12 | 92% |
| Phase 2: 原稿修正（高優先度） | 0 | 15 | 0% |
| Phase 3: 原稿修正（中優先度） | 12 | 14 | 86% |
| Phase 4: 管理的項目・校正 | 0 | 8 | 0% |
| **Total** | **23** | **49** | **47%** |

---

# Phase 1: 別リポジトリでの分析作業

> **注意**: このフェーズの作業は分析用リポジトリで行い、結果をこのリポジトリに持ち込む

## 1.1 新規統計分析

- [x] **評価者間信頼性の計算** (F8, N5) ✓ manuscript+reply済
  - 同一データセットを評価した学生・教員間の一致度
  - Cohen's kappa および ICC を計算
  - 結果: Supervisor fair–moderate(κ 0.37–0.54), AI poor(κ 0.04–0.15)

- [x] **効果量の計算** (G5) ✓ manuscript+reply済
  - フィードバック長さの差に対する Cohen's d
  - 結果: Length d=2.84, Criteria d=0.93, ClearDir d=0.73, Prioritization d=0.36, Accurate d=0.22, Supportive d=0.17

- [x] **正規性検定** (N6) ✓ manuscript+reply済
  - 各スコアの Shapiro-Wilk 検定
  - 非正規の場合: Wilcoxon signed-rank test を追加実施
  - 結果: ルーブリック5項目すべて非正規(p<.001), 長さのみ正規(p=.550), Wilcoxon=t-testと同結論

- [x] **正確なp値の取得** (L7) ✓ manuscript+reply済
  - 本文: "p < 0.05" → 各項目の正確な補正後p値を個別記載
  - Table 2, Table 3: 未補正・補正後の2列構成で正確なp値を表示

## 1.2 追加データ集計

- [x] **学生ログの特性** (F5, G1, G2) ✓ manuscript+reply済
  - 文字数: 範囲 51 - 2342, 平均 675.2, SD 459.8
  - 形式: 自由記述のみ
  - 文字数制限: なし

- [x] **欠測データの確認** (Editor 9) ✓ manuscript+reply済
  - 欠測の有無: なし
  - 欠測割合: 0% (3,220 obs, 100% complete)
  - MCAR検定結果（必要な場合）: 不要（欠測なし）

- [x] **割当詳細の確認** (N7) ✓ manuscript+reply済
  - フィードバックペアの並べ替え方法: ランダム割当
  - 順序のバランス: バランスあり（約半数ずつ）
  - 評価者が同一部門の複数記録を評価: あり（ランダム割当のため）

## 1.3 データ確認（元データ参照）

- [x] **スマホ/PC使用率** (G1-a) ✓ manuscript+reply済
  - 全員スマホ使用

- [x] **学生コホート構成** (G4) ✓ manuscript+reply済
  - 同一コホート（5年→6年に進級）
  - 日本の学年は4月開始

- [x] **プロンプトの長さ指示** (H1, N3) ✓ manuscript+reply済
  - 長さ指示の有無: あり（500字）
  - 指示内容: パイロットテスト(制限なし,200,300,400,600)で最適バランスとして決定
  - 最大トークン制限: なし（max_tokens未設定）
  - 指導医への制約: なし

- [x] **API呼び出しの独立性** (H3) ✓ manuscript+reply済
  - 各フィードバックは独立したAPIコール: はい
  - 文脈汚染の可能性: なし

## 1.4 図の修正・新規作成

- [x] **Participant Flowchart 新規作成** (Editor 5) ✓ manuscript+reply済
  - JARSテンプレート使用
  - 各段階の参加者数を記載
  - ファイル: src/assets/JARS_flowchart/jars-quant-participant-flowchart.svg

- [ ] **Figure 3 修正** (G6)
  - "accurate" と "clear direction" のx軸に数値追加
  - ファイル: assets/fig_diff_ai_vs_supervisor.svg

- [ ] **図表の項目順序統一** (G3)
  - Figure 3 と Table 2 の順序確認
  - 必要に応じて修正

---

# Phase 2: 原稿修正（高優先度）

> **前提**: Phase 1 の分析結果が必要な項目は Phase 1 完了後に着手

## 2.1 ルーブリックの限界と解釈の明確化 (F1, L1, H2)

- [ ] **Introduction での早期明示**
  - Steiss et al. ルーブリックは書面フィードバック用であり、臨床的次元（診断推論、専門的判断等）を直接評価しないことを記載

- [ ] **Results での解釈限定**
  - Tables 2, 3 の解釈時に「このルーブリック基準において」と明記
  - AIが「全体的に優れている」という誤解を避ける表現に修正

- [ ] **Discussion での補完説明**
  - 質的分析が臨床的価値を補完していることを強調
  - ルーブリックスコアと教育的品質の区別を明確化

## 2.2 100%検出のバイアス議論 (F2, L2)

- [ ] **Discussion/Limitations に追加**
  - 全評価者が正確に識別→ブラインド評価が成立していない可能性
  - 識別が評価に影響した可能性（expectancy bias）を議論
  - 識別可能性自体が重要な知見であることを主張

- [ ] **L2への追加対応**（可能な場合）
  - 知覚された出典による層別分析の検討
  - または実施不可能な理由を説明

## 2.3 プロンプト最適化の認識 (F3, F4, H2, L5)

- [ ] **Methods での早期認識**
  - AIはルーブリックに最適化されたこと
  - 指導医は事後評価（rubric-naïve）であること
  - 「自然な」比較ではないことを明示

- [ ] **本文にプロンプト要約を追加** (L5)
  - プロンプトの主要要素を簡潔に記載
  - Multimedia Appendix への参照を維持

- [ ] **Limitations に追加**
  - プロンプト感度分析がないこと
  - 代替プロンプトでの結果が異なる可能性
  - 結果の一般化可能性・再現性の限界

## 2.4 タイトル・抄録の改訂 (Editor 2, 3, 4)

- [ ] **タイトル変更** (Editor 2)
  - JMIR形式: "Issue or Intervention in Demographic/Disease/Condition: Method/Study Design"
  - 現在: "Same logs, different voices: AI-generated vs human feedback during clinical clerkship in undergraduate education"
  - 修正案: _______________

- [ ] **抄録の強化** (Editor 3) - 最大450語
  - [ ] Methods: 研究デザイン、サンプルサイズ、人口統計学的要因追加
  - [ ] Methods: 材料、アウトカム指標、サンプリング手順追加
  - [ ] Results: 統計検定名、α水準追加
  - [ ] Results: 点推定値と信頼区間追加
  - [ ] Results: パーセンテージに絶対値と信頼区間追加

- [ ] **結論段落の強化** (Editor 4)
  - [ ] 抄録の結論に追加: 革新性、既存研究との違い、分野への貢献、実世界への示唆
  - [ ] Discussion の結論に同内容を追加
  - [ ] 両者の内容一致を確認

## 2.5 JARS準拠の構造化 (Editor 1, 6)

- [ ] **Methods の見出し再構成** (Editor 1)
  - [ ] 量的部分: Inclusion/Exclusion 追加
  - [ ] 量的部分: Participant Characteristics 追加
  - [ ] 量的部分: Sampling Procedures 追加
  - [ ] 量的部分: Sample Size/Power/Precision 追加
  - [ ] 量的部分: Measures and Covariates 追加
  - [ ] 質的部分: Research Design Overview 追加
  - [ ] 質的部分: Study Participants or Data Sources 追加
  - [ ] 質的部分: Participant Recruitment 追加
  - [ ] 質的部分: Data Collection 追加

- [ ] **Ethical Considerations サブセクション追加** (Editor 6)
  - [ ] 1. 倫理審査・承認に関する声明
  - [ ] 2. インフォームドコンセントまたは免除の記載
  - [ ] 3. プライバシー・機密保持の保護
  - [ ] 4. 補償の種類と金額
  - [ ] 5. 個人識別不可能性の確認

---

# Phase 3: 原稿修正（中優先度）

## 3.1 E-ポートフォリオ/ログ特性の追加 (F5, G1, G2, H1, N2)

> **依存**: Phase 1.2, 1.3 の結果が必要

- [x] **Methods にログ特性を追加** ✓ manuscript+reply済
  - 文字数範囲、平均、SD → Results に記載
  - 形式（自由記述のみ）→ Methods/Setting に記載
  - 文字数制限なし → Methods/Setting に記載
  - スマホ使用 → Methods/Setting に記載
  - ログ長とスコアの相関分析 → Results 新セクション追加

- [x] **AIフィードバック長さ設定の明確化** (H1) ✓ manuscript+reply済
  - プロンプトの長さ指示: 500字制限あり（パイロットテストで決定）
  - 最大トークン制限: なし
  - 指導医フィードバックの制約: なし

- [ ] **指導医フィードバックの文脈詳細** (N2)
  - フィードバックへの期待（長さ/構造）
  - フィードバック訓練の有無
  - 口頭 vs 書面フィードバックの位置づけ

## 3.2 統計報告の強化 (Editor 7, G5, L7, N4, N6)

> **依存**: Phase 1.1 の結果が必要

- [x] **効果量の追加** (G5) ✓ manuscript+reply済
  - フィードバック長さの差に Cohen's d を追加（全比較に拡張）

- [x] **正確なp値の報告** (L7) ✓ manuscript+reply済
  - 本文・表ともに正確なp値を報告（p ≥ .001は3桁、p < .001はAPA準拠で"<.001"）

- [ ] **p=1.000 の説明** (N4)
  - Bonferroni補正後に1.000となる場合があることを注記

- [x] **正規性検定の結果追加** (N6) ✓ manuscript+reply済
  - Shapiro-Wilk 検定結果
  - 非正規の場合はノンパラメトリック検定結果も報告

- [ ] **JMIR統計ガイドライン準拠確認** (Editor 7)
  - 全統計値の形式を確認・修正

## 3.3 評価者間信頼性 (F8, N5)

> **依存**: Phase 1.1 の結果が必要

- [x] **信頼性指標の報告**（計算可能な場合） ✓ manuscript+reply済
  - Cohen's kappa および ICC を Results に追加（新テーブル）

- [x] **Limitations への記載**（計算不可能または低い場合） ✓ manuscript済
  - 各データセットを1ペアのみが評価した限界を記載

## 3.4 図表の改善 (Editor 5, 10, F6, G3, G6)

> **依存**: Phase 1.4 の図作成が必要

- [x] **Participant Flowchart の挿入** (Editor 5) ✓ manuscript+reply済
  - Results冒頭に挿入、自己完結的キャプション付き

- [ ] **図表キャプションの詳細化** (Editor 10)
  - [x] Figure 1: 研究デザイン、対象集団、場所、期間を追加 ✓
  - [x] Figure 2 (JARS flowchart): 新規作成時に対応済 ✓
  - [ ] Figure 3: 同上
  - [ ] 全テーブル: 自己完結的なキャプションに修正

- [ ] **Joint Display (Table 6) の整理** (F6)
  - Row 1 と Row 3 の重複確認
  - 必要に応じて統合または区別を明確化

- [ ] **ルーブリック項目のラベル付与** (G3)
  - (A) criteria-based, (B) clear directions, (C) accuracy, (D) prioritization, (E) supportive tone
  - 本文、Figure 3、Table 2 で順序統一

- [ ] **Figure 3 の更新反映** (G6)
  - Phase 1.4 で修正した図を差し替え

## 3.5 その他の方法論的詳細

- [ ] **飽和達成の記載** (Editor 8)
  - 質的分析で飽和に達したかどうかを記載

- [x] **ランダム化・割当プロセスの明確化** (N7) ✓ manuscript+reply済
  - Design セクションに詳細を追記

- [x] **API呼び出しの独立性を明記** (H3) ✓ manuscript+reply済
  - Generating AI feedback セクションに追記

- [ ] **一貫性と変動性の解釈強化** (H4)
  - AI一貫性 = 設計上の特徴 ≠ 常に教育的に望ましい
  - 指導医変動性 = 選択的優先順位付けと臨床判断の反映

## 3.6 Discussion の強化

- [ ] **独自の貢献の明確化** (N1)
  - 教室/シミュレーション比較を超える新知見
  - 臨床実習文脈がフィードバックの性質をどう変えるか

- [ ] **言語・文化的文脈の考察** (F7)
  - 日本語・日本文化がAIパフォーマンスと受容に与える影響

- [ ] **知覚された品質 vs 実際の学習成果** (L3)
  - 結論を「知覚された品質」に明示的に限定

- [ ] **外的妥当性の限界** (L4)
  - GPT-4oのみ、単一機関のみであることを強調
  - 「AIフィードバック」全般への一般化を避ける

---

# Phase 4: 管理的項目・校正

## 4.1 追加セクション

- [ ] **Data Availability セクション追加** (Editor 13)
  - Acknowledgements の後に配置

- [ ] **資金提供者の役割記載** (Editor 14)
  - 研究デザイン、データ収集、分析、結果解釈、原稿執筆への関与の有無

- [ ] **生成AI使用の開示** (Editor 15)
  - GAIDET宣言ツール使用: https://panbibliotekar.github.io/gaidet-declaration/index.html

- [ ] **利益相反開示の確認** (Editor 12)
  - JMIRのCOI開示情報を確認し適切に記載

## 4.2 用語・表記の統一

- [ ] **用語の統一** (L6)
  - "AI feedback" / "GPT-4o feedback" / "LLM feedback" を統一
  - 採用する用語: _______________

- [ ] **略語の初出定義** (N8)
  - [ ] TRAPD を初出時に定義
  - [ ] JDA を初出時に定義
  - [ ] その他の略語確認

- [ ] **Multimedia Appendices の参照一貫性確認** (N8)

## 4.3 校正

- [ ] **タイポ・不自然な表現の修正** (F9)
  - 全文の校正

## 4.4 ジャーナル対応

- [ ] **ジャーナル移管の希望を回答** (Editor 11)
  - 希望するJMIR Publicationsジャーナル: _______________

---

# 作業ログ

| 日付 | フェーズ | 作業内容 | 完了項目 |
|------|---------|---------|---------|
| 2026-02-28 | 1.2, 3.1 | 欠測データ確認→Results記載, ログ特性→Methods/Results記載, ログ長-スコア相関→Results新セクション, reply記述(Editor9, F5, G1, G2) | 4項目 |
| 2026-03-01 | 1.2, 1.3, 3.1, 3.5 | コホート構成明確化(G4), AI長さ設定明確化(H1,N3), API独立性明記(H3), 割当詳細明確化(N7)→Methods修正+reply記述 | 6項目 |
| 2026-03-01 | 1.1, 3.2 | 正確なp値報告(L7): 本文の"p<0.05"→各項目の正確なp値に修正, CLMM表に未補正・補正後2列追加, reply記述 | 2項目 |
| 2026-03-01 | 1.4, 3.4 | JARS participant flowchart作成・挿入(Editor5), Figure1キャプション改善(Editor10), reply記述 | 3項目 |

---

# メモ・検討事項

## タイトル修正案
- 案1:
- 案2:
- 案3:

## ジャーナル移管希望先
- 第1希望:
- 第2希望:

## 分析リポジトリ情報
- パス:
- 必要なスクリプト:

## その他
-
