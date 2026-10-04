export const MAKE_OPTIONS = [
  { id: "all", label: "All Makes & Models" },
  { id: "Porsche", label: "Porsche" },
  { id: "BMW", label: "BMW" },
  { id: "Genesis", label: "Genesis" },
  { id: "Mercedes-Benz", label: "Mercedes-Benz" },
  { id: "Audi", label: "Audi" },
  { id: "Lexus", label: "Lexus" },
  { id: "Aston Martin", label: "Aston Martin" },
  { id: "Volvo", label: "Volvo" },
  { id: "Taycan", label: "Porsche Taycan" },
  { id: "911", label: "Porsche 911" },
  { id: "Macan", label: "Porsche Macan" },
  { id: "M3", label: "BMW M3" },
  { id: "X5", label: "BMW X5" },
  { id: "GV70", label: "Genesis GV70" },
  { id: "G70", label: "Genesis G70" },
  { id: "RS6", label: "Audi RS6 Avant" },
  { id: "Q5", label: "Audi Q5" },
  { id: "Vantage", label: "Aston Martin Vantage" },
  { id: "LC 500", label: "Lexus LC 500" },
  { id: "RX 350h", label: "Lexus RX 350h" },
  { id: "XC60", label: "Volvo XC60 Recharge" },
] as const;

export const BODY_OPTIONS = [
  { id: "all", label: "All Body Styles" },
  { id: "suv", label: "Touring & Luxury SUV" },
  { id: "sedan", label: "Executive Sedan" },
  { id: "coupe", label: "Grand Tourer & Coupe" },
  { id: "wagon", label: "Estate & Sport Wagon" },
] as const;

export const BUDGET_OPTIONS = [
  { id: "all", label: "All Prices" },
  { id: "under-45k", label: "Under $45,000" },
  { id: "45-75k", label: "$45,000 - $75,000" },
  { id: "75-150k", label: "$75,000 - $150,000" },
  { id: "150k", label: "$150,000+" },
] as const;

export const PROVENANCE_OPTIONS = [
  { id: "all", label: "Any Condition" },
  { id: "cpo", label: "Certified Pre-Owned" },
  { id: "1owner", label: "1-Owner Verified" },
  { id: "new", label: "Arrived This Week" },
  { id: "low", label: "Under 15,000 Miles" },
] as const;

export const POWERTRAIN_OPTIONS = [
  { id: "all", label: "All Powertrains" },
  { id: "electric", label: "Pure Electric (EV)" },
  { id: "hybrid", label: "Hybrid & Plug-In (PHEV)" },
  { id: "twin-turbo", label: "Twin-Turbo & High Performance" },
  { id: "turbo-inline", label: "Turbocharged Inline (I4 / I6)" },
  { id: "naturally-aspirated", label: "Naturally Aspirated V8 / F6" },
  { id: "awd", label: "All-Wheel Drive (AWD)" },
] as const;
