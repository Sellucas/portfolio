import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, MoveLeft } from "lucide-react";

import { posts } from "#site/content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";
import { MdxArticle } from "@/components/mdx-article";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article>
      <div className="mb-4">
        <Link
          className="flex gap-2 text-sm items-center text-muted-foreground"
          href={"/blog"}
        >
          <MoveLeft className="w-4 h-4" />
          Blog
        </Link>
      </div>
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage
            src="https://github.com/Sellucas/portfolio/assets/75432770/9836c736-a1c3-4594-ad92-3c4d767f57e3"
            alt="Sellucas"
          />
          <AvatarFallback>SL</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-muted-foreground">Lucas Sell Machado</h2>
          <div className="flex gap-1 text-xs text-muted-foreground">
            <p>{formatDate(post.date)}</p> /
            <p className="flex gap-1 items-center">
              <Clock className="w-4 h-4 text-red-600" />
              Longo
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-medium mt-6">{post.title}</h1>
      <p className="text-muted-foreground text-sm">{post.description}</p>
      <div className="mt-12 prose dark:prose-invert">
        <MdxArticle code={post.body} />
      </div>
    </article>
  );
};

export default PostPage;
