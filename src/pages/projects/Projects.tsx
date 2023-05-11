import React from "react";
import Card from "@/components/Projects/Card/Card";
import scss from "./Projects.module.scss";
import Grid from "@/components/Projects/Grid/Grid";
import { useTranslation, Trans } from "react-i18next";

const boxDataGrid = [
  {
    id: "1",
    title: "Apple Music",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus malesuada lectus a finibus. In sed libero eros. Fusce leo turpis, efficitur vel finibus ac!",
    stack: "Typescript React Redux Sass",
  },
  {
    id: "2",
    title: "Box 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus malesuada lectus a finibus. In sed libero eros. Fusce leo turpis, efficitur vel finibus ac!",
    stack: "Typescript React Redux Sass",
  },
  {
    id: "3",
    title: "Box 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus malesuada lectus a finibus. In sed libero eros. Fusce leo turpis, efficitur vel finibus ac!",
    stack: "Typescript React Redux Sass",
  },
  {
    id: "4",
    title: "Box 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus malesuada lectus a finibus. In sed libero eros. Fusce leo turpis, efficitur vel finibus ac!",
    stack: "Typescript React Redux Sass",
  },
  {
    id: "5",
    title: "Box 5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus malesuada lectus a finibus. In sed libero eros. Fusce leo turpis, efficitur vel finibus ac!",
    stack: "Typescript React Redux Sass",
  },
  {
    id: "6",
    title: "Box 6",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus malesuada lectus a finibus. In sed libero eros. Fusce leo turpis, efficitur vel finibus ac!",
    stack: "Typescript React Redux Sass",
  },
];

const boxDataCard = [
  {
    id: "1",
    className: "cardLeft",
    title: "QuickView",
    text: "Ferramenta que simplifica a gestão de informações importantes para o negócio. Apresenta dados de maneira visual e organizada, facilitando a compreensão e análise das métricas de desempenho. Com isso, tanto os gestores quanto os colaboradores podem identificar pontos de melhoria estratégica de forma clara e objetiva.",
    stack: "ReactJs NextJS Typescript Sass MUI chartJS Vercel",
    github: "ReactJs NextJS Typescript Sass MUI chartJS Vercel",
    link: "ReactJs NextJS Typescript Sass MUI chartJS Vercel",
    img: "empty.png",
    alt: "QuickView Dashboard",
  },
  {
    id: "2",
    className: "cardRight",
    title: "Box 2",
    text: "IMPERIAL é um E-commerce que reúne produtos como: Tema para Web, Mockups, Ícones, entre outros. Possui funcionalidades/recursos de itens de pesquisa, categorias de pesquisa, carrinho, detalhes do item.",
    stack: "React.js Redux ReactRouterDom Scss Vercel",
    github: "ReactJs NextJS Typescript Sass MUI chartJS Vercel",
    link: "ReactJs NextJS Typescript Sass MUI chartJS Vercel",
    img: "https://user-images.githubusercontent.com/75432770/203575972-3d6d37e4-6ad4-468d-be61-71647346aa4b.png",
    alt: "IMPERIAL E-commerce",
  },
  {
    id: "3",
    className: "cardLeft",
    title: "Box 3",
    text: "SpiceRoute é um projeto de restaurante fictício criado para fins de demonstração. O objetivo do projeto é mostrar a criação de um site para um restaurante, onde os clientes podem consultar o cardápio, fazer reservas e entrar em contato com o restaurante.",
    stack: "React.js Tailwind Material Tailwind React-reveal Vercel",
    github: "ReactJs NextJS Typescript Sass MUI chartJS Vercel",
    link: "ReactJs NextJS Typescript Sass MUI chartJS Vercel",
    img: "https://user-images.githubusercontent.com/75432770/226908964-ffb21ee1-fd90-410b-91df-8b76bdda2e1e.png",
    alt: "SpiceRoute Restaurant",
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
