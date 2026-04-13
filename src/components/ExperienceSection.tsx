import { motion } from "framer-motion";

const experiences = [
  {
    company: "RXG Studios",
    role: "Head of Operations",
    period: "May 2025 – Nov 2025",
    bullets: [
      "Designed pre-execution export operations infrastructure for an early-stage apparel venture.",
      "Engineered digital documentation systems reducing internal processing time by 30%.",
      "Standardized Bill of Lading, Invoice, and Quotation workflows to eliminate bottlenecks.",
      "Built reconciliation logic ensuring 100% documentation accuracy and compliance readiness.",
    ],
  },
  {
    company: "Greenwich Meridian Logistics",
    role: "Business Development Intern",
    period: "May 2024 – Jul 2024",
    bullets: [
      "Accelerated export/import documentation cycles by 30% through structured coordination.",
      "Managed CRM pipelines and analyzed sales data to identify business opportunities.",
      "Supported international trade compliance workflows and tracked high-priority communications.",
    ],
  },
  {
    company: "Smyrna Fellowship Trust",
    role: "HR & Operations Intern",
    period: "Jun 2023 – Jul 2023",
    bullets: [
      "Applied structured data processing to resume screening, increasing recruitment velocity by 2.5×.",
      "Maintained 100% data integrity across HR systems during onboarding cycles.",
    ],
  },
];

const ExperienceSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-primary" />
              <p className="text-primary text-sm font-medium mb-1">{exp.period}</p>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-muted-foreground mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary mt-1 shrink-0">›</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
