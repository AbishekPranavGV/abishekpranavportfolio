import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal, Cpu } from "lucide-react";

const experiences = [
  {
    company: "Nunes Instrumentation",
    role: "Generative Executive AI / Forward Deployed Engineer",
    period: "Aug 2026 – Present",
    location: "Coimbatore, Tamil Nadu",
    current: true,
    tech: ["React", "Next.js", "Supabase", "Python", "Google Gemini API", "OpenAI API", "Playwright", "Vercel"],
    highlights: [
      "Developed AI-assisted catalogue workflows using LLM APIs for product research, specification extraction and generation of structured descriptions, key features and branded PDFs.",
      "Designed Playwright-based IndiaMART product management workflows covering listing research, form population and data validation.",
      "Built React, Next.js and Supabase application workflows for service requests, quotations, purchasing visibility and KPI dashboards.",
      "Integrated LLM and API-driven features into operational web interfaces; managed version control and deployment through GitHub and Vercel."
    ],
  },
  {
    company: "RXG Studios",
    role: "Operations & Business Analytics Lead",
    period: "May 2025 – Nov 2025",
    location: "Bengaluru, Karnataka (Hybrid)",
    current: false,
    tech: ["Advanced Excel", "Tally ERP", "Export Logistics", "CRM Pipelines", "TDS Compliance"],
    highlights: [
      "Built the operational foundation of an apparel-export startup, supporting its transition to active global transactions across CRM, international documentation and transaction workflows.",
      "Automated export documentation using Advanced Excel and export portals, reducing manual processing time by 30%.",
      "Optimised workflows between export portals and Tally for international invoicing and TDS compliance.",
      "Streamlined shipping workflows and Bills of Lading (BL), speeding up transaction cycles for overseas clients.",
      "Managed CRM pipelines to keep export operations running smoothly through high-growth periods."
    ],
  },
  {
    company: "Woxsen University – Centre of Skill Development",
    role: "Intern & Event Coordinator",
    period: "Jan 2023 – Feb 2025",
    location: "Hyderabad, Telangana",
    current: false,
    tech: ["Operational Coordination", "Stakeholder Management", "Executive Communication"],
    highlights: [
      "Managed back-end operations for flagship university events (Campus Quest, Capital Quest) and led marketing for the Murder Mystery event, increasing student participation by 10%.",
      "Coordinated communication between university executives, high-profile guests and student teams for the prestigious Dinner with CEO event."
    ],
  },
  {
    company: "Greenwich Meridian Logistics India Pvt Ltd",
    role: "Business Development Intern",
    period: "May 2024 – Aug 2024",
    location: "Remote",
    current: false,
    tech: ["Freight Forwarding", "Bills of Lading", "Export Documentation", "Market Research"],
    highlights: [
      "Researched freight forwarding and logistics markets to support business development.",
      "Streamlined documentation (Bills of Lading, invoices, quotations) for import/export workflows, improving turnaround time by 30%.",
      "Analysed prospective client pipelines and market opportunities using CRM records."
    ],
  },
  {
    company: "Smyrna Fellowship Trust",
    role: "HR & Operations Intern",
    period: "Jun 2023 – Aug 2023",
    location: "Ooty, Tamil Nadu (Remote)",
    current: false,
    tech: ["Recruitment Pipelines", "Process Automation", "Candidate Triage"],
    highlights: [
      "Restructured a manual resume screening process into a structured pipeline, reducing screening time by 50%.",
      "Accelerated recruitment speed by 2.5x and increased the qualified candidate pool by 5%."
    ],
  },
  {
    company: "Foundry Patterns",
    role: "Assistant Accountant",
    period: "Jan 2022 – Jul 2022",
    location: "Coimbatore, Tamil Nadu (Remote)",
    current: false,
    tech: ["Financial Accounting", "General Ledgers", "Bank Reconciliation", "Excel"],
    highlights: [
      "Maintained day-to-day accounting ledgers, transaction logs and invoice tracking in Excel.",
      "Performed account reconciliation to maintain financial record integrity and regulatory compliance."
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="px-6 py-28 relative" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider mb-4" />
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-primary mb-2 font-mono">
            Proven Track Record
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mb-14 leading-relaxed">
            Demonstrated career trajectory combining business process analysis, operational leadership, and production-grade AI system implementation across diverse enterprise settings.
          </p>
        </motion.div>

        <div className="relative pl-6 md:pl-8 border-l-2 border-border/80 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="relative group"
            >
              {/* Timeline node */}
              <div 
                className={`absolute -left-[31px] md:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 transition-all ${
                  exp.current 
                    ? "border-primary bg-primary shadow-lg shadow-primary/50 animate-pulse" 
                    : "border-border bg-background group-hover:border-primary group-hover:bg-primary/20"
                }`} 
              />

              <div className="rounded-2xl border border-border/80 bg-card/80 p-6 md:p-8 hover:border-primary/50 hover:bg-card transition-all shadow-md group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border w-fit ${
                    exp.current 
                      ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/30 font-bold" 
                      : "text-primary bg-primary/10 border-primary/20"
                  }`}>
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground mb-4">
                  <span className="font-bold text-foreground">{exp.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-primary" />
                    {exp.location}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {exp.highlights.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="pt-3 border-t border-border/50 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-muted-foreground/80 mr-1 flex items-center gap-1">
                    <Cpu className="h-3 w-3 text-primary" /> Tech:
                  </span>
                  {exp.tech.map((t) => (
                    <span 
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary/50 border border-border/60 text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
