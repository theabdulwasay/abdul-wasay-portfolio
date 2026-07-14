export const personal = {
  name: "Abdul Wasay",
  title: "Data Scientist & Certified Ethical Hacker",
  tagline: "Bridging analytical rigor with full-stack engineering and security thinking.",
  location: "Wah Cantt, Pakistan",
  email: "abdulwasaymalik757@gmail.com",
  github: "https://github.com/theabdulwasay",
  linkedin: "https://linkedin.com/in/abdul-wasay757",
  phone: "0334-1944963, 0313-9071373",
  summary:
    "Data Scientist and Certified Ethical Hacker who bridges analytical rigor with full-stack engineering and security thinking. Builds production-style tools and dashboards using Python, Power BI, React, and Django, while applying CEH methodologies to safeguard systems and data. Known for turning raw datasets and messy requirements into clear, actionable insights and working software. Eager to bring a security-conscious, data-driven approach to a team solving real-world problems with AI and analytics.",
};

export const experience = [
  {
    role: "Certified Ethical Hacker",
    type: "Internship",
    company: "National Vocational and Technical Training Commission (NAVTTC)",
    location: "Wah Cantonment, Punjab, Pakistan · On-site",
    duration: "Jan 2026 – Jun 2026 · 6 mos",
    bullets: [
      "Executed Vulnerability Assessment and Penetration Testing (VAPT) on simulated networks, identifying and prioritizing critical security weaknesses.",
      "Leveraged Kali Linux tools to conduct network scanning, vulnerability analysis, and end-to-end ethical hacking workflows.",
      "Architected and managed isolated testing environments using Oracle VM VirtualBox for safe, repeatable penetration testing.",
      "Applied CEH methodologies to rigorously evaluate network security and system configurations against industry standards.",
      "Documented findings in structured reports and recommended actionable security fixes that strengthened overall cybersecurity posture."
    ],
  },
  {
    role: "Software Developer",
    type: "Internship",
    company: "Oil and Gas Development Company Limited (OGDCL)",
    location: "Islamabad, Pakistan · On-site",
    duration: "Apr 2025 – Sep 2025 · 6 mos",
    bullets: [
      "Streamlined intra-department ID shifting and Microsoft Entra ID data updates, ensuring accurate user access and records across the organization.",
      "Partnered with cross-functional technical teams to verify identity mappings and maintain enterprise system integrity.",
      "Engineered internal web application features using React and Django, automating manual workflows for the Systems Department.",
      "Drove API integration, testing, and UI improvements within a live enterprise environment.",
      "Recognized with a Letter of Appreciation from OGDCL for measurable contributions to the Systems Department."
    ],
  },
];

