import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, Github, Linkedin, FileText } from "lucide-react";

interface NavbarProps {
  onOpenResume?: () => void;
}

const links = [
  { label: "Home", href: "#home" },
  { label: "Architecture", href: "#architecture" },
  { label: "Projects", href: "#projects" },
  { label: "Case Study", href: "#featured-project" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/[0.08] bg-background/85 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "bg-background/40 backdrop-blur-md"
      }`}
    >
      <nav aria-label="Primary navigation" className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        {/* Logo and Identity */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan-600 text-primary-foreground font-black text-sm shadow-md shadow-primary/25 group-hover:scale-105 transition-transform overflow-hidden border border-primary/30">
            <span className="font-mono tracking-tighter">AP</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-foreground text-sm group-hover:text-primary transition-colors">
              Abishek Pranav G V
            </span>
            <span className="text-[11px] font-medium text-muted-foreground flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Generative Executive AI / Forward Deployed Engineer</span>
            </span>
          </div>
        </a>

        {/* Desktop Links with Active Indicator */}
        <div className="hidden lg:flex items-center gap-1 rounded-full border border-border/50 bg-card/50 px-3 py-1 backdrop-blur-md">
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-2 h-0.5 rounded-full bg-primary" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Button & CV Shortcut */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="action-outline inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold hover:border-primary/50 transition-all"
            title="Download Official CV"
          >
            <FileText className="h-3.5 w-3.5 text-primary" />
            <span>Resume</span>
          </button>

          <a
            href="https://github.com/AbishekPranavGV"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl border border-border/60 text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
            aria-label="GitHub Profile (30 Repos)"
            title="GitHub (30 Repositories)"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/abishek-pranav-g-v-/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl border border-border/60 text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="action-primary inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold shadow-sm"
          >
            <span>Connect</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden border-b border-border bg-background/95 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2.5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm font-semibold transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <button
                onClick={() => {
                  setOpen(false);
                  if (onOpenResume) onOpenResume();
                }}
                className="action-outline inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold"
              >
                <FileText className="h-3.5 w-3.5 text-primary" />
                <span>View Full CV</span>
              </button>

              <div className="flex gap-4">
                <a href="https://github.com/AbishekPranavGV" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/abishek-pranav-g-v-/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
