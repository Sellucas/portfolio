import React from "react";
import scss from "./Grid.module.scss";

interface BoxData {
  id: string;
  title: string;
  text: string;
}

interface GridProps {
  boxData: BoxData[];
}

const Grid: React.FC<GridProps> = ({ boxData }) => {
  return (
    <div className={scss.container}>
      {boxData.map((box) => (
        <div key={box.id} className={scss.box}>
          <h3>{box.title}</h3>
          <p>{box.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
