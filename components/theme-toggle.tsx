"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="inline-flex h-9 items-center rounded-md border px-3 text-sm text-foreground hover:bg-accent"
    >
      {current === "dark" ? "Light" : "Dark"}
    </button>
  );
}


