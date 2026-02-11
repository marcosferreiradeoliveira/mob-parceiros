import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const dores = [
  "Cliente pediu algo que sua equipe não domina",
  "Prazo curto demais para contratar ou montar time",
  "Projeto grande demais para assumir sozinho",
  "Medo de perder a conta para outra agência mais técnica",
];

const ParceiroTecnicoSection = () => {
  return (
    <section className="py-20 relative border-y border-border bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Parceiro técnico para quem quer vender projetos maiores
        </motion.h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Se você é agência, isso provavelmente já aconteceu:
        </p>
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
        <motion.p
          className="text-center text-lg font-semibold text-foreground max-w-xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          A Mob entra como seu braço técnico — em sigilo total.
        </motion.p>
      </div>
    </section>
  );
};

export default ParceiroTecnicoSection;
