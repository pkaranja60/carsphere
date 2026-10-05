// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type {
  InspectionStep,
  MetricItem,
  PhilosophyTier,
  TeamMember,
} from "../types/about.types";

// ─────────────────────────────────────────────
// SECTION: Mock Data
// ─────────────────────────────────────────────

const METRICS: MetricItem[] = [
  {
    id: "diagnostic-rigor",
    label: "Diagnostic Rigor",
    subtext: "Non-destructive physical & digital verification",
    unit: "pts",
    value: "150",
  },
  {
    id: "pricing-transparency",
    label: "Pricing Transparency",
    subtext: "Hidden dealer add-ons or documentation markups",
    value: "$0",
  },
  {
    id: "capital-delivered",
    label: "Capital Delivered",
    subtext: "Vehicles placed across private client garages",
    unit: "+",
    value: "$42M",
  },
  {
    id: "client-satisfaction",
    label: "Client Satisfaction",
    subtext: "Verified private client reviews and appraisals",
    unit: "/5",
    value: "4.98",
  },
];

const PHILOSOPHY_TIERS: PhilosophyTier[] = [
  {
    accreditation: "Motorsport Certified",
    ctaHref: "/inventory",
    ctaText: "View Allocations",
    description:
      "Curated for motorsport purists and collectors. Every vehicle represents single-owner custody, traceable service logs from factory authorized centers, certified paint thickness logs, and zero cosmetic compromises.",
    features: [
      {
        description:
          "Validated manufacturer build sheets, options ledger, and direct contact with previous custodian when permitted.",
        title: "Forensic Chain of Custody",
      },
      {
        description:
          "Zero-mileage single-car enclosed transport directly to your residence, climate-controlled throughout transit.",
        title: "Bespoke Enclosed Delivery",
      },
      {
        description:
          "Porsche Gold Meister, Ferrari Classiche, or AMG master technician verification before transfer.",
        title: "Marque Specialist Sign-Off",
      },
    ],
    id: "premium-performance",
    priceRange: "Typical Acquisition Range: $75,000 – $450,000+",
    tierNumber: "01",
    title: "Premium & Performance",
  },
  {
    accreditation: "Daily Fleet Standard",
    ctaHref: "/inventory",
    ctaText: "View Everyday Fleet",
    description:
      "Everyday practicality executed with uncompromised refinement. We select executive sedans, premium crossover EVs, and immaculate family transporters that provide daily reliability without typical pre-owned uncertainty.",
    features: [
      {
        description:
          "Minimum 92% State of Health (SOH) certified for all electric & plug-in drivetrains, with full capacity validation.",
        title: "Battery Health & Hybrid Telemetry",
      },
      {
        description:
          "Eligible for extended manufacturer-backed coverage with full mechanical and roadside support nationwide.",
        title: "Factory Warranty Continuity",
      },
      {
        description:
          "Strict transparent valuation without arbitrary showroom markups, dealer prep costs, or finance gouging.",
        title: "Under $45k Fixed-Value Cap",
      },
    ],
    id: "everyday-excellence",
    priceRange: "Target Segment: $28,000 – $45,000",
    tierNumber: "02",
    title: "Everyday Excellence",
  },
];

const INSPECTION_STEPS: InspectionStep[] = [
  {
    description:
      "Multi-point micron-level depth scanning across aluminum, carbon-fiber, and steel body panels. Identifies any respray, structural repairs, or undisclosed panel blendings.",
    id: "ultrasonic-gauging",
    specLabel: "Acceptance Window",
    specValue: "85–130 μm factory spec tolerance",
    stepNumber: "01",
    title: "Ultrasonic Composite & Paint Gauging",
  },
  {
    description:
      "Direct ECU extraction reading over-rev history, thermodynamic cycles, transmission stress logs, and state-of-health (SOH) cell balance for hybrid & EV drivetrains.",
    id: "diagnostic-telemetry",
    specLabel: "ECU Integrity",
    specValue: "Zero active DTC fault logs permitted",
    stepNumber: "02",
    title: "Diagnostic Telemetry & Battery SOH",
  },
  {
    description:
      "Full-chassis subframe laser alignment, suspension bushing deflection tests, high-pressure cooling circuit hold tests, and spectroscopic motor oil spectrometry.",
    id: "drivetrain-kinematic",
    specLabel: "Wear Limit",
    specValue: ">70% remaining brake & tread life",
    stepNumber: "03",
    title: "Drivetrain & Kinematic Analysis",
  },
  {
    description:
      "Non-toxic steam purification, Connolly leather re-hydration, alcantara pile restoration, and optical multi-stage polish with natural carnauba/ceramic protective curing.",
    id: "cabin-curation",
    specLabel: "Indoor Air Quality",
    specValue: "Zero artificial fragrances or chemical covers",
    stepNumber: "04",
    title: "Artisanal Cabin & Surface Curation",
  },
];

