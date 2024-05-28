import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Clock, MoveLeft } from "lucide-react";

import { projects } from "#site/content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";
import { MdxArticle } from "@/app/blog/_components/mdx-article";
import { PostPageProps } from "@/types";

import "@/styles/mdx.css";

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const slug = params.slug.join("/");
  const post = projects.find((post) => post.slugAsParams === slug);

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
  const project = projects.find((post) => post.slugAsParams === slug);

  return project;
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return projects.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

const PostPage = async ({ params }: PostPageProps) => {
  const project = await getPostFromParams(params);

  if (!project || !project.published) {
    notFound();
  }

  return (
    <article>
      <div className="mb-4">
        <Link
          className="flex gap-2 text-xs items-center"
          href={"/blog/projects"}
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
            <p>{formatDate(project.date)}</p> /
            <p className="flex gap-1 items-center">
              <Clock className="w-4 h-4 text-orange-600" />
              Médio
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-medium mt-4">{project.title}</h1>
      <p className="text-muted-foreground text-sm mt-2">
        {project.description}
      </p>
      <hr className="my-8" />
      <div className="min-w-full my-12 prose dark:prose-invert">
        <MdxArticle code={project.body} />
      </div>
    </article>
  );
};

export default PostPage;
