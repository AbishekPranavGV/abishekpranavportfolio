import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Search, ArrowUpRight, Sparkles, Filter, CheckCircle2 } from "lucide-react";

type ProjectCategory = "all" | "ai" | "data" | "operations";

type Project = {
  title: string;
  category: "ai" | "data" | "operations";
  categoryLabel: string;
  description: string;
  impact: string;
  stack: string[];
  github: string;
  demo: string;
  externalApp?: string;
  highlight?: boolean;
};

const projects: Project[] = [
  // --- AI & AUTOMATION (8) ---
  {
    title: "AI Catalogue Studio",
    category: "ai",
    categoryLabel: "Generative AI & LLMs",
    description: "Product research, structured technical specification extraction, LLM-assisted catalogue content, and automated branded PDF generation.",
    impact: "80% reduction in manual catalog drafting • High-precision deterministic schema extraction",
    stack: ["Python", "Flask", "Gemini API", "PDF Generation", "Vercel", "Tailwind CSS"],
    github: "https://github.com/AbishekPranavGV/MedX",
    demo: "https://abishekpranavgv.github.io/MedX/",
    externalApp: "https://nunes-catalogue-studio-live.vercel.app/",
    highlight: true,
  },
  {
    title: "IndiaMART Product Automation",
    category: "ai",
    categoryLabel: "B2B Commerce & Automation",
    description: "Automated B2B product catalog generation, spec extraction, dynamic price tier calculations, and high-conversion catalog synthesis.",
    impact: "10,000+ SKUs automated • 95% faster catalog creation • 100% schema compliant",
    stack: ["JavaScript", "Node.js", "Generative AI", "B2B Schemas", "Vercel"],
    github: "https://github.com/AbishekPranavGV/IndiaMART-AI-Content-Catalog-Generator",
    demo: "https://abishekpranavgv.github.io/IndiaMART-AI-Content-Catalog-Generator/",
    externalApp: "https://nunes-social-post-machine-mu.vercel.app",
    highlight: true,
  },
  {
    title: "Social Command Center",
    category: "ai",
    categoryLabel: "Autonomous Dispatcher",
    description: "Multi-platform social media dispatch and campaign orchestration engine with automated queue dispatchers and cross-channel analytics.",
    impact: "12+ social platforms • 450+ autonomous posts/mo • 99.4% SLA delivery",
    stack: ["React 19", "Next.js", "Node.js 20", "Webhooks", "Tailwind CSS"],
    github: "https://github.com/AbishekPranavGV/social-command-center",
    demo: "https://abishekpranavgv.github.io/social-command-center/",
    externalApp: "https://nunes-social-post-machine-mu.vercel.app",
    highlight: true,
  },
  {
    title: "SocmedX Growth Engine",
    category: "ai",
    categoryLabel: "Social Operations Suite",
    description: "Centralized social command operations managing concurrent campaigns, sentiment telemetry, and algorithmic audience reach timing.",
    impact: "Unified multi-network sync • Automated sentiment radar • +34.2% MoM reach",
    stack: ["Node.js", "Social Graph APIs", "Sentiment Telemetry", "Campaign Automation"],
    github: "https://github.com/AbishekPranavGV/SocmedX",
    demo: "https://abishekpranavgv.github.io/SocmedX/",
    highlight: false,
  },
  {
    title: "Nunes Local AI Marketing Starter",
    category: "ai",
    categoryLabel: "Edge AI & Offline LLMs",
    description: "Private local language model marketing stack for offline copy generation, social campaigns, and SME promotional collateral.",
    impact: "100% private offline inference • Zero API cloud costs • Turnkey 5-min setup",
    stack: ["Local LLM", "Quantized Models", "Python", "Prompt Engineering"],
    github: "https://github.com/AbishekPranavGV/NUNES-Local-AI-Marketing-Starter",
    demo: "https://abishekpranavgv.github.io/NUNES-Local-AI-Marketing-Starter/",
    highlight: false,
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
  },

  // --- OPERATIONS & SYSTEMS (8) ---
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
  },
  {
    title: "Autonomous System Temp & Disk Optimizer",
    category: "operations",
    categoryLabel: "Systems Administration",
    description: "High-reliability background maintenance utility automating 4-hour cycle temporary file purges, memory cache cleanup, and disk optimization.",
    impact: "15+ GB monthly disk space recovered • 0% CPU overhead • Safe-file exclusions",
    stack: ["Batch Scripting", "Windows Task Scheduler", "Process Locking", "Audit Logs"],
    github: "https://github.com/AbishekPranavGV/Autonomous-System-Temp-Cleaner",
    demo: "https://abishekpranavgv.github.io/Autonomous-System-Temp-Cleaner/",
    highlight: false,
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
    externalApp: "https://blank-app-template.streamlit.app/",
    highlight: false,
  },
  {
    title: "Abishek Pranav Advanced Portfolio",
    category: "operations",
    categoryLabel: "Modern Production Web App",
    description: "High-performance responsive personal portfolio featuring dynamic client routing, 24-repo CI/CD telemetry grid, and resume modal.",
    impact: "100% CI pass rate • Sub-second load time • Cross-environment deployment (Pages & Lovable)",
    stack: ["TypeScript", "React 18", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/AbishekPranavGV/abishekpranavportfolio",
    demo: "https://abishekpranavgv.github.io/abishekpranavportfolio/",
    highlight: false,
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = filter === "all" || project.category === filter;
      const matchesSearch =
        search === "" ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.stack.some((s) => s.toLowerCase().includes(search.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [filter, search]);

  return (
    <section className="px-6 py-24" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="section-divider mb-4" />
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-primary mb-2">
              Production Portfolio · 24 Repositories Live
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Featured Projects & Live Systems
            </h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base max-w-2xl">
              Every system below features an active GitHub Pages or cloud application deployment with 100% verified CI/CD workflows.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search 24 live projects or stack..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-border bg-card/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { id: "all", label: `All Projects (${projects.length})` },
            { id: "ai", label: `AI & Automation (${projects.filter(p => p.category === 'ai').length})` },
            { id: "data", label: `Data & Predictive Analytics (${projects.filter(p => p.category === 'data').length})` },
            { id: "operations", label: `Operations & Systems (${projects.filter(p => p.category === 'operations').length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as ProjectCategory)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === tab.id
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                  : "border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-border/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                  project.highlight
                    ? "border-primary/40 bg-card/90 shadow-lg shadow-primary/5 hover:border-primary"
                    : "border-border bg-card/60 hover:border-border/90 hover:bg-card/90"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                      {project.categoryLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Verified
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="p-3 rounded-xl bg-secondary/30 border border-border/50 mb-4 text-xs">
                    <span className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                      <Sparkles className="h-3.5 w-3.5 text-primary" />
                      Impact & Results:
                    </span>
                    <p className="text-muted-foreground text-[11px]">
                      {project.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-secondary/60 text-muted-foreground border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-lg border border-primary/30"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    {project.externalApp && (
                      <a
                        href={project.externalApp}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-500/10 hover:bg-emerald-500/20 px-2.5 py-1.5 rounded-lg border border-emerald-500/30"
                        title="External Production Cloud Host"
                      >
                        <span>Cloud App</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>

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
      </div>
    </section>
  );
}
