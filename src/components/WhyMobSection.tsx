import { motion } from "framer-motion";
import { Cpu, Eye, BadgeDollarSign, Puzzle, Sparkles } from "lucide-react";
import iaConceitural from "@/assets/iaConceitural.png";

const benefits = [
  {
    icon: Sparkles,
    title: "IA como ferramenta de escala",
    desc: "Tecnologia de ponta para entregar mais rápido, mantendo qualidade de especialista.",
  },
  {
    icon: Puzzle,
    title: "White Label real",
    desc: "Seu cliente nunca sabe que existimos. Toda comunicação e entrega podem sair com a sua marca.",
  },
  {
    icon: Eye,
    title: "Entrega pixel perfect",
    desc: "Design e código alinhados desde o início.",
  },
  {
    icon: BadgeDollarSign,
    title: "Sem custos fixos",
    desc: "Pague por projeto. Sem equipe ociosa, sem overhead.",
  },
  {
    icon: Cpu,
    title: "Especialistas no impossível",
    desc: "Projetos que ninguém sabe como fazer? É com a gente.",
  },
];

const WhyMobSection = () => {
  return (
    <section id="por-que" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 radial-spotlight pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm font-mono text-warm uppercase tracking-widest">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Por que as agências escolhem a Mob</h2>
        </motion.div>

        {/* Imagem conceitual IA – altura limitada, pé da imagem cortado */}
        <motion.div
          className="w-full max-w-[50%] min-w-[280px] max-h-[200px] mx-auto mb-12 rounded-xl overflow-hidden border border-border shadow-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={iaConceitural}
            alt="Visualização de IA aplicada a software e produção multimídia"
            className="w-full h-full max-h-[200px] object-cover object-top"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 items-start p-5 rounded-xl border border-border bg-card card-glow"
            >
              <div className="w-10 h-10 rounded-lg bg-warm/15 border border-warm/30 flex items-center justify-center shrink-0">
                <b.icon className="text-warm" size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-sm mb-0.5">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-snug">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMobSection;
