import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const tiposProjeto = [
  "Site",
  "App/Plataforma",
  "Multimídia/IA",
  "Outro",
];

const WHATSAPP_URL = "https://wa.me/5521966225632?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20proposta%20técnica.";

const ContactForm = () => {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    demanda: "",
    descritivo: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.demanda || !form.whatsapp) {
      toast.error("Preencha nome, tipo de projeto e WhatsApp.");
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
        body: JSON.stringify({
          nome: form.nome,
          demanda: form.demanda,
          whatsapp: form.whatsapp,
          email: form.email,
          descritivo: form.descritivo,
        }),
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
      setForm({ nome: "", whatsapp: "", email: "", demanda: "", descritivo: "" });
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
              Conte o projeto que está no seu pipeline
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-5 card-glow"
          >
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Nome</label>
              <input
                type="text"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Seu nome"
                maxLength={100}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">WhatsApp</label>
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
                E-mail <span className="text-muted-foreground/70 font-normal">(opcional)</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="seu@email.com"
                maxLength={120}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Tipo de projeto</label>
              <select
                value={form.demanda}
                onChange={(e) => setForm({ ...form, demanda: e.target.value })}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
              >
                <option value="" className="bg-card text-muted-foreground">Selecione uma opção</option>
                {tiposProjeto.map((d) => (
                  <option key={d} value={d} className="bg-card text-foreground">{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Descreva rapidamente o projeto <span className="text-muted-foreground/70 font-normal">(opcional)</span>
              </label>
              <textarea
                value={form.descritivo}
                onChange={(e) => setForm({ ...form, descritivo: e.target.value })}
                placeholder="Breve descrição do projeto ou necessidade..."
                rows={3}
                maxLength={1000}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-y"
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
                  Quero uma proposta técnica em até 24h
                </>
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground pt-2">
              Resposta em até 24h úteis, sem compromisso.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full rounded-lg border-2 border-border bg-muted/50 px-4 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-muted hover:border-warm/50 hover:text-warm focus:outline-none focus:ring-2 focus:ring-warm/50"
            >
              <MessageCircle size={22} />
              Prefere falar direto no WhatsApp? Clique aqui
            </a>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
