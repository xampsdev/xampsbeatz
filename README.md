# XAMPSBEATZ — Portfólio musical

Site estático para apresentar o trabalho de XAMPSBEATZ como beatmaker de rap, hip-hop e trap. O projeto reúne apresentação profissional, playlists incorporadas e canais de contato em uma experiência responsiva e multilíngue.

> Projeto de estudo e portfólio, desenvolvido sem frameworks ou processo de build.

![Prévia do projeto](./previa-gif/xamps.gif)

## Acesso

[Ver o site publicado](https://xampsdev.github.io/xampsbeatz/)

## Funcionalidades

- Apresentação do produtor e de sua linha musical.
- Seleção de idioma em português, inglês e espanhol.
- Carregamento sob demanda das playlists do SoundCloud e YouTube.
- Players incorporados com `loading="lazy"`.
- Layout responsivo para desktop, tablet e celular.
- Animação respeitando a preferência de redução de movimento do sistema.
- Estados de foco visíveis e atributos ARIA nos controles interativos.
- Metadados básicos para SEO e compartilhamento social.

## Tecnologias e habilidades aplicadas

| Área | Aplicação no projeto |
| --- | --- |
| HTML5 | Estrutura semântica, metadados, favicon e acessibilidade básica. |
| CSS3 | Layout responsivo, flexbox, media queries, animações, gradientes e tipografia externa. |
| JavaScript | Renderização dinâmica dos players, eventos, troca de idioma e ano automático no rodapé. |
| Internacionalização | Conteúdo em PT-BR, inglês e espanhol centralizado em `traducoes.js`. |
| Integrações web | Embeds oficiais do SoundCloud e YouTube. |
| Boas práticas | Carregamento preguiçoso, `noopener noreferrer`, foco por teclado e `prefers-reduced-motion`. |
| Git e GitHub Pages | Versionamento e publicação de um site estático. |

## Estrutura

```text
.
├── favicon/          # Ícones e manifesto do site
├── imagem/           # Arte usada no título
├── previa-gif/       # Demonstração visual do projeto
├── index.html        # Estrutura e metadados da página
├── style.css         # Estilos, responsividade e animações
├── script.js         # Controle dos players incorporados
└── traducoes.js      # Textos e lógica de tradução
```

## Como executar localmente

Não há dependências para instalar. Clone o repositório e abra `index.html` em um navegador.

```bash
git clone https://github.com/xampsdev/xampsbeatz.git
cd xampsbeatz
```

Para carregar fontes, ícones, bandeiras e os players, é necessária conexão com a internet.

## Canais

- E-mail: [xampsbeatz@gmail.com](mailto:xampsbeatz@gmail.com)
- SoundCloud: [xampsbeatz](https://soundcloud.com/xampsbeatz/sets/xampsbeatz)
- YouTube: [@xampsbeatz](https://www.youtube.com/@xampsbeatz)

## Autor

Desenvolvido por [XAN (@xampsdev)](https://github.com/xampsdev).

## Licença

Distribuído sob a [licença MIT](./LICENSE).
