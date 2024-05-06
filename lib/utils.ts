import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { Post } from "#site/content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function sortPosts(pots: Array<Post>) {
  return pots.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export function formatTimeBrazilNow(): string {
  const brazilTime = new Date().toLocaleString("en-US", {
    timeZone: "America/Sao_Paulo",
  });
  const date = new Date(brazilTime);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const timeZoneAbbreviation = date
    .toLocaleTimeString("en-us", { timeZoneName: "short" })
    .split(" ")[2];

  return `${hours}:${minutes} ${timeZoneAbbreviation}`;
}
