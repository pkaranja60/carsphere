"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { NotFoundBanner } from "@/shared/components";

export default function NotFound() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-background px-margin py-margin">
      {/* Decorative ambient background for luxury feel */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] h-[70vh] w-[70vw] rounded-full bg-surface-container opacity-50 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[70vh] w-[70vw] rounded-full bg-surface-container opacity-50 blur-[120px]" />
      </div>

      {/* Main Content Area */}
      <div className="z-10 w-full max-w-3xl">
        <NotFoundBanner />
      </div>

      {/* Minimal Footer / Theme Toggle */}
      <div className="absolute bottom-margin z-10 flex w-full max-w-7xl justify-between px-margin text-body-sm text-secondary">
        <p className="text-label-md uppercase tracking-widest">
          © {new Date().getFullYear()} CarSphere
        </p>

        {mounted ? (
          <button
            className="cursor-pointer text-label-md text-primary uppercase tracking-widest transition-colors hover:text-primary-container"
            onClick={toggleTheme}
            type="button"
          >
            {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        ) : null}
      </div>
    </main>
  );
}
