import React from "react";
import scss from "./About.module.scss";
import { useTranslation, Trans } from "react-i18next";
import Image from "next/image";

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

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      style={{ backgroundColor: "white", color: "rgba(0, 0, 0, 0.9)" }}
    >
      <div className={scss.page}>
        <div className={scss.sectionTitle}>
          <h3>{t("aboutSectionTitle")}</h3>
          <hr />
          <p>{t("aboutSectionTitleDescription")}</p>
        </div>

        <div className={scss.about}>
          <div>
            <h4 className={scss.descriptionTitle}>{t("aboutIntroTitle")}</h4>
            <p>
              <Trans components={[<span />]}>{t("aboutIntro1p")}</Trans>
            </p>
            <p>
              <Trans components={[<span />]}>{t("aboutIntro2p")}</Trans>
            </p>
            <p>
              <Trans components={[<span />]}>{t("aboutIntro3p")}</Trans>
            </p>
          </div>

          <div className={scss.col2}>
            <figure>
              <Image width={350} height={350} src="/bg.png" alt="profile" />
            </figure>
            <article>
              <h4 className={scss.descriptionTitle}>{t("aboutSkillsTitle")}</h4>
              <span>{mySkills}</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
