import type { Metadata } from "next";
import { VehicleDetailsView } from "@/domains/cars";
import { MOCK_CARS } from "@/domains/cars/data/mock-cars";

// Generate static params for our mock data
export function generateStaticParams() {
  return MOCK_CARS.map((car) => ({
    id: car.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const car = MOCK_CARS.find((c) => c.id === id);

  if (!car) {
    return {
      title: "Vehicle Not Found | DriveEz",
    };
  }

  return {
    description: car.description,
    title: `${car.name} | DriveEz`,
  };
}

export default async function CarDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <VehicleDetailsView carId={id} />;
}
