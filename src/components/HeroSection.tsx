import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Radial spotlight */}
      <div className="absolute inset-0 radial-spotlight" />

      {/* Animated accent orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Braço técnico de elite para agências
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6">
            Sua agência vende.{" "}
            <span className="text-gradient">A Mob entrega.</span>
            <br />
            <span className="text-muted-foreground font-bold text-3xl md:text-4xl lg:text-5xl">
              Vídeos, Sites e Apps com IA de Especialista.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            O braço técnico de elite para agências que não aceitam o básico. Transformamos ideias complexas em entregas impecáveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="glow" size="lg" className="text-base px-8 py-6" onClick={scrollToForm}>
              Quero ser Parceiro
            </Button>
            <Button variant="glow-outline" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#cases">Ver Cases</a>
            </Button>
          </div>

          <motion.div
            className="mt-16 flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-muted-foreground" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
