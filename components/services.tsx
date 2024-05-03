import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function Services() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Design e Desenvolvimento Web",
    description:
      "Soluções completas de design e desenvolvimento web, criando sites e aplicativos modernos.",
    header:
      "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?w=740&t=st=1714501522~exp=1714502122~hmac=eda5ad130f80aa2099ee93068435498589947a2237d7bda880242f743a95b5d1",
    className: "md:col-span-2",
  },
  {
    title: "Otimização de SEO",
    description:
      "Maximize sua visibilidade online e aumente seu tráfego orgânico.",
    header:
      "https://img.freepik.com/free-vector/seo-analytics-concept-illustration_114360-9862.jpg?w=740&t=st=1714501302~exp=1714501902~hmac=0a0a72140b3eda20f3bd5f2a2b17e52d4d3bd0a98a83f335a3dbaf27a2227e71",
    className: "md:col-span-1",
  },
  {
    title: "Alta Velocidade",
    description:
      "Prioridade em velocidade e o desempenho em todos os projetos.",
    header:
      "https://img.freepik.com/free-vector/fast-loading-concept-illustration_114360-747.jpg?w=826&t=st=1714504530~exp=1714505130~hmac=7f00a412cd0d491b56f10096a51e85695deb35c25c9fc7cdccf2fdb0fcc5bf86",
    className: "md:col-span-1",
  },
  {
    title: "Design Orientado para Conversão",
    description:
      "Designs orientados para conversão que transformam visitantes em clientes.",
    header:
      "https://img.freepik.com/free-vector/business-growth-concept-illustration_114360-8766.jpg?w=740&t=st=1714505068~exp=1714505668~hmac=af20b6608bcdea378e0407f66ea62d116f34d0f986b8814246c2f792170c55e4",
    className: "md:col-span-2",
  },
];
