// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { Vehicle, VehicleDetail } from "../types/vehicles.types";
import {
  createVehicleDetailFallback,
  PORSCHE_TAYCAN_DETAIL,
} from "./vehicle-detail.data";
import {
  EVERYDAY_VEHICLES,
  FEATURED_VEHICLES,
  RECENTLY_SOLD_VEHICLES,
} from "./vehicles.repository";

// ─────────────────────────────────────────────
// SECTION: Helpers
// ─────────────────────────────────────────────

export function generateVehicleSlug(vehicle: {
  make: string;
  model: string;
  trim: string;
  year: string;
}): string {
  return `${vehicle.year}-${vehicle.make}-${vehicle.model}-${vehicle.trim}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function withSlug(vehicle: Vehicle): Vehicle {
  return {
    ...vehicle,
    slug: vehicle.slug || generateVehicleSlug(vehicle),
  };
}

// ─────────────────────────────────────────────
// SECTION: Service Container
// ─────────────────────────────────────────────

export const vehiclesService = {
  getAllVehicles: (): Vehicle[] =>
    [...FEATURED_VEHICLES, ...EVERYDAY_VEHICLES].map(withSlug),

  getById: (id: string): Vehicle | undefined =>
    vehiclesService.getBySlugOrId(id),

  getBySlugOrId: (identifier: string): Vehicle | undefined => {
    const normalized = identifier.toLowerCase();
    const all = vehiclesService.getAllVehicles();
    return all.find(
      (v) => v.id.toLowerCase() === normalized || v.slug === normalized
    );
  },

  getDetailById: (id: string): VehicleDetail =>
    vehiclesService.getDetailBySlugOrId(id),

  getDetailBySlugOrId: (identifier: string): VehicleDetail => {
    const normalized = identifier.toLowerCase();
    const all = vehiclesService.getAllVehicles();
    const match = all.find(
      (v) => v.id.toLowerCase() === normalized || v.slug === normalized
    );

    const alternatives = all
      .filter((v) => v.id.toLowerCase() !== match?.id.toLowerCase())
      .slice(0, 3);

    if (!match || match.id === "f-1" || normalized.includes("taycan")) {
      return {
        ...PORSCHE_TAYCAN_DETAIL,
        curatedAlternatives: alternatives,
        slug: "2023-porsche-taycan-4s-awd",
      };
    }

    return createVehicleDetailFallback(match, alternatives);
  },

  getEverydayVehicles: (): Vehicle[] => EVERYDAY_VEHICLES.map(withSlug),
  getFeaturedVehicles: (): Vehicle[] => FEATURED_VEHICLES.map(withSlug),
  getRecentlySoldVehicles: (): Vehicle[] =>
    RECENTLY_SOLD_VEHICLES.map(withSlug),
};
