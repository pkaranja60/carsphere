// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen w-full flex-col bg-surface pt-30">
        {children}
      </main>
      <Footer />
    </>
  );
}
