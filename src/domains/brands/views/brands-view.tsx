import { BrandCard } from "@/shared/components/brand-card";
import { Typography } from "@/shared/components/typography";
import { MOCK_BRANDS } from "../data/mock-brands";

const SPLIT_REGEX = /[- ]/;

export function BrandsView() {
  return (
    <div className="min-h-screen bg-surface-alt px-4 pt-16 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <Typography type="h1" variant="heading">
            Browse by Brand
          </Typography>
          <Typography className="mt-4 max-w-2xl text-muted text-sm md:text-base">
            Select a brand below to view all available inventory. We partner
            with the world's leading automotive manufacturers to bring you the
            best selection.
          </Typography>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {MOCK_BRANDS.map((brand) => {
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
      </div>
    </div>
  );
}
