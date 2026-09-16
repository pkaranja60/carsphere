"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-margin">
      <div className="flex max-w-2xl flex-col items-center gap-space-md rounded-xl border border-outline-variant bg-surface p-margin text-center shadow-level-2">
        <h1 className="text-display text-primary">Architectural Motoring</h1>
        <p className="text-body-lg text-secondary">
          Design system foundation initialized. Ready for layout and component
          development.
        </p>
        <div className="mt-space-md rounded-md bg-surface-container p-space-md">
          <p className="text-on-surface text-price-card">$124,500</p>
          <p className="text-label-sm text-tertiary uppercase tracking-widest">
            Starting Price
          </p>
        </div>

        {mounted ? (
          <button
            className="mt-space-lg rounded-md bg-primary px-6 py-3 text-label-lg text-on-primary transition-all hover:brightness-92"
            onClick={toggleTheme}
            type="button"
          >
            Toggle {resolvedTheme === "dark" ? "Light" : "Dark"} Mode
          </button>
        ) : null}
      </div>
    </main>
  );
}
