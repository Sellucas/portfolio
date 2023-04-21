import React from "react";
import scss from "./Works.module.scss";
import { BsArrowRight } from "react-icons/bs";

const Works = () => {
  return (
    <section className={scss.page}>
      <div className={scss.works}>
        <article>
          <h3>
            Some Things <br />
            I've Built.
          </h3>
          <p>
            Open source, projects, web apps <br /> and experimentals.
          </p>
          <a href="/projects">
            <span>SEE MY WORK</span>{" "}
            <BsArrowRight size={30} style={{ paddingLeft: "8px" }} />
          </a>
        </article>
        <article>
          <h3>
            My thoughts
            <br /> into writing.
          </h3>
          <p>Learning record. Moving thoughts. Registered experiences</p>
          <a>UNDER CONSTRUCTION</a>
        </article>
      </div>
    </section>
  );
};

export default Works;
