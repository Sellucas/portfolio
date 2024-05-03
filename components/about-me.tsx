import Link from "next/link";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export const AboutMe = () => {
  const items = [
    {
      title: (
        <div className="flex justify-center items-center min-h-[15rem]">
          <Avatar className="w-32 h-32">
            <AvatarImage
              src="https://github.com/Sellucas/portfolio/assets/75432770/9836c736-a1c3-4594-ad92-3c4d767f57e3"
              alt="Sellucas"
            />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
        </div>
      ),
    },
    {
      title: (
        <div className="flex flex-col gap-4 justify-center items-center min-h-[15rem]">
          <h1 className="text-5xl">1+</h1>
          <p className="text-sm">Anos de Experiência</p>
        </div>
      ),
    },
    {
      title: (
        <div className="flex flex-col gap-4 justify-center items-center min-h-[15rem]">
          <h1 className="text-5xl">6+</h1>
          <p className="text-sm">Projetos Completos</p>
        </div>
      ),
    },
    {
      title: (
        <div className="flex flex-col gap-4 justify-center items-center min-h-[15rem]">
          <p className="text-base flex flex-col gap-4 px-2 text-muted-foreground">
            <span>
              Um desenvolvedor web criativo com paixão por design e
              desenvolvimento. Do conceito ao lançamento, estou envolvido em
              todas as etapas do processo.
            </span>
            <span>
              Busco criar experiências de usuário memoráveis, com design
              visualmente impactante, interações e atenção meticulosa aos
              detalhes, garantindo que cada projeto atinja seu máximo potencial.
            </span>
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="flex flex-col gap-6 justify-center items-center min-h-[15rem]">
          <h2 className="text-lg">Minhas Redes</h2>
          <div className="">
            <div className="flex gap-12">
              <Link
                href={"https://www.linkedin.com/in/lucas-sell-machado"}
                target="_blank"
              >
                <Image
                  src="https://github.com/Sellucas/portfolio/assets/75432770/fd73ba23-e6e7-4c4b-99f6-3ccdddf9d4af"
                  alt=""
                  width={60}
                  height={60}
                />
              </Link>
              <Link href={"https://github.com/Sellucas"} target="_blank">
                <Image
                  src="https://github.com/Sellucas/portfolio/assets/75432770/4d90096f-2e5a-4416-be4b-312fe524ac5a"
                  alt=""
                  width={60}
                  height={60}
                />
              </Link>
            </div>
          </div>
          <div className="flex">
            <Link href={"mailto:lucassellmachado@gmail.com"} target="_blank">
              <Image
                src="https://github.com/Sellucas/portfolio/assets/75432770/93b59f34-105f-4137-a95c-c4db0f06c5de"
                alt=""
                width={60}
                height={60}
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className="flex flex-col gap-6 justify-center items-center min-h-[15rem]">
          <h2 className="text-lg">Minhas tecnologias</h2>
          <div className="flex gap-6">
            <Image
              src="https://github.com/Sellucas/portfolio/assets/75432770/db667ac9-6c50-4051-8f43-85f4c6ac86af"
              alt=""
              width={45}
              height={45}
            />
            <Image
              src="https://github.com/Sellucas/portfolio/assets/75432770/0a1577f7-4f9e-4bef-a7b7-9f9a51124b5d"
              alt=""
              width={45}
              height={45}
            />
            <Image
              src="https://github.com/Sellucas/portfolio/assets/75432770/4324cdf6-756c-4f87-85c6-c0656be94599"
              alt=""
              width={45}
              height={45}
            />
          </div>
          <div className="flex gap-6">
            <Image
              src="https://github.com/Sellucas/portfolio/assets/75432770/7c188080-1afb-4981-9e0b-d0c45b67b90e"
              alt=""
              width={45}
              height={45}
            />
            <Image
              src="https://github.com/Sellucas/portfolio/assets/75432770/aa39d4f7-202a-4d37-b6ac-9d75cae03268"
              alt=""
              width={45}
              height={45}
            />
            <Image
              src="https://github.com/Sellucas/portfolio/assets/75432770/a6aa824e-9ca4-4f00-be23-d87952577622"
              alt=""
              width={45}
              height={45}
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className="flex flex-col gap-4 justify-center items-center min-h-[15rem]">
          <p className="text-base flex flex-col gap-4 px-2 text-muted-foreground">
            <span>
              Ajudando startups, serviços B2B e pequenas empresas com soluções
              de design personalizadas que incluem desde landing pages até Web
              App.
            </span>
            <span>
              Além disso, colaboro estreitamente com meus clientes para entender
              suas necessidades específicas e objetivos comerciais, adaptando
              cada solução para atender às suas demandas exclusivas.
            </span>
          </p>
        </div>
      ),
    },
  ];

  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
};
