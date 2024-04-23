import { Logo } from "@/components/logo";
import { MenuNavbar } from "@/components/menu-navbar";

export const Header = () => {
  return (
    <header className="border-b-2">
      <div className="max-w-[1575px] mx-auto flex justify-between items-center px-2 h-14">
        <Logo />
        <MenuNavbar />
      </div>
    </header>
  );
};
