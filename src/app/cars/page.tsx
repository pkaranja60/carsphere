import type { Metadata } from "next";
import { CarsListingView } from "@/domains/cars";

export const metadata: Metadata = {
  description:
    "Browse our premium selection of luxury, sports, and electric vehicles.",
  title: "Inventory | DriveEz",
};

export default function CarsPage() {
  return <CarsListingView />;
}
