import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Search, ArrowUpRight } from "lucide-react";

type Project = { title:string; category:string; description:string; stack:string; github:string; demo?:string; stage:"featured"|"project"|"early" };
const rows: string[][] = [["NUNES Catalogue Studio","AI Automation","Product catalogue generation, specification extraction, AI-assisted descriptions and branded PDF workflows.","Python · Flask · PDF","MedX","https://nunes-catalogue-studio-live.vercel.app/"],["NUNES Social Media Command Center","Full-stack Automation","Social campaign management, channel integrations and scheduled publishing workflows.","Next.js · React · APIs","social-command-center","https://nunes-social-post-machine-mu.vercel.app/"],["Smart Price Master & Catalog Generator","Business Automation","Pricing-sheet integration and catalogue or quotation generation workflows.","Python · Data Processing","Smart-Price-Master-Catalog-Generator",""],["CRM Automation","Operations Engineering","Product master, lead management and connected business-process automation work.","Google Apps Script · CRM","Crm",""],["Multi-Account Gmail Inbox Hygiene Agent","Automation","Gmail multi-account inbox management and configurable cleanup workflows.","Python · Gmail API","Multi-Account-Gmail-Inbox-Hygiene-Agent",""],["Emotion-Based Movie Recommendation","Computer Vision","DeepFace-based emotion analysis paired with movie recommendations.","Python · DeepFace","Movie_recommendation_using_emotion",""],["E-commerce Recommendation Engine","Machine Learning","Recommendation and product-discovery research project.","ML · Recommendations","E-commerce-Recommendation-Engine",""],["Retail Sales Performance & Predictive Analytics","Business Intelligence","Retail reporting and forecasting analysis for business decisions.","Analytics · Forecasting","Retail-Sales-Performance-Predictive-Analytics",""],["Customer Churn Decision Analysis","Decision Analytics","Customer churn exploration and data-supported decision analysis.","Analytics · Customer Insights","Customer-Churn-Decision-Analysis",""],["Stock Price Prediction using ARIMA","Time Series","Financial time-series modeling and ARIMA forecasting.","Python · ARIMA","Stock-Price-Prediction-using-ARIMA",""],["COVID-19 Global Forecasting","Predictive Analytics","Global pandemic time-series and predictive analysis.","Forecasting · Data Science","COVID-19-Global-Forecasting-Predictive-Analysis",""],["Sentiment Analysis of News Headlines","Natural Language Processing","Text sentiment analysis applied to news headlines.","NLP · Sentiment","Sentimental-analysis-of-News-Headlines",""],["Climate Impact ESG Dashboard","Data Visualization","Exploration of climate, ESG and data visualization.","ESG · Dashboard","Climate-Impact-ESG-Dashboard",""],["Face Detection","Computer Vision","Face detection implementation and experimentation.","Computer Vision","Facedetection",""],["NICMS Sri Lanka Strategic Blueprint","Strategy & Research","Strategic blueprint and project planning repository.","Business Strategy","NICMS-SriLanka-Strategic-Blueprint",""],["Autonomous System Temp Cleaner","Utility","System temporary-file cleanup automation experiment.","Automation · Windows","Autonomous-System-Temp-Cleaner",""],["Drive File Index","Developer Utility","Google Drive file indexing and organization utility.","Google Drive","drive-file-index",""],["IndiaMART AI Content Catalog Generator","Business Automation","Repository containing NUNES social content automation implementation and integration documentation.","Next.js · APIs","IndiaMART-AI-Content-Catalog-Generator",""],["Smart Brochure-to-Catalog Converter","Project Concept","Proposed workflow for turning supplier brochures into structured catalogues.","PDF · Extraction","Smart-Brochure-to-Catalog-Converter",""],["SocmedX","Early-stage Repository","Social media tooling repository; additional implementation details are not yet documented.","Project Starter","SocmedX",""],["NUNES Local AI Marketing Starter","Early-stage Repository","Starter repository for local AI-based marketing workflows.","Project Starter","NUNES-Local-AI-Marketing-Starter",""],["Streamlit","Early-stage Repository","Streamlit experimentation repository.","Streamlit","Streamlit",""],["NICMS Sri Lanka Strategic Blueprint Project","Empty Repository","Repository currently has no published project files.","Not Yet Documented","NICMS-SriLanka-Strategic-Blueprint_Project",""]];
const projects: Project[] = rows.map(([title,category,description,stack,slug,demo],i)=>({
  title, category, description, stack,
  github: "https://github.com/AbishekPranavGV/"+slug,
  ...(demo?{demo}:{}),
  stage: i<6?"featured":i>=18?"early":"project"
}));
const filters = ["All projects","AI & Automation","Analytics & ML","Other projects"] as const;
export default function ProjectsSection(){
 const [query,setQuery]=useState("");
 const [filter,setFilter]=useState<string>("All projects");
 const filtered=useMemo(()=>projects.filter(p=>{
  const text=[p.title,p.category,p.description,p.stack].join(" ").toLowerCase();
  const q=text.includes(query.trim().toLowerCase());
  const ai=/AI|Automation|CRM|Catalogue|Catalog|Gmail|Social Media|Brochure|Drive|Cleaner/i.test(p.title+" "+p.category);
  const analytics=/Analytics|Forecast|ARIMA|Sentiment|Recommendation|Climate|COVID|Churn|Face Detection/i.test(p.title+" "+p.category);
  return q && (filter==="All projects" || (filter==="AI & Automation"&&ai) || (filter==="Analytics & ML"&&analytics) || (filter==="Other projects"&&!ai&&!analytics));
 }),[query,filter]);
 return <section id="projects" className="px-6 py-24 relative"><div className="max-w-6xl mx-auto">
  <div className="section-divider mb-5"/>
  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-9">
   <div><p className="text-primary uppercase tracking-[.22em] text-xs font-semibold mb-3">GitHub / Portfolio</p>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected work & project archive</h2>
    <p className="text-muted-foreground max-w-2xl leading-relaxed">Explore 23 project repositories across applied AI, engineering, analytics and experiments. Source links open the actual GitHub repository; demos are linked separately where available.</p>
   </div>
   <a href="https://github.com/AbishekPranavGV?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-2 shrink-0">View all on GitHub <ArrowUpRight className="w-4 h-4"/></a>
  </div>
  <div className="flex flex-col md:flex-row gap-4 mb-9">
   <label className="relative flex-1"><Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"/><span className="sr-only">Search projects</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects, technologies or topics" className="w-full bg-card text-foreground border border-border rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50"/></label>
   <div className="flex flex-wrap gap-2">{filters.map(f=><button key={f} type="button" onClick={()=>setFilter(f)} aria-pressed={filter===f} className={`text-xs font-semibold px-3 py-2 rounded-lg border transition-colors ${filter===f?"bg-primary text-primary-foreground border-primary":"bg-card text-muted-foreground border-border hover:text-foreground"}`}>{f}</button>)}</div>
  </div>
  <p className="text-sm text-muted-foreground mb-5" aria-live="polite">{filtered.length} project{filtered.length===1?"":"s"} shown</p>
  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
   {filtered.map((p,i)=><motion.article key={p.github} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.35,delay:Math.min(i,5)*.035}} className="group rounded-2xl border border-border bg-card/75 hover:border-primary/50 hover:shadow-xl transition-all p-6 flex flex-col">
    <div className="flex justify-between gap-2 items-start mb-5"><p className="text-xs uppercase tracking-wider text-primary font-semibold">{p.category}</p>{p.stage==="featured"?<span className="text-[11px] px-2 py-1 rounded-full border border-primary/40 text-primary">Selected</span>:p.stage==="early"?<span className="text-[11px] px-2 py-1 rounded-full border border-border text-muted-foreground">Early stage</span>:null}</div>
    <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{p.description}</p>
    <p className="text-xs text-foreground/70 mb-5 border-t border-border pt-4">{p.stack}</p>
    <div className="flex items-center flex-wrap gap-4">
     <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-primary"><Github className="w-4 h-4"/> View code <ExternalLink className="w-3 h-3"/></a>
     {p.demo&&<a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Open demo <ArrowUpRight className="w-4 h-4"/></a>}
    </div>
   </motion.article>)}
  </div>
  {filtered.length===0&&<div className="rounded-xl border border-border p-8 text-center text-muted-foreground">No matching projects. Try another keyword or category.</div>}
  <p className="text-xs text-muted-foreground mt-9">A repository link is not a claim that a project is deployed or production-ready. Early-stage items are identified separately.</p>
 </div></section>;
}
