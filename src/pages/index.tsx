import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Works from "@/components/Works/Works";
import { Teko } from "next/font/google";

const teko = Teko({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <>
      <main className={teko.className}>
        <Hero />
        <About />
        <Works />
      </main>
    </>
  );
}
