import React from "react";
import scss from "./Works.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { ScrollView } from "../utils/ScrollView";
import { useTranslation, Trans } from "react-i18next";

const Works: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={scss.page}>
      <div className={scss.works}>
        <article>
          <ScrollView delay={0.2}>
            <h3>
              <Trans components={[<br />]}>{t("worksProject")}</Trans>
            </h3>
          </ScrollView>
          <ScrollView delay={0.6}>
            <p>
              <Trans components={[<br />]}>
                {t("worksProjectDescription")}
              </Trans>
            </p>
          </ScrollView>
          <ScrollView delay={0.8}>
            <a href="/projects">
              <span>{t("worksProjectButton")}</span>{" "}
              <BsArrowRight size={30} style={{ paddingLeft: "8px" }} />
            </a>
          </ScrollView>
        </article>
        <article>
          <ScrollView delay={1}>
            <h3>
              <Trans components={[<br />]}>{t("worksArticles")}</Trans>
            </h3>
          </ScrollView>
          <ScrollView delay={1.4}>
            <p>{t("worksArticlesDescription")}</p>
          </ScrollView>
          <ScrollView delay={1.6}>
            <a>{t("worksArticlesButton")}</a>
          </ScrollView>
        </article>
      </div>
    </section>
  );
};

export default Works;
