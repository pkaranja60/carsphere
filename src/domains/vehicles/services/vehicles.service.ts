import type { Vehicle } from "../types/vehicles.types";
import {
  EVERYDAY_VEHICLES,
  FEATURED_VEHICLES,
  RECENTLY_SOLD_VEHICLES,
} from "./vehicles.repository";

export const vehiclesService = {
  getAllVehicles: (): Vehicle[] => [
    ...FEATURED_VEHICLES,
    ...EVERYDAY_VEHICLES,
    ...RECENTLY_SOLD_VEHICLES,
  ],
  getEverydayVehicles: (): Vehicle[] => EVERYDAY_VEHICLES,
  getFeaturedVehicles: (): Vehicle[] => FEATURED_VEHICLES,
  getRecentlySoldVehicles: (): Vehicle[] => RECENTLY_SOLD_VEHICLES,
};
