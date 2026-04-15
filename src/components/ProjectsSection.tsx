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
import projectRagBot from "@/assets/project-rag-bot.jpg";
import projectRetail from "@/assets/project-retail-gh.png";
import projectEmotion from "@/assets/project-emotion.jpg";
import projectStock from "@/assets/project-stock-gh.png";
import projectSentiment from "@/assets/project-sentiment-gh.png";
import projectEsg from "@/assets/project-esg-gh.png";

const projects = [
  {
    icon: Bot,
    title: "Enterprise Knowledge RAG Bot",
    description: "Architected a Retrieval-Augmented Generation (RAG) system grounded in custom datasets to virtually eliminate AI hallucinations. Features a high-performance retrieval pipeline using Vector Embeddings for real-time context injection.",
    tags: ["LangChain", "OpenAI", "Pinecone", "Vector DB", "RAG"],
    github: "https://abishekpranavportfolio.lovable.app/",
    image: projectRagBot,
  },
  {
    icon: BarChart3,
    title: "Retail Performance & Predictive Analytics",
    description: "Built an end-to-end data pipeline in SQL Server for 500K+ records. Developed ARIMA & Prophet models with 85% accuracy and interactive Power BI dashboards for ABC/XYZ inventory optimization.",
    tags: ["SQL Server", "Power BI", "Time-Series", "Prophet"],
    github: "https://github.com/AbishekPranavGV/Retail-Sales-Performance-Predictive-Analytics",
    image: projectRetail,
  },
  {
    icon: ScanFace,
    title: "Emotion-Based Recommendation Engine",
    description: "Developed an innovative engine using DeepFace and OpenCV to detect user emotional states via live video feed, mapping emotional metadata to personalized content streams to boost engagement.",
    tags: ["DeepFace", "OpenCV", "Computer Vision", "Python"],
    github: "https://github.com/AbishekPranavGV/Emotion-Recommendation",
    image: projectEmotion,
  },
  {
    icon: TrendingUp,
    title: "Financial Time Series Forecasting",
    description: "ARIMA-based forecasting engine predicting closing prices for volatile equity assets like RELIANCE.NS. Includes automated API data extraction and rigorous ADF stationarity testing.",
    tags: ["ARIMA", "Statsmodels", "yfinance", "Matplotlib"],
    github: "https://github.com/AbishekPranavGV/Stock-Price-Prediction-using-ARIMA",
    image: projectStock,
  },
  {
    icon: Newspaper,
    title: "Sentiment Analysis of News Headlines",
    description: "NLP pipeline quantifying market sentiment for Tier-1 tech stocks using NLTK VADER, scraping real-time financial news to identify thematic patterns and trading signals.",
    tags: ["NLP", "NLTK", "BeautifulSoup", "Scikit-learn"],
    github: "https://github.com/AbishekPranavGV/Sentimental-analysis-of-News-Headlines",
    image: projectSentiment,
  },
  {
    icon: Leaf,
    title: "Climate Impact ESG Dashboard",
    description: "Live Environmental, Social & Governance monitoring system with real-time weather/air quality API integration and interactive Plotly analytics for risk trend visualization.",
    tags: ["Streamlit", "Plotly", "SQLite", "API Integration"],
    github: "https://github.com/AbishekPranavGV/Climate-Impact-ESG-Dashboard",
    image: projectEsg,
  },
];

const ProjectsSection = () => {
  return (
    <section className="px-6 py-24" id="projects">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Technical Projects</h2>
        </motion.div>

        <div className="grid gap-8">
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
              className={`group transition-all block cursor-pointer border rounded-xl overflow-hidden shadow-sm ${
                i === 0 
                  ? "border-primary/40 bg-primary/[0.03] shadow-md ring-1 ring-primary/20" 
                  : "border-border/50 hover:border-primary/40 hover:bg-secondary/10"
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-secondary/20">
                <img
                  src={proj.image}
                  alt={`${proj.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={512}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                {i === 0 && (
                  <span className="absolute top-4 left-4 text-[10px] bg-primary text-primary-foreground px-2.5 py-1 rounded-full uppercase tracking-widest font-black shadow-sm">
                    Featured
                  </span>
                )}
                <ExternalLink className="absolute top-4 right-4 w-4 h-4 text-foreground/60 opacity-0 group-hover:opacity-100 transition-all" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                    i === 0 ? "bg-primary/20" : "bg-primary/10 group-hover:bg-primary/20"
                  }`}>
                    <proj.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">{proj.title}</h3>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
