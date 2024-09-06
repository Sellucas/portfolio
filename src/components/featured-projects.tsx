import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SiGmail,
  SiGithub,
  SiLinkedin,
  SiTypescript,
  IconType,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiPostgresql,
  SiShadcnui,
  SiResend,
  SiPrisma,
} from "@icons-pack/react-simple-icons";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface ProjectItemProps {
  title: string;
  desc: string;
  imgHref: string;
  linkHref: string;
  tags: string[];
}

const tagsInfo: Record<
  string,
  { name: string; color: string; Icon: IconType }
> = {
  typescript: {
    name: "Typescript",
    color: "group-hover:text-blue-500",
    Icon: SiTypescript,
  },
  nextjs: {
    name: "Next.js",
    color: "group-hover:text-white",
    Icon: SiNextdotjs,
  },
  tailwindcss: {
    name: "Tailwind",
    color: "group-hover:text-cyan-500",
    Icon: SiTailwindcss,
  },
  framermotion: {
    name: "FramerMotion",
    color: "group-hover:text-purple-500",
    Icon: SiFramer,
  },
  postgre: {
    name: "PostgreSQL",
    color: "group-hover:text-blue-800",
    Icon: SiPostgresql,
  },
  shadcn: {
    name: "Shadcn",
    color: "group-hover:text-green-500",
    Icon: SiShadcnui,
  },
  resend: {
    name: "Resend",
    color: "group-hover:text-white",
    Icon: SiResend,
  },
  prisma: {
    name: "Prisma",
    color: "group-hover:text-indigo-600",
    Icon: SiPrisma,
  },
};

const ProjectItem = ({
  title,
  desc,
  imgHref,
  linkHref,
  tags,
}: ProjectItemProps) => (
  <Card className="group border-none bg-[#161716] transition duration-150 ease-in-out hover:scale-[1.02] hover:bg-[#161716]/80 hover:ease-in-out">
    <CardHeader className="flex flex-row">
      <div>
        <Image
          src={imgHref}
          alt="project"
          width={48}
          height={48}
          className="grayscale group-hover:grayscale-0"
        />
      </div>
      <div className="flex w-full items-start justify-between">
        <div className="ml-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="mt-1">{desc}</CardDescription>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="size-8 rounded-[6px]" variant="ghost">
              <Link href={linkHref} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-4" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent
            className="mt-2 rounded-[6px] border border-muted bg-background text-muted-foreground"
            side="bottom"
          >
            Visit
          </TooltipContent>
        </Tooltip>
      </div>
    </CardHeader>
    <CardContent className="mt-2 flex flex-wrap gap-2">
      {tags.map((tag) => {
        const tagInfo = tagsInfo[tag];
        return (
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-1 rounded-[6px]"
            key={tag}
          >
            <span>
              <tagInfo.Icon
                size={12}
                className={cn("text-muted-foreground", tagInfo.color)}
              />
            </span>
            {tagInfo.name}
          </Badge>
        );
      })}
    </CardContent>
  </Card>
);

interface FeaturedProjectsProps {
  limit?: number;
}

export const FeaturedProjects = ({ limit }: FeaturedProjectsProps) => {
  const projects = [
    {
      title: "Prodify",
      desc: "Platform to organize your tasks, ensure completion of activities, and maintain oversight to ensure your projects stay on track.",
      imgHref: "/logo-prodify.png",
      linkHref: "https://prodify-planner.vercel.app",
      tags: [
        "typescript",
        "nextjs",
        "tailwindcss",
        "shadcn",
        "postgre",
        "framermotion",
      ],
    },
    {
      title: "Next-auth-v5",
      desc: "Project integrates Next-auth v5 to offer a robust authentication system with a wide range of features.",
      imgHref: "/next-auth-v5.png",
      linkHref: "https://next-auth-v5-topaz.vercel.app/",
      tags: [
        "typescript",
        "nextjs",
        "tailwindcss",
        "shadcn",
        "resend",
        "prisma",
      ],
    },
    {
      title: "Upcoming",
      desc: "...",
      imgHref: "/logo-prodify.png",
      linkHref: "/",
      tags: [],
    },
  ];

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="flex flex-col gap-4 pt-4">
      {displayedProjects.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          desc={project.desc}
          imgHref={project.imgHref}
          linkHref={project.linkHref}
          tags={project.tags}
        />
      ))}
    </div>
  );
};
