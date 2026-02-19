import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Gamepad2, BarChart3, Film, MapPin, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import CaseLiterarioModal from "@/components/CaseLiterarioModal";
import CaseGrioModal from "@/components/CaseGrioModal";
import CaseOraculoModal from "@/components/CaseOraculoModal";
import CaseMuseuModal from "@/components/CaseMuseuModal";
import CaseTurismoModal from "@/components/CaseTurismoModal";
import CaseVideoModal from "@/components/CaseVideoModal";
import literarioImage from "@/assets/literario.png";
import grioaiImage from "@/assets/grioai-D5LjMd_2.png";
import oraculoImage from "@/assets/oraculo-BNY1HPZq.png";
import museuImage from "@/assets/cropped-MuseuDaLinguaPOrtuguesa2.jpg";
import turismoImage from "@/assets/MG_0671-1024x683.jpg";
import videoImage from "@/assets/iavideo.jpeg";

const cases = [
  {
    id: "literario",
    icon: Brain,
    image: literarioImage,
    tag: "Saúde & Tech",
    title: "App de Assistente Literário",
    description: "Solução com IA que conecta literatura e saúde mental, oferecendo suporte personalizado via interface intuitiva.",
    result: "App entregue para uso em contexto de saúde mental e leitura.",
  },
  {
    id: "grioai",
    icon: Gamepad2,
    image: grioaiImage,
    tag: "Inovação & Games",
    title: "Serious Game com IA",
    description: "Gamificação com agentes de IA e multimídia generativa em tempo real, entregue para projeto institucional de grande porte.",
    result: "Jogo educativo em acervos digitais para instituição de referência.",
  },
  {
    id: "oraculo",
    icon: BarChart3,
    image: oraculoImage,
    tag: "Sistemas & Gestão",
    title: "Dashboard de avaliação cultural",
    description: "Plataforma de avaliação de projetos culturais com análise via IA e analytics preditivo.",
    result: "Sistema completo de captação à prestação de contas com IA.",
  },
  {
    id: "museu",
    icon: Film,
    image: museuImage,
    tag: "Cultura & Produção",
    title: "Museu da Língua Portuguesa",
    description: "Produção de mais de 100 vídeos para exposição fixa e motion graphics.",
    result: "Produção em parceria com agência para exposição fixa e experiências digitais no museu.",
  },
  {
    id: "turismo",
    icon: MapPin,
    image: turismoImage,
    tag: "App & Turismo",
    title: "App de Turismo",
    description: "Aplicativo voltado à exploração turística de áreas naturais.",
    result: "App de exploração de trilhas e áreas naturais entregue.",
  },
  {
    id: "video",
    icon: Video,
    image: videoImage,
    tag: "IA & Vídeo",
    title: "Geração de Vídeo com IA",
    description: "Voltado para criativos, mídia ou orgânico.",
    result: "Produção escalável de vídeo com IA para campanhas e orgânico.",
  },
];

const CasesSection = () => {
  const [literarioModalOpen, setLiterarioModalOpen] = useState(false);
  const [grioModalOpen, setGrioModalOpen] = useState(false);
  const [oraculoModalOpen, setOraculoModalOpen] = useState(false);
  const [museuModalOpen, setMuseuModalOpen] = useState(false);
  const [turismoModalOpen, setTurismoModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
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
            Alguns projetos que ajudamos agências a tirar do papel
          </h2>
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
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-2">{c.description}</p>
                {c.result && (
                  <p className="text-xs text-warm/90 font-medium mb-4">{c.result}</p>
                )}
                {c.id === "literario" ? (
                  <>
                    <Button variant="warm-outline" size="sm" className="w-fit" onClick={() => setLiterarioModalOpen(true)}>
                      Ver Case Completo
                    </Button>
                    <CaseLiterarioModal open={literarioModalOpen} onOpenChange={setLiterarioModalOpen} />
                  </>
                ) : c.id === "grioai" ? (
                  <>
                    <Button variant="warm-outline" size="sm" className="w-fit" onClick={() => setGrioModalOpen(true)}>
                      Ver Case Completo
                    </Button>
                    <CaseGrioModal open={grioModalOpen} onOpenChange={setGrioModalOpen} />
                  </>
                ) : c.id === "oraculo" ? (
                  <>
                    <Button variant="warm-outline" size="sm" className="w-fit" onClick={() => setOraculoModalOpen(true)}>
                      Ver Case Completo
                    </Button>
                    <CaseOraculoModal open={oraculoModalOpen} onOpenChange={setOraculoModalOpen} />
                  </>
                ) : c.id === "museu" ? (
                  <>
                    <Button variant="warm-outline" size="sm" className="w-fit" onClick={() => setMuseuModalOpen(true)}>
                      Ver Case Completo
                    </Button>
                    <CaseMuseuModal open={museuModalOpen} onOpenChange={setMuseuModalOpen} />
                  </>
                ) : c.id === "turismo" ? (
                  <>
                    <Button variant="warm-outline" size="sm" className="w-fit" onClick={() => setTurismoModalOpen(true)}>
                      Ver Case Completo
                    </Button>
                    <CaseTurismoModal open={turismoModalOpen} onOpenChange={setTurismoModalOpen} />
                  </>
                ) : c.id === "video" ? (
                  <>
                    <Button variant="warm-outline" size="sm" className="w-fit" onClick={() => setVideoModalOpen(true)}>
                      Ver Case Completo
                    </Button>
                    <CaseVideoModal open={videoModalOpen} onOpenChange={setVideoModalOpen} />
                  </>
                ) : (
                  <Button variant="warm-outline" size="sm" className="w-fit" asChild>
                    <a href="#formulario">Ver Case Completo</a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
