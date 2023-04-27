import React from "react";
import scss from "./Card.module.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

interface CardProps {
  className: string;
}

const Card: React.FC<CardProps> = ({ className }) => {
  return (
    <div className={scss[className]}>
      <section className={scss.img}>
        <img src="empty.png" alt="Project Empty" />
      </section>

      <section className={scss.description}>
        <article>
          <div>
            <span>
              <h2>Featured Project</h2>
            </span>
            <span>
              <h1>NAME PROJECT</h1>
            </span>
          </div>
        </article>

        <article>
          <div className={scss.projectDescription}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sit amet risus sit amet felis convallis facilisis id vel lacus.
              Vivamus vitae metus tempor, tristique lacus eget, suscipit nisl.
              Vivamus vitae metus tempor Tunse Tatiwe.
            </p>
          </div>
          <div>
            <p className={scss.stack}>
              <span>React</span> <span>Express</span> <span>News API</span>{" "}
              <span>Tailwind</span>
            </p>
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
  );
};

export default Card;
