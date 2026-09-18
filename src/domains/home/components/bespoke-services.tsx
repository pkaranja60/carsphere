// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import type { ElementType } from "react";
import {
  MdArrowForward,
  MdCalendarMonth,
  MdStorefront,
  MdSwapHoriz,
} from "react-icons/md";
import { SectionLayout } from "@/shared/components";

// ─────────────────────────────────────────────
// SECTION: Types & Data
// ─────────────────────────────────────────────

interface BespokeServiceItem {
  actionText: string;
  description: string;
  icon: ElementType;
  title: string;
}

const BESPOKE_SERVICES: BespokeServiceItem[] = [
  {
    actionText: "Calculate Terms",
    description:
      "Incentivized 4.9% finance terms across select executive portfolios, with seamless equity transfers from your existing lease structure.",
    icon: MdCalendarMonth,
    title: "Selected Seasonal Offers",
  },
  {
    actionText: "Start Instant Valuation",
    description:
      "Submit vehicle specifications for a binding fair market valuation within 15 minutes. We collect nationwide with prompt wire settlement.",
    icon: MdSwapHoriz,
    title: "Seamless Digital Trade-In",
  },
  {
    actionText: "Book VIP Appointment",
    description:
      "Experience our Beverly Hills lounge, or arrange a private enclosed demonstration vehicle delivered directly to your home or office.",
    icon: MdStorefront,
    title: "Private Showroom Viewing",
  },
];

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

function ServiceCard({
  icon: Icon,
  title,
  description,
  actionText,
}: BespokeServiceItem) {
  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-space-lg backdrop-blur-md transition-colors hover:bg-white/10 md:p-space-xl">
      <div>
        <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-primary-fixed-dim">
          <Icon className="text-3xl" />
        </div>
        <h3 className="mb-space-xs font-headline-sm font-semibold text-headline-sm text-white">
          {title}
        </h3>
        <p className="mb-space-lg font-body-sm text-body-sm text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
      <Link
        className="inline-flex items-center gap-space-xs font-label-md font-semibold text-label-md text-primary-fixed-dim uppercase tracking-wider transition-opacity hover:opacity-80"
        href="#"
      >
        <span>{actionText}</span>
        <MdArrowForward className="text-base" />
      </Link>
    </div>
  );
}

export function BespokeServices() {
  return (
    <div className="mt-space-xl bg-black text-white">
      <SectionLayout className="pb-space-xl">
        <div className="grid grid-cols-1 gap-space-md md:grid-cols-3 md:gap-space-lg">
          {BESPOKE_SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
