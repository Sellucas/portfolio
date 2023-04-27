import React from "react";
import Card from "@/components/Projects/Card/Card";
import scss from "./Projects.module.scss";
import Grid from "@/components/Projects/Grid/Grid";

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
        <Grid />
      </section>
    </main>
  );
};

export default Projects;
