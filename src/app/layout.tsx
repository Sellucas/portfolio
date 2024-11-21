import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sellucas.vercel.app"),
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
  title: "Sellucas - Software Developer",
  description:
    "Welcome to my portfolio! Here, I share my passion for programming and design. I’m Lucas Sell Machado, and I believe in a hands-on approach, so I’ll document my latest explorations here.",
  openGraph: {
    title: "Software Developer",
    description:
      "Welcome to my portfolio! Here, I share my passion for programming and design. I’m Lucas Sell Machado, and I believe in a hands-on approach, so I’ll document my latest explorations here.",
    images: ["/share-image.jpg"],
  },
  twitter: {
    title: "Software Developer",
    description:
      "Welcome to my portfolio! Here, I share my passion for programming and design. I’m Lucas Sell Machado, and I believe in a hands-on approach, so I’ll document my latest explorations here.",
    images: ["/share-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("cursor-default antialiased", font.className)}>
        <TooltipProvider delayDuration={100}>
          <main className="mx-auto my-10 min-h-screen max-w-2xl px-2 text-[#ecececf4]">
            {children}
            <Footer />
          </main>
        </TooltipProvider>
      </body>
    </html>
  );
}
