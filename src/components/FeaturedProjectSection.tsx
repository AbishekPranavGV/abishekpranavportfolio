import { motion } from "framer-motion";
import { BarChart3, ExternalLink, FileText, Database, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import retailDashboard from "@/assets/retail-dashboard.png"; // Ensure this image exists in your assets

const techStack = ["SQL Server", "Python", "Power BI", "ARIMA/Prophet", "Business Analysis"];

const impacts = [
  { value: "85%", label: "Forecast Accuracy" },
  { value: "10+", label: "Hours Saved/Week" },
  { value: "ABC/XYZ", label: "Inventory Strategy" },
];

const FeaturedProjectSection = () => {
  return (
    <section className="px-6 py-24" id="featured-project">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Project</h2>
          <p className="text-muted-foreground mb-12">Deep-dive technical case study</p>
        </motion.div>

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card overflow-hidden border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm shadow-xl"
        >
          {/* Header Bar */}
          <div className="px-6 pt-6 pb-4 md:px-8 md:pt-8 border-b border-border/50 bg-secondary/20">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">
                  Retail Sales Performance & Predictive Analytics
                </h3>
                <p className="text-sm text-primary font-medium flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4" /> Solving Inventory Distortion with SQL & AI
                </p>
              </div>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Column: Content */}
            <div className="p-6 md:p-8 flex flex-col justify-between border-r border-border/50">
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Built an end-to-end retail analytics pipeline leveraging{" "}
                  <span className="text-foreground font-medium underline decoration-primary/30">SQL Server</span> for 
                  data engineering—extracting, transforming, and loading 500K+ transaction records. 
                  Developed <span className="text-foreground font-medium">ARIMA & Prophet</span> time-series models 
                  to achieve <span className="text-primary font-semibold">85% forecast accuracy</span>, 
                  and designed interactive Power BI dashboards with <span className="text-foreground font-medium">ABC/XYZ classification</span> 
                  to eliminate stockouts and drive data-backed merchandising.
                </p>

                {/* Tech Stack Chips */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <Database className="w-3 h-3" /> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] bg-primary/5 text-primary border border-primary/10 px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Business Impact Grid */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Business Impact
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {impacts.map((item) => (
                      <div
                        key={item.label}
                        className="bg-secondary/40 rounded-xl p-3 text-center border border-border/50 shadow-sm"
                      >
                        <div className="text-xl md:text-2xl font-bold text-primary">
                          {item.value}
                        </div>
                        <div className="text-[10px] text-muted-foreground mt-1 leading-tight uppercase font-semibold">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Button asChild size="sm" className="gap-2 bg-primary hover:bg-primary/90">
                  <a
                    href="https://github.com/AbishekPranavGV/Retail-Sales-Performance-Predictive-Analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="gap-2">
                  <a
                    href="https://github.com/AbishekPranavGV/Retail-Sales-Performance-Predictive-Analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-3 h-3" /> BRD/FRD
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column: Dashboard Visual */}
            <div className="relative bg-secondary/10 flex items-center justify-center p-6 md:p-10 group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-full rounded-xl overflow-hidden border border-border/80 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={retailDashboard}
                  alt="Power BI Dashboard showing Retail KPIs"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
              {/* Optional: Floating Badge */}
              <div className="absolute bottom-12 right-12 bg-background/90 backdrop-blur-md border border-border px-4 py-2 rounded-lg shadow-lg hidden md:block">
                <p className="text-[10px] font-bold text-primary uppercase">Live Dashboard Preview</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectSection;
