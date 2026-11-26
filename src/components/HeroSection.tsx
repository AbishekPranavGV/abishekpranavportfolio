import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { 
  ArrowDownRight, 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin, 
  Sparkles, 
  FileText,
  Briefcase,
  ChevronDown
} from "lucide-react";

interface HeroSectionProps {
  onOpenResume?: () => void;
}

const ROLES = [
  "Generative Executive AI / Forward Deployed Engineer",
  "Applied AI & Enterprise Automation Specialist",
  "Business Intelligence & Data Intelligence Lead",
  "Python Automation & Full-Stack Systems Architect",
  "Predictive Modeling & Operational Optimization Developer"
];

const impactMetrics = [
  { value: "30", label: "Production Repos", sub: "100% Verified Production Repositories" },
  { value: "10", label: "Live Vercel Clouds", sub: "Sub-Second Microservices & Web Apps" },
  { value: "30%", label: "Cycle Time Cut", sub: "Export Logistics & Invoicing Automation" },
  { value: "85%", label: "Forecast Accuracy", sub: "ARIMA & Prophet Demand Modeling" },
  { value: "50%", label: "Screening Time Saved", sub: "Automated Candidate & Data Triage" },
];

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative isolate overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Dynamic Background Elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute -right-36 -top-36 h-[600px] w-[600px] rounded-full opacity-35 blur-[100px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 -bottom-20 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Profile + Status Banner Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          {/* Status Pill */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary backdrop-blur-md shadow-sm"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-foreground/90 font-bold uppercase tracking-wider text-[11px]">Identity</span>
            <span className="text-muted-foreground/60">•</span>
            <span className="text-foreground">Generative Executive AI / Forward Deployed Engineer</span>
            <span className="text-muted-foreground/60">•</span>
            <span className="text-emerald-400 font-semibold">10 Live Vercel Deployments • 30 Repos</span>
          </motion.div>

          {/* Location & Status Indicator */}
          <motion.div 
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center gap-3 text-xs text-muted-foreground bg-card/60 border border-border/80 px-4 py-2 rounded-full backdrop-blur-md"
          >
            <span className="flex items-center gap-1.5 font-medium text-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Coimbatore, Tamil Nadu, India
            </span>
            <span className="text-border">•</span>
            <span className="text-emerald-400 font-medium">Available for Strategic Opportunities</span>
          </motion.div>
        </div>

        {/* Hero Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          {/* Left Text Column */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-8"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>ABISHEK PRANAV G V</span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl text-foreground">
              Turning Business Complexity Into{" "}
              <span className="text-gradient drop-shadow-sm">Intelligent Systems.</span>
            </h1>

            {/* Dynamic Animated Role Switcher */}
            <div className="h-10 mt-4 flex items-center overflow-hidden">
              <span className="text-sm md:text-base font-semibold text-muted-foreground mr-2 font-mono">Specializing in:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="text-sm md:text-base font-bold text-primary border-b border-primary/40 pb-0.5"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I combine business understanding, data analytics and AI-powered engineering to build intelligent applications, automate complex workflows and transform operational challenges into measurable, revenue-driving solutions.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> Coimbatore, Tamil Nadu, India</span>
              <span className="hidden sm:inline">•</span>
              <a href="tel:+916383500484" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Phone className="h-4 w-4 text-primary" /> +91 63835 00484</a>
              <span className="hidden sm:inline">•</span>
              <a href="mailto:Abishekpranav403@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Mail className="h-4 w-4 text-primary" /> Abishekpranav403@gmail.com</a>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenResume}
                className="action-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FileText className="h-4 w-4" />
                <span>Download My Resume</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <a
                href="#projects"
                className="action-outline inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold hover:border-primary/50 transition-all"
              >
                <span>View My Projects</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>

              <a
                href="#experience"
                className="action-outline inline-flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold hover:border-primary/50 transition-all"
              >
                <Briefcase className="h-4 w-4 text-primary" />
                <span>Explore Experience</span>
              </a>

              <a
                href="https://github.com/AbishekPranavGV"
                target="_blank"
                rel="noopener noreferrer"
                className="action-outline inline-flex items-center gap-2 rounded-xl px-3.5 py-3.5 text-sm font-semibold hover:text-primary transition-colors"
                title="GitHub Repositories (30 Repos)"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
                <span className="text-xs font-mono font-bold">30</span>
              </a>

              <a
                href="https://www.linkedin.com/in/abishek-pranav-g-v-/"
                target="_blank"
                rel="noopener noreferrer"
                className="action-outline inline-flex items-center gap-2 rounded-xl px-3.5 py-3.5 text-sm font-semibold hover:text-primary transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Profile Photo / Identity Visual Column */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative group">
              {/* Animated outer glowing ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary via-cyan-500 to-blue-600 opacity-30 blur-lg group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              <div className="relative rounded-3xl border-2 border-primary/30 bg-card/90 p-3 shadow-2xl backdrop-blur-xl">
                <div className="overflow-hidden rounded-2xl w-56 h-56 sm:w-64 sm:h-64 relative bg-secondary/60">
                  <img
                    src="https://github.com/AbishekPranavGV.png"
                    alt="Abishek Pranav G V - Professional Profile"
                    className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[1.02] group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-2.5 inset-x-2.5 text-center bg-card/85 backdrop-blur-md rounded-xl py-1.5 px-2 border border-border/60">
                    <p className="text-xs font-bold text-foreground">Abishek Pranav G V</p>
                    <p className="text-[10px] text-primary font-mono">BBA (AI) • MBA (AI) • CA (Prep)</p>
                  </div>
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-3 -right-2 bg-emerald-500/10 border border-emerald-500/40 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1.5 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-bold text-emerald-400">Verified Systems</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quantified Impact Metrics Grid */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-3.5"
        >
          {impactMetrics.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border/80 bg-card/75 backdrop-blur-md p-4 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 shadow-sm"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-primary group-hover:scale-105 transition-transform duration-300">
                {item.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-foreground">
                {item.label}
              </div>
              <div className="mt-0.5 text-[11px] text-muted-foreground leading-snug line-clamp-2">
                {item.sub}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a 
            href="#architecture" 
            className="flex flex-col items-center gap-1.5 text-xs text-muted-foreground/70 hover:text-primary transition-colors"
            aria-label="Scroll to architecture"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider">Explore Architecture</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
