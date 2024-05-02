import { Category } from "@/components/category-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarLink } from "@/components/sidebar-link";
import { sidebarData } from "@/constants";

export const Sidebar = () => {
  const categories = sidebarData;

  return (
    <ScrollArea
      type="always"
      className="hidden lg:block h-[80vh] w-64 bg-background"
      data-lenis-prevent
    >
      <div className="flex flex-col">
        {categories.map((category) => (
          <Category key={category.name} name={category.name}>
            {category.links.map((link) => (
              <ul key={link.href} className="flex flex-col gap-2 mt-2">
                <SidebarLink href={link.href}>{link.label}</SidebarLink>
              </ul>
            ))}
          </Category>
        ))}
      </div>
    </ScrollArea>
  );
};
