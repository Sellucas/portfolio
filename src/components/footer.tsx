import { FeaturedSocials } from "./featured-socials";
import ShineBorder from "./magicui/shine-border";

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-10 px-2 py-10">
      <ShineBorder
        className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-[6px] border bg-background"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Get in touch
        </span>
      </ShineBorder>
      <FeaturedSocials />
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sellucas
      </p>
    </footer>
  );
};

export default Footer;
