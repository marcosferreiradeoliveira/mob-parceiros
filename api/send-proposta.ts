type ApiRequest = { method?: string; body?: { nome?: string; agencia?: string; demanda?: string; whatsapp?: string; descritivo?: string } };
type ApiResponse = { status: (n: number) => ApiResponse; json: (o: object) => void };

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const TO_EMAIL = "marcosferreira@mobcontent.com.br";

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY is not set");
    return res.status(500).json({ error: "Configuração do servidor incompleta" });
  }

  const { nome, agencia, demanda, whatsapp, descritivo } = req.body || {};
  if (!nome || !agencia || !demanda || !whatsapp) {
    return res.status(400).json({
      error: "Preencha todos os campos: nome, agência, demanda e WhatsApp.",
    });
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL || TO_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "Landing Mob Parceiros";

  const descritivoBlock = descritivo
    ? `<p><strong>Descritivo:</strong></p><p>${escapeHtml(descritivo).replace(/\n/g, "<br>")}</p>`
    : "";

  const htmlContent = `
    <h2>Nova solicitação de proposta técnica</h2>
    <p><strong>Nome do decisor:</strong> ${escapeHtml(nome)}</p>
    <p><strong>Agência:</strong> ${escapeHtml(agencia)}</p>
    <p><strong>Tipo de demanda:</strong> ${escapeHtml(demanda)}</p>
    <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp)}</p>
    ${descritivoBlock}
    <hr>
    <p><em>Enviado pelo formulário da landing Mob Parceiros.</em></p>
  `;

  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        to: [{ email: TO_EMAIL, name: "Marcos Ferreira" }],
        subject: `[Landing] Proposta técnica – ${escapeHtml(agencia)}`,
        htmlContent,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Brevo API error:", response.status, errText);
      return res.status(502).json({
        error: "Falha ao enviar. Tente novamente ou entre em contato pelo WhatsApp.",
      });
    }

    return res.status(200).json({ success: true });
  } catch (e) {
    console.error("Send error:", e);
    return res.status(500).json({
      error: "Erro ao enviar. Tente novamente em instantes.",
    });
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return String(text).replace(/[&<>"']/g, (c) => map[c] ?? c);
}
