import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "MBA, Artificial Intelligence",
    status: "In Progress",
    school: "JAIN University",
    period: "Aug 2025 – May 2027",
    location: "Bangalore, Karnataka",
    focus: "Executive Decision Support Systems, AI Strategy, Operations Analytics, Machine Learning.",
  },
  {
    degree: "BBA, Data Science & AI",
    status: "Graduated",
    school: "Woxsen University",
    period: "Sep 2022 – Jun 2025",
    location: "Hyderabad, Telangana",
    focus: "Relational Databases (SQL), Applied Data Analytics, Business Statistics, Financial Management.",
  },
  {
    degree: "Chartered Accountancy (CA)",
    status: "Foundation & Intermediate Preparation",
    school: "The Institute of Chartered Accountants of India (ICAI)",
    period: "Jan 2019 – Jan 2022",
    location: "India",
    focus: "Financial Accounting, Cost Management, Corporate Laws, Taxation, Financial Reconciliation.",
  },
];

const certifications = [
  { title: "Agile Scrum Essentials", issuer: "Techcanvass", year: "2026" },
  { title: "Agile Project Management Foundation", issuer: "HP LIFE", year: "Credential" },
  { title: "Lean Six Sigma White Belt", issuer: "Management & Strategy Institute (MSI)", year: "Certified" },
  { title: "Six Sigma White Belt", issuer: "The Council for Six Sigma Certification (CSSC)", year: "Certified" },
];

export default function EducationSection() {
  return (
    <section className="px-6 py-24" id="education">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider mb-4" />
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-primary mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Education & Certifications
          </h2>
        </motion.div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card/80 p-6 hover:border-primary/40 transition-all shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{ed.degree}</h3>
                <span className="inline-block text-[10px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full mt-1.5 border border-primary/20">
                  {ed.status}
                </span>
                <p className="text-muted-foreground text-sm font-medium mt-2">{ed.school}</p>
                <p className="text-xs text-muted-foreground/80 mt-0.5">{ed.location}</p>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{ed.focus}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-border/60">
                <span className="text-xs font-semibold text-primary">{ed.period}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <span>Professional & Agile Certifications</span>
          </h3>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center justify-between rounded-xl border border-border/80 bg-card/60 p-4 hover:border-primary/40 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-primary shrink-0">{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
