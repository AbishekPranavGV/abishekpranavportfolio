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
  ShieldCheck
} from "lucide-react";

const skillCategories = [
  {
    icon: Bot,
    title: "AI & Agentic Systems",
    skills: ["Gemini API", "OpenAI API", "LangChain", "RAG Systems", "Vector Embeddings", "Prompt Engineering", "OpenCV", "Multi-Modal Ingestion"],
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics & ML",
    skills: ["Time Series (ARIMA/Prophet)", "LSTM Deep Learning", "Logistic Regression", "Customer Churn Modeling", "Feature Engineering", "Scikit-Learn"],
  },
  {
    icon: Database,
    title: "Data Engineering & SQL",
    skills: ["SQL Window Functions", "Recursive CTEs", "Data Warehousing", "ETL Pipelines", "Pandas & NumPy", "Data Cleaning & Imputation"],
  },
  {
    icon: Layers,
    title: "Full-Stack & Cloud Architecture",
    skills: ["Python (Flask)", "Next.js / React 19", "TypeScript", "Tailwind CSS", "Vercel & Netlify", "REST APIs & Webhooks"],
  },
  {
    icon: Workflow,
    title: "Operations & Business Strategy",
    skills: ["Process Mapping", "Cycle Time Reduction", "KPI Design", "BRD & FRD Authoring", "Supply Chain Optimization", "Root Cause Analysis"],
  },
  {
    icon: Terminal,
    title: "Developer Tools & CI/CD",
    skills: ["GitHub Actions (CI/CD)", "Git & Version Control", "Power BI / DAX", "Windows Task Automation", "Batch Scripting", "Jupyter Notebooks"],
  },
];

export default function SkillsSection() {
  return (
    <section className="px-6 py-24 bg-card/20 border-t border-border/50" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider mb-4" />
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-primary mb-2">
            Technical Proficiency
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Skills & Capabilities
          </h2>
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
                className="rounded-2xl border border-border bg-card/70 p-6 hover:border-primary/40 hover:bg-card transition-all shadow-md group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-foreground text-base">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border/70 bg-secondary/40 px-2.5 py-1 text-xs font-medium text-muted-foreground group-hover:text-foreground/90 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
