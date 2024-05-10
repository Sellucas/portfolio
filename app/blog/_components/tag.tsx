"use client";

import { MoveUpRight } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export const Tag = ({ children, className }: TagProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Badge
      className={`font-normal rounded-lg pr-6 text-base md:text-lg bg-blue-100 dark:bg-blue-700/10 text-blue-700 dark:text-blue-500 cursor-default hover:bg-blue-100 relative ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <MoveUpRight
        className={cn(
          `ml-1 w-4 absolute right-1 transition-transform ${
            isHovered ? "-translate-y-[2px] translate-x-[2px]" : ""
          }`,
          className
        )}
      />
    </Badge>
  );
};
