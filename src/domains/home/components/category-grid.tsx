// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { SectionLayout } from "@/shared/components";

// ─────────────────────────────────────────────
// SECTION: Types & Data
// ─────────────────────────────────────────────

interface CategoryItem {
  highlightColor?: "primary" | "tertiary";
  imageSrc: string;
  title: string;
  vehicleCount: number;
}

const CATEGORY_ITEMS: CategoryItem[] = [
  {
    imageSrc: "/images/category-sedan.jpg",
    title: "Executive Sedans",
    vehicleCount: 94,
  },
  {
    imageSrc: "/images/category-suv.jpg",
    title: "Luxury & Family SUVs",
    vehicleCount: 188,
  },
  {
    imageSrc: "/images/category-gt.jpg",
    title: "Grand Tourers",
    vehicleCount: 46,
  },
  {
    highlightColor: "tertiary",
    imageSrc: "/images/category-electric.jpg",
    title: "Electric & Hybrid",
    vehicleCount: 82,
  },
  {
    imageSrc: "/images/category-estate.jpg",
    title: "Estate & Wagons",
    vehicleCount: 38,
  },
  {
    imageSrc: "/images/category-verified-wagon.jpg",
    title: "Verified Under $35k",
    vehicleCount: 112,
  },
];

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

function CategoryCard({
  imageSrc,
  title,
  vehicleCount,
  highlightColor = "primary",
}: CategoryItem) {
  const hoverTextColorClass =
    highlightColor === "tertiary"
      ? "group-hover:text-tertiary"
      : "group-hover:text-primary";

  return (
    <Link
      className="group relative flex min-h-35 flex-col items-start justify-between overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest p-space-md shadow-none transition-all hover:bg-surface-container md:shadow-sm"
      href="#"
    >
      <div className="pointer-events-none relative z-10">
        <h4
          className={`font-label-lg font-semibold text-label-lg text-on-surface transition-colors ${hoverTextColorClass}`}
        >
          {title}
        </h4>
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          {vehicleCount} Vehicles
        </span>
      </div>

      <div className="absolute -right-6 -bottom-6 z-0 h-36 w-56 mix-blend-multiply transition-transform duration-500 group-hover:scale-110 md:-right-8 md:-bottom-8 md:h-48 md:w-72">
        <Image
          alt={title}
          className="object-contain object-bottom-right"
          fill
          sizes="(max-width: 768px) 224px, 288px"
          src={imageSrc}
        />
      </div>
    </Link>
  );
}

export function CategoryGrid() {
  return (
    <SectionLayout className="mt-space-xl">
      <div className="mb-space-lg flex flex-col items-start justify-between gap-space-xs md:flex-row md:items-end">
        <div>
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
