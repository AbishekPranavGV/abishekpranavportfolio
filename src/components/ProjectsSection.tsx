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
  demo?: string;
  highlight?: boolean;
};

const projects: Project[] = [
  {
    title: "AI Catalogue Studio",
    category: "ai",
    categoryLabel: "Generative AI & LLMs",
    description: "Product research, structured technical specification extraction, LLM-assisted catalogue content, and automated branded PDF generation.",
    impact: "80% reduction in manual catalog drafting • High-precision deterministic schema extraction",
    stack: ["Python", "Flask", "Gemini API", "PDF Generation", "Vercel", "Tailwind CSS"],
    github: "https://github.com/AbishekPranavGV/MedX",
    demo: "https://nunes-catalogue-studio-live.vercel.app/",
    highlight: true,
  },
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
    title: "IndiaMART Product Automation",
    category: "ai",
    categoryLabel: "Process Automation",
    description: "Playwright browser automation for product listing data, form validation, and multi-account marketplace management workflows.",
    impact: "Bypasses anti-bot barriers with deterministic local AI seed population",
    stack: ["JavaScript", "Node.js", "Playwright", "Generative AI", "Vercel"],
    github: "https://github.com/AbishekPranavGV/IndiaMART-AI-Content-Catalog-Generator",
    demo: "https://nunes-social-post-machine-mu.vercel.app/",
    highlight: true,
  },
  {
    title: "NUNES Operations Intelligence Dashboard",
    category: "operations",
    categoryLabel: "Full-Stack BI & Operations",
    description: "React/TypeScript dashboard for branch KPIs, purchasing visibility, service request tracking, and automated reporting.",
    impact: "Real-time branch telemetry & cross-department operational visibility",
    stack: ["React 19", "Next.js 16", "Supabase", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/AbishekPranavGV/social-command-center",
    demo: "https://nunes-social-post-machine-mu.vercel.app/",
    highlight: true,
  },
  {
    title: "Customer Churn Decision Analysis",
    category: "data",
    categoryLabel: "Financial & Decision ML",
    description: "End-to-end framework treating customer churn as a financial decision problem, using an interpretable ML pipeline and an interactive dashboard.",
    impact: "Quantified customer attrition risk and financial retention decision matrix",
    stack: ["Python", "Streamlit", "Logistic Regression", "EDA", "Decision Trees", "Pandas"],
    github: "https://github.com/AbishekPranavGV/Customer-Churn-Decision-Analysis",
    highlight: false,
  },
  {
    title: "Financial Time-Series Forecasting Engine",
    category: "data",
    categoryLabel: "Deep Learning & Forecasting",
    description: "Python tool using ARIMA and SARIMA models combined with LSTM neural architectures to forecast asset price movements and analyse volatility.",
    impact: "Pre-trained deep neural weights (.h5/.keras) with rolling prediction confidence",
    stack: ["TensorFlow", "Keras", "ARIMA / SARIMA", "LSTM", "Statsmodels", "NumPy"],
    github: "https://github.com/AbishekPranavGV/Stock-Price-Prediction-using-ARIMA",
    highlight: false,
  },
  {
    title: "Climate Impact & ESG Dashboard",
    category: "data",
    categoryLabel: "Sustainability & BI",
    description: "Streamlit and Power BI dashboard tracking corporate carbon emissions, resource consumption, and sustainability metrics.",
    impact: "Real-time dynamic ESG telemetry replacing static annual CO2 spreadsheets",
    stack: ["Python", "Streamlit", "Power BI", "SQL", "Pandas", "Matplotlib"],
    github: "https://github.com/AbishekPranavGV/Climate-Impact-ESG-Dashboard",
    highlight: false,
  },
  {
    title: "Export Logistics Infrastructure Model",
    category: "operations",
    categoryLabel: "Operations & Logistics",
    description: "Dynamic financial and operational Excel models to optimise freight handling capacity, BL documentation, and shipping clearance timelines.",
    impact: "30% cycle time reduction in export documentation and customs turnaround",
    stack: ["Advanced Excel", "Tally Integration", "Process Mapping", "Export Logistics", "Financial Modeling"],
    github: "https://github.com/AbishekPranavGV/NICMS-SriLanka-Strategic-Blueprint",
    demo: "https://abishekpranavgv.github.io/NICMS-SriLanka-Strategic-Blueprint/",
    highlight: false,
  },
  {
    title: "Multi-Industry BI Dashboards",
    category: "operations",
    categoryLabel: "Executive Dashboards",
    description: "Power BI and Tableau dashboards with cross-filtering, drill-through DAX measures, and executive KPI summaries across finance and operations.",
    impact: "Unified KPI design and cycle time tracking for executive leadership",
    stack: ["Power BI", "DAX", "Tableau", "SQL Server", "ETL Pipelines", "Advanced Excel"],
    github: "https://github.com/AbishekPranavGV/Streamlit",
    demo: "https://blank-app-template.streamlit.app/",
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
              Featured Projects & Live Systems
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
            { id: "all", label: "All Projects (9)" },
            { id: "ai", label: "AI & Automation" },
            { id: "data", label: "Data & BI Analytics" },
            { id: "operations", label: "Operations & Logistics" },
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
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {project.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1.5">
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

                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed line-clamp-3">
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
                        className="rounded-md border border-border/70 bg-secondary/30 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
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
                    <Github className="h-3.5 w-3.5" />
                    <span>Repo</span>
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-muted-foreground/60 italic">
                      Internal / Model
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
