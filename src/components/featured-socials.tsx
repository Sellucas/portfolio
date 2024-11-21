import {
  SiX,
  SiGmail,
  SiGithub,
  IconType,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface SocialButtonProps {
  href: string;
  icon: IconType;
  label: string;
}

const SocialButton = ({ href, icon: Icon, label }: SocialButtonProps) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Link href={href} target="_blank">
        <Button
          size="icon"
          variant="outline"
          className="size-10 rounded-[6px] border-muted"
        >
          <Icon size={20} className="text-muted-foreground" title="" />
        </Button>
      </Link>
    </TooltipTrigger>
    <TooltipContent
      className="mt-2 rounded-[6px] border border-muted bg-background text-muted-foreground"
      side="bottom"
    >
      {label}
    </TooltipContent>
  </Tooltip>
);

export const FeaturedSocials = () => {
  return (
    <div className="flex items-center justify-center gap-2 sm:justify-start">
      <SocialButton
        href="https://github.com/Sellucas"
        icon={SiGithub}
        label="Github"
      />
      <SocialButton
        href="https://www.linkedin.com/in/lucas-sell-machado/"
        icon={SiLinkedin}
        label="Linkedin"
      />
      <SocialButton href="https://www.x.com/Sellucas1" icon={SiX} label="X" />
      <SocialButton
        href="mailto:lucassellmachado@gmail.com"
        icon={SiGmail}
        label="lucassellmachado@gmail.com"
      />
    </div>
  );
};
