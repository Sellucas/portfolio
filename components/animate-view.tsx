import { motion } from "framer-motion";

interface AnimateViewProps {
  children: React.ReactNode;
  direction: "left" | "down";
}

export const AnimateView = ({ children, direction }: AnimateViewProps) => {
  const initialAnimation =
    direction === "left" ? { x: -100, opacity: 0 } : { y: 50, opacity: 0 };

  const whileInViewAnimation =
    direction === "left" ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={initialAnimation}
      whileInView={whileInViewAnimation}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
