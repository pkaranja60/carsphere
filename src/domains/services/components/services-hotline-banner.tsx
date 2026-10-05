// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { MdCall } from "react-icons/md";

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ServicesHotlineBanner() {
  return (
    <section className="mx-auto w-full max-w-400 px-margin-mobile pb-12 sm:pb-16 md:px-margin md:pb-20 lg:pb-24">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-inverse-surface p-6 text-inverse-on-surface shadow-md sm:p-8 lg:flex-row lg:gap-10 lg:p-10">
        <div className="max-w-xl text-center lg:text-left">
          <span className="font-label-sm font-semibold text-label-sm text-primary-fixed uppercase tracking-wider">
            Direct Access
          </span>
          <h3 className="mt-1 mb-2 font-bold font-display text-headline-sm text-inverse-on-surface sm:text-headline-md">
            Prefer an Immediate Confidential Conversation?
          </h3>
          <p className="font-body-sm text-inverse-on-surface/80 text-xs leading-relaxed sm:text-sm">
            Our senior acquisition directors are available directly at the
            Beverly Hills showroom private line to coordinate appraisals,
            consignments, or custom allocations.
          </p>
        </div>

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
      </div>
    </section>
  );
}
