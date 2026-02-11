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

      {/* Conteúdo: título e texto em cima */}
      <div className="container mx-auto px-4 relative z-10 pt-12 md:pt-16 w-full max-w-[1200px]">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight mb-4 md:mb-6">
            O parceiro técnico que permite sua agência vender projetos maiores
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-2 md:mb-4 leading-relaxed">
            Sua agência fecha o contrato. A Mob executa — multimídia, plataformas e apps com velocidade e padrão de especialista.
          </p>
          <p className="text-sm md:text-base text-muted-foreground/90 max-w-xl mx-auto mb-6 md:mb-8">
            Sem equipe interna. Sem custo fixo. White-label total.
          </p>
        </motion.div>
      </div>

      {/* Botões em cima da imagem (não por cima) */}
      <div className="container mx-auto px-4 relative z-10 w-full max-w-[1200px]">
        <motion.div
          className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="warm" size="lg" className="text-base px-6 py-5 w-full sm:w-auto shadow-lg" onClick={scrollToForm}>
            Receber proposta técnica em 24h
          </Button>
          <Button variant="warm-outline" size="lg" className="text-base px-6 py-5 w-full sm:w-auto" asChild>
            <a href="#cases">Ver Cases</a>
          </Button>
        </motion.div>
      </div>

      {/* Imagem */}
      <div className="relative z-10 w-full px-4 md:px-6 flex justify-center">
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

      {/* Scroll cue abaixo da imagem */}
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
