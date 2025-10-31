"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const handleNameClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4">
        <Link href="/" onClick={handleNameClick} className="text-xs uppercase tracking-wider text-foreground transition-colors hover:text-foreground/60">
          {siteContent.meta.name || "Portfolio"}
        </Link>
        <nav className="flex items-center gap-6">
          {siteContent.nav.slice(1, 4).map((item) => (
            <Link
              key={item.id}
              href={`/${item.href}`}
              onClick={(e) => handleClick(e, item.href)}
              className="text-xs text-foreground/70 transition-all hover:text-foreground hover:translate-y-[-1px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
