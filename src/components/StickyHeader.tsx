import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-foreground">mob</span>
          <span className="text-primary">CONTENT</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cases</a>
          <a href="#por-que" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Por que a Mob?</a>
          <Button variant="glow" size="sm" onClick={scrollToForm}>
            Orçamento Rápido
          </Button>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="flex flex-col gap-4 p-6">
              <a href="#cases" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">Cases</a>
              <a href="#por-que" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">Por que a Mob?</a>
              <Button variant="glow" onClick={scrollToForm}>Orçamento Rápido</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default StickyHeader;
