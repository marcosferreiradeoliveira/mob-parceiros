import { motion } from "framer-motion";
import { Brain, Gamepad2, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import autoridadeImage from "@/assets/autoridade.png";
import literarioImage from "@/assets/literario.png";
import grioaiImage from "@/assets/grioai-D5LjMd_2.png";
import oraculoImage from "@/assets/oraculo-BNY1HPZq.png";

const cases = [
  {
    icon: Brain,
    image: literarioImage,
    tag: "Saúde & Tech",
    title: "App de Assistente Literário",
    description: "Solução com IA que conecta literatura e saúde mental, oferecendo suporte personalizado via interface intuitiva.",
  },
  {
    icon: Gamepad2,
    image: grioaiImage,
    tag: "Inovação & Games",
    title: "Serious Game com IA",
    description: "Gamificação com agentes de IA e vídeos generativos em tempo real, entregue para projeto institucional de grande porte.",
  },
  {
    icon: BarChart3,
    image: oraculoImage,
    tag: "Sistemas & Gestão",
    title: "Dashboard de avaliação cultural",
    description: "Plataforma de avaliação de projetos culturais com análise via IA e analytics preditivo.",
  },
];

const CasesSection = () => {
  return (
    <section id="cases" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 radial-spotlight pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm font-mono text-warm uppercase tracking-widest">Portfólio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Cases em destaque
          </h2>
        </motion.div>
        {/* Showcase – 50% do tamanho */}
        <motion.div
          className="max-w-[24rem] w-full mx-auto mb-10 rounded-xl overflow-hidden border border-border shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={autoridadeImage}
            alt="Showcase de projetos: app mobile, dashboard analítico e interface de vídeo"
            className="w-full h-auto max-w-full object-cover"
          />
        </motion.div>
        {/* Grid: 2 colunas desktop, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-xl border border-border bg-card card-glow flex flex-col overflow-hidden"
            >
              <div className="aspect-video w-full overflow-hidden bg-muted/30">
                <img
                  src={c.image}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-lg bg-warm/15 border border-warm/30 flex items-center justify-center mb-4">
                  <c.icon className="text-warm" size={20} />
                </div>
                <span className="text-xs font-mono text-warm uppercase tracking-wider mb-2">{c.tag}</span>
                <h3 className="text-lg font-bold mb-2 leading-snug">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{c.description}</p>
                <Button variant="warm-outline" size="sm" className="w-fit" asChild>
                  <a href="#formulario">Ver Case Completo</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
