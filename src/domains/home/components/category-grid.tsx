// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import type { ElementType } from "react";
import {
  MdBolt,
  MdCommute,
  MdDirectionsCar,
  MdGarage,
  MdSavings,
  MdSportsMotorsports,
} from "react-icons/md";
import { SectionLayout } from "@/shared/components";

// ─────────────────────────────────────────────
// SECTION: Types & Data
// ─────────────────────────────────────────────

interface CategoryItem {
  highlightColor?: "primary" | "tertiary";
  icon: ElementType;
  title: string;
  vehicleCount: number;
}

const CATEGORY_ITEMS: CategoryItem[] = [
  {
    icon: MdDirectionsCar,
    title: "Executive Sedans",
    vehicleCount: 94,
  },
  {
    icon: MdGarage,
    title: "Luxury & Family SUVs",
    vehicleCount: 188,
  },
  {
    icon: MdSportsMotorsports,
    title: "Grand Tourers",
    vehicleCount: 46,
  },
  {
    highlightColor: "tertiary",
    icon: MdBolt,
    title: "Electric & Hybrid",
    vehicleCount: 82,
  },
  {
    icon: MdCommute,
    title: "Estate & Wagons",
    vehicleCount: 38,
  },
  {
    icon: MdSavings,
    title: "Verified Under $35k",
    vehicleCount: 112,
  },
];

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

function CategoryCard({
  icon: Icon,
  title,
  vehicleCount,
  highlightColor = "primary",
}: CategoryItem) {
  const iconColorClass =
    highlightColor === "tertiary" ? "text-tertiary" : "text-primary";
  const hoverTextColorClass =
    highlightColor === "tertiary"
      ? "group-hover:text-tertiary"
      : "group-hover:text-primary";

  return (
    <Link
      className="group flex min-h-35 flex-col items-start justify-between rounded-xl border border-surface-variant bg-surface-container-lowest p-space-md shadow-sm transition-all hover:bg-surface-container"
      href="#"
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg border border-surface-variant bg-surface-container-low transition-colors group-hover:bg-surface-container-highest ${iconColorClass}`}
      >
        <Icon className="text-2xl" />
      </div>
      <div>
        <h4
          className={`font-label-lg font-semibold text-label-lg text-on-surface transition-colors ${hoverTextColorClass}`}
        >
          {title}
        </h4>
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          {vehicleCount} Vehicles
        </span>
      </div>
    </Link>
  );
}

export function CategoryGrid() {
  return (
    <SectionLayout className="mt-space-xl">
      <div className="mb-space-lg flex flex-col items-start justify-between gap-space-xs md:flex-row md:items-end">
        <div>
          <span className="mb-space-xs block font-label-sm font-semibold text-label-sm text-primary uppercase tracking-widest">
            Class Taxonomy
          </span>
          <h2 className="font-headline-lg font-semibold text-headline-lg text-on-surface tracking-tight">
            Explore by Vehicle Category
          </h2>
        </div>
        <p className="max-w-sm font-body-sm text-body-sm text-on-surface-variant">
          Every segment calibrated for specific functional and aesthetic
          lifestyles.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-space-md md:grid-cols-3 lg:grid-cols-6">
        {CATEGORY_ITEMS.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </SectionLayout>
  );
}
