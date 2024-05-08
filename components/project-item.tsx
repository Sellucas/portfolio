"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectItemProps {
  src: string;
  title: string;
  stack: string;
  date: string;
  desc: string;
}

export const ProjectItem = ({
  src,
  date,
  stack,
  title,
  desc,
}: ProjectItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="lg:w-1/2 h-[48rem] relative text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <Image
          className={
            isHovered
              ? "object-bottom z-10 -mt-24 ease-in-out duration-1000"
              : "object-top z-10 ease-in-out duration-1000"
          }
          src={src}
          alt="Prodify"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div
        className={
          isHovered
            ? "absolute bottom-0 space-y-6 px-2 -mb-20 ease-in-out duration-1000"
            : "absolute bottom-0 space-y-6 px-2 -mb-44 lg:-mb-0 ease-in-out duration-1000"
        }
      >
        <h1 className="text-5xl lg:text-7xl font-extrabold uppercase">
          {title}
        </h1>
        <div className="flex justify-between gap-12 font-bold">
          <p className="text-xl lg:text-3xl">{desc}</p>
          <p className="flex flex-col whitespace-nowrap">
            <span className="text-xl lg:text-3xl">/ {stack}</span>
            <span className="text-normal lg:text-xl">{date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
