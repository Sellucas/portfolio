"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";
import { ChevronUp } from "lucide-react";

export const Category: React.FC<{ name: string; children: ReactNode }> = ({
  name,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2"
      >
        <span className="font-medium text-foreground">{name}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 90 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronUp className="w-4 h-4 text-foreground" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            className="font-light text-sm"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
