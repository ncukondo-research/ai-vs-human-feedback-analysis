# Reply to Reviewers

## EDITOR COMMENTS

### General comments

  > Thank you for submitting your manuscript. I have considered the reviewers' comments and, after my own reading, I would like to provide some additional guidance to help strengthen your manuscript.

RESPONSE: Thank you for your careful reading and the detailed guidance. We have addressed all of your comments and those of the reviewers in the revised manuscript. The major revisions include restructuring the Methods section to align with JARS mixed-methods reporting standards, revising the title and abstract to conform to JMIR guidelines, strengthening the statistical reporting, and adding several new sections (Data Availability, participant flowchart, and expanded Ethical Considerations). Point-by-point responses are provided below.

### Editor Comment.1

  > Comment: To ensure all information is provided, please use the headings from the mixed-methods JARS guidelines https://apastyle.apa.org/jars/mixed-table-1.pdf which indicates the following:
  > For the quantitative part of the study:
  > Method https://apastyle.apa.org/jars/quant-table-1.pdf
  > - Inclusion and Exclusion
  > - Participant Characteristics
  > - Sampling Procedures
  > - Sample Size, Power, and Precision
  > - Measures and Covariates
  > - etc...
  > For the qualitative part of the study:
  > Methods https://apastyle.apa.org/jars/qual-table-1.pdf
  > - Research Design Overview
  > - Study Participants or Data Sources
  > - Participant Recruitment
  > - Data Collection
  > - etc...
  > This will help readers with the relevant information to enable replication in future research.

RESPONSE: Thank you for this guidance. We have restructured the Methods section to align with the JARS mixed-methods reporting standards. Because this is a convergent mixed-methods study in which the same participants and data collection procedures serve both strands, we adopted a hybrid structure that avoids redundant duplication while incorporating all required JARS headings.

For the quantitative component, the Methods section now includes the following JARS-compliant subsections: Participants (with sub-headings for Inclusion and Exclusion, Participant Characteristics, and Sampling Procedures), Materials (comprising Generating AI Feedback, Prompt Development, and Evaluation Instrument, corresponding to Measures and Covariates), Sample Size, Power, and Precision, Data Collection, and Quantitative Analysis.

For the qualitative component, the JARS requirements are addressed as follows: the Research Design Overview is covered in the Design section, which describes the convergent mixed-methods framework; Study Participants or Data Sources is addressed in both the Participants section and the opening of the Qualitative Analysis section, which identifies the open-ended evaluator comments as the qualitative data; Participant Recruitment is covered in the Sampling Procedures sub-section; and Data Collection is addressed in the dedicated Data Collection section, which describes the evaluation procedure including the sequence of rubric scoring, free-text comments, and source identification.

The Integration of Results and Ethical Considerations sections have been retained as shared elements applicable to both strands.

### Editor Comment.2

  > Comment: Please modify the title to be in line with our journal guidelines for titles ("Issue or Intervention in Demographic/Disease/Condition: Method/Study Design") https://jmir.zendesk.com/hc/en-us/articles/115002943791-What-are-JMIR-s-guidelines-for-article-titles

RESPONSE: Thank you for this guidance. We have revised the title to follow the JMIR format of "Issue or Intervention in Demographic/Disease/Condition: Method/Study Design." The new title is: "AI-generated versus human supervisor feedback on medical students' clinical clerkship logs: convergent mixed methods study."

### Editor Comment.3

  > Comment: Please make your abstract more robust. As many readers only read abstracts, JMIR prefers abstracts that are robust and reflective of the manuscript as a whole. Author guidelines allow for up to 450 words in an abstract. The abstract must be structured (Background-Objectives-Methods-Results-Conclusions).
  > What to include in the abstract:
  > - In the Methods, provide research design (e.g., cross-section, retrospective/prospective cohort), total sample size or per group, some demographic/clinical factors e.g., participants sex, age, diseases, etc., the materials used (e.g., instruments, apparatus), the outcome measures, sampling procedure, and the data-gathering procedures, and if applicable, the source of any secondary data as well as from where participants were recruited, and the selection criteria.
  > - In the Results, mention the name of the statistical tests, the alpha level, and all point estimates (e.g., differences between groups, single point estimates, etc) with confidence intervals. If presenting %, also include absolute values and confidence intervals.

RESPONSE: Thank you for this guidance. We have substantially strengthened the abstract (now 442 words) to be more robust and reflective of the manuscript.

In the Methods section, we now specify the research design (convergent mixed-methods study), the total sample (161 weekly clerkship logs from 47 fifth- and sixth-year medical students across 12 clinical departments), the study site and period (Nagoya University, Japan; January–May 2024), the inclusion and exclusion criteria (164 eligible logs assessed, 3 excluded because supervisors entered contact messages rather than substantive feedback), the materials (GPT-4o for AI feedback generation; a validated five-category feedback quality rubric), the data-gathering procedures (blinded, randomized evaluation order consisting of rubric scoring, open-ended comments, and source identification), and the statistical approach (paired t-tests, cumulative link mixed effect models; alpha = .05 with Bonferroni correction; qualitative thematic analysis; Joint Display Analysis).

In the Results section, we now report the names of statistical tests, the alpha level, and all point estimates with 95% confidence intervals. Specifically, we report the feedback length difference with Cohen d and its 95% CI, the cumulative link mixed model odds ratios with 95% CIs and exact P values for all five rubric categories, the variance ratio with the Levene F statistic and P value for consistency analysis, and the detection accuracy (20/20 evaluators).

Regarding demographic and clinical factors: detailed demographic information (age, sex) was not collected from either participant group. Student clerkship logs were collected through routine educational practice under opt-out consent, which did not include consent for the collection or disclosure of individual demographic data. Feedback evaluators participated as unpaid volunteers, and the information requested was kept to a minimum to reduce burden and invasiveness. This is described in the Participant Characteristics and Ethical Considerations subsections of the revised manuscript.

### Editor Comment.4

  > Comment: In the concluding paragraphs of the abstract and discussion, please mention 1) how the study is innovative, 2) how it is different from existing studies, 3) what it brings to the field, and 4) its implications in the real world. Ensure the content in both concluding paragraphs match.

RESPONSE: Thank you for this suggestion. We have revised the Conclusions sections of both the abstract and the Discussion to address all four elements, and ensured that their content is aligned.

Regarding innovation and difference from existing studies: both sections now state that this study extends the comparison of AI-generated and supervisor feedback to an authentic clinical clerkship environment, moving beyond classroom and simulation settings examined in prior work.

Regarding what the study brings to the field: both sections highlight the key distinction between text-anchored AI feedback, which systematically addresses written log content in alignment with rubric criteria, and experience-based supervisor feedback, which draws on clinical observation and professional judgment.

Regarding real-world implications: both sections conclude that AI feedback should supplement rather than replace supervisor feedback, and that hybrid models leveraging each type's advantages warrant investigation in clinical education.

The Discussion Conclusions additionally specifies the model used (GPT-4o with a rubric-embedded prompt) and identifies future research directions, including generalization to other AI models, languages, and institutional contexts, as well as the impact of AI-assisted feedback on student learning outcomes.

### Editor Comment.5

  > Comment: The JARS Participant Flowchart https://apastyle.apa.org/jars/jars-quant-participant-flowchart.pdf can provide readers with visual information about the participants across each stage of the study. I strongly suggest authors use this, which will need to be amended according to the study design.

