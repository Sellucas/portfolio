import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  delay?: number;
}

export const ScrollView = ({ children, delay = 0.25 }: Props) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
