import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { ViewTransitions } from 'next-view-transitions'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paras' Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={inter.className}>
          <HeroHighlight>
            {children}
          </HeroHighlight>
        </body>
      </html>
    </ViewTransitions>
  );
}
