"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarLinkProps } from "@/types";

export const SidebarLink = ({ href, children }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <span
        className={`p-1 rounded-lg hover:bg-muted-foreground/10 ${
          isActive
            ? "bg-blue-100 dark:bg-blue-700/10 text-blue-700 dark:text-blue-500"
            : "text-foreground dark:text-muted-foreground"
        }`}
      >
        {children}
      </span>
    </Link>
  );
};
