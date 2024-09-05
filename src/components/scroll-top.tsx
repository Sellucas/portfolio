"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "./ui/button";

export const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    setIsVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    isVisible && (
      <Button
        variant={"outline"}
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 rounded-[6px] p-3 text-white"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </Button>
    )
  );
};
