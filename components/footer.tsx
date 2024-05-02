import { Copy, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="border-t-[1px] pt-16 pb-8 border-muted-foreground">
      <div className="max-w-[1575px] mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logo className="text-5xl" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-bold uppercase">Navegação</h2>
              <ul className="font-medium text-muted-foreground space-y-4">
                <li>
                  <Link
                    href="https://flowbite.com/"
                    className="hover:underline hover:text-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline hover:text-foreground"
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline hover:text-foreground"
                  >
                    Sobre Mim
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold uppercase">Blog</h2>
              <ul className="font-medium text-muted-foreground space-y-4">
                <li>
                  <Link
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline hover:text-foreground"
                  >
                    Artigos
                  </Link>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline hover:text-foreground"
                  >
                    Projetos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm sm:text-center">
            All rights reserved. © Copyright Sellucas 2024
          </p>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4">
            <Link
              className="text-muted-foreground hover:text-foreground"
              href={"https://www.linkedin.com/in/lucas-sell-machado"}
              target="_blank"
            >
              <Linkedin />
              <span className="sr-only">Linkedin page</span>
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href={"https://github.com/Sellucas"}
              target="_blank"
            >
              <Github />
              <span className="sr-only">Github page</span>
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href={"mailto:lucassellmachado@gmail.com"}
              target="_blank"
            >
              <Mail />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
