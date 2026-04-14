import { motion } from "framer-motion";
import { BarChart3, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import retailDashboard from "@/assets/retail-dashboard.png";

const techStack = ["SQL Server", "Python", "Power BI", "Business Analysis"];

const impacts = [
  { value: "85%", label: "Forecast Accuracy" },
  { value: "10+", label: "Hours Saved/Week" },
  { value: "ABC", label: "Inventory Optimization" },
];

const FeaturedProjectSection = () => {
  return (
    <section className="px-6 py-24" id="featured-project">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Project</h2>
          <p className="text-muted-foreground mb-12">Deep-dive case study</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card overflow-hidden"
        >
          {/* Header bar */}
          <div className="px-6 pt-6 pb-4 md:px-8 md:pt-8 border-b border-border/50">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">
                  Retail Sales Performance & Predictive Analytics
                </h3>
                <p className="text-sm text-primary font-medium">
                  Solving Inventory Distortion with SQL & AI
                </p>
              </div>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Content */}
            <div className="p-6 md:p-8 flex flex-col justify-between">
              {/* Summary */}
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Built an end-to-end retail analytics pipeline leveraging{" "}
                  <span className="text-foreground font-medium">SQL Server</span> for
                  data engineering — extracting, transforming, and loading 500K+
                  transaction records across 4 store locations. Developed{" "}
                  <span className="text-foreground font-medium">ARIMA & Prophet</span>{" "}
                  time-series models achieving <span className="text-primary font-semibold">85% forecast accuracy</span>,
                  and designed interactive Power BI dashboards with ABC/XYZ inventory
                  classification to eliminate stock distortion and drive data-backed
                  merchandising decisions.
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Business Impact */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Business Impact
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {impacts.map((item) => (
                      <div
                        key={item.label}
                        className="bg-secondary/60 rounded-lg p-3 text-center"
                      >
                        <div className="text-xl md:text-2xl font-bold text-primary">
                          {item.value}
                        </div>
                        <div className="text-[11px] text-muted-foreground mt-1 leading-tight">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild className="gap-2">
                  <a
                    href="https://github.com/AbishekPranavGV/Retail-Sales-Performance-Predictive-Analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abishek-pranav-g-v/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Linkedin
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild className="gap-2">
                  <a
                    href="https://github.com/AbishekPranavGV/Retail-Sales-Performance-Predictive-Analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4" />
                    Read Documentation (BRD/FRD)
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Dashboard Image */}
            <div className="relative bg-secondary/30 flex items-center justify-center p-4 md:p-6">
              <div className="w-full rounded-lg overflow-hidden border border-border/50 shadow-lg">
                <img
                  src={retailDashboard}
                  alt="Retail Sales Performance Power BI Dashboard showing KPIs, ABC analysis, and store-level metrics"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectSection;
