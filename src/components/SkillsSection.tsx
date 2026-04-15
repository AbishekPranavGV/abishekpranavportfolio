import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Operations & Business Analytics",
    skills: ["Process Mapping", "Workflow Automation", "KPI Design", "Cycle Time Reduction", "Root Cause Analysis", "ABC/XYZ Classification"],
  },
  {
    title: "Data Analysis & Modeling",
    skills: ["Python (Pandas, NumPy, Scikit-learn)", "SQL / SQL Server", "Advanced Excel", "Power Query", "Pivot Tables", "ETL Pipelines"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["LangChain", "RAG Systems", "OpenAI API", "Vector Embeddings", "Pinecone", "DeepFace", "OpenCV", "Computer Vision"],
  },
  {
    title: "Predictive & Statistical",
    skills: ["Logistic Regression", "Churn Analysis", "Time Series (ARIMA/Prophet)", "Model Evaluation", "ADF Stationarity Testing", "NLP / NLTK"],
  },
  {
    title: "Visualization & Decision Support",
    skills: ["Tableau / Power BI", "Matplotlib", "Seaborn", "Plotly", "Streamlit", "Executive Dashboards"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "Jupyter Notebook", "CRM Systems", "SQLite", "BeautifulSoup", "yfinance", "API Integration"],
  },
];

const SkillsSection = () => {
  return (
    <section className="px-6 py-24" id="skills">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-primary text-sm font-semibold tracking-wide uppercase mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
