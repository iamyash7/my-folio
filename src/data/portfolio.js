export const profile = {
  name: "Yash Uttamchandani",
  role: "Data Scientist",
  tagline: "Building production AI, LLM, and analytics systems that turn complex business data into clear decisions.",
  location: "India",
  institution: "Indian Institute of Technology, Kanpur",
  email: "yashuttamchandani92@gmail.com",
  phone: "+91-9638626569",
  photo: "/profile-photo.jpg",
  resume: "/resume.pdf",
  intro:
    "I work at the intersection of machine learning, LLM systems, and business intelligence. My recent work spans customer feedback intelligence, cargo revenue leakage detection, hotel booking propensity modeling, and conversational text-to-SQL systems for enterprise analytics.",
  focus: [
    "LLM systems and prompt engineering",
    "Databricks and Snowflake production pipelines",
    "Behavioral segmentation and predictive modeling",
    "Analytics products for business self-serve decision-making",
  ],
  socials: {
    github: "https://github.com/iamyash7",
    linkedin: "https://www.linkedin.com/in/mainhoonyash/",
  },
};

export const highlights = [
  { value: "95%+", label: "manual review effort reduced" },
  { value: "30%", label: "inactive-to-active conversion uplift" },
  { value: "20%", label: "CTOR increase on targeted campaigns" },
  { value: "AIR 185", label: "GATE CS 2022 rank" },
];

export const experience = [
  {
    company: "InterGlobe Aviation (IndiGo)",
    role: "Data Scientist",
    period: "June 2024 - Present",
    summary:
      "Designing production-grade AI systems across feedback intelligence, revenue assurance, propensity modeling, and enterprise analytics.",
    initiatives: [
      {
        title: "Intelligent Feedback Analysis System using LLMs",
        points: [
          "Engineered an incremental Snowflake-to-Databricks pipeline with daily batch ingestion, cleaning, and preprocessing.",
          "Designed few-shot prompts to classify sentiment into Positive, Neutral, and Developmental while supporting multi-label taxonomy mapping from L1 to L4.",
          "Benchmarked Claude, LLaMA, and Mistral for classification quality and semantic consistency before selecting the production model.",
          "Operationalized the full workflow on Databricks Workflows and pushed structured outputs back to Snowflake for downstream reporting.",
          "Delivered a Power BI dashboard that reduced manual feedback review effort by more than 95 percent.",
        ],
      },
      {
        title: "Hotel Booking Propensity Model using Behavioral Segmentation",
        points: [
          "Used CDP data such as flight frequency, booking lead time, trip purpose, annual trip count, and spending patterns to identify likely hotel bookers.",
          "Applied K-Means clustering to discover 10 behavioral segments across existing hotel bookers.",
          "Built a two-stage candidate selection flow combining Euclidean thresholding and cosine similarity ranking for high-confidence targeting.",
          "Improved inactive-to-active conversion by 30 percent and lifted CTOR on targeted communication by 20 percent.",
        ],
      },
      {
        title: "LLM-Based Cargo Commodity Code Classification and Revenue Leakage Detection",
        points: [
          "Identified that roughly 20 percent of cargo shipment records had mislabelled commodity codes, driving incorrect rates and revenue leakage.",
          "Built an incremental ingestion pipeline for new cargo bookings and designed structured prompts with priority tiers, confidence-aware outputs, and domain rules.",
          "Implemented batched inference using LLaMA 4 Maverick through Databricks ai_query(), cutting API overhead while maintaining 95 percent classification accuracy.",
          "Developed a downstream rate engine covering weight slabs, commodity overrides, min-max pricing logic, and freight market comparisons.",
          "Published the results to Snowflake and Power BI so business teams could track commodity mismatches and pricing variance.",
        ],
      },
      {
        title: "ASK_PRISM: Conversational Text-to-SQL Intelligence System",
        points: [
          "Built an enterprise self-serve analytics experience that lets business teams query data in natural language instead of relying on manual SQL support.",
          "Launched ASK_PRISM_CDP on Databricks Genie Spaces for customer and behavioral analytics in production.",
          "Expanded the platform design to Snowflake Cortex Analyst, AI Agents, and Snowflake Intelligence for cross-domain business coverage.",
          "Configured semantic models, context layers, and table definitions for domains including Sales, AIROPS, IDH, and Catering Operations.",
          "Partnered across teams to democratize access to analytics and reduce turnaround time for business questions.",
        ],
      },
    ],
  },
];

