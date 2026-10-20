import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

// Dynamically determine basename:
// - If loaded on GitHub Pages (/abishekpranavportfolio), use /abishekpranavportfolio
// - If loaded on Lovable (abishekpranavportfolio.lovable.app) or root domain, use /
const getBasename = () => {
  if (typeof window !== "undefined") {
    const pathname = window.location.pathname;
    if (pathname.startsWith("/abishekpranavportfolio")) {
      return "/abishekpranavportfolio";
    }
  }
  return "/";
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={getBasename()}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/abishekpranavportfolio" element={<Index />} />
          <Route path="/abishekpranavportfolio/*" element={<Index />} />
          {/* Catch-all renders Index so no path ever hits an unwanted 404 */}
          <Route path="*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
