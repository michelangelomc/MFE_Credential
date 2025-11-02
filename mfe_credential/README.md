# MFE Credential

Este é um projeto de Microfrontend (MFE) para gerenciamento de credenciais, desenvolvido com Angular 19.2.8.

## Descrição

O MFE Credential é um módulo de microfrontend responsável pelo gerenciamento de credenciais, projetado para ser integrado em uma arquitetura de microfrontends. O projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) versão 19.2.8.

## Dependências Principais

- **Angular**: ^19.2.0
  - @angular/common
  - @angular/compiler
  - @angular/core
  - @angular/forms
  - @angular/platform-browser
  - @angular/platform-browser-dynamic
  - @angular/platform-server
  - @angular/router
  - @angular/ssr
- **Express**: ^4.18.2 (para SSR)
- **RxJS**: ~7.8.0
- **Zone.js**: ~0.15.0

## Dependências de Desenvolvimento

- **@angular-devkit/build-angular**: ^19.2.8
- **@angular/cli**: ^19.2.8
- **TypeScript**: ~5.7.2
- **Jasmine/Karma**: Para testes unitários
  - jasmine-core: ~5.6.0
  - karma: ~6.4.0

## Servidor de Desenvolvimento

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Server-Side Rendering (SSR)

Este projeto suporta Server-Side Rendering usando Angular Universal. Para executar em modo SSR:

1. Faça o build do projeto:
   ```bash
   ng build
   ```
2. Inicie o servidor SSR:
   ```bash
   npm run serve:ssr:mfe_credential
   ```

O servidor SSR estará disponível em `http://localhost:4000` por padrão.
