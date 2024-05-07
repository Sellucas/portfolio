import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface AnimateCountProps {
  value: number;
}

export const AnimateCount = ({ value }: AnimateCountProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, value, {
      duration: 2,
    });
    return () => animation.stop();
  }, [count, value]);

  return <motion.div>{rounded}</motion.div>;
};
