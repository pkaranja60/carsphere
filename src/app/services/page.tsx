// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { ServicesView } from "@/domains/services";

// ─────────────────────────────────────────────
// SECTION: Metadata
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  description:
    "Explore CarSphere Private Client Services & Advisory in Beverly Hills. Bespoke vehicle financing, 15-minute guaranteed digital trade appraisal, 150-point certified heritage warranty, and off-market collection sourcing.",
  title: "Services & Advisory | CarSphere Private Client Motoring",
};

// ─────────────────────────────────────────────
// SECTION: Page Component
// ─────────────────────────────────────────────

export default function ServicesPage() {
  return <ServicesView />;
}
