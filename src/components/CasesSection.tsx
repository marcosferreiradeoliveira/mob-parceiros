import { motion } from "framer-motion";
import { Brain, Gamepad2, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  {
    icon: Brain,
    tag: "Saúde & Tech",
    title: "App de Assistente Literário",
    description: "Solução com IA que conecta literatura e saúde mental, oferecendo suporte personalizado via interface intuitiva.",
  },
  {
    icon: Gamepad2,
    tag: "Inovação & Games",
    title: "Serious Game com IA",
    description: "Gamificação avançada com agentes de IA e vídeos generativos em tempo real.",
  },
  {
    icon: BarChart3,
    tag: "Sistemas & Gestão",
    title: "Dashboard de avaliação cultural",
    description: "Plataforma de avaliação de projetos culturais com análise via IA e analytics preditivo.",
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
            Cases em destaque
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
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{c.description}</p>
              <Button variant="glow-outline" size="sm" className="w-fit" asChild>
                <a href="#formulario">Ver Case Completo</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
