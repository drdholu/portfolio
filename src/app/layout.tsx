import type { Metadata } from "next";
import "./globals.css";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { ViewTransitions } from 'next-view-transitions';
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Paras' Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <HeroHighlight>
              {children}
            </HeroHighlight>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
