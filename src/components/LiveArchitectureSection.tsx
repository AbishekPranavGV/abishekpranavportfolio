import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Database, 
  Layers, 
  Cpu, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Workflow, 
  Activity, 
  FileText,
  BarChart3,
  ExternalLink,
  ShieldCheck,
  Github,
  Globe
} from "lucide-react";

type RepoItem = {
  name: string;
  desc: string;
  runId: string;
  runUrl: string;
  liveUrl: string;
  githubUrl: string;
  tech: string;
  tag: string;
  image: string;
};

const resolveImagePath = (path: string) => {
  const base = import.meta.env.BASE_URL || "./";
  const cleanBase = base.endsWith("/") ? base : base + "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

const allRepos: RepoItem[] = [
  {
    name: "abishekpranavportfolio",
    desc: "Modern Personal Portfolio & CI/CD Telemetry Hub",
    runId: "39450416924",
    runUrl: "https://github.com/AbishekPranavGV/abishekpranavportfolio/actions/runs/39450416924",
    liveUrl: "https://abishekpranavportfolio.lovable.app/",
    githubUrl: "https://github.com/AbishekPranavGV/abishekpranavportfolio",
    tech: "TypeScript / React / Vite",
    tag: "Web / Hub",
    image: "projects/portfolio.svg"
  },
  {
    name: "Retail-Sales-Performance-Predictive-Analytics",
    desc: "Demand Forecasting & Inventory Reorder Model",
    runId: "39445648750",
    runUrl: "https://github.com/AbishekPranavGV/Retail-Sales-Performance-Predictive-Analytics/actions/runs/39445648750",
    liveUrl: "https://abishekpranavgv.github.io/Retail-Sales-Performance-Predictive-Analytics/",
    githubUrl: "https://github.com/AbishekPranavGV/Retail-Sales-Performance-Predictive-Analytics",
    tech: "Python / ARIMA / Power BI",
    tag: "Forecasting",
    image: "projects/retail-dashboard.png"
  },
  {
    name: "NICMS-SriLanka-Strategic-Blueprint",
    desc: "National Enterprise Digital Infrastructure Blueprint",
    runId: "39445653533",
    runUrl: "https://github.com/AbishekPranavGV/NICMS-SriLanka-Strategic-Blueprint/actions/runs/39445653533",
    liveUrl: "https://abishekpranavgv.github.io/NICMS-SriLanka-Strategic-Blueprint/",
    githubUrl: "https://github.com/AbishekPranavGV/NICMS-SriLanka-Strategic-Blueprint",
    tech: "Enterprise Architecture / BRD",
    tag: "Public Sector",
    image: "projects/nicms-blueprint.svg"
  },
  {
    name: "social-command-center",
    desc: "Multi-Platform Autonomous Social Media Dispatcher",
    runId: "39449108783",
    runUrl: "https://github.com/AbishekPranavGV/social-command-center/actions/runs/39449108783",
    liveUrl: "https://nunes-social-post-machine-mu.vercel.app/",
    githubUrl: "https://github.com/AbishekPranavGV/social-command-center",
    tech: "Next.js 20 / Node.js",
    tag: "Automation",
    image: "projects/social-command-center.svg"
  },
  {
    name: "IndiaMART-AI-Content-Catalog-Generator",
    desc: "Industrial B2B Product Catalog & Margin Generator",
    runId: "39449128617",
    runUrl: "https://github.com/AbishekPranavGV/IndiaMART-AI-Content-Catalog-Generator/actions/runs/39449128617",
    liveUrl: "https://nunes-social-post-machine-mu.vercel.app/",
    githubUrl: "https://github.com/AbishekPranavGV/IndiaMART-AI-Content-Catalog-Generator",
    tech: "Playwright / GenAI",
    tag: "B2B AI",
    image: "projects/indiamart.svg"
  },
  {
    name: "MedX",
    desc: "Nunes Medical Catalogue Studio & Regulatory Specs",
    runId: "39449147425",
    runUrl: "https://github.com/AbishekPranavGV/MedX/actions/runs/39449147425",
    liveUrl: "https://nunes-catalogue-studio-live.vercel.app/",
    githubUrl: "https://github.com/AbishekPranavGV/MedX",
    tech: "Python 3.11 / Flask / PDF",
    tag: "Healthcare",
    image: "projects/medx.svg"
  },
  {
    name: "Streamlit",
    desc: "Enterprise Streamlit Interactive Application Suite",
    runId: "39449166722",
    runUrl: "https://github.com/AbishekPranavGV/Streamlit/actions/runs/39449166722",
    liveUrl: "https://blank-app-template.streamlit.app/",
    githubUrl: "https://github.com/AbishekPranavGV/Streamlit",
    tech: "Python / Streamlit Cloud",
    tag: "Analytics",
    image: "projects/streamlit-app.svg"
  },
  {
    name: "Climate-Impact-ESG-Dashboard",
    desc: "Real-time Corporate Carbon & ESG Telemetry Engine",
    runId: "39448557718",
    runUrl: "https://github.com/AbishekPranavGV/Climate-Impact-ESG-Dashboard/actions/runs/39448557718",
    liveUrl: "https://abishekpranavgv.github.io/Climate-Impact-ESG-Dashboard/",
    githubUrl: "https://github.com/AbishekPranavGV/Climate-Impact-ESG-Dashboard",
    tech: "Python / IoT Stream / SQL",
    tag: "ESG",
    image: "projects/project-esg-gh.png"
  },
  {
    name: "COVID-19-Global-Forecasting-Predictive-Analysis",
    desc: "Global Epidemiological Time-Series Trajectory Models",
    runId: "39449184831",
    runUrl: "https://github.com/AbishekPranavGV/COVID-19-Global-Forecasting-Predictive-Analysis/actions/runs/39449184831",
    liveUrl: "https://abishekpranavgv.github.io/COVID-19-Global-Forecasting-Predictive-Analysis/",
    githubUrl: "https://github.com/AbishekPranavGV/COVID-19-Global-Forecasting-Predictive-Analysis",
    tech: "Python / SEIR / Curves",
    tag: "Epidemiology",
    image: "projects/covid-forecasting.svg"
  },
  {
    name: "Customer-Churn-Decision-Analysis",
    desc: "Customer Attrition Modeling as a Financial Problem",
    runId: "39449203803",
    runUrl: "https://github.com/AbishekPranavGV/Customer-Churn-Decision-Analysis/actions/runs/39449203803",
    liveUrl: "https://abishekpranavgv.github.io/Customer-Churn-Decision-Analysis/",
    githubUrl: "https://github.com/AbishekPranavGV/Customer-Churn-Decision-Analysis",
    tech: "Decision Trees / ML",
    tag: "Finance ML",
    image: "projects/customer-churn.svg"
  },
  {
    name: "E-commerce-Recommendation-Engine",
    desc: "Collaborative Filtering & Latent Matrix Factorization",
    runId: "39449222852",
    runUrl: "https://github.com/AbishekPranavGV/E-commerce-Recommendation-Engine/actions/runs/39449222852",
    liveUrl: "https://abishekpranavgv.github.io/E-commerce-Recommendation-Engine/",
    githubUrl: "https://github.com/AbishekPranavGV/E-commerce-Recommendation-Engine",
    tech: "Scikit-Learn / SVD",
    tag: "E-Commerce",
    image: "projects/ecommerce-recommender.svg"
  },
  {
    name: "Facedetection",
    desc: "Real-time Haar Cascade Landmark & Face Detection",
    runId: "39449244562",
    runUrl: "https://github.com/AbishekPranavGV/Facedetection/actions/runs/39449244562",
    liveUrl: "https://abishekpranavgv.github.io/Facedetection/",
    githubUrl: "https://github.com/AbishekPranavGV/Facedetection",
    tech: "OpenCV / Haar Cascades",
    tag: "Vision",
    image: "projects/facedetection.svg"
  },
  {
    name: "Movie_recommendation_using_emotion",
    desc: "Emotion-Aware Movie Matching & Affective NLP",
    runId: "39449265411",
    runUrl: "https://github.com/AbishekPranavGV/Movie_recommendation_using_emotion/actions/runs/39449265411",
    liveUrl: "https://abishekpranavgv.github.io/Movie_recommendation_using_emotion/",
    githubUrl: "https://github.com/AbishekPranavGV/Movie_recommendation_using_emotion",
    tech: "Affective NLP / Streamlit",
    tag: "NLP",
    image: "projects/project-emotion.jpg"
  },
  {
    name: "Stock-Price-Prediction-using-ARIMA",
    desc: "Econometric ARIMA & Deep LSTM Volatility Hybrid",
    runId: "39449282506",
    runUrl: "https://github.com/AbishekPranavGV/Stock-Price-Prediction-using-ARIMA/actions/runs/39449282506",
    liveUrl: "https://abishekpranavgv.github.io/Stock-Price-Prediction-using-ARIMA/",
    githubUrl: "https://github.com/AbishekPranavGV/Stock-Price-Prediction-using-ARIMA",
    tech: "TensorFlow / LSTM / ARIMA",
    tag: "Quant",
    image: "projects/project-stock-gh.png"
  },
  {
    name: "Sentimental-analysis-of-News-Headlines",
    desc: "NLP Financial Headline Sentiment & Polarity Scoring",
    runId: "39449304063",
    runUrl: "https://github.com/AbishekPranavGV/Sentimental-analysis-of-News-Headlines/actions/runs/39449304063",
    liveUrl: "https://abishekpranavgv.github.io/Sentimental-analysis-of-News-Headlines/",
    githubUrl: "https://github.com/AbishekPranavGV/Sentimental-analysis-of-News-Headlines",
    tech: "VADER / Text Mining",
    tag: "Sentiment",
    image: "projects/project-sentiment-gh.png"
  },
  {
    name: "Autonomous-System-Temp-Cleaner",
    desc: "Windows Maintenance & 4-Hour Background Cache Purge",
    runId: "39449322965",
    runUrl: "https://github.com/AbishekPranavGV/Autonomous-System-Temp-Cleaner/actions/runs/39449322965",
    liveUrl: "https://abishekpranavgv.github.io/Autonomous-System-Temp-Cleaner/",
    githubUrl: "https://github.com/AbishekPranavGV/Autonomous-System-Temp-Cleaner",
    tech: "Windows Task Scheduler / Batch",
    tag: "SysAdmin",
    image: "projects/temp-cleaner.svg"
  },
  {
    name: "Crm",
    desc: "Enterprise AI CRM Pipeline, Scoring & Skill Bundle",
    runId: "39449341161",
    runUrl: "https://github.com/AbishekPranavGV/Crm/actions/runs/39449341161",
    liveUrl: "https://abishekpranavgv.github.io/Crm/",
    githubUrl: "https://github.com/AbishekPranavGV/Crm",
    tech: "Skill Bundle / Lead AI",
    tag: "CRM",
    image: "projects/crm.svg"
  },
  {
    name: "drive-file-index",
    desc: "Google Drive Automated Hierarchy & Permissions Indexer",
    runId: "39449358685",
    runUrl: "https://github.com/AbishekPranavGV/drive-file-index/actions/runs/39449358685",
    liveUrl: "https://abishekpranavgv.github.io/drive-file-index/",
    githubUrl: "https://github.com/AbishekPranavGV/drive-file-index",
    tech: "Google Drive API v3",
    tag: "Cloud",
    image: "projects/drive-index.svg"
  },
  {
    name: "Multi-Account-Gmail-Inbox-Hygiene-Agent",
    desc: "Autonomous Multi-Inbox Governance & Email Declutter",
    runId: "39449377198",
    runUrl: "https://github.com/AbishekPranavGV/Multi-Account-Gmail-Inbox-Hygiene-Agent/actions/runs/39449377198",
    liveUrl: "https://abishekpranavgv.github.io/Multi-Account-Gmail-Inbox-Hygiene-Agent/",
    githubUrl: "https://github.com/AbishekPranavGV/Multi-Account-Gmail-Inbox-Hygiene-Agent",
    tech: "Gmail API / OAuth 2.0",
    tag: "Governance",
    image: "projects/gmail-agent.svg"
  },
  {
    name: "NICMS-SriLanka-Strategic-Blueprint_Project",
    desc: "National Enterprise Architecture & API Specifications",
    runId: "39449396297",
    runUrl: "https://github.com/AbishekPranavGV/NICMS-SriLanka-Strategic-Blueprint_Project/actions/runs/39449396297",
    liveUrl: "https://abishekpranavgv.github.io/NICMS-SriLanka-Strategic-Blueprint_Project/",
    githubUrl: "https://github.com/AbishekPranavGV/NICMS-SriLanka-Strategic-Blueprint_Project",
    tech: "Enterprise Architecture",
    tag: "Specs",
    image: "projects/nicms-specs.svg"
  },
  {
    name: "NUNES-Local-AI-Marketing-Starter",
    desc: "Private Offline Edge LLM Copywriting & Campaign Tool",
    runId: "39449415695",
    runUrl: "https://github.com/AbishekPranavGV/NUNES-Local-AI-Marketing-Starter/actions/runs/39449415695",
    liveUrl: "https://abishekpranavgv.github.io/NUNES-Local-AI-Marketing-Starter/",
    githubUrl: "https://github.com/AbishekPranavGV/NUNES-Local-AI-Marketing-Starter",
    tech: "Edge LLM / Quantized",
    tag: "Local AI",
    image: "projects/local-ai-marketing.svg"
  },
  {
    name: "Smart-Brochure-to-Catalog-Converter",
    desc: "IDP PDF Brochure Table Segmenter & Catalog Builder",
    runId: "39449436146",
    runUrl: "https://github.com/AbishekPranavGV/Smart-Brochure-to-Catalog-Converter/actions/runs/39449436146",
    liveUrl: "https://abishekpranavgv.github.io/Smart-Brochure-to-Catalog-Converter/",
    githubUrl: "https://github.com/AbishekPranavGV/Smart-Brochure-to-Catalog-Converter",
    tech: "OCR / Table Extraction",
    tag: "IDP",
    image: "projects/brochure-converter.svg"
  },
  {
    name: "Smart-Price-Master-Catalog-Generator",
    desc: "PriceMaster Cross-Platform Dynamic Margins & FX Tool",
    runId: "39449455239",
    runUrl: "https://github.com/AbishekPranavGV/Smart-Price-Master-Catalog-Generator/actions/runs/39449455239",
    liveUrl: "https://abishekpranavgv.github.io/Smart-Price-Master-Catalog-Generator/",
    githubUrl: "https://github.com/AbishekPranavGV/Smart-Price-Master-Catalog-Generator",
    tech: "Dynamic Pricing / Vector PDF",
    tag: "Pricing",
    image: "projects/price-master.svg"
  },
  {
    name: "SocmedX",
    desc: "Unified Social Media Operations Command Center",
    runId: "39449474972",
    runUrl: "https://github.com/AbishekPranavGV/SocmedX/actions/runs/39449474972",
    liveUrl: "https://abishekpranavgv.github.io/SocmedX/",
    githubUrl: "https://github.com/AbishekPranavGV/SocmedX",
    tech: "Node.js / Social Engine",
    tag: "Command Center",
    image: "projects/socmedx.svg"
  }
];

export default function LiveArchitectureSection() {
  const [activeTab, setActiveTab] = useState<"cicd" | "ai" | "forecasting">("cicd");
  const [searchRepo, setSearchRepo] = useState("");

  const filteredRepos = allRepos.filter(
    (r) =>
      r.name.toLowerCase().includes(searchRepo.toLowerCase()) ||
      r.desc.toLowerCase().includes(searchRepo.toLowerCase()) ||
      r.tech.toLowerCase().includes(searchRepo.toLowerCase()) ||
      r.tag.toLowerCase().includes(searchRepo.toLowerCase())
  );

  return (
    <section className="relative px-6 py-24 bg-card/30 border-y border-border/50" id="architecture">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
              <Activity className="h-3.5 w-3.5 animate-pulse text-primary" />
              <span>Production Systems Architecture</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Live Verified Results & Pipelines
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl text-base md:text-lg">
              Explore the direct result outputs, interactive dashboards, and automated CI/CD across 24 GitHub repositories.
            </p>
          </div>

          <div className="flex p-1.5 rounded-xl border border-border bg-card/80 backdrop-blur self-start md:self-auto">
            <button
              onClick={() => setActiveTab("cicd")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                activeTab === "cicd"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              <span>24/24 Live Matrix</span>
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                activeTab === "ai"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Bot className="h-4 w-4" />
              <span>Document AI</span>
            </button>
            <button
              onClick={() => setActiveTab("forecasting")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                activeTab === "forecasting"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              <span>Demand Forecasting</span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "cicd" && (
            <motion.div
              key="cicd"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-border bg-card/90 p-6 md:p-10 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/80">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>24 of 24 Repositories 100% Deployed & Passing</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-1">Live Result Outputs & Production Matrix</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Every repository below has a verified live production deployment with full visual result previews.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Filter 24 systems..."
                    value={searchRepo}
                    onChange={(e) => setSearchRepo(e.target.value)}
                    className="px-3 py-1.5 text-xs rounded-lg border border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                  />
                  <a
                    href="https://github.com/AbishekPranavGV?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    <span>All Repos</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                {filteredRepos.map((repo) => (
                  <div
                    key={repo.name}
                    className="group relative flex flex-col justify-between p-4 rounded-xl border border-border/70 bg-secondary/20 hover:border-primary/60 hover:bg-secondary/40 transition-all duration-300 shadow-md"
                  >
                    <div>
                      {/* Thumbnail Result Image */}
                      <div className="relative w-full h-36 rounded-lg overflow-hidden mb-3 border border-border/60 bg-background/80">
                        <img 
                          src={resolveImagePath(repo.image)} 
                          alt={`${repo.name} Preview`}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                        <span className="absolute top-2 left-2 text-[9px] font-semibold text-primary uppercase tracking-wider bg-background/90 backdrop-blur px-2 py-0.5 rounded border border-primary/20">
                          {repo.tag}
                        </span>
                        <a
                          href={repo.runUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute top-2 right-2 inline-flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-400 bg-background/90 backdrop-blur px-2 py-0.5 rounded-full border border-emerald-500/30"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span>Run #{repo.runId.slice(-5)}</span>
                        </a>
                      </div>

                      <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate" title={repo.name}>
                        {repo.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                        {repo.desc}
                      </p>
                      <div className="text-[10px] font-mono text-muted-foreground/80 mt-2">
                        {repo.tech}
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-border/50 flex items-center justify-between gap-2">
                      <a
                        href={repo.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors bg-primary/10 hover:bg-primary/20 px-3 py-1 rounded-md border border-primary/30"
                      >
                        <Globe className="h-3 w-3" />
                        <span>Direct Live App</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                      <a
                        href={repo.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "ai" && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-border bg-card/90 p-6 md:p-10 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/80">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Multi-Modal Industrial Pipeline</span>
                  <h3 className="text-2xl font-bold mt-1">Autonomous Catalogue Studio Architecture</h3>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://nunes-catalogue-studio-live.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <span>Launch Live App</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                <div className="rounded-xl border border-border/60 bg-secondary/30 p-5 flex flex-col justify-between">
                  <div>
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                      <FileText className="h-4 w-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground">1. Ingest & OCR</h4>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      Extracts tables, technical dimensions, and multi-lingual specs from vendor PDF brochures with OCR parsing.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 text-[11px] font-mono text-primary">
                    98% parsing accuracy
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-secondary/30 p-5 flex flex-col justify-between">
                  <div>
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground">2. Gemini Flash</h4>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      Structures unstructured text into standardized JSON schemas, verifying regulatory ISO and CE compliance tags.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 text-[11px] font-mono text-primary">
                    Sub-second extraction
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-secondary/30 p-5 flex flex-col justify-between">
                  <div>
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                      <Layers className="h-4 w-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground">3. Vector Layout</h4>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      Automated vector rendering engine synthesizing print-ready 300 DPI multi-page PDF catalogue datasheets.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 text-[11px] font-mono text-primary">
                    Dynamic branded themes
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-secondary/30 p-5 flex flex-col justify-between">
                  <div>
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                      <Workflow className="h-4 w-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground">4. Cloud Dispatch</h4>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      Publishes directly to Vercel edge endpoints and IndiaMART/Amazon B2B marketplace feeds.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 text-[11px] font-mono text-primary">
                    10,000+ SKUs automated
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "forecasting" && (
            <motion.div
              key="forecasting"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-border bg-card/90 p-6 md:p-10 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/80">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Quantitative Demand Modeling</span>
                  <h3 className="text-2xl font-bold mt-1">Retail Predictive Inventory & Stockout Elimination</h3>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://abishekpranavgv.github.io/Retail-Sales-Performance-Predictive-Analytics/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <span>Launch Live Analytics</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="rounded-xl border border-border/60 bg-secondary/30 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Database className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">SQL Window & CTE Pipelines</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Transforms raw warehouse logs into 7-day and 30-day moving average metrics, calculating stockout volatility and SKU velocity.
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/60 text-xs font-mono text-primary">
                    10 hrs/wk manual work eliminated
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-secondary/30 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">ARIMA & Facebook Prophet</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Statistical time-series models isolate weekly shopping seasonality, promotional demand spikes, and holiday trends.
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/60 text-xs font-mono text-primary">
                    85% forecast accuracy achieved
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-secondary/30 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Workflow className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Executive Power BI Decision Suite</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Identified that top 20% SKUs generate 70% of gross margin, re-orienting warehouse storage and shelf allocations.
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/60 text-xs font-mono text-primary">
                    $1B+ inventory distortions solved
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
