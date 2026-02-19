import { motion } from "framer-motion";
import { Globe, LayoutDashboard, Sparkles } from "lucide-react";

const blocos = [
  {
    icon: Globe,
    title: "Sites e portais completos",
    bullets: [
      "Sites institucionais e hotsites de campanha que convertem.",
      "Portais de conteúdo com gestão simples para seu cliente.",
      "Entrega em prazo, com sua marca em evidência.",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Apps e plataformas web",
    bullets: [
      "Dashboards e áreas logadas sob medida para o negócio do cliente.",
      "Sistemas que escalam sem você precisar ter dev no time.",
      "Integrações com APIs e dados que fecham o projeto.",
    ],
  },
  {
    icon: Sparkles,
    title: "Multimídia e IA",
    bullets: [
      "Jogos sérios e experiências imersivas para campanhas e educação.",
      "Soluções com IA generativa e APIs que impressionam o cliente.",
      "Conteúdo e interfaces que entregam resultado mensurável.",
    ],
  },
];

const OQueFazemosSection = () => {
  return (
    <section id="o-que-fazemos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 radial-spotlight pointer-events-none opacity-50" />
      <div className="container mx-auto px-4 relative z-10 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-warm uppercase tracking-widest">O que fazemos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            O backoffice técnico que entrega o que sua criação imagina
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {blocos.map((bloco, i) => (
            <motion.div
              key={bloco.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-card card-glow"
            >
              <div className="w-10 h-10 rounded-lg bg-warm/15 border border-warm/30 flex items-center justify-center shrink-0">
                <bloco.icon className="text-warm" size={20} />
              </div>
              <h3 className="font-bold text-foreground">{bloco.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                {bloco.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-warm/80 mt-1.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OQueFazemosSection;
