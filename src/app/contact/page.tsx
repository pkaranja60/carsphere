// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { ContactView } from "@/domains/contact";

// ─────────────────────────────────────────────
// SECTION: Metadata
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  description:
    "Schedule a bespoke private viewing at our Beverly Hills Flagship Lounge, arrange an at-home white-glove test drive, or initiate a live 4K remote walkaround at CarSphere.",
  title: "Book a Viewing & Contact | CarSphere Private Client Allocation",
};

// ─────────────────────────────────────────────
// SECTION: Page Component
// ─────────────────────────────────────────────

export default function ContactPage() {
  return <ContactView />;
}
