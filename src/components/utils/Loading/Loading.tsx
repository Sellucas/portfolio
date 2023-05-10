import React from "react";
import scss from "./Loading.module.scss";

const Loading = () => {
  return (
    <section className={scss.loadingComponent}>
      <div className={scss.container}>
      <div className={scss.spinner}></div>
      </div>
    </section>
  );
};

export default Loading;
