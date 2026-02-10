import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const demandas = ["Vídeo com IA", "Site/Plataforma", "App/Software", "Outros"];

const ContactForm = () => {
  const [form, setForm] = useState({
    nome: "",
    agencia: "",
    demanda: "",
    whatsapp: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.agencia || !form.demanda || !form.whatsapp) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Proposta solicitada! Entraremos em contato em breve.");
      setForm({ nome: "", agencia: "", demanda: "", whatsapp: "" });
    }, 1500);
  };

  return (
    <section id="formulario" className="py-24 relative">
      <div className="absolute inset-0 radial-form pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="text-sm font-mono text-primary uppercase tracking-widest">Próximo passo</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3">
              Solicite uma proposta <span className="text-gradient">técnica hoje.</span>
            </h2>
            <p className="text-muted-foreground">
              Garantimos sigilo total e entrega White Label.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-5 card-glow"
          >
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Nome do Decisor
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
                Nome da Agência
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
                Qual a demanda atual?
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
                WhatsApp para contato rápido
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

            <Button
              type="submit"
              variant="glow"
              size="lg"
              className="w-full text-base py-6 mt-2"
              disabled={submitting}
            >
              {submitting ? (
                "Enviando..."
              ) : (
                <>
                  <Send size={18} />
                  Solicitar Proposta Técnica
                </>
              )}
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
              <ShieldCheck size={14} className="text-primary" />
              <span>Seus dados estão seguros. Sigilo total garantido.</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
