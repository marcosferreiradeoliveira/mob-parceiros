import { motion } from "framer-motion";

const logos = [
  { name: "Fundação Roberto Marinho", quote: "Fechamos projetos de multimídia e exposição que não conseguiríamos executar sozinhos." },
  { name: "Museu da Língua Portuguesa", quote: "Parceria que permitiu entregar mais de 100 vídeos com o padrão que o museu exige." },
  { name: "Alter Comunicação", quote: "Nosso braço técnico em IA e plataformas; o cliente acha que é tudo nosso." },
  { name: "Conservação Internacional", quote: "Apps e jogos sérios que aumentaram o alcance das nossas campanhas." },
];

const LogosSection = () => {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <p className="text-center text-sm font-mono text-muted-foreground uppercase tracking-widest mb-10">
          Parceiro estratégico de quem dita o mercado
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col justify-between px-6 py-5 rounded-xl w-full max-w-[280px] mx-auto bg-background/80 border border-border/60 shadow-sm hover:shadow-md hover:border-border transition-all duration-200"
            >
              <p className="text-sm text-muted-foreground italic leading-snug mb-4 flex-1">
                &ldquo;{logo.quote}&rdquo;
              </p>
              <span className="text-xs font-semibold text-foreground/80 text-center leading-tight tracking-tight">
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
