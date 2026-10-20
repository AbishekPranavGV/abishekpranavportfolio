import { motion, useReducedMotion } from "framer-motion";
import { 
  ArrowDownRight, 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin, 
  Sparkles, 
  Activity, 
  FileText,
  CheckCircle2,
  TrendingUp,
  Clock,
  Layers
} from "lucide-react";

interface HeroSectionProps {
  onOpenResume?: () => void;
}

const impactMetrics = [
  { value: "24", label: "Production Repos", sub: "100% CI/CD Verified Live" },
  { value: "30%", label: "Cycle Time Cut", sub: "Export Logistics & Invoicing Automation" },
  { value: "85%", label: "Forecast Accuracy", sub: "ARIMA & Prophet Demand Modeling" },
  { value: "50%", label: "Screening Time Saved", sub: "Automated Candidate & Data Triage" },
];

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative isolate overflow-hidden px-6 pt-32 pb-20 md:pt-44 md:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid opacity-50" />
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute -right-48 -top-40 h-[640px] w-[640px] rounded-full" />
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute -left-48 top-1/2 h-[500px] w-[500px] rounded-full opacity-30" />

      <div className="relative mx-auto max-w-6xl">
        {/* Status Pill */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Business Analyst & Data/AI Automation Specialist</span>
          <span className="text-muted-foreground/60">•</span>
          <span className="text-foreground/90 font-medium">Coimbatore, India</span>
          <span className="text-muted-foreground/60">•</span>
          <span className="text-emerald-400 font-semibold">24/24 CI/CD Workflows Live</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Bridging Finance, Operations & <span className="text-gradient">Applied AI Automation</span>.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-xl">
            Business Analyst and automation professional with a <strong>BBA in Data Science & AI</strong>, an <strong>MBA in Artificial Intelligence (in progress)</strong>, and <strong>3 years of Chartered Accountancy preparation</strong>. Blending financial rigor, process improvement, and predictive data engineering using SQL, Python, Power BI, Advanced Excel, React, Next.js, and Supabase.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs md:text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> Coimbatore, Tamil Nadu, India</span>
            <span>•</span>
            <a href="tel:+916383500484" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Phone className="h-4 w-4 text-primary" /> +91 63835 00484</a>
            <span>•</span>
            <a href="mailto:Abishekpranav403@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Mail className="h-4 w-4 text-primary" /> Abishekpranav403@gmail.com</a>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={onOpenResume}
            className="action-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <FileText className="h-4 w-4" />
            <span>View Full Official CV</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>

          <a
            href="#projects"
            className="action-outline inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold hover:border-primary/50 hover:bg-card transition-all"
          >
            <span>Verified Projects</span>
            <ArrowDownRight className="h-4 w-4" />
          </a>

          <a
            href="#architecture"
            className="action-outline inline-flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold hover:border-primary/50 transition-all"
          >
            <Activity className="h-4 w-4 text-primary" />
            <span className="hidden sm:inline">24-Repo Matrix</span>
          </a>

          <a
            href="https://github.com/AbishekPranavGV"
            target="_blank"
            rel="noopener noreferrer"
            className="action-outline inline-flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub (24 Repos)</span>
          </a>

          <a
            href="https://www.linkedin.com/in/abishek-pranav-g-v-/"
            target="_blank"
            rel="noopener noreferrer"
            className="action-outline inline-flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </motion.div>

        {/* Quantified Impact Metrics Grid */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {impactMetrics.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border/70 bg-card/70 backdrop-blur-md p-5 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="text-3xl lg:text-4xl font-extrabold tracking-tight text-primary group-hover:scale-105 transition-transform duration-300">
                {item.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">
                {item.label}
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                {item.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
