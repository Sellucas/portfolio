"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { PostItemsProps } from "@/types";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const PostItem = ({
  slug,
  title,
  description,
  date,
  image,
}: PostItemsProps) => {
  const url = `/blog/${slug}`;
  const [shortTitle, setShortTitle] = useState(title);

  useEffect(() => {
    if (title.length > 45) {
      setShortTitle(title.substring(0, 42) + "...");
    } else {
      setShortTitle(title);
    }
  }, [title]);

  return (
    <article>
      <Card className="w-[400px] h-[400px] border-none">
        <CardHeader className="p-0">
          <CardTitle>
            <Link href={url}>
              <Image
                className="w-full rounded-lg object-cover aspect-video hover:origin-bottom hover:-rotate-2 drop-shadow-lg ease-in-out duration-200"
                src={image}
                alt={title}
                width={358}
                height={198}
                priority
              />
            </Link>
          </CardTitle>
          <CardDescription className="text-xs py-2">
            {formatDate(date)}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <h2 className="text-lg font-semibold">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link className="hover:underline" href={url}>
                    {shortTitle}
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-foreground text-background">
                  <p>{title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h2>
          <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </article>
  );
};
