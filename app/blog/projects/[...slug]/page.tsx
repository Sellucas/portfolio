import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, MoveLeft } from "lucide-react";

import { projects } from "#site/content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";
import { MdxArticle } from "@/components/mdx-article";

import "@/styles/mdx.css";

interface PostPageProps {
  params: {
    slug: string[];
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
          className="flex gap-2 text-sm items-center text-muted-foreground"
          href={"/blog/projects"}
        >
          <MoveLeft className="w-4 h-4" />
          Projetos
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
            <p>{formatDate(project.date)}</p> /
            <p className="flex gap-1 items-center">
              <Clock className="w-4 h-4 text-red-600" />
              Longo
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-medium mt-6">{project.title}</h1>
      <p className="text-muted-foreground text-sm">{project.description}</p>
      <div className="min-w-full my-12 prose dark:prose-invert">
        <MdxArticle code={project.body} />
      </div>
    </article>
  );
};

export default PostPage;
