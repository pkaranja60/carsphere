// ─────────────────────────────────────────────
// SECTION: Constants & Interfaces
// ─────────────────────────────────────────────

export interface CustomizedFinancingTerms {
  apr: number;
  downPayment: number;
  downPaymentPercent: number;
  monthlyPayment: number;
  termMonths: number;
}

export const TERM_OPTIONS = [24, 36, 48, 60, 72];
export const DOWN_PAYMENT_PRESETS = [0, 5, 10, 15, 20, 25, 30, 50];

export const CREDIT_TIERS = [
  {
    apr: 4.9,
    id: "tier-1",
    label: "Tier 1: Excellent (740+ Score) · 4.9% APR",
  },
  { apr: 5.9, id: "tier-2", label: "Tier 2: Great (680–739 Score) · 5.9% APR" },
  {
    apr: 7.4,
    id: "tier-3",
    label: "Tier 3: Standard (620–679 Score) · 7.4% APR",
  },
];

// ─────────────────────────────────────────────
// SECTION: Calculation Helpers
// ─────────────────────────────────────────────

export function calculateMonthlyPayment(
  principal: number,
  annualApr: number,
  months: number
): number {
  if (principal <= 0) {
    return 0;
  }
  const monthlyRate = annualApr / 100 / 12;
  if (monthlyRate === 0) {
    return Math.round(principal / months);
  }
  const factor = (1 + monthlyRate) ** months;
  return Math.round((principal * (monthlyRate * factor)) / (factor - 1));
}
