import type { Metadata } from "next";
import { BrandsView } from "@/domains/brands";

export const metadata: Metadata = {
  description: "Browse all available car brands on DriveEz.",
  title: "Brands | DriveEz",
};

import { Suspense } from "react";

export default function BrandsPage() {
  return (
    <Suspense fallback={<div>Loading brands...</div>}>
      <BrandsView />
    </Suspense>
  );
}
