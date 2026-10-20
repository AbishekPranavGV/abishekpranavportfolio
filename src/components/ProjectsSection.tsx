import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, TrendingUp, BarChart3, BrainCircuit } from "lucide-react";

const projects = [
  { icon: FileText, title: "NUNES Catalogue Studio", category: "AI & Document Automation", description: "Technical catalogue workflows combining product specification extraction, AI-assisted drafting, and branded PDF generation.", tags: ["Python", "Flask", "Document Processing", "PDF"], github: "https://github.com/AbishekPranavGV/MedX", demo: "https://nunes-catalogue-studio-live.vercel.app/" },
  { icon: BrainCircuit, title: "AI Content & Catalogue Automation", category: "Business Automation", description: "Applied automation project for industrial product information and content workflows.", tags: ["Applied AI", "Product Content", "Automation"], github: "https://github.com/AbishekPranavGV/IndiaMART-AI-Content-Catalog-Generator" },
  { icon: BarChart3, title: "Retail Sales Performance & Predictive Analytics", category: "Business Intelligence", description: "Retail business-performance and predictive analytics project, connecting data analysis with operational decision making.", tags: ["Analytics", "Forecasting", "Retail"], github: "https://github.com/AbishekPranavGV/Retail-Sales-Performance-Predictive-Analytics" },
  { icon: BrainCircuit, title: "E-commerce Recommendation Engine", category: "Machine Learning", description: "Recommendation system project exploring personalized product discovery.", tags: ["Machine Learning", "Recommendation Systems"], github: "https://github.com/AbishekPranavGV/E-commerce-Recommendation-Engine" },
  { icon: TrendingUp, title: "Stock Price Prediction Using ARIMA", category: "Time Series", description: "Financial forecasting project using ARIMA-based time-series analysis.", tags: ["Python", "ARIMA", "Forecasting"], github: "https://github.com/AbishekPranavGV/Stock-Price-Prediction-using-ARIMA" },
  { icon: BarChart3, title: "Customer Churn Decision Analysis", category: "Data Analytics", description: "Analytical exploration of customer churn and business decision support.", tags: ["Customer Analytics", "Decision Support"], github: "https://github.com/AbishekPranavGV/Customer-Churn-Decision-Analysis" },
];

export default function ProjectsSection() {
  return <section className="px-6 py-24" id="projects">
    <div className="max-w-5xl mx-auto">
      <div className="section-divider mb-4" />
      <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">Selected Work</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Technical Projects</h2>
      <p className="text-muted-foreground mb-10 max-w-2xl">AI-powered business tools, automation, and analytics. Explore source code and available demonstrations.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => <motion.article key={proj.github} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="glass-card p-6 border border-border rounded-xl hover:border-primary/50 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10"><proj.icon className="w-6 h-6 text-primary" /></span>
            {i === 0 && <span className="rounded-full px-3 py-1 text-xs border border-primary/40 text-primary font-semibold">Featured</span>}
          </div>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">{proj.category}</p>
          <h3 className="font-bold text-xl mb-3">{proj.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm mb-5">{proj.description}</p>
          <div className="flex gap-2 flex-wrap mb-5">{proj.tags.map(t => <span key={t} className="text-xs rounded-md px-3 py-1 bg-secondary border border-border">{t}</span>)}</div>
          <div className="flex flex-wrap gap-5">
            <a href={proj.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"><Github className="w-4 h-4" />GitHub <ExternalLink className="w-3 h-3" /></a>
            {"demo" in proj && <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Live Demo <ExternalLink className="w-3 h-3" /></a>}
          </div>
        </motion.article>)}
      </div>
    </div>
  </section>;
}
