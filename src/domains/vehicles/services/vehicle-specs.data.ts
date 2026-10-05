// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type {
  FinancialScheduleItem,
  SpecMatrixItem,
  Vehicle,
  WarrantyScheduleItem,
} from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Financial & Warranty Builders
// ─────────────────────────────────────────────

export function buildFinancialSchedule(price: string): FinancialScheduleItem[] {
  return [
    {
      id: "fin-1",
      label: "Vehicle Base Selling Price",
      value: `${price}.00`,
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
      value: `${price}.00`,
    },
  ];
}

export function buildWarrantyItems(
  make: string,
  warrantyYear: string,
  isHybridOrElectric: boolean
): WarrantyScheduleItem[] {
  return [
    {
      id: "war-1",
      periodText: `Active through ${warrantyYear} or 50,000 miles`,
      statusBadge: "ACTIVE",
      statusType: "active",
      title: `${make} Factory Comprehensive Warranty`,
    },
    {
      id: "war-2",
      periodText: `Active through ${warrantyYear} or 70,000 miles`,
      statusBadge: "ACTIVE",
      statusType: "active",
      title: isHybridOrElectric
        ? `${make} High-Voltage Battery & Hybrid Warranty`
        : `${make} Factory Powertrain Limited Warranty`,
    },
    {
      id: "war-3",
      periodText: "Included at $0 additional surcharge on acquisition",
      statusBadge: "INCLUDED",
      statusType: "included",
      title: "Drivez 1-Year / 12,000-Mile Powertrain Extension",
    },
  ];
}

// ─────────────────────────────────────────────
// SECTION: Specification Matrix
// ─────────────────────────────────────────────

export function getVehicleSpecsMatrix(vehicle: Vehicle): SpecMatrixItem[] {
  const isHybrid = vehicle.specs.label3.toLowerCase().includes("hybrid");
  const isElectric = vehicle.specs.label3.toLowerCase().includes("electric");

  if (isElectric) {
    return [
      {
        description: "Permanent magnet with hairpin stator",
        iconName: "bolt",
        title: "Powertrain",
        value: "Dual Synchronous Motors",
      },
      {
        description: "Instant peak torque on demand",
        iconName: "speed",
        title: "Output & Torque",
        value: `${vehicle.specs.stat3} Combined`,
      },
      {
        description: "Direct-drive multi-speed reduction",
        iconName: "tune",
        title: "Transmission",
        value: "Single/Dual Reduction",
      },
      {
        description: "Intelligent electronic all-wheel drive",
        iconName: "all_inclusive",
        title: "Drivetrain",
        value: vehicle.specs.stat2,
      },
      {
        description: "Observed highway and city EPA estimate",
        iconName: "route",
        title: "EPA Range",
        value: "220+ Miles EPA",
      },
      {
        description: "High-capacity high-voltage pack",
        iconName: "electric_bolt",
        title: "Architecture",
        value: "High-Voltage Fast Charging",
      },
      {
        description: "Aerodynamic performance curb weight",
        iconName: "scale",
        title: "Curb Weight",
        value: "4,650 lbs",
      },
    ];
  }

  if (isHybrid) {
    return [
      {
        description:
          "Atkinson-cycle gas engine + dual electric motor-generators",
        iconName: "bolt",
        title: "Powertrain",
        value: `${vehicle.specs.stat3} Hybrid Drive`,
      },
      {
        description: "Blended system output with high torque response",
        iconName: "speed",
        title: "System Output",
        value: `${vehicle.specs.stat3}`,
      },
      {
        description: "Electronically controlled planetary transmission",
        iconName: "tune",
        title: "Transmission",
        value: "eCVT with Dynamic Logic",
      },
      {
        description: "On-demand intelligent AWD system",
        iconName: "all_inclusive",
        title: "Drivetrain",
        value: vehicle.specs.stat2,
      },
      {
        description: "Outstanding multi-surface efficiency",
        iconName: "route",
        title: "Fuel Economy",
        value: vehicle.specs.stat3Color
          ? vehicle.specs.stat3
          : "36+ MPG Combined",
      },
      {
        description: "Sealed high-efficiency nickel/lithium pack",
        iconName: "electric_bolt",
        title: "Battery System",
        value: "Self-Charging Hybrid",
      },
      {
        description: "Optimized rigid chassis weight",
        iconName: "scale",
        title: "Curb Weight",
        value: "4,380 lbs",
      },
    ];
  }

  return [
    {
      description: `Precision tuned ${vehicle.specs.stat3} power plant`,
      iconName: "bolt",
      title: "Engine",
      value: `${vehicle.specs.label3} (${vehicle.specs.stat3})`,
    },
    {
      description: "Engine peak output with responsive torque",
      iconName: "speed",
      title: "Output & Torque",
      value: vehicle.specs.stat3,
    },
    {
      description: "Quick-shifting sport automatic transmission",
      iconName: "tune",
      title: "Transmission",
      value: "Multi-Speed Automatic with Paddles",
    },
    {
      description: "Chassis dynamic traction control",
      iconName: "all_inclusive",
      title: "Drivetrain",
      value: vehicle.specs.stat2,
    },
    {
      description: "EPA tested fuel economy rating",
      iconName: "route",
      title: "Efficiency",
      value: "24-30 MPG EPA",
    },
    {
      description: "Direct high-pressure fuel delivery",
      iconName: "electric_bolt",
      title: "Fuel System",
      value: "Direct Injection Turbo",
    },
    {
      description: "Balanced front-to-rear distribution",
      iconName: "scale",
      title: "Curb Weight",
      value: "3,850 lbs",
    },
  ];
}
