// ─────────────────────────────────────────────
// SECTION: Imports & Re-exports
// ─────────────────────────────────────────────

import type { Vehicle, VehicleDetail } from "../types/vehicles.types";
import { generateVehicleDetail } from "./vehicle-detail.generator";

export { PORSCHE_TAYCAN_DETAIL } from "./vehicle-taycan.data";

// ─────────────────────────────────────────────
// SECTION: Fallback Construction
// ─────────────────────────────────────────────

export function createVehicleDetailFallback(
  vehicle: Vehicle,
  curatedAlternatives: Vehicle[]
): VehicleDetail {
  return generateVehicleDetail(vehicle, curatedAlternatives);
}
