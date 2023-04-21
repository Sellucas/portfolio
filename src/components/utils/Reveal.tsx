import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number;
}

export const Reveal = ({
  children,
  width = "fit-content",
  delay = 0.25,
}: Props) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
