// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import {
  MdCall,
  MdLocalShipping,
  MdLocationOn,
  MdSchedule,
} from "react-icons/md";
import { ThemeToggle } from "@/shared/components/theme-toggle";

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function HeaderTopBar() {
  return (
    <div className="hidden w-full border-border border-b bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant md:block">
      <div className="mx-auto flex h-10 max-w-400 items-center justify-between gap-4 px-margin-mobile md:px-margin">
        <div className="flex min-w-0 flex-1 items-center gap-space-lg overflow-x-auto whitespace-nowrap py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-1.5">
            <MdLocationOn className="text-base text-primary" />
            <span>
              Showroom:{" "}
              <strong className="font-medium text-on-surface">
                9400 Wilshire Blvd, Beverly Hills, CA
              </strong>
            </span>
          </div>
          <span className="hidden text-border-strong sm:inline">|</span>
          <div className="hidden items-center gap-1.5 sm:flex">
            <MdLocalShipping className="text-base text-primary" />
            <span>Nationwide Enclosed White-Glove Delivery</span>
          </div>
          <span className="hidden text-border-strong md:inline">|</span>
          <div className="hidden items-center gap-1.5 md:flex">
            <MdSchedule className="text-base text-primary" />
            <span>Mon–Sat: 9:00 AM – 8:00 PM</span>
          </div>
        </div>
        <div className="ml-auto flex shrink-0 items-center gap-space-md">
          <div className="flex items-center gap-1.5">
            <MdCall className="text-base text-primary" />
            <span className="hidden text-on-surface-variant lg:inline">
              Direct Line:
            </span>
            <a
              className="font-semibold text-on-surface tracking-wide transition-colors hover:text-primary"
              href="tel:18005550199"
            >
              +1 (800) 555-0199
            </a>
          </div>
          <span className="text-border-strong">|</span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
