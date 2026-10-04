"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import {
  MdKeyboardArrowDown,
  MdOutlineFavoriteBorder,
  MdPersonOutline,
  MdRoomService,
} from "react-icons/md";
import { ThemeToggle } from "@/shared/components/theme-toggle";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface MobileNavPreferencesProps {
  onClose: () => void;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function MobileNavPreferences({ onClose }: MobileNavPreferencesProps) {
  return (
    <div className="mt-8 flex flex-col gap-5 border-border border-t pt-6">
      <Link
        className="flex items-center gap-3 text-on-surface outline-none transition-colors hover:text-primary focus:outline-none"
        href="/account"
        onClick={onClose}
      >
        <MdPersonOutline className="text-primary text-xl" />
        <span className="font-semibold text-label-lg">My Account</span>
      </Link>

      <Link
        className="flex items-center gap-3 text-on-surface outline-none transition-colors hover:text-primary focus:outline-none"
        href="/garage"
        onClick={onClose}
      >
        <MdOutlineFavoriteBorder className="text-primary text-xl" />
        <span className="font-semibold text-label-lg">Saved Vehicles</span>
        <span className="ml-auto rounded-full bg-surface-container-high px-2 py-0.5 font-bold text-[10px] text-on-surface-variant shadow-sm">
          0
        </span>
      </Link>

      <Link
        className="flex items-center gap-3 text-on-surface outline-none transition-colors hover:text-primary focus:outline-none"
        href="/concierge"
        onClick={onClose}
      >
        <MdRoomService className="text-primary text-xl" />
        <span className="font-semibold text-label-lg">
          Speak with Concierge
        </span>
      </Link>

      <div className="mt-2 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-label-lg text-on-surface">
            Currency
          </span>
          <div className="relative flex items-center">
            <select
              aria-label="Select Currency"
              className="cursor-pointer appearance-none rounded-md border border-border bg-surface-container-low py-1.5 pr-7 pl-3 font-semibold text-label-md text-on-surface outline-none transition-colors hover:text-primary focus:ring-0"
              defaultValue="USD"
              name="currency-mobile"
            >
              <option value="USD">USD ($)</option>
              <option value="KES">KES (KSh)</option>
              <option value="GBP">GBP (£)</option>
              <option value="EUR">EUR (€)</option>
            </select>
            <MdKeyboardArrowDown className="pointer-events-none absolute right-2 text-on-surface-variant" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-semibold text-label-lg text-on-surface">
            Appearance
          </span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
