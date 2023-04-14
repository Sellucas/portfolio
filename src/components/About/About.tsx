import React from "react";
import scss from "./About.module.scss";

const About = () => {
  return (
    <div style={{ backgroundColor: "white", color: "rgba(0, 0, 0, 0.8)" }}>
      <div className={scss.page}>
        <h3>ABOUT ME</h3>
      </div>
    </div>
  );
};

export default About;
