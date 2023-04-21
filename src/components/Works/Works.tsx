import React from "react";
import scss from "./Works.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { ScrollView } from "../utils/ScrollView";

const Works = () => {
  return (
    <section className={scss.page}>
      <div className={scss.works}>
        <article>
          <ScrollView delay={0.2}>
            <h3>
              Some Things <br />
              I've Built.
            </h3>
          </ScrollView>
          <ScrollView delay={0.6}>
            <p>
              Open source, projects, web apps <br /> and experimentals.
            </p>
          </ScrollView>
          <ScrollView delay={0.8}>
            <a href="/projects">
              <span>SEE MY WORK</span>{" "}
              <BsArrowRight size={30} style={{ paddingLeft: "8px" }} />
            </a>
          </ScrollView>
        </article>
        <article>
          <ScrollView delay={1}>
            <h3>
              My thoughts
              <br /> into writing.
            </h3>
          </ScrollView>
          <ScrollView delay={1.4}>
            <p>Learning record. Moving thoughts. Registered experiences</p>
          </ScrollView>
          <ScrollView delay={1.6}>
            <a>UNDER CONSTRUCTION</a>
          </ScrollView>
        </article>
      </div>
    </section>
  );
};

export default Works;
