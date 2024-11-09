import type { Metadata } from "next";
import "./globals.css";
// import { HeroHighlight } from "@/components/ui/hero-highlight";
import { ThemeProvider } from "@/components/theme-provider";
import { ViewTransitions } from "next-view-transitions";
// import { DockDemo } from "@/components/DockDemo";

export const metadata: Metadata = {
  title: "Paras Dhole",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">

          <body>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                >
                <ViewTransitions>
                {/* <HeroHighlight> */}
                    {children}
                {/* </HeroHighlight> */}
                    {/* <DockDemo /> */}

                </ViewTransitions>
              </ThemeProvider>
          </body>
        </html>
  );
}
