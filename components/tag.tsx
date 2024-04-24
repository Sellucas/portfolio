"use client";

import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";
import React, { useState } from "react";

type TagProps = {
  children: React.ReactNode;
};

export const Tag = ({ children }: TagProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Badge
      className={`font-normal pr-6 text-base bg-blue-50 dark:bg-gray-900 text-blue-500 cursor-default hover:bg-blue-100 relative ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <MoveUpRight
        className={`ml-1 w-4 absolute right-1 transition-transform ${
          isHovered ? "-translate-y-[2px] translate-x-[2px]" : ""
        }`}
      />
    </Badge>
  );
};
