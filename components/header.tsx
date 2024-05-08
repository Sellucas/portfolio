"use client";

import { MenuNavbar } from "@/components/menu-navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

import { Logo } from "@/components/logo";

export const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

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
        <MenuNavbar onOpenChange={handleOpenChange} />
      </div>
      <motion.div
        className="w-full h-full bg-black fixed z-30"
        style={{ opacity: open ? 0.9 : 0 }}
        animate={{ opacity: open ? 0.9 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </header>
  );
};
