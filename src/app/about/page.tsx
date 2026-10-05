// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { AboutView } from "@/domains/about";

// ─────────────────────────────────────────────
// SECTION: Metadata
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  description:
    "Learn about CarSphere's architectural integrity in motoring, 150-point heritage inspection protocol, and bespoke private client advisory in Beverly Hills.",
  title: "About Us | CarSphere - Architectural Integrity in Motoring",
};

// ─────────────────────────────────────────────
// SECTION: Page Component
// ─────────────────────────────────────────────

export default function AboutPage() {
  return <AboutView />;
}
