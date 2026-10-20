import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  {label:"Work",href:"#projects"},
  {label:"Case study",href:"#featured-project"},
  {label:"Experience",href:"#experience"},
  {label:"Skills",href:"#skills"},
  {label:"Education",href:"#education"},
];

export default function Navbar(){
  const [scrolled,setScrolled]=useState(false);
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>24);
    onScroll();
    window.addEventListener("scroll",onScroll,{passive:true});
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled||open?"border-b border-border bg-background/95 shadow-lg shadow-black/5 backdrop-blur-xl":"bg-background/75 backdrop-blur-md"}`}>
    <nav aria-label="Primary navigation" className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-6">
      <a href="#home" aria-label="Abishek Pranav, go to top" onClick={()=>setOpen(false)} className="group flex items-center gap-3 font-semibold tracking-tight">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-sm font-bold text-primary transition-colors group-hover:bg-primary/20">AP</span>
        <span className="hidden text-sm sm:block">Abishek Pranav<span className="ml-1 text-primary">.</span></span>
      </a>
      <div className="hidden items-center gap-7 lg:flex">{links.map(link=><a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</a>)}</div>
      <div className="flex items-center gap-3">
        <a href="mailto:Abishekpranav403@gmail.com" className="action-outline hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold sm:inline-flex">Let's connect <ArrowUpRight className="h-4 w-4"/></a>
        <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card lg:hidden" aria-label={open?"Close menu":"Open menu"} aria-controls="mobile-navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X className="h-5 w-5"/>:<Menu className="h-5 w-5"/>}</button>
      </div>
    </nav>
    {open&&<div id="mobile-navigation" className="border-t border-border bg-background px-6 py-4 lg:hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-1">{links.map(link=><a key={link.href} href={link.href} onClick={()=>setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary">{link.label}</a>)}
      <a href="mailto:Abishekpranav403@gmail.com" onClick={()=>setOpen(false)} className="mt-2 rounded-lg bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground">Get in touch</a></div>
    </div>}
  </header>;
}