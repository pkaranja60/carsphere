"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { useEffect, useState } from "react";

// ─────────────────────────────────────────────
// SECTION: Data & Types
// ─────────────────────────────────────────────

interface AnchorItem {
  href: string;
  label: string;
}

const ANCHOR_LINKS: AnchorItem[] = [
  { href: "#overview", label: "1. Executive Overview" },
  { href: "#specs", label: "2. Technical Specifications" },
  { href: "#inspection", label: "3. 150-Point Heritage Check" },
  { href: "#warranty", label: "4. Warranty & Provenance" },
  { href: "#inquiry", label: "5. Book Viewing Suite" },
];

interface VehicleAnchorNavProps {
  price: string;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleAnchorNav({ price }: VehicleAnchorNavProps) {
  const [activeHash, setActiveHash] = useState("#overview");

  useEffect(() => {
    // Tracks active section via IntersectionObserver for smooth anchor highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    for (const link of ANCHOR_LINKS) {
      const el = document.getElementById(link.href.slice(1));
      if (el) {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-20 z-30 hidden w-full border-border border-y bg-surface-container-lowest shadow-sm md:block">
      <div className="mx-auto flex max-w-400 items-center justify-between px-margin-mobile md:px-margin">
        <nav
          aria-label="In-page section navigation"
          className="flex items-center gap-7 overflow-x-auto py-4 font-label-md text-label-md text-on-surface-variant"
        >
          {ANCHOR_LINKS.map((item) => {
            const isActive = activeHash === item.href;
            return (
              <a
                className={`whitespace-nowrap transition-colors ${
                  isActive
                    ? "font-bold text-primary"
                    : "font-medium text-on-surface-variant hover:text-primary"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <span className="font-bold font-display text-headline-sm text-on-surface">
            {price}
          </span>
          <Link
            className="rounded-lg bg-primary-container px-4 py-1.5 font-label-md font-semibold text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary"
            href="#inquiry"
          >
            Inquire
          </Link>
        </div>
      </div>
    </div>
  );
}
