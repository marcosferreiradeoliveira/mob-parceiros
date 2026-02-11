# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Vercel em mobcontent.com.br/landing (sem mexer na home)

Para servir esta landing em **mobcontent.com.br/landing** e manter a home em **mobcontent.com.br**:

1. **Este repositório**: faça deploy na Vercel como projeto separado. O `vercel.json` já usa `build:landing` e gera o site em `/landing`. Anote a URL do deploy (ex.: `https://mob-parceiros-xxx.vercel.app`).
2. **Site principal (mobcontent.com.br)**: no projeto Vercel do site principal, adicione rewrites apontando `/landing` e `/landing/*` para a URL do passo 1. Passo a passo e exemplo de `vercel.json`: [docs/vercel-rewrite-main-site.md](docs/vercel-rewrite-main-site.md).

Resultado: **mobcontent.com.br** = home atual; **mobcontent.com.br/landing** = esta landing.

---

Outras opções **gratuitas**:

### Vercel (deploy em subdomínio ou root)
- Plano gratuito generoso, deploy automático pelo GitHub.
1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub.
2. **Add New Project** → importe o repositório `mob-parceiros`.
3. Para **mobcontent.com.br/landing**: use o `vercel.json` atual (já configurado). Para deploy na raiz de outro domínio, em Settings altere Build Command para `npm run build` e ajuste os rewrites.
4. Deploy. O site fica em `https://mob-parceiros-xxx.vercel.app/landing` (ou na raiz, conforme a config).

### Netlify
- Também gratuito, integração direta com Git.
1. Acesse [netlify.com](https://netlify.com) e faça login com GitHub.
2. **Add new site** → **Import an existing project** → escolha o repositório.
3. O `netlify.toml` já define build e public folder; clique em Deploy.
4. URL tipo `https://nome-aleatorio.netlify.app` (domínio customizado no plano free).

### Cloudflare Pages
- Free, boa performance.
1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Selecione o repo; **Build command**: `npm run build`, **Build output directory**: `dist`.
3. Em **Build configuration** (opcional), adicione variável `NODE_VERSION` = `20`.
4. Deploy. URL: `https://mob-parceiros.pages.dev` (ou outro subdomínio).

### GitHub Pages (ainda gratuito para repositórios públicos)
1. No repositório: **Settings → Pages** → Source: **GitHub Actions**.
2. Push na `main`; o workflow publica em `https://<seu-usuario>.github.io/mob-parceiros/`.

**Lovable**

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
