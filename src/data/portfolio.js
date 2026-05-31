export const personal = {
  name: "Abdul Wasay",
  title: "Data Scientist & Full-Stack Developer",
  tagline: "Building intelligent systems at the intersection of AI, data, and software.",
  location: "Wah Cantt, Pakistan",
  email: "abdulwasaymalik757@gmail.com",
  github: "https://github.com/theabdulwasay",
  linkedin: "https://linkedin.com/in/abdul-wasay",
  phone: "+92 334 1944963",
  summary:
    "Graduate in Computer Science from COMSATS University Islamabad, specialized in Data Science, AI & Machine Learning. Experienced full-stack developer and data engineer with production deployments on Vercel and Render, containerized apps via Docker, and automated workflows with n8n. Certified Ethical Hacker (CEH) with hands-on cybersecurity experience.",
};

export const experience = [
  {
    role: "Data Scientist / Software Developer",
    type: "Internship",
    company: "Oil and Gas Development Company Limited (OGDC)",
    location: "Islamabad · On-site",
    bullets: [
      "Developed data-driven analytics systems and automated reporting dashboards for operational insights using Python, SQL, and BI tools.",
      "Designed and deployed machine learning models to analyze drilling performance data and predict operational trends.",
      "Built interactive Power BI dashboards for cross-department KPI monitoring and executive-level reporting.",
      "Performed exploratory data analysis (EDA) on large-scale production datasets to uncover patterns and anomalies.",
      "Automated ETL pipelines to streamline reporting workflows.",
      "Collaborated with cross-functional teams using Slack and Jira for agile project tracking.",
    ],
  },
  {
    role: "Certified Ethical Hacker",
    type: "Internship",
    company: "National Vocational and Technical Training Commission (NAVTTC)",
    location: "Wah Cantonment · On-site",
    bullets: [
      "Hands-on penetration testing, threat analysis, vulnerability assessment, and network security.",
      "Operated Kali Linux, Metasploitable, Oracle VM VirtualBox, Nmap, and Wireshark for real-world attack simulations.",
      "Conducted full ethical hacking lifecycle: reconnaissance, scanning, exploitation, and reporting.",
    ],
  },
];

