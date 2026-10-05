// ─────────────────────────────────────────────
// SECTION: Types & Interfaces
// ─────────────────────────────────────────────

export interface TeamMember {
  credential: string;
  description: string;
  id: string;
  imageAlt: string;
  imageUrl: string;
  name: string;
  role: string;
}

export interface InspectionStep {
  description: string;
  id: string;
  specLabel: string;
  specValue: string;
  stepNumber: string;
  title: string;
}

export interface MetricItem {
  id: string;
  label: string;
  subtext: string;
  unit?: string;
  value: string;
}

export interface PhilosophyTier {
  accreditation: string;
  ctaHref: string;
  ctaText: string;
  description: string;
  features: Array<{
    description: string;
    title: string;
  }>;
  id: string;
  priceRange: string;
  tierNumber: string;
  title: string;
}
