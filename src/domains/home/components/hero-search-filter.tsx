import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Button, Select } from "@/shared";

export function HeroSearchFilter() {
  return (
    <div className="container relative z-20 mx-auto w-full px-4 sm:px-6 lg:-mt-24 lg:translate-y-1/2 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-black/90 p-5 shadow-2xl backdrop-blur-md">
        <h2 className="mb-4 font-bold text-lg text-white md:text-xl lg:text-2xl">
          Find Your <span className="text-red-600">Perfect Car</span>
        </h2>

        <form className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          <Select
            options={[
              { label: "All Makes", value: "all" },
              { label: "BMW", value: "bmw" },
              { label: "Audi", value: "audi" },
              { label: "Mercedes-Benz", value: "mercedes" },
              { label: "Porsche", value: "porsche" },
            ]}
            placeholder="All Makes"
          />

          <Select
            options={[
              { label: "All Models", value: "all" },
              { label: "M4 Competition", value: "m4" },
              { label: "RS6 Avant", value: "rs6" },
              { label: "AMG GT", value: "amg-gt" },
            ]}
            placeholder="All Models"
          />

          <Select
            options={[
              { label: "Min Price", value: "all" },
              { label: "$20,000", value: "20k" },
              { label: "$50,000", value: "50k" },
              { label: "$100,000", value: "100k" },
            ]}
            placeholder="Min Price"
          />

          <Select
            options={[
              { label: "Max Price", value: "all" },
              { label: "$50,000", value: "50k" },
              { label: "$100,000", value: "100k" },
              { label: "$200,000+", value: "200k" },
            ]}
            placeholder="Max Price"
          />

          <Select
            options={[
              { label: "Body Type", value: "all" },
              { label: "Coupe", value: "coupe" },
              { label: "Sedan", value: "sedan" },
              { label: "SUV", value: "suv" },
              { label: "Convertible", value: "convertible" },
            ]}
            placeholder="Body Type"
          />

          <Button
            className="h-auto py-2"
            fullWidth
            type="button"
            variant="primary"
          >
            <HiMiniMagnifyingGlass className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>Search Car</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
