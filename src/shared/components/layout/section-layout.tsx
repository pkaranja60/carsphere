// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { ReactNode } from "react";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface SectionLayoutProps {
  children: ReactNode;
  className?: string;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function SectionLayout({
  children,
  className = "",
}: SectionLayoutProps) {
  return (
    <section
      className={`mx-auto w-full max-w-350 px-margin-mobile pt-space-xl md:px-margin ${className}`}
    >
      {children}
    </section>
  );
}
