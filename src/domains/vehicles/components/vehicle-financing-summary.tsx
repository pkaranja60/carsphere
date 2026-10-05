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
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleFinancingSummary({
  apr,
  downPaymentAmount,
  downPercent,
  financedPrincipal,
  monthlyPayment,
  termMonths,
  totalInterest,
  vehiclePrice,
}: VehicleFinancingSummaryProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-surface-container-low p-4">
        <div className="flex items-center justify-between">
          <span className="font-label-sm font-semibold text-label-sm text-on-surface-variant uppercase tracking-wider">
            Selling Price
          </span>
          <span className="font-bold font-display text-headline-sm text-on-surface">
            {vehiclePrice}
          </span>
        </div>
        <div className="mt-4 flex items-baseline justify-between border-border border-t pt-3">
          <div>
            <span className="font-label-sm font-semibold text-label-sm text-primary uppercase">
              Estimated Monthly
            </span>
            <p className="font-body-sm text-on-surface-variant text-xs">
              {termMonths} mo · {downPercent}% down · {apr}% APR
            </p>
          </div>
          <span className="font-bold font-display text-display text-primary">
            ${monthlyPayment.toLocaleString()}
            <span className="font-body-sm font-normal text-body-sm text-on-surface-variant">
              /mo
            </span>
          </span>
        </div>
      </div>

      <div className="space-y-2 rounded-xl border border-border bg-surface-container-lowest p-4">
        <span className="font-label-sm font-semibold text-label-sm text-on-surface uppercase tracking-wider">
          Financing Summary
        </span>
        <div className="space-y-1.5 pt-1 font-body-sm text-body-sm">
          <div className="flex justify-between text-on-surface-variant">
            <span>Vehicle Capital</span>
            <span className="text-on-surface">{vehiclePrice}</span>
          </div>
          <div className="flex justify-between text-on-surface-variant">
            <span>Down Payment ({downPercent}%)</span>
            <span className="text-on-surface">
              -${downPaymentAmount.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-on-surface-variant">
            <span>Amount Financed</span>
            <span className="text-on-surface">
              ${financedPrincipal.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-on-surface-variant">
            <span>Estimated Total Interest</span>
            <span className="text-on-surface">
              ${totalInterest.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
