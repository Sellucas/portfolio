import React, { useEffect } from "react";
import scss from "./Loading.module.scss";
import { useScrollBlock } from "../useScrollBlock";

const Loading = () => {
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    blockScroll();
    return () => {
      allowScroll();
    };
  }, []);

  return (
    <section className={scss.loadingComponent}>
      <div className={scss.container}>
        <div className={scss.spinner}></div>
      </div>
    </section>
  );
};

export default Loading;
