import { Mulish } from "next/font/google";

import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

const font = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-sellucas-projects.vercel.app"),
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
    "Desenvolvimento de site",
    "Desenvolvedor web",
    "Programador web",
    "Freelancer de desenvolvimento de sites",
  ],
  title: {
    default: "Sellucas · Web Developer",
    template: `%s | Sellucas · Web Developer`,
  },
  openGraph: {
    title: "Desenvolvedor Fullstack Freelancer",
    description:
      "Seja bem-vindo(a) ao meu portfolio! Aqui, compartilho minha paixão pela programação e design. Sou Lucas Sell Machado e acredito em uma abordagem prática, por isso, documentarei minhas últimas explorações aqui.",
    images: ["/share-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-pt-[3.5rem]">
      <body
        className={`${font.className} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="bg-[#0A1827]">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
