import type { Metadata } from "next";
import "./globals.css";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { ViewTransitions } from 'next-view-transitions';
import { ThemeProvider } from "@/components/theme-provider";
// import { AnimatePresence } from "framer-motion";
// import { PageTransition } from "@/components/PageTransition";


export const metadata: Metadata = {
  title: "Paras' Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    {/* <ViewTransitions> */}
    {/* <PageTransition> */}
          <body>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {/* <HeroHighlight> */}
                    {children}
                {/* </HeroHighlight> */}
              </ThemeProvider>
          </body>
    {/* </PageTransition> */}
    {/* </ViewTransitions> */}
        </html>
  );
}