export const projects = [
  {
    title: "TeamFlow — Collaborative Task & Team Manager",
    tags: ["React", "Node.js", "Express", "MongoDB", "Kanban", "Real-Time Analytics"],
    description:
      "Engineered a full-stack task and team workspace coordinator with a bespoke design system and interactive Kanban-style boards.",
    highlights: [
      "Designed and delivered a bespoke team workspace with interactive Kanban boards",
      "Delivered real-time analytics to give teams live visibility into workload and project progress"
    ],
    featured: true,
  },
  {
    title: "Nexus AI — Agentic AI Assistant Framework",
    tags: ["Python", "FastAPI", "Streamlit", "LLMs", "Agentic AI"],
    description:
      "Architected an agentic AI framework (Python, FastAPI, Streamlit) around a Plan → Execute → Verify workflow for complex, multi-step tasks.",
    highlights: [
      "Built modular tool integration, persistent memory, and a knowledge base, extending capability beyond standard chatbots",
      "Delivered real-time analytics through a modern web interface for monitoring agent activity and outcomes"
    ],
    featured: true,
  },
  {
    title: "R-Modular-RAG-Engine",
    tags: ["Python", "RAG", "FastAPI", "LLMs", "React"],
    description:
      "Engineered a production-ready, modular Retrieval-Augmented Generation (RAG) pipeline integrating LLMs with custom data sources.",
    highlights: [
      "Designed automatic fallback mechanisms to maintain reliability across varying data and query conditions",
      "Shipped a premium, responsive web interface built for the agentic era"
    ],
    featured: true,
  },
  {
    title: "IMDB Sentiment Analysis",
    tags: ["Python", "NLP", "TF-IDF", "Machine Learning", "Scikit-Learn"],
    description:
      "Built an end-to-end NLP pipeline classifying 50,000 IMDB movie reviews as positive or negative.",
    highlights: [
      "Applied TF-IDF vectorization for text feature extraction",
      "Benchmarked multiple machine learning models to maximize classification accuracy"
    ],
    featured: false,
  },
  {
    title: "Amazon Product Reviews — Sentiment Analysis",
    tags: ["Power BI", "Python", "Data Analysis", "Sentiment Analysis", "Jupyter"],
    description:
      "Analyzed 1,464 Amazon India product reviews across Electronics, Computers, and Home categories to surface customer sentiment.",
    highlights: [
      "Built an interactive Power BI-style dashboard combining rating distribution and keyword analysis (e.g., 'quality', 'durable' vs. 'defective')",
      "Delivered a reproducible Jupyter Notebook pipeline for ongoing performance evaluation"
    ],
    featured: false,
  },
  {
    title: "Employee Productivity & Work-Life Balance Analysis",
    tags: ["Python", "Pandas", "EDA", "Data Visualization", "Jupyter"],
    description:
      "Led exploratory data analysis across 7,000+ records from three datasets as part of a 5-person research team.",
    highlights: [
      "Applied univariate, bivariate, and multivariate analysis to quantify links between work hours, stress, and productivity",
      "Presented findings showing remote employees reported measurably higher well-being than on-site peers"
    ],
    featured: false,
  },
  {
    title: "Enterprise-Grade Power BI Sales Intelligence Dashboard",
    tags: ["Power BI", "DAX", "Data Modeling", "Business Intelligence"],
    description:
      "Designed a Star Schema data model to optimize performance for a global sales BI solution.",
    highlights: [
      "Built advanced DAX measures (MoM growth, profit margin, trend forecasting) to support C-suite decision-making",
      "Delivered interactive visualizations spanning country, segment, and product-level performance"
    ],
    featured: false,
  },
  {
    title: "Retail Business Intelligence Platform",
    tags: ["SQL", "SQLite", "ETL", "Python", "Streamlit", "Business Intelligence"],
    description:
      "Built a self-contained BI stack spanning synthetic retail data generation, a SQLite data warehouse, and a full ETL pipeline.",
    highlights: [
      "Authored KPI and analytics SQL queries to power business reporting without external services or paid tools",
      "Delivered an interactive Streamlit dashboard for end-to-end retail performance monitoring"
    ],
    featured: false,
  },
  {
    title: "Smart Mini ERP System",
    tags: ["React", "Flask", "SQLite", "JWT Authentication", "Full-Stack"],
    description:
      "Developed a full-stack, production-ready ERP system (React + Flask/SQLite) for Pakistani businesses.",
    highlights: [
      "Integrated Inventory, POS, Customer CRM, and Financial Analytics modules behind JWT-based authentication",
      "Enabled real-time inventory tracking and visual reporting for operational decision-making"
    ],
    featured: false,
  },
  {
    title: "Expense Tracker Application",
    tags: ["React", "Vite", "FastAPI", "SQLite", "JWT Authentication"],
    description:
      "Built a full-stack expense tracker (FastAPI backend, React + Vite frontend) with secure JWT authentication.",
    highlights: [
      "Implemented complete CRUD expense management and a summary dashboard for at-a-glance financial insight"
    ],
    featured: false,
  },
  {
    title: "Vehicle Service Recommendation AI Agent",
    tags: ["Python", "LLMs", "AI Agent", "FastAPI", "Knowledge Base"],
    description:
      "Designed an LLM-integrated, learning-based agent to diagnose vehicle issues from user-reported symptoms.",
    highlights: [
      "Combined LLM-powered diagnostics with a structured, heuristic knowledge base to deliver real-time service recommendations"
    ],
    featured: false,
  },
  {
    title: "AutoParts Pro — Vehicle Spare Parts Management System",
    tags: ["Django", "React", "PostgreSQL", "Tailwind CSS", "Full-Stack"],
    description:
      "Built a full-stack enterprise solution managing spare parts inventory, customer data, and booking operations.",
    highlights: [
      "Designed a modular architecture to support long-term scalability and maintainability"
    ],
    featured: false,
  },
  {
    title: "Student Analytics Pro",
    tags: ["React", "Django", "Data Visualization", "Modular Architecture"],
    description:
      "Architected an enterprise-grade educational management system with a modular, service-oriented architecture.",
    highlights: [
      "Delivered tools for student tracking, performance visualization, and academic record management"
    ],
    featured: false,
  },
  {
    title: "AI Medical Assistant — Premium Chatbot",
    tags: ["Python", "Flask", "LLM Integration", "Glassmorphism UI"],
    description:
      "Built an AI-powered medical chatbot with a glassmorphism UI and a robust Python backend.",
    highlights: [
      "Designed the assistant to help users check symptoms and receive preliminary, informational guidance responsibly"
    ],
    featured: false,
  },
];

