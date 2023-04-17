import React from "react";
import scss from "./About.module.scss";

const stack = [
  "JavaScript",
  "TypeScript",
  "ReactJs",
  "Sass",
  "Tailwind",
  "Responsive Design",
  "GIT",
  "Bootstrap",
  "GitHub",
  "SEO",
];

const mySkills = stack.map((item, index) => {
  return <button key={index}>{item}</button>;
});

const About = () => {
  return (
    <section style={{ backgroundColor: "white", color: "rgba(0, 0, 0, 0.8)" }}>
      <div className={scss.page}>
        <div className={scss.sectionTitle}>
          <h3>ABOUT ME</h3>
          <hr />
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>

        <div className={scss.about}>
          <div>
            <h4 className={scss.descriptionTitle}>
              Allow me to introduce myself!
            </h4>
            <p>
              Hey there! I started learning web development in 2020 and since
              then I have been improving my <span>skills and knowledge</span> in
              this field, creating beautiful and responsive user interfaces,
              writing clean and maintainable code, also scalable and easy to
              understand.
            </p>

            <p>
              My goal as a developer is to keep learning and growing in my
              skills and knowledge. I'm excited to <span>collaborate</span> with
              other developers, designers and clients to create innovative and
              impactful web projects.
            </p>

            <p>
              If you are interested in <span>working with me</span>, please feel
              free to get in touch! I'm always open to new{" "}
              <span>opportunities</span> and challenges in the world of web
              development.
            </p>
          </div>

          <div className={scss.col2}>
            <figure>
              <img src="bg.png" alt="profile" />
            </figure>
            <article>
              <h4 className={scss.descriptionTitle}>My Skills</h4>
              <span>{mySkills}</span>
            </article>
          </div>
        </div>

        {/* <div className={scss.technologies}>
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
        </div> */}
      </div>
    </section>
  );
};

export default About;
