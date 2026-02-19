import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MapPin } from "lucide-react";

const content = [
  {
    icon: MapPin,
    title: "Exploração de áreas naturais",
    text: "Aplicativo voltado à exploração turística de áreas naturais, desenvolvido pela mobCONTENT para conectar usuários a trilhas, pontos de interesse e experiências na natureza.",
  },
];

type CaseTurismoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CaseTurismoModal = ({ open, onOpenChange }: CaseTurismoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <span className="text-xs font-mono text-warm uppercase tracking-wider mr-2">App & Turismo</span>
            App de Turismo
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

export default CaseTurismoModal;
