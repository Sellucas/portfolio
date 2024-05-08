"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  children: React.ReactNode;
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <span
        className={`p-1 rounded-lg hover:bg-muted-foreground/10 ${
          isActive
            ? "bg-blue-50 dark:bg-gray-900 text-blue-500"
            : "text-foreground dark:text-muted-foreground"
        }`}
      >
        {children}
      </span>
    </Link>
  );
};
