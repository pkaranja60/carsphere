// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import {
  MdOutlinePayments,
  MdOutlineVerified,
  MdPublishedWithChanges,
} from "react-icons/md";
import type { GuaranteeItem } from "../types/contact.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface ContactGuaranteesProps {
  guarantees: GuaranteeItem[];
}

// ─────────────────────────────────────────────
// SECTION: Helpers
// ─────────────────────────────────────────────

function getGuaranteeIcon(iconName: string) {
  if (iconName === "published_with_changes") {
    return <MdPublishedWithChanges className="text-2xl text-primary" />;
  }
  if (iconName === "payments") {
    return <MdOutlinePayments className="text-2xl text-primary" />;
  }
  return <MdOutlineVerified className="text-2xl text-primary" />;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ContactGuarantees({ guarantees }: ContactGuaranteesProps) {
  return (
    <section className="w-full border-border/80 border-t bg-surface-container-low py-12 sm:py-14">
      <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-space-xl">
          {guarantees.map((item) => (
            <div
              className="flex items-start gap-4 rounded-xl border border-border/60 bg-surface-container-lowest/60 p-4 shadow-xs sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none"
              key={item.id}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-container-lowest text-primary shadow-xs">
                {getGuaranteeIcon(item.iconName)}
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold font-display text-headline-sm text-on-surface">
                  {item.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
