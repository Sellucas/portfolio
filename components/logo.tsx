import { Sacramento } from "next/font/google";
import Link from "next/link";

const font = Sacramento({ subsets: ["latin"], weight: ["400"] });

export const Logo = () => {
  return (
    <Link className={`${font.className} text-4xl text-foreground`} href={"/"}>
      Sellucas
    </Link>
  );
};
