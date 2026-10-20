import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

const education = [
  {
    degree: "MBA in Artificial Intelligence",
    school: "JAIN University (Online)",
    period: "Expected June 2027",
    location: "Coimbatore, India",
    focus: "Strategic AI implementation, enterprise automation, and machine intelligence business cases.",
  },
  {
    degree: "BBA in Data Science & AI",
    school: "Woxsen University",
    period: "June 2022 – June 2025",
    location: "Hyderabad, India",
    cgpa: "CGPA: 7.5",
    focus: "Core predictive analytics, mathematical foundations, statistical modeling, and data engineering.",
  },
];

const certifications = [
  "Excel for Data Analysis – Coursera",
  "R for Business Analytics – Coursera",
  "Supply Chain Planning – Rutgers University",
  "Bloomberg Market Concepts (BMC)",
  "AWS Academy – Machine Learning Foundation",
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
            Education & Credentials
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
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
                <p className="text-muted-foreground text-sm font-medium mt-1">{ed.school}</p>
                <p className="text-xs text-muted-foreground/80 mt-0.5">{ed.location}</p>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{ed.focus}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-primary">{ed.period}</span>
                {ed.cgpa && (
                  <span className="text-xs font-mono font-medium text-muted-foreground bg-secondary/50 px-2.5 py-0.5 rounded-full border border-border/50">
                    {ed.cgpa}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-6">
            Industry Certifications
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-card/60 px-4 py-3 text-xs md:text-sm font-medium hover:border-primary/40 transition-colors"
            >
              <Award className="w-4 h-4 text-primary shrink-0" />
              <span>{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
