import Image from "next/image";

import { posts, projects } from "#site/content";
import { Tag } from "@/app/blog/_components/tag";
import { sortPosts } from "@/lib/utils";
import { PostItem } from "@/app/blog/_components/post-item";

export default function BlogPage() {
  const latestPosts = sortPosts(posts).slice(0, 3);
  const latestProjects = sortPosts(projects).slice(0, 3);

  return (
    <main className="w-full">
      <section>
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-medium leading-tight">
          Seja bem-vindo
          <Image
            src={"https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"}
            className="w-8 mx-2 inline"
            alt="wave-hand"
            width="32"
            height="32"
            unoptimized
          />
          Aqui é onde compartilho minhas jornadas e aprendizados com você.
        </h1>
        <div className="flex gap-2 mt-12">
          <Tag>Front-End</Tag>
          <Tag>Fullstack</Tag>
          <Tag>Freelancer</Tag>
        </div>
      </section>
      <section>
        <h2 className="mt-32 text-2xl font-medium text-center lg:text-left">
          Posts recentes
        </h2>
        <ul className="flex flex-wrap justify-center lg:justify-normal gap-4 mt-2">
          {latestPosts.map((post) => {
            const { slug, title, description, date, image } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  title={title}
                  description={description}
                  date={date}
                  image={image}
                />
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <h2 className="mt-32 text-2xl font-medium text-center lg:text-left">
          Projetos recentes
        </h2>
        <ul className="flex flex-wrap justify-center lg:justify-normal gap-4 mt-2">
          {latestProjects.map((post) => {
            const { slug, title, description, date, image } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  title={title}
                  description={description}
                  date={date}
                  image={image}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
