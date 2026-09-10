// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { PageHeader, PageLayout } from "@/shared";
import { BrandCard } from "@/shared/components/brand-card";
import { Pagination } from "@/shared/components/pagination";
import { MOCK_BRANDS } from "../data/mock-brands";

const SPLIT_REGEX = /[- ]/;

// ─────────────────────────────────────────────
// SECTION: Brands View
// ─────────────────────────────────────────────

export function BrandsView() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? Number.parseInt(pageParam, 10) : 1;
  const itemsPerPage = 20;
  const totalPages = Math.ceil(MOCK_BRANDS.length / itemsPerPage);

  const paginatedBrands = MOCK_BRANDS.slice(
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
      router.push(`/brands?${params.toString()}`);
      window.scrollTo({ behavior: "smooth", top: 0 });
    },
    [router, searchParams]
  );

  return (
    <PageLayout containerClassName="pb-10 pt-10">
      <PageHeader
        description="Select a brand below to view all available inventory. We partner with the world's leading automotive manufacturers to bring you the best selection."
        title="Browse by Brand"
      />

      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {paginatedBrands.map((brand) => {
            if (brand.isTextOnly) {
              return (
                <BrandCard
                  containerClassName="p-4 flex flex-col items-center justify-center min-h-[120px]"
                  href={`/cars?make=${brand.name}`}
                  key={brand.id}
                >
                  <span className="text-center font-extrabold text-foreground text-sm uppercase leading-tight tracking-wider md:text-base">
                    {brand.name.includes("-") || brand.name.includes(" ") ? (
                      <>
                        {brand.name.split(SPLIT_REGEX)[0]}-<br />
                        {brand.name.split(SPLIT_REGEX)[1]}
                      </>
                    ) : (
                      brand.name
                    )}
                  </span>
                </BrandCard>
              );
            }

            return (
              <BrandCard
                brandName={brand.name}
                href={`/cars?make=${brand.name}`}
                imageClassName="h-12 w-auto object-contain transition group-hover:scale-105"
                key={brand.id}
                logoSrc={brand.logoSrc ?? ""}
                showLabel={true}
              />
            );
          })}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            onChange={handlePageChange}
            totalPages={totalPages}
          />
        )}
      </div>
    </PageLayout>
  );
}
