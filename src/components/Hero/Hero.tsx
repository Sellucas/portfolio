import React from "react";
import { Teko } from "next/font/google";
import scss from "./Hero.module.scss";

const teko = Teko({ subsets: ["latin"], weight: ["700"] });

const Hero = () => {
  return (
    <div className={scss.page}>
      <div className={scss.container}>
        <div className={teko.className}>
          <h2>Hi, my name is</h2>
          <h1>
            Lucas Sell Machado. <br />
            I'm a <span style={{ color: "#FAF900" }}>FRONTEND DEVELOPER</span>.
          </h1>
        </div>

        <div className={teko.className}>
          <p className={scss.description}>
            I enjoy creating beautiful and functional user interfaces. It's a
            crucial part of web development and I'm always learning new
            techniques and technologies to improve my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
