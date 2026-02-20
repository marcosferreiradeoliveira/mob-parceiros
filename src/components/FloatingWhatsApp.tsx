import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

const WHATSAPP_NUMBER = "5521966225632";
const DEFAULT_MESSAGE = "Olá! Quero ser parceiro da Mob.";

const FloatingWhatsApp = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("flutuante")}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-warm px-5 py-3 text-sm font-semibold text-warm-foreground shadow-lg transition-all hover:bg-warm/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-warm focus:ring-offset-2 focus:ring-offset-background hover:shadow-[0_0_24px_hsl(var(--glow-warm)/0.35)]"
      aria-label="Quero ser Parceiro via WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Quero ser Parceiro / WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;
