import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Search, ArrowUpRight, Sparkles, Filter, CheckCircle2 } from "lucide-react";

type ProjectCategory = "all" | "ai" | "data" | "automation";

type Project = {
  title: string;
  category: "ai" | "data" | "automation";
  categoryLabel: string;
  description: string;
  impact: string;
  stack: string[];
  github: string;
  demo?: string;
  highlight?: boolean;
};

const projects: Project[] = [
  {
    title: "Retail Sales Performance & Predictive Analytics",
    category: "data",
    categoryLabel: "Predictive Analytics",
    description: "Bridged inventory logistics and customer demand using automated SQL CTE pipelines, Facebook Prophet & ARIMA seasonality forecasting.",
    impact: "$1B+ inventory gap resolved • 85% forecast accuracy • 10 hrs/wk reporting automated",
    stack: ["SQL Window CTEs", "Python", "ARIMA", "Facebook Prophet", "Power BI", "GitHub Pages"],
    github: "https://github.com/AbishekPranavGV/Retail-Sales-Performance-Predictive-Analytics",
    demo: "https://abishekpranavgv.github.io/Retail-Sales-Performance-Predictive-Analytics/",
    highlight: true,
  },
  {
    title: "NUNES MedX AI Catalogue Studio",
    category: "ai",
    categoryLabel: "Applied AI",
    description: "Production multi-modal industrial catalogue synthesis engine that ingests raw vendor brochures, extracts specs with LLMs, and compiles branded PDFs.",
    impact: "Automated 80% of catalog drafting cycle • Deterministic schema validation",
    stack: ["Python", "Flask", "Gemini API", "PDF Compilation", "Tailwind CSS", "Vercel"],
    github: "https://github.com/AbishekPranavGV/MedX",
    demo: "https://nunes-catalogue-studio-live.vercel.app/",
    highlight: true,
  },
  {
    title: "NUNES Social Media Command Center",
    category: "automation",
    categoryLabel: "Full-Stack Automation",
    description: "Multi-channel social automation machine integrating Meta Instagram Graph APIs, scheduled publishing pipelines, and analytics telemetry.",
    impact: "Centralized marketing operations • Automated queue worker execution",
    stack: ["Next.js 16", "React 19", "Meta Graph API", "Tailwind CSS", "Vercel"],
    github: "https://github.com/AbishekPranavGV/social-command-center",
    demo: "https://nunes-social-post-machine-mu.vercel.app/",
    highlight: true,
  },
  {
    title: "NICMS Sri Lanka Case Management Blueprint",
    category: "automation",
    categoryLabel: "Strategic Architecture",
    description: "National Integrated Case Management System blueprint detailing judicial automation, digital intake, role-based workflows, and SRS specifications.",
    impact: "Architectural blueprint deployed to GitHub Pages and Netlify",
    stack: ["HTML5", "JavaScript", "SRS Architecture", "GitHub Pages", "Netlify"],
    github: "https://github.com/AbishekPranavGV/NICMS-SriLanka-Strategic-Blueprint",
    demo: "https://abishekpranavgv.github.io/NICMS-SriLanka-Strategic-Blueprint/",
    highlight: false,
  },
  {
    title: "Climate Impact & Real-time ESG Monitoring Dashboard",
    category: "data",
    categoryLabel: "Data Science & ESG",
    description: "Transitioning static CO2 estimates into a dynamic, live Environmental, Social, and Governance telemetry platform for corporate sustainability.",
    impact: "Real-time carbon estimation and interactive visual ESG telemetry",
    stack: ["Python", "Jupyter", "Pandas", "Matplotlib", "Streamlit", "SQL"],
    github: "https://github.com/AbishekPranavGV/Climate-Impact-ESG-Dashboard",
    highlight: false,
  },
  {
    title: "Stock Market Price Prediction (ARIMA & LSTM)",
    category: "data",
    categoryLabel: "Deep Learning & Time-Series",
    description: "Financial time-series forecasting combining statistical ARIMA modeling with deep Bidirectional LSTM neural networks for asset volatility tracking.",
    impact: "Pre-trained neural weights (.h5/.keras) with rolling prediction intervals",
    stack: ["TensorFlow", "Keras", "LSTM", "ARIMA", "Statsmodels", "NumPy"],
    github: "https://github.com/AbishekPranavGV/Stock-Price-Prediction-using-ARIMA",
    highlight: false,
  },
  {
    title: "Customer Churn Decision Analysis",
    category: "data",
    categoryLabel: "Business Analytics",
    description: "End-to-end churn prediction case study uncovering the root causes of customer attrition and formulating ROI-optimized retention policies.",
    impact: "Quantified customer lifecycle risk and retention opportunity matrix",
    stack: ["Python", "Logistic Regression", "EDA", "Decision Trees", "Seaborn"],
    github: "https://github.com/AbishekPranavGV/Customer-Churn-Decision-Analysis",
    highlight: false,
  },
  {
    title: "IndiaMART AI Content & Catalog Generator",
    category: "ai",
    categoryLabel: "Generative AI",
    description: "Autonomous catalog creator taking a single seed product name, crafting technical specs, generating visuals, and pre-filling marketplace templates.",
    impact: "Bypasses anti-bot barriers with local generation and automated fill",
    stack: ["JavaScript", "Node.js", "Generative AI", "PDF Processing", "Automation"],
    github: "https://github.com/AbishekPranavGV/IndiaMART-AI-Content-Catalog-Generator",
    demo: "https://nunes-social-post-machine-mu.vercel.app/",
    highlight: false,
  },
  {
    title: "Multi-Account Gmail Inbox Hygiene Agent",
    category: "automation",
    categoryLabel: "Autonomous Agents",
    description: "Autonomous email triage utility managing up to 10 Gmail accounts simultaneously, auto-archiving promotional clutter and sorting operational messages.",
    impact: "Maintains zero-inbox hygiene across multiple enterprise mailboxes",
    stack: ["Python", "Gmail API", "OAuth2", "Batch Automation"],
    github: "https://github.com/AbishekPranavGV/Multi-Account-Gmail-Inbox-Hygiene-Agent",
    highlight: false,
  },
  {
    title: "Autonomous System Temp Cleaner",
    category: "automation",
    categoryLabel: "System Maintenance",
    description: "Silent background maintenance utility that clears Windows temporary and cache directories on automated schedules to preserve maximum throughput.",
    impact: "Zero-footprint silent Windows task maintaining drive health",
    stack: ["Windows Batch", "Task Scheduler", "PowerShell", "Automation"],
    github: "https://github.com/AbishekPranavGV/Autonomous-System-Temp-Cleaner",
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
              Production Portfolio
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Featured Work & Live Deployments
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects or stack..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-border bg-card/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { id: "all", label: "All Projects (10)" },
            { id: "ai", label: "Applied AI & Agents" },
            { id: "data", label: "Predictive Analytics & ML" },
            { id: "automation", label: "Full-Stack Automation" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {project.categoryLabel}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        CI Passing
                      </span>
                      {project.demo && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                          Live Demo
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-3 text-xs font-medium text-foreground/80 bg-secondary/40 rounded-lg p-2.5 border border-border/50">
                    <strong className="text-primary font-semibold">Impact: </strong>
                    {project.impact}
                  </div>

                  {/* Tech stack tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border/70 bg-secondary/30 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>View Repository</span>
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>Open Live App</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-muted-foreground/60 italic">
                      CLI / Core Package
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
