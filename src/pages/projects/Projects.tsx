import React from "react";
import Card from "@/components/Projects/Card/Card";
import scss from "./Projects.module.scss";

const Projects = () => {
  return (
    <main className={scss.page}>
      <div className={scss.sectionTitle}>
        <h3>ABOUT ME</h3>
        <hr />
        <p>Info about me, my work, and tech skills can be found here.</p>
      </div>
      <section>
        <Card />
      </section>
    </main>
  );
};

export default Projects;
