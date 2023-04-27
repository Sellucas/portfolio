import React from "react";
import Card from "@/components/Projects/Card/Card";
import scss from "./Projects.module.scss";
import Grid from "@/components/Projects/Grid/Grid";

const boxData = [
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

const Projects = () => {
  return (
    <main className={scss.page}>
      <div className={scss.sectionTitle}>
        <h3>Some Things I've Built.</h3>
        <hr />
        <p>Here are the main projects I worked on.</p>
      </div>
      <section className={scss.topProjects}>
        <Card className="cardLeft" />
        <Card className="cardRight" />
        <Card className="cardLeft" />
      </section>
      <div className={scss.sectionTitle}>
        <h3>Other notable Projects</h3>
        <hr />
        <p>Here are the main projects I worked on.</p>
      </div>
      <section className={scss.othersProjects}>
        <Grid boxData={boxData} />
      </section>
    </main>
  );
};

export default Projects;
