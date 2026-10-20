import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github, Layers, Sparkles, Workflow, CheckCircle2, BarChart3, Database } from "lucide-react";

export default function FeaturedProjectSection() {
  return (
    <section className="px-6 py-24 bg-card/20 border-t border-border/50" id="featured-project">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-4" />
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-primary mb-2">
          Flagship Engineering Case Studies
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
          Architectural Deep-Dives
        </h2>

        {/* Case Study 1: MedX Catalogue Studio */}
        <div className="rounded-3xl border border-primary/25 bg-gradient-to-br from-card via-card to-primary/[0.04] p-8 md:p-12 mb-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-7/12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Applied AI & Document Intelligence</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
                NUNES MedX: Autonomous Industrial Catalogue Studio
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                Engineering a high-throughput multi-modal pipeline converting unformatted vendor brochures into validated, print-ready technical catalogs and live web storefronts in seconds.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                  <div className="text-xl font-bold text-primary">80%</div>
                  <div className="text-xs text-muted-foreground mt-1">Cycle Time Reduction in Catalog Drafting</div>
                </div>
                <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                  <div className="text-xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground mt-1">Deterministic Parameter Schema Extraction</div>
                </div>
                <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                  <div className="text-xl font-bold text-primary">Instant</div>
                  <div className="text-xs text-muted-foreground mt-1">Multi-Channel WhatsApp & Drive Dispatch</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://nunes-catalogue-studio-live.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="action-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs md:text-sm font-semibold shadow-md"
                >
                  <span>Launch MedX Live Studio</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/AbishekPranavGV/MedX"
                  target="_blank"
                  rel="noreferrer"
                  className="action-outline inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs md:text-sm font-semibold"
                >
                  <Github className="h-4 w-4" />
                  <span>View MedX Repo</span>
                </a>
              </div>
            </div>

            <div className="lg:w-5/12 w-full space-y-4">
              <div className="rounded-2xl border border-border/70 bg-secondary/40 p-5">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground mb-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <span>Multi-Format Ingestion</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Extracts tables, technical schematics, and dimension figures from messy PDFs, Word docs, and scanned supplier spec sheets.
                </p>
              </div>

              <div className="rounded-2xl border border-border/70 bg-secondary/40 p-5">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground mb-2">
                  <Cpu className="h-4 w-4 text-primary" />
                  <span>Gemini LLM Fact Enrichment</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Generates commercial descriptions, target applications, and SEO keywords strictly grounded in the extracted ground truth facts.
                </p>
              </div>

              <div className="rounded-2xl border border-border/70 bg-secondary/40 p-5">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground mb-2">
                  <Layers className="h-4 w-4 text-primary" />
                  <span>Automated PDF & QR Compilation</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Compiles standardized vector-graphic PDF catalogs with embedded dynamic QR codes linking to live product locations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2: Retail Sales Performance & Predictive Analytics */}
        <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card to-secondary/30 p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-7/12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                <BarChart3 className="h-3.5 w-3.5" />
                <span>Predictive Analytics & Operations</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
                Retail Sales Performance & Predictive Analytics
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                Ending the "inventory guessing game" by bridging warehouse logistics with real-world consumer demand using automated SQL data engineering and Facebook Prophet seasonality models.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                  <div className="text-xl font-bold text-emerald-400">85%</div>
                  <div className="text-xs text-muted-foreground mt-1">Forecast Accuracy Over Baseline</div>
                </div>
                <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                  <div className="text-xl font-bold text-emerald-400">10 hrs/wk</div>
                  <div className="text-xs text-muted-foreground mt-1">Manual Reporting Automated</div>
                </div>
                <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                  <div className="text-xl font-bold text-emerald-400">70%</div>
                  <div className="text-xs text-muted-foreground mt-1">Profit Driven by Top 20% SKUs</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://abishekpranavgv.github.io/Retail-Sales-Performance-Predictive-Analytics/"
                  target="_blank"
                  rel="noreferrer"
                  className="action-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs md:text-sm font-semibold shadow-md"
                >
                  <span>Explore Live Case Study</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/AbishekPranavGV/Retail-Sales-Performance-Predictive-Analytics"
                  target="_blank"
                  rel="noreferrer"
                  className="action-outline inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs md:text-sm font-semibold"
                >
                  <Github className="h-4 w-4" />
                  <span>View Repository</span>
                </a>
              </div>
            </div>

            <div className="lg:w-5/12 w-full space-y-4">
              <div className="rounded-2xl border border-border/70 bg-secondary/40 p-5">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground mb-2">
                  <Database className="h-4 w-4 text-emerald-400" />
                  <span>SQL Window & Rolling Pipelines</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Cleaned transactional telemetry using CTEs and window functions to establish 7-day and 30-day demand averages.
                </p>
              </div>

              <div className="rounded-2xl border border-border/70 bg-secondary/40 p-5">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground mb-2">
                  <Workflow className="h-4 w-4 text-emerald-400" />
                  <span>ARIMA & Prophet Decomposition</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Trained time-series models to handle promotional shocks, weekday-weekend variations, and seasonal demand swings.
                </p>
              </div>

              <div className="rounded-2xl border border-border/70 bg-secondary/40 p-5">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground mb-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Business Impact & Shelf Allocation</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Eliminated out-of-stock distortion while reducing excess capital tied up in slow-moving warehouse inventory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cpu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}
