# Colocar a landing em mobcontent.com.br/landing (sem mexer na home)

## 1. Este repositório (landing)

- **Deploy na Vercel** como projeto separado (ex.: nome `mob-parceiros` ou `mob-landing`).
- O `vercel.json` já está configurado para build em `/landing` e rewrites.
- Após o deploy, anote a URL do projeto, ex.: `https://mob-parceiros-xxx.vercel.app`.

## 2. Site principal (mobcontent.com.br)

No **projeto Vercel do site principal** (que hoje serve mobcontent.com.br):

1. Abra **Settings → Domains** e confirme que `mobcontent.com.br` está apontando para esse projeto.
2. Crie ou edite o `vercel.json` **desse projeto** e adicione os **rewrites** abaixo (se já existir um `vercel.json`, coloque o bloco `rewrites` junto com o que já tiver):

```json
{
  "rewrites": [
    { "source": "/landing", "destination": "https://mob-parceiros-XXX.vercel.app/landing" },
    { "source": "/landing/:path*", "destination": "https://mob-parceiros-XXX.vercel.app/landing/:path*" }
  ]
}
```

3. Troque `https://mob-parceiros-XXX.vercel.app` pela **URL real** do deploy deste repositório (a que você anotou no passo 1).
4. Faça um novo deploy do site principal.

Resultado:

- **mobcontent.com.br** → continua sendo a home atual (nada muda).
- **mobcontent.com.br/landing** → passa a exibir esta landing (projeto mob-parceiros).

Os assets da landing (JS, CSS) serão carregados como `mobcontent.com.br/landing/...`, então a barra de endereço continua em mobcontent.com.br.
