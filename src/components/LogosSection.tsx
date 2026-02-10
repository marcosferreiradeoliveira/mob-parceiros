import { motion } from "framer-motion";

const logos = [
  { name: "Fundação Roberto Marinho" },
  { name: "Museu da Língua Portuguesa" },
  { name: "Alter Comunicação" },
  { name: "Conservação Internacional" },
];

const LogosSection = () => {
  return (
    <section className="py-16 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-mono text-muted-foreground uppercase tracking-widest mb-10">
          Parceiro estratégico de quem dita o mercado
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center px-6 py-4 rounded-lg border border-border bg-card/50 w-full max-w-[220px] h-20"
            >
              <span className="text-sm font-semibold text-muted-foreground text-center leading-tight">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
