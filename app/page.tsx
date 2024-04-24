import Image from "next/image";
import { Tag } from "@/components/tag";

export default function Home() {
  return (
    <main className="h-screen w-full">
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
    </main>
  );
}