export const projects = [
  {
    title: "Intelligent Multi-Branch Vehicle Service Hub",
    tags: ["Python", "FastAPI", "React", "ML", "Firebase", "MongoDB", "Docker"],
    description:
      "AI-powered platform managing vehicle bookings across multiple workshop branches with smart job allocation, predictive maintenance, demand forecasting, and automated notifications.",
    highlights: [
      "Online appointment booking with branch selection & real-time tracking",
      "Predictive maintenance engine & demand forecasting",
      "Auto-notifications via SMS/Email/WhatsApp",
      "Billing & invoicing module with payment tracking",
    ],
    featured: true,
  },
  {
    title: "AI Email Automation System",
    tags: ["n8n", "AI Agents", "Gmail API", "Webhooks", "Slack"],
    description:
      "Fully automated AI email pipeline using n8n to read, classify, and respond to incoming emails with intelligent routing to Slack channels and CRM logging.",
    highlights: [
      "Zero-code automation with complex conditional branching",
      "Multi-system integration across Gmail, Slack, and CRM",
    ],
    featured: true,
  },
  {
    title: "CyberShield — Security Suite",
    tags: ["Python", "Kali Linux", "Networking", "Linux"],
    description:
      "Full-stack cybersecurity platform with 7 modules: IDS, port scanning, phishing detection, real-time alerting, and network traffic analysis.",
    highlights: ["7-module security platform", "Real-time network traffic analysis"],
    featured: false,
  },
  {
    title: "AI Nexus — Agentic AI Framework",
    tags: ["Python", "Streamlit", "LLM APIs", "RapidMiner"],
    description:
      "Modular, extensible agentic AI framework for orchestrating complex tasks through intelligent planning, task decomposition, memory management, and multi-tool execution.",
    highlights: ["Task decomposition & memory management", "Streamlit frontend with tool-use pipelines"],
    featured: true,
  },
  {
    title: "Smart Mini ERP System",
    tags: ["React", "Vite", "Flask", "SQLite", "Vercel", "Render"],
    description:
      "Production-ready Mini ERP for small businesses in Pakistan deployed on Vercel + Render. Modules: inventory, HR, sales, finance with full REST API backend.",
    highlights: ["Live on Vercel + Render", "Inventory, HR, Sales & Finance modules"],
    featured: false,
  },
  {
    title: "MotoElite — Bike Marketplace",
    tags: ["Django", "PostgreSQL", "Docker", "Vercel"],
    description:
      "Full-stack marketplace for motorcycle buying/selling with customer dashboard, admin panel, Glassmorphism UI. Containerized with Docker.",
    highlights: ["Glassmorphism UI design", "Containerized & production deployed"],
    featured: false,
  },
  {
    title: "Sentiment Analysis System",
    tags: ["Python", "Scikit-learn", "NLTK", "Jupyter"],
    description:
      "End-to-end NLP pipeline for Amazon India product reviews achieving 90%+ accuracy on 50K IMDB dataset.",
    highlights: ["90%+ accuracy on 50K dataset", "Full NLP pipeline from scratch"],
    featured: false,
  },
  {
    title: "Enterprise Power BI Sales Dashboard",
    tags: ["Power BI", "DAX", "Excel", "Data Modeling"],
    description:
      "Enterprise BI dashboard analyzing global sales performance, profitability, customer segments, and country-wise insights with advanced DAX measures.",
    highlights: ["Global sales performance tracking", "Executive-level KPI reporting"],
    featured: false,
  },
  {
    title: "Vehicle Service Recommendation AI Agent",
    tags: ["Python", "Flask", "LLM Integration"],
    description:
      "LLM-integrated learning agent diagnosing vehicle issues using 1000+ rule knowledge base with intelligent recommendations.",
    highlights: ["1000+ rule knowledge base", "LLM-powered diagnosis engine"],
    featured: false,
  },
  {
    title: "U.S. Chronic Disease Indicators Analysis",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    description:
      "Comprehensive analytical system for CDC chronic disease indicators with EDA, visualization, and production-ready pipeline.",
    highlights: ["CDC dataset analysis", "Production-ready analytical pipeline"],
    featured: false,
  },
];

export const skills = {
  "Languages": ["Python", "SQL", "JavaScript", "Node.js", "Express", "HTML5", "CSS3"],
  "AI & Data": ["Machine Learning", "NLP", "Data Mining", "EDA", "Web Scraping", "Data Visualization", "RapidMiner"],
  "Frameworks": ["React", "Vite", "FastAPI", "Django", "Flask", "Bootstrap 5", "Streamlit"],
  "Databases": ["MongoDB", "Firebase", "MySQL", "SQLite", "PostgreSQL"],
  "DevOps & Tools": ["Git", "GitHub", "Docker", "Vercel", "Render", "n8n", "Jira", "Slack"],
  "Cybersecurity": ["CEH", "Kali Linux", "Penetration Testing", "Metasploitable", "Nmap", "Wireshark"],
  "Visualization": ["Power BI", "Matplotlib", "Seaborn", "Plotly", "Jupyter Notebook"],
  "AI Editors": ["Cursor", "Windsurf", "Antigravity"],
};

export const certifications = [
  { name: "Certified Ethical Hacker (CEH)", issuer: "NAVTTC" },
  { name: "Data Science Certificate", issuer: "Cisco Networking Academy" },
  { name: "Generative AI Certificate", issuer: "HEC Silicon Valley" },
  { name: "Python Programming Certificate", issuer: "Saylor Academy" },
];

export const education = [
  {
    degree: "B.Sc. Computer Science",
    specialization: "Data Science, AI & Machine Learning",
    institution: "COMSATS University Islamabad, Wah Campus",
  },
  {
    degree: "Intermediate (FSc) — FCS",
    specialization: "Faculty of Computer Science",
    institution: "The Hope College of Science and Commerce",
  },
  {
    degree: "Matriculation — Computer Science",
    specialization: "",
    institution: "Sir Syed School and College Campus 4",
  },
];
