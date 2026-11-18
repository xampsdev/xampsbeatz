# XAMPSBEATZ

Portfólio musical de **XAMPSBEATZ** — beatmaker e produtor especializado em **Trap, Hip Hop e Rap** com mais de 10 anos de experiência em **FL Studio**.

**[Acessar portfólio publicado →](https://xampsdev.github.io/xampsbeatz/)**

![XAMPSBEATZ Preview](./public/preview.svg)

---

## Sobre o Projeto & Evolução

O projeto nasceu originalmente como um site estático em HTML5, CSS3 e JavaScript puro, sem etapa de build. Ao longo das iterações de refatoração, a aplicação evoluiu para uma **Single Page Application (SPA)** modular com tipagem estrita e deploy automatizado.

### Resumo das melhorias implementadas

- **Migração arquitetural para SPA:** Conversão do código estático (`index.html`, `style.css`, `script.js`, `traducoes.js`) para componentes React, TypeScript estrito, Vite e Tailwind CSS v4.
- **Reprodução sob demanda (SoundCloud & YouTube):** Implementação inicial de player persistente com integrações via SoundCloud Widget API e YouTube IFrame API, posteriormente enxugada para embeds oficiais sob demanda (**SoundCloud Player** e `LiteYouTubeEmbed` com thumbnail original do vídeo via `i.ytimg.com` e botão para fechar o player após o carregamento).
- **Identidade visual prismática:** Adoção da paleta extraída da arte animada usada no wordmark `XAMPSBEATZ` (`abstract-rainbow-glitch.webp`), combinando fundo escuro `#07070B`, superfícies `#11121A` e acentos `#FFD600`, `#FF0099`, `#A81CFF` e `#00E5FF`, além de favicon vetorial dedicado em `public/favicon.svg`.
- **Internacionalização via Context API:** Alternância instantânea entre **Português (`pt-BR`)** e **Inglês (`en`)** sincronizada com o atributo `lang` do documento.
- **Limpeza de código morto e otimização de performance:** Remoção de componentes, assets binários e dependências não utilizadas (incluindo `express`, scripts de SDK em segundo plano e iframes ocultos), adição de cleanup de `IntersectionObserver` e listeners de `prefers-reduced-motion`, mantendo o bundle leve e zero avisos de compilação.

---

## Fluxo de Desenvolvimento & IA Assistida

As evoluções, auditorias de código e refatorações do repositório seguem um fluxo estruturado com ferramentas de IA e CI/CD:

- **Google Gemini:** Planejamento arquitetural, definição de especificações estruturais, auditoria de código morto e revisão de performance.
- **Google AI Studio (Build Mode):** Prototipação iterativa de interface, refatoração modular de componentes React/TypeScript, validação em preview em tempo real e sincronização com o repositório.
- **GitHub & GitHub Actions:** Controle de versão na branch `main` e pipeline automatizado de build e publicação no GitHub Pages via `.github/workflows/deploy.yml`.

---

## Stack Tecnológica & Arquitetura

### Tecnologias ativas no projeto

| Camada | Tecnologia | Uso no projeto |
| --- | --- | --- |
| Interface | **React 19** (`react`, `react-dom`) | Arquitetura baseada em componentes funcionais e Context API. |
| Tipagem | **TypeScript** (`strict: true`, `noUnusedLocals`) | Segurança de tipos e validação em tempo de compilação (`tsc --noEmit`). |
| Bundler | **Vite 8** (`@vitejs/plugin-react`) | Servidor de desenvolvimento e build de produção com `base: '/xampsbeatz/'`. |
| Estilização | **Tailwind CSS v4** (`@tailwindcss/vite`) | Estilização utilitária, tokens de tema e animações com suporte a `prefers-reduced-motion`. |
| Ícones | **Lucide React** + SVGs customizados | Ícones de interface (`ArrowDownRight`, `Play`, `X`) e marcas SoundCloud/YouTube. |
| Mídia | **SoundCloud Embed** & **LiteYouTubeEmbed** | Carregamento preguiçoso de playlists oficiais sob clique do usuário. |

### Organização de pastas

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline CI/CD para GitHub Pages
├── public/
│   ├── imagem/
│   │   └── abstract-rainbow-glitch.webp
│   ├── favicon.svg             # Favicon vetorial minimalista
│   └── preview.svg             # Banner de visualização do portfólio
├── src/
│   ├── assets/
│   │   └── images/             # Capa fallback para o embed do YouTube
│   ├── components/
│   │   ├── icons/
│   │   │   └── BrandIcons.tsx  # Ícones SVG SoundCloud e YouTube
│   │   ├── Header.tsx          # Barra de navegação superior fixa
│   │   └── LiteYouTubeEmbed.tsx# Player YouTube sob demanda com thumbnail e fechar
│   ├── context/
│   │   └── LanguageContext.tsx # Provedor de idioma (pt-BR / en)
│   ├── data/
│   │   └── beats.ts            # URLs oficiais de playlists/perfis e fallback
│   ├── hooks/
│   │   └── useScrollReveal.ts  # Hook IntersectionObserver com prefers-reduced-motion
│   ├── i18n/
│   │   └── translations.ts     # Dicionário tipado PT-BR e EN
│   ├── types/
│   │   └── index.ts            # Interfaces e tipos compartilhados
│   ├── App.tsx                 # Composição principal da aplicação
│   ├── index.css               # Configuração Tailwind v4 e animação do wordmark
│   ├── main.tsx                # Ponto de entrada React
│   └── vite-env.d.ts           # Declarações de ambiente Vite
├── index.html                  # Metadados SEO, fontes e favicon SVG
├── package.json                # Dependências e scripts npm
├── tsconfig.json               # Configuração estrita do TypeScript
└── vite.config.ts              # Configuração Vite e base '/xampsbeatz/'
```

---

## Como Executar Localmente & Deploy

### Pré-requisitos

- **Node.js 22+** e **npm**

### Execução local

```bash
git clone https://github.com/xampsdev/xampsbeatz.git
cd xampsbeatz
npm install
npm run dev
```

Scripts disponíveis no `package.json`:

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento Vite na porta `3000`. |
| `npm run lint` | Executa a checagem de tipos (`tsc --noEmit`). |
| `npm run build` | Valida o TypeScript e gera o build otimizado em `./dist` com `base: '/xampsbeatz/'`. |
| `npm run preview` | Serve localmente o build gerado em `./dist`. |

### Deploy automatizado (GitHub Pages)

O arquivo `.github/workflows/deploy.yml` automatiza a publicação a cada push na branch `main` (ou disparo manual via `workflow_dispatch`):

1. Instala as dependências com `npm ci` em Node.js 22.
2. Executa `npx tsc --noEmit && npm run build`.
3. Publica o diretório `./dist` no GitHub Pages usando `actions/upload-pages-artifact@v3` e `actions/deploy-pages@v4`.

---

## Canais & Autor

- **E-mail:** [xampsbeatz@gmail.com](mailto:xampsbeatz@gmail.com)
- **SoundCloud:** [soundcloud.com/xampsbeatz](https://soundcloud.com/xampsbeatz)
- **YouTube:** [@xampsbeatz](https://www.youtube.com/@xampsbeatz)
- **Autor:** [XAN (@xampsdev)](https://github.com/xampsdev)

Distribuído sob a [licença MIT](./LICENSE).
