import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LiveArchitectureSection from "@/components/LiveArchitectureSection";
import ProjectsSection from "@/components/ProjectsSection";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ResumeModal from "@/components/ResumeModal";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin, Check, Copy, Sparkles, FileText, Download } from "lucide-react";

export default function Index() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const email = "Abishekpranav403@gmail.com";
  const phone = "+91 63835 00484";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:left-4 focus:top-4 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground font-semibold"
      >
        Skip to content
      </a>

      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      <main id="main">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
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
                <span>Start a Conversation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
                Looking for a high-impact Business Analyst & Automation Specialist?
              </h2>

              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Combining finance foundations, business operations, and applied AI automation to eliminate manual bottlenecks, build executive BI dashboards, and engineer intelligent workflows.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="action-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Mail className="h-4 w-4" />
                  <span>Send Email</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="action-outline inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold hover:border-primary/50 transition-all"
                >
                  <FileText className="h-4 w-4 text-primary" />
                  <span>View Official CV</span>
                </button>

                <button
                  onClick={handleCopyEmail}
                  className="action-outline inline-flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold hover:border-primary/50 transition-all"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-muted-foreground" />
                      <span>{email}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleCopyPhone}
                  className="action-outline inline-flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold hover:border-primary/50 transition-all"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-400">Phone Copied!</span>
                    </>
                  ) : (
                    <>
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{phone}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for High-Impact Roles & Consulting
                </span>
                <span>•</span>
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-primary" /> Coimbatore, Tamil Nadu, India</span>
                <span>•</span>
                <span>Hybrid / Remote Worldwide</span>
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
            <span>Business Analyst | Data & AI Automation | Process Improvement</span>
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

      {/* Interactive Official CV Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
