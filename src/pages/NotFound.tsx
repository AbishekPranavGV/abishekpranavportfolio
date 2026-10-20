import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("Notice: Navigating from path:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground px-6">
      <div className="text-center max-w-md p-8 rounded-2xl border border-border bg-card shadow-2xl">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-lg mb-4">
          AP
        </div>
        <h1 className="mb-2 text-4xl font-extrabold text-foreground">404</h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Looking for Abishek Pranav's portfolio? Head back to the main interactive showcase.
        </p>
        <Link
          to="/"
          className="action-primary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold shadow-md"
        >
          <Home className="h-4 w-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
