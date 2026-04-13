import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import retailImg from "@/assets/retail-analytics.jpg";

const FeaturedProjectSection = () => {
  const [open, setOpen] = useState(false);

  const tags = ["SQL", "Python", "Power BI", "Business Analysis"];

  return (
    <section className="px-6 py-24" id="featured-project">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Project</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card overflow-hidden"
        >
          <div className="relative w-full aspect-video overflow-hidden">
            <img
              src={retailImg}
              alt="Retail Sales Performance & Predictive Analytics dashboard"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-primary tracking-wider uppercase">Case Study</span>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Retail Sales Performance & Predictive Analytics
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Comprehensive retail analytics solution combining historical sales data analysis with
              predictive modeling to forecast revenue trends, optimize inventory management, and
              identify high-value customer segments. Leveraged SQL for data extraction, Python for
              statistical modeling, and Power BI for executive-ready interactive dashboards.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Button
              onClick={() => setOpen(true)}
              className="gap-2"
            >
              View Details
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Retail Sales Performance & Predictive Analytics
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              End-to-end business analytics case study
            </DialogDescription>
          </DialogHeader>

          <img
            src={retailImg}
            alt="Project dashboard preview"
            className="w-full rounded-lg aspect-video object-cover my-2"
          />

          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h4 className="text-foreground font-semibold mb-1">Objective</h4>
              <p>
                Build a scalable analytics pipeline to monitor retail sales KPIs, forecast
                quarterly revenue, and surface actionable insights for merchandising teams.
              </p>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-1">Approach</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Extracted and cleaned 500K+ transaction records using advanced SQL queries</li>
                <li>Performed EDA with Python (Pandas, Matplotlib) to uncover seasonal patterns</li>
                <li>Developed time-series forecasting models (ARIMA, Prophet) for revenue prediction</li>
                <li>Designed interactive Power BI dashboards with drill-down capabilities</li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-1">Key Outcomes</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Improved forecast accuracy by 18% over baseline moving-average models</li>
                <li>Identified 3 underperforming product categories driving margin erosion</li>
                <li>Reduced inventory holding costs through demand-driven restocking strategy</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FeaturedProjectSection;
