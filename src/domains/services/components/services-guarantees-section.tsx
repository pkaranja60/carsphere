// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import {
  MdCheckCircle,
  MdOutlineSecurity,
  MdPublishedWithChanges,
  MdVerified,
} from "react-icons/md";
import type { GuaranteeItem } from "../types/services.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface ServicesGuaranteesSectionProps {
  guarantees: GuaranteeItem[];
}

// ─────────────────────────────────────────────
// SECTION: Helpers
// ─────────────────────────────────────────────

function getGuaranteeIcon(iconName: GuaranteeItem["iconName"]) {
  switch (iconName) {
    case "published_with_changes":
      return <MdPublishedWithChanges className="text-2xl text-primary" />;
    case "shield":
      return <MdOutlineSecurity className="text-2xl text-primary" />;
    default:
      return <MdVerified className="text-2xl text-primary" />;
  }
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ServicesGuaranteesSection({
  guarantees,
}: ServicesGuaranteesSectionProps) {
  return (
    <section
      className="relative mx-auto w-full max-w-400 px-margin-mobile py-12 sm:py-16 md:px-margin md:py-20 lg:py-24"
      id="guarantees"
    >
      <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
        <span className="font-label-sm font-semibold text-label-sm text-primary uppercase tracking-wider">
          The CarSphere Standard
        </span>
        <h2 className="mt-1 font-bold font-display text-headline-md text-on-surface sm:text-headline-lg">
          Client Guarantees &amp; Transparency Protocol
        </h2>
        <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant leading-relaxed sm:text-body-md">
          Every vehicle offered or managed under CarSphere Advisory is subject
          to absolute integrity guidelines and verifiable mechanical standards.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-space-lg">
        {guarantees.map((item) => (
          <div
            className="flex flex-col justify-between rounded-2xl border border-border bg-surface-container-lowest p-6 shadow-xs transition hover:border-border-strong sm:p-space-xl"
            key={item.id}
          >
            <div>
              <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-xl border border-border/80 bg-surface-container-high">
                {getGuaranteeIcon(item.iconName)}
              </div>
              <span className="font-label-sm font-semibold text-[11px] text-primary uppercase tracking-wider sm:text-xs">
                {item.badge}
              </span>
              <h3 className="mt-1 mb-2 font-bold font-display text-headline-sm text-on-surface">
                {item.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 border-border/80 border-t pt-4 font-label-sm text-on-surface text-xs sm:mt-8">
              <MdCheckCircle className="shrink-0 text-base text-primary" />
              <span>{item.signoff}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
