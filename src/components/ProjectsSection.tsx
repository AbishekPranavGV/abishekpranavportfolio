import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Search, ArrowUpRight, Sparkles } from "lucide-react";

type ProjectCategory = "flagship" | "all" | "ai" | "data" | "operations";

type Project = {
  title: string;
  category: "ai" | "data" | "operations";
  categoryLabel: string;
  description: string;
  impact: string;
  stack: string[];
  github: string;
  demo: string;
  highlight?: boolean;
  image: string;
};

const resolveImagePath = (path: string) => {
  const base = import.meta.env.BASE_URL || "./";
  const cleanBase = base.endsWith("/") ? base : base + "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

const projects: Project[] = [
  // --- AI & AUTOMATION (12) ---
  {
    title: "Know: Enterprise AI Second-Brain & Workspace",
    category: "ai",
    categoryLabel: "Productivity & Second-Brain",
    description: "Full-stack Next.js 15 AI second-brain and collaborative workspace suite featuring note vaults, flashcard spaced repetition, agile task kanban, command palette (Cmd+K), and LibSQL/Prisma audit logs.",
    impact: "Universal Cmd+K command palette • Spaced repetition recall engine • LibSQL encrypted audit logs",
    stack: ["Next.js 15", "React 19", "TypeScript", "Prisma", "LibSQL / Turso", "Tailwind CSS"],
    github: "https://github.com/AbishekPranavGV/know-ai-workspace",
    demo: "https://know-ai-workspace.vercel.app/dashboard",
    highlight: true,
    image: "projects/know-workspace.svg",
  },
  {
    title: "Quick-Curie: Akshay AI Personal Assistant & FinOS Hub",
    category: "ai",
    categoryLabel: "Autonomous AI & FinOS",
    description: "Autonomous Personal AI Assistant and FinOS Accounting Engine with offline-first PWA service workers, zero-variance double-entry balance integrity, Jarvis-style voice HUD, and real-time hardware Galaxy Tab telemetry synchronization.",
    impact: "100% security test pass • Zero-variance FinOS ledger • 100% offline Kiwix knowledge • Live on Vercel",
    stack: ["Python 3.11", "PWA", "Service Workers", "FinOS", "WebSockets", "Vercel"],
    github: "https://github.com/AbishekPranavGV/quick-curie",
    demo: "https://akshay-ai-personal-assistant.vercel.app/",
    highlight: true,
    image: "projects/quick-curie.svg",
  },
  {
    title: "NUNES School & Transport Circular Suite",
    category: "ai",
    categoryLabel: "Institutional Automation",
    description: "Production Next.js web application for discovering, verifying, and dispatching school institutions and transport safety circulars with breath analyser compliance workflows.",
    impact: "100% verified Coimbatore database • Multi-channel circular dispatch • Live on Vercel",
    stack: ["Next.js 14", "React 19", "TypeScript", "Tailwind CSS", "SQLite", "Vercel"],
    github: "https://github.com/AbishekPranavGV/nunes-school-directory-coimbatore",
    demo: "https://school-seven-eosin.vercel.app/",
    highlight: true,
    image: "projects/school-directory.svg",
  },
  {
    title: "LeadsAuto: Dual-Email Dispatch Engine",
    category: "ai",
    categoryLabel: "Enterprise Dual-Routing",
    description: "Automated webhook-driven dual email dispatch engine for Nunes Instruments. Computes 2x wholesale margin rules, extracts live specs, and automates multi-catalog client attachments.",
    impact: "Zero-latency dispatch • Automated 2x pricing rule • Direct buyer & internal routing",
    stack: ["Node.js", "Express", "REST APIs", "IndiaMART Webhooks", "Vercel", "Tailscale"],
    github: "https://github.com/AbishekPranavGV/leads-auto-dispatch",
    demo: "https://nunes-transport.vercel.app/transport",
    highlight: true,
    image: "projects/leads-auto.svg",
  },
  {
    title: "AI Catalogue Studio",
    category: "ai",
    categoryLabel: "Generative AI & LLMs",
    description: "Multi-modal studio automating supplier brochure ingestion, ISO/CE regulatory compliance checks, and deterministic vector PDF catalogue generation.",
    impact: "80% reduction in manual catalog drafting • High-precision deterministic schema extraction",
    stack: ["Python", "Flask", "Gemini API", "PDF Generation", "Vercel", "Tailwind CSS"],
    github: "https://github.com/AbishekPranavGV/MedX",
    demo: "https://nunes-catalogue-studio-live.vercel.app/",
    highlight: true,
    image: "projects/medx.svg",
  },
  {
    title: "IndiaMART Product Automation",
    category: "ai",
    categoryLabel: "B2B Commerce & Automation",
    description: "Automated B2B product catalog generation, spec extraction, dynamic wholesale price tiering, and high-conversion listings.",
    impact: "10,000+ SKUs automated • 95% faster catalog creation • 100% schema compliant",
    stack: ["JavaScript", "Node.js", "Generative AI", "B2B Schemas", "Vercel"],
    github: "https://github.com/AbishekPranavGV/IndiaMART-AI-Content-Catalog-Generator",
    demo: "https://abishekpranavgv.github.io/IndiaMART-AI-Content-Catalog-Generator/",
    highlight: true,
    image: "projects/indiamart.svg",
  },
  {
    title: "Social Command Center",
    category: "ai",
    categoryLabel: "Autonomous Dispatcher",
    description: "Multi-platform social media dispatch and campaign orchestration engine with automated queue dispatchers and cross-channel analytics.",
    impact: "12+ social platforms • 450+ autonomous posts/mo • 99.4% SLA delivery",
    stack: ["React 19", "Next.js", "Node.js 20", "Webhooks", "Tailwind CSS"],
    github: "https://github.com/AbishekPranavGV/social-command-center",
    demo: "https://nunes-social-post-machine-mu.vercel.app/",
    highlight: true,
    image: "projects/social-command-center.svg",
  },
  {
    title: "SocmedX Growth Engine",
    category: "ai",
    categoryLabel: "Social Operations Suite",
    description: "Centralized social operations managing concurrent brand campaigns, sentiment telemetry, and algorithmic audience reach timing.",
    impact: "Unified multi-network sync • Automated sentiment radar • +34.2% MoM reach",
    stack: ["Node.js", "Social Graph APIs", "Sentiment Telemetry", "Campaign Automation"],
    github: "https://github.com/AbishekPranavGV/SocmedX",
    demo: "https://abishekpranavgv.github.io/SocmedX/",
    highlight: false,
    image: "projects/socmedx.svg",
  },
  {
    title: "Nunes Local AI Marketing Starter",
    category: "ai",
    categoryLabel: "Edge AI & Offline LLMs",
    description: "Private local language model marketing stack for offline copy generation, social campaigns, and SME promotional collateral with zero cloud API costs.",
    impact: "100% private offline inference • Zero API cloud costs • Turnkey 5-min setup",
    stack: ["Local LLM", "Quantized Models", "Python", "Prompt Engineering"],
    github: "https://github.com/AbishekPranavGV/NUNES-Local-AI-Marketing-Starter",
    demo: "https://abishekpranavgv.github.io/NUNES-Local-AI-Marketing-Starter/",
    highlight: false,
    image: "projects/local-ai-marketing.svg",
  },
  {
    title: "Smart Brochure to Catalog Converter",
    category: "ai",
    categoryLabel: "Intelligent Document Processing",
    description: "IDP pipeline transforming unstructured marketing PDF brochures into standardized machine-readable tabular product catalogs.",
    impact: "98% table extraction accuracy • Multi-column parsing • Instant JSON/Excel export",
    stack: ["Python", "OCR", "Table Segmentation", "NLP Layout Parsing"],
    github: "https://github.com/AbishekPranavGV/Smart-Brochure-to-Catalog-Converter",
    demo: "https://abishekpranavgv.github.io/Smart-Brochure-to-Catalog-Converter/",
    highlight: false,
    image: "projects/brochure-converter.svg",
  },
  {
    title: "AI-Powered Enterprise CRM",
    category: "ai",
    categoryLabel: "Sales Pipeline & Lead AI",
    description: "Modular enterprise CRM skill bundle featuring automated deal stages, intent lead scoring, and multi-channel customer activity logging.",
    impact: "40% shorter deal cycles • 98% automated logging • Intent qualification scorecards",
    stack: ["Enterprise CRM", "Lead Heuristics", "Pipeline Automation", "Skill Bundle v2"],
    github: "https://github.com/AbishekPranavGV/Crm",
    demo: "https://abishekpranavgv.github.io/Crm/",
    highlight: false,
    image: "projects/crm.svg",
  },
  {
    title: "Multi-Account Gmail Hygiene Agent",
    category: "ai",
    categoryLabel: "Autonomous Email Governance",
    description: "Multi-account inbox governance system automating newsletter unsubscribe, priority routing, archive classification, and phishing quarantine.",
    impact: "5,000+ daily emails processed • Zero-touch archive • Focus inbox hygiene",
    stack: ["Gmail API v1", "OAuth 2.0 Multi-Tenant", "Header Analysis", "Automation"],
    github: "https://github.com/AbishekPranavGV/Multi-Account-Gmail-Inbox-Hygiene-Agent",
    demo: "https://abishekpranavgv.github.io/Multi-Account-Gmail-Inbox-Hygiene-Agent/",
    highlight: false,
    image: "projects/gmail-agent.svg",
  },

  // --- DATA & PREDICTIVE ANALYTICS (8) ---
  {
    title: "Retail Predictive Inventory Model",
    category: "data",
    categoryLabel: "Predictive Analytics",
    description: "Python, SQL and Power BI demand forecasting system to optimise inventory reorder points and eliminate warehouse stockouts.",
    impact: "85% forecast accuracy • 10 hrs/wk reporting automated • $1B+ inventory gap resolved",
    stack: ["SQL Window CTEs", "Python", "ARIMA", "Facebook Prophet", "Power BI", "GitHub Pages"],
    github: "https://github.com/AbishekPranavGV/Retail-Sales-Performance-Predictive-Analytics",
    demo: "https://abishekpranavgv.github.io/Retail-Sales-Performance-Predictive-Analytics/",
    highlight: true,
    image: "projects/retail-dashboard.png",
  },
  {
    title: "Quantitative Stock Price Forecaster",
    category: "data",
    categoryLabel: "Quantitative Finance & LSTM",
    description: "Financial time-series forecasting architecture combining classical econometric ARIMA with Deep Learning LSTM neural networks.",
    impact: "0.018 RMSE error • Walk-forward rolling validation • Volatility clustering",
    stack: ["TensorFlow", "Keras", "ARIMA", "LSTM", "Statsmodels", "NumPy"],
    github: "https://github.com/AbishekPranavGV/Stock-Price-Prediction-using-ARIMA",
    demo: "https://abishekpranavgv.github.io/Stock-Price-Prediction-using-ARIMA/",
    highlight: true,
    image: "projects/project-stock-gh.png",
  },
  {
    title: "Climate Impact & Real-Time ESG Dashboard",
    category: "data",
    categoryLabel: "Sustainability & Carbon Telemetry",
    description: "Enterprise real-time environmental telemetry monitoring engine with automated carbon emission accounting and Scope 1-3 tracking.",
    impact: "-32.4% emissions variance • 4,280+ points/sec • CSRD/SEC regulatory alignment",
    stack: ["Python", "Streamlit", "SQL", "IoT Telemetry", "Power BI"],
    github: "https://github.com/AbishekPranavGV/Climate-Impact-ESG-Dashboard",
    demo: "https://abishekpranavgv.github.io/Climate-Impact-ESG-Dashboard/",
    highlight: true,
    image: "projects/project-esg-gh.png",
  },
  {
    title: "COVID-19 Global Forecasting Model",
    category: "data",
    categoryLabel: "Epidemiological Time-Series",
    description: "Epidemiological modeling engine simulating transmission dynamics, SEIR compartmental curves, and 14-day global trajectory projections.",
    impact: "91.2% trajectory accuracy • 180+ global territories • R0 reproduction metrics",
    stack: ["Python", "SEIR Differential Models", "Time-Series", "Pandas", "Matplotlib"],
    github: "https://github.com/AbishekPranavGV/COVID-19-Global-Forecasting-Predictive-Analysis",
    demo: "https://abishekpranavgv.github.io/COVID-19-Global-Forecasting-Predictive-Analysis/",
    highlight: false,
    image: "projects/covid-forecasting.svg",
  },
  {
    title: "Customer Churn Decision Framework",
    category: "data",
    categoryLabel: "Retention ML & Decision Trees",
    description: "Treating customer attrition as a financial optimization problem using interpretable machine learning pipelines and decision thresholds.",
    impact: "88.5% ROC-AUC • $2.4M ARR protected • Top 5 attrition drivers isolated",
    stack: ["Python", "Decision Trees", "Logistic Regression", "EDA", "Pandas"],
    github: "https://github.com/AbishekPranavGV/Customer-Churn-Decision-Analysis",
    demo: "https://abishekpranavgv.github.io/Customer-Churn-Decision-Analysis/",
    highlight: false,
    image: "projects/customer-churn.svg",
  },
  {
    title: "E-commerce Recommendation Engine",
    category: "data",
    categoryLabel: "Collaborative Filtering & SVD",
    description: "Personalized recommendation system combining user-item matrix factorization, cosine similarity, and cold-start fallback hierarchies.",
    impact: "+24.8% CTR uplift • +18.2% average basket order size • 50k+ interaction pairs",
    stack: ["Python", "Scikit-learn", "Collaborative Filtering", "SVD Matrix Factorization"],
    github: "https://github.com/AbishekPranavGV/E-commerce-Recommendation-Engine",
    demo: "https://abishekpranavgv.github.io/E-commerce-Recommendation-Engine/",
    highlight: false,
    image: "projects/ecommerce-recommender.svg",
  },
  {
    title: "Real-Time Face & Landmark Classifier",
    category: "data",
    categoryLabel: "Computer Vision & Cascades",
    description: "Lightweight computer vision detection system utilizing OpenCV Haar Cascades for multi-scale face, eye, nose, and mouth tracking.",
    impact: "30+ FPS real-time CPU inference • 96.4% precision • Synthetic dataset generator",
    stack: ["Python", "OpenCV", "Haar Cascades", "Image Processing"],
    github: "https://github.com/AbishekPranavGV/Facedetection",
    demo: "https://abishekpranavgv.github.io/Facedetection/",
    highlight: false,
    image: "projects/facedetection.svg",
  },
  {
    title: "Emotion-Aware Movie Recommender",
    category: "data",
    categoryLabel: "Affective NLP & Sentiment",
    description: "Affective computing engine mapping user emotional states to film synopses using sentiment scoring, semantic embeddings, and Streamlit.",
    impact: "7 emotion classification classes • 45,000+ movie corpus • Zero cold-start latency",
    stack: ["Python", "NLP", "TF-IDF Vectorization", "Streamlit", "Pandas"],
    github: "https://github.com/AbishekPranavGV/Movie_recommendation_using_emotion",
    demo: "https://abishekpranavgv.github.io/Movie_recommendation_using_emotion/",
    highlight: false,
    image: "projects/project-emotion.jpg",
  },

  // --- OPERATIONS & SYSTEMS ---
  {
    title: "GmCL: Autonomous Gmail Cleaner",
    category: "operations",
    categoryLabel: "Inbox Hygiene & Cloud",
    description: "Enterprise multi-account Gmail inbox cleaner with live Vercel dashboard, real-time Google Workspace storage telemetry, rule-based category pruning, and automated large attachment radar.",
    impact: "Multi-account quota monitoring • Rule-based Promotions & Spam pruning • Vercel serverless ready",
    stack: ["Python 3.11", "Flask", "Google APIs", "OAuth2", "Vercel Serverless"],
    github: "https://github.com/AbishekPranavGV/gmcl-gmail-cleaner",
    demo: "https://gmcl-gmail-cleaner-mauve.vercel.app/#dashboard",
    highlight: true,
    image: "projects/gmcl-cleaner.svg",
  },
  {
    title: "NICMS Sri Lanka Strategic Blueprint",
    category: "operations",
    categoryLabel: "National IT Infrastructure",
    description: "National Information & Communication Management System architectural blueprint, technical specifications, and zero-trust public sector roadmap.",
    impact: "National scalability architecture • 99.99% high availability • Ministry interoperability",
    stack: ["Enterprise Architecture", "BRD / FRD", "Zero-Trust Security", "Interactive Blueprint"],
    github: "https://github.com/AbishekPranavGV/NICMS-SriLanka-Strategic-Blueprint",
    demo: "https://abishekpranavgv.github.io/NICMS-SriLanka-Strategic-Blueprint/",
    highlight: true,
    image: "projects/nicms-blueprint.svg",
  },
  {
    title: "NICMS Specifications & Project Specs",
    category: "operations",
    categoryLabel: "Governance & Interop Specs",
    description: "Detailed system requirements, database topologies, inter-agency communication protocols, and cryptographic compliance specifications.",
    impact: "FIPS 140-3 cryptography • ESB inter-ministerial data bus • Public sector compliance",
    stack: ["Technical Architecture", "System Specifications", "API Governance", "Microservices"],
    github: "https://github.com/AbishekPranavGV/NICMS-SriLanka-Strategic-Blueprint_Project",
    demo: "https://abishekpranavgv.github.io/NICMS-SriLanka-Strategic-Blueprint_Project/",
    highlight: false,
    image: "projects/nicms-specs.svg",
  },
  {
    title: "Global News Sentiment & Market Pulse",
    category: "operations",
    categoryLabel: "NLP Market Intelligence",
    description: "Automated text mining and sentiment classification pipeline analyzing financial news headlines for macroeconomic correlation.",
    impact: "250,000+ headlines processed • 89.1% sentiment F1-score • Real-time market signal",
    stack: ["Python", "VADER Sentiment", "Transformer NLP", "Financial Text Mining"],
    github: "https://github.com/AbishekPranavGV/Sentimental-analysis-of-News-Headlines",
    demo: "https://abishekpranavgv.github.io/Sentimental-analysis-of-News-Headlines/",
    highlight: false,
    image: "projects/project-sentiment-gh.png",
  },
  {
    title: "Smart PriceMaster Dynamic Pricing Tool",
    category: "operations",
    categoryLabel: "Dynamic Pricing & FX Engine",
    description: "Cross-platform enterprise pricing application automating bulk SKU margin analysis, multi-currency conversion, and catalog generation.",
    impact: "Multi-OS cross-platform package • Automated volume tier margins • Real-time FX sync",
    stack: ["Python", "Cross-Platform GUI", "Pricing Algorithms", "Vector PDF Engine"],
    github: "https://github.com/AbishekPranavGV/Smart-Price-Master-Catalog-Generator",
    demo: "https://abishekpranavgv.github.io/Smart-Price-Master-Catalog-Generator/",
    highlight: false,
    image: "projects/price-master.svg",
  },
  {
    title: "Autonomous System Temp & Disk Optimizer",
    category: "operations",
    categoryLabel: "Systems Administration",
    description: "High-reliability background maintenance utility automating 4-hour cycle temporary file purges, memory cache cleanup, multi-drive storage telemetry, and disk optimization.",
    impact: "15+ GB monthly disk space recovered • Win32 drive telemetry • Live Vercel dashboard",
    stack: ["Python", "Win32 APIs", "System Telemetry", "PowerShell", "Vercel"],
    github: "https://github.com/AbishekPranavGV/Autonomous-System-Temp-Cleaner",
    demo: "https://autonomous-system-temp-cleaner-six.vercel.app/",
    highlight: true,
    image: "projects/temp-cleaner.svg",
  },
  {
    title: "Google Drive Automated Indexer",
    category: "operations",
    categoryLabel: "Cloud Governance & Discovery",
    description: "Cloud storage intelligence engine traversing nested folder hierarchies, generating file indexes, and auditing external link permissions.",
    impact: "100,000+ files indexed/min • Permission vulnerability audit • Deduplication scanner",
    stack: ["Google Drive API v3", "Python", "OAuth 2.0", "Cloud Architecture"],
    github: "https://github.com/AbishekPranavGV/drive-file-index",
    demo: "https://abishekpranavgv.github.io/drive-file-index/",
    highlight: false,
    image: "projects/drive-index.svg",
  },
  {
    title: "Enterprise Streamlit Application Suite",
    category: "operations",
    categoryLabel: "Rapid BI Prototyping",
    description: "Modular Python data application framework featuring reactive state management, caching layers, and multi-page corporate analytics layouts.",
    impact: "Sub-50ms cache retrieval • 15+ reusable widgets • Instant cloud container deploy",
    stack: ["Python", "Streamlit", "Plotly", "Multi-Page Router", "Cloud CI/CD"],
    github: "https://github.com/AbishekPranavGV/Streamlit",
    demo: "https://abishekpranavgv.github.io/Streamlit/",
    highlight: false,
    image: "projects/streamlit-app.svg",
  },
  {
    title: "Abishek Pranav Advanced Portfolio",
    category: "operations",
    categoryLabel: "Modern Production Web App",
    description: "High-performance responsive personal portfolio featuring dynamic client routing, 24-repo CI/CD telemetry grid, and resume modal.",
    impact: "100% CI pass rate • Sub-second load time • Cross-environment deployment (Pages & Lovable)",
    stack: ["TypeScript", "React 18", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/AbishekPranavGV/abishekpranavportfolio",
    demo: "https://abishekpranavportfolio.lovable.app/",
    highlight: false,
    image: "projects/portfolio.svg",
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory>("flagship");
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        filter === "flagship"
          ? Boolean(project.highlight)
          : filter === "all" || project.category === filter;
      const matchesSearch =
        search === "" ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.stack.some((s) => s.toLowerCase().includes(search.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [filter, search]);

  const flagshipCount = useMemo(() => projects.filter((p) => p.highlight).length, []);

  return (
    <section className="px-6 py-24 relative overflow-hidden" id="projects">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="section-divider mb-4" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>10 Verified Live Cloud Deployments Active</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
              Production Portfolio &amp; Live Systems
            </h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base max-w-2xl">
              Curated enterprise AI agents, automated dispatch workflows, and predictive models — all deployed with live interactive results and direct production architecture.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by system name, tech, or stack..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-border bg-card/80 backdrop-blur-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {[
            { id: "flagship", label: `⭐ Curated Top 7 AI Systems (${flagshipCount})`, isSpecial: true },
            { id: "all", label: `All 30 Systems (${projects.length})` },
            { id: "ai", label: `AI & Automation (${projects.filter((p) => p.category === "ai").length})` },
            { id: "data", label: `Data & Predictive Analytics (${projects.filter((p) => p.category === "data").length})` },
            { id: "operations", label: `Operations & Cloud (${projects.filter((p) => p.category === "operations").length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as ProjectCategory)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                filter === tab.id
                  ? tab.isSpecial
                    ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25 scale-105 border border-primary/50"
                    : "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                  : "border border-border/80 bg-card/60 backdrop-blur text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card/90"
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Flagship Highlight Banner */}
        {filter === "flagship" && search === "" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-emerald-500/10 border border-primary/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">
                  Selected Top 7 Executive AI & Forward Deployed Systems
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Verified enterprise architectures with live Vercel deployments, production APIs, and quantified real-world impact.
                </p>
              </div>
            </div>
            <button
              onClick={() => setFilter("all")}
              className="text-xs font-bold text-primary hover:text-primary/80 transition-colors whitespace-nowrap self-start sm:self-auto bg-card/60 px-3 py-1.5 rounded-lg border border-primary/20 hover:border-primary/40"
            >
              Explore All 30 Systems →
            </button>
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 shadow-md ${
                  project.highlight
                    ? "border-primary/40 bg-gradient-to-b from-card/95 via-card/90 to-card/85 shadow-primary/10 hover:border-primary hover:shadow-2xl hover:shadow-primary/20"
                    : "border-border/70 bg-card/60 hover:border-border hover:bg-card/90 hover:shadow-xl"
                }`}
              >
                <div>
                  {/* Clickable Live Result Image Preview */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="block relative w-full h-48 rounded-xl overflow-hidden mb-4 border border-border/80 bg-background/80 shadow-inner group/img cursor-pointer"
                    title={`Click to Run ${project.title} as Live`}
                  >
                    <img
                      src={resolveImagePath(project.image)}
                      alt={`${project.title} Result Output Preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-background/90 backdrop-blur px-2.5 py-1 rounded-md border border-primary/30 shadow-sm">
                        {project.highlight ? "⭐ Flagship Enterprise" : project.categoryLabel}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-background/90 backdrop-blur px-2.5 py-1 rounded-md border border-emerald-500/30">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Cloud Result
                      </span>

                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-primary bg-primary/20 group-hover/img:bg-primary group-hover/img:text-primary-foreground backdrop-blur px-3 py-1 rounded-md border border-primary/40 transition-all shadow-sm">
                        <span>▶ Launch Live</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </div>
                  </a>

                  <h3 className="text-lg font-bold mb-1.5 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="p-3 rounded-xl bg-secondary/30 border border-border/50 mb-3 text-xs">
                    <span className="font-semibold text-foreground flex items-center gap-1.5 mb-1 text-[11px]">
                      <Sparkles className="h-3 w-3 text-primary" />
                      Impact &amp; Results:
                    </span>
                    <p className="text-muted-foreground text-[10.5px] leading-snug">
                      {project.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9.5px] font-mono px-2 py-0.5 rounded-md bg-secondary/60 text-muted-foreground border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-[9.5px] font-mono px-1.5 py-0.5 text-muted-foreground/70">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Direct Action Row */}
                <div className="pt-3 border-t border-border/60 flex items-center justify-between gap-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-white transition-all bg-primary/10 hover:bg-primary px-3.5 py-2 rounded-lg border border-primary/30 shadow-sm"
                  >
                    <span>▶ Launch Live System</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors border border-border/40"
                    title="View GitHub Repository"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Direct GitHub Explorer for Remaining Projects */}
        <div className="mt-14 rounded-2xl border border-border/80 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-mono font-semibold mb-2">
              <Github className="h-3.5 w-3.5" />
              <span>Full Monorepo & Open Source</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900">
              Looking to explore all 31+ production repositories & live builds?
            </h3>
            <p className="text-xs md:text-sm text-slate-600 mt-1 max-w-xl">
              Inspect all data pipelines, ARIMA forecasting engines, export documentation automations, and full-stack applications directly on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/AbishekPranavGV?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="action-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-xs md:text-sm font-bold shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 cursor-pointer"
          >
            <Github className="h-4 w-4" />
            <span>View All 31 Repos on GitHub</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