RESPONSE: Thank you for this suggestion. We have created a JARS-compliant participant flowchart adapted to our within-subjects study design and added it to the Results section as a new figure. The flowchart depicts participant flow through four stages: (1) Enrollment—164 logs from 47 medical students across 12 departments were assessed for eligibility, with 3 logs excluded because supervisors entered contact messages instead of feedback; (2) Feedback Generation—each of the 161 eligible logs received both supervisor feedback (collected during clerkship) and AI feedback (GPT-4o, generated June 1, 2024), reflecting the within-subjects design; (3) Evaluation—161 paired datasets were evaluated by 10 faculty and 10 student evaluators blinded to feedback source; and (4) Analysis—quantitative analysis of 3,220 observations (161 logs × 2 feedback types × 2 evaluators × 5 rubric items; 100% data completeness) and qualitative thematic analysis of open-ended evaluator comments. We also updated the caption of the existing feedback flow diagram (Figure 1) to be more descriptive and self-contained, in accordance with Editor Comment 10.

### Editor Comment.6

  > Comment: Add a separate "Ethical considerations" subsection in the Methods section and include a statement addressing each of the five following points:
  > 1. Statement regarding human subject research ethics review, exemptions, and approvals.
  > 2. Informed consent descriptions or waiver language for studies identified as human subjects research.
  > 3. Privacy and confidentiality protection description for human subjects research.
  > 4. Compensation type and amount for human subjects research.
  > 5. Please make sure that no identification of individual participants/users in any images of the manuscript or supplementary material is possible.

RESPONSE: Thank you for this important request. An "Ethical Considerations" subsection already existed in the Methods section of our original submission. We have now ensured that it explicitly addresses all five points:

1. Ethics review and approval: The study was approved by the Ethics Committee of Nagoya University Hospital (approval number: 2023-0451). This statement was present in the original manuscript and has been retained.
2. Informed consent: An opt-out approach was used for the research use of student clinical clerkship logs and supervisor feedback accumulated in the e-portfolio, with explanations provided to all students and supervisors. Research participants who served as evaluators were recruited using an opt-in approach and all provided informed consent before participating. These descriptions were present in the original manuscript and have been retained.
3. Privacy and confidentiality: All data used in the research were anonymized for analysis; all proper nouns were replaced with alphabetic characters, and linking tables were managed in an encrypted state. This description was present in the original manuscript and has been retained.
4. Compensation: We have added a statement that evaluators received no financial compensation for their participation; as acknowledgment of their contribution, they were provided with information about the research and early access to the AI prompt used for feedback generation.
5. Individual identifiability: We have added a statement confirming that no individually identifiable information of any participant is presented in this manuscript, tables, figures, or supplementary materials.

### Editor Comment.7

  > Comment: Please cross-check the statistics follow the journal's Guidelines for Reporting Statistics https://support.jmir.org/hc/en-us/articles/360019690851-Guidelines-for-Reporting-Statistics

RESPONSE: Thank you for this guidance. We have systematically cross-checked all statistical reporting in the manuscript against the JMIR Guidelines for Reporting Statistics and made the following corrections throughout the text, abstract, and tables. (1) P value formatting: all P values now use italic uppercase P with no leading zero and no spaces around operators (e.g., P<.001, P=.098), consistent with the guideline. (2) P values that equal 1.000 after Bonferroni correction (arising when the uncorrected value multiplied by the number of comparisons exceeds 1) have been changed to P>.99, in accordance with the guideline that P values cannot equal 0 or 1. (3) Cohen d is now reported without the possessive (previously "Cohen's d") with italic d, consistent with the guideline. (4) All table column headings now use "P value" rather than "p-value." (5) Spearman correlation headers now use "Spearman rho" without the possessive. These formatting changes have been applied consistently across the abstract, the body text, and all table headers.

### Editor Comment.8

  > Comment: Please mention if saturation was achieved.

RESPONSE: Thank you for raising this point. Because this study analyzed the complete set of open-ended evaluator comments from all 20 evaluators across all 161 datasets rather than sampling iteratively until no new themes emerged, data saturation in its conventional sense was not the analytic target. All available qualitative data were coded and analyzed; the resulting themes are therefore empirically grounded in the full dataset and can be considered theoretically sufficient for the purposes of this study. We have added this clarification to the Qualitative Analysis subsection of the revised Methods.

### Editor Comment.9

  > Comment: Please mention whether there were any missing data. If there were missing data, provide the proportion of missing data and perform the MCAR test to see if data were missing totally at random and consider performing multiple imputations.

RESPONSE: Thank you for this important point. We assessed data completeness across all variables. No missing data were identified: all 161 records contained complete rubric scores from both assessors (one faculty and one student) across all five items, yielding 3,220 observations with 100% data completeness. Consequently, neither MCAR testing nor multiple imputation was necessary. We have added a statement to this effect in the Results section, specifically following the description of the evaluation process (paragraph beginning "From October 2024 to January 2025...").

### Editor Comment.10

  > Comment: Please make your table and figure captions more descriptive. The captions should be detailed enough to be read without any reference from the text; please include study design, disease, study population, location, time frame, etc.

RESPONSE: Thank you for this suggestion. We have revised all figure and table captions to be self-contained. Each caption now includes the study context (convergent mixed-methods study, Nagoya University medical students, Japan, 2024) so that figures and tables can be understood independently of the main text. For the key results tables (Tables 2 and 3), captions additionally specify the rubric items, their labels, and the measurement scope of the instrument. For the remaining tables (Tables 1, 4, 5, 6, and 7) and figures (Figures 3, 4, and 5), we added a standardized description of the study population and setting alongside a brief explanation of what each figure or table displays. Figures 1 and 2 had already been updated with detailed captions as described in our response to Editor Comment 5.

### Editor Comment.11

  > Comment: Please let us know on revision if you would agree to a manuscript transfer to one of the suggested JMIR Publications journals, and which journal you prefer.

RESPONSE: Thank you for the suggestion. We respectfully prefer to keep the manuscript with JMIR Medical Education. This study provides practical insights for medical educators and medical education researchers considering the integration of AI into clinical feedback workflows, and we believe JMIR Medical Education is the most appropriate venue for reaching this audience.

### Editor Comment.12

  > Comment: Please ensure you have reviewed JMIR's online information regarding conflict of interest disclosures and included them accordingly in the manuscript in the appropriate section.

RESPONSE: Thank you for this reminder. We have reviewed JMIR's conflict of interest disclosure requirements. None of the authors have conflicts of interest to declare. The Conflicts of Interest section in the manuscript has been updated to state "None declared," consistent with JMIR formatting conventions.

### Editor Comment.13

  > Comment: Please add a section on Data Availability. Please add these data sharing statements after the Acknowledgements.