export const skills = {
  "Languages & Frameworks": ["Python", "JavaScript", "React", "Django", "FastAPI", "Flask", "Node.js", "Express"],
  "Data & Analytics": ["Power BI", "Jupyter Notebook", "Pandas", "NumPy", "EDA", "DAX", "SQL", "TF-IDF", "NLP"],
  "Cybersecurity": ["Certified Ethical Hacker (CEH)", "Kali Linux", "Vulnerability Assessment", "Penetration Testing", "Network Scanning", "Oracle VM VirtualBox"],
  "AI / ML": ["Machine Learning", "Sentiment Analysis", "RAG Systems", "Agentic AI", "LLM Integration"],
  "Tools & Platforms": ["Git/GitHub", "Vercel", "V0", "Microsoft Entra ID", "JWT Authentication", "SQLite", "Tailwind CSS"],
  "Core Strengths": ["Business Analysis", "Data Mining & Warehousing", "Presentation Skills", "Time Management"],
};

export const certifications = [
  { name: "Generative AI Application Developer Certificate", issuer: "ULEFUSA - UETians Lahore Endowment Foundation USA", note: "Top Performer" },
  { name: "Google Business Intelligence Professional Certificate", issuer: "Google" },
  { name: "Programming with JavaScript", issuer: "Meta" },
  { name: "Accelerate Your Job Search with AI", issuer: "Google" },
  { name: "APIs", issuer: "Meta" },
  { name: "Introduction to Databases for Back-End Development", issuer: "Meta" },
  { name: "Programming in Python", issuer: "Meta" },
  { name: "Python for Data Science, AI & Development", issuer: "IBM" },
  { name: "Version Control", issuer: "Meta" },
  { name: "Introduction to Data Science", issuer: "Cisco" },
  { name: "AI Essentials", issuer: "Cisco" },
  { name: "Executive Education Certificate", issuer: "Saïd Business School, University of Oxford" },
];

export const education = [
  {
    degree: "BS Computer Science (Data Science)",
    institution: "COMSATS University Islamabad, Wah Campus",
    duration: "Sep 2022 – Jun 2026",
  },
  {
    degree: "Intermediate, FSc (Pre-Engineering)",
    institution: "The Hope College of Science and Commerce",
    duration: "Jul 2020 – Jul 2022",
  },
  {
    degree: "Matriculation, Computer Science",
    institution: "Sir Syed School and College, Campus 4",
    duration: "Jun 2010 – May 2020",
  },
];
