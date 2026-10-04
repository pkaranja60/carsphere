// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { Vehicle, VehicleDetail } from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Porsche Taycan Specification Dataset
// ─────────────────────────────────────────────

export const PORSCHE_TAYCAN_DETAIL: VehicleDetail = {
  allocationNumber: "DZ-9042",
  badgeText: "Certified Pre-Owned",
  batteryHealthSoh: "97%",
  certifiedTechnician: "M. Rosenthal (#P-8841)",
  colorString: "Frozen Blue Metallic · Performance Battery Plus",
  curatedAlternatives: [], // Populated at runtime
  estimatedMonthly: "$1,240",
  factoryOptions: [
    {
      id: "opt-1",
      name: "Performance Battery Plus (93.4 kWh)",
      price: "$6,580",
    },
    {
      id: "opt-2",
      name: "Burmester® 3D High-End Sound System",
      price: "$5,810",
    },
    {
      id: "opt-3",
      name: "Rear-Axle Steering inc. Power Steering Plus",
      price: "$1,620",
    },
    {
      id: "opt-4",
      name: '21" Mission E Design Wheels in Satin Platinum',
      price: "$4,680",
    },
    {
      id: "opt-5",
      name: "Adaptive Sport Seats Plus (18-Way) with Memory",
      price: "$1,930",
    },
    {
      id: "opt-6",
      name: "Passenger Display & Head-Up Display",
      price: "$2,830",
    },
  ],
  financialSchedule: [
    {
      id: "fin-1",
      label: "Vehicle Base Selling Price",
      value: "$89,500.00",
    },
    {
      id: "fin-2",
      label: "150-Point Certified Heritage Inspection & Detail",
      value: "$0.00 (Included)",
    },
    {
      id: "fin-3",
      label: "Dealer Documentation & Processing Fees",
      value: "$0.00 (Zero Fee Guarantee)",
    },
    {
      id: "fin-4",
      label: "Drivez 1-Year Powertrain Warranty Extension",
      value: "$0.00 (Included)",
    },
    {
      id: "fin-5",
      isTotal: true,
      label: "Total Drivez Capital Allocation",
      value: "$89,500.00",
    },
  ],
  galleryImages: [
    {
      alt: "Metallic Frozen Blue 2023 Porsche Taycan 4S parked in showroom",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4y51NaFw6ubrlTwufIXvESgVK45wkjNz0F26Tt6opz0v_4o2FaM0EiCffyeyDUrLc6RlXxTRf6z0YoyeFPzmtrvm2hXyUt-jrW4M3wY7mrO4TkVbWlHnVuwKQoS-GC7SwLeAZbna1DirgfBeYCAFY2sGkUaeeft_5FwordFm3hj49h9BULU8sACuEXaW1bCP-xk9ANnG-bIZEE6BLrs29Ez1nXRXuzikGAqMsnWojbONjch6zmOxj",
    },
    {
      alt: "Cockpit interior dual curved displays",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVYlwWPjrHNQW9cleFvytoOA47Cv8xzSg4jhD6lyssEStWURV2AJ2Y_yO-evLqOJvnNV_XPI_3mCXqyUBLsqTMu10LlMXW63wcL4AkMcFgTd0C4bs0kGaIpWW7khiDfcrADdNxbDqkvVOeehIJd1QqjyGNJ3bZGId2sg8S_74o_o0zwlk8fq_wPS5IFZVlCUDARXXmwIA3x64-ZSdWt7n_KiS7q4fRmyH5gwVyRjjFgWkoNwcVhXKQ",
    },
    {
      alt: "Wheel detail 21-inch Mission E design",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxtTjstgzwmFJu7ic8LXs0S7owqBe3_923NgbbqcgMVWxD_1if31m5v_5_GF6ULYCotOzICyTctx60dXPW3UwtowQH3mBTa7JgGIVfLLyGSy6pgiN5L3OZq2A2tip_gsGEJHa1RJdSisuj8Qu3NID9IgGo4DnpsD1bVkDdpoVwo9-UZjq81oVZp1pA9j5lmZdDrGjf8pQubH90afmSFBX-9ClCbQwDWJzAtOHWkKFqUehVV0_i0s8P",
    },
    {
      alt: "Rear profile LED light strip",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrdFpDsYI6TJWazy6_-Wxy_maqhZs6KSNs05c-71m_nLRjGnEKnHydm9PhEblzkVE9J-XN7E45qv-QyBCPaFOQUt2DMzVsp_W6x5sFsuGcn6QkFBi4btZbl56qGNo0nsiKX54-060g_7i4W_PHSJgXmqsTOlQY8PFk8nI73AlSvATV9Vh0BaNBU4Pi5xCiFLAz9p_KQsmaVwF7Wrac9iIDL-XO-YYEu6oVmf03ii0D5A0Cgm55ud7M",
    },
    {
      alt: "Charging port detail",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAzsCHYy0ui2UoNW03xanKXDckKQStHvS9EgUxQYNjjuF0lMogOmlR019o_JSF31ZO7U0z5oUNeEOoySwQLZbo06X1qxFpomvHFNx-HBTjfwz49liH605FWz6EKDa9lsRjjbwTQRgSbm5lSSbWBOBr91tVonU_CRcjRdI-Z89F0q6_4ax-9undRUngobwYokOTsINQtAaI2b3vY-FvMD-v0WDsaCPhPxiBih_OPbTOBMgSC2C0KMF1",
    },
  ],
  historyText: "Clean Hist.",
  id: "f-1",
  imageAlt: "Metallic Frozen Blue 2023 Porsche Taycan 4S",
  imageSrc:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB4y51NaFw6ubrlTwufIXvESgVK45wkjNz0F26Tt6opz0v_4o2FaM0EiCffyeyDUrLc6RlXxTRf6z0YoyeFPzmtrvm2hXyUt-jrW4M3wY7mrO4TkVbWlHnVuwKQoS-GC7SwLeAZbna1DirgfBeYCAFY2sGkUaeeft_5FwordFm3hj49h9BULU8sACuEXaW1bCP-xk9ANnG-bIZEE6BLrs29Ez1nXRXuzikGAqMsnWojbONjch6zmOxj",
  inspectionDate: "October 14, 2024",
  inspectionItems: [
    {
      completedChecks: 18,
      description:
        "Thermal management circuit tested; 396 individual pouch cells balanced within ±3mV variance.",
      id: "insp-1",
      resultBadge: "PASS (97% SOH)",
      title: "1. Battery & High-Voltage Pack",
      totalChecks: 18,
    },
    {
      completedChecks: 24,
      description:
        "Three-chamber air springs sealed with zero pressure loss; laser 4-wheel alignment verified.",
      id: "insp-2",
      resultBadge: "PASS (FACTORY SPEC)",
      title: "2. Adaptive Air Suspension & Steering",
      totalChecks: 24,
    },
    {
      completedChecks: 16,
      description:
        "6-piston monobloc front calipers and 265kW recuperation generator tested under dynamic road load.",
      id: "insp-3",
      resultBadge: "PASS (9.2mm PADS)",
      title: "3. Braking & Energy Recuperation",
      totalChecks: 16,
    },
    {
      completedChecks: 42,
      description:
        "Natural smooth-finish leather treated; PCM 6.0 operating software updated to current revision.",
      id: "insp-4",
      resultBadge: "PASS (FLAWLESS)",
      title: "4. Handcrafted Interior & Electronics",
      totalChecks: 42,
    },
    {
      completedChecks: 30,
      description:
        "Ultrasonic paint depth gauge confirms 4.2-4.8 mils factory coat with zero paint repairs or blemishes.",
      id: "insp-5",
      resultBadge: "PASS (FACTORY OEM)",
      title: "5. Paint Depth & Cosmetic Integrity",
      totalChecks: 30,
    },
    {
      completedChecks: 20,
      description:
        "Underbody aeroshield inspected; aluminium chassis weld seams inspected via eddy-current test.",
      id: "insp-6",
      resultBadge: "PASS (ZERO DEFECT)",
      title: "6. Drivetrain Seals & Structural Monocoque",
      totalChecks: 20,
    },
  ],
  interiorColor: "Black / Slate Grey Full Leather Interior",
  make: "Porsche",
  mileageFormatted: "8,200 Miles",
  model: "Taycan",
  monthlyEstimate: "$1,240",
  msrpOriginal: "$122,400",
  narrativeParagraphs: [
    "This single-owner 2023 Porsche Taycan 4S represents the zenith of high-performance electric touring. Finished in exceptionally rare Frozen Blue Metallic over a two-tone Black and Slate Grey leather interior, this example was configured from the Zuffenhausen factory with over $32,000 in selected optional equipment. Key additions include the Performance Battery Plus (93.4 kWh gross capacity), Porsche Dynamic Chassis Control Sport (PDCC Sport), Rear-Axle Steering including Power Steering Plus, and the Burmester® 3D High-End Surround Sound System.",
    "Kept exclusively in a climate-controlled residential garage in Beverly Hills, California, this Taycan has traveled a mere 8,200 documented miles and has received scheduled maintenance solely at authorized Porsche centres. The high-voltage battery exhibits a state-of-health rating of 97%, guaranteeing the factory EPA range and blistering 0-60 mph acceleration of 3.8 seconds using Launch Control.",
  ],
  paintDepthMil: "100%",
  price: "$89,500",
  savingsAmount: "$32,900",
  slug: "2023-porsche-taycan-4s-awd",
  specialist: {
    avatarUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1V1FdzkqSDuv3IroFCOUCEpuPohPJ4g0eIey32Yex9Pqc_p_W-Msdej1G-KDNhx67-i6UpbG4bpxTOhYViBsM3WUye6O0n2CuxsVzwaQtfbp6hna1Ot891GD-jmKaWdqjfEUdRJhH_2qQfywjXhSkYOHs-EsoCWpV3mXnEpuo2t9XfCcX3CkCpQo-0vLl589vJ3n7z-E3sPjZfx7aPQgBThbnwKMCdQxG9zEIvDkvYMcZ1uGBfsRVWNRm4",
    directLine: "+1 (310) 555-0142",
    name: "Julian Sterling",
    title: "Your Taycan Specialist",
  },
  specs: {
    label1: "Miles",
    label2: "Drive",
    label3: "Electric",
    stat1: "8,200",
    stat2: "AWD Dual",
    stat3: "522 hp",
    stat3Color: "tertiary",
  },
  specsMatrix: [
    {
      description: "Permanent magnet with hairpin winding",
      iconName: "bolt",
      title: "Powertrain",
      value: "Dual Synchronous Motors",
    },
    {
      description: "0–60 in 3.8s with Launch Control",
      iconName: "speed",
      title: "Output & Torque",
      value: "522 HP / 479 lb-ft",
    },
    {
      description: "Porsche proprietary dual-ratio rear axle",
      iconName: "tune",
      title: "Transmission",
      value: "2-Speed Rear / 1-Speed Front",
    },
    {
      description: "Porsche Traction Management (PTM)",
      iconName: "all_inclusive",
      title: "Drivetrain",
      value: "Performance All-Wheel Drive",
    },
    {
      description: "Observed highway range: 250+ mi",
      iconName: "route",
      title: "EPA Range",
      value: "227 Miles EPA",
    },
    {
      description: "5% to 80% DC fast charging in 22.5 min",
      iconName: "electric_bolt",
      title: "Charging Architecture",
      value: "800-Volt Architecture",
    },
    {
      description: "Near-perfect 49/51 weight distribution",
      iconName: "scale",
      title: "Curb Weight",
      value: "4,773 lbs",
    },
    {
      description: "Rear cargo area plus front luggage trunk",
      iconName: "luggage",
      title: "Luggage & Utility",
      value: "14.3 + 2.9 cu ft",
    },
  ],
  trim: "4S AWD",
  vin: "WP0AA2Y14PSA89042",
  warrantyActiveUntil: "Factory Porsche Warranty Active Nov 2026",
  warrantyItems: [
    {
      id: "war-1",
      periodText:
        "Active through November 28, 2026 or 50,000 total vehicle miles",
      statusBadge: "ACTIVE",
      statusType: "active",
      title: "Porsche Factory New Vehicle Warranty",
    },
    {
      id: "war-2",
      periodText: "Active through November 2030 or 100,000 miles",
      statusBadge: "ACTIVE",
      statusType: "active",
      title: "Porsche 8-Year / 100k-Mile High Voltage Battery Warranty",
    },
    {
      id: "war-3",
      periodText: "Included at $0 additional surcharge on acquisition",
      statusBadge: "INCLUDED",
      statusType: "included",
      title: "Drivez 1-Year / 12,000-Mile Powertrain Extension",
    },
  ],
  year: "2023",
};

// ─────────────────────────────────────────────
// SECTION: Fallback Construction
// ─────────────────────────────────────────────

export function createVehicleDetailFallback(
  vehicle: Vehicle,
  curatedAlternatives: Vehicle[]
): VehicleDetail {
  return {
    ...PORSCHE_TAYCAN_DETAIL,
    ...vehicle,
    allocationNumber: `DZ-${vehicle.id.toUpperCase()}`,
    curatedAlternatives,
    interiorColor: "Executive Premium Interior Trim",
    mileageFormatted: `${vehicle.specs.stat1} Miles`,
    slug:
      vehicle.slug ||
      `${vehicle.year}-${vehicle.make}-${vehicle.model}-${vehicle.trim}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, ""),
    vin: `WP0AA2Y14PSA${vehicle.id.padStart(5, "0").toUpperCase()}`,
  };
}
