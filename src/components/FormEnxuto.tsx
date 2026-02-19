import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const tiposProjeto = [
  "Site",
  "App/Plataforma",
  "Multimídia/IA",
  "Outro",
];

const FormEnxuto = () => {
  const [form, setForm] = useState({
    nome: "",
    agencia: "",
    whatsapp: "",
    demanda: "",
    descritivo: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const scrollToFullForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.demanda || !form.whatsapp) {
      toast.error("Preencha nome, tipo de projeto e WhatsApp.");
      window.mixpanel?.track("Formulário enxuto - Validação falhou", { campo: "obrigatórios" });
      return;
    }
    setSubmitting(true);
    window.mixpanel?.track("Formulário enxuto - Envio iniciado", {
      tipo_demanda: form.demanda,
      tem_descritivo: !!form.descritivo,
    });
    try {
      const res = await fetch("/api/send-proposta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          agencia: form.agencia,
          demanda: form.demanda,
          whatsapp: form.whatsapp,
          descritivo: form.descritivo,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast.error(data.error || "Falha ao enviar. Tente novamente.");
        window.mixpanel?.track("Formulário enxuto - Envio falhou", {
          tipo_demanda: form.demanda,
          status: res.status,
        });
        return;
      }
      toast.success("Proposta solicitada! Entraremos em contato em breve.");
      window.mixpanel?.track("Formulário enxuto - Proposta enviada", {
        tipo_demanda: form.demanda,
        tem_descritivo: !!form.descritivo,
      });
      setForm({ nome: "", agencia: "", whatsapp: "", demanda: "", descritivo: "" });
    } catch {
      toast.error("Erro de conexão. Tente novamente.");
      window.mixpanel?.track("Formulário enxuto - Erro de conexão", { tipo_demanda: form.demanda });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="w-full max-w-xl mx-auto"
    >
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border bg-card/95 backdrop-blur p-6 sm:p-8 shadow-xl card-glow space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Nome</label>
            <input
              type="text"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              placeholder="Seu nome"
              maxLength={100}
              className="w-full rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Agência</label>
            <input
              type="text"
              value={form.agencia}
              onChange={(e) => setForm({ ...form, agencia: e.target.value })}
              placeholder="Nome da agência"
              maxLength={100}
              className="w-full rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">WhatsApp</label>
            <input
              type="tel"
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              placeholder="(11) 99999-9999"
              maxLength={20}
              className="w-full rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Tipo de projeto</label>
            <select
              value={form.demanda}
              onChange={(e) => setForm({ ...form, demanda: e.target.value })}
              className="w-full rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
            >
              <option value="" className="bg-card text-muted-foreground">Selecione</option>
              {tiposProjeto.map((d) => (
                <option key={d} value={d} className="bg-card">{d}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1.5">
            Descreva rapidamente o projeto <span className="font-normal">(opcional)</span>
          </label>
          <textarea
            value={form.descritivo}
            onChange={(e) => setForm({ ...form, descritivo: e.target.value })}
            placeholder="Breve descrição do projeto ou necessidade..."
            rows={2}
            maxLength={1000}
            className="w-full rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y"
          />
        </div>
        <Button
          type="submit"
          variant="warm"
          size="lg"
          className="w-full"
          disabled={submitting}
        >
          {submitting ? "Enviando..." : (
            <>
              <Send size={18} />
              Solicitar proposta técnica em até 24h
            </>
          )}
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          Se faltar algum detalhe, entramos em contato por WhatsApp para entender melhor.
        </p>
        <p className="text-xs text-muted-foreground/80 text-center">
          Quer enviar mais informações?{" "}
          <button type="button" onClick={scrollToFullForm} className="text-warm underline hover:no-underline">
            Use o formulário completo no final da página
          </button>
        </p>
      </form>
    </motion.div>
  );
};

export default FormEnxuto;
