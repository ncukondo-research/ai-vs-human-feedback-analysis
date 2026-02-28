# Replay to Reviewers

## EDITOR-IN-CHIEF COMMENTS

  > Thank you for your scholarship and for considering JME to publish your manuscript. I have had an opportunity to review your article and the feedback from peer reviewers.

  > The reviewers made several suggestions that I ask you to consider and address. The verbatim comments are below. I have summarised the major themes herewith. I have also added my own questions or suggestions. When submitting a revision, please provide a cover letter with (1) a point-by-point response to each reviewer and editor comment, (2) a description of how you revised the manuscript where applicable, and (3) where the editorial team can find the changes in the manuscript.

RESPONSE: Thank you very much for reading my manuscript in detail. I sincerely appreciate the valuable feedback provided by all the reviewers. 

Although I received suggestions to transfer the manuscript to JMIR AI or JMIR Formative Research, I believe that this study aims to improve the quality of assessment in medical education and to reduce the burden on students and educators. Therefore, I consider JMIR Medical Education to be the most appropriate venue for publication.

Below, I present my responses to each comment.

### Editor Comment.1

  > Comment: Abstract. Please use the JME style guide and instructions for authors. You must include raw data when reporting percentages.

RESPONSE: Thank you for your suggestion. The raw data supporting the sensitivity and specificity reported in the abstract results are now accessible via Appendix 1 (see https://github.com/ncukondo-research/extract-core-curriculum-ids-from-text/tree/main/analysis/).

### Editor Comment.2

  > Comment: Methods. I have some questions about your reference standard. If I understand the study design correctly, your reference standard for measuring the accuracy of the LMM was student corrections. While this makes some intuitive sense, I also ask whether that is sufficient? Would there not be an intrinsic reporting bias? Stated simply, students are not impartial raters; I would not be surprised if they tended to overreport the number of experiences meeting training expectations (false positives). If you do not agree, it is critical to establish the independent validity of this reference standard. If you do agree, it is critical to explain whether you included double-pass validation (for example, faculty review of the automated reports and the student logs) or to identify your reference standard as a limitation in the discussion.

RESPONSE: Thank you for your important comment. As you pointed out, determining whether medical students actually experienced specific procedures or symptoms relies on the students’ subjective judgment. This introduces the possibility of both overreporting and underreporting. In the clinical clerkship setting of this study, supervising physicians did not continuously monitor students and could not fully track the students’ experiences. Additionally, clinical clerkship logs were often brief, making it difficult for researchers to comprehensively verify students’ experiences even upon review. Therefore, we had no choice but to rely on students’ self-reports. I have added the following statement to the Limitations section to address this point.

  _Also, students’ judgments about whether they had actually experienced a procedure are subjective, and they may have overreported certain experiences or overlooked ones they truly had. In the clinical clerkship that served as this study’s setting, supervising physicians did not continuously monitor students, so only the students themselves could verify their experiences. Therefore, we had to rely on students’ subjective reports. In future work, it will be desirable to establish more objective evaluation criteria to reduce potential bias._

### Editor Comment.3

  > Comment: Discussion. Please re-organise your discussion using subheadings to better guide the reader. Our international audience will expect certain sections for a research manuscript. I suggest you begin with a “Principal Findings” section summarising your key results and insights immediately. These should closely parallel the final paragraph of the introduction by relating to the research question and hypothesis. I suggest including a section on the “Implications of Findings” and a section on the “Comparison to the Literature”. These help the reader see the relevance or application of your findings and how to contextualise this new information, given what is known. I noted you included a Limitations section.

RESPONSE: Thank you for your suggestion. I have reorganized the Discussion section into four subsections: Principal Findings, Implications of Findings, Comparison to the Literature, and Future Directions. I also revised the Conclusion to align with the new structure of the Discussion. I believe these changes will help readers better understand the results and significance of the study.

  > Thank you again for considering JMIR Medical Education as a venue for your work. We sincerely appreciate your time and effort in preparing your manuscript. We look forward to your revisions and will keep you updated on the progress throughout the evaluation process. Should you have any questions or need further assistance, please do not hesitate to contact us.

Thank you again for your thorough review. I believe that your feedback has helped improve the quality of my research.

------------------------------------------------------

## Reviewer N:

### General comments

  > This study analyzes learning logs, recorded as logbooks by students during their clinical clerkship, using generative AI to identify the cases they experienced. While it is an intriguing example of learning analytics using LLMs, the following points need to be addressed for improvement.

RESPONSE: Thank you very much for your thorough review of my manuscript. Below, I present my responses to each of your comments.

## Major

### N1: Reviewer N Comment 1

  > Comment: In the Abstract, under the Methods section, it is stated that “OpenAI’s ChatGPT was selected for this task after a comparison with other LLMs.” However, the selection process is not elaborated in detail within the Methods section. Please describe the criteria used for comparing ChatGPT with other LLMs, such as Gemini or Claude, and provide the rationale for selecting ChatGPT as the final choice. Alternatively, if the study was focused on ChatGPT from the outset, it would be acceptable to state this explicitly.

RESPONSE: Thank you for your comment. I have added the following explanation to the Extraction of Experiences section in Methods regarding the rationale for selecting ChatGPT:

  _OpenAI’s ChatGPT, Google’s Gemini, and Anthropic’s Claude were considered for the LLMs used in experience extraction. Trial prompts and randomly selected student records were entered into each web platform, and the extracted results were compared in terms of validity. ChatGPT by OpenAI produced the most valid outputs, so OpenAI was selected for this study._

### N2: Reviewer N Comment 2

  > Comment: Regarding the learning logs, it is mentioned that “Learning log data consisted of daily records of experiences and learning activities entered by medical students into an electronic portfolio during a clinical clerkship from April 22, 2024, to May 24, 2024.” For these daily records, please provide details on: (1) approximately how lengthy these records were, and (2) the extent to which the length and quality of the records varied among students. If there was significant variation in (2), discuss whether this had any impact on the results—for example, whether differences in the quality of student descriptions influenced the analysis outcomes. If the available data are insufficient for this analysis, consider including this as a Limitation in the discussion.

RESPONSE: Thank you very much. I consider your point about the length of the learning logs to be important. I have added the following to the first paragraph of the Results section:

  _All records were written in Japanese, with an average letter count of 446.2 (maximum 1,473; minimum 72). _

Additionally, I conducted a correlation analysis between the length of the learning logs and sensitivity/specificity, and added the following results.

  _The correlation between the number of characters in the students’ records and sensitivity and specificity were 0.04 and –0.64, respectively, indicating a negligible correlation with sensitivity and a moderate negative correlation with specificity._

As it is difficult to quantitatively evaluate the quality of the records, this aspect was not considered in the present study. In future research, it will be important to quantitatively assess record quality and examine its impact on the analysis results. This point has been added to the Limitations section of the Discussion as follows.

  _Although we confirmed the correlation between record length and extraction sensitivity and specificity, we did not quantitatively evaluate the quality of the records. Future work should investigate the relationship between record quality and extraction performance._

### N3: Reviewer N Comment 3

  > Comment: If possible, please provide examples of the prompts used for the analysis.

RESPONSE: Thank you very much. The prompt can now be accessed via Appendix 1. Specifically, it is available at https://github.com/ncukondo-research/extract-core-curriculum-ids-from-text/tree/main/prompts within Appendix 1.

### N4: Reviewer N Comment 4

  > Comment: In the Results section, it is stated that “The sensitivity and specificity of the LLM were 0.56 and 0.99, respectively.” However, it is unclear whether these values are for all categories combined or for each category (Symptoms, Examinations, and Procedures). Please clarify this point.

> Comment: In the discussion, it is mentioned that incomplete documentation of medical procedures may have led to an inaccurate extraction of the actual list of procedures performed. To support this point, it would be better to present the predicted and actual results for each category—Symptoms, Examinations, and Procedures—in the results section. While omissions are likely to occur in the AI-generated analysis across all categories, identifying which category is particularly prone to omissions could lead to more robust findings and discussions.

RESPONSE: Thank you very much. I agree that the point about potential differences in performance by category is important. I have calculated the sensitivity and specificity for each category and added the following to the Results section.

  _The sensitivity and specificity of the LLM for each category were as follows: Symptoms, 0.45 and 0.99; Examinations, 0.47 and 0.99; Procedures, 0.56 and 0.99. There was no significant variation among the categories. However, when calculating by category, the sensitivity tended to be lower compared to the overall calculation, likely due to the influence of items that were not extracted at all._

## Minor

### N5: Reviewer N Comment 5

  > Comment: There are two patterns of MCC phrases:

  > - The Model Core Curriculum (MCC) for Medical Education (in abstract)
  > - the Medical Education Model Core Curriculum (MCC) (in the introduction)

  > it should be unified.

RESPONSE: Thank you very much. This is an important point. I have unified the notation of MCC throughout the manuscript based on the official MCC website (https://core-curriculum.jp/en), and now consistently use "the Model Core Curriculum for Medical Education (MCC)" in all instances.

------------------------------------------------------

## Reviewer W:

### General comments

  > This study investigates the accuracy of large language models (LLMs) in predicting medical students' clinical experiences from their learning log data during a clinical clerkship, a topic of growing relevance in healthcare and education. The findings demonstrate the potential of LLMs to enhance educational assessments in clinical settings, with promising prospects for future improvements through the integration of additional data sources and advancements in AI technology.

Thank you very much for your thorough review. Below, I present my responses to each of your comments.

### W1: Reviewer W Comment 1

  > Comment: The authors need to support all assumptions in the Introduction with reliable sources. For example, when claiming, “Evaluating these records against curriculum competencies and goals without adding an extra burden on learners can help monitor their progress. However, educators may have to manually match and analyze these records, which may be a significant burden,” references should be provided.

Thank you very much. I have added citations to the relevant literature in the corresponding section.

### W2: Reviewer W Comment 2

  > Comment: The Discussion section should be more concise. It would benefit the audience if the authors expanded on the current situations and approaches being used, citing relevant studies, and compared them to their proposed approach. Additionally, the authors should make the themes/key findings more visible, perhaps by creating subsections for each and comparing the pros and cons of current approaches alongside their study.

RESPONSE: Thank you for your suggestion. I have reorganized the Discussion section into four subsections: Principal Findings, Implications of Findings, Comparison to the Literature, and Future Directions. I also revised the Conclusion to align with the new structure of the Discussion. I believe these changes will help readers better understand the results and significance of the study.

### W3: Reviewer W Comment 3

  > Comment: In the Discussion section, instead of using the phrase “Many students” in “Many students recorded observing surgeries,” the authors should provide statistics.

RESPONSE: Thank you very much. I have revised the text to specifically link each example to its corresponding index as follows.

  _There were several patterns in experiences that were not captured by GPT-4-turbo's analysis, even though students actually had those experiences. Below, we explain these patterns with examples corresponding to specific entries in Table 2. Note that, due to the large volume of student records, the full texts are provided in Appendix 2 rather than Table 2. One pattern was when predictable experiences were not picked up by GPT-4-turbo's analysis. For example, a student (index 19 in Table 2) described encountering a case of hereditary Amyotrophic Lateral Sclerosis (ALS), but GPT-4-turbo's analysis failed to capture the student's experience with muscle weakness, a symptom of ALS. Another pattern was when insufficient description made prediction difficult. Eight out of forty students (indexes 9, 11, 15, 17, 22, 25, 29, and 32 in Table 2) recorded observing surgery, but it was unclear from the description whether they assisted in the surgery or merely observed, making it difficult for GPT-4-turbo to extract related procedures such as surgical hand washing and gown technique. A third pattern was when experiences were not recorded by the student, making prediction impossible. For instance, a student recorded observing a surgery (index 15 in Table 2) but actually performed suturing, an experience not captured by GPT-4-turbo due to lack of record. Similarly, a student (index 30 in Table 2) noted examining a diabetes patient but did not record performing CT or ultrasound examinations.._

### W4: Reviewer W Comment 4

  > Comment: In the Discussion section, rather than stating “One student noted” or “Another student,” the authors should assign codes or numbers to participants in a table and use those codes in the discussion for easier data tracking.

RESPONSE: Thank you very much. I have revised the text as above to associate each example with the table index. Also, I believe this content is more appropriate for the Results section rather than the Discussion, so I have moved it to the Results section.

### W5: Reviewer W Comment 5

  > Comment: Appendix 1 was not included in the supplementary files.


RESPONSE: Thank you for your important comment. Appendix 1 is now accessible at the following link: https://github.com/ncukondo-research/extract-core-curriculum-ids-from-text

### W6: Reviewer W Comment 6

  > Comment: It is recommended to include appendices showing the interface of the tool used by the authors, the prompts mentioned in the manuscript, and the study protocol.

RESPONSE: Thank you very much. I have added the interface of the tool used and the prompt to Appendix 1. Specifically, they can be accessed at the following link: https://github.com/ncukondo-research/extract-core-curriculum-ids-from-text

------------------------------------------------------

## Reviewer AV:

### General comments

  > This paper addresses a clear and relevant problem in medical education: the burden of tracking and assessing student clinical experiences. The use of the Model Core Curriculum as a standardized template provides a solid framework for experience extraction. The methodology is well-structured, with clear inclusion criteria and a systematic approach to data collection and analysis. The evaluation process, involving student verification of extracted experiences, helps ensure accuracy of the findings.

Thank you very much for your thorough review. Below, I present my responses to each of your comments.

### AV1: Reviewer AV Comment 1

  > Comment: Limited description of prompt engineering process: In Extraction of Experiences, the exact prompt to ChatGPT should be included, and a screenshot will be beneficial. More details about “a web application for using GPT-4-turbo which was developed” are needed (probably code in the attachment).

RESPONSE: Thank you very much. To enhance the transparency of the study, I have added the following statement to the Extraction of Experiences section in Methods. The prompt used for GPT-4-turbo and the web application code are provided in Appendix 1 (https://github.com/ncukondo-research/extract-core-curriculum-ids-from-text).

### AV2: Reviewer AV Comment 2

  > Comment: Could you please include more details about LLM selection criteria: why exactly other LLMs were rejected? Probably they can provide more accurate data extraction.

RESPONSE: Thank you very much. Regarding the selection criteria for LLMs, I have added the following description to the Extraction of Experiences section in Methods:

  _OpenAI’s ChatGPT, Google’s Gemini, and Anthropic’s Claude were considered for the LLMs used in experience extraction. Trial prompts and randomly selected student records were entered into each web platform, and the extracted results were compared in terms of validity. ChatGPT by OpenAI produced the most valid outputs, so OpenAI was selected for this study._

### AV3: Reviewer AV Comment 3

  > Comment: Please expand limitations discussion: acknowledge single-institution constraints and address temporal limitations

RESPONSE: Thank you very much. I have revised the beginning of the Limitations section as follows.

  _This study has several limitations. First, the study used learning log data from clinical participation-based clinical clerkships at a single university; therefore, its generalizability to learning log data from other universities or clinical clerkships is not guaranteed. Additionally, the data collection period was limited to only one month, which may not capture the full range of experiences or seasonal variations in clinical activities. W, while the accuracy of the extracted experience content was evaluated using learning log data recorded by medical students and asking them to make corrections, the quality and quantity of the learning log data recorded by the students could affect the accuracy of the extracted experience content. Large-scale collaborative studies across multiple institutions and over longer periods 
 are needed to ensure broader generalizability._

### AV4: Reviewer AV Comment 4

  > Comment: To save space, Table 1 can be replaced with just 3 paragraphs of text.

RESPONSE: Thank you very much. I tried rewriting Table 1 as text, but it actually became harder to read. Therefore, instead of listing all Symptoms, Examinations, and Procedures vertically, I changed the format to separate them into columns, with each column containing the definitions for Symptoms, Examinations, and Procedures. I believe this approach saves space in Table 1 while clearly presenting the definitions for each category.

### AV5: Reviewer AV Comment 5

  > Comment: Multimedia Appendix 1 is not available for the public.

RESPONSE: Thank you very much. Appendix 1 is now accessible at the following link: 
https://github.com/ncukondo-research/extract-core-curriculum-ids-from-text