"use client";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface VehicleFinancingSummaryProps {
  apr: number;
  downPaymentAmount: number;
  downPercent: number;
  financedPrincipal: number;
  monthlyPayment: number;
  termMonths: number;
  totalInterest: number;
  vehiclePrice: string;
}

// ─────────────────────────────────────────────
// SECTION: Hero Estimate Card
// ─────────────────────────────────────────────

export function VehicleFinancingHeroCard({
  apr,
  downPercent,
  monthlyPayment,
  termMonths,
  vehiclePrice,
}: Pick<
  VehicleFinancingSummaryProps,
  "apr" | "downPercent" | "monthlyPayment" | "termMonths" | "vehiclePrice"
>) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-linear-to-br from-surface-container-high/80 via-surface-container-low to-surface-container-lowest p-5">
      <div className="flex items-center justify-between gap-2">
        <span className="font-label-sm font-semibold text-label-sm text-on-surface-variant uppercase tracking-wider">
          Capital Value
        </span>
        <span className="rounded-full border border-border bg-surface px-3 py-1 font-label-md font-semibold text-label-md text-on-surface">
          {vehiclePrice}
        </span>
      </div>

      <div className="mt-4">
        <div className="flex items-baseline gap-1.5">
          <span className="font-bold font-display text-4xl text-primary tracking-tight">
            ${monthlyPayment.toLocaleString()}
          </span>
          <span className="font-label-md text-label-md text-on-surface-variant">
            / month
          </span>
        </div>
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
          <span className="rounded-md bg-surface-container-highest px-2 py-0.5 font-semibold text-on-surface">
            {termMonths} Months
          </span>
          <span>•</span>
          <span className="rounded-md bg-surface-container-highest px-2 py-0.5 font-semibold text-on-surface">
            {downPercent}% Down
          </span>
          <span>•</span>
          <span className="rounded-md bg-surface-container-highest px-2 py-0.5 font-semibold text-on-surface">
            {apr}% APR
          </span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// SECTION: High-Transparency Amortization Breakdown
// ─────────────────────────────────────────────

export function VehicleFinancingSummaryBreakdown({
  downPaymentAmount,
  downPercent,
  financedPrincipal,
  monthlyPayment,
  termMonths,
  totalInterest,
  vehiclePrice,
}: VehicleFinancingSummaryProps) {
  const totalCommitment = downPaymentAmount + monthlyPayment * termMonths;

  return (
    <div className="space-y-4 rounded-2xl border-2 border-border/80 bg-surface-container-low/40 p-5 sm:p-6">
      <div className="flex items-center justify-between border-border/70 border-b pb-3">
        <span className="font-bold font-display text-headline-sm text-on-surface tracking-tight">
          Amortization & Capital Structure
        </span>
      </div>

      <div className="space-y-3 font-body-md text-body-md">
        <div className="flex items-center justify-between text-on-surface-variant">
          <span className="font-medium text-base">Selling Capital Price</span>
          <span className="font-semibold text-base text-on-surface">
            {vehiclePrice}
          </span>
        </div>

        <div className="flex items-center justify-between text-on-surface-variant">
          <span className="font-medium text-base">
            Down Payment Allocation ({downPercent}%)
          </span>
          <span className="font-bold text-base text-emerald-600 dark:text-emerald-400">
            -${downPaymentAmount.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between border-border/70 border-t pt-3">
          <span className="font-semibold text-base text-on-surface">
            Net Principal Financed
          </span>
          <span className="font-bold text-lg text-on-surface">
            ${financedPrincipal.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between text-on-surface-variant">
          <span className="font-medium text-base">
            Estimated Total Interest
          </span>
          <span className="font-semibold text-base text-on-surface">
            ${totalInterest.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-primary/20 bg-surface-container-lowest p-3.5 shadow-xs">
          <div>
            <span className="block font-semibold text-label-md text-on-surface">
              Total Estimated Obligation
            </span>
            <span className="font-body-xs text-on-surface-variant text-xs">
              Principal + Interest across {termMonths} months
            </span>
          </div>
          <span className="font-bold font-display text-primary text-xl">
            ${totalCommitment.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
