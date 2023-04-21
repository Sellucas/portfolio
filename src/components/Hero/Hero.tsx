import React from "react";
import scss from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={scss.page}>
      <div className={scss.container}>
        <div>
          <h2>Hi, my name is</h2>
          <h1>
            Lucas Sell Machado. <br />
            I'm a <span>FRONTEND DEVELOPER</span>.
          </h1>
        </div>

        <div>
          <p className={scss.description}>
            My specialty as a front-end developer is creating smooth and
            intuitive user experiences. I'm excellent at utilizing the latest
            technologies to deliver top-notch web applications. I have extensive
            knowledge in Front-End, which allows me to easily build complex and
            dynamic applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
