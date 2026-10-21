import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  X, 
  Download, 
  Copy, 
  Check, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  Code2,
  Globe
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  const atsResumeText = `ABISHEK PRANAV G V
Business Analyst | Data & AI Automation Specialist | Process Improvement Lead
Coimbatore, Tamil Nadu, India | +91 63835 00484 | Abishekpranav403@gmail.com
Portfolio: https://abishekpranavgv.github.io/abishekpranavportfolio/
Portfolio Mirror: https://abishekpranavportfolio.lovable.app/
LinkedIn: https://www.linkedin.com/in/abishek-pranav-g-v-/
GitHub: https://github.com/AbishekPranavGV

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Results-driven Business Analyst and AI Automation Specialist with a BBA in Data Science & AI, an MBA in Artificial Intelligence (in progress), and 3 years of rigorous Chartered Accountancy (ICAI) foundation. Proven track record of bridging financial governance, business operations, and enterprise data analytics to architect high-impact process improvements, automated ETL/BI pipelines, and LLM-assisted production workflows. Architected and deployed 24 verified production repositories with 100% CI/CD uptime, integrating SQL, Python, Power BI, Advanced Excel, React, Next.js, and REST APIs to reduce manual turnaround times by up to 50% and optimize multimillion-dollar operations.

================================================================================
CORE COMPETENCIES & TECHNICAL SKILLS
================================================================================
• Business Analysis & Operations: Requirements Analysis (BRD/FRD), Process Mapping & Value Stream Mapping (VSM), Workflow Optimization, Business Process Improvement (BPI), Gap Analysis, KPI Framework Design, Stakeholder Management, Agile Scrum Delivery.
• Data & Business Intelligence: SQL (Complex Queries, Joins, Window Functions), Python (Pandas, NumPy, Scikit-learn), Power BI (DAX, Data Modeling), Tableau, Streamlit, Advanced Excel (VBA, Power Query, Financial Models), Statistical Modeling, Exploratory Data Analysis (EDA).
• AI & Automation Engineering: LLM API Integration (OpenAI, Google Gemini API), Prompt Engineering, Retrieval-Augmented Generation (RAG), Intelligent Document Processing (IDP), Playwright Browser Automation, Webhook Orchestration, RESTful API Design.
• Web Development & Cloud: React 19, Next.js 15, TypeScript, Tailwind CSS, Supabase, PostgreSQL, GitHub Actions (CI/CD), Vercel Serverless, Linux/Bash.
• Financial Governance & Supply Chain: Export Logistics Documentation (Bills of Lading, Invoicing), TDS Compliance, Statutory Reconciliation, Cost Accounting, Financial Audit Readiness, Tally ERP, Enterprise CRM Management.
• Methodologies & Certifications: Agile Scrum Essentials (Techcanvass 2026), Lean Six Sigma White Belt (MSI), Six Sigma White Belt (CSSC), Agile Project Management (HP LIFE).

================================================================================
PROFESSIONAL EXPERIENCE
================================================================================
Nunes Instrumentation | Coimbatore, Tamil Nadu
Generative AI & Business Automation Specialist | Aug 2026 – Present
• Spearheaded enterprise AI catalog automation using Google Gemini API and Python, reducing technical specification extraction and branded PDF catalog assembly time by 95% across 5,000+ industrial SKUs.
• Engineered robust Playwright browser automation bots for IndiaMART product listing workflows, automating data validation, form entry, and captcha-resilient multi-account catalog syndication.
• Built full-stack operational web applications utilizing React, Next.js, TypeScript, and Supabase for real-time service requests, dynamic quote generation, and branch purchasing visibility dashboards.
• Implemented automated CI/CD deployment pipelines on GitHub Actions and Vercel, maintaining 100% build pass rates, sub-second API latency, and automated error reporting across 24 repositories.

RXG Studios | Bengaluru, Karnataka (Hybrid)
Operations & Business Analytics Lead | May 2025 – Nov 2025
• Architected foundational operational infrastructure for a high-growth apparel export enterprise, establishing unified CRM pipelines, international documentation rails, and cross-border invoicing workflows.
• Automated complex export shipping documentation (Bills of Lading, Commercial Invoices, Packing Lists) via Advanced Excel and government export portals, slashing manual processing time by 30%.
• Streamlined reconciliation pipelines between DGFT export portals and Tally ERP for cross-border invoicing and TDS regulatory compliance, achieving zero statutory reporting discrepancies.
• Optimized shipping milestone workflows and overseas freight handoffs, accelerating international transaction turnaround cycles by 25% for European and North American buyers.
• Managed CRM pipelines to keep export operations running smoothly through high-growth periods.

Woxsen University – Centre of Skill Development | Hyderabad, Telangana
Intern & Event Coordinator | Jan 2023 – Feb 2025
• Managed operational logistics, budget tracking, and vendor coordination for flagship university events (Campus Quest, Capital Quest), accommodating 1,000+ active participants.
• Led data-driven digital campaign strategies for university marketing initiatives, driving a 10% measurable increase in student engagement and attendance.
• Coordinated high-level executive communication pipelines between university leadership, C-suite guest speakers, and student delegate committees for the "Dinner with CEO" forum.

Greenwich Meridian Logistics India Pvt Ltd | Remote
Business Development Intern | May 2024 – Aug 2024
• Conducted comprehensive market research across Indian freight forwarding and multimodal logistics sectors to identify prospective B2B client acquisition channels.
• Streamlined customs documentation (Bills of Lading, shipping manifests, customs declarations), improving cross-departmental paperwork velocity by 30%.
• Analyzed prospective client pipelines and historical shipment volumes within CRM software to generate actionable conversion intelligence for senior sales directors.

Smyrna Fellowship Trust | Ooty, Tamil Nadu (Remote)
HR & Operations Intern | Jun 2023 – Aug 2023
• Re-engineered manual resume screening workflows into an automated scoring and filtering pipeline, reducing initial screening time by 50%.
• Accelerated talent acquisition cycle speed by 2.5x while expanding the qualified candidate pipeline by 5% through structured evaluation rubrics.

Foundry Patterns | Coimbatore, Tamil Nadu (Remote)
Assistant Accountant | Jan 2022 – Jul 2022
• Managed day-to-day general ledger reconciliations, accounts payable/receivable ledgers, and commercial invoice verification in Excel and Tally.
• Conducted comprehensive periodic bank and vendor account reconciliations, maintaining 100% financial ledger integrity and audit readiness.

================================================================================
KEY TECHNICAL PROJECTS & LIVE DEPLOYMENTS
================================================================================
Portfolio Hub & Live Production Infrastructure | React, Next.js, TypeScript, Vite, Vercel, GitHub CI/CD
Live App: https://abishekpranavgv.github.io/abishekpranavportfolio/ | GitHub: https://github.com/AbishekPranavGV/abishekpranavportfolio
• Engineered an executive portfolio ecosystem orchestrating 24 live micro-applications with automated GitHub Actions CI/CD workflows, real-time telemetry streaming, and native Vercel deployment configurations.

NUNES Medical Catalogue Studio (MedX) | Python, Flask, Gemini API, Vercel, ReportLab
Live App: https://nunes-catalogue-studio-live.vercel.app/ | GitHub: https://github.com/AbishekPranavGV/MedX
• Developed an enterprise healthcare and lab instrument cataloging studio automating technical specification extraction, multi-lingual translations, and ISO 13485-compliant PDF generation in under 400ms.

IndiaMART AI Content & Catalog Generator | Python, Gemini API, PIL, ReportLab, Vercel
Live App: https://abishekpranavgv.github.io/IndiaMART-AI-Content-Catalog-Generator/ | GitHub: https://github.com/AbishekPranavGV/IndiaMART-AI-Content-Catalog-Generator
• Built a B2B generative automation suite transforming raw product seed names into 5 distinct marketing angles, technical specification tables, top 20 high-ranking buyer search keywords, and master PDF catalogs.

Social Media Command Center (SocmedX) | Next.js, React, Node.js, Vercel Serverless
Live App: https://nunes-social-post-machine-mu.vercel.app/ | GitHub: https://github.com/AbishekPranavGV/social-command-center
• Architected a multi-platform social media dispatch and sentiment radar console scheduling, optimizing, and tracking campaign velocity across LinkedIn, X/Twitter, Meta, and Instagram.

Retail Sales Performance & Predictive Analytics | Python, SQL, Power BI, Time-Series
Live App: https://abishekpranavgv.github.io/Retail-Sales-Performance-Predictive-Analytics/ | GitHub: https://github.com/AbishekPranavGV/Retail-Sales-Performance-Predictive-Analytics
• Built end-to-end predictive demand forecasting pipeline analyzing 500K+ records with 85% accuracy; automated 10 hrs/week of reporting and isolated top 20% SKUs driving 70% profit via ABC/XYZ analysis.

Customer Churn Decision Framework | Python, Scikit-learn, XGBoost, SHAP, Streamlit
Live App: https://abishekpranavgv.github.io/Customer-Churn-Decision-Analysis/ | GitHub: https://github.com/AbishekPranavGV/Customer-Churn-Decision-Analysis
• Modeled customer churn as a financial decision problem with an 88.6% ROC-AUC classifier and SHAP attribution, identifying prescriptive discount strategies protecting an estimated $140K in annual recurring revenue.

Financial Time-Series Forecasting Engine | Python, ARIMA, SARIMA, LSTM, Statsmodels
Live App: https://abishekpranavgv.github.io/Stock-Price-Prediction-using-ARIMA/ | GitHub: https://github.com/AbishekPranavGV/Stock-Price-Prediction-using-ARIMA
• Deployed quantitative econometric hybrid combining classical ARIMA(2,1,2) with Deep LSTM neural networks for rolling horizon equity price prediction and volatility analysis.

Climate Impact & ESG Telemetry Dashboard | Python, Streamlit, Plotly, IoT Ingest
Live App: https://abishekpranavgv.github.io/Climate-Impact-ESG-Dashboard/ | GitHub: https://github.com/AbishekPranavGV/Climate-Impact-ESG-Dashboard
• Developed real-time corporate carbon accounting engine monitoring Scope 1-3 emissions against CSRD regulatory thresholds across 42 industrial IoT sensor nodes.

================================================================================
EDUCATION
================================================================================
MBA, Artificial Intelligence (in progress) | Aug 2025 – May 2027
JAIN University | Bangalore, Karnataka
Curriculum: Executive Decision Support Systems, AI Strategy, Operations Analytics, Machine Learning

BBA, Data Science & AI | Sep 2022 – Jun 2025
Woxsen University | Hyderabad, Telangana
Curriculum: Relational Databases (SQL), Applied Data Analytics, Business Statistics, Financial Management

Chartered Accountancy (CA) – Foundation & Intermediate Preparation | Jan 2019 – Jan 2022
The Institute of Chartered Accountants of India (ICAI)
Curriculum: Financial Accounting, Cost & Management Accounting, Corporate & Allied Laws, Direct & Indirect Taxation

================================================================================
CERTIFICATIONS
================================================================================
• Agile Scrum Essentials | Techcanvass (2026)
• Agile Project Management Foundation | HP LIFE
• Lean Six Sigma White Belt | Management & Strategy Institute (MSI)
• Six Sigma White Belt | The Council for Six Sigma Certification (CSSC)`;

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(atsResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border border-primary/30 bg-card shadow-2xl overflow-hidden z-10"
        >
          {/* Header Controls */}
          <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-border bg-secondary/30 gap-2">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <FileText className="h-4 w-4 text-primary" />
              <span>Abishek Pranav G V — ATS Verified Executive CV (Score: 98/100)</span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <a
                href={`${import.meta.env.BASE_URL}Abishek_Pranav_GV_ATS_Resume.txt`}
                download="Abishek_Pranav_GV_ATS_Resume.txt"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary/40 bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors"
                title="Download ATS Plain Text format (.txt)"
              >
                <Download className="h-3.5 w-3.5" />
                <span>ATS .txt</span>
              </a>

              <a
                href={`${import.meta.env.BASE_URL}Abishek_Pranav_GV_ATS_Resume.md`}
                download="Abishek_Pranav_GV_ATS_Resume.md"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-semibold hover:bg-secondary transition-colors"
                title="Download ATS Markdown format (.md)"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Markdown</span>
              </a>

              <button
                onClick={handleCopyMarkdown}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-semibold hover:bg-secondary transition-colors"
                title="Copy plain-text ATS CV to clipboard"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copied" : "Copy ATS"}</span>
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-semibold hover:bg-secondary transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="h-3.5 w-3.5 text-primary" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Printable CV Document Content */}
          <div className="p-6 md:p-10 overflow-y-auto space-y-8 text-foreground text-sm leading-relaxed" id="cv-print-area">
            {/* Header / Contact */}
            <div className="border-b border-border/80 pb-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
                  ABISHEK PRANAV G V
                </h1>
                <p className="text-base font-semibold text-primary mt-1">
                  Business Analyst | Data & AI Automation Specialist | Process Improvement Lead
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Coimbatore, Tamil Nadu, India</span>
                  <span>•</span>
                  <a href="tel:+916383500484" className="flex items-center gap-1 text-primary hover:underline"><Phone className="h-3 w-3" /> +91 63835 00484</a>
                  <span>•</span>
                  <a href="mailto:Abishekpranav403@gmail.com" className="flex items-center gap-1 text-primary hover:underline"><Mail className="h-3 w-3" /> Abishekpranav403@gmail.com</a>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 shrink-0 text-xs bg-secondary/30 p-3 rounded-xl border border-border/60">
                <a
                  href="https://abishekpranavgv.github.io/abishekpranavportfolio/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>Live Portfolio (Pages)</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://abishekpranavportfolio.lovable.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
                >
                  <Globe className="h-3.5 w-3.5 text-accent" />
                  <span>Portfolio Mirror (Lovable)</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abishek-pranav-g-v-/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-muted-foreground hover:text-foreground hover:underline"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://github.com/AbishekPranavGV"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-muted-foreground hover:text-foreground hover:underline"
                >
                  <span>GitHub Ecosystem (24 Repos)</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
                <Briefcase className="h-3.5 w-3.5" />
                <span>Professional Summary</span>
              </h2>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed bg-secondary/20 p-4 rounded-xl border border-border/50">
                Results-driven <strong>Business Analyst and AI Automation Specialist</strong> with a <strong>BBA in Data Science & AI</strong>, an <strong>MBA in Artificial Intelligence (in progress)</strong>, and 3 years of rigorous <strong>Chartered Accountancy (ICAI)</strong> foundation. Proven track record of bridging financial governance, business operations, and enterprise data analytics to architect high-impact process improvements, automated ETL/BI pipelines, and LLM-assisted production workflows. Architected and deployed <strong>24 verified production repositories</strong> with 100% CI/CD uptime, integrating SQL, Python, Power BI, Advanced Excel, React, Next.js, and REST APIs to reduce manual turnaround times by up to <strong>50%</strong> and optimize multimillion-dollar operations.
              </p>
            </div>

            {/* Core Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                <Layers className="h-3.5 w-3.5" />
                <span>Core Competencies & Technical Skills</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg border border-border/60 bg-secondary/20">
                  <span className="font-bold text-foreground">Business Analysis & Operations: </span>
                  <span className="text-muted-foreground">Requirements Analysis (BRD/FRD), Process Mapping & Value Stream Mapping (VSM), Workflow Optimization, Business Process Improvement (BPI), Gap Analysis, KPI Framework Design, Stakeholder Management, Agile Scrum Delivery.</span>
                </div>
                <div className="p-3 rounded-lg border border-border/60 bg-secondary/20">
                  <span className="font-bold text-foreground">Data & Business Intelligence: </span>
                  <span className="text-muted-foreground">SQL (Complex Queries, Joins, Window Functions), Python (Pandas, NumPy, Scikit-learn), Power BI (DAX, Data Modeling), Tableau, Streamlit, Advanced Excel (VBA, Power Query), Statistical Modeling.</span>
                </div>
                <div className="p-3 rounded-lg border border-border/60 bg-secondary/20">
                  <span className="font-bold text-foreground">AI & Automation Engineering: </span>
                  <span className="text-muted-foreground">LLM API Integration (OpenAI, Google Gemini API), Prompt Engineering, Retrieval-Augmented Generation (RAG), Intelligent Document Processing (IDP), Playwright Browser Automation, REST APIs.</span>
                </div>
                <div className="p-3 rounded-lg border border-border/60 bg-secondary/20">
                  <span className="font-bold text-foreground">Web Development & Cloud: </span>
                  <span className="text-muted-foreground">React 19, Next.js 15, TypeScript, Tailwind CSS, Supabase, PostgreSQL, GitHub Actions (CI/CD), Vercel Serverless, Linux/Bash.</span>
                </div>
                <div className="p-3 rounded-lg border border-border/60 bg-secondary/20">
                  <span className="font-bold text-foreground">Financial Governance & Logistics: </span>
                  <span className="text-muted-foreground">Export Documentation (Bills of Lading, Invoicing), TDS Compliance, Statutory Reconciliation, Cost Accounting, Financial Audit Readiness, Tally ERP, Enterprise CRM Management.</span>
                </div>
                <div className="p-3 rounded-lg border border-border/60 bg-secondary/20">
                  <span className="font-bold text-foreground">Methodologies & Certifications: </span>
                  <span className="text-muted-foreground">Agile Scrum Essentials (Techcanvass 2026), Lean Six Sigma White Belt (MSI), Six Sigma White Belt (CSSC), Agile Project Management (HP LIFE).</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                <Briefcase className="h-3.5 w-3.5" />
                <span>Professional Experience</span>
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-primary/40 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-foreground text-sm">Generative AI & Business Automation Specialist</span>
                    <span className="text-primary font-semibold">Aug 2026 – Present</span>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">Nunes Instrumentation | Coimbatore, Tamil Nadu</div>
                  <ul className="list-disc list-outside pl-4 text-xs text-muted-foreground space-y-1.5 mt-2">
                    <li>Spearheaded enterprise AI catalog automation using Google Gemini API and Python, reducing technical specification extraction and branded PDF catalog assembly time by <strong>95%</strong> across 5,000+ industrial SKUs.</li>
                    <li>Engineered robust Playwright browser automation bots for IndiaMART product listing workflows, automating data validation, form entry, and captcha-resilient multi-account catalog syndication.</li>
                    <li>Built full-stack operational web applications utilizing React, Next.js, TypeScript, and Supabase for real-time service requests, dynamic quote generation, and branch purchasing visibility dashboards.</li>
                    <li>Implemented automated CI/CD deployment pipelines on GitHub Actions and Vercel, maintaining 100% build pass rates, sub-second API latency, and automated error reporting across 24 repositories.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/40 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-foreground text-sm">Operations & Business Analytics Lead</span>
                    <span className="text-primary font-semibold">May 2025 – Nov 2025</span>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">RXG Studios | Bengaluru, Karnataka (Hybrid)</div>
                  <ul className="list-disc list-outside pl-4 text-xs text-muted-foreground space-y-1.5 mt-2">
                    <li>Architected foundational operational infrastructure for a high-growth apparel export enterprise, establishing unified CRM pipelines, international documentation rails, and cross-border invoicing workflows.</li>
                    <li>Automated complex export shipping documentation (Bills of Lading, Commercial Invoices, Packing Lists) via Advanced Excel and government export portals, slashing manual processing time by <strong>30%</strong>.</li>
                    <li>Streamlined reconciliation pipelines between DGFT export portals and Tally ERP for cross-border invoicing and TDS regulatory compliance, achieving <strong>zero statutory reporting discrepancies</strong>.</li>
                    <li>Optimized shipping milestone workflows and overseas freight handoffs, accelerating international transaction turnaround cycles by <strong>25%</strong> for European and North American buyers.</li>
                    <li>Managed CRM pipelines to keep export operations running smoothly through high-growth periods.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/40 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-foreground text-sm">Intern & Event Coordinator</span>
                    <span className="text-primary font-semibold">Jan 2023 – Feb 2025</span>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">Woxsen University – Centre of Skill Development | Hyderabad, Telangana</div>
                  <ul className="list-disc list-outside pl-4 text-xs text-muted-foreground space-y-1.5 mt-2">
                    <li>Managed operational logistics, budget tracking, and vendor coordination for flagship university events (Campus Quest, Capital Quest), accommodating <strong>1,000+</strong> active participants.</li>
                    <li>Led data-driven digital campaign strategies for university marketing initiatives, driving a <strong>10%</strong> measurable increase in student engagement and attendance.</li>
                    <li>Coordinated high-level executive communication pipelines between university leadership, C-suite guest speakers, and student delegate committees for the &quot;Dinner with CEO&quot; forum.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/40 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-foreground text-sm">Business Development Intern</span>
                    <span className="text-primary font-semibold">May 2024 – Aug 2024</span>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">Greenwich Meridian Logistics India Pvt Ltd | Remote</div>
                  <ul className="list-disc list-outside pl-4 text-xs text-muted-foreground space-y-1.5 mt-2">
                    <li>Conducted comprehensive market research across Indian freight forwarding and multimodal logistics sectors to identify prospective B2B client acquisition channels.</li>
                    <li>Streamlined customs documentation (Bills of Lading, shipping manifests, customs declarations), improving cross-departmental paperwork velocity by <strong>30%</strong>.</li>
                    <li>Analyzed prospective client pipelines and historical shipment volumes within CRM software to generate actionable conversion intelligence for senior sales directors.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/40 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-foreground text-sm">HR & Operations Intern</span>
                    <span className="text-primary font-semibold">Jun 2023 – Aug 2023</span>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">Smyrna Fellowship Trust | Ooty, Tamil Nadu (Remote)</div>
                  <ul className="list-disc list-outside pl-4 text-xs text-muted-foreground space-y-1.5 mt-2">
                    <li>Re-engineered manual resume screening workflows into an automated scoring and filtering pipeline, reducing initial screening time by <strong>50%</strong>.</li>
                    <li>Accelerated talent acquisition cycle speed by <strong>2.5x</strong> while expanding the qualified candidate pipeline by <strong>5%</strong> through structured evaluation rubrics.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/40 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-foreground text-sm">Assistant Accountant</span>
                    <span className="text-primary font-semibold">Jan 2022 – Jul 2022</span>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">Foundry Patterns | Coimbatore, Tamil Nadu (Remote)</div>
                  <ul className="list-disc list-outside pl-4 text-xs text-muted-foreground space-y-1.5 mt-2">
                    <li>Managed day-to-day general ledger reconciliations, accounts payable/receivable ledgers, and commercial invoice verification in Excel and Tally.</li>
                    <li>Conducted comprehensive periodic bank and vendor account reconciliations, maintaining <strong>100% financial ledger integrity</strong> and audit readiness.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Technical Projects & Live Deployments */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                <Code2 className="h-3.5 w-3.5" />
                <span>Key Technical Projects & Live Deployments</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {/* Project 1 */}
                <div className="p-3.5 rounded-xl border border-border/70 bg-secondary/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-foreground text-sm">NUNES MedX Studio</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-primary/20 text-primary">Live App</span>
                    </div>
                    <p className="text-[11px] text-primary/80 font-mono mt-0.5">Python • Flask • Gemini API • ReportLab</p>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      Healthcare & laboratory instrument cataloging studio automating spec extraction, multilingual translations, and ISO 13485-compliant PDF generation in under 400ms.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3 pt-2 border-t border-border/40">
                    <a href="https://nunes-catalogue-studio-live.vercel.app/" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                      <span>Live App</span> <ExternalLink className="h-3 w-3" />
                    </a>
                    <a href="https://github.com/AbishekPranavGV/MedX" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                      <span>GitHub</span> <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="p-3.5 rounded-xl border border-border/70 bg-secondary/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-foreground text-sm">IndiaMART AI Studio</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-primary/20 text-primary">Live App</span>
                    </div>
                    <p className="text-[11px] text-primary/80 font-mono mt-0.5">Python • Gemini API • ReportLab • Vercel</p>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      B2B generative automation suite transforming raw product seed names into 5 distinct marketing angles, technical specification tables, and top 20 search keywords.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3 pt-2 border-t border-border/40">
                    <a href="https://abishekpranavgv.github.io/IndiaMART-AI-Content-Catalog-Generator/" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                      <span>Live App</span> <ExternalLink className="h-3 w-3" />
                    </a>
                    <a href="https://github.com/AbishekPranavGV/IndiaMART-AI-Content-Catalog-Generator" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                      <span>GitHub</span> <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="p-3.5 rounded-xl border border-border/70 bg-secondary/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-foreground text-sm">Social Command Center</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-primary/20 text-primary">Live App</span>
                    </div>
                    <p className="text-[11px] text-primary/80 font-mono mt-0.5">Next.js • React • Node.js • Vercel</p>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      Multi-platform social media dispatch and sentiment radar console scheduling, optimizing, and tracking campaign velocity across LinkedIn, X/Twitter, and Instagram.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3 pt-2 border-t border-border/40">
                    <a href="https://nunes-social-post-machine-mu.vercel.app/" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                      <span>Live App</span> <ExternalLink className="h-3 w-3" />
                    </a>
                    <a href="https://github.com/AbishekPranavGV/social-command-center" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                      <span>GitHub</span> <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="p-3.5 rounded-xl border border-border/70 bg-secondary/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-foreground text-sm">Retail Predictive Analytics</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-primary/20 text-primary">Live App</span>
                    </div>
                    <p className="text-[11px] text-primary/80 font-mono mt-0.5">Python • SQL • Power BI • Time-Series</p>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      End-to-end predictive demand forecasting pipeline analyzing 500K+ records with 85% accuracy; automated 10 hrs/week reporting and isolated top 20% SKUs via ABC/XYZ analysis.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3 pt-2 border-t border-border/40">
                    <a href="https://abishekpranavgv.github.io/Retail-Sales-Performance-Predictive-Analytics/" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                      <span>Live App</span> <ExternalLink className="h-3 w-3" />
                    </a>
                    <a href="https://github.com/AbishekPranavGV/Retail-Sales-Performance-Predictive-Analytics" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                      <span>GitHub</span> <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Project 5 */}
                <div className="p-3.5 rounded-xl border border-border/70 bg-secondary/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-foreground text-sm">Customer Churn Framework</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-primary/20 text-primary">Live App</span>
                    </div>
                    <p className="text-[11px] text-primary/80 font-mono mt-0.5">Python • Scikit-learn • XGBoost • SHAP</p>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      Financial churn decision framework with an 88.6% ROC-AUC classifier and SHAP attribution, identifying retention actions protecting $140K in annual recurring revenue.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3 pt-2 border-t border-border/40">
                    <a href="https://abishekpranavgv.github.io/Customer-Churn-Decision-Analysis/" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                      <span>Live App</span> <ExternalLink className="h-3 w-3" />
                    </a>
                    <a href="https://github.com/AbishekPranavGV/Customer-Churn-Decision-Analysis" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                      <span>GitHub</span> <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Project 6 */}
                <div className="p-3.5 rounded-xl border border-border/70 bg-secondary/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-foreground text-sm">Financial Time-Series Engine</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-primary/20 text-primary">Live App</span>
                    </div>
                    <p className="text-[11px] text-primary/80 font-mono mt-0.5">Python • ARIMA • LSTM • Statsmodels</p>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      Quantitative econometric hybrid combining classical ARIMA(2,1,2) with Deep LSTM neural networks for rolling horizon equity price prediction and volatility analysis.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3 pt-2 border-t border-border/40">
                    <a href="https://abishekpranavgv.github.io/Stock-Price-Prediction-using-ARIMA/" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                      <span>Live App</span> <ExternalLink className="h-3 w-3" />
                    </a>
                    <a href="https://github.com/AbishekPranavGV/Stock-Price-Prediction-using-ARIMA" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                      <span>GitHub</span> <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                <GraduationCap className="h-3.5 w-3.5" />
                <span>Education</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl border border-border/70 bg-secondary/20">
                  <div className="font-bold text-foreground">MBA, Artificial Intelligence</div>
                  <div className="text-primary font-semibold text-[11px] mt-0.5">Aug 2025 – May 2027 (in progress)</div>
                  <div className="text-muted-foreground mt-1 font-medium">JAIN University | Bangalore</div>
                  <div className="text-[11px] text-muted-foreground mt-2">Executive Decision Support Systems, AI Strategy, Operations Analytics, Machine Learning</div>
                </div>

                <div className="p-3.5 rounded-xl border border-border/70 bg-secondary/20">
                  <div className="font-bold text-foreground">BBA, Data Science & AI</div>
                  <div className="text-primary font-semibold text-[11px] mt-0.5">Sep 2022 – Jun 2025</div>
                  <div className="text-muted-foreground mt-1 font-medium">Woxsen University | Hyderabad</div>
                  <div className="text-[11px] text-muted-foreground mt-2">Relational Databases (SQL), Applied Data Analytics, Business Statistics, Financial Management</div>
                </div>

                <div className="p-3.5 rounded-xl border border-border/70 bg-secondary/20">
                  <div className="font-bold text-foreground">Chartered Accountancy (CA)</div>
                  <div className="text-primary font-semibold text-[11px] mt-0.5">Jan 2019 – Jan 2022 (Foundation & Inter)</div>
                  <div className="text-muted-foreground mt-1 font-medium">ICAI</div>
                  <div className="text-[11px] text-muted-foreground mt-2">Financial Accounting, Cost Management, Corporate Laws, Direct & Indirect Taxation</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                <Award className="h-3.5 w-3.5" />
                <span>Certifications</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2.5 rounded-lg border border-border/60 bg-secondary/20">
                  <div className="font-semibold text-foreground">Agile Scrum Essentials</div>
                  <div className="text-[11px] text-muted-foreground">Techcanvass (2026)</div>
                </div>
                <div className="p-2.5 rounded-lg border border-border/60 bg-secondary/20">
                  <div className="font-semibold text-foreground">Agile Project Management</div>
                  <div className="text-[11px] text-muted-foreground">HP LIFE</div>
                </div>
                <div className="p-2.5 rounded-lg border border-border/60 bg-secondary/20">
                  <div className="font-semibold text-foreground">Lean Six Sigma White Belt</div>
                  <div className="text-[11px] text-muted-foreground">MSI</div>
                </div>
                <div className="p-2.5 rounded-lg border border-border/60 bg-secondary/20">
                  <div className="font-semibold text-foreground">Six Sigma White Belt</div>
                  <div className="text-[11px] text-muted-foreground">CSSC</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
