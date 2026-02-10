import { motion } from "framer-motion";
import { Cpu, Eye, BadgeDollarSign, Puzzle } from "lucide-react";

const benefits = [
  {
    icon: Puzzle,
    title: "Modelo White Label",
    desc: "Sua marca na frente, nossa engenharia por trás. Sigilo total.",
  },
  {
    icon: Eye,
    title: "Entrega de alta fidelidade",
    desc: "Pixel perfect. Design e código na mesma página, sempre.",
  },
  {
    icon: BadgeDollarSign,
    title: "Sem custos fixos",
    desc: "Pague por projeto. Sem equipe ociosa, sem overhead.",
  },
  {
    icon: Cpu,
    title: "Especialistas no 'impossível'",
    desc: "Projetos que ninguém sabe como fazer? É com a gente.",
  },
];

const WhyMobSection = () => {
  return (
    <section id="por-que" className="py-24 relative">
      <div className="absolute inset-0 radial-spotlight pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Por que a Mob?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            <span className="text-gradient font-semibold">IA não é o futuro, é nossa ferramenta de escala.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 items-start p-6 rounded-xl border border-border bg-card card-glow"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <b.icon className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-bold mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMobSection;
