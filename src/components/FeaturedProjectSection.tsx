import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github, Layers, Sparkles, Workflow } from "lucide-react";

const capabilities=[
 {icon:FileText,title:"Document ingestion",detail:"Structured product data and technical specifications"},
 {icon:Sparkles,title:"AI-assisted content",detail:"Draft descriptions and product information with human review"},
 {icon:Layers,title:"Catalogue generation",detail:"Branded PDF workflows for industrial product information"}
];
export default function FeaturedProjectSection(){
 return <section className="px-6 py-24" id="featured-project">
  <div className="max-w-6xl mx-auto">
   <div className="section-divider mb-5"/><p className="text-xs font-semibold uppercase tracking-[.2em] text-primary mb-3">Engineering case study</p>
   <h2 className="text-3xl md:text-5xl font-bold mb-4">From raw technical data to customer-ready catalogues</h2>
   <p className="text-muted-foreground max-w-3xl leading-relaxed mb-10">A practical example of translating a business documentation problem into an AI-assisted workflow.</p>
   <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="rounded-3xl border border-border overflow-hidden bg-card">
    <div className="grid lg:grid-cols-5">
     <div className="lg:col-span-3 p-7 md:p-10">
      <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary rounded-full border border-primary/40 px-3 py-1.5 mb-6"><Workflow className="w-4 h-4"/> Applied AI · Workflow Automation</span>
      <h3 className="text-2xl md:text-3xl font-bold mb-5">NUNES Catalogue Studio</h3>
      <p className="text-muted-foreground leading-relaxed mb-8">Technical instrument catalogues require consistent specifications, product descriptions and professional formatting. This project combines document ingestion, structured review and generation of branded catalogue documents to make the workflow easier to repeat.</p>
      <div className="flex flex-wrap gap-2 mb-8">{["Python","Flask","Document Extraction","AI-assisted Drafting","PDF Generation"].map(x=><span key={x} className="text-xs border border-border bg-secondary/60 rounded-full px-3 py-1.5">{x}</span>)}</div>
      <div className="flex flex-wrap gap-3">
       <a href="https://github.com/AbishekPranavGV/MedX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg px-5 py-3 hover:opacity-90"><Github className="w-4 h-4"/> Explore source</a>
       <a href="https://nunes-catalogue-studio-live.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold border border-border rounded-lg px-5 py-3 hover:border-primary">Open deployed URL <ArrowUpRight className="w-4 h-4"/></a>
      </div>
     </div>
     <div className="lg:col-span-2 bg-secondary/20 p-7 md:p-10 border-t lg:border-t-0 lg:border-l border-border">
      <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-6">Technical workflow</p>
      <div className="space-y-7">{capabilities.map((x,i)=><div key={x.title} className="flex gap-4"><span className="flex-none w-11 h-11 border border-primary/25 bg-primary/10 rounded-xl flex items-center justify-center"><x.icon className="w-5 h-5 text-primary"/></span><div><p className="font-semibold mb-1">{String(i+1).padStart(2,"0")} / {x.title}</p><p className="text-sm leading-relaxed text-muted-foreground">{x.detail}</p></div></div>)}</div>
      <p className="text-xs text-muted-foreground mt-9 border-t border-border pt-5">The deployment link is provided for exploration; live availability and every feature are not independently guaranteed.</p>
     </div>
    </div>
   </motion.div>
  </div>
 </section>;
}
