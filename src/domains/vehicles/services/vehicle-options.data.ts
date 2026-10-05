// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { FactoryOption, Vehicle } from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Curated Options Catalog
// ─────────────────────────────────────────────

const BRAND_OPTIONS_CATALOG: Record<string, FactoryOption[]> = {
  BMW: [
    { id: "opt-1", name: "M Carbon Bucket Seats", price: "$4,500" },
    {
      id: "opt-2",
      name: "Executive Package & Head-Up Display",
      price: "$1,800",
    },
    { id: "opt-3", name: "M Carbon Ceramic Brake Package", price: "$8,500" },
    { id: "opt-4", name: "Harman Kardon® Surround Sound", price: "$1,200" },
    { id: "opt-5", name: "19/20-inch M Forged 826M Wheels", price: "$1,950" },
    {
      id: "opt-6",
      name: "Carbon Fiber Aerodynamic Exterior Pack",
      price: "$3,200",
    },
  ],
  Genesis: [
    {
      id: "opt-1",
      name: "Sport Prestige Package with 21-inch Alloys",
      price: "$4,200",
    },
    {
      id: "opt-2",
      name: "Lexicon® 16-Speaker QuantumLogic Surround",
      price: "$1,800",
    },
    {
      id: "opt-3",
      name: "Panoramic Sunroof with Power Blind",
      price: "$1,500",
    },
    {
      id: "opt-4",
      name: "Electronic Limited-Slip Differential",
      price: "$1,200",
    },
    {
      id: "opt-5",
      name: "Nappa Leather with Quilting & Microfiber",
      price: "$1,600",
    },
    {
      id: "opt-6",
      name: "Surround View Monitor & Blind-Spot View",
      price: "$950",
    },
  ],
  Honda: [
    {
      id: "opt-1",
      name: "Bose® 12-Speaker Centerpoint Audio",
      price: "$1,100",
    },
    {
      id: "opt-2",
      name: "Wireless Apple CarPlay® & Qi Charging",
      price: "$650",
    },
    {
      id: "opt-3",
      name: "Leather Seating with 8-Way Power Memory",
      price: "$850",
    },
    {
      id: "opt-4",
      name: "Honda Sensing® Proactive Safety Suite",
      price: "$Included",
    },
    {
      id: "opt-5",
      name: "18-inch Gloss Shark Gray Alloy Wheels",
      price: "$950",
    },
    {
      id: "opt-6",
      name: "One-Touch Power Tilt/Slide Moonroof",
      price: "$Included",
    },
  ],
  Lexus: [
    {
      id: "opt-1",
      name: "Mark Levinson® 21-Speaker PurePlay Sound",
      price: "$2,100",
    },
    {
      id: "opt-2",
      name: "Triple-Beam LED Headlamps with Washers",
      price: "$1,350",
    },
    {
      id: "opt-3",
      name: "Panoramic View Monitor & Intuitive Park",
      price: "$850",
    },
    {
      id: "opt-4",
      name: "10-inch Head-Up Display with Touch Tracer",
      price: "$1,100",
    },
    {
      id: "opt-5",
      name: "Cold Weather Package & Wiper De-Icer",
      price: "$600",
    },
    {
      id: "opt-6",
      name: "21-inch 20-Spoke Metallic Dark Gray Alloys",
      price: "$1,450",
    },
  ],
  Mazda: [
    { id: "opt-1", name: "Terracotta Nappa Leather Sport Trim", price: "$950" },
    {
      id: "opt-2",
      name: "Bose® 12-Speaker Centerpoint Surround",
      price: "$1,200",
    },
    {
      id: "opt-3",
      name: "Panoramic Power Sliding Glass Moonroof",
      price: "$1,350",
    },
    {
      id: "opt-4",
      name: "Active Driving Display Projected on Glass",
      price: "$800",
    },
    {
      id: "opt-5",
      name: "20-inch Black Metallic Finish Wheels",
      price: "$1,400",
    },
    { id: "opt-6", name: "Tow Package with 3,500-lb Capacity", price: "$750" },
  ],
  Subaru: [
    { id: "opt-1", name: "StarTex® Water-Repellent Upholstery", price: "$750" },
    { id: "opt-2", name: "Power Tilt/Slide Glass Moonroof", price: "$1,000" },
    {
      id: "opt-3",
      name: "Blind-Spot Detection & Rear Cross Alert",
      price: "$650",
    },
    {
      id: "opt-4",
      name: "11.6-inch STARLINK Multimedia Navigation",
      price: "$850",
    },
    {
      id: "opt-5",
      name: "18-inch Dark Gray Sport Aluminum Wheels",
      price: "$900",
    },
    {
      id: "opt-6",
      name: "Dual-Function X-MODE with Hill Descent",
      price: "$Included",
    },
  ],
  Toyota: [
    {
      id: "opt-1",
      name: "12.3-inch Toyota Audio Multimedia System",
      price: "$1,050",
    },
    {
      id: "opt-2",
      name: "Panoramic Glass Roof with Power Sunshade",
      price: "$1,400",
    },
    {
      id: "opt-3",
      name: "Hands-Free Foot-Activated Power Liftgate",
      price: "$650",
    },
    { id: "opt-4", name: "SofTex® 8-Passenger 3-Row Seating", price: "$850" },
    {
      id: "opt-5",
      name: "All-Weather Carpet & Cargo Protection Pack",
      price: "$380",
    },
    {
      id: "opt-6",
      name: "18-inch Machined Finish Alloy Wheels",
      price: "$750",
    },
  ],
};

const DEFAULT_OPTIONS: FactoryOption[] = [
  { id: "opt-1", name: "Executive Leather Interior Package", price: "$1,850" },
  { id: "opt-2", name: "Acoustic Surround Sound System", price: "$1,200" },
  {
    id: "opt-3",
    name: "Active Driver Assistance & Lane Pilot",
    price: "$1,100",
  },
  {
    id: "opt-4",
    name: "Machine-Polished Alloy Wheel Upgrade",
    price: "$1,400",
  },
];

export function getVehicleOptions(vehicle: Vehicle): FactoryOption[] {
  return BRAND_OPTIONS_CATALOG[vehicle.make] || DEFAULT_OPTIONS;
}
