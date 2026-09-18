// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────
import type { ElementType } from "react";
import {
  MdOutlinePercent,
  MdOutlinePriceCheck,
  MdOutlineRoomService,
  MdOutlineVerifiedUser,
} from "react-icons/md";

// ─────────────────────────────────────────────
// SECTION: Types & Data
// ─────────────────────────────────────────────

interface TrustItem {
  description: string;
  icon: ElementType;
  title: string;
}

const TRUST_ITEMS: TrustItem[] = [
  {
    description: "Rigorous mechanical certification",
    icon: MdOutlineVerifiedUser,
    title: "150-Point Inspection",
  },
  {
    description: "Upfront market valuations, zero markup",
    icon: MdOutlinePriceCheck,
    title: "Transparent Pricing",
  },
  {
    description: "Bespoke structures from 4.9% APR",
    icon: MdOutlinePercent,
    title: "Tailored Financing",
  },
  {
    description: "Enclosed delivery & dedicated specialist",
    icon: MdOutlineRoomService,
    title: "VIP Concierge",
  },
];

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

function TrustCard({ icon: Icon, title, description }: TrustItem) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/20 bg-black/50 p-3.5 px-4 text-white shadow-lg backdrop-blur-md transition-transform hover:-translate-y-0.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10">
        <Icon className="text-2xl text-white" />
      </div>
      <div className="flex min-w-0 flex-col leading-tight">
        <span className="truncate font-bold font-label-sm text-white">
          {title}
        </span>
        <span className="truncate font-normal text-white/80 text-xs">
          {description}
        </span>
      </div>
    </div>
  );
}

export function TrustStrip() {
  return (
    <div className="pt-space-xl">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
        {TRUST_ITEMS.map((item) => (
          <TrustCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
