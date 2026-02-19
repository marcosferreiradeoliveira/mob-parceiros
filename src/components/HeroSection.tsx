import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Hero.png";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-grid w-full max-w-[1200px] mx-auto">
      <div className="absolute inset-0 radial-spotlight pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/40 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 pt-12 md:pt-16 w-full max-w-[1200px]">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight mb-4 md:mb-6">
            Parceiro técnico white‑label para sua agência vender projetos maiores
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
            Cuidamos de sites, apps e experiências multimídia com IA para seus clientes, sem você precisar montar equipe técnica interna — tudo sob a marca da sua agência.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-[1200px] mt-6 md:mt-8">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Button variant="warm" size="lg" className="text-base px-6 py-5 shadow-lg" onClick={scrollToForm}>
            Quero uma proposta técnica em até 24h
          </Button>
        </motion.div>
      </div>

      <div className="relative z-10 w-full px-4 md:px-6 flex justify-center mt-8">
        <motion.div
          className="relative w-full max-w-[600px] max-h-[22vh] sm:max-h-[25vh] md:max-h-[210px] rounded-xl overflow-hidden border border-border/50 bg-card/30 shadow-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <img
            src={heroImage}
            alt="Mockups de produtos digitais: app mobile, dashboard web e interface multimídia"
            className="w-full h-full object-contain object-center"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-6 pb-12 md:pb-16 w-full max-w-[1200px]">
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Desça para ver cases
          </span>
          <ArrowDown className="text-muted-foreground" size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
