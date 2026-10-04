// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { VehicleDetailView, vehiclesService } from "@/domains/vehicles";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface VehicleDetailPageProps {
  params: Promise<{ id: string }>;
}

// ─────────────────────────────────────────────
// SECTION: Metadata & Static Generation
// ─────────────────────────────────────────────

export async function generateMetadata({
  params,
}: VehicleDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const vehicle = vehiclesService.getDetailBySlugOrId(id);

  return {
    description: `Explore the ${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim} in ${vehicle.colorString}. Certified pre-owned allocation at CarSphere.`,
    title: `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim} | CarSphere`,
  };
}

export function generateStaticParams() {
  const all = vehiclesService.getAllVehicles();
  const slugParams = all.map((vehicle) => ({
    id: vehicle.slug ?? vehicle.id,
  }));
  const idParams = all.map((vehicle) => ({
    id: vehicle.id,
  }));
  return [...slugParams, ...idParams];
}

// ─────────────────────────────────────────────
// SECTION: Page Component
// ─────────────────────────────────────────────

export default async function VehicleDetailPage({
  params,
}: VehicleDetailPageProps) {
  const { id } = await params;
  const vehicle = vehiclesService.getDetailBySlugOrId(id);

  // Automatically upgrades raw internal IDs (e.g. /inventory/f-1) to clean car name URLs
  if (
    id.toLowerCase() === vehicle.id.toLowerCase() &&
    vehicle.slug &&
    id.toLowerCase() !== vehicle.slug.toLowerCase()
  ) {
    redirect(`/inventory/${vehicle.slug}`);
  }

  return <VehicleDetailView vehicle={vehicle} />;
}
