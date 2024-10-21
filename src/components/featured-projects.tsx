import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SiMui,
  SiVite,
  SiRedux,
  IconType,
  SiFramer,
  SiResend,
  SiPrisma,
  SiExpress,
  SiShadcnui,
  SiAmazons3,
  SiNextdotjs,
  SiAmazonec2,
  SiAmazonrds,
  SiTypescript,
  SiPostgresql,
  SiAwsamplify,
  SiTailwindcss,
  SiReact,
} from "@icons-pack/react-simple-icons";
import { ExternalLink } from "lucide-react";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "./ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

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
  redux: {
    name: "Redux",
    color: "group-hover:text-purple-500",
    Icon: SiRedux,
  },
  mui: {
    name: "MUI",
    color: "group-hover:text-pink-500",
    Icon: SiMui,
  },
  express: {
    name: "Express",
    color: "group-hover:text-white",
    Icon: SiExpress,
  },
  ec2: {
    name: "AWS EC2",
    color: "group-hover:text-orange-500",
    Icon: SiAmazonec2,
  },
  rds: {
    name: "AWS RDS",
    color: "group-hover:text-indigo-500",
    Icon: SiAmazonrds,
  },
  amplify: {
    name: "AWS Amplify",
    color: "group-hover:text-red-500",
    Icon: SiAwsamplify,
  },
  s3: {
    name: "AWS S3",
    color: "group-hover:text-green-500",
    Icon: SiAmazons3,
  },
  vite: {
    name: "Vite",
    color: "group-hover:text-yellow-500",
    Icon: SiVite,
  },
  react: {
    name: "React",
    color: "group-hover:text-blue-500",
    Icon: SiReact,
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

const projects = [
  {
    title: "Next-auth-v5",
    desc: "Project integrates Next-auth v5 to offer a robust authentication system with a wide range of features.",
    imgHref: "/next-auth-v5.png",
    linkHref: "https://next-auth-v5-topaz.vercel.app/",
    tags: ["typescript", "nextjs", "tailwindcss", "shadcn", "resend", "prisma"],
  },
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
    title: "Inventory Management",
    desc: "A mock data inventory management system designed to learn the basics of AWS, demonstrating skills in cloud architecture and backend integration.",
    imgHref: "/inventory-management.svg",
    linkHref: "https://github.com/Sellucas/inventory-management",
    tags: [
      "typescript",
      "nextjs",
      "redux",
      "express",
      "postgre",
      "prisma",
      "ec2",
      "rds",
      "amplify",
      "s3",
    ],
  },
  {
    title: "easyo - SEO Analyzer",
    desc: "Easyo is a Chrome extension that analyzes the SEO structure of web pages, including metadata, links, Open Graph, and more, helping developers optimize search visibility.",
    imgHref: "/easyo.png",
    linkHref:
      "https://chromewebstore.google.com/detail/easyo-seo-analyzer/ogmfobpgnomecmjlhcggcfgkiacooknl",
    tags: ["react", "vite", "typescript", "shadcn"],
  },
];

export const FeaturedProjects = ({ limit }: FeaturedProjectsProps) => {
  const displayedProjects = limit ? projects.slice(-limit) : projects.slice(-3);

  return (
    <div className="flex flex-col gap-4 pt-4">
      {displayedProjects.reverse().map((project, index) => (
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
