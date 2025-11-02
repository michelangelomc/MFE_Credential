## ❌ Erro: "Plataforma ausente" (Missing Platform)

Descrição breve:

Ao executar Server-Side Rendering (SSR) você pode ver uma mensagem de erro semelhante a:

> Plataforma ausente: Isso pode ocorrer devido ao uso de `bootstrapApplication` no servidor sem passar um `BootstrapContext`. Certifique-se de que `bootstrapApplication` seja chamado com um argumento `context`.

O problema ocorre quando a função de bootstrap usada pelo mecanismo SSR chama `bootstrapApplication` sem receber/repassar o `BootstrapContext` que contém a `platformRef` do servidor — sem essa plataforma, o Angular não consegue inicializar corretamente no ambiente server.

### Causas comuns

- A função exportada em `src/main.server.ts` chama `bootstrapApplication(AppComponent, config)` sem aceitar `context`.
- Falta de providers de SSR (por exemplo, não usar `provideServerRendering()` no `ApplicationConfig`).
- Handler/engine SSR personalizado não passando corretamente o `BootstrapContext` para a função de bootstrap.

### Soluções (enumeradas)

1) Correção mínima: repassar `BootstrapContext`

	- Edite `src/main.server.ts` para aceitar `BootstrapContext` e repassar para `bootstrapApplication`:

	```ts
	import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
	import { AppComponent } from './app/app.component';
	import { config } from './app/app.config.server';

	const bootstrap = (context?: BootstrapContext) =>
	  bootstrapApplication(AppComponent, config, context);

	export default bootstrap;
	```

	- Por que funciona: o engine SSR (ex.: `AngularNodeAppEngine` ou `renderApplication`) passa o `BootstrapContext` para sua função exportada; repassá-lo garante que a plataforma server seja usada.

2) Verificar e incluir providers SSR

	- Confirme que seu `app.config.server.ts` (ou arquivo equivalente) inclui `provideServerRendering()` e `provideServerRouting()` quando necessário:

	```ts
	import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
	import { provideServerRendering } from '@angular/platform-server';
	import { provideServerRouting } from '@angular/ssr';
	// ...
	const serverConfig: ApplicationConfig = {
	  providers: [
		 provideServerRendering(),
		 provideServerRouting(serverRoutes),
	  ]
	};
	export const config = mergeApplicationConfig(appConfig, serverConfig);
	```

3) Usar `renderApplication` / `platformServer` quando apropriado

	- Em cenários onde você controla a renderização manualmente, prefira `renderApplication` ou garantir que `platformServer()` seja usado para criar a plataforma server e passada via `BootstrapContext`.

4) Para apps com `NgModule` (não-standalone)

	- Use `platformServer().bootstrapModule(AppServerModule)` ou `renderModule` (API legada) em vez de `bootstrapApplication`.

5) Inspecionar o engine/handler SSR

	- Se você usa `AngularNodeAppEngine`, verifique se ele está chamando sua função exportada corretamente. Caso escreva um handler customizado, ele deve chamar a função bootstrap passando o `BootstrapContext` recebido.

### Passo a passo prático para correção

1. Localize o arquivo de bootstrap SSR (normalmente `src/main.server.ts`).
2. Modifique a função exportada para aceitar `context?: BootstrapContext` e repasse ao chamar `bootstrapApplication` (ver Solução 1).
3. Confirme em `app.config.server.ts` que `provideServerRendering()` está configurado.
4. Limpe builds antigos (`dist/`, `.angular/cache`) para evitar caches conflitantes.
5. Execute o build e o servidor SSR localmente:

```powershell
npm install
npm run build
npm run serve:ssr:mfe_credential
```

6. Acesse `http://localhost:4000` e verifique se a página foi renderizada sem a RuntimeError.
7. Se ainda ocorrer, adicione um log temporário para inspecionar o `context`:

```ts
const bootstrap = (context?: BootstrapContext) => {
  console.log('SSR bootstrap context present:', !!context);
  return bootstrapApplication(AppComponent, config, context);
};
```

### Checklist rápido

- [ ] `src/main.server.ts` exporta função default que aceita `BootstrapContext` e repassa para `bootstrapApplication`.
- [ ] `app.config.server.ts` inclui `provideServerRendering()`.
- [ ] Handler SSR (ex.: `server.ts`) usa engine que invoca a função exportada corretamente.
- [ ] Builds atualizados e servidor SSR testado localmente.