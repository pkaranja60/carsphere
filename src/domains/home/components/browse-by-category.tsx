// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { MOCK_CATEGORIES } from "@/domains/categories/data/mock-categories";
import { Typography } from "@/shared";
import { CategoryCard } from "@/shared/components/category-card";

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
          className="inline-flex items-center gap-1.5 font-semibold text-foreground text-xs transition hover:text-primary sm:text-sm"
          href="/categories"
        >
          <span>View All Categories</span>
          <HiOutlineArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {MOCK_CATEGORIES.map((category) => (
          <div
            className={category.colSpan ? "col-span-2 md:col-span-1" : ""}
            key={category.title}
          >
            <CategoryCard
              href={`/cars?category=${category.title}`}
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
