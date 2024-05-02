import { cn } from "@/lib/utils";
import { Macondo_Swash_Caps } from "next/font/google";
import Link from "next/link";

const font = Macondo_Swash_Caps({ subsets: ["latin"], weight: ["400"] });

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      className={cn("text-3xl text-foreground", font.className, className)}
      href={"/"}
    >
      SL.
    </Link>
  );
};
