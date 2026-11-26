import { motion } from "framer-motion";
import { 
  Bot, 
  BarChart3, 
  Database, 
  Layers, 
  Workflow, 
  Terminal,
  Cpu,
  LineChart,
  ShieldCheck,
  Briefcase,
  DollarSign
} from "lucide-react";

const skillCategories = [
  {
    icon: Briefcase,
    title: "A. Business Analysis & Process",
    tagline: "Bridging operational bottlenecks with structured requirement engineering",
    skills: ["Requirements Analysis", "Process Mapping", "Workflow Optimisation", "Business Process Improvement", "Operational Analysis", "Decision Support", "Stakeholder Communication", "BRD Documentation", "Cost-Benefit Evaluation"],
    color: "from-blue-500/10 to-indigo-500/10 border-blue-500/30 text-blue-400"
  },
  {
    icon: BarChart3,
    title: "B. Data Analytics & BI",
    tagline: "Statistical analysis, executive dashboards & predictive decision frameworks",
    skills: ["SQL", "Python (Pandas, NumPy)", "Power BI", "DAX", "Tableau", "Streamlit", "Advanced Excel", "Exploratory Data Analysis", "KPI Dashboards", "ARIMA & Prophet Forecasting"],
    color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/30 text-emerald-400"
  },
  {
    icon: Bot,
    title: "C. AI & Generative AI",
    tagline: "Applied LLM workflows, document parsing, RAG & automated agent pipelines",
    skills: ["Google Gemini API", "OpenAI API", "Prompt Engineering", "AI Document Extraction", "RAG Systems", "Vector Embeddings", "Structured JSON Outputs", "Agentic Workflows"],
    color: "from-cyan-500/10 to-blue-500/10 border-cyan-500/30 text-cyan-400"
  },
  {
    icon: Workflow,
    title: "D. Automation Engineering",
    tagline: "Hands-off headless bots, data triage & scheduled event pipelines",
    skills: ["Playwright", "REST API Integration", "Python Automation", "Google Workspace APIs", "GitHub Actions CI/CD", "Web Scraping", "OAuth2 Authentication", "Cron Automations"],
    color: "from-purple-500/10 to-pink-500/10 border-purple-500/30 text-purple-400"
  },
  {
    icon: Layers,
    title: "E. Full-Stack Development",
    tagline: "High-performance reactive user interfaces & cloud backend architectures",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "SQLite", "Flask", "Vercel Cloud", "GitHub CI/CD"],
    color: "from-amber-500/10 to-orange-500/10 border-amber-500/30 text-amber-400"
  },
  {
    icon: DollarSign,
    title: "F. Finance & Operations",
    tagline: "Practical financial rigor rooted in 3 years of ICAI Chartered Accountancy preparation",
    skills: ["Export Logistics", "Supply Chain Operations", "CRM Management", "Financial Reconciliation", "Invoicing Systems", "TDS Compliance", "Tally ERP", "General Ledgers", "Cost Accounting"],
    color: "from-rose-500/10 to-red-500/10 border-rose-500/30 text-rose-400"
  },
];

export default function SkillsSection() {
  return (
    <section className="px-6 py-28 bg-card/25 border-t border-border/50 relative" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider mb-4" />
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-primary mb-2 font-mono">
            Interactive Competency Matrix
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Skills & Technical Architecture
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mb-14 leading-relaxed">
            Every skill backed by verifiable production code, live cloud applications, or validated business operations achievements. No fake percentage bars.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl border border-border/80 bg-card/80 p-6 hover:border-primary/50 hover:bg-card transition-all shadow-md group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    {cat.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-border/70 bg-secondary/40 px-2.5 py-1 text-xs font-mono text-muted-foreground group-hover:text-foreground/90 group-hover:border-primary/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-border/40 text-[11px] font-mono text-primary flex items-center justify-between">
                  <span>Production Ready</span>
                  <span>100% Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
