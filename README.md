# MFE_Credential

![Angular](https://img.shields.io/badge/Angular-19.2.0-DD0031?logo=angular&logoColor=white) ![SSR](https://img.shields.io/badge/SSR-Angular%20Universal-blue) ![Node LTS](https://img.shields.io/badge/Node-LTS-339933?logo=node.js&logoColor=white)

Projeto Microfrontend (MFE) para gerenciamento de credenciais, desenvolvido com Angular 19 e com suporte a Server-Side Rendering (Angular Universal).

## 📌 Visão geral

- Arquitetura: Microfrontend (MFE)
- Framework: Angular 19 (standalone components)
- SSR: Suporte via Angular Universal / `@angular/ssr`

## ⚙️ Extensões recomendadas (VS Code)

- 🧩 Angular Language Service
- 🔧 Angular 17 Snippets — TypeScript, HTML, Angular Material, ngRx, RxJS & Flex Layout
- 🎨 Color Highlight
- 🖼️ Material Icon Theme
- 🌈 Shades of Purple (tema)
- 🌑 Ayu (tema)

## 📁 Estrutura rápida

- `src/` — código fonte do app
- `src/main.ts` — bootstrap client
- `src/main.server.ts` — bootstrap para SSR (exporta função usada pelo servidor)
- `src/server.ts` — servidor Express + handler SSR

## 🚀 Execução / Scripts

Instale dependências:

```powershell
npm install
```

Scripts úteis (definidos em `package.json`):

- `npm start` — inicia o servidor de desenvolvimento (ng serve)
- `npm run build` — build da aplicação
- `npm run watch` — build em modo watch
- `npm test` — testes unitários
- `npm run serve:ssr:mfe_credential` — inicia o servidor SSR (executa o bundle do server)

### SSR (Angular Universal)

O projeto já inclui suporte a SSR. Fluxo mínimo:

1. Gerar builds (browser + server) — dependendo da sua configuração do Angular, pode ser `npm run build` ou `ng run <project>:server` seguido do build do browser.
2. Iniciar o servidor SSR:

```powershell
npm run serve:ssr:mfe_credential
```

O servidor, por padrão, escuta na porta `4000`.

## 🛠️ Notas técnicas rápidas

- Usamos `bootstrapApplication` com suporte a `BootstrapContext` no arquivo `src/main.server.ts` para garantir que a plataforma de servidor seja utilizada corretamente em cada request (evita o erro "Missing Platform").
- `app.config.server.ts` já inclui `provideServerRendering()` e `provideServerRouting()` para habilitar SSR e roteamento no servidor.

