import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const demandas = ["Multimídia com IA", "Site/Plataforma", "App/Software", "Outros"];

const ContactForm = () => {
  const [form, setForm] = useState({
    nome: "",
    agencia: "",
    demanda: "",
    whatsapp: "",
    descritivo: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.agencia || !form.demanda || !form.whatsapp) {
      toast.error("Por favor, preencha todos os campos.");
      window.mixpanel?.track("Formulário - Validação falhou", { campo: "obrigatórios" });
      return;
    }
    setSubmitting(true);
    window.mixpanel?.track("Formulário - Envio iniciado", {
      tipo_demanda: form.demanda,
      tem_descritivo: !!form.descritivo,
    });
    try {
      const res = await fetch("/api/send-proposta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast.error(data.error || "Falha ao enviar. Tente novamente.");
        window.mixpanel?.track("Formulário - Envio falhou", {
          tipo_demanda: form.demanda,
          status: res.status,
        });
        return;
      }
      toast.success("Proposta solicitada! Entraremos em contato em breve.");
      window.mixpanel?.track("Formulário - Proposta enviada", {
        tipo_demanda: form.demanda,
        tem_descritivo: !!form.descritivo,
      });
      setForm({ nome: "", agencia: "", demanda: "", whatsapp: "", descritivo: "" });
    } catch {
      toast.error("Erro de conexão. Tente novamente.");
      window.mixpanel?.track("Formulário - Erro de conexão", { tipo_demanda: form.demanda });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="formulario" className="py-24 relative bg-secondary/40">
      <div className="absolute inset-0 radial-form pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3">
              Tem um projeto complexo no pipeline? Vamos tirar do papel.
            </h2>
            <p className="text-muted-foreground mb-2">
              Receba uma proposta técnica inicial em até 24 horas. Sem compromisso.
            </p>
            <p className="text-sm text-muted-foreground/90">
              Estamos abrindo poucas parcerias novas por mês para manter a qualidade de entrega.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-5 card-glow"
          >
            <p className="text-sm font-mono text-warm uppercase tracking-widest mb-4">Formulário</p>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Nome do decisor
              </label>
              <input
                type="text"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Seu nome completo"
                maxLength={100}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Nome da agência
              </label>
              <input
                type="text"
                value={form.agencia}
                onChange={(e) => setForm({ ...form, agencia: e.target.value })}
                placeholder="Nome da sua agência"
                maxLength={100}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Tipo de demanda
              </label>
              <select
                value={form.demanda}
                onChange={(e) => setForm({ ...form, demanda: e.target.value })}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
              >
                <option value="" className="bg-card text-muted-foreground">Selecione uma opção</option>
                {demandas.map((d) => (
                  <option key={d} value={d} className="bg-card text-foreground">{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                WhatsApp
              </label>
              <input
                type="tel"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                placeholder="(11) 99999-9999"
                maxLength={20}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Descritivo
              </label>
              <textarea
                value={form.descritivo}
                onChange={(e) => setForm({ ...form, descritivo: e.target.value })}
                placeholder="Descreva brevemente o projeto ou a necessidade..."
                rows={4}
                maxLength={2000}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-y min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              variant="warm"
              size="lg"
              className="w-full text-base py-6 mt-2"
              disabled={submitting}
            >
              {submitting ? (
                "Enviando..."
              ) : (
                <>
                  <Send size={18} />
                  Solicitar proposta técnica
                </>
              )}
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
              <ShieldCheck size={14} className="text-warm" />
              <span>Seus dados estão seguros. Sigilo total garantido.</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
