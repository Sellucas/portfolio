import {
  Github,
  Home,
  Linkedin,
  Mail,
  Menu,
  MessageSquareMore,
  Scroll,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export const MenuNavbar = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4 p-0 w-52" align="end">
        <DropdownMenuLabel className="bg-blue-50 dark:bg-gray-900">
          Ações
        </DropdownMenuLabel>
        <ModeToggle />
        <DropdownMenuLabel className="bg-blue-50 dark:bg-gray-900">
          Navegação
        </DropdownMenuLabel>
        <DropdownMenuItem className="text-blue-600 hover:pl-4 transition-all">
          <Link href={"/"} className="flex gap-2 w-full">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-blue-600 hover:pl-4 transition-all">
          <Link href={"#"} className="flex gap-2 w-full">
            <Scroll className="h-4 w-4" />
            <span>Projetos</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-blue-600 hover:pl-4 transition-all">
          <Link href={"/#"} className="flex gap-2 w-full">
            <MessageSquareMore className="h-4 w-4" />
            <span>Blog</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuLabel className="bg-blue-50 dark:bg-gray-900">
          Contato
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <Link
            href={"https://github.com/Sellucas"}
            target="_blank"
            className="flex gap-2 w-full"
          >
            <Github className="h-4 w-4" />
            <span>Github</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2">
          <Link
            href={"https://www.linkedin.com/in/lucas-sell-machado"}
            target="_blank"
            className="flex gap-2 w-full"
          >
            <Linkedin className="h-4 w-4" />
            <span>Linkedin</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2">
          <Link
            href="mailto:lucassellmachado@gmail.com"
            className="flex gap-2 w-full"
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
