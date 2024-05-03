"use client";

import { useState } from "react";

import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { FilterTag } from "./filter-tag";

interface FilterItem {
  id: string;
  title: string;
}

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
