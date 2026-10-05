// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type {
  HandoverFeature,
  MetricItem,
  ServicePillar,
  ServicesInquiryFormValues,
} from "../types/services.types";

// ─────────────────────────────────────────────
// SECTION: Data Definitions
// ─────────────────────────────────────────────

const METRIC_ITEMS: MetricItem[] = [
  {
    id: "metric-rates",
    label: "Tier-1 Lending Rates",
    metric: "4.9%",
    subtext: "Direct portfolio capital allocation",
    unit: "APR min",
  },
  {
    id: "metric-valuation",
    label: "Guaranteed Valuation",
    metric: "15",
    subtext: "Binding digital appraisal offer",
    unit: "Minutes",
  },
  {
    id: "metric-protection",
    label: "Certified Protection",
    metric: "12",
    subtext: "Included powertrain shield",
    unit: "Mo / 12k Mi",
  },
  {
    id: "metric-network",
    label: "National Network",
    metric: "48",
    subtext: "Enclosed white-glove transport",
    unit: "States",
  },
];

const SERVICE_PILLARS: ServicePillar[] = [
  {
    actionLabel: "Launch Capital Calculator",
    badge: "Capital & Portfolio",
    description:
      "Eliminate institutional friction with bespoke structured financing through private capital desks and marquee automotive lenders.",
    iconName: "account_balance",
    id: "pillar-finance",
    points: [
      {
        description:
          "100% upfront schedule without hidden dealer reserve or administration markups.",
        id: "p1-1",
        title: "Transparent Capital Schedule",
      },
      {
        description:
          "Highly competitive programs starting from 4.9% APR for qualified buyers.",
        id: "p1-2",
        title: "Tier-1 Marque Rates",
      },
      {
        description:
          "Flexible 24 to 72-month terms, custom balloon structures, and closed/open-end leases.",
        id: "p1-3",
        title: "Bespoke Duration",
      },
      {
        description:
          "Single-asset LLC and corporate acquisitions handled in-house with strict confidentiality.",
        id: "p1-4",
        title: "Private Equity Structures",
      },
    ],
    tabKey: "finance",
    title: "Direct Financing & Bespoke Lease Tailoring",
  },
  {
    actionLabel: "Value Your Vehicle Now",
    badge: "Immediate Liquidity",
    description:
      "Unlock the latent equity in your luxury coupe, sports SUV, or rare vintage vehicle without showroom haggling or consignor delays.",
    iconName: "currency_exchange",
    id: "pillar-trade",
    points: [
      {
        description:
          "Comprehensive data analysis and physical telemetry check for instant binding offers.",
        id: "p2-1",
        title: "15-Minute Guaranteed Appraisal",
      },
      {
        description:
          "Enclosed collection directly from your private residence or executive office suite.",
        id: "p2-2",
        title: "Nationwide Logistics",
      },
      {
        description:
          "Funds wired directly to your domestic account within 24 business hours of physical verification.",
        id: "p2-3",
        title: "Direct Bank Transfer",
      },
      {
        description:
          "Seamless credit allocation toward your next acquisition with associated sales-tax offsets.",
        id: "p2-4",
        title: "Instant Equity Rollout",
      },
    ],
    tabKey: "trade",
    title: "Seamless Digital Trade-In & Equity Appraisal",
  },
  {
    actionLabel: "Review Warranty Protocols",
    badge: "Heritage Care",
    description:
      "Uncompromising mechanical assurance. Every CarSphere vehicle enters ownership backed by rigorous certified warranty programs.",
    iconName: "security",
    id: "pillar-warranty",
    points: [
      {
        description:
          "1-Year / 12,000-mile comprehensive powertrain warranty standard on all certified units.",
        id: "p3-1",
        title: "Included Powertrain Protection",
      },
      {
        description:
          "Seamless synchronization with remaining manufacturer warranty balance.",
        id: "p3-2",
        title: "Dual Coverage Shield",
      },
      {
        description:
          "100% parts & labor covered at authorized marquee dealer networks across North America.",
        id: "p3-3",
        title: "Zero Deductible",
      },
      {
        description:
          "Direct dispatch flatbed transport and luxury courtesy vehicle coordination included.",
        id: "p3-4",
        title: "24/7 Roadside Concierge",
      },
    ],
    tabKey: "trade",
    title: "Factory & CarSphere Extended Powertrain Warranty",
  },
  {
    actionLabel: "Submit Bespoke Request",
    badge: "Private Sourcing",
    description:
      "When the ideal build does not sit in our public gallery, our Beverly Hills acquisition desk engages private international channels.",
    iconName: "travel_explore",
    id: "pillar-sourcing",
    points: [
      {
        description:
          "Access to unlisted estate collections, collector pools, and factory build slots.",
        id: "p4-1",
        title: "Off-Market Inventory",
      },
      {
        description:
          "Established direct ties across Stuttgart, Modena, Goodwood, and Tokyo.",
        id: "p4-2",
        title: "International Dealer Channels",
      },
      {
        description:
          "Rigorous title forensics, service history authentication, and DME over-rev analysis.",
        id: "p4-3",
        title: "Heritage Provenance Check",
      },
      {
        description:
          "Real-time production milestone visibility for tailor-made factory allocations.",
        id: "p4-4",
        title: "Custom Allocation Tracking",
      },
    ],
    tabKey: "sourcing",
    title: "Private Client Vehicle Sourcing & Allocation",
  },
];

const HANDOVER_FEATURES: HandoverFeature[] = [
  {
    description:
      "Single or dual-vehicle enclosed carriers with zero road-debris exposure.",
    id: "hf-freight",
    title: "Climate-Controlled Freight",
  },
  {
    description:
      "Full infotainment calibration, seat setting presets, and garage link sync.",
    id: "hf-concierge",
    title: "Personal Vehicle Concierge",
  },
];

// ─────────────────────────────────────────────
// SECTION: Explicit Service Container
// ─────────────────────────────────────────────

export const servicesService = {
  createInquiry: async (
    _payload: ServicesInquiryFormValues
  ): Promise<{ success: boolean; id: string }> => {
    // Artificial latency simulating secure transmission to private desk ledger
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      id: `CS-SRV-${Date.now().toString().slice(-6)}`,
      success: true,
    };
  },
  listHandoverFeatures: (): HandoverFeature[] => HANDOVER_FEATURES,
  listMetrics: (): MetricItem[] => METRIC_ITEMS,
  listPillars: (): ServicePillar[] => SERVICE_PILLARS,
};
