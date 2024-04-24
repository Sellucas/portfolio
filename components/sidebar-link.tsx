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
        className={`p-1 rounded-lg hover:bg-gray-100 ${
          isActive ? "bg-blue-50 text-blue-600" : ""
        }`}
      >
        {children}
      </span>
    </Link>
  );
};
