import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BarChart3, Lightbulb, FileCheck, Wallet } from "lucide-react";

const content = [
  {
    icon: BarChart3,
    title: "Visão geral",
    text: "O Oraculo Cultural, desenvolvido pela mobCONTENT, é um sistema abrangente e impulsionado por Inteligência Artificial (IA), desenhado para otimizar e gerenciar projetos culturais, desde a concepção até a prestação de contas. Ele atua como um verdadeiro guia, maximizando as chances de sucesso na captação de recursos e assegurando a conformidade na execução, utilizando IA em todas as etapas críticas. O sistema é dividido em dois módulos principais: Criação e Execução.",
  },
  {
    icon: Lightbulb,
    title: "Módulo Criação — Base e conhecimento",
    text: "Ferramenta essencial para a pré-produção e captação, funcionando também como polo de conhecimento. Sua funcionalidade central é a importação automática de editais, detalhando critérios de seleção, textos, documentos, prazos, valores, categorias e listagem dos últimos projetos selecionados. O módulo oferece e-books instrutivos e podcasts explicativos sobre o panorama do mundo cultural e sobre os principais editais em vigor, capacitando o usuário.",
  },
  {
    icon: FileCheck,
    title: "Módulo Criação — IA e documentação",
    text: "Com essa base de informação, a IA do Oraculo Cultural oferece uma avaliação inteligente do seu projeto, atribuindo notas com base nos critérios do edital e nos perfis dos projetos já selecionados. O sistema gera sugestões de alteração e realiza a geração automática e inteligente das alterações dos textos (como justificativa e objetivos), otimizando a aderência ao edital. Além disso, o módulo agiliza a documentação, gerando textos base, orçamento e cronograma detalhados, e preenchendo automaticamente anexos e termos com dados fiscais da empresa. O sistema armazena histórico da empresa, clipping e relatórios estatísticos de ganhos/perdas, e atua como auditor financeiro prévio, comparando orçamentos com índices médios de mercado e avaliando a concentração excessiva de recursos em rubricas específicas.",
  },
  {
    icon: Wallet,
    title: "Módulo Execução",
    text: "Assume o controle assim que o projeto é aprovado, transformando o orçamento em um banco de dados de rubricas. Foco em conformidade e controle financeiro: importação e armazenamento de notas fiscais, com IA para avaliar se a nota atende a todos os requisitos do edital. Controle rigoroso do uso de rubricas, monitoramento do cronograma em função das notas emitidas, gestão de pendências e envio de mensagens automatizado aos fornecedores. Inclui banco de dados de fornecedores (dados fiscais e bancários) e Dashboard Estatístico para acompanhamento em tempo real da execução.",
  },
  {
    icon: BarChart3,
    title: "Em suma",
    text: "O Oraculo Cultural é a solução completa da mobCONTENT que digitaliza, automatiza e aplica Inteligência Artificial em todas as etapas do ciclo de vida do projeto cultural, garantindo maior eficiência e conformidade, e provendo o conhecimento necessário para o sucesso.",
  },
];

type CaseOraculoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CaseOraculoModal = ({ open, onOpenChange }: CaseOraculoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <span className="text-xs font-mono text-warm uppercase tracking-wider mr-2">Sistemas & Gestão</span>
            Oraculo Cultural — Dashboard de avaliação cultural
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

export default CaseOraculoModal;
