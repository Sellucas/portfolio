import React from "react";
import Card from "@/components/Projects/Card/Card";
import scss from "./Projects.module.scss";
import Grid from "@/components/Projects/Grid/Grid";
import { useTranslation } from "react-i18next";

const boxDataCard = [
  {
    id: "1",
    className: "cardLeft",
    title: "QuickView",
    text: "Ferramenta que simplifica a gestão de informações importantes para o negócio. Apresenta dados de maneira visual e organizada, facilitando a compreensão e análise das métricas de desempenho. Com isso, tanto os gestores quanto os colaboradores podem identificar pontos de melhoria estratégica de forma clara e objetiva.",
    stack: "NextJS Typescript Sass MUI chartJS Vercel",
    github: "https://github.com/Sellucas/dashboard-app",
    link: "/",
    img: "https://static.vecteezy.com/ti/vetor-gratis/p3/4243615-vector-fundo-do-fundo-do-teaser-em-breve-criativo-gratis-vetor.jpg",
    alt: "QuickView Dashboard",
  },
  {
    id: "2",
    className: "cardRight",
    title: "IMPERIAL",
    text: "IMPERIAL é um E-commerce que reúne produtos como: Tema para Web, Mockups, Ícones, entre outros. Possui funcionalidades/recursos de itens de pesquisa, categorias de pesquisa, carrinho, detalhes do item.",
    stack: "React.js Redux ReactRouterDom Sass Vercel",
    github: "https://github.com/Sellucas/Ecommerce-App",
    link: "https://ecommerce-app-lake.vercel.app/",
    img: "https://user-images.githubusercontent.com/75432770/203575972-3d6d37e4-6ad4-468d-be61-71647346aa4b.png",
    alt: "IMPERIAL E-commerce",
  },
  {
    id: "3",
    className: "cardLeft",
    title: "SpiceRoute",
    text: "SpiceRoute é um projeto de restaurante fictício criado para fins de demonstração. O objetivo do projeto é mostrar a criação de um site para um restaurante, onde os clientes podem consultar o cardápio, fazer reservas e entrar em contato com o restaurante.",
    stack: "React.js Tailwind Material Tailwind React-reveal Vercel",
    github: "https://github.com/Sellucas/restaurant-website",
    link: "https://restaurant-website-sellucas.vercel.app/",
    img: "https://user-images.githubusercontent.com/75432770/226908964-ffb21ee1-fd90-410b-91df-8b76bdda2e1e.png",
    alt: "SpiceRoute Restaurant",
  },
];

const boxDataGrid = [
  {
    id: "1",
    title: "OTP-phone-verification",
    text: "Senha descartável ou senha de uso único é uma senha que é válida somente para uma sessão de login, transação, ou intervalo de tempo, em um sistema de computadores ou outros dispositivos digitais.",
    stack: "Typescript React Redux Sass",
    github: "https://github.com/Sellucas/OTP-phone-verification",
    link: "https://otp-phone-verification.vercel.app/",
  },
  {
    id: "2",
    title: "QRCode-generator",
    text: "O QR Code é uma versão bidimensional do código de barras, composto de padrões de pixels em preto e branco.",
    stack: "Typescript React Redux Sass",
    github: "https://github.com/Sellucas/QRCode-generator",
    link: "/",
  },
  {
    id: "3",
    title: "Weather-App",
    text: "Condições climáticas atuais de qualquer cidade ao redor do mundo, também obtém sua localização atual. Este aplicativo pode coletar dados como temperatura em graus Celsius, condições climáticas, localização, umidade e sensação.",
    stack: "Typescript React Redux Sass",
    github: "https://github.com/Sellucas/Weather-App",
    link: "https://sellucas.github.io/Weather-App/",
  },
  {
    id: "4",
    title: "Todo-list",
    text: "É um aplicativo de lista de tarefas que permite aos usuários gerenciar suas atividades diárias de forma eficiente.",
    stack: "Typescript React Redux Sass",
    github: "https://github.com/Sellucas/todo-list",
    link: "https://todo-list-sellucas.vercel.app/",
  },
  {
    id: "5",
    title: "Coming Soon",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus malesuada lectus a finibus. In sed libero eros. Fusce leo turpis, efficitur vel finibus ac!",
    stack: "Typescript React Redux Sass",
    github: "/",
    link: "/",
  },
  {
    id: "6",
    title: "Coming Soon",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus malesuada lectus a finibus. In sed libero eros. Fusce leo turpis, efficitur vel finibus ac!",
    stack: "Typescript React Redux Sass",
    github: "/",
    link: "/",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <main className={scss.page}>
      <div className={scss.container}>
        <div className={scss.sectionTitle}>
          <h3>{t("projectsTitle")}</h3>
          <hr />
          <p>{t("projectsDescription")}</p>
        </div>
        <section className={scss.topProjects}>
          <Card boxDataCard={boxDataCard} />
        </section>
        <div className={scss.sectionTitle}>
          <h3>{t("projectsNotable")}</h3>
          <hr />
          <p>{t("projectsNotableDescription")}</p>
        </div>
        <section className={scss.othersProjects}>
          <Grid boxDataGrid={boxDataGrid} />
        </section>
      </div>
    </main>
  );
};

export default Projects;
