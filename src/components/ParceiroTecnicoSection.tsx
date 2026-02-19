import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const dores = [
  "O cliente quer algo além do \"site básico\" e você não tem dev ou time técnico disponível.",
  "O prazo é apertado e você tem medo de prometer o que não consegue entregar.",
  "A equipe interna está no limite e você não quer arriscar a conta por causa de um projeto.",
  "Você já recusou oportunidades por falta de parceiro técnico confiável.",
];

const ParceiroTecnicoSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="dores" className="py-20 relative border-y border-border bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Quando surge um projeto complexo, isso acontece na sua agência?
        </motion.h2>
        <ul className="max-w-lg mx-auto space-y-4 mb-12">
          {dores.map((item, i) => (
            <motion.li
              key={item}
              className="flex items-start gap-3 text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <AlertCircle className="w-5 h-5 shrink-0 text-primary mt-0.5" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button
            type="button"
            onClick={scrollToForm}
            className="text-warm font-semibold underline hover:no-underline focus:outline-none"
          >
            Quero um parceiro técnico confiável
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ParceiroTecnicoSection;
