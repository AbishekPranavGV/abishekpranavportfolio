import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "Nunes Instrumentation",
    role: "Forward Deployed Engineer – Applied AI & Automation",
    period: "Aug 2026 – Present",
    location: "Kolkata / Remote",
    highlights: [
      "Engineered autonomous AI-assisted catalogue generation and industrial specification extraction pipelines.",
      "Translated staff operational feedback into production microservices, cutting manual document preparation time by 80%.",
      "Designed full-stack architectures across Python (Flask), Next.js, Gemini API, and automated PDF compilation workflows.",
      "Integrated automated cloud storage, WhatsApp business dispatch, and live product catalog synchronization."
    ],
  },
  {
    company: "RXG Studios",
    role: "Head of Operations",
    period: "May 2025 – Nov 2025",
    location: "Coimbatore, India",
    highlights: [
      "Designed and deployed pre-execution export operations infrastructure for an international apparel venture.",
      "Engineered digital documentation systems reducing internal processing and cycle time by 30%.",
      "Standardized Bill of Lading, Invoice, and Quotation verification pipelines to eliminate logistical bottlenecks.",
      "Built custom operational dashboards tracking supplier SLA fulfillment and inventory readiness."
    ],
  },
  {
    company: "Applied Data Science & Machine Learning Research",
    role: "Lead Researcher & Analytics Engineer",
    period: "2024 – 2025",
    location: "Hyderabad, India",
    highlights: [
      "Built time-series forecasting models using ARIMA and Facebook Prophet, achieving 85% prediction accuracy on retail demand.",
      "Trained hybrid ARIMA-LSTM deep learning architectures for high-volatility financial asset price forecasting.",
      "Conducted extensive exploratory data analysis, customer churn modeling, and feature engineering across enterprise datasets."
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="px-6 py-24" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider mb-4" />
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-primary mb-2">
            Career Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative pl-6 md:pl-8 border-l border-border/80 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />

              <div className="rounded-2xl border border-border bg-card/80 p-6 md:p-8 hover:border-primary/40 transition-all shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground/90">{exp.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {exp.highlights.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
