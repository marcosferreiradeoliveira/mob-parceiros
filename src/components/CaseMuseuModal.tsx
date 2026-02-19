import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Film } from "lucide-react";

const content = [
  {
    icon: Film,
    title: "Exposição fixa e motion graphics",
    text: "Produção de mais de 100 vídeos para exposição fixa e motion graphics do Museu da Língua Portuguesa, entregue pela mobCONTENT.",
  },
];

type CaseMuseuModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CaseMuseuModal = ({ open, onOpenChange }: CaseMuseuModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <span className="text-xs font-mono text-warm uppercase tracking-wider mr-2">Cultura & Produção</span>
            Museu da Língua Portuguesa
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

export default CaseMuseuModal;
