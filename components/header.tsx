"use client";

import { Logo } from "@/components/logo";
import { MenuNavbar } from "@/components/menu-navbar";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className={`fixed w-full top-0 z-40 ${
        pathname === "/"
          ? "bg-[#0A1827] text-white"
          : "bg-background text-foreground"
      }`}
    >
      <div className="max-w-[1575px] mx-auto flex justify-between items-center px-2 lg:px-0 h-14">
        <Logo />
        <MenuNavbar />
      </div>
    </header>
  );
};
