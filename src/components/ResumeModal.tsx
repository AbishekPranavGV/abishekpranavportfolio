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
  Layers
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyMarkdown = () => {
    const cvText = `ABISHEK PRANAV G V
Business Analyst | Data & AI Automation | Process Improvement
Coimbatore, Tamil Nadu, India | +91 63835 00484 | Abishekpranav403@gmail.com
LinkedIn: https://www.linkedin.com/in/abishek-pranav-g-v-/
GitHub: https://github.com/AbishekPranavGV

PROFESSIONAL SUMMARY
Business Analyst and automation professional with a BBA in Data Science & AI, an MBA in Artificial Intelligence (in progress) and three years of Chartered Accountancy preparation. Combines finance foundations, business operations and data analytics to deliver process improvement, requirements analysis, workflow automation, BI dashboards and LLM-assisted workflows. Experience spans export operations and industrial product operations, using SQL, Python, Power BI, Advanced Excel, React, Next.js and Supabase.

EXPERIENCE
• Nunes Instrumentation | Generative AI & Business Automation Specialist (Aug 2026 – Present)
• RXG Studios | Operations & Business Analytics Lead (May 2025 – Nov 2025)
• Woxsen University | Intern & Event Coordinator (Jan 2023 – Feb 2025)
• Greenwich Meridian Logistics | Business Development Intern (May 2024 – Aug 2024)
• Smyrna Fellowship Trust | HR & Operations Intern (Jun 2023 – Aug 2023)
• Foundry Patterns | Assistant Accountant (Jan 2022 – Jul 2022)

EDUCATION
• MBA, Artificial Intelligence | JAIN University (Aug 2025 – May 2027)
• BBA, Data Science & AI | Woxsen University (Sep 2022 – Jun 2025)
• Chartered Accountancy (CA) | ICAI (Jan 2019 – Jan 2022)

CERTIFICATIONS
• Agile Scrum Essentials | Techcanvass (2026)
• Agile Project Management Foundation | HP LIFE
• Lean Six Sigma White Belt | MSI
• Six Sigma White Belt | CSSC`;

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-primary/30 bg-card shadow-2xl overflow-hidden z-10"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/30">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <FileText className="h-4 w-4 text-primary" />
              <span>Abishek Pranav G V — Official Curriculum Vitae</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyMarkdown}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-semibold hover:bg-secondary transition-colors"
                title="Copy plain-text CV"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copied" : "Copy Text"}</span>
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-semibold hover:bg-secondary transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="h-3.5 w-3.5 text-primary" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Printable CV Document Content */}
          <div className="p-6 md:p-10 overflow-y-auto space-y-8 text-foreground text-sm leading-relaxed" id="cv-print-area">
            {/* Header / Contact */}
            <div className="border-b border-border/80 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
                  ABISHEK PRANAV G V
                </h1>
                <p className="text-base font-semibold text-primary mt-1">
                  Business Analyst | Data & AI Automation | Process Improvement
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Coimbatore, Tamil Nadu, India</span>
                  <span>•</span>
                  <a href="tel:+916383500484" className="flex items-center gap-1 text-primary hover:underline"><Phone className="h-3 w-3" /> +91 63835 00484</a>
                  <span>•</span>
                  <a href="mailto:Abishekpranav403@gmail.com" className="flex items-center gap-1 text-primary hover:underline"><Mail className="h-3 w-3" /> Abishekpranav403@gmail.com</a>
                </div>
              </div>
              <div className="flex sm:flex-col gap-2 shrink-0">
                <a
                  href="https://www.linkedin.com/in/abishek-pranav-g-v-/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://github.com/AbishekPranavGV"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  <span>GitHub (24 Repos)</span>
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
                Business Analyst and automation professional with a <strong>BBA in Data Science & AI</strong>, an <strong>MBA in Artificial Intelligence (in progress)</strong>, and three years of Chartered Accountancy preparation. Combines finance foundations, business operations, and data analytics to deliver process improvement, requirements analysis, workflow automation, BI dashboards, and LLM-assisted workflows. Experience spans export operations and industrial product operations, using SQL, Python, Power BI, Advanced Excel, React, Next.js, and Supabase.
              </p>
            </div>

            {/* Core Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                <Layers className="h-3.5 w-3.5" />
                <span>Core Competencies & Skills</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg border border-border/60 bg-secondary/20">
                  <span className="font-bold text-foreground">Business Analysis: </span>
                  <span className="text-muted-foreground">Requirements Analysis, Process Mapping, Workflow Optimisation, Business Process Improvement, Operational Analysis, Decision Support, Stakeholder Communication</span>
                </div>
                <div className="p-3 rounded-lg border border-border/60 bg-secondary/20">
                  <span className="font-bold text-foreground">Data & BI: </span>
                  <span className="text-muted-foreground">SQL, Python, Power BI, DAX, Tableau, Streamlit, Advanced Excel, Data Analysis, Dashboard Development, KPI Dashboards</span>
                </div>
                <div className="p-3 rounded-lg border border-border/60 bg-secondary/20">
                  <span className="font-bold text-foreground">AI & Automation: </span>
                  <span className="text-muted-foreground">LLM APIs, OpenAI API, Prompt Engineering, AI-Assisted Document Extraction, Playwright, REST API Integration, Process Automation</span>
                </div>
                <div className="p-3 rounded-lg border border-border/60 bg-secondary/20">
                  <span className="font-bold text-foreground">Web & Deployment: </span>
                  <span className="text-muted-foreground">React, Next.js, TypeScript, Supabase, GitHub, Vercel, Tailwind CSS</span>
                </div>
                <div className="p-3 rounded-lg border border-border/60 bg-secondary/20">
                  <span className="font-bold text-foreground">Operations & Finance: </span>
                  <span className="text-muted-foreground">Export Logistics, Supply Chain Operations, CRM Management, Financial Reconciliation, Invoicing, TDS Compliance, Tally, Accounting, Cost Management</span>
                </div>
                <div className="p-3 rounded-lg border border-border/60 bg-secondary/20">
                  <span className="font-bold text-foreground">Project & Delivery: </span>
                  <span className="text-muted-foreground">Agile Scrum, Lean Six Sigma, Project Coordination</span>
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
                  <div className="text-xs text-muted-foreground">Nunes Instrumentation | Coimbatore, Tamil Nadu</div>
                  <ul className="list-disc list-outside pl-4 text-xs text-muted-foreground space-y-1 mt-2">
                    <li>Developed AI-assisted catalogue workflows using LLM APIs for product research, specification extraction, and generation of structured descriptions, key features, and branded PDFs.</li>
                    <li>Designed Playwright-based IndiaMART product management workflows covering listing research, form population, and data validation.</li>
                    <li>Built React, Next.js, and Supabase application workflows for service requests, quotations, purchasing visibility, and KPI dashboards.</li>
                    <li>Integrated LLM and API-driven features into operational web interfaces; managed version control and deployment through GitHub and Vercel.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/40 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-foreground text-sm">Operations & Business Analytics Lead</span>
                    <span className="text-primary font-semibold">May 2025 – Nov 2025</span>
                  </div>
                  <div className="text-xs text-muted-foreground">RXG Studios | Bengaluru, Karnataka (Hybrid)</div>
                  <ul className="list-disc list-outside pl-4 text-xs text-muted-foreground space-y-1 mt-2">
                    <li>Built the operational foundation of an apparel-export startup, supporting its transition to active global transactions across CRM, international documentation, and transaction workflows.</li>
                    <li>Automated export documentation using Advanced Excel and export portals, reducing manual processing time by 30%.</li>
                    <li>Optimised workflows between export portals and Tally for international invoicing and TDS compliance.</li>
                    <li>Streamlined shipping workflows and Bills of Lading (BL), speeding up transaction cycles for overseas clients.</li>
                    <li>Managed CRM pipelines to keep export operations running through high-growth periods.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/40 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-foreground text-sm">Intern & Event Coordinator</span>
                    <span className="text-primary font-semibold">Jan 2023 – Feb 2025</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Woxsen University – Centre of Skill Development | Hyderabad, Telangana</div>
                  <ul className="list-disc list-outside pl-4 text-xs text-muted-foreground space-y-1 mt-2">
                    <li>Managed back-end operations for flagship university events (Campus Quest, Capital Quest) and led marketing for the Murder Mystery event, increasing student participation by 10%.</li>
                    <li>Coordinated communication between university executives, high-profile guests, and student teams for the Dinner with CEO event.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/40 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-foreground text-sm">Business Development Intern</span>
                    <span className="text-primary font-semibold">May 2024 – Aug 2024</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Greenwich Meridian Logistics India Pvt Ltd | Remote</div>
                  <ul className="list-disc list-outside pl-4 text-xs text-muted-foreground space-y-1 mt-2">
                    <li>Researched freight forwarding and logistics markets to support business development.</li>
                    <li>Streamlined documentation (Bills of Lading, invoices, quotations) for import/export workflows, improving turnaround time by 30%.</li>
                    <li>Analysed prospective client pipelines and market opportunities using CRM records.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/40 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-foreground text-sm">HR & Operations Intern</span>
                    <span className="text-primary font-semibold">Jun 2023 – Aug 2023</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Smyrna Fellowship Trust | Ooty, Tamil Nadu (Remote)</div>
                  <ul className="list-disc list-outside pl-4 text-xs text-muted-foreground space-y-1 mt-2">
                    <li>Restructured a manual resume screening process into a structured pipeline, reducing screening time by 50%.</li>
                    <li>Accelerated recruitment speed by 2.5x and increased the qualified candidate pool by 5%.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/40 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-foreground text-sm">Assistant Accountant</span>
                    <span className="text-primary font-semibold">Jan 2022 – Jul 2022</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Foundry Patterns | Coimbatore, Tamil Nadu (Remote)</div>
                  <ul className="list-disc list-outside pl-4 text-xs text-muted-foreground space-y-1 mt-2">
                    <li>Maintained day-to-day accounting ledgers, transaction logs, and invoice tracking in Excel.</li>
                    <li>Performed account reconciliation to maintain financial record integrity.</li>
                  </ul>
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
                  <div className="text-muted-foreground mt-1">JAIN University | Bangalore</div>
                  <div className="text-[11px] text-muted-foreground mt-2">Decision Support Systems, AI Strategy, Operations Analytics, Machine Learning</div>
                </div>

                <div className="p-3.5 rounded-xl border border-border/70 bg-secondary/20">
                  <div className="font-bold text-foreground">BBA, Data Science & AI</div>
                  <div className="text-primary font-semibold text-[11px] mt-0.5">Sep 2022 – Jun 2025</div>
                  <div className="text-muted-foreground mt-1">Woxsen University | Hyderabad</div>
                  <div className="text-[11px] text-muted-foreground mt-2">Relational Databases (SQL), Applied Data Analytics, Business Statistics, Financial Management</div>
                </div>

                <div className="p-3.5 rounded-xl border border-border/70 bg-secondary/20">
                  <div className="font-bold text-foreground">Chartered Accountancy (CA)</div>
                  <div className="text-primary font-semibold text-[11px] mt-0.5">Jan 2019 – Jan 2022 (Foundation & Inter Prep)</div>
                  <div className="text-muted-foreground mt-1">ICAI</div>
                  <div className="text-[11px] text-muted-foreground mt-2">Financial Accounting, Cost Management, Corporate Laws, Taxation</div>
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