export const research = {
  title: "Limits on using LLMs for predictions",
  subtitle: "M.Tech Thesis | Guide: Prof. Nisheeth Srivastava",
  period: "June 2023 - May 2024",
  points: [
    "Empirically studied how well LLMs can predict human decision-making and challenged claims that they are reliable cognitive models.",
    "Developed a novel test-retest experimental framework across three cognitive tasks to compare model predictions against real human behavior.",
    "Showed how inconsistent human decisions can be over time, creating a realistic benchmark for evaluating LLM performance.",
    "Found that even highly cited systems such as CENTaUR fell short of human performance in replicating human choices.",
  ],
};

export const projects = [
  {
    title: "Air Pollutant Prediction using Sensor Data",
    meta: "CS771 | Guide: Prof. Purushottam Kar | Aug 2022 - Nov 2022",
    points: [
      "Built a linear regression model to predict O3 and NO2 from voltage features, achieving MAE of 5.63 and 6.3 respectively.",
      "Extended the feature set with temperature, humidity, and timestamps for non-linear modeling.",
      "Found KNN to be the best-performing approach with O3 MAE of 3.1 and NO2 MAE of 1.6.",
    ],
  },
  {
    title: "Sampling and Reconstruction of Volume Data",
    meta: "CS661 | Guide: Prof. Soumya Dutta | Jan 2023 - Apr 2023",
    points: [
      "Implemented simple random sampling over the Isabel 3D dataset at variable sample percentages.",
      "Reconstructed volume data using nearest-neighbor and linear interpolation methods.",
      "Reached signal-to-noise ratios up to 40 across different sampling settings.",
    ],
  },
];

export const education = [
  {
    year: "2022 - 2024",
    degree: "M.Tech, Computer Science & Engineering",
    institute: "Indian Institute of Technology, Kanpur",
    score: "8.1 / 10.0",
  },
  {
    year: "2019 - 2022",
    degree: "B.Tech, Computer Science & Engineering",
    institute: "Charotar University of Science & Technology, Anand",
    score: "8.7 / 10.0",
  },
  {
    year: "2016 - 2019",
    degree: "Diploma, Computer Engineering",
    institute: "A.V. Parekh Technical Institute, Rajkot",
    score: "8.7 / 10.0",
  },
  {
    year: "2016",
    degree: "GSEB (X)",
    institute: "Sadhu Vaswani School, Rajkot",
    score: "80%",
  },
];

export const skills = {
  languages: ["Python", "SQL", "Java", "C++", "C"],
  tooling: [
    "Databricks",
    "Snowflake",
    "Power BI",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "AWS",
    "Git",
    "Flask",
  ],
  ai: [
    "Large Language Models",
    "Prompt Engineering",
    "Few-Shot Learning",
    "Agentic AI",
    "Multi-Agent Frameworks",
    "Snowflake Cortex",
    "Databricks Genie Spaces",
  ],
  coursework: {
    postgraduate: [
      "Introduction to Machine Learning",
      "Big Data Visual Analytics",
      "Program Analysis Verification and Testing",
    ],
    undergraduate: [
      "Data Structures and Algorithms",
      "Operating System",
      "Design and Analysis of Algorithms",
      "Cloud Computing",
    ],
  },
};

