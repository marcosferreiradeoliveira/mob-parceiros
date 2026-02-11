import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Gamepad2, Search, Cpu, BookOpen } from "lucide-react";

const content = [
  {
    icon: Gamepad2,
    title: "Mecânica do jogo",
    text: "O jogo gira em torno de desafios de pesquisa que ocorrem inteiramente na plataforma online. Griô propõe missões relacionadas à vida de Baquaqua e ao contexto histórico de cada local que ele visitou.",
  },
  {
    icon: Search,
    title: "Pesquisa em acervos digitais",
    text: "Os jogadores mergulham em acervos digitais, acessam jornais da época, examinam documentos e realizam mecânicas de machine learning para predizer o futuro do personagem.",
  },
  {
    icon: BookOpen,
    title: "Exemplo de missão",
    text: "Os jogadores podem ser desafiados a investigar como Baquaqua conseguiu escapar da escravidão nos Estados Unidos e estabelecer-se no Haiti. Eles navegam por arquivos digitais, leem correspondências de época e analisam registros de emancipação para descobrir os detalhes dessa parte da jornada.",
  },
  {
    icon: Cpu,
    title: "Progressão",
    text: "Quando os jogadores completam a pesquisa e enviam suas descobertas na plataforma do jogo, eles \"cumprem\" a fase e avançam na história.",
  },
];

type CaseGrioModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CaseGrioModal = ({ open, onOpenChange }: CaseGrioModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <span className="text-xs font-mono text-warm uppercase tracking-wider mr-2">Inovação & Games</span>
            Serious Game com IA — Griô
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

export default CaseGrioModal;
