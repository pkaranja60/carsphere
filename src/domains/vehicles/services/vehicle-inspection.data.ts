// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { InspectionCheckItem, Vehicle } from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Inspection Checklists
// ─────────────────────────────────────────────

export function getVehicleInspectionItems(
  vehicle: Vehicle
): InspectionCheckItem[] {
  const isHybrid = vehicle.specs.label3.toLowerCase().includes("hybrid");
  const isElectric = vehicle.specs.label3.toLowerCase().includes("electric");

  if (isElectric) {
    return [
      {
        completedChecks: 18,
        description: "Cell voltage delta within ±3mV; cooling matrix sealed.",
        id: "i-1",
        resultBadge: "PASS (97% SOH)",
        title: "1. High-Voltage Battery Pack",
        totalChecks: 18,
      },
      {
        completedChecks: 24,
        description: "Dual drive inverters and thermal pumps dyno-verified.",
        id: "i-2",
        resultBadge: "PASS (ZERO FLT)",
        title: "2. Dual Drive Inverters",
        totalChecks: 24,
      },
      {
        completedChecks: 16,
        description: "Rotors, pads, and kinetic regenerative capture tested.",
        id: "i-3",
        resultBadge: "PASS (9.0mm)",
        title: "3. Braking & Recuperation",
        totalChecks: 16,
      },
      {
        completedChecks: 42,
        description:
          "Displays, HVAC heat pump, and firmware diagnostic passed.",
        id: "i-4",
        resultBadge: "PASS (FLAWLESS)",
        title: "4. Cabin Electronics & OS",
        totalChecks: 42,
      },
      {
        completedChecks: 30,
        description:
          "Ultrasonic gauge confirms 4.2-4.9 mils original paint coat.",
        id: "i-5",
        resultBadge: "PASS (FACTORY OEM)",
        title: "5. Cosmetic & Paint Depth",
        totalChecks: 30,
      },
      {
        completedChecks: 20,
        description: "Structural subframes and aeroshield torque verified.",
        id: "i-6",
        resultBadge: "PASS (STRUCTURAL OK)",
        title: "6. Chassis & Underbody",
        totalChecks: 20,
      },
    ];
  }

  if (isHybrid) {
    return [
      {
        completedChecks: 20,
        description: "Nickel/Lithium traction battery & inverter cycle tested.",
        id: "i-1",
        resultBadge: "PASS (98% CAPACITY)",
        title: "1. Hybrid Battery & Inverter",
        totalChecks: 20,
      },
      {
        completedChecks: 26,
        description:
          "Atkinson-cycle engine compression balanced across all cyls.",
        id: "i-2",
        resultBadge: "PASS (FACTORY SPEC)",
        title: "2. Hybrid Powertrain & ICE",
        totalChecks: 26,
      },
      {
        completedChecks: 18,
        description: "Hydraulic pads and regenerative blend test nominal.",
        id: "i-3",
        resultBadge: "PASS (8.8mm PADS)",
        title: "3. Regenerative Braking",
        totalChecks: 18,
      },
      {
        completedChecks: 38,
        description: "Infotainment, hybrid flow meters, and climate passed.",
        id: "i-4",
        resultBadge: "PASS (VERIFIED)",
        title: "4. Electronics & Cockpit",
        totalChecks: 38,
      },
      {
        completedChecks: 30,
        description: "Ultrasonic gauge confirms factory paint thickness.",
        id: "i-5",
        resultBadge: "PASS (OEM SPEC)",
        title: "5. Paint Depth & Panels",
        totalChecks: 30,
      },
      {
        completedChecks: 18,
        description:
          "E-Four rear electric drive axle sealed with zero seepage.",
        id: "i-6",
        resultBadge: "PASS (CLEAN SEALS)",
        title: "6. E-AWD Drive Integrity",
        totalChecks: 18,
      },
    ];
  }

  return [
    {
      completedChecks: 24,
      description:
        "Cylinder compression, turbo boost, and leakdown test nominal.",
      id: "i-1",
      resultBadge: "PASS (175 PSI ALL)",
      title: "1. Internal Combustion Engine",
      totalChecks: 24,
    },
    {
      completedChecks: 22,
      description: "Transmission torque converter/clutches shift within spec.",
      id: "i-2",
      resultBadge: "PASS (NOMINAL)",
      title: "2. Transmission & Drivetrain",
      totalChecks: 22,
    },
    {
      completedChecks: 16,
      description: "Brake pads >8.5mm, vented rotors true, ABS modulation ok.",
      id: "i-3",
      resultBadge: "PASS (8.7mm PADS)",
      title: "3. Performance Braking",
      totalChecks: 16,
    },
    {
      completedChecks: 40,
      description:
        "Digital cockpit, safety sensors, and sound system verified.",
      id: "i-4",
      resultBadge: "PASS (FLAWLESS)",
      title: "4. Interior Electronics",
      totalChecks: 40,
    },
    {
      completedChecks: 30,
      description: "Ultrasonic gauge confirms 4.1-4.8 mils uniform paint.",
      id: "i-5",
      resultBadge: "PASS (FACTORY OEM)",
      title: "5. Paint Depth & Surface",
      totalChecks: 30,
    },
    {
      completedChecks: 18,
      description:
        "Subframe bushings, differentials, and exhaust integrity verified.",
      id: "i-6",
      resultBadge: "PASS (ZERO DEFECT)",
      title: "6. Structural & Suspension",
      totalChecks: 18,
    },
  ];
}
