import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/constants";

export const Faq = () => {
  return (
    <Accordion type="single" collapsible className="max-w-3xl mx-auto">
      {faqData.map((item, index) => (
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
