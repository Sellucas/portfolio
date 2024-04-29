import { Macondo_Swash_Caps } from "next/font/google";
import Link from "next/link";

const font = Macondo_Swash_Caps({ subsets: ["latin"], weight: ["400"] });

export const Logo = () => {
  return (
    <Link className={`${font.className} text-3xl text-foreground`} href={"/"}>
      Sellucas
    </Link>
  );
};
