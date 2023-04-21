import React from "react";
import scss from "./Hero.module.scss";
import { Reveal } from "../utils/Reveal";

const Hero = () => {
  return (
    <section className={scss.page}>
      <div className={scss.container}>
        <div>
          <Reveal delay={0.2}>
            <h2>Hi, my name is</h2>
          </Reveal>
          <h1>
            <Reveal delay={0.4}>
              <p>
                Lucas Sell Machado. <br />
              </p>
            </Reveal>
            <Reveal delay={0.6}>
              <p>
                I'm a <span>FRONTEND DEVELOPER</span>.
              </p>
            </Reveal>
          </h1>
        </div>

        <div>
          <Reveal delay={0.8}>
            <p className={scss.description}>
              My specialty as a front-end developer is creating smooth and
              intuitive user experiences. I'm excellent at utilizing the latest
              technologies to deliver top-notch web applications. I have
              extensive knowledge in Front-End, which allows me to easily build
              complex and dynamic applications.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
