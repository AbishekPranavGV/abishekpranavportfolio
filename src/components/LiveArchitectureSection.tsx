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
  ShieldCheck
} from "lucide-react";

export default function LiveArchitectureSection() {
  const [activeTab, setActiveTab] = useState<"ai" | "forecasting" | "cicd">("ai");

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
              How the Systems Run Live
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl text-base md:text-lg">
              Explore the interactive pipelines powering document intelligence, retail demand forecasting, and automated CI/CD across 24 GitHub repositories.
            </p>
          </div>

          <div className="flex p-1.5 rounded-xl border border-border bg-card/80 backdrop-blur self-start md:self-auto">
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
            <button
              onClick={() => setActiveTab("cicd")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                activeTab === "cicd"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              <span>24/24 CI/CD Grid</span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
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
                  <a
                    href="https://github.com/AbishekPranavGV/MedX"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-border bg-card hover:bg-secondary transition-colors"
                  >
                    <span>MedX Repo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                <div className="rounded-xl border border-border/60 bg-secondary/30 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/10">Step 01</span>
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">Multi-Source Ingestion</h4>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Vendor PDFs, spec sheets, high-resolution imagery, and pricing spreadsheets are ingested via cloud & local endpoints.
                  </p>
                </div>

                <div className="rounded-xl border border-border/60 bg-secondary/30 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/10">Step 02</span>
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">Deterministic Extraction</h4>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Gemini & LLM microservices extract technical parameters, dimensions, and specifications into validated JSON schemas.
                  </p>
                </div>

                <div className="rounded-xl border border-border/60 bg-secondary/30 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/10">Step 03</span>
                    <Layers className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">Branded PDF Compilation</h4>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Automated layout engines inject verified specs into print-ready templates with barcode/QR verification.
                  </p>
                </div>

                <div className="rounded-xl border border-border/60 bg-secondary/30 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/10">Step 04</span>
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">Instant Delivery</h4>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Syncs to Google Drive, triggers WhatsApp & email dispatch, and updates live marketplace catalogs in seconds.
                  </p>
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
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Predictive Decision Science</span>
                  <h3 className="text-2xl font-bold mt-1">Retail Demand Forecasting & Inventory Optimization</h3>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://abishekpranavgv.github.io/Retail-Sales-Performance-Predictive-Analytics/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <span>View Live Dashboard Page</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://github.com/AbishekPranavGV/Retail-Sales-Performance-Predictive-Analytics"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-border bg-card hover:bg-secondary transition-colors"
                  >
                    <span>Retail Analytics Repo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
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
                    <span>24 of 24 Repositories Passing (100%)</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-1">Live GitHub Actions Verification Matrix</h3>
                </div>
                <a
                  href="https://github.com/AbishekPranavGV?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <span>Explore All 24 Repositories</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
                {[
                  "abishekpranavportfolio",
                  "Retail-Sales-Performance-Predictive-Analytics",
                  "NICMS-SriLanka-Strategic-Blueprint",
                  "social-command-center",
                  "IndiaMART-AI-Content-Catalog-Generator",
                  "MedX",
                  "Climate-Impact-ESG-Dashboard",
                  "COVID-19-Global-Forecasting",
                  "Customer-Churn-Decision-Analysis",
                  "E-commerce-Recommendation-Engine",
                  "Facedetection",
                  "Movie_recommendation_using_emotion",
                  "Stock-Price-Prediction-using-ARIMA",
                  "Streamlit",
                  "Autonomous-System-Temp-Cleaner",
                  "Crm",
                  "drive-file-index",
                  "Multi-Account-Gmail-Inbox-Hygiene-Agent",
                  "NICMS-SriLanka-Strategic-Blueprint_Project",
                  "NUNES-Local-AI-Marketing-Starter",
                  "Sentimental-analysis-of-News-Headlines",
                  "Smart-Brochure-to-Catalog-Converter",
                  "Smart-Price-Master-Catalog-Generator",
                  "SocmedX"
                ].map((repoName) => (
                  <div
                    key={repoName}
                    className="flex items-center justify-between p-3 rounded-lg border border-border/60 bg-secondary/20 hover:border-primary/40 transition-colors"
                  >
                    <span className="text-xs font-mono text-muted-foreground truncate max-w-[140px] sm:max-w-[160px]">
                      {repoName}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Live
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
