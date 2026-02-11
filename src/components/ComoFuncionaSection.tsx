import { motion } from "framer-motion";
import processoImage from "@/assets/processo.png";

const steps = [
  "A agência traz o projeto ou oportunidade",
  "A Mob desenha a solução técnica",
  "A agência apresenta ao cliente com sua marca",
  "A Mob executa em white label",
];

const ComoFuncionaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 radial-spotlight pointer-events-none opacity-50" />
      <div className="container mx-auto px-4 relative z-10 max-w-[1200px]">
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-warm uppercase tracking-widest">Processo</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Como funciona</h2>
        </motion.div>

        {/* Desktop: imagem 50% do tamanho (20% da linha) + texto ao lado; Mobile: imagem em cima, steps embaixo */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 gap-8 max-w-[1200px] mx-auto">
          <motion.div
            className="w-full max-w-[50%] lg:max-w-[20%] lg:w-[20%] lg:shrink-0 mx-auto lg:mx-0 rounded-xl overflow-hidden border border-border shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={processoImage}
              alt="Fluxo de desenvolvimento: conceito, design, desenvolvimento e entrega"
              className="w-full h-auto object-contain"
            />
          </motion.div>
          <div className="w-full lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((title, i) => (
              <motion.div
                key={title}
                className="flex gap-4 items-start p-5 rounded-xl border border-border bg-card card-glow text-left"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="w-9 h-9 rounded-full bg-warm text-warm-foreground font-bold text-sm flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-snug">{title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFuncionaSection;
