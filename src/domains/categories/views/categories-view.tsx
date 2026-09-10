"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { PageHeader, PageLayout } from "@/shared";
import { CategoryCard } from "@/shared/components/category-card";
import { Pagination } from "@/shared/components/pagination";
import { MOCK_CATEGORIES } from "../data/mock-categories";

export function CategoriesView() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Pagination logic
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? Number.parseInt(pageParam, 10) : 1;
  const itemsPerPage = 12;
  const totalPages = Math.ceil(MOCK_CATEGORIES.length / itemsPerPage);

  const paginatedCategories = MOCK_CATEGORIES.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      if (page === 1) {
        params.delete("page");
      } else {
        params.set("page", page.toString());
      }
      router.push(`/categories?${params.toString()}`);
      window.scrollTo({ behavior: "smooth", top: 0 });
    },
    [router, searchParams]
  );

  return (
    <PageLayout containerClassName="pb-10 pt-10">
      <PageHeader
        description="Select a vehicle category below to explore our inventory tailored to your specific lifestyle and needs."
        title="Browse by Category"
      />

      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {paginatedCategories.map((category) => (
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
        <Pagination
          currentPage={currentPage}
          onChange={handlePageChange}
          totalPages={totalPages}
        />
      </div>
    </PageLayout>
  );
}
