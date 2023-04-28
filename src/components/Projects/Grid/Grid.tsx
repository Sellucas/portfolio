import React from "react";
import scss from "./Grid.module.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

interface BoxData {
  id: string;
  title: string;
  text: string;
  stack: string;
}

interface GridProps {
  boxData: BoxData[];
}

const Grid: React.FC<GridProps> = ({ boxData }) => {
  return (
    <div className={scss.container}>
      {boxData.map((box) => (
        <div key={box.id} className={scss.box}>
          <a href="">
            <h3>{box.title}</h3>
          </a>
          <p>{box.text}</p>
          <p className={scss.stack}>{box.stack}</p>
          <hr className={scss.hr}/>
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
      ))}
    </div>
  );
};

export default Grid;
