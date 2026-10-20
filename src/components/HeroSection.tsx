import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

const pillars = [
  { number: "01", title: "Applied AI", detail: "Document intelligence & intelligent workflows" },
  { number: "02", title: "Product engineering", detail: "Useful interfaces connected to business operations" },
  { number: "03", title: "Data & insights", detail: "Analytics, forecasting & decision systems" },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="relative isolate overflow-hidden px-6 pt-36 pb-20 md:pt-48 md:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid opacity-60" />
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute -right-48 -top-40 h-[640px] w-[640px] rounded-full" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div initial={reduceMotion ? false : {opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.65,ease:"easeOut"}} className="max-w-5xl">
          <div className="mb-9 inline-flex items-center gap-3 rounded-full border border-primary/25 bg-primary/[.07] px-4 py-2 text-xs font-semibold tracking-wide text-primary">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            AI ENGINEERING / AUTOMATION / ANALYTICS
          </div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[.24em] text-muted-foreground">Hello, I'm Abishek Pranav G V</p>
          <h1 className="max-w-5xl text-[clamp(3.5rem,8.4vw,7.75rem)] font-semibold leading-[.98] tracking-[-.07em] text-foreground">
            Building AI that <span className="text-gradient">works in the real world.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground md:text-xl md:leading-9">
            An applied AI builder working at the intersection of intelligent automation,
            product engineering and data. I turn operational challenges into practical
            software people can use.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="action-primary group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold">Explore selected work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
            <a href="#featured-project" className="action-outline inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold">View case study <ArrowDownRight className="h-4 w-4" /></a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Coimbatore, India</span>
            <a href="mailto:Abishekpranav403@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-primary"><Mail className="h-4 w-4" /> Email</a>
            <a href="https://github.com/AbishekPranavGV" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-primary"><Github className="h-4 w-4" /> GitHub</a>
            <a href="https://www.linkedin.com/in/abishek-pranav-g-v-/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-primary"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
        </motion.div>
        <div className="mt-20 grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-card/70 shadow-2xl shadow-black/10 sm:grid-cols-3">
          {pillars.map((pillar,i)=>(
            <div key={pillar.number} className={`p-6 md:p-8 ${i<2?"border-b sm:border-b-0 sm:border-r border-border":""}`}>
              <span className="mb-5 block font-mono text-xs tracking-wider text-primary">{pillar.number} / FOCUS</span>
              <h2 className="mb-2 text-lg font-semibold tracking-tight">{pillar.title}</h2>
              <p className="text-sm leading-6 text-muted-foreground">{pillar.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}