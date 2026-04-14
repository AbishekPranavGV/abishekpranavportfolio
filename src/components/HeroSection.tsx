import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Business Analyst · Data Analysis
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-foreground">Abishek</span>
            <br />
            <span className="text-gradient">Pranav G V</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Analytical MBA (AI) candidate with a proven track record of reducing operational processing time by 30% through workflow digitization and process mapping. Expert in bridging data modeling and practical business logistics.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="tel:+916383500484" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> +91 6383500484
            </a>
            <a href="mailto:abishekpranav403@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> abishekpranav403@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Coimbatore, India
            </span>
            <a href="https://www.linkedin.com/in/abishek-pranav/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://github.com/AbishekPranavGV/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
