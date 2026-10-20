import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LiveArchitectureSection from "@/components/LiveArchitectureSection";
import ProjectsSection from "@/components/ProjectsSection";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import { ArrowUpRight, Github, Linkedin, Mail, Check, Copy, Sparkles, Terminal } from "lucide-react";

export default function Index() {
  const [copied, setCopied] = useState(false);
  const email = "Abishekpranav403@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:left-4 focus:top-4 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground font-semibold"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <HeroSection />
        <LiveArchitectureSection />
        <ProjectsSection />
        <FeaturedProjectSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />

        {/* Contact Section */}
        <section id="contact" className="px-6 py-28 relative">
          <div className="mx-auto max-w-6xl rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/[0.08] via-card to-card p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <div aria-hidden="true" className="hero-glow pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full opacity-40" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Let's Build Together</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
                Have an enterprise workflow or complex data challenge?
              </h2>

              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Whether you're looking for a Forward Deployed AI Engineer, autonomous document pipelines, or high-accuracy demand forecasting models—I'd be glad to discuss how we can engineer an impactful solution.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${email}`}
                  className="action-primary inline-flex items-center gap-2 rounded-xl px-6 py-4 text-sm font-bold shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Mail className="h-4 w-4" />
                  <span>Start an Email Conversation</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <button
                  onClick={handleCopy}
                  className="action-outline inline-flex items-center gap-2 rounded-xl px-5 py-4 text-sm font-semibold hover:border-primary/50 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-muted-foreground" />
                      <span>Copy Email ({email})</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-border/60 flex items-center gap-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for High-Impact Roles & Collaborations
                </span>
                <span>•</span>
                <span>Coimbatore / Remote Worldwide</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/80 px-6 py-10 bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-muted-foreground sm:flex-row">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-bold text-foreground">Abishek Pranav G V</span>
            <span className="hidden sm:inline">•</span>
            <span>Applied AI & Automation Systems Architect</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/AbishekPranavGV"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <Github className="h-4 w-4" />
              <span>GitHub (24 Repos)</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abishek-pranav-g-v-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a href="#home" className="text-xs font-semibold hover:text-primary transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
