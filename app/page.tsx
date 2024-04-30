"use client";

import { useEffect } from "react";
import { Nunito_Sans } from "next/font/google";
import Lenis from "lenis";

import ProjectsParallax from "@/components/projects-parallax";
import { Services } from "@/components/services";
import { AboutMe } from "@/components/about-me";
import { Faq } from "@/components/faq";

const font = Nunito_Sans({ subsets: ["latin"] });

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="max-w-[1575px] mx-auto px-2">
      <section
        className={`${font.className} text-4xl md:text-6xl xl:text-9xl dark:opacity-95 font-extrabold leading-[1.15] mt-44`}
      >
        <h1>Oi, Me chamo Lucas.</h1>
        <h1>
          Desenvolvedor <span className="highlight">Web</span>
        </h1>
        <h1>construo produtos que dão vida à ideias</h1>
      </section>
      <section>
        <ProjectsParallax
          title="Prodify"
          description="Personal Planner"
          pic1="https://img.freepik.com/free-vector/paradise-tropical-beach-with-lovely-sunset_23-2147886686.jpg?t=st=1714427624~exp=1714431224~hmac=448f1ce9773b891fb14940223d12f69aebf7825ad905004b0cc67cca57653e95&w=740"
          pic2="https://img.freepik.com/free-vector/landscape-with-mountains-nature_603843-1321.jpg?t=st=1714427670~exp=1714431270~hmac=8603db2d13a50fd4a96fc3e21e30fdc188cc00ee14f648e2e25849645b27721d&w=740"
          pic3="https://img.freepik.com/free-vector/autumn-landscape-with-trees-night_107791-11603.jpg?t=st=1714427697~exp=1714431297~hmac=8ded418d6238877d0af37a13f3707baba7be2dc5efea453286adacdb7ae77814&w=1060"
        />
        <ProjectsParallax
          title="Prodify"
          description="Personal Planner"
          pic1="https://img.freepik.com/free-vector/paradise-tropical-beach-with-lovely-sunset_23-2147886686.jpg?t=st=1714427624~exp=1714431224~hmac=448f1ce9773b891fb14940223d12f69aebf7825ad905004b0cc67cca57653e95&w=740"
          pic2="https://img.freepik.com/free-vector/landscape-with-mountains-nature_603843-1321.jpg?t=st=1714427670~exp=1714431270~hmac=8603db2d13a50fd4a96fc3e21e30fdc188cc00ee14f648e2e25849645b27721d&w=740"
          pic3="https://img.freepik.com/free-vector/autumn-landscape-with-trees-night_107791-11603.jpg?t=st=1714427697~exp=1714431297~hmac=8ded418d6238877d0af37a13f3707baba7be2dc5efea453286adacdb7ae77814&w=1060"
        />
      </section>
      <section className="my-[60vh]">
        <h1 className="w-full text-center mb-32 text-7xl font-semibold uppercase">
          Serviços
        </h1>
        <Services />
      </section>
      <section className="my-[60vh]">
        <h1 className="w-full text-center mb-32 text-7xl font-semibold uppercase">
          Sobre Mim
        </h1>
        <AboutMe />
      </section>
      <section className="my-[60vh]">
        <h1 className="w-full text-center mb-32 text-7xl font-semibold uppercase">
          Perguntas Frequentes
        </h1>
        <Faq />
      </section>
    </div>
  );
};

export default Home;
