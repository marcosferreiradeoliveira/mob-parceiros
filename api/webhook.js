export default async function handler(req, res) {
  const VERIFY_TOKEN = "oraculo_token_123";

  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    } else {
      return res.status(403).send("Erro de verificação");
    }
  }

  if (req.method === "POST") {
    console.log("Webhook recebido:");
    console.log(JSON.stringify(req.body, null, 2));

    return res.status(200).send("EVENT_RECEIVED");
  }

  return res.status(405).send("Método não permitido");
}
