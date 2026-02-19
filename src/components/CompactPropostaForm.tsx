import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const demandas = ["Multimídia com IA", "Site/Plataforma", "App/Software", "Outros"];

const CompactPropostaForm = () => {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [demanda, setDemanda] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !whatsapp.trim() || !demanda) {
      toast.error("Preencha nome, WhatsApp e tipo de demanda.");
      return;
    }
    setSubmitting(true);
    window.mixpanel?.track("Formulário compacto - Envio iniciado", { tipo_demanda: demanda });
    try {
      const res = await fetch("/api/send-proposta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nome.trim(),
          agencia: "",
          demanda,
          whatsapp: whatsapp.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast.error(data.error || "Falha ao enviar. Tente novamente.");
        return;
      }
      toast.success("Proposta solicitada! Entraremos em contato em até 24h.");
      window.mixpanel?.track("Formulário compacto - Proposta enviada", { tipo_demanda: demanda });
      setNome("");
      setWhatsapp("");
      setDemanda("");
    } catch {
      toast.error("Erro de conexão. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="w-full max-w-2xl mx-auto"
    >
      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-border bg-card/80 backdrop-blur p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-end"
      >
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          maxLength={100}
          className="flex-1 min-w-0 rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <input
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="WhatsApp"
          maxLength={20}
          className="flex-1 min-w-0 rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <select
          value={demanda}
          onChange={(e) => setDemanda(e.target.value)}
          className="flex-1 min-w-0 rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
        >
          <option value="" className="bg-card text-muted-foreground">Tipo de demanda</option>
          {demandas.map((d) => (
            <option key={d} value={d} className="bg-card">{d}</option>
          ))}
        </select>
        <Button type="submit" variant="warm" size="sm" className="shrink-0" disabled={submitting}>
          {submitting ? "Enviando..." : (
            <>
              <Send size={16} />
              Proposta em 24h
            </>
          )}
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-2 text-center">
        Ou <button type="button" onClick={scrollToForm} className="text-warm underline hover:no-underline">preencher formulário completo</button> abaixo
      </p>
    </motion.div>
  );
};

export default CompactPropostaForm;
