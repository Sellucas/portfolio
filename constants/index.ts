export const baseUrl = "https://portfolio-sellucas-projects.vercel.app";

export const sidebarData = [
  {
    name: "Introdução",
    links: [
      { href: "/", label: "Portfolio" },
      { href: "/projects", label: "Projetos" },
      { href: "/articles", label: "Artigos" },
    ],
  },
  {
    name: "Práticas",
    links: [
      {
        href: "/articles/versionamento-de-codigo",
        label: "Versionamento de código",
      },
      { href: "/articles/internacionalizacao", label: "Internacionalização" },
      {
        href: "/articles/gerenciamento-de-estado",
        label: "Gerenciamento de estado",
      },
    ],
  },
  {
    name: "Otimização",
    links: [
      {
        href: "/articles/melhores-praticas-de-otimizacao",
        label: "Melhores práticas de otimização",
      },
      {
        href: "/articles/lazy-loading-e-code-splitting",
        label: "Lazy Loading e Code Splitting",
      },
      {
        href: "/articles/cache-em-uma-aplicação-next.js",
        label: "Cache em uma aplicação Next.js",
      },
      { href: "/articles/nextjs-image-component", label: "Nextjs Image Component" },
    ],
  },
  {
    name: "Nextjs",
    links: [
      { href: "/articles/api-com-nextjs", label: "API com Nextjs" },
      {
        href: "/articles/implementando-rotas-protegidas",
        label: "Implementando rotas protegidas",
      },
      {
        href: "/articles/articles-estatico-com-markdown",
        label: "Blog estático com Markdown",
      },
    ],
  },
  {
    name: "SEO",
    links: [
      {
        href: "/articles/seo-para-aplicacoes-react",
        label: "SEO para aplicações React",
      },
      {
        href: "/articles/seo-para-aplicacoes-nextjs",
        label: "SEO para aplicações Nextjs",
      },
      {
        href: "/articles/open-graph-e-twitter-cards",
        label: "Open Graph e Twitter Cards",
      },
      { href: "/articles/google-search-console", label: "Google Search Console" },
    ],
  },
  {
    name: "Database",
    links: [
      {
        href: "/articles/integracao-de-bancos-de-dados",
        label: "Integração de bancos de dados",
      },
      { href: "/articles/usando-prisma-orm", label: "Usando Prisma ORM" },
      { href: "/articles/crud-supabase", label: "CRUD Supabase" },
    ],
  },
  {
    name: "Animação",
    links: [
      { href: "/articles/botao-magnetico", label: "Botão magnético" },
      { href: "/articles/zoom-parallax", label: "Zoom Parallax" },
      {
        href: "/articles/transicao-de-pagina-nextjs",
        label: "Transição de página Nextjs",
      },
    ],
  },
  {
    name: "Dicas",
    links: [
      {
        href: "/articles/10-dicas-de-desenvolvimento-web",
        label: "10 dicas de desenvolvimento web",
      },
      {
        href: "/articles/erros-comuns-a-serem-evitados",
        label: "Erros comuns a serem evitados",
      },
      { href: "/articles/depuracao-de-problemas", label: "Depuração de problemas" },
    ],
  },
];

export const projetos = [
  {
    title: "Prodify",
    description:
      "Aplicativo desenvolvido para ajudar os usuários a organizar suas tarefas, compromissos, objetivos e conhecimentos de forma eficiente e intuitiva",
    date: "2024-06-31",
    mediaSource: "/prodify-gif.mp4",
    link: "/projetos/prodify",
    mediaType: "video",
  },
  {
    title: "RegexSnap",
    description:
      "Mais de 50 snippets de regex predefinidos no VS Code para tratamento rápido e eficiente de expressões regulares. Simplifique a escrita de regex e aumente a produtividade.",
    date: "2024-02-27",
    mediaSource: "/regexsnap.png",
    link: "/projetos/regexsnap",
    mediaType: "image",
  },
];
