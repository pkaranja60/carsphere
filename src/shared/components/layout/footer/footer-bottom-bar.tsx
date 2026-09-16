// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function FooterBottomBar() {
  return (
    <div className="flex flex-col items-center justify-between gap-space-md border-border border-t pt-space-lg pb-space-lg font-body-sm text-body-sm text-on-surface-variant md:flex-row">
      <p>© 2026 Drivez Premium Motors, Inc. All rights reserved.</p>
      <div className="flex flex-wrap items-center gap-space-lg text-[13px]">
        <span>Licensed Motor Vehicle Dealer</span>
        <Link className="transition-colors hover:text-on-surface" href="#">
          Privacy Policy
        </Link>
        <Link className="transition-colors hover:text-on-surface" href="#">
          Terms of Service
        </Link>
        <Link className="transition-colors hover:text-on-surface" href="#">
          Consumer Disclosures
        </Link>
      </div>
    </div>
  );
}
