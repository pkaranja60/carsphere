"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { useCallback } from "react";
import {
  MdCheck,
  MdOutlineFileDownload,
  MdOutlineVerified,
} from "react-icons/md";
import type { InspectionCheckItem } from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface VehicleInspectionReportProps {
  inspectionDate: string;
  items: InspectionCheckItem[];
  technician: string;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleInspectionReport({
  inspectionDate,
  items,
  technician,
}: VehicleInspectionReportProps) {
  const handleDownload = useCallback(() => {
    window.print();
  }, []);

  return (
    <section className="w-full bg-surface py-16" id="inspection">
      <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
        <div className="rounded-xl border border-border bg-surface-container-lowest p-5 shadow-none md:p-12 md:shadow-sm">
          <div className="flex flex-col justify-between gap-6 border-border border-b pb-8 lg:flex-row lg:items-center">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <MdOutlineVerified className="text-2xl text-tertiary" />
                <span className="font-bold font-label-sm text-label-sm text-tertiary uppercase tracking-wider">
                  150-Point Certification Report
                </span>
              </div>
              <h2 className="font-bold font-display text-headline-lg text-on-surface">
                Heritage Technical Inspection
              </h2>
              <p className="mt-1 font-body-md text-body-md text-on-surface-variant">
                Inspected on {inspectionDate} by Master Porsche Technician{" "}
                {technician}
              </p>
            </div>

            <button
              className="flex items-center gap-2 self-start rounded-lg border border-border bg-surface-container-low px-5 py-3 font-label-md font-semibold text-label-md text-on-surface shadow-none transition-colors hover:bg-surface-container sm:shadow-sm"
              onClick={handleDownload}
              type="button"
            >
              <MdOutlineFileDownload className="text-lg text-primary" />
              <span>Download Certified Inspection PDF (4.2 MB)</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                className="space-y-3 rounded-xl border border-border bg-surface-container-low p-5 shadow-none md:shadow-sm"
                key={item.id}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold font-label-lg text-label-lg text-on-surface">
                    {item.title}
                  </span>
                  <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 font-bold font-label-sm text-emerald-800 text-label-sm dark:bg-emerald-950 dark:text-emerald-300">
                    {item.resultBadge}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.description}
                </p>
                <div className="flex items-center gap-1.5 font-label-sm font-semibold text-label-sm text-tertiary">
                  <MdCheck className="text-base" />
                  <span>
                    {item.completedChecks}/{item.totalChecks} checks completed
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
