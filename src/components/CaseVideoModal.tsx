import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Video } from "lucide-react";

const content = [
  {
    icon: Video,
    title: "Para criativos, mídia e orgânico",
    text: "Solução de geração de vídeo com Inteligência Artificial voltada para criativos, mídia paga ou conteúdo orgânico. A mobCONTENT entrega produção escalável e personalizada com IA para suas campanhas e canais.",
  },
];

type CaseVideoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CaseVideoModal = ({ open, onOpenChange }: CaseVideoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <span className="text-xs font-mono text-warm uppercase tracking-wider mr-2">IA & Vídeo</span>
            Geração de Vídeo com IA
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseVideoModal;
