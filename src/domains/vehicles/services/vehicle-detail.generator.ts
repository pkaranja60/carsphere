// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { Vehicle, VehicleDetail } from "../types/vehicles.types";
import {
  BRAND_SPECIALISTS,
  BRAND_TECHNICIANS,
  BRAND_VIN_PREFIXES,
} from "./vehicle-brands.data";
import { getVehicleInspectionItems } from "./vehicle-inspection.data";
import { getVehicleOptions } from "./vehicle-options.data";
import {
  buildFinancialSchedule,
  buildWarrantyItems,
  getVehicleSpecsMatrix,
} from "./vehicle-specs.data";

// ─────────────────────────────────────────────
// SECTION: Helpers
// ─────────────────────────────────────────────

function getWarrantyYear(year: string): string {
  if (year === "2024") {
    return "Nov 2027";
  }
  if (year === "2023") {
    return "Nov 2026";
  }
  return "Nov 2025";
}

function getBatteryHealth(isElectric: boolean, isHybrid: boolean): string {
  if (isElectric) {
    return "97% SOH";
  }
  if (isHybrid) {
    return "98% (Hybrid Pack)";
  }
  return "N/A (Combustion ICE)";
}

function getSecondaryImages(isSuv: boolean, vehicle: Vehicle) {
  const candidateImages = isSuv
    ? [
        {
          alt: `${vehicle.year} ${vehicle.make} ${vehicle.model} cockpit interior and instrument cluster`,
          url: "/images/category-suv.jpg",
        },
        {
          alt: `${vehicle.make} ${vehicle.model} alloy wheels and brake package`,
          url: "/images/carousel_slide_2.jpg",
        },
        {
          alt: `${vehicle.year} ${vehicle.make} ${vehicle.model} rear three-quarter profile`,
          url: "/images/category-estate.jpg",
        },
        {
          alt: `${vehicle.make} ${vehicle.model} engineering and powertrain detail`,
          url: "/images/carousel_slide_3.jpg",
        },
      ]
    : [
        {
          alt: `${vehicle.year} ${vehicle.make} ${vehicle.model} cockpit interior and instrument cluster`,
          url: "/images/category-sedan.jpg",
        },
        {
          alt: `${vehicle.make} ${vehicle.model} alloy wheels and brake package`,
          url: "/images/category-gt.jpg",
        },
        {
          alt: `${vehicle.year} ${vehicle.make} ${vehicle.model} rear three-quarter profile`,
          url: "/images/carousel_slide_1.jpg",
        },
        {
          alt: `${vehicle.make} ${vehicle.model} engineering and powertrain detail`,
          url: "/images/carousel_slide_3.jpg",
        },
      ];

  const alternateUrl = isSuv
    ? "/images/category-verified-wagon.jpg"
    : "/images/carousel_slide_2.jpg";

  const alternate = {
    alt: `${vehicle.year} ${vehicle.make} ${vehicle.model} architectural detail`,
    url: alternateUrl,
  };

  return candidateImages.map((img) =>
    img.url === vehicle.imageSrc ? alternate : img
  );
}

// ─────────────────────────────────────────────
// SECTION: Generator Logic
// ─────────────────────────────────────────────

