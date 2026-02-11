import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Brain, ImageIcon, Users, Mic } from "lucide-react";

const content = [
  {
    icon: Brain,
    title: "Contexto e plataforma",
    text: "Oficina gratuita em parceria com a Área Programática 4.0 (Jacarepaguá), Museu Bispo do Rosário e CAPS II Jovelina Pérola Negra. Espaço seguro para usuários do sistema de saúde mental usarem a literatura e a escrita criativa como ferramenta de bem-estar e reintegração. O processo é centrado na fabulação: criar ficção (personagens e enredos) a partir de experiências e sentimentos, com proteção e liberdade para os autores.",
  },
  {
    icon: ImageIcon,
    title: "IA como Tradutora de Sentimentos",
    text: "Em momentos de bloqueio criativo, o participante descreve uma emoção em palavras (ex.: \"uma alegria que se parece com a luz do sol entrando pela janela depois de muitos dias de chuva\"). A IA gera imagens simbólicas e artísticas que espelham essa emoção, servindo de ponto de partida para poemas ou cenas de conto.",
  },
  {
    icon: Users,
    title: "IA como Arquiteta de Personagens",
    text: "O participante conversa com a IA para construir um personagem ficcional que externaliza, de forma segura e distanciada, uma faceta da sua experiência. Comandos como \"crie um personagem que é um viajante que coleciona sons de cidades que nunca mais visitará\" transformam sentimentos em personas, tornando a escrita mais lúdica e menos expositiva.",
  },
  {
    icon: Mic,
    title: "IA como Voz Neutra",
    text: "Os textos criados podem ser lidos em voz alta por uma voz neural calma e serena. Essa escuta distanciada permite que os autores apreciem suas criações como obras autônomas e se reconheçam como escritores e artistas.",
  },
];

type CaseLiterarioModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CaseLiterarioModal = ({ open, onOpenChange }: CaseLiterarioModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <span className="text-xs font-mono text-warm uppercase tracking-wider mr-2">Saúde & Tech</span>
            App de Assistente Literário
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 pt-2">
          {content.map((block) => (
            <div key={block.title} className="space-y-2">
              <div className="flex items-center gap-2">
                <block.icon className="h-5 w-5 text-warm shrink-0" />
                <h4 className="font-semibold text-foreground">{block.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-7">
                {block.text}
              </p>
            </div>
          ))}
          <div className="border-t border-border pt-4 mt-6">
            <p className="text-xs text-muted-foreground">
              Encontros semanais, 5h de imersão, com oficineiro de escrita criativa e facilitador em psicologia, em parceria com a equipe do CAPS. Público: 5 usuários selecionados com os profissionais da instituição. Produto final: e-book digital coletivo e anônimo com contos e poemas, distribuído gratuitamente.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseLiterarioModal;
