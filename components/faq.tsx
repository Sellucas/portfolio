import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FaqProps {
  value: string;
  title: string;
  description: string;
}

const faq = [
  {
    value: "item-1",
    title: "Qual serviço você oferece?",
    description:
      "Presto serviços de desenvolvimento de landing pages e web app. Serviços complementares de design, animação e escrita também poderão ser prestados com base no projeto.",
  },
  {
    value: "item-2",
    title: "Quanto você cobra em uma landing page?",
    description:
      "O custo de uma landing page pode variar dependendo de vários fatores, integrações com sistemas externos, requisitos de otimização para mecanismos de busca (SEO) e outros. Geralmente, recomendo entrar em contato para discutir suas necessidades específicas, para fornecer um orçamento personalizado que atenda às suas expectativas e requisitos de projeto.",
  },
  {
    value: "item-3",
    title: "Com quais tecnologias você trabalha?",
    description:
      "Utilizo o Figma para criar o conceito do design, para a implementação da parte visual do projeto utilizo o React.js, para a parte de lógica do web app utilizo Node.js que me permite construir aplicações escaláveis e eficientes. Durante todo o processo de desenvolvimento, realizo testes para garantir a qualidade e a estabilidade do projeto, como cypress e jest.",
  },
  {
    value: "item-4",
    title: "Quanto tempo leva cada projeto?",
    description:
      "Em média, uma landing page pode levar cerca de duas semanas, desde a concepção inicial até os testes finais. Já um web app pode variar significativamente, desde algumas semanas para projetos mais simples até vários meses para projetos mais complexos.",
  },
  {
    value: "item-5",
    title: "Qual é o processo de cada projeto?",
    description:
      "Começando com um levantamento detalhado dos requisitos do cliente e uma fase de ideação, passo para a criação de wireframes e o desenvolvimento do design. Finalmente, transformo o design em código funcional, mantendo uma comunicação transparente com o cliente em todas as etapas.",
  },
];

export const Faq = () => {
  return (
    <Accordion type="single" collapsible className="max-w-3xl mx-auto">
      {faq.map((item, index) => (
        <AccordionItem key={index} value={item.value}>
          <AccordionTrigger className="text-2xl">{item.title}</AccordionTrigger>
          <AccordionContent className="text-lg">
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
