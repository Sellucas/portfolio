import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import {servicesData} from "@/constants"

export function Services() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {servicesData.map((item, i) => (
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

