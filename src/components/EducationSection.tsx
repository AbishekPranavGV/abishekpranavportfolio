import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "MBA in Artificial Intelligence",
    school: "JAIN University (Online)",
    period: "Expected June 2027",
    location: "Coimbatore, India",
  },
  {
    degree: "BBA in Data Science & AI",
    school: "Woxsen University",
    period: "June 2022 – June 2025",
    location: "Hyderabad, India",
    cgpa: "CGPA: 7.5",
  },
];

const certifications = [
  "Excel for Data Analysis – Coursera",
  "R for Business Analytics – Coursera",
  "Supply Chain Planning – Rutgers University",
  "Bloomberg Market Concepts (BMC)",
  "AWS Academy – Machine Learning Foundation",
];

const EducationSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <GraduationCap className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-semibold text-lg">{ed.degree}</h3>
              <p className="text-muted-foreground text-sm">{ed.school}</p>
              <p className="text-primary text-sm mt-2">{ed.period}</p>
              {ed.cgpa && <p className="text-muted-foreground text-xs mt-1">{ed.cgpa}</p>}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Certifications</h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-2 glass-card px-4 py-2.5 text-sm"
            >
              <Award className="w-4 h-4 text-primary shrink-0" />
              {cert}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