export function generateVehicleDetail(
  vehicle: Vehicle,
  curatedAlternatives: Vehicle[]
): VehicleDetail {
  const priceNum =
    Number.parseInt(vehicle.price.replace(/[^0-9]/g, ""), 10) || 50_000;
  const msrpNum = Math.round((priceNum * 1.28) / 100) * 100;
  const savingsNum = msrpNum - priceNum;

  const vinPrefix = BRAND_VIN_PREFIXES[vehicle.make] || "1HGCR2F88R";
  const vinSuffix = vehicle.id
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "0")
    .padStart(7, "7");
  const vin = `${vinPrefix}${vinSuffix}`;

  const [extColor = "Factory OEM", intColor = "Refined Cabin Trim"] =
    vehicle.colorString.split("·").map((s) => s.trim());

  const isSuv =
    vehicle.model.includes("GV70") ||
    vehicle.model.includes("RX") ||
    vehicle.model.includes("Highlander") ||
    vehicle.model.includes("CX-50") ||
    vehicle.model.includes("Sport");

  const specialistInfo = BRAND_SPECIALISTS[vehicle.make] || {
    avatarUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1V1FdzkqSDuv3IroFCOUCEpuPohPJ4g0eIey32Yex9Pqc_p_W-Msdej1G-KDNhx67-i6UpbG4bpxTOhYViBsM3WUye6O0n2CuxsVzwaQtfbp6hna1Ot891GD-jmKaWdqjfEUdRJhH_2qQfywjXhSkYOHs-EsoCWpV3mXnEpuo2t9XfCcX3CkCpQo-0vLl589vJ3n7z-E3sPjZfx7aPQgBThbnwKMCdQxG9zEIvDkvYMcZ1uGBfsRVWNRm4",
    directLine: "+1 (800) 555-0199",
    name: "Julian Sterling",
  };

  const isHybrid = vehicle.specs.label3.toLowerCase().includes("hybrid");
  const isElectric = vehicle.specs.label3.toLowerCase().includes("electric");
  const warrantyYear = getWarrantyYear(vehicle.year);

  return {
    ...vehicle,
    allocationNumber: `DZ-${vehicle.id.toUpperCase().replace("-", "")}42`,
    batteryHealthSoh: getBatteryHealth(isElectric, isHybrid),
    certifiedTechnician:
      BRAND_TECHNICIANS[vehicle.make] || "A. Sterling (#C-2041)",
    curatedAlternatives,
    estimatedMonthly: vehicle.monthlyEstimate,
    factoryOptions: getVehicleOptions(vehicle),
    financialSchedule: buildFinancialSchedule(vehicle.price),
    galleryImages: [
      { alt: vehicle.imageAlt, url: vehicle.imageSrc },
      ...getSecondaryImages(isSuv, vehicle),
    ],
    inspectionDate: "October 18, 2024",
    inspectionItems: getVehicleInspectionItems(vehicle),
    interiorColor: intColor,
    mileageFormatted: `${vehicle.specs.stat1} Miles`,
    msrpOriginal: `$${msrpNum.toLocaleString("en-US")}`,
    narrativeParagraphs: [
      `This single-owner ${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim} exemplifies exceptional care and pristine provenance. Finished in distinguished ${extColor} complemented by ${intColor}, this vehicle was factory-configured with curated comfort, infotainment, and driver assistance packages. Powered by its ${vehicle.specs.stat3} ${vehicle.specs.label3} powertrain paired with ${vehicle.specs.stat2}, it delivers an engaging driving dynamic with outstanding composure.`,
      `Maintained strictly under scheduled service intervals at authorized ${vehicle.make} centers, this vehicle shows just ${vehicle.specs.stat1} documented miles with zero accident history. Our 150-point heritage inspection confirms factory paint depth tolerances, optimal mechanical health, and fully verified safety and digital electronics ready for immediate delivery.`,
    ],
    paintDepthMil: "100%",
    savingsAmount: `$${savingsNum.toLocaleString("en-US")}`,
    slug:
      vehicle.slug ||
      `${vehicle.year}-${vehicle.make}-${vehicle.model}-${vehicle.trim}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, ""),
    specialist: {
      avatarUrl: specialistInfo.avatarUrl,
      directLine: specialistInfo.directLine,
      name: specialistInfo.name,
      title: `Your ${vehicle.make} Specialist`,
    },
    specsMatrix: getVehicleSpecsMatrix(vehicle),
    vin,
    warrantyActiveUntil: `Factory ${vehicle.make} Warranty Active ${warrantyYear}`,
    warrantyItems: buildWarrantyItems(
      vehicle.make,
      warrantyYear,
      isHybrid || isElectric
    ),
  };
}
