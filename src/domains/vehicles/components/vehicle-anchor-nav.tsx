"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { useCallback } from "react";

// ─────────────────────────────────────────────
// SECTION: Data & Types
// ─────────────────────────────────────────────

export type VehicleTabId = "overview" | "specs" | "inspection" | "warranty";

interface TabItem {
  id: VehicleTabId;
  label: string;
}

const VEHICLE_TABS: TabItem[] = [
  { id: "overview", label: "1. Executive Overview" },
  { id: "specs", label: "2. Technical Specifications" },
  { id: "inspection", label: "3. 150-Point Heritage Check" },
  { id: "warranty", label: "4. Warranty & Provenance" },
];

interface VehicleTabsNavProps {
  activeTab: VehicleTabId;
  onInquire: () => void;
  onSelectTab: (tab: VehicleTabId) => void;
  price: string;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleTabsNav({
  activeTab,
  onInquire,
  onSelectTab,
  price,
}: VehicleTabsNavProps) {
  const createTabClickHandler = useCallback(
    (tabId: VehicleTabId) => () => {
      onSelectTab(tabId);
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", `#${tabId}`);
      }
    },
    [onSelectTab]
  );

  return (
    <div className="sticky top-20 z-30 block w-full border-border border-y bg-surface-container-lowest/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-400 items-center justify-between px-margin-mobile md:px-margin">
        <nav
          aria-label="Vehicle details tabs"
          className="flex min-w-0 flex-1 items-center gap-4 overflow-x-auto py-3 font-label-sm text-on-surface-variant text-xs [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-7 sm:py-4 sm:text-label-md [&::-webkit-scrollbar]:hidden"
        >
          {VEHICLE_TABS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                className={`shrink-0 whitespace-nowrap transition-colors focus:outline-none ${
                  isActive
                    ? "font-bold text-primary"
                    : "font-medium text-on-surface-variant hover:text-primary"
                }`}
                key={item.id}
                onClick={createTabClickHandler(item.id)}
                type="button"
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 pl-2 sm:gap-3 sm:border-0 sm:pl-0">
          <span className="hidden font-bold font-display text-headline-sm text-on-surface md:inline">
            {price}
          </span>
          <button
            className="rounded-lg bg-primary-container px-3 py-1 font-semibold text-on-primary text-xs shadow-sm transition-colors hover:bg-primary active:translate-y-0.5 sm:px-4 sm:py-1.5 sm:text-label-md"
            onClick={onInquire}
            type="button"
          >
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
}

// Backwards-compatible export
export const VehicleAnchorNav = VehicleTabsNav;
