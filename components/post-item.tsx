import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

interface PostItemsProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export const PostItem = ({
  slug,
  title,
  description,
  date,
}: PostItemsProps) => {
  return (
    <article>
      <Card className="w-[400px] border-none">
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription className="text-xs">
            {formatDate(date)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-semibold">
            <Link href={slug}>{title}</Link>
          </h2>
          <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </article>
  );
};
