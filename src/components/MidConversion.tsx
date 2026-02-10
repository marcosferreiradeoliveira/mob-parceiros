import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const MidConversion = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm p-12 md:p-16 card-glow">
          <Rocket className="text-primary mx-auto mb-6 animate-float" size={40} />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
            Tem um projeto complexo no pipeline?
            <br />
            <span className="text-gradient">Vamos tirar do papel.</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Da ideia à entrega com a qualidade que sua agência precisa assinar embaixo.
          </p>
          <Button variant="glow" size="lg" className="text-base px-10 py-6" onClick={scrollToForm}>
            Solicitar Proposta
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default MidConversion;
