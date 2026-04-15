import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingUp, 
  Newspaper, 
  Leaf, 
  ExternalLink, 
  Bot, 
  ScanFace,
} from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Enterprise Knowledge RAG Bot",
    description: "Architected a Retrieval-Augmented Generation (RAG) system grounded in custom datasets to virtually eliminate AI hallucinations. Features a high-performance retrieval pipeline using Vector Embeddings for real-time context injection.",
    tags: ["LangChain", "OpenAI", "Pinecone", "Vector DB", "RAG"],
    github: "https://abishekpranavportfolio.lovable.app/",
  },
  {
    icon: BarChart3,
    title: "Retail Performance & Predictive Analytics",
    description: "Built an end-to-end data pipeline in SQL Server for 500K+ records. Developed ARIMA & Prophet models with 85% accuracy and interactive Power BI dashboards for ABC/XYZ inventory optimization.",
    tags: ["SQL Server", "Power BI", "Time-Series", "Prophet"],
    github: "https://github.com/AbishekPranavGV/Retail-Sales-Performance-Predictive-Analytics",
  },
  {
    icon: ScanFace,
    title: "Emotion-Based Recommendation Engine",
    description: "Developed an innovative engine using DeepFace and OpenCV to detect user emotional states via live video feed, mapping emotional metadata to personalized content streams to boost engagement.",
    tags: ["DeepFace", "OpenCV", "Computer Vision", "Python"],
    github: "https://github.com/AbishekPranavGV/Emotion-Recommendation",
  },
  {
    icon: TrendingUp,
    title: "Financial Time Series Forecasting",
    description: "ARIMA-based forecasting engine predicting closing prices for volatile equity assets like RELIANCE.NS. Includes automated API data extraction and rigorous ADF stationarity testing.",
    tags: ["ARIMA", "Statsmodels", "yfinance", "Matplotlib"],
    github: "https://github.com/AbishekPranavGV/Stock-Price-Prediction-using-ARIMA",
  },
  {
    icon: Newspaper,
    title: "Sentiment Analysis of News Headlines",
    description: "NLP pipeline quantifying market sentiment for Tier-1 tech stocks using NLTK VADER, scraping real-time financial news to identify thematic patterns and trading signals.",
    tags: ["NLP", "NLTK", "BeautifulSoup", "Scikit-learn"],
    github: "https://github.com/AbishekPranavGV/Sentimental-analysis-of-News-Headlines",
  },
  {
    icon: Leaf,
    title: "Climate Impact ESG Dashboard",
    description: "Live Environmental, Social & Governance monitoring system with real-time weather/air quality API integration and interactive Plotly analytics for risk trend visualization.",
    tags: ["Streamlit", "Plotly", "SQLite", "API Integration"],
    github: "https://github.com/AbishekPranavGV/Climate-Impact-ESG-Dashboard",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Technical Projects</h2>
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
              className={`glass-card p-6 group transition-all block cursor-pointer border rounded-xl shadow-sm ${
                i === 0 
                  ? "border-primary/40 bg-primary/[0.03] shadow-md ring-1 ring-primary/20" 
                  : "hover:border-primary/40 hover:bg-secondary/10"
              }`}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                  i === 0 ? "bg-primary/20 scale-110 shadow-inner" : "bg-primary/10 group-hover:bg-primary/20"
                }`}>
                  <proj.icon className={`w-6 h-6 text-primary ${i === 0 ? "animate-pulse" : ""}`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold tracking-tight">{proj.title}</h3>
                      {i === 0 && (
                        <span className="text-[10px] bg-primary text-primary-foreground px-2 py-0.5 rounded-full uppercase tracking-widest font-black shadow-sm">
                          Featured
                        </span>
                      )}
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {proj.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[11px] bg-secondary/80 text-secondary-foreground border border-border/50 px-3 py-1 rounded-md font-medium"
                      >
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
