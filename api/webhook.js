export default async function handler(req, res) {
  const VERIFY_TOKEN = "oraculo_token_123";
  const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN || "SEU_ACCESS_TOKEN_AQUI";

  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    } else {
      return res.sendStatus(403);
    }
  }

  if (req.method === "POST") {
    const entry = req.body.entry?.[0];
    const changes = entry?.changes?.[0];
    const message = changes?.value?.messages?.[0];

    if (message) {
      const from = message.from;
      const text = message.text?.body;

      console.log("Mensagem recebida:", text);

      if (ACCESS_TOKEN && ACCESS_TOKEN !== "SEU_ACCESS_TOKEN_AQUI") {
        await fetch("https://graph.facebook.com/v22.0/704056509467909/messages", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${ACCESS_TOKEN}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: from,
            text: {
              body: "Olá! Recebemos sua mensagem no Oráculo Cultural."
            }
          })
        });
      } else {
        console.warn("WHATSAPP_ACCESS_TOKEN não configurado. Configure em Vercel > Settings > Environment Variables.");
      }
    }

    return res.status(200).send("ok");
  }

  return res.sendStatus(405);
}
