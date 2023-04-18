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
          <button>
            <span>SEE MY WORK</span>{" "}
            <BsArrowRight size={30} style={{ paddingLeft: "8px" }} />
          </button>
        </article>
        <article>
          <h3>
            At times, I put my <br />
            thoughts into writing.
          </h3>
          <p>Learning record. Moving thoughts. Registered experiences. My writing journey</p>
          <button>UNDER CONSTRUCTION</button>
        </article>
      </div>
    </section>
  );
};

export default Works;
