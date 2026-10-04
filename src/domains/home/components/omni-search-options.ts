// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface OmniOption {
  id: string;
  label: string;
}

// ─────────────────────────────────────────────
// SECTION: Datasets
// ─────────────────────────────────────────────

export const OMNI_MAKE_OPTIONS: OmniOption[] = [
  { id: "all", label: "All Makes & Models" },
  { id: "Porsche", label: "Porsche" },
  { id: "BMW", label: "BMW" },
  { id: "Genesis", label: "Genesis" },
  { id: "Mercedes-Benz", label: "Mercedes-Benz" },
  { id: "Audi", label: "Audi" },
  { id: "Lexus", label: "Lexus" },
  { id: "Aston Martin", label: "Aston Martin" },
  { id: "Volvo", label: "Volvo" },
];

export const OMNI_BODY_OPTIONS: OmniOption[] = [
  { id: "all", label: "All Body Styles" },
  { id: "suv", label: "Touring & Luxury SUV" },
  { id: "sedan", label: "Executive Sedan" },
  { id: "coupe", label: "Grand Tourer & Coupe" },
  { id: "wagon", label: "Estate & Sport Wagon" },
];

export const OMNI_BUDGET_OPTIONS: OmniOption[] = [
  { id: "all", label: "All Prices" },
  { id: "under-45k", label: "Under $45,000" },
  { id: "45-75k", label: "$45,000 - $75,000" },
  { id: "75-150k", label: "$75,000 - $150,000" },
  { id: "150k", label: "$150,000+" },
];

export const OMNI_PROVENANCE_OPTIONS: OmniOption[] = [
  { id: "all", label: "Any Condition" },
  { id: "cpo", label: "Certified Pre-Owned" },
  { id: "1owner", label: "1-Owner Verified" },
  { id: "new", label: "Arrived This Week" },
  { id: "low", label: "Under 15,000 Miles" },
];
