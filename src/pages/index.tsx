import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Works from "@/components/Works/Works";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>
    </>
  );
}
