import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PostItemsProps {
  link: string;
  title: string;
  description?: string;
  date: string;
  mediaType: "image" | "video";
  mediaSource: string;
}

export const ProjectItem = ({
  link,
  title,
  description,
  date,
  mediaType,
  mediaSource,
}: PostItemsProps) => {
  return (
    <article>
      <Card className="w-[400px] h-[400px] border-none">
        <CardHeader className="p-0">
          <CardTitle>
            <Link href={link}>
              {mediaType === "image" ? (
                <Image
                  className="w-full rounded-lg object-cover aspect-video hover:origin-bottom hover:-rotate-2 drop-shadow-lg ease-in-out duration-200"
                  src={mediaSource}
                  alt={title}
                  width={358}
                  height={198}
                />
              ) : (
                <video
                  className="w-full rounded-lg object-cover aspect-video hover:origin-bottom hover:-rotate-2 drop-shadow-lg ease-in-out duration-200"
                  width="358"
                  height="198"
                  autoPlay
                  loop
                  preload="auto"
                >
                  <source src={mediaSource} type="video/mp4" />
                  <track src={mediaSource} srcLang="pt-br" />
                  Your browser does not support the video tag.
                </video>
              )}
            </Link>
          </CardTitle>
          <CardDescription className="text-xs py-2">{date}</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <h2 className="text-lg font-semibold">
            <Link className="hover:underline" href={link}>
              {title}
            </Link>
          </h2>
          <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </article>
  );
};