const TEAM_MEMBERS: TeamMember[] = [
  {
    credential: "22 Years Automotive Provenance",
    description:
      "Former provenance lead for European auction archives. Oversees allocation provenance, single-owner history authentication, and museum-grade collections.",
    id: "julian-sterling",
    imageAlt: "Julian Sterling, Managing Director at CarSphere Beverly Hills",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFrp2ZLFQw5uODD17WpHl_Pz2fwxcSN9M0aSqIXMd3_hcxQa3d1vQl4RkoS2i47m5bOHStIGdz83-OnlM4aOa_WJaZzJSdEZYIiWdrDAnMNunIuMk3H3cYYM226yMr-ymmIhyN8N2VaTTkpv_dyzKJ-k7BP0g5GWGx5VuoJriNb9S-X-R-kSOInQQ7ycBmwPuvXDSs06vP7KiNU07dV4WE0Bbc3RIeXZm0_2Usa0-4krjwXKnZM_qh",
    name: "Julian Sterling",
    role: "Managing Director",
  },
  {
    credential: "Master Technical Diagnostic Lead",
    description:
      "Mechanical engineer previously with high-voltage prototype development in Stuttgart. Directs the 150-point diagnostic lab, EV battery telemetry, and mechanical testing.",
    id: "elena-rostova",
    imageAlt: "Elena Rostova, Head of Technical Diagnostics at CarSphere",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWIWF7RBgZh6hRFt7N0136Dgbo-JNR1VQa3wMh-8p6gFDXFREUa-tke-B001vWSkkeAABDg3CG5LkHggsQyrqoWKkcoRcDDOXjqaOygnOWqWffdjUfrJQvvqCsVvMLVCltHbR8m6f9zLv1nr_F1Cr846S4xPPY2waXK3-LB57uHbHxwI2CN3LlLDgYMulEEteyRjE1vuKyn5p_nvaJ4hwmHPNksU1TMkQqTS2WcxPUTTeAnuOaUuEc",
    name: "Elena Rostova",
    role: "Head of Technical Diagnostics",
  },
  {
    credential: "Private Portfolio Allocation",
    description:
      "Specialist in transparent bespoke financing, multi-car private leases, and tailored acquisitions for everyday excellence fleets and performance additions.",
    id: "marcus-vance",
    imageAlt: "Marcus Vance, Private Client Advisory lead at CarSphere",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmFu7rOid1QjHKmV1oSJhQqmAqIRzgx-byq9IaPwbKiq_1Tdo_NX_61inmCglkYdo7jFm9YfFnFuM0NiTABqYCXsxskjhWJ-lJTV7eg1zDrdPr_0ahBqMrDgSUV1kS38mu6_R83kcbPJ75aWQk-5uPz_bUdRTBYcB9BoFMEFIHTZAhGg8-VkAI6SG5NCr8LmrLgryEkuY5zOfClzzwpXmGSwUYCxnh1AB87Wf2alsB99zqnnh_YLpY",
    name: "Marcus Vance",
    role: "Private Client Advisory",
  },
];

// ─────────────────────────────────────────────
// SECTION: Service Container
// ─────────────────────────────────────────────

export const aboutService = {
  getInspectionSteps: () => INSPECTION_STEPS,
  getMetrics: () => METRICS,
  getPhilosophyTiers: () => PHILOSOPHY_TIERS,
  getTeamMembers: () => TEAM_MEMBERS,
};
