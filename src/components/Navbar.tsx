import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, Activity, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "Overview", href: "#home" },
  { label: "Architecture", href: "#architecture" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#featured-project" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border/80 bg-background/90 shadow-xl shadow-black/10 backdrop-blur-xl"
          : "bg-background/40 backdrop-blur-md"
      }`}
    >
      <nav aria-label="Primary navigation" className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-sm shadow-md shadow-primary/25 group-hover:scale-105 transition-transform">
            AP
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-foreground text-sm group-hover:text-primary transition-colors">
              Abishek Pranav G V
            </span>
            <span className="text-[11px] font-medium text-muted-foreground flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>AI & Automation Engineer</span>
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/40"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button & Contact */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/AbishekPranavGV"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/abishek-pranav-g-v-/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="action-primary inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold shadow-sm"
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
        <div className="lg:hidden border-b border-border bg-background/95 px-6 py-6 backdrop-blur-xl">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <div className="flex gap-4">
                <a href="https://github.com/AbishekPranavGV" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/abishek-pranav-g-v-/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="action-primary px-4 py-2 rounded-xl text-xs font-bold"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
