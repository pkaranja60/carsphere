import { PageHeader, PageLayout } from "@/shared";
import { CategoryCard } from "@/shared/components/category-card";
import { MOCK_CATEGORIES } from "../data/mock-categories";

export function CategoriesView() {
  return (
    <PageLayout containerClassName="pb-10 pt-10">
      <PageHeader
        description="Select a vehicle category below to explore our inventory tailored to your specific lifestyle and needs."
        title="Browse by Category"
      />

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
    </PageLayout>
  );
}
