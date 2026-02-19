import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const depoimentos = [
  {
    texto: "Conseguimos fechar um projeto de plataforma que não faríamos sozinhos. Entregaram no prazo e o cliente ficou impressionado com o resultado.",
    autor: "Diretor de criação de agência parceira, SP",
  },
  {
    texto: "Virou nosso time técnico estendido. A gente cuida da relação com o cliente, eles cuidam do que é complexo.",
    autor: "Sócia de agência digital parceira, RJ",
  },
];

const DepoimentosSection = () => {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm font-mono text-warm uppercase tracking-widest">Depoimentos</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 text-foreground">
            O que agências parceiras dizem
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {depoimentos.map((d, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 pr-4 py-6 rounded-xl bg-background/80 border border-border"
            >
              <Quote className="absolute left-4 top-6 w-8 h-8 text-warm/30" />
              <p className="text-muted-foreground leading-relaxed italic">
                &ldquo;{d.texto}&rdquo;
              </p>
              <p className="text-xs text-muted-foreground/80 mt-3 font-normal not-italic">
                — {d.autor}
              </p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
