import React from "react";
import scss from "./Card.module.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";

interface boxDataCard {
  id: string;
  title: string;
  text: string;
  stack: string;
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
              <img src="empty.png" alt="Project Empty" />
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
                <div className={scss.projectDescription}>
                  <p>{box.text}</p>
                </div>
                <div>
                  <p className={scss.stack}>{box.stack}</p>
                  <ul className={scss.links}>
                    <li>
                      <a href="" target="_blank">
                        <AiOutlineGithub size={32} />
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
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
