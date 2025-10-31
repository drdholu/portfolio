import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteContent } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
