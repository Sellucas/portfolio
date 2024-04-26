import { Logo } from "@/components/logo";
import { MenuNavbar } from "@/components/menu-navbar";

export const Header = () => {
  return (
    <header className="border-b-2 fixed w-full top-0 bg-inherit z-30">
      <div className="max-w-[1575px] mx-auto flex justify-between items-center px-2 lg:px-0 h-14">
        <Logo />
        <MenuNavbar />
      </div>
    </header>
  );
};
