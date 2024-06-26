import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Clock } from "lucide-react";

import { posts } from "#site/content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";
import { MdxArticle } from "@/app/blog/_components/mdx-article";
import { PostPageProps } from "@/types";

import "@/styles/mdx.css";

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const slug = params.slug.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  if (!post || !post.published) {
    notFound();
  }

  return {
    title: post.title,
    description: post.description,
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
    <div className="flex gap-20">
      <article className="w-full">
        <div className="mb-4">
          <Link
            className="flex gap-2 text-xs items-center"
            href={"/blog/articles"}
          >
            <ChevronLeft className="w-3 h-3" />
            Artigos
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
            <h2>Lucas Sell Machado</h2>
            <div className="flex gap-1 text-[11px] text-muted-foreground">
              <p>{formatDate(post.date)}</p> /
              <p className="flex gap-1 items-center">
                <Clock className="w-4 h-4 text-orange-600" />
                Médio
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-medium mt-4">{post.title}</h1>
        <p className="text-muted-foreground text-sm mt-2">{post.description}</p>
        <hr className="my-8" />
        <div className="min-w-full mb-12 prose dark:prose-invert">
          <MdxArticle code={post.body} />
        </div>
      </article>
      <aside className="w-96 hidden xl:block relative">
        <div className="fixed">
          <h2 className="text-xs text-muted-foreground">Sumário</h2>
          <ul className="text-sm mt-2 space-y-2">
            <li>
              <Link href={"#static-metadata"}>Static Metadata</Link>
            </li>
            <li>
              <Link href={"#dynamic-metadata"}>Dynamic Metadata</Link>
            </li>
            <li>
              <Link href={"#implementando-mais-tags"}>
                Implementando mais Tags
              </Link>
            </li>
            <li>
              <Link href={"#sitemapxml"}>sitemap.xml</Link>
            </li>
            <li>
              <Link href={"#robotstxt"}>robots.txt</Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default PostPage;
