import Image from "next/image";
import { Tag } from "@/components/tag";
import { sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { projetos } from "@/constants";
import { ProjectItem } from "@/components/project-item";

enum MediaType {
  Image = "image",
  Video = "video",
}

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 3);
  const latestsProjetos = projetos;

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
          Me chamo Lucas e aqui eu compartilho minhas jornadas e aprendizados.
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
        <h2 className="mt-12 text-2xl font-medium">Projetos recentes</h2>
        <ul className="flex flex-wrap gap-4 mt-2">
          {latestsProjetos.map((proj) => {
            const { link, title, description, date, mediaSource, mediaType } =
              proj;
            return (
              <li key={link}>
                <ProjectItem
                  link={link}
                  title={title}
                  description={description}
                  date={date}
                  mediaType={(mediaType as MediaType) || "image"}
                  mediaSource={mediaSource}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
