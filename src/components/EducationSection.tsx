import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, ShieldCheck } from "lucide-react";

const education = [
  {
    degree: "MBA, Artificial Intelligence",
    status: "In Progress (2025–2027)",
    school: "JAIN University",
    period: "Aug 2025 – May 2027",
    location: "Bangalore, Karnataka",
    current: true,
    focus: "Executive Decision Support Systems, AI Strategy, Operations Analytics, Machine Learning & Intelligent Business Systems.",
  },
  {
    degree: "BBA, Data Science & AI",
    status: "Graduated (2022–2025)",
    school: "Woxsen University",
    period: "Sep 2022 – Jun 2025",
    location: "Hyderabad, Telangana",
    current: false,
    focus: "Relational Databases (SQL), Applied Data Analytics, Business Statistics, Financial Management & Python Data Engineering.",
  },
  {
    degree: "Chartered Accountancy (CA)",
    status: "Foundation & Inter Prep",
    school: "The Institute of Chartered Accountants of India (ICAI)",
    period: "Jan 2019 – Jan 2022",
    location: "Coimbatore, India",
    current: false,
    focus: "Financial Accounting, Cost Management, Corporate Laws, Taxation, Financial Reconciliation & Auditing Standards.",
  },
];

const certifications = [
  { title: "Agile Scrum Essentials", issuer: "Techcanvass", year: "2026", category: "Agile Delivery" },
  { title: "Agile Project Management Foundation", issuer: "HP LIFE", year: "Verified Credential", category: "Project Management" },
  { title: "Lean Six Sigma White Belt", issuer: "Management & Strategy Institute (MSI)", year: "Certified", category: "Process Improvement" },
  { title: "Six Sigma White Belt", issuer: "The Council for Six Sigma Certification (CSSC)", year: "Certified", category: "Quality Excellence" },
];

export default function EducationSection() {
  return (
    <section className="px-6 py-28 relative" id="education">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider mb-4" />
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-primary mb-2 font-mono">
            Academic Rigor & Credentials
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mb-14 leading-relaxed">
            Unique multidisciplinary foundation bridging formal financial accounting, university-level Data Science & AI, and ongoing executive AI business leadership.
          </p>
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
              className={`rounded-2xl border bg-card/85 p-6 transition-all shadow-md flex flex-col justify-between group hover:-translate-y-1 ${
                ed.current 
                  ? "border-primary/50 shadow-primary/10" 
                  : "border-border/80 hover:border-primary/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  {ed.current && (
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Active Degree
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{ed.degree}</h3>
                <span className="inline-block text-[11px] font-semibold text-primary/90 bg-primary/10 px-2.5 py-0.5 rounded-full mt-1.5 border border-primary/20 font-mono">
                  {ed.status}
                </span>
                <p className="text-foreground/90 text-sm font-semibold mt-2.5">{ed.school}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{ed.location}</p>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{ed.focus}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-primary font-mono">{ed.period}</span>
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
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center justify-between rounded-xl border border-border/80 bg-card/70 p-4 hover:border-primary/40 hover:bg-card transition-all shadow-sm group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 border border-primary/20 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer} • <span className="text-primary/80">{cert.category}</span></p>
                </div>
              </div>
              <span className="text-xs font-mono font-semibold text-primary shrink-0 px-2.5 py-1 rounded-md bg-secondary/60 border border-border/50">
                {cert.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
