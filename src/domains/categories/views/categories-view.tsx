import { CategoryCard } from "@/shared/components/category-card";
import { Typography } from "@/shared/components/typography";
import { MOCK_CATEGORIES } from "../data/mock-categories";

export function CategoriesView() {
  return (
    <div className="min-h-screen bg-surface-alt px-4 pt-16 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <Typography type="h1" variant="heading">
            Browse by Category
          </Typography>
          <Typography className="mt-4 max-w-2xl text-muted text-sm md:text-base">
            Select a vehicle category below to explore our inventory tailored to
            your specific lifestyle and needs.
          </Typography>
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
      </div>
    </div>
  );
}
