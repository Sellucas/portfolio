import Image from "next/image";
import { Tag } from "@/components/tag";
import { sortPosts } from "@/lib/utils";
import { posts, projects } from "#site/content";
import { PostItem } from "@/components/post-item";

export default function BlogPage() {
  const latestPosts = sortPosts(posts).slice(0, 3);
  const latestProjects = sortPosts(projects).slice(0, 3);

  return (
    <main className="w-full">
      <section>
        <h1 className="text-5xl font-medium leading-tight">
          Seja bem-vindo
          <Image
            src={"https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"}
            className="w-12 mx-2 inline"
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
        <h2 className="mt-32 text-2xl font-medium">Posts recentes</h2>
        <ul className="flex flex-wrap gap-4 mt-2">
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
        <h2 className="mt-32 text-2xl font-medium">Projetos recentes</h2>
        <ul className="flex flex-wrap gap-4 mt-2">
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