export const services = [
  {
    title: "LLM Solution Design",
    summary:
      "Build prompt-driven and agent-assisted systems for classification, extraction, routing, summarization, and business-facing AI workflows.",
    points: [
      "Few-shot prompt design and evaluation",
      "Multi-label taxonomy classification workflows",
      "Batch inference and model benchmarking",
    ],
  },
  {
    title: "Text-to-SQL and Self-Serve Analytics",
    summary:
      "Design natural-language analytics experiences that let business users retrieve insights without depending on SQL specialists.",
    points: [
      "Semantic model curation",
      "Business glossary and query grounding",
      "Conversational analytics product design",
    ],
  },
  {
    title: "Data Science and Predictive Modeling",
    summary:
      "Develop practical ML systems for segmentation, forecasting, scoring, and behavioral modeling with a strong focus on measurable business outcomes.",
    points: [
      "Clustering and customer segmentation",
      "Regression and classification pipelines",
      "Experimentation, error analysis, and model comparison",
    ],
  },
  {
    title: "Data Pipelines and Workflow Automation",
    summary:
      "Create production data flows that move reliably from ingestion to transformation, inference, and business consumption.",
    points: [
      "Snowflake and Databricks pipeline orchestration",
      "Scheduled jobs and incremental processing",
      "Operational reporting pipelines for downstream teams",
    ],
  },
  {
    title: "Dashboarding and Decision Intelligence",
    summary:
      "Turn complex operational data into reports and dashboards that leadership and business teams can actually use to act.",
    points: [
      "Power BI dashboards for operational monitoring",
      "KPI storytelling and drill-down reporting",
      "Insight delivery for non-technical stakeholders",
    ],
  },
  {
    title: "Senior Automation Developer",
    summary:
      "Streamlining Quality Assurance through Automated Testing, Test Scripting, Framework design, CI integration, and continuous improvement.",
    points: [
      "Test scripting and automation strategy",
      "Reusable framework design and maintenance",
      "Continuous improvement of quality workflows",
    ],
  },
];

export const platformDepth = [
  {
    title: "Databricks AI/BI, Genie, and Workflows",
    description:
      "Databricks positions AI/BI Genie as a natural-language interface tailored to your organization’s terminology and data, while Jobs and scheduled workflows orchestrate production-grade recurring pipelines. That lines up closely with my work in business self-serve analytics, batch inference, and operational AI systems.",
    tags: [
      "Databricks Genie Spaces",
      "Databricks Jobs",
      "Scheduled Workflows",
      "Batch Inference",
      "Unity Catalog-aware analytics",
    ],
  },
  {
    title: "Snowflake Cortex Analyst and Semantic Views",
    description:
      "Snowflake describes Cortex Analyst as a managed text-to-SQL capability grounded in semantic models and semantic views so business users can ask questions without writing SQL. This mirrors the way I think about governed self-serve analytics, semantic modeling, and reliable business-facing data products.",
    tags: [
      "Snowflake Cortex Analyst",
      "Semantic Views",
      "Structured Text-to-SQL",
      "Governed Business Metrics",
      "Secure Enterprise Analytics",
    ],
  },
  {
    title: "Power BI Reporting for Actionable Operations",
    description:
      "Microsoft frames dashboards as single-page highlight views and reports as interactive multi-page analytics experiences built on semantic models. That matches how I deliver decision-ready dashboards for sentiment monitoring, revenue leakage analysis, and business review workflows.",
    tags: [
      "Interactive Reports",
      "Operational Dashboards",
      "Semantic Models",
      "Business Review Packs",
      "Stakeholder-friendly Storytelling",
    ],
  },
  {
    title: "Applied ML with Scikit-learn and the Python Stack",
    description:
      "Scikit-learn emphasizes practical predictive data analysis across classification, regression, and clustering. Combined with Pandas, NumPy, and visualization tooling, it supports the type of experimentation and model comparison work I have done in segmentation, pollutant prediction, and behavioral modeling.",
    tags: [
      "Classification",
      "Regression",
      "Clustering",
      "Pandas and NumPy",
      "Evaluation and Experimentation",
    ],
  },
];
