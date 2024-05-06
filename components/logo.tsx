import { Macondo_Swash_Caps } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";

const font = Macondo_Swash_Caps({ subsets: ["latin"], weight: ["400"] });

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      className={cn("text-3xl", font.className, className)}
      href={"/"}
    >
      SL.
    </Link>
  );
};
