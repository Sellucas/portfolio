import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
