# Formulário com Brevo

O formulário "Solicitar proposta técnica" envia os dados para **marcosferreira@mobcontent.com.br** via API do Brevo.

## Configuração

1. **Chave da API Brevo**  
   Em [Brevo → API Keys](https://app.brevo.com/settings/keys/api) crie ou copie uma chave.

2. **Vercel**  
   No projeto: **Settings → Environment Variables**  
   - Nome: `BREVO_API_KEY`  
   - Valor: sua chave (ex.: `xkeysib-...`)  
   - Ambiente: Production (e Preview se quiser testar)

3. **Remetente (opcional)**  
   No Brevo, o remetente precisa estar verificado.  
   Se quiser outro e-mail que não o de destino, defina:
   - `BREVO_SENDER_EMAIL` = e-mail verificado
   - `BREVO_SENDER_NAME` = nome exibido

4. **Teste local**  
   Crie um arquivo `.env` na raiz (não commitar) com:
   ```env
   BREVO_API_KEY=sua_chave_aqui
   ```
   Para rodar a API em local com Vercel CLI: `npx vercel dev`.

## Fluxo

- O front envia `POST /api/send-proposta` com `{ nome, agencia, demanda, whatsapp }`.
- A função em `api/send-proposta.ts` chama a API do Brevo e envia um e-mail transacional para **marcosferreira@mobcontent.com.br** com esses dados.

**Importante:** não coloque a chave no código nem no repositório; use sempre variáveis de ambiente.
