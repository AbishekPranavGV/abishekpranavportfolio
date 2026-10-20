import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles, Activity, ShieldCheck, Terminal } from "lucide-react";

const impactMetrics = [
  { value: "24", label: "Production Repos", sub: "100% CI/CD Verified Live" },
  { value: "85%", label: "Forecast Accuracy", sub: "ARIMA & Prophet Demand Models" },
  { value: "10 hrs/wk", label: "Manual Work Saved", sub: "Automated SQL Data Pipelines" },
  { value: "$1B+", label: "Inventory Impact", sub: "Stockout & Distortion Solved" },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative isolate overflow-hidden px-6 pt-32 pb-20 md:pt-44 md:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid opacity-50" />
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute -right-48 -top-40 h-[640px] w-[640px] rounded-full" />
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute -left-48 top-1/2 h-[500px] w-[500px] rounded-full opacity-30" />

      <div className="relative mx-auto max-w-6xl">
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
          <span>Forward Deployed AI & Automation Engineer</span>
          <span className="text-muted-foreground/60">•</span>
          <span className="text-foreground/90 font-medium">All 24 GitHub CI/CD Pipelines Live</span>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Engineering <span className="text-gradient">Intelligent Systems</span> That Turn Complex Operations Into Autonomous Realities.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
            I build end-to-end autonomous agentic pipelines, industrial document intelligence platforms, and predictive demand forecasting models that eliminate operational friction and deliver quantified enterprise revenue.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="action-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Explore Live Projects</span>
            <ArrowDownRight className="h-4 w-4" />
          </a>

          <a
            href="#architecture"
            className="action-outline inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold hover:border-primary/50 hover:bg-card transition-all"
          >
            <Activity className="h-4 w-4 text-primary" />
            <span>Interactive Architecture</span>
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
