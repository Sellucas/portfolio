"use client";

import Link from "next/link";
import { Fjalla_One } from "next/font/google";
import { Clock, Layers, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

import { Services } from "@/components/services";
import { Marquee } from "@/components/marquee";
import { ProjectItem } from "@/components/project-item";
import { formatTimeBrazilNow } from "@/lib/utils";
import { Faq } from "@/components/faq";
import { HomeTag } from "@/components/home-tag";
import { ImageHero } from "@/components/image-hero";
import { AnimateView } from "@/components/animate-view";
import { AnimateCount } from "@/components/animate-count";
import { GetInTouch } from "@/components/get-in-touch";

const font = Fjalla_One({ subsets: ["latin"], weight: ["400"] });

const Home = () => {
  const [timeNow, setTimeNow] = useState<string>(formatTimeBrazilNow());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeNow(formatTimeBrazilNow());
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <section className="flex flex-col pt-44 max-w-[1575px] mx-auto">
        <h1
          className={`${font.className} flex flex-col text-white text-center`}
        >
          <span className="text-2xl lg:text-5xl">Bem-vindo, eu sou</span>
          <span className="text-7xl my-4 lg:text-[11rem] tracking-wide uppercase">
            Lucas Sell Machado
          </span>
        </h1>
        <p className="text-white uppercase font-extralight tracking-widest text-center">
          Desenvolvedor Web Fullstack
        </p>
        <div className="flex flex-col items-center md:flex-row font-extrabold opacity-70 text-white gap-16 justify-center mt-8">
          <h2 className="flex items-center gap-4 md:pr-8 lg:pr-16 border-b-2 pb-4 md:border-b-0 md:pb-0 md:border-r-4 border-white">
            <span className="text-5xl lg:text-7xl flex">
              <AnimateCount value={1} />+
            </span>
            <p className="flex flex-col text-lg lg:text-xl">
              <span>Anos de</span>
              <span>Experiência</span>
            </p>
          </h2>
          <h2 className="flex items-center gap-4 md:pr-8 lg:pr-16 border-b-2 pb-4 md:border-b-0 md:pb-0 md:border-r-4 border-white">
            <span className="text-5xl lg:text-7xl flex">
              <AnimateCount value={6} />+
            </span>
            <p className="flex flex-col text-lg lg:text-xl">
              <span>Projetos</span>
              <span>Sucedidos</span>
            </p>
          </h2>
          <h2 className="flex items-center gap-4">
            <span className="text-5xl lg:text-7xl flex">
              <AnimateCount value={10} />+
            </span>
            <p className="flex flex-col text-lg lg:text-xl">
              <span>Artigos</span>
              <span>Publicados</span>
            </p>
          </h2>
        </div>
        <div className="mt-16 flex">
          <div className="relative left-10">
            <ImageHero src={"/prodify-mobile.webp"} alt="Prodify" delay={0.5} />
          </div>
          <div className="hidden md:block relative left-44 lg:left-96">
            <ImageHero src={"/prodify-mobile2.webp"} alt="Prodify" delay={0.8} />
          </div>
          <div className="hidden md:block relative right-44 lg:right-96 top-24 z-10">
            <ImageHero src={"/cardflex.webp"} alt="CardFlex" delay={1} />
          </div>
          <div className="relative right-10 top-12">
            <ImageHero src={"/quiblitz.webp"} alt="Quiblitz" delay={1.2} />
          </div>
        </div>
      </section>
      <section className="flex flex-col px-2 lg:px-0 md:flex-row gap-16 pb-64 mt-48 lg:mt-96 max-w-[1575px] mx-auto text-white">
        <AnimateView direction="left">
          <h1 className="text-4xl lg:text-7xl">
            Sou desenvolvedor web fullstack criativo com paixão por design e
            desenvolvimento.
          </h1>
        </AnimateView>
        <AnimateView direction="down">
          <article className="text-lg lg:text-2xl">
            Busco criar experiências de usuário memoráveis, com design
            visualmente impactante, interações e atenção meticulosa aos
            detalhes, garantindo que cada projeto atinja seu máximo potencial.
          </article>
          <article className="flex gap-6 mt-12">
            <span className="space-y-6">
              <HomeTag>• Portfolio Pessoal</HomeTag>
              <HomeTag>• Website Agência</HomeTag>
            </span>
            <span className="space-y-6">
              <HomeTag>• Website Startup</HomeTag>
              <HomeTag>• Produtos Digitais</HomeTag>
            </span>
          </article>
        </AnimateView>
      </section>
      <div className="bg-[#F5F5F5] pb-44">
        <section className="flex flex-col pt-44 pb-60 max-w-[1575px] mx-auto text-black">
          <AnimateView direction="left">
            <h1 className="w-full text-center mb-32 text-5xl lg:text-7xl uppercase">
              Serviços
            </h1>
          </AnimateView>
          <AnimateView direction="down">
            <Services />
          </AnimateView>
        </section>
        <section>
          <Marquee />
          <p className="flex items-center justify-center gap-2 text-2xl mt-4 -skew-y-3 text-black">
            <Layers /> Meu conjunto de tecnologias
          </p>
        </section>
      </div>
      <section>
        <h1 className="text-5xl lg:text-[11rem] tracking-wide uppercase font-extrabold text-center text-white/20 pt-32">
          Projetos
        </h1>
        <div className="flex flex-col gap-48 lg:gap-0 lg:flex-row max-w-[1575px] mx-auto lg:-mt-8 px-2">
          <ProjectItem
            src="/prodify-desktop.png"
            title="Prodify"
            desc="Planejador pessoal. Rápido, intuitivo e minimalista."
            stack="Fullstack"
            date="2024"
          />
          <ProjectItem
            src="/cardflex-desktop.png"
            title="Cardflex"
            desc="Cartões físicos e virtuais personalizados para a sua empresa."
            stack="Front-End"
            date="2023"
          />
        </div>
        <div className="text-center py-96 text-white">
          <div className="relative max-w-[1575px] mx-auto">
            <h1
              className={`${font.className} text-7xl lg:text-[8rem] font-extrabold uppercase leading-snug`}
            >
              Vamos dar <br /> vida às <br /> suas ideias!
            </h1>
            <GetInTouch />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-12">
            <Link href="mailto:lucassellmachado@gmail.com">
              <HomeTag className="flex items-center gap-2 hover:gap-4 cursor-pointer">
                <Mail /> oi@sellucas.com
              </HomeTag>
            </Link>
            <HomeTag className="flex items-center gap-2 hover:gap-4">
              <MapPin /> Santa Catarina, Brasil
            </HomeTag>
            <HomeTag className="flex items-center gap-2 hover:gap-4">
              <Clock /> {timeNow}
            </HomeTag>
          </div>
        </div>
      </section>
      <section className="bg-[#F5F5F5] py-64 lg:py-96 text-black px-2">
        <AnimateView direction="left">
          <h1 className="w-full text-center mb-32 text-5xl lg:text-7xl uppercase">
            Perguntas frequentes
          </h1>
        </AnimateView>
        <AnimateView direction="down">
          <Faq />
        </AnimateView>
      </section>
    </div>
  );
};

export default Home;
