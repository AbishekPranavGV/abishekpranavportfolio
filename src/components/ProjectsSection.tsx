import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Newspaper, Leaf, ShoppingCart, Activity, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: Leaf,
    title: "Climate Impact ESG Dashboard",
    description: "Live Environmental, Social & Governance monitoring system with real-time weather and air quality API integration, persistent SQLite data logging, and interactive Plotly analytics for risk trend visualization.",
    tags: ["Streamlit", "Pandas", "Plotly", "SQLite", "API Integration"],
    github: "https://github.com/AbishekPranavGV/Climate-Impact-ESG-Dashboard",
  },
  {
    icon: BarChart3,
    title: "Customer Churn Decision Analysis",
    description: "End-to-end analysis identifying customer attrition drivers with actionable retention strategies. Built classification models and a Streamlit dashboard for stakeholder monitoring.",
    tags: ["Python", "Logistic Regression", "Streamlit", "EDA"],
    github: "https://github.com/AbishekPranavGV/Customer-Churn-Decision-Analysis",
  },
  {
    icon: TrendingUp,
    title: "Financial Time Series Forecasting",
    description: "ARIMA-based forecasting engine predicting closing prices for volatile equity assets, enabling data-backed risk assessment with automated API data extraction.",
    tags: ["ARIMA", "Python", "API Integration", "Visualization"],
    github: "https://github.com/AbishekPranavGV/Stock-Price-Prediction-using-ARIMA",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Recommendation Engine",
    description: "Hybrid recommendation system combining SVD collaborative filtering with a Two-Tower neural retrieval model. Includes K-Means cold-start handling and real-time top-5 item serving.",
    tags: ["SVD", "TensorFlow", "K-Means", "scikit-learn"],
    github: "https://github.com/AbishekPranavGV/E-commerce-Recommendation-Engine",
  },
  {
    icon: Activity,
    title: "COVID-19 Global Forecasting",
    description: "Predictive analysis of confirmed cases and fatalities using ARIMA with stationarity checks (ADF test), ACF/PACF parameter tuning, and segmented country-level forecasting.",
    tags: ["ARIMA", "statsmodels", "Plotly", "Predictive Analytics"],
    github: "https://github.com/AbishekPranavGV/COVID-19-Global-Forecasting-Predictive-Analysis",
  },
  {
    icon: Newspaper,
    title: "Sentiment Analysis of News Headlines",
    description: "NLP pipeline quantifying market sentiment for Tier-1 tech stocks using NLTK VADER, with K-Means clustering to identify thematic patterns in financial news.",
    tags: ["NLP", "NLTK", "K-Means", "Sentiment Analysis"],
    github: "https://github.com/AbishekPranavGV/Sentimental-analysis-of-News-Headlines",
  },
];

const ProjectsSection = () => {
  return (
    <section className="px-6 py-24" id="projects">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((proj, i) => (
            <motion.a
              key={proj.title}
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 group hover:border-primary/40 transition-colors block cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <proj.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{proj.title}</h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{proj.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
