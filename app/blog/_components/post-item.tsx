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

export const PostItem = ({
  slug,
  title,
  description,
  date,
  image,
}: PostItemsProps) => {
  const url = `/blog/${slug}`;

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
            <Link className="hover:underline" href={url}>
              {title}
            </Link>
          </h2>
          <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </article>
  );
};
