import React from "react";
import scss from "./Hero.module.scss";
import { Teko } from "next/font/google";

const teko = Teko({ subsets: ["latin"], weight: ["700"] });

const Hero = () => {
  return (
    <section className={scss.page}>
      <div className={scss.container}>
        <div>
          <h2>Hi, my name is</h2>
          <h1>
            Lucas Sell Machado. <br />
            I'm a <span style={{ color: "#FAF900" }}>FRONTEND DEVELOPER</span>.
          </h1>
        </div>

        <div>
          <p className={scss.description}>
            I enjoy creating beautiful and functional user interfaces. It's a
            crucial part of web development and I'm always learning new
            techniques and technologies to improve my skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
