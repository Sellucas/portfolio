import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { cn } from "@/lib/utils";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  keywords: [
    "Accessibility",
    "Agile Development",
    "CSS",
    "Cross-Browser Compatibility",
    "Design Responsivo",
    "Freelancer",
    "Frontend",
    "Fullstack",
    "Git",
    "HTML",
    "JavaScript",
    "Mobile Development",
    "Next.js",
    "Performance Optimization",
    "React",
    "Responsive Design",
    "SEO",
    "Testing",
    "TypeScript",
    "UI/UX Design",
    "Version Control",
    "Web Development",
  ],
  title: {
    default: "Lucas Sell's Portfolio",
    template: `%s | Lucas Sell's Portfolio`,
  },
  openGraph: {
    description:
      "Seja bem-vindo(a) ao meu portfolio! Aqui, compartilho minha paixão pela programação e design. Sou Lucas Sell Machado e acredito em uma abordagem prática, por isso, documentarei minhas últimas explorações aqui.",
    images: [""], // TODO: Add image for share template
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-pt-[3.7rem]">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          font.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="max-w-[1575px] mx-auto flex mt-32">
            <Sidebar />
            <div className="ml-0 px-2 lg:px-0 lg:ml-72 w-full">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
