// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import {
  MdOutlinePayments,
  MdOutlinePublishedWithChanges,
  MdOutlineVerified,
} from "react-icons/md";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function FooterGuarantees() {
  return (
    <div className="grid grid-cols-1 gap-space-lg border-border border-b pb-space-xl md:grid-cols-3">
      <div className="flex items-start gap-space-md rounded-xl border border-border bg-white p-space-md shadow-sm">
        <MdOutlineVerified className="text-[28px] text-primary" />
        <div>
          <h4 className="font-label-lg font-semibold text-label-lg text-on-surface">
            150-Point Inspection
          </h4>
          <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
            Rigorous mechanical and cosmetic testing for enduring quality
            assurance.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-space-md rounded-xl border border-border bg-white p-space-md shadow-sm">
        <MdOutlinePublishedWithChanges className="text-[28px] text-primary" />
        <div>
          <h4 className="font-label-lg font-semibold text-label-lg text-on-surface">
            7-Day Buyback Guarantee
          </h4>
          <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
            Experience your vehicle with 500 worry-free miles and complete peace
            of mind.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-space-md rounded-xl border border-border bg-white p-space-md shadow-sm">
        <MdOutlinePayments className="text-[28px] text-primary" />
        <div>
          <h4 className="font-label-lg font-semibold text-label-lg text-on-surface">
            Transparent Pricing
          </h4>
          <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
            Direct market valuation, zero dealer markups, and clear upfront
            terms.
          </p>
        </div>
      </div>
    </div>
  );
}
