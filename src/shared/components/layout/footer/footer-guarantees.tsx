// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { ElementType } from "react";
import {
  MdOutlinePayments,
  MdOutlinePublishedWithChanges,
  MdOutlineVerified,
} from "react-icons/md";

// ─────────────────────────────────────────────
// SECTION: Types & Data
// ─────────────────────────────────────────────

interface GuaranteeItem {
  description: string;
  icon: ElementType;
  title: string;
}

const GUARANTEE_ITEMS: GuaranteeItem[] = [
  {
    description:
      "Rigorous mechanical and cosmetic testing for enduring quality assurance.",
    icon: MdOutlineVerified,
    title: "150-Point Inspection",
  },
  {
    description:
      "Experience your vehicle with 500 worry-free miles and complete peace of mind.",
    icon: MdOutlinePublishedWithChanges,
    title: "7-Day Buyback Guarantee",
  },
  {
    description:
      "Direct market valuation, zero dealer markups, and clear upfront terms.",
    icon: MdOutlinePayments,
    title: "Transparent Pricing",
  },
];

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

function GuaranteeCard({ icon: Icon, title, description }: GuaranteeItem) {
  return (
    <div className="flex items-start gap-space-md rounded-xl border border-border bg-surface-container-lowest p-space-md shadow-sm">
      <Icon className="text-[38px] text-primary" />
      <div>
        <h4 className="font-label-lg font-semibold text-label-lg text-on-surface">
          {title}
        </h4>
        <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
          {description}
        </p>
      </div>
    </div>
  );
}

export function FooterGuarantees() {
  return (
    <div className="grid grid-cols-1 gap-space-lg border-border border-b pb-space-xl md:grid-cols-3">
      {GUARANTEE_ITEMS.map((guarantee) => (
        <GuaranteeCard key={guarantee.title} {...guarantee} />
      ))}
    </div>
  );
}
