import type { Vehicle } from "../types/vehicles.types";
import { EVERYDAY_VEHICLES, FEATURED_VEHICLES } from "./vehicles.repository";

export const vehiclesService = {
  getEverydayVehicles: (): Vehicle[] => EVERYDAY_VEHICLES,
  getFeaturedVehicles: (): Vehicle[] => FEATURED_VEHICLES,
};
