import type { Metadata } from "next";
import { Suspense } from "react";
import { CarsListingView } from "@/domains/cars";

export const metadata: Metadata = {
  description:
    "Browse our premium selection of luxury, sports, and electric vehicles.",
  title: "Inventory | DriveEz",
};

export default function CarsPage() {
  return (
    <Suspense fallback={<div>Loading inventory...</div>}>
      <CarsListingView />
    </Suspense>
  );
}
