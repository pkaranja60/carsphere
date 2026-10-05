// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { MdCall } from "react-icons/md";
import { ConciergeBanner } from "@/shared/components";

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ServicesHotlineBanner() {
  return (
    <ConciergeBanner
      badge="Direct Access"
      description="Our senior acquisition directors are available directly at the Beverly Hills showroom private line to coordinate appraisals, consignments, or custom allocations."
      title="Prefer an Immediate Confidential Conversation?"
      variant="inverse"
    >
      <div className="flex w-full shrink-0 flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
        <a
          className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-label-md font-semibold text-label-md text-white uppercase tracking-wider transition hover:bg-primary-container"
          href="tel:+18005550199"
        >
          <MdCall className="text-lg" />
          <span>+1 (800) 555-0199</span>
        </a>

        <Link
          className="flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-label-md font-semibold text-inverse-on-surface text-label-md transition hover:bg-white/20"
          href="/contact?format=flagship"
        >
          Book Private Suite Session
        </Link>
      </div>
    </ConciergeBanner>
  );
}
