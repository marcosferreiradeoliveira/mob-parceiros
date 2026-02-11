import { motion } from "framer-motion";

const logos = [
  { name: "Fundação Roberto Marinho" },
  { name: "Museu da Língua Portuguesa" },
  { name: "Alter Comunicação" },
  { name: "Conservação Internacional" },
];

const LogosSection = () => {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <p className="text-center text-sm font-mono text-muted-foreground uppercase tracking-widest mb-10">
          Parceiro estratégico de quem dita o mercado
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center px-6 py-5 rounded-xl w-full max-w-[220px] h-24 bg-background/80 border border-border/60 shadow-sm hover:shadow-md hover:border-border transition-all duration-200"
            >
              <span className="text-xs font-semibold text-muted-foreground text-center leading-tight tracking-tight">
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
