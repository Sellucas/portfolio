import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface HeaderProps {
  firstLink: { text: string; href: string };
  secondLink?: { text: string; href: string };
}

const Header = ({ firstLink, secondLink }: HeaderProps) => {
  const isFirstLinkMuted = Boolean(secondLink);

  return (
    <header className="mb-10 flex flex-col items-start justify-between gap-2 md:flex-row">
      <nav className="flex items-center gap-2 text-sm">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  className={`${isFirstLinkMuted ? "text-muted-foreground" : "text-white"}`}
                  href={`/${firstLink.href}`}
                >
                  {firstLink.text}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {secondLink && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link className="text-white" href={secondLink.href}>
                      {secondLink.text}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
      <div className="flex items-center gap-2 text-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
        Available for work
      </div>
    </header>
  );
};

export default Header;
