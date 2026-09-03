// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { FaBoltLightning, FaCar, FaCouch, FaGaugeHigh } from "react-icons/fa6";
import { HiOutlineArrowRight, HiOutlineSparkles } from "react-icons/hi2";

import { Typography } from "@/shared";
import { CategoryCard } from "@/shared/components/category-card";

// ─────────────────────────────────────────────
// SECTION: Data
// ─────────────────────────────────────────────

const CATEGORIES = [
  {
    title: "SUVs",
    subtitle: "Spacious & Powerful",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80",
    icon: <FaCar className="h-3.5 w-3.5" />,
    colSpan: false,
  },
  {
    title: "Sedans",
    subtitle: "Comfort & Style",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80",
    icon: <FaCouch className="h-3.5 w-3.5" />,
    colSpan: false,
  },
  {
    title: "Sports Cars",
    subtitle: "High Performance",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
    icon: <FaGaugeHigh className="h-3.5 w-3.5" />,
    colSpan: false,
  },
  {
    title: "Hatchbacks",
    subtitle: "Smart & Efficient",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80",
    icon: <FaBoltLightning className="h-3.5 w-3.5" />,
    colSpan: false,
  },
  {
    title: "Luxury Cars",
    subtitle: "Ultimate Luxury",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
    icon: <HiOutlineSparkles className="h-3.5 w-3.5" />,
    colSpan: true,
  },
];

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function BrowseByCategory() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <Typography type="h2" variant="heading">
          Browse By Category
        </Typography>
        <Link
          className="inline-flex items-center gap-1.5 font-semibold text-foreground text-xs transition hover:text-red-600 sm:text-sm"
          href="#"
        >
          <span>View All Categories</span>
          <HiOutlineArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {CATEGORIES.map((category) => (
          <div
            key={category.title}
            className={category.colSpan ? "col-span-2 sm:col-span-1" : ""}
          >
            <CategoryCard
              icon={category.icon}
              image={category.image}
              subtitle={category.subtitle}
              title={category.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
