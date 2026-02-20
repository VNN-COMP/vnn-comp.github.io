#  VNN-COMP'26 Competition Contribution Papers


In addition to tool and benchmark submission, we welcome papers that provide overviews of the underlying techniques and other engineering relevance of the tools and benchmarks that are submitted to the competition. These competition contribution papers are peer reviewed and published in the proceedings of the competition as part of [SAIV 2026](https://aiverification.org/2026/), which is co-located with [CAV 2026](https://conferences.i-cav.org/2026/).  

Note that while contribution papers are optional for the competition, only tools that participate in competition are eligible for contribution paper submission. Moreover, while these contribution papers are peer reviewed, they are mainly to describe the tools or benchmarks and aspects relevant for the competition. The papers are not full research papers and **do not prevent** the authors from submitting a full research paper of their work to SAIV, CAV, or other conferences.

Also note that the papers will be due before the competition itself takes place this summer and therefore are not expected to have results from VNN-COMP'26. Instead, it is fine that the paper discusses results from other venues or other evaluations the authors have conducted. If your tool has participated in previous VNN-COMPs, you can include and discuss them.  


## General Format

VNN-COMP'26 contribution papers uses a **single-blind** policy, so submissions are _not anonymized_.  We require to use **LNCS format**. The papers to be published must have **at least 4 pages of text** (excluding data-availability and funding statements, references), and may be up to **6 pages in total**. The paper must be submitted via the VNN-COMP submission site of [Easychair](https://easychair.org/conferences/?conf=vnncomp26).

### Tool Papers
#### Content Suggestions

Similarly to contribution papers at other competitions such as SV-COMP (e.g., [SV-COMP'25 contribution submission](https://sv-comp.sosy-lab.org/2025/submission.php)), the contribution paper should describe the competition contribution, including an outline of the concepts, technology, libraries, and tool infrastructure used in the competition, installation instructions, a specification of the version and parameters to be used for the competition,

The following structure is recommended (but not required) for the contribution paper. However, sections on the tool setup and data availability are mandatory. As mentioned above, the paper is not anonymized, and the authors should ensure that the paper does not violate any copyright or intellectual property rights.

- Title, Authors, and Abstract
    - For title, it is a good idea to mention the name of the tool and/or technique (or a combination thereof) in the title.
    - The title needs to have **(Competition Contribution)** as a suffix, e.g., ToolName: Approach Name (Competition Contribution).
- Introduction or Verification Approach
    - Provide a short overview of the algorithm or approach that the tool is based on. Avoid technical details, but provide a high-level overview of the approach. If necessary, refer to other papers for more details.
- Tool/Software Architecture
    - Libraries and external tools that the verification tool uses (e.g., parser frontend, SAT solver)
    - Software structure and architecture (e.g., components that are used in the competition)
    - Implementation technology (e.g., programming language)
- Discussion of Assumptions, Limitations, Strengths, and Weaknesses of the Approach
    - Mention assumptions and limitations of the approach (e.g., what assumptions were made, what is not supported, what is not working)
    - Discussion of the strengths and weaknesses of the approach used in the tool
- Tool Setup and Configuration
    - Download instructions: a public web page from which the tool can be downloaded) including a reference to a precise version of the tool (do not refer to ``the latest version'' or such, because that is not stable and not replicable)
    - Installation instructions
    - Benchmark Participation statement: a statement which benchmark categories the verifier participates in
    - Configuration definition: a statement about configuration or run profile used (did the tool run with a default configuration or was it configured for the competition?)
        - If the tool is not configured for the competition, provide the default parameter set used in the competition
        - If the tool is configured for different benchmark categories, summarize the configuration used for each category
- Software Project and Contributors
    - Contact info (web page of the project, people involved in the project)
    - Information about the software project, licensing, development model, institution that hosts the software project, acknowledgement of contributors
- Data-Availability Statement
    - Provide the URL of the project web site and repository.
    - Optional, but recommend: publish (e.g., on Zenodo) your tool archive and reference it here (via DOI) to ensure reproducibility, 
- References
    - Bibliographic references to more in-depth papers about the approaches used in the tool.

- Examples:
    - Some examples of contribution papers:  https://scholar.google.com/scholar?q=%22competition+contribution%22+tacas&hl=en&as_sdt=0%2C43&as_ylo=2023 
    - mre examples:  search for `"Competition Contribution"` from the PDF
    - SV-COMP'24 Contribution Papers
    - SV-COMP'23 Contribution Papers 
    - SV-COMP'22 Contribution Papers



### Benchmark Papers
#### Content Suggestion
- Title, Authors, and Abstract
    - For title, it is a good idea to mention the name of the benchmark and/or technique (or a combination thereof) in the title.
    - The title needs to have **(Competition Contribution)** as a suffix, e.g., BenchmarkName: Approach Name (Competition Contribution)
- Introduction and Motivation
    - Describe the problem domain, real-world relevance, or verification challenge your benchmark addresses.
- Network Architecture Overview:
    - Detail the neural network model(s) involved, including architecture, training data, and performance characteristics.
- Specification Details:
    - Define the formal properties or specifications (e.g., robustness, reachability) verified against the network.
- Benchmark Setup:
    - Provide a pointer to the benchmark code repository.
    - Include installation/setup instructions, input/output formats, and example scripts.
- Discussion of Difficulty and Relevance:
    - Explain why these benchmarks matter for the verification community.
    - Discuss assumptions, limitations, and strengths.
- Software Project and Contributors
    - Contact info (web page of the project, people involved in the project)
    - Information about the software project, licensing, development model, institution that hosts the software project, acknowledgement of contributors
- Data-Availability Statement
    - Provide the URL of the project web site and repository.
    - Optional, but recommend: publish (e.g., on Zenodo) your tool archive and reference it here (via DOI) to ensure reproducibility, 
- References
    - Bibliographic references to more in-depth papers about the approaches used in the tool.

Links that might be useful:
- [VNN-COMP2024 benchmarks repository](https://github.com/ChristopherBrix/vnncomp2024_benchmarks/tree/main/benchmarks).
- Prior discussion threads on [benchmark requirements](https://github.com/verivital/vnncomp2024/issues/2).


## Important Dates and Deadlines
- Deadline for submission of competition contribution papers: May TBD, 2026
- Notification for competition contribution papers: May TBD, 2026
- Camera ready deadline for competition contribution papers: May TBD, 2026


## Program Committee
- [ThanhVu Nguyen](https://roars.dev) (Chair, GMU)
<!-- Tristan Le Gall (CEA)
Tobias Ladner (TUM)
Huan Zhang (UIUC) -->

