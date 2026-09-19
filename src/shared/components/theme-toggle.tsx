"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  if (!mounted) {
    return <div className="h-5 w-5" />;
  }

  return (
    <button
      aria-label="Toggle theme"
      className="flex h-6 w-6 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-variant/50 hover:text-primary"
      onClick={toggleTheme}
      type="button"
    >
      {theme === "dark" ? (
        <MdLightMode className="text-[18px]" />
      ) : (
        <MdDarkMode className="text-[18px]" />
      )}
    </button>
  );
}
