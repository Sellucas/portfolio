export const baseUrl = "https://portfolio-sellucas-projects.vercel.app";

export const sidebarData = [
  {
    name: "Introdução",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/blog/projects", label: "Projetos" },
      { href: "/blog/articles", label: "Artigos" },
    ],
  },
  {
    name: "Práticas",
    links: [
      {
        href: "/blog/articles/versionamento-de-codigo",
        label: "Versionamento de código",
      },
      {
        href: "/blog/articles/internacionalizacao",
        label: "Internacionalização",
      },
      {
        href: "/blog/articles/gerenciamento-de-estado",
        label: "Gerenciamento de estado",
      },
    ],
  },
  {
    name: "Otimização",
    links: [
      {
        href: "/blog/articles/melhores-praticas-de-otimizacao",
        label: "Melhores práticas de otimização",
      },
      {
        href: "/blog/articles/lazy-loading-e-code-splitting",
        label: "Lazy Loading e Code Splitting",
      },
      {
        href: "/blog/articles/cache-em-uma-aplicação-next.js",
        label: "Cache em uma aplicação Next.js",
      },
      {
        href: "/blog/articles/nextjs-image-component",
        label: "Nextjs Image Component",
      },
    ],
  },
  {
    name: "Nextjs",
    links: [
      { href: "/blog/articles/api-com-nextjs", label: "API com Nextjs" },
      {
        href: "/blog/articles/implementando-rotas-protegidas",
        label: "Implementando rotas protegidas",
      },
      {
        href: "/blog/articles/articles-estatico-com-markdown",
        label: "Blog estático com Markdown",
      },
    ],
  },
  {
    name: "SEO",
    links: [
      {
        href: "/blog/articles/seo-para-aplicacoes-react",
        label: "SEO para aplicações React",
      },
      {
        href: "/blog/articles/seo-para-aplicacoes-nextjs",
        label: "SEO para aplicações Nextjs",
      },
      {
        href: "/blog/articles/open-graph-e-twitter-cards",
        label: "Open Graph e Twitter Cards",
      },
      {
        href: "/blog/articles/google-search-console",
        label: "Google Search Console",
      },
    ],
  },
  {
    name: "Database",
    links: [
      {
        href: "/blog/articles/integracao-de-bancos-de-dados",
        label: "Integração de bancos de dados",
      },
      { href: "/blog/articles/usando-prisma-orm", label: "Usando Prisma ORM" },
      { href: "/blog/articles/crud-supabase", label: "CRUD Supabase" },
    ],
  },
  {
    name: "Animação",
    links: [
      { href: "/blog/articles/botao-magnetico", label: "Botão magnético" },
      { href: "/blog/articles/zoom-parallax", label: "Zoom Parallax" },
      {
        href: "/blog/articles/transicao-de-pagina-nextjs",
        label: "Transição de página Nextjs",
      },
    ],
  },
  {
    name: "Dicas",
    links: [
      {
        href: "/blog/articles/10-dicas-de-desenvolvimento-web",
        label: "10 dicas de desenvolvimento web",
      },
      {
        href: "/blog/articles/erros-comuns-a-serem-evitados",
        label: "Erros comuns a serem evitados",
      },
      {
        href: "/blog/articles/depuracao-de-problemas",
        label: "Depuração de problemas",
      },
    ],
  },
];

export const faqData = [
  {
    value: "item-1",
    title: "Qual serviço você oferece?",
    description:
      "Presto serviços de desenvolvimento de landing pages e web app. Serviços complementares de design, animação e escrita também poderão ser prestados com base no projeto.",
  },
  {
    value: "item-2",
    title: "Quanto você cobra em uma landing page?",
    description:
      "O custo de uma landing page pode variar dependendo de vários fatores, integrações com sistemas externos, requisitos de otimização para mecanismos de busca (SEO) e outros. Geralmente, recomendo entrar em contato para discutir suas necessidades específicas, para fornecer um orçamento personalizado que atenda às suas expectativas e requisitos de projeto.",
  },
  {
    value: "item-3",
    title: "Com quais tecnologias você trabalha?",
    description:
      "Utilizo o Figma para criar o conceito do design, para a implementação da parte visual do projeto utilizo o React.js, para a parte de lógica do web app utilizo Node.js que me permite construir aplicações escaláveis e eficientes. Durante todo o processo de desenvolvimento, realizo testes para garantir a qualidade e a estabilidade do projeto, como cypress e jest.",
  },
  {
    value: "item-4",
    title: "Quanto tempo leva cada projeto?",
    description:
      "Em média, uma landing page pode levar cerca de duas semanas, desde a concepção inicial até os testes finais. Já um web app pode variar significativamente, desde algumas semanas para projetos mais simples até vários meses para projetos mais complexos.",
  },
  {
    value: "item-5",
    title: "Qual é o processo de cada projeto?",
    description:
      "Começando com um levantamento detalhado dos requisitos do cliente e uma fase de ideação, passo para a criação de wireframes e o desenvolvimento do design. Finalmente, transformo o design em código funcional, mantendo uma comunicação transparente com o cliente em todas as etapas.",
  },
];

export const servicesData = [
  {
    title: "Design e Desenvolvimento Web",
    description:
      "Soluções completas de design e desenvolvimento web, criando sites e aplicativos modernos.",
    header:
      "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?w=740&t=st=1714501522~exp=1714502122~hmac=eda5ad130f80aa2099ee93068435498589947a2237d7bda880242f743a95b5d1",
    className: "md:col-span-2",
  },
  {
    title: "Otimização de SEO",
    description:
      "Maximize sua visibilidade online e aumente seu tráfego orgânico.",
    header:
      "https://img.freepik.com/free-vector/seo-analytics-concept-illustration_114360-9862.jpg?w=740&t=st=1714501302~exp=1714501902~hmac=0a0a72140b3eda20f3bd5f2a2b17e52d4d3bd0a98a83f335a3dbaf27a2227e71",
    className: "md:col-span-1",
  },
  {
    title: "Alta Velocidade",
    description:
      "Prioridade em velocidade e o desempenho em todos os projetos.",
    header:
      "https://img.freepik.com/free-vector/fast-loading-concept-illustration_114360-747.jpg?w=826&t=st=1714504530~exp=1714505130~hmac=7f00a412cd0d491b56f10096a51e85695deb35c25c9fc7cdccf2fdb0fcc5bf86",
    className: "md:col-span-1",
  },
  {
    title: "Manutenção e Suporte",
    description:
      "Garantir que os sistemas desenvolvidos estejam sempre atualizados e funcionando corretamente.",
    header:
      "https://img.freepik.com/free-vector/business-growth-concept-illustration_114360-8766.jpg?w=740&t=st=1714505068~exp=1714505668~hmac=af20b6608bcdea378e0407f66ea62d116f34d0f986b8814246c2f792170c55e4",
    className: "md:col-span-2",
  },
];

export const marqueeData = [
  { title: "React & Next.js", description: "Estrutura Front-end" },
  { title: "Javascript", description: "Interação" },
  { title: "Framer Motion", description: "Animação" },
  { title: "Jest & Cypress", description: "Testes" },
  { title: "Node.js", description: "Estrutura Back-end" },
  { title: "PostgreSQL ", description: "Banco de Dados" },
];
