// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import {
  MdOutlineReceiptLong,
  MdOutlineShield,
  MdOutlineSupportAgent,
} from "react-icons/md";
import type {
  FinancialScheduleItem,
  WarrantyScheduleItem,
} from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface VehicleWarrantyFinancialProps {
  financialSchedule: FinancialScheduleItem[];
  warrantyItems: WarrantyScheduleItem[];
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleWarrantyFinancial({
  financialSchedule,
  warrantyItems,
}: VehicleWarrantyFinancialProps) {
  return (
    <section
      className="w-full border-border border-y bg-surface-container-low py-16"
      id="warranty"
    >
      <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-between space-y-6 border-0 bg-transparent p-0 shadow-none md:rounded-xl md:border md:border-border md:bg-surface-container-lowest md:p-8 md:shadow-sm lg:col-span-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MdOutlineShield className="text-2xl text-primary" />
                <span className="font-bold font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  Complete Coverage Shield
                </span>
              </div>
              <h3 className="font-bold font-display text-headline-sm text-on-surface">
                Factory &amp; Drivez Extended Warranty
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Drive with total serenity. This vehicle carries both remaining
                active Porsche factory new-vehicle warranty coverage and our
                complimentary Drivez Comprehensive Powertrain extension.
              </p>

              <div className="space-y-3 pt-2">
                {warrantyItems.map((item) => (
                  <div
                    className="flex items-center justify-between gap-3 rounded-lg border border-border bg-surface-container-low p-3.5"
                    key={item.id}
                  >
                    <div>
                      <p className="font-label-md font-semibold text-label-md text-on-surface">
                        {item.title}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {item.periodText}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded px-2 py-0.5 font-bold font-label-md text-label-md ${
                        item.statusType === "active"
                          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                          : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                      }`}
                    >
                      {item.statusBadge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 border-border border-t pt-4 font-body-sm text-body-sm text-on-surface-variant">
              <MdOutlineSupportAgent className="shrink-0 text-primary text-xl" />
              <span>
                24/7 Nationwide Porsche Roadside Assistance included across
                continental North America.
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-6 border-0 bg-transparent p-0 shadow-none md:rounded-xl md:border md:border-border md:bg-surface-container-lowest md:p-8 md:shadow-sm lg:col-span-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MdOutlineReceiptLong className="text-2xl text-primary" />
                <span className="font-bold font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  Zero Hidden Fees
                </span>
              </div>
              <h3 className="font-bold font-display text-headline-sm text-on-surface">
                Transparent Financial Schedule
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We eliminate traditional dealership dealer-prep surcharges,
                surprise doc fees, and mandatory ceramic pack markups. The price
                you see is the absolute final vehicle acquisition cost.
              </p>

              <div className="space-y-3 pt-2 font-body-md text-body-md">
                {financialSchedule.map((line) => {
                  if (line.isTotal) {
                    return (
                      <div
                        className="mt-3 flex items-center justify-between rounded-lg border border-border bg-surface-container-low px-4 py-3 font-bold font-display text-headline-sm"
                        key={line.id}
                      >
                        <span className="text-on-surface">{line.label}</span>
                        <span className="text-primary text-xl">
                          {line.value}
                        </span>
                      </div>
                    );
                  }
                  return (
                    <div
                      className="flex items-center justify-between border-border border-b py-1"
                      key={line.id}
                    >
                      <span className="text-on-surface-variant">
                        {line.label}
                      </span>
                      <span className="font-semibold text-on-surface">
                        {line.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="border-border border-t pt-3 font-body-sm text-body-sm text-on-surface-variant">
              *State and local sales taxes, Department of Motor Vehicles titling
              fees, and optional enclosed door-to-door transport are calculated
              specifically per the buyer&apos;s home jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
