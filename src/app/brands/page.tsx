import type { Metadata } from "next";
import { BrandsView } from "@/domains/brands";

export const metadata: Metadata = {
  description: "Browse all available car brands on DriveEz.",
  title: "Brands | DriveEz",
};

export default function BrandsPage() {
  return <BrandsView />;
}
