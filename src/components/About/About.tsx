import React from "react";
import scss from "./About.module.scss";

const About = () => {
  return (
    <div style={{ backgroundColor: "white", color: "rgba(0, 0, 0, 0.8)" }}>
      <div className={scss.page}>
        <h3 className={scss.title}>ABOUT ME</h3>

        <div className={scss.about}>
          <div>
            <p id={scss.firstP}>
              I believe that the best user experiences come from designs that
              are both <span>beautiful and functional</span>. That's why I
              always prioritize user-centered design principles and focus on
              creating intuitive interfaces that are easy to use.
            </p>

            <p>
              Throughout my experience as a Front-end Developer, I've learned
              the importance of <span>collaboration and communication</span>{" "}
              within a team. I'm a strong believer in open communication and
              always strive to keep everyone on the same page throughout the
              development process.
            </p>
          </div>

          <div>
            <img src="" alt="/" />
          </div>
        </div>

        <div className={scss.technologies}>
          <p>
            Here area a few <span>technologies</span> I've been working with
            recently:
          </p>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>ReactJs</li>
            <li>Tailwind</li>
            <li>Sass</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
