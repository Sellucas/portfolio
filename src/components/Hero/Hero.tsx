import React from "react";
import scss from "./Hero.module.scss";
import { Reveal } from "../utils/Reveal";
import { useTranslation, Trans } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={scss.page}>
      <div className={scss.container}>
        <div>
          <Reveal delay={3.2}>
            <h2>{t("heroTitleIntro")}</h2>
          </Reveal>
          <h1>
            <Reveal delay={3.4}>
              <p>Lucas Sell Machado.</p>
            </Reveal>
            <Reveal delay={3.6}>
              <p>
              <Trans components={[<span key={1} />]}>{t("heroTitleStack")}</Trans>
              </p>
            </Reveal>
          </h1>
        </div>

        <div>
          <Reveal delay={3.8}>
            <p className={scss.description}>{t("heroDescription")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
