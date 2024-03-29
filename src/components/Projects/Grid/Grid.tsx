import React from "react";
import scss from "./Grid.module.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { ScrollView } from "@/components/utils/ScrollView";

interface boxDataGrid {
  id: string;
  title: string;
  text: string;
  stack: string;
  github: string;
  link: string;
}

interface GridProps {
  boxDataGrid: boxDataGrid[];
}

const Grid: React.FC<GridProps> = ({ boxDataGrid }) => {
  return (
    <div>
      <div className={scss.container}>
        {boxDataGrid.map((box) => (
          <div key={box.id} className={scss.box}>
            <a href="">
              <ScrollView delay={0.2}>
                <h3>{box.title}</h3>
              </ScrollView>
            </a>
            <div>
              <ScrollView delay={0.4}>
                <p>{box.text}</p>
              </ScrollView>
            </div>
            <p className={scss.stack}>{box.stack}</p>
            <hr className={scss.hr} />
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
        ))}
      </div>
      <div className={scss.buttonDiv}>
        <button className={scss.seeMore}>MOSTRAR MAIS</button>
      </div>
    </div>
  );
};

export default Grid;
