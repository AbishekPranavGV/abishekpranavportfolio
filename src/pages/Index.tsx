import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import EducationSection from "@/components/EducationSection";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Index(){
 return <div className="min-h-screen bg-background">
  <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:left-4 focus:top-4 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Skip to content</a>
  <Navbar/>
  <main id="main">
    <HeroSection/>
    <ProjectsSection/>
    <FeaturedProjectSection/>
    <ExperienceSection/>
    <SkillsSection/>
    <EducationSection/>
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[.11] via-card to-card p-8 md:p-14">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[.22em] text-primary">What's next</p>
        <h2 className="mb-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Have a complex problem? Let's build a clear solution.</h2>
        <p className="mb-8 max-w-xl text-muted-foreground">Interested in applied AI, software engineering, or technical collaboration? I'd be glad to connect.</p>
        <a href="mailto:Abishekpranav403@gmail.com" className="action-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"><Mail className="h-4 w-4"/> Start a conversation <ArrowUpRight className="h-4 w-4"/></a>
      </div>
    </section>
  </main>
  <footer className="border-t border-border px-6 py-9">
    <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 text-sm text-muted-foreground sm:flex-row sm:items-center">
      <p>© {new Date().getFullYear()} Abishek Pranav G V · Built with intention.</p>
      <div className="flex gap-5">
        <a href="https://github.com/AbishekPranavGV" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary"><Github className="h-5 w-5"/></a>
        <a href="https://www.linkedin.com/in/abishek-pranav-g-v-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-5 w-5"/></a>
        <a href="#home" className="hover:text-primary">Back to top ↑</a>
      </div>
    </div>
  </footer>
 </div>;
}
