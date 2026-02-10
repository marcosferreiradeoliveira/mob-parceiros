import { motion } from "framer-motion";
import { Brain, Gamepad2, BarChart3 } from "lucide-react";

const cases = [
  {
    icon: Brain,
    tag: "Saúde & Tech",
    title: "App de Assistente Literário para pacientes psiquiátricos",
    description: "Solução com IA que conecta literatura e saúde mental, oferecendo suporte personalizado via interface intuitiva.",
  },
  {
    icon: Gamepad2,
    tag: "Inovação & Games",
    title: "Serious Game com agentes de IA e vídeos generativos",
    description: "Gamificação avançada com inteligência artificial autônoma e geração de conteúdo visual em tempo real.",
  },
  {
    icon: BarChart3,
    tag: "Sistemas & Gestão",
    title: "Plataforma de Avaliação de Projetos Culturais com análise via IA",
    description: "Dashboard inteligente que automatiza a avaliação e gestão de projetos culturais com analytics preditivo.",
  },
];

const CasesSection = () => {
  return (
    <section id="cases" className="py-24 relative">
      <div className="absolute inset-0 radial-spotlight pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">Portfólio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Cases que provam a <span className="text-gradient">engenharia</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-xl border border-border bg-card p-8 card-glow flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <c.icon className="text-primary" size={24} />
              </div>
              <span className="text-xs font-mono text-primary uppercase tracking-wider mb-3">{c.tag}</span>
              <h3 className="text-lg font-bold mb-3 leading-snug">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
