import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo número real (DDI + DDD + número, sem + ou espaços)
const DEFAULT_MESSAGE = "Olá! Quero ser parceiro da Mob.";

const FloatingWhatsApp = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-600 hover:shadow-orange-500/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Quero ser Parceiro via WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Quero ser Parceiro / WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;
