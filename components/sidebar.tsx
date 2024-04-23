import { Category } from "./category-sidebar";
import { ScrollArea } from "./ui/scroll-area";
import { SidebarLink } from "./sidebar-link";

export const Sidebar = () => {
  return (
    <div className="fixed">
      <ScrollArea className="hidden lg:block pr-6 mr-6 h-[80vh] w-56">
        <div className="flex flex-col">
          <Category name="Introdução">
            <ul className="flex flex-col gap-2 mt-2">
              <SidebarLink href="/">Portfolio</SidebarLink>
              <SidebarLink href="/projetos">Projetos</SidebarLink>
              <SidebarLink href="/sobre-mim">Sobre mim</SidebarLink>
            </ul>
          </Category>
          <Category name="Artigos">
            <ul className="flex flex-col gap-2 mt-2">
              <SidebarLink href="/nextjs-page-transition">
                Nextjs Page Transition
              </SidebarLink>
              <SidebarLink href="/nextjs-seo">Nextjs SEO</SidebarLink>
            </ul>
          </Category>
        </div>
      </ScrollArea>
    </div>
  );
};