RESPONSE: Thank you for this request. We have added a Data Availability section after the Acknowledgements. The anonymized evaluation data, analysis code, and the source code of the AI feedback generation system are publicly available (doi: https://doi.org/10.5281/zenodo.18868578). The AI feedback generation prompt, the evaluation rubric, and its translation process are provided in Multimedia Appendices 1, 2, and 3, respectively. The original clinical clerkship logs are not publicly available because some entries may contain personally identifiable information about medical students, and public release of the log texts would exceed the scope of consent obtained through the opt-out procedure approved by the ethics committee.

### Editor Comment.14

  > Comment: Authors may wish to declare if any funder or funding body played a role in the study design, data collection, analysis, interpretation of results, or the writing of the manuscript.

RESPONSE: Thank you for this suggestion. We have added a statement to the manuscript clarifying that this work was supported by JSPS KAKENHI Grant Number 25K06542, and that the funder had no role in the study design, data collection, analysis, interpretation of results, or the writing of the manuscript.

### Editor Comment.15

  > Comment: Please use this tool to disclose in the manuscript whether generative AI was used in any portion of the manuscript writing https://panbibliotekar.github.io/gaidet-declaration/index.html

RESPONSE: Thank you for this request. We used the GAIDeT Declaration Generator to formally disclose the use of generative AI. According to the Generative AI Delegation Taxonomy (GAIDeT), the following tasks were delegated to generative AI tools under full human supervision: literature search and systematization, code generation, and translation. The specific tools used were GitHub Copilot (Claude Sonnet 4.5, Claude Opus 4.5, GPT-4.1, GPT-5) and Claude Code (Claude Opus 4.5) for R code generation and Japanese-to-English translation assistance, and Deep Research by ChatGPT (GPT-4o, GPT-5, GPT-5.1) for literature searches. All generated code and text were reviewed, tested, and modified by the authors. Generative AI tools are not listed as authors. This declaration has been added to the Acknowledgements section of the manuscript.

------------------------------------------------------

## Reviewer F:

### General comments

  > This paper offers a timely and methodologically rigorous comparison of AI-generated and supervisor-provided feedback on authentic clinical clerkship logs. By moving beyond classroom-based tasks into real clinical settings, and by integrating quantitative rubric scoring with qualitative thematic and joint display analyses, the authors provide a nuanced account of how AI and human feedback differ not only in quality but in kind.
  > The central finding, that AI delivers rubric-aligned and text-anchored feedback while supervisors provide clinically expert and relationally meaningful feedback, is convincing and well supported. However, the manuscript would benefit from clearer framing of what the rubric captures (and omits), more critical engagement with the implications of perfect detectability, and greater caution in interpreting higher rubric scores as educational superiority. Overall, this is a strong contribution that would be further strengthened by tighter theoretical and methodological framing.

RESPONSE: Thank you for this thoughtful and constructive assessment. We have carefully addressed the three areas you identified. First, we have made the rubric's scope and limitations explicit from the Introduction onward, clarifying that it captures structural dimensions of feedback quality but not clinically specific attributes such as diagnostic reasoning or professional judgment. Second, we have expanded the Discussion to engage more critically with the implications of perfect source identification, including the possibility of expectancy bias and the interpretation of detectability itself as evidence of qualitative differences. Third, we have added interpretive qualifications throughout the Results and Discussion to ensure that higher AI rubric scores are not read as evidence of overall educational superiority. Detailed responses to each specific comment follow below.

## Major

### F1: Reviewer F Comment 1

  > Comment: The Steiss et al. rubric was designed for written academic feedback, not for workplace-based clinical education. It emphasizes criteria-based structure, clarity of directions, and alignment with text—all dimensions in which AI was designed (via prompting) to excel. Meanwhile, key dimensions of high-quality clinical feedback—such as credibility, situational awareness, diagnostic reasoning, and professional judgment—are not directly captured.
  > This creates a construct validity problem: AI is being evaluated on a metric that is closer to its design space than to the supervisors'. Your own qualitative findings ("Perspective as a clinician", "Continuity with practice") demonstrate that supervisors contribute important value that the rubric cannot score. This tension should be made explicit earlier and more strongly in the paper, especially when interpreting the higher AI scores in Tables 2 and 3.
  > At present, readers may mistakenly infer that AI feedback is "better" overall, rather than "better at meeting this particular rubric".

RESPONSE: Thank you for this important observation. We agree that the tension between the rubric's structural focus and the clinically meaningful dimensions of supervisor feedback deserves explicit acknowledgment, and that readers may otherwise interpret higher AI rubric scores as indicating overall educational superiority.

We have made the following changes to address this concern.

In the Introduction (end of the Rationale subsection), we added a framing note explaining that, because rubric-based instruments tend to emphasize structural dimensions rather than clinically specific qualities such as diagnostic reasoning and professional judgment, a complementary qualitative component was incorporated to capture dimensions of feedback value that rubric scoring alone cannot assess. This framing also serves to justify the mixed-methods design.

In the Methods section (Prompt Development subsection), we now explicitly state that the prompt embedded the five criteria of the Steiss et al. rubric as the evaluation framework for generating feedback, while supervising physicians received no rubric-based instruction. We state that this means the study compares a rubric-optimized AI system with naturalistic supervisor feedback rather than constituting a neutral comparison of inherent feedback quality.

In the Results section (Comparison of Scores subsection), we added an interpretive paragraph following the score comparison data, directing readers to consider this design asymmetry when interpreting Tables 2 and 3, and referencing the qualitative themes of Perspective as a clinician and Continuity with practice as complementary evidence of clinical value that the rubric does not capture.

In the Limitations section, we substantially expanded the discussion of the rubric's scope. We now explicitly state that the Steiss et al. rubric was designed for written academic feedback and emphasizes structural dimensions that are also embedded in the AI prompt, while clinically meaningful attributes such as diagnostic reasoning and professional judgment are not directly captured. Rubric score differences therefore reflect adherence to specific structural dimensions rather than overall educational quality.

We also added brief notes to the captions of Tables 2 and 3 specifying what the rubric does and does not measure, so that readers who focus on the tables without reading the surrounding text are not misled.

Regarding the addition of a clinically oriented evaluation framework: implementing a validated clinically oriented rubric evaluation post hoc was not feasible within the scope of this revision. We believe the qualitative findings partially address this gap, as the themes of Perspective as a clinician and Continuity with practice capture exactly the clinical dimensions that supervisors contribute and that the Steiss et al. rubric cannot score. These qualitative findings are now more explicitly framed in the Limitations as complementary evidence of the clinical value of supervisor feedback.

### F2: Reviewer F Comment 2

  > Comment: The 100% detection accuracy: A striking finding is that all 20 evaluators (10 faculty and 10 students) correctly identified the source of the feedback in every instance. While the study aimed for a blinded evaluation, this perfect detection suggests that the "voice" of the AI is unmistakably distinct from human supervisors in this context. The authors should discuss whether this immediate identification might have introduced a cognitive bias in how evaluators applied the rubric scores.

RESPONSE: Thank you for raising this important point. We agree that the implications of perfect detection accuracy deserve explicit discussion.

We would like to clarify the blinding procedures that were in place. Within each dataset, the presentation order of the two feedback types (AI vs supervisor) was randomly assigned so that approximately half presented AI feedback first and the other half presented supervisor feedback first. All source labels were removed. Critically, the identification question was administered only after evaluators had completed all rubric scoring and free-text comments for that feedback entry. This sequence was designed to ensure that evaluators recorded their quality judgments before being asked about the source.

We acknowledge, however, that the perfect detection accuracy indicates that the textual characteristics distinguishing the two feedback types were highly salient. Even though evaluators were not informed of the source, they may have formed implicit judgments during the evaluation process based on features such as text length, structural patterns, and language style. We cannot rule out the possibility that such implicit recognition influenced rubric ratings.

In the revised manuscript, we have addressed this concern in three places. First, in the Methods (Evaluation Instrument), we now explicitly state that the identification question was presented only after all rubric scoring and free-text comments had been completed. Second, in the Results (Identification of Feedback Source), we now note that this finding occurred despite the blinding procedures and direct readers to the Discussion for interpretive considerations. Third, in the Discussion (Comparison with the Literature), we have expanded the paragraph on feedback source identification to discuss both aspects: the possibility that implicit recognition introduced expectancy bias, and the interpretation that perfect detection constitutes a substantive finding reflecting genuinely pronounced differences between the two feedback types, consistent with all five qualitative themes. We have also added a new limitation (Third) addressing this issue, including the logical impossibility of stratifying by perceived source when perceived and actual source are identical for every observation.

### F3: Reviewer F Comment 3

  > Comment: AI feedback was explicitly engineered to follow the same rubric used for evaluation (via prompt design referencing Steiss et al. and other criteria). Supervisors, by contrast, were not trained or instructed to write in accordance with that rubric.
  > This creates a form of criterion contamination: the AI was optimized for the scoring instrument, whereas supervisors were evaluated post hoc against it. This does not invalidate the findings, but it does mean the results cannot be interpreted as a neutral comparison of "natural" AI vs human feedback quality. This limitation should be acknowledged more explicitly and earlier (not only as part of generic limitations).

RESPONSE: Thank you for identifying this methodological concern. We agree that the criterion alignment between the AI prompt and the evaluation rubric should be acknowledged more explicitly and earlier in the manuscript.

In response, we have added the following to the Methods section (Prompt Development subsection): the prompt explicitly embedded the five criteria of the Steiss et al. rubric as the evaluation framework for generating feedback, while supervising physicians provided feedback according to their usual clinical practice without rubric guidance. We now state explicitly that this means the study compares a rubric-optimized AI system with naturalistic supervisor feedback rather than constituting a neutral comparison of inherent feedback quality.

This framing is introduced briefly in the Introduction (end of the Rationale subsection) and expanded in the Limitations section. We also added an interpretive paragraph at the end of the Comparison of Scores subsection in the Results, directing readers to interpret the reported score differences with this design feature in mind.

We agree with the reviewer that this asymmetry does not invalidate the findings but changes how they should be interpreted. The rubric score advantages for AI on criteria-based and clear direction items, where effect sizes are large (Cohen d = 0.93 and 0.73, respectively), reflect the degree to which AI adhered to dimensions it was explicitly prompted to follow, rather than demonstrating inherent superiority on those dimensions.

### F4: Reviewer F Comment 4

  > Comment: Although the manuscript describes prompt development in detail, it treats this process primarily as a technical prerequisite rather than as a core methodological and pedagogical intervention. In reality, the prompts determine what the AI attends to, what it values, and what kind of feedback it produces. By explicitly embedding rubric criteria, structural expectations, and feedback principles into the prompt, the authors effectively trained the AI to perform well on the very dimensions later used for evaluation. This means the study does not simply compare "AI feedback" with "supervisor feedback," but rather compares a rubric-optimized AI system with naturalistic supervisor feedback, introducing a form of construct alignment that advantages the AI condition.
  > Furthermore, the absence of any prompt sensitivity analysis limits interpretability and reproducibility. It remains unclear whether the observed superiority of AI on criteria-based and clarity dimensions reflects inherent properties of GPT-4o or is contingent on this specific, carefully engineered prompt. Alternative prompts—shorter, less structured, or more clinically oriented—might have produced qualitatively different AI feedback and potentially different comparative outcomes. Without testing or reporting such alternatives, readers cannot assess the robustness or generalizability of the findings, and other researchers cannot replicate or extend the work in a principled way.

RESPONSE: Thank you for this detailed analysis. We agree that the prompt development process should be positioned as a core methodological decision rather than a technical prerequisite, and that the absence of a prompt sensitivity analysis is a genuine interpretive limitation.

In the revised Methods section (Prompt Development subsection), we have added explicit language identifying the prompt as a key methodological choice that shapes what the AI attends to and values. We now state that the prompt embedded the Steiss et al. rubric criteria as the evaluation framework, and that this means the comparison is between a rubric-optimized AI system and naturalistic supervisor feedback rather than a comparison of inherent feedback quality potential. This is complemented by a framing note added to the Introduction and an expanded discussion in the Limitations section.

Regarding prompt sensitivity analysis, we acknowledge this as a meaningful limitation and have added it explicitly to the Limitations section. During the pilot testing phase, multiple prompt variations were tested before the final prompt was selected; however, these iterations were conducted as part of an informal development process rather than a systematic sensitivity analysis, and the alternative outputs were not preserved for comparison. It is therefore not possible to retrospectively determine whether the observed rubric score advantages reflect inherent properties of GPT-4o or are contingent on this specific prompt engineering. We also acknowledge that the AI and its prompt function as an inseparable unit in this study; the observed feedback quality reflects the combined effect of the model's capabilities and the specific prompt design, meaning neither component can be evaluated independently. Alternative prompts, whether shorter, less structured, or more clinically oriented, might produce qualitatively different outcomes, limiting both the interpretability and the reproducibility of the current findings. We have noted this as an important direction for future research.

## Minor

### F5: Reviewer F Comment 5

  > Comment: Since AI feedback is tightly text-anchored, variation in student log quality may drive AI performance. A brief characterization of the logs (length, completeness, variability) would help interpret the findings.

RESPONSE: Thank you for this suggestion. We have added a characterization of the student logs in the revised manuscript. In the Methods (Setting), we now describe the log format: each daily entry consists entirely of free-text fields in which students describe what they did during the clerkship, the cases they experienced, what they learned, and what they plan to do next, with no character limits imposed. In the Results, we report that weekly logs varied considerably in length (mean 675.2 characters, SD 459.8; median 551; range 51–2,342). To directly address whether this variation influenced scores, we computed Spearman correlations between log character count and each rubric score separately by feedback provider. After Bonferroni correction, no significant correlations were observed for either AI or supervisor feedback, indicating that variation in log length did not systematically drive rubric scores for either feedback type. These results have been added as a new subsection ("Relationship Between Student Log Length and Feedback Scores") in the quantitative Results.

### F6: Reviewer F Comment 6

  > Comment: Table 6 is valuable but dense. Some rows (e.g., 1 and 3) overlap conceptually. Consider tightening this to avoid redundancy.

RESPONSE: Thank you for this observation. We reviewed Rows 1 and 3 of Table 7 (Joint Display) and agree that both draw on feedback length data and the Text Length qualitative theme, which creates an appearance of overlap. However, the two rows address distinct analytic questions and yield different meta-inferences. Row 1 addresses the raw length difference between AI and supervisor feedback: AI feedback was significantly longer, and the qualitative theme explains how this length difference affected perceived quality (e.g., enabling specific examples but sometimes resulting in verbosity). Row 3 addresses the correlation between feedback length and rubric scores: for supervisors, longer feedback was associated with higher scores, whereas no such relationship existed for AI feedback. Combined with the qualitative observations, this generates the new insight that sufficient length is necessary to cover required feedback elements, but longer feedback is not inherently better, as prioritization matters as well. To make this distinction clearer, we have revised the quantitative column descriptions in the Joint Display table: Row 1 now reads "Feedback length difference (AI > supervisor)" and Row 3 now reads "Correlation between feedback length and rubric score (significant for supervisors, absent for AI)." We believe both rows contribute distinct integrative value and have retained them as separate entries with the clarified descriptions.

### F7: Reviewer F Comment 7

  > Comment: This study is conducted in Japanese, with Japanese students, supervisors, and AI output. The qualitative findings show that language naturalness and tone strongly influenced perceptions. Yet the discussion treats the results as broadly applicable to AI in clinical education. The authors should more carefully theorize how linguistic and cultural context may shape both AI performance and its reception.

RESPONSE: Thank you for this important point. We have addressed the linguistic and cultural context in two places. In the Limitations (First), we now note that the study was conducted entirely in Japanese and that GPT-4o's performance in Japanese may differ from its performance in English, potentially affecting the naturalness and quality of AI-generated feedback. We also note that the cultural context of Japanese medical education, where deference to senior clinicians is strongly emphasized, may have contributed to higher regard for supervisor feedback and influenced evaluators' perceptions of the two feedback sources. In the Conclusions, we now explicitly identify language and institutional context as dimensions that require investigation before generalizing the findings.

### F8: Reviewer F Comment 8

  > Comment: Consider reporting inter-rater reliability: Since each dataset was evaluated by one student and one faculty member, it would be helpful to report agreement or consistency between these two perspectives.

RESPONSE: Thank you for this suggestion. We computed weighted Cohen's kappa (quadratic weights) and intraclass correlation coefficients between faculty and student evaluators for each rubric item, separately by feedback type. For supervisor feedback, inter-rater agreement was fair to moderate (weighted κ = 0.37–0.54, all p < .001). For AI feedback, agreement was poor (weighted κ = 0.04–0.15, mostly non-significant). These results have been added as a new subsection ("Inter-Rater Reliability") with a table in the quantitative Results, and the limitation that each dataset was evaluated by only one faculty-student pair has been added to the Limitations section.

### F9: Reviewer F Comment 9

  > Comment: There are occasional typos and awkward phrasings (likely from translation) that should be smoothed in final copyediting.

RESPONSE: Thank you for noting this. We have carefully proofread the entire manuscript and corrected the following issues: typographical errors including double spaces and missing spaces before parentheses in statistical reporting; grammatical errors including subject-verb disagreements (e.g., "logs that was written" corrected to "logs that were written") and missing prepositions (e.g., "perceived of higher quality" corrected to "perceived to be of higher quality"); awkward phrasings from translation (e.g., "We will use the term 'AI feedback' used in this study below" simplified to "The term 'AI feedback' is used in this study"); a terminology inconsistency where "reports" was used instead of the standard term "logs"; missing serial conjunctions; and punctuation corrections including a missing comma before a nonrestrictive clause and incorrect hyphenation of "odds ratio."

------------------------------------------------------

## Reviewer G:

### General comments

  > This study evaluates and compares the quality of feedback provided by physicians and generative AI on student e-portfolios during clinical clerkships. Although the study has a limitation in that it focuses on students from a single university, I believe it is a meaningful contribution to the field, particularly in its qualitative evaluation and discussion regarding the use of generative AI for formative assessment. However, there are several points of clarification and areas for improvement that should be addressed.

RESPONSE: Thank you for recognizing the contribution of the qualitative evaluation and discussion. We have addressed all of your requests for clarification, including detailed information about the e-portfolio format and log characteristics, improved figure presentation, and unified ordering of rubric items across all tables and figures. Specific responses are provided below.

## Major

### G1: Reviewer G Comment 1

  > Comment: Questions about the e-portfolio
  > These are requests for clarification regarding the format and volume of the e-portfolio entries:
  > - (a) Figure 1 shows a student inputting data into the e-portfolio via smartphone. Approximately what percentage of students used smartphones versus PCs for data entry?
  > - (b) Does the e-portfolio consist solely of free-text entries, or are there specific questions or Likert scales included?
  > - (c) Are there any upper or lower word/character limits for student posts in the e-portfolio?

RESPONSE: Thank you for these clarification requests. We have added this information to the Methods (Setting) section of the revised manuscript. Specifically: (a) All students entered their logs via smartphone. (b) The e-portfolio consists solely of free-text entries in which students describe what they did during the clerkship, the cases they experienced, what they learned, and what they plan to do next; no Likert scales or structured questions are included. (c) No upper or lower character limits are imposed on student posts.

### G2: Reviewer G Comment 2

  > Comment: Relationship between e-portfolio content and AI feedback quality
  > It is understandable that the quality of generative AI feedback depends on the content of the portfolio. In this regard, and relating to my previous question, I am interested in the typical length of the e-portfolio entries. For instance, were there any specific trends observed, such as AI feedback being more likely to overlook clinical perspectives when the e-portfolio entry was below a certain word count? Furthermore, the degree of uniformity in the original e-portfolio descriptions may have also influenced the results. Please consider adding information regarding the volume and nature of the portfolio entries to the Methods section, or addressing these points in the Discussion or as a Study Limitation.

RESPONSE: Thank you for this insightful comment. We have added descriptive statistics on log length to the Results section: weekly logs varied considerably (mean 675.2 characters, SD 459.8; median 551; range 51–2,342). To examine whether log length influenced feedback quality, we calculated Spearman correlations between log character count and each rubric score separately for AI and supervisor feedback. After Bonferroni correction, no significant correlations were observed for either feedback type (all corrected p > .05). This indicates that variation in log length did not systematically influence rubric scores, and we did not find evidence that shorter logs led to lower AI feedback quality on rubric-measured dimensions. These results are reported in a new subsection ("Relationship Between Student Log Length and Feedback Scores") in the quantitative Results. We note, however, that the rubric does not directly capture clinical perspective; the qualitative analysis remains the primary evidence for AI's tendency to overlook clinical context regardless of log length.

## Minor

### G3: Reviewer G Comment 3

  > Comment: Questions about the evaluation rubric criteria
  > The authors utilize five evaluation categories for the rubric (e.g., criteria-based, clear directions for improvement). As these items are currently not numbered or labeled with IDs, they are somewhat difficult to track. It would be helpful to assign labels such as (A) criteria-based, (B) clear directions for improvement, and so on. Additionally, the order of these categories is inconsistent between the main text and Figure 3 / Table 2. Please ensure they are aligned throughout the manuscript.

RESPONSE: Thank you for this suggestion. We have assigned alphabetical labels (A)–(E) to all five rubric items and standardized their order throughout the manuscript. The items are now consistently presented in the following sequence: (A) Criteria Based, (B) Clear Direction, (C) Accurate, (D) Prioritization, (E) Supportive. This order is now applied uniformly in Figure 3 (panel labels updated), Table 2 (rows reordered), and Table 3 (rows reordered), as well as in the relevant body text.

### G4: Reviewer G Comment 4

  > Comment: About Clarification regarding student year-grades
  > The paper states that the research was conducted with fifth- and sixth-year students from January 9, 2024, to May 5, 2024. Does this mean the cohort consisted of the same group of students (e.g., those who were in their fifth year until March and transitioned to their sixth year in April)? Or did the study include separate groups of fifth-year and sixth-year students? Please clarify.

RESPONSE: Thank you for this clarification request. The participants were a single cohort of students who were in their fifth year until March 2024 and transitioned to their sixth year in April 2024 as part of their normal academic progression (the Japanese academic year begins in April). We have clarified this in the Setting section of the revised manuscript.

### G5: Reviewer G Comment 5

  > Comment: About Statistical results
  > Please report the effect sizes (in addition to p-values) for the differences in feedback length.

RESPONSE: Thank you for this suggestion. We have added Cohen's d with 95% confidence intervals for all comparisons. For feedback length, the effect size was large (d = 2.84, 95% CI 2.50–3.19), reported in the text of the Results section. For rubric scores, effect sizes ranged from negligible to large: criteria-based (d = 0.93, 95% CI 0.79–1.06, large), clear direction (d = 0.73, 95% CI 0.61–0.86, medium), prioritization (d = 0.36, 95% CI 0.24–0.47, small), accurate (d = 0.22, 95% CI 0.11–0.33, small), and supportive (d = 0.17, 95% CI 0.06–0.28, negligible). These have been added as a new column in Table 2.

### G6: Reviewer G Comment 6

  > Comment: About Figure 3
  > If possible, please add specific values to the x-axis for the "accurate" and "clear direction" graphs.

RESPONSE: Thank you for this suggestion. We have updated Figure 3 so that x-axis tick values (−4 to 4) are now displayed on all five panels, including "accurate" and "clear direction." In the original figure, x-axis labels were suppressed for panels in the upper row that had another panel directly below them (a default behavior of the ggplot2 faceting system). We resolved this by switching to the facet_wrap2 function from the ggh4x package with the axes = "all" option, which forces all axis tick marks to appear on every panel regardless of their position in the grid.

------------------------------------------------------

## Reviewer H:

### General comments

  > This manuscript reports a well-designed mixed-methods study that compares AI-generated feedback with supervisor-provided feedback in real clinical clerkship settings. The use of a convergent mixed-methods design with joint display analysis is appropriate and well explained. Overall, this study makes a timely and valuable contribution to the medical education literature on the use of generative AI for learning support.

RESPONSE: Thank you for this positive evaluation of our study design and mixed-methods approach. We have addressed all of your comments, including clarifications on AI configuration and feedback length settings, the relationship between prompt optimization and rubric alignment, API call independence, and the interpretation of AI consistency versus supervisor variability. Specific responses follow below.

## Major

### H1: Reviewer H Comment 1

  > Comment: Clarification of AI Configuration and Feedback Length
  > Because feedback length is an important quantitative result and is also used to interpret feedback quality and consistency, it would be helpful to clarify whether the length of AI-generated feedback was influenced by model settings or prompt design.
  > Please clarify the following points:
  > (1) Whether the prompt included any explicit instructions about how detailed or long the feedback should be.
  > (2) Whether any maximum token limits or other output constraints were set for the AI.
  > (3) Whether supervisor feedback had any explicit or implicit constraints on length.

RESPONSE: Thank you for raising these important points. We have added clarifications to the Methods section of the revised manuscript. (1) Yes, the prompt included an explicit instruction to write feedback concisely within 500 characters. This character limit was determined through systematic pilot testing in which feedback was generated under various length constraints (no limit, 200, 300, 400, and 600 characters). Without any limit, the AI produced verbose output in which key points were diluted, whereas overly restrictive limits resulted in superficial feedback. The 500-character limit was selected as the optimal balance between conciseness and substantive coverage. (2) No maximum token limit (max_tokens parameter) was set at the API level; the output length was guided solely by the prompt instruction. (3) Supervising physicians received no instructions regarding length, structure, or format for their feedback. These details have been added to the "Prompt Development" subsection of the revised manuscript.

### H2: Reviewer H Comment 2

  > Comment: Prompt Optimization and Alignment with the Rubric
  > The manuscript explains that the prompts were refined based on previously reported feedback quality criteria. This approach is reasonable; however, it also suggests that AI feedback may have been optimized to match the evaluation rubric.
  > Please clarify the following points:
  > (1) To what extent the higher rubric scores of AI feedback may reflect better alignment with the rubric, rather than broader educational quality.
  > (2) How this optimization should be understood when comparing AI feedback with supervisor feedback that was produced under real clinical time constraints.

RESPONSE: Thank you for these clarification requests.

Regarding point (1), the extent to which higher rubric scores reflect rubric alignment rather than broader educational quality: we have addressed this at multiple points in the revised manuscript. In the Methods section (Prompt Development subsection), we now explicitly state that the AI prompt embedded the five Steiss et al. rubric criteria, while supervisors provided feedback without rubric guidance. In the Results section (Comparison of Scores subsection), we added an interpretive paragraph stating that the observed score differences reflect, at least in part, adherence to the specific structural dimensions assessed by this rubric rather than overall educational quality. In the Limitations section, we state that clinically meaningful attributes such as diagnostic reasoning and professional judgment are not directly captured by this instrument, and that the qualitative themes of Perspective as a clinician and Continuity with practice provide complementary evidence of clinical value that the rubric does not score.

Regarding point (2), how this optimization should be understood in the context of comparison with time-pressured supervisor feedback: we have framed this in the Introduction and Limitations sections as an asymmetric comparison that reflects authentic implementation practice. The study does not compare AI and supervisors under identical conditions; it compares a rubric-optimized AI system with naturalistic supervisor feedback produced under real clinical time constraints. This framing acknowledges that the comparison is informative precisely because it reflects how AI and human feedback actually differ in practice, while being transparent that it does not constitute a test of inherent feedback quality potential.

### H3: Reviewer H Comment 3

  > Comment: Independence of AI Feedback Generation (Contextual Contamination)
  > To address possible concerns about influence between student cases, please clarify:
  > (1) Whether AI feedback for each student was generated in a separate and independent session or API call.
  > (2) Whether any information from previous students' logs could have affected later AI-generated feedback.

RESPONSE: Thank you for raising this important methodological concern. (1) Yes, AI feedback for each student log was generated through a separate and independent API call. (2) Because each call was independent with no shared context, no information from previous students' logs could have affected later AI-generated feedback, eliminating the possibility of contextual contamination. We have added this clarification to the "Generating AI feedback" section of the revised manuscript.

### H4: Reviewer H Comment 4

  > Comment: Interpretation of Consistency and Variability Findings (Index 4)
  > The link between AI feedback consistency and adherence to the rubric is reasonable. However, the current explanation may be understood as circular (that is, following the rubric leads to consistent rubric scores).
  > To strengthen the interpretation, please clarify the following points:
  > (1) Clearly distinguish consistency as a design feature of AI feedback from consistency as something that is always educationally desirable.
  > (2) Emphasize that variability in supervisor feedback may reflect selective prioritization and clinical judgment, rather than lower feedback quality.

RESPONSE: Thank you for this insightful observation. We agree that the original explanation risked circularity. In the revised Discussion (Comparison with the Literature, paragraph on consistency), we now distinguish two separate mechanisms: AI's adherence to rubric criteria, which follows from embedding those criteria in the prompt, and the consistency of its output across different inputs, which is a structural consequence of using the same model and prompt configuration for every log entry. We explicitly state that this consistency is best understood as a design feature of AI feedback generation rather than an inherently desirable educational property, as effective feedback may sometimes require selective emphasis tailored to individual learner needs. We also reframe supervisor variability as reflecting selective prioritization and clinical judgment, noting that supervisors chose which aspects to emphasize based on their professional assessment of each student's needs, resulting in variable but contextually responsive feedback.

------------------------------------------------------

## Reviewer L:

### General comments

  > This paper presents a timely and important mixed-methods comparison of AI-generated and supervisor-provided feedback in authentic clinical clerkship settings using real student portfolios. The use of 161 real-world datasets, validated analytic rubric, and joint display analysis represents a strong methodological contribution to the AI-in-medical-education literature. However, several methodological and conceptual issues limit the strength and generalizability of the conclusions and should be addressed before the manuscript is suitable for publication.

RESPONSE: Thank you for this thorough evaluation and for identifying the methodological and conceptual issues. We have made substantial revisions to address each concern, including explicit acknowledgment of the construct mismatch between the rubric and clinical feedback quality, expanded discussion of identification bias as an internal validity threat, strengthened caution regarding generalizability, and additional statistical reporting (effect sizes with confidence intervals, normality testing, and inter-rater reliability). Detailed responses follow below.

## Major

### L1: Reviewer L Comment 1

  > Comment: The Steiss et al. rubric strongly rewards structure, explicit criteria, and completeness, which inherently favors LLM-generated text. Clinically meaningful attributes such as diagnostic reasoning, professional judgment, and feasibility of recommendations are under-represented.
  > Solution: Authors should explicitly acknowledge this construct mismatch and either (a) include an additional clinically oriented evaluation framework or (b) perform a sensitivity analysis using clinician-defined criteria.

RESPONSE: Thank you for identifying this construct mismatch. We agree that the Steiss et al. rubric's emphasis on structural dimensions, including criteria-based structure, clarity of directions, and text alignment, corresponds closely to the dimensions embedded in the AI prompt, while clinically meaningful attributes such as diagnostic reasoning and professional judgment are not directly captured.

Regarding the proposed solutions: we were unable to include an additional clinically oriented evaluation framework or conduct a sensitivity analysis using clinician-defined criteria within the scope of this revision, as both would require additional data collection or re-evaluation that is not feasible post hoc. We acknowledge this as a limitation of the current study.

Instead, we have addressed the construct mismatch in the following ways. First, we added explicit acknowledgment in the Introduction, Methods, Results, and Limitations sections that the rubric's structural dimensions were also embedded in the AI prompt, and that rubric score differences should not be interpreted as evidence of overall educational superiority of AI feedback. Second, we added notes to the captions of Tables 2 and 3 clarifying what the rubric does and does not measure. Third, we emphasize in the Limitations section that the qualitative themes of Perspective as a clinician and Continuity with practice serve as complementary evidence of the clinical dimensions that supervisors contribute and that the rubric cannot score. We believe this framing addresses the core concern while being transparent about the study's scope.

### L2: Reviewer L Comment 2

  > Comment: All evaluators correctly identified whether feedback was AI- or human-generated, suggesting that the evaluation was not blinded and that expectancy bias may have influenced scoring.
  > Solution: Discuss this as a major internal validity threat and report whether evaluators' beliefs about the source influenced their ratings; ideally, re-analyze scores stratified by perceived source.

RESPONSE: Thank you for identifying this as an important internal validity concern. We appreciate both the specific concern and the proposed analytical solution.

We would first like to clarify the blinding procedures. The presentation order of AI and supervisor feedback was randomized within each dataset, and all source labels were removed. The identification question was administered only after evaluators had completed all rubric scoring and free-text comments. Evaluators were therefore not informed of the feedback source at the time of quality rating. We have now made these procedural details explicit in the Methods (Evaluation Instrument) and Results (Identification of Feedback Source) sections of the revised manuscript.

We acknowledge that the perfect detection accuracy indicates the textual differences between the two feedback types were highly salient, and that evaluators may have formed implicit judgments about the source during evaluation. This possibility is now discussed as a limitation in the revised manuscript.

Regarding the proposed stratified re-analysis by perceived source: because every evaluator correctly identified every item (100% accuracy across all 3,220 observations), perceived source and actual source are identical for every observation. There is therefore no variation in perceived source within either feedback condition, making it logically impossible to stratify scores by perceived source or to estimate the magnitude of any expectancy bias through this approach.

In the revised manuscript, we have addressed this concern in the following ways: (1) In the Discussion (Comparison with the Literature), we now discuss both sides of the 100% detection finding, acknowledging the possibility of implicit recognition bias while also noting that perfect detection is a substantive finding consistent with all five qualitative themes. (2) We have added a new limitation (Third in the Limitations section) that explicitly addresses the potential for expectancy bias, explains why stratified analysis is not feasible, and notes that rubric score differences, particularly on items where AI scored highest, should be interpreted with this caveat in mind.

### L3: Reviewer L Comment 3

  > Comment: The study evaluates perceived feedback quality but not whether AI or human feedback led to different learning behaviors, revisions, or clinical improvement.
  > Solution: Reframe conclusions to explicitly limit claims to perceived quality, or include secondary analysis of student revisions or engagement with feedback if available.

RESPONSE: Thank you for this important clarification. We agree that the study evaluates structural feedback quality as assessed by the rubric, not downstream learning outcomes. In the Limitations (Eighth), we have revised the wording to state explicitly that the study "evaluated the structural quality of feedback as assessed by the rubric, but did not investigate whether AI-generated or supervisor-provided feedback led to different learning behaviors, revisions, or clinical improvement." The Conclusions now identifies the impact of AI-assisted feedback on student learning outcomes as a direction for future research. We note that our rubric-based measures capture structural dimensions of feedback (criteria-based guidance, clarity, text alignment) that are relatively objective, and the qualitative analysis provides complementary evidence on perceived strengths and limitations. However, the relationship between these quality indicators and actual educational outcomes remains to be investigated.

### L4: Reviewer L Comment 4

  > Comment: Only GPT-4o and one Japanese medical school were studied, which limits external validity.
  > Solution: Explicitly state that findings are model- and context-dependent, and avoid general claims about "AI feedback" broadly.

RESPONSE: Thank you for this point. The Limitations already addresses both the single-institution constraint (First) and the model specificity (Fourth). To further reinforce this, we have revised the Conclusions to explicitly reference "GPT-4o with a rubric-embedded prompt" when describing the AI feedback, and to identify generalization to other AI models, languages, and institutional contexts as a necessary direction for future research. We retained "AI feedback" as a general term throughout the manuscript for readability, but the Limitations and Conclusions now make clear that the findings are specific to the model, prompt, language, and institutional context studied.

## Minor

### L5: Reviewer L Comment 5

  > Comment: The prompt explicitly embeds rubric criteria, which likely contributed to AI's higher rubric scores.
  > Solution: Briefly report prompt wording in the main text and acknowledge its role in shaping results.

RESPONSE: Thank you for this suggestion. We have revised the Methods section (Prompt Development subsection) to briefly report the key elements of the prompt in the main text. Specifically, we now state that the prompt explicitly embedded the five criteria of the Steiss et al. rubric as the evaluation framework for generating feedback, namely criteria-based guidance, clear directions for improvement, accuracy, appropriate prioritization, and supportive tone, and that the AI was instructed to address each criterion in its output. This addition makes clear that the prompt wording was directly informed by the evaluation rubric used to assess feedback quality. The full prompt, in both the original Japanese and an English translation, is available in Multimedia Appendix 1.

### L6: Reviewer L Comment 6

  > Comment: "AI feedback," "GPT-4o feedback," and "LLM feedback" are used interchangeably.
  > Solution: Standardize terminology throughout.

RESPONSE: Thank you for identifying this inconsistency. We have standardized terminology throughout the manuscript. "AI feedback" is now used consistently as the term for feedback generated by GPT-4o in this study. The term is formally introduced in the Methods section, where it is defined as the feedback generated through the OpenAI Chat Completion API (GPT-4o). "GPT-4o" is used only when referring specifically to the model itself (e.g., in the Methods and Limitations sections), not as a modifier for "feedback." "LLM" and "LLMs" are used only as general nouns when discussing large language models as a class of technology (e.g., in the Introduction and Prompt Development sections), not to refer to the feedback produced in this study. We have also removed instances where "LLM" was used redundantly close to the specific model description, replacing them with "large language models" or "the model" for clarity.

### L7: Reviewer L Comment 7

  > Comment: Report exact p-values instead of only thresholds where possible.
  > Solution: Revise tables and text accordingly.

RESPONSE: Thank you for this suggestion. We have revised the manuscript to report exact p-values throughout. In the Results text, the paired t-test paragraph now reports the Bonferroni-corrected p-value for each rubric item individually (all corrected p < .001, except supportive: corrected p = .011), replacing the previous summary statement of "p < .05." Both Table 2 (paired t-tests) and Table 3 (cumulative link mixed models) now include separate columns for uncorrected and Bonferroni-corrected p-values, with exact values reported to three decimal places where p ≥ .001 (e.g., p = .002, p = .011, p = .142) and "< .001" used only when the exact value falls below this threshold, consistent with APA reporting conventions.

------------------------------------------------------

## Reviewer N:

### General comments

  > Thank you for the opportunity to review this manuscript entitled "Same logs, different voices: AI-generated vs human feedback during clinical clerkship in undergraduate education." This mixed-methods study compares AI-generated written feedback (generated with GPT-4o) with supervising physicians' routine written feedback on authentic clinical clerkship learning logs. The topic is timely and highly relevant to clinical education, given the persistent constraints on supervisors' time and the increasing interest in using large language models to augment feedback workflows. Below are my detailed comments for improving this manuscript.

RESPONSE: Thank you for your detailed and constructive review. We have addressed all of your comments, including clarifying the study's unique contribution relative to prior classroom and simulation studies, providing additional context on supervisor feedback practices, adding precise p-values and inter-rater reliability estimates, clarifying the randomization and allocation process, and defining all abbreviations at first use. Specific responses follow below.

## Major

### N1: Reviewer N Comment 1

  > Comment: Clarify the conceptual framing and the manuscript's unique contribution. The Introduction motivates the work well, but the Discussion would benefit from a clearer articulation of what new knowledge this study adds beyond prior classroom/simulation comparisons (eg, which features of the clerkship context are expected to change the nature of feedback).

RESPONSE: Thank you for this suggestion. In the revised Discussion (Comparison with the Literature, paragraph on text-anchored versus experience-based feedback), we now explicitly frame the study's contribution relative to prior work. We note that most prior comparisons have been conducted in classroom or simulation settings where the knowledge base is well-defined and the feedback task is circumscribed. We then identify three contextual features of clinical clerkships that distinguish the feedback task and amplify the differences between AI and supervisor feedback: (1) supervisors work under substantial time pressure and provide written feedback as a complement to ongoing face-to-face clinical teaching; (2) written comments prioritize what each supervisor judges most important for a given student; and (3) clinical reasoning, situational awareness, and tacit professional knowledge are central to clerkship learning but difficult to articulate in written form and largely inaccessible to AI systems operating solely on the written log text. The Conclusions similarly frames the study as extending this comparison to an authentic clinical clerkship environment.

### N2: Reviewer N Comment 2

  > Comment: Provide more detail on the context and nature of supervisor feedback to support fair comparison and generalizability. Please describe supervisors' typical expectations for the e-portfolio feedback (eg, required length/structure, whether verbal feedback is the primary modality, whether feedback is intended to comment on the written log vs observed performance), and whether any faculty development/training existed for written feedback. Because supervisor feedback appears to be produced under routine time pressure, the manuscript should discuss how this context influences the interpretation of 'quality' as measured by a rubric originally designed for written feedback on texts.

RESPONSE: Thank you for this important request for contextual detail. We have added the following information to the revised manuscript.

In the Setting section, we now describe the context of supervisor feedback: supervising physicians received orientation on the e-portfolio system but no specific training or instructions regarding the content, length, structure, or format of their written feedback. Written feedback in the e-portfolio primarily served as a complement to verbal feedback provided during clinical supervision, although the relative emphasis varied across supervisors and departments. In the Prompt Development subsection (within the newly created Materials section), we note that supervising physicians received no instructions regarding length, structure, or format for their feedback, making the comparison one between a rubric-optimized AI system and naturalistic supervisor feedback produced under routine clinical conditions.

These additions clarify that the supervisor feedback captured in this study reflects authentic, time-pressured clinical practice rather than a controlled experimental condition, which is relevant both for interpreting the quantitative results and for assessing the generalizability of the findings.

### N3: Reviewer N Comment 3

  > Comment: The prompts provided to GPT include "Write the feedback concisely within 500 characters." This may be relevant to the average length of the feedback (382.02 characters ) generated by the AI. This may explain one of the important findings in this study that the feedback length of AI and humans is significantly different. It is necessary to rule this possibility out. For example, if the prompt is written with "Write the feedback concisely within 1000 characters", the results might differ. As in practice, we generally understand human evaluators' feedback generally won't be long. Another issue is the default length settings of GPT-4o for generating responses, as each response has a maximum length that it generally will not exceed.

RESPONSE: Thank you for this important observation. We acknowledge that the 500-character limit in the prompt is a design choice that influenced AI feedback length. This limit was determined through systematic pilot testing: we generated feedback under various length constraints (no limit, 200, 300, 400, and 600 characters) and compared the outputs. Without any character limit, the AI produced verbose feedback in which key points were diluted, whereas overly restrictive limits resulted in superficial feedback that omitted important content. The 500-character limit was selected as the optimal balance between conciseness and substantive coverage. No maximum token limit (max_tokens parameter) was set at the API level; the output length was guided solely by the prompt instruction. Regarding the reviewer's point about supervisor feedback length, supervisors received no instructions regarding length, structure, or format for their feedback; their average feedback length of 97.87 characters reflects their routine practice under real clinical time constraints. We agree that with a different character limit (e.g., 1,000 characters), the length difference might narrow. However, we note that the primary findings regarding rubric scores (the main outcome measures) are unlikely to be substantially affected by length alone, as our correlation analysis showed no significant relationship between feedback length and rubric scores after Bonferroni correction. We have added details of this calibration process to the "Prompt Development" subsection of the revised manuscript.

### N4: Reviewer N Comment 4

  > Comment: There are P values equal to 1 in multiple parts of this manuscript.

RESPONSE: Thank you for flagging this. The P values reported as 1.000 arose from Bonferroni correction: when the uncorrected P value is multiplied by the number of comparisons (15 for the cumulative link mixed models), the product can exceed 1 and is mathematically capped at 1.000. In accordance with the JMIR Guidelines for Reporting Statistics, which state that P values cannot equal 0 or 1, we have changed all instances of P=1.000 to P>.99 throughout the manuscript text, abstract, and tables. This applies to the Bonferroni-corrected P values for the accurate and supportive rubric items in the cumulative link mixed model results, as well as other non-significant corrected values.

### N5: Reviewer N Comment 5

  > Comment: Another methodological issue is the evaluation methods used by human evaluators. As each dataset was distributed to 1 faculty member, would the other 9 faculty members have the same ratings? I feel that inner agreement between evaluators for the same dataset is important. Otherwise, although 10 faculty were included, the actual faculty evaluator for each dataset is only 1. This is the same issue for the student evaluators.

RESPONSE: Thank you for raising this important methodological concern. We agree that having each dataset evaluated by only one faculty member and one student is a limitation. To address this, we computed inter-rater reliability between the faculty and student evaluators for each rubric item. For supervisor feedback, agreement was fair to moderate (weighted κ = 0.37–0.54, all p < .001), suggesting reasonable consistency between faculty and student perspectives. For AI feedback, agreement was poor (weighted κ = 0.04–0.15, mostly non-significant), indicating that faculty and student evaluators assessed AI feedback quite differently. We have added these findings as a new subsection ("Inter-Rater Reliability") with a table in the quantitative Results. We have also explicitly acknowledged in the Limitations section that each dataset was evaluated by only one faculty-student pair, which limits the precision of individual dataset scores, although the large number of datasets (N = 161) provides stability at the aggregate level.

## Minor

### N6: Reviewer N Comment 6

  > Comment: Paired t-tests were conducted in this study. Are all the scores, for example, evaluated in Table 2, normally distributed?

RESPONSE: Thank you for raising this important point. We conducted Shapiro-Wilk tests on the paired differences for all comparisons. The feedback length difference was normally distributed (W = 0.992, p = .550), supporting the paired t-test for that variable. However, all five rubric score differences departed significantly from normality (all W ≤ 0.939, all p < .001 after Bonferroni correction). As a sensitivity analysis, we conducted Wilcoxon signed-rank tests alongside the paired t-tests; the two methods yielded identical conclusions regarding statistical significance for every variable. We note that our primary analysis of rubric scores used cumulative link mixed models (Table 3), which do not assume normality of the outcome distribution. These results have been added as a new subsection ("Distribution Assessment and Sensitivity Analysis") at the beginning of the quantitative Results.

### N7: Reviewer N Comment 7

  > Comment: Please clarify the randomization and assignment process in the methods (eg, how the feedback pairs were reordered, whether ordering was balanced across raters, and whether raters assessed multiple records from the same department). Also specify how missing data (if any) were handled for rubric scoring and comments.

RESPONSE: Thank you for this request for clarification. We have revised the Design section of the manuscript to describe the randomization and assignment process in detail. Within each dataset, the presentation order of the two feedback types (AI vs supervisor) was randomly assigned so that approximately half of the datasets presented AI feedback first and the other half presented supervisor feedback first. The 161 datasets were then randomly distributed among the 10 faculty evaluators and 10 student evaluators. Because assignment was random, some evaluators assessed multiple records originating from the same clinical department. Regarding missing data, as noted in our response to the Editor's Comment 9, no missing data were identified: all 161 records contained complete rubric scores from both assessors across all five items, yielding 3,220 observations with 100% data completeness.

### N8: Reviewer N Comment 8

  > Comment: Please ensure all abbreviations are defined at first use (eg, TRAPD, JDA). Please also check figure/table captions for self-contained clarity and verify that all Multimedia Appendices are referenced consistently in the main text.

RESPONSE: Thank you for this careful review. We have checked all abbreviations in the manuscript and ensured they are defined at first use. Specifically, TRAPD is now defined as "Translation, Review, Adjudication, Pretesting, and Documentation (TRAPD)" at its first appearance in the Evaluation Instrument subsection. JDA was already defined as "Joint Display Analysis (JDA)" at first use in the Integration of Results subsection. JARS is now defined as "Journal Article Reporting Standards (JARS)" in the participant flowchart caption. We also corrected a formatting inconsistency where "Multimedia Appendix.3" appeared with an erroneous period; this has been corrected to "Multimedia Appendix 3." All three Multimedia Appendices are referenced in the main text: Multimedia Appendix 1 in the Prompt Development subsection, Multimedia Appendix 2 in the Evaluation Instrument subsection, and Multimedia Appendix 3 in the rubric translation description. Figure and table captions were revised for self-contained clarity as described in our response to Editor Comment 10.
