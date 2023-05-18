import React from "react";
import scss from "./Card.module.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { ScrollView } from "@/components/utils/ScrollView";
import Image from "next/image";

interface boxDataCard {
  id: string;
  title: string;
  text: string;
  stack: string;
  github: string;
  link: string;
  img: string;
  alt: string;
  className: string;
}

interface CardProps {
  boxDataCard: boxDataCard[];
}

const Card: React.FC<CardProps> = ({ boxDataCard }) => {
  const { t } = useTranslation();
  return (
    <div>
      {boxDataCard.map((box) => (
        <div key={box.id} className={`${scss[box.className]} ${scss.card}`}>
          <div>
            <section className={scss.img}>
              <a href={box.link} target="_blank">
                <ScrollView delay={0.2}>
                  <Image width={500} height={450} src={box.img} alt={box.alt} />
                </ScrollView>
              </a>
              <div className={scss.skin}></div>
            </section>

            <section className={scss.description}>
              <article>
                <div>
                  <span>
                    <h2>{t("projectFeatured")}</h2>
                  </span>
                  <span>
                    <h1>{box.title}</h1>
                  </span>
                </div>
              </article>

              <article>
                <ScrollView delay={0.2}>
                  <div className={scss.projectDescription}>
                    <p>{box.text}</p>
                  </div>
                </ScrollView>
                <div>
                  <p className={scss.stack}>{box.stack}</p>
                  <ul className={scss.links}>
                    <li>
                      <a href={box.github} target="_blank">
                        <AiOutlineGithub size={32} />
                      </a>
                    </li>
                    <li>
                      <a href={box.link} target="_blank">
                        <FiExternalLink size={32} />
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
