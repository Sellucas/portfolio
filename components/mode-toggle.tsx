"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <DropdownMenuItem
        className="flex gap-2"
        onClick={() => setTheme("light")}
      >
        <Sun className="h-4 w-4" />
        <span>Light</span>
      </DropdownMenuItem>
      <DropdownMenuItem className="flex gap-2" onClick={() => setTheme("dark")}>
        <Moon className="h-4 w-4" />
        <span>Dark</span>
      </DropdownMenuItem>
    </>
  );
}
