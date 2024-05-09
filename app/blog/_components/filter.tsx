"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FilterTag } from "@/app/blog/_components/filter-tag";
import { FilterItem } from "@/types";

interface FilterProps {
  items: FilterItem[];
}

export const Filter = ({ items }: FilterProps) => {
  return (
    <ScrollArea>
      <div className="flex w-max space-x-4 py-4">
        {items.map((item) => (
          <FilterTag key={item.id}>{item.title}</FilterTag>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
