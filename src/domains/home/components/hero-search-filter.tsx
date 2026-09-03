import { HiMiniChevronDown, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { Button } from "@/shared";

export function HeroSearchFilter() {
  return (
    <div className="container relative z-20 mx-auto w-full px-4 sm:px-6 lg:-mt-24 lg:translate-y-1/2 lg:px-8">
      <div className="rounded-2xl border border-neutral-800 bg-surface-alt p-5 shadow-2xl sm:p-6">
        <h2 className="mb-4 font-bold text-base text-white sm:text-lg">
          Find Your <span className="text-red-600">Perfect Car</span>
        </h2>

        <form className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          <div className="relative">
            <select className="w-full appearance-none rounded-lg border border-white/10 bg-surface px-3.5 py-3 text-foreground text-xs transition focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 sm:text-sm">
              <option value="">All Makes</option>
              <option value="bmw">BMW</option>
              <option value="audi">Audi</option>
              <option value="mercedes">Mercedes-Benz</option>
              <option value="porsche">Porsche</option>
            </select>
            <HiMiniChevronDown
              className="pointer-events-none absolute top-5.5 right-3 h-4 w-4 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <div className="relative">
            <select className="w-full appearance-none rounded-lg border border-white/10 bg-surface px-3.5 py-3 text-foreground text-xs transition focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 sm:text-sm">
              <option value="">All Models</option>
              <option value="m4">M4 Competition</option>
              <option value="rs6">RS6 Avant</option>
              <option value="amg-gt">AMG GT</option>
            </select>
            <HiMiniChevronDown
              className="pointer-events-none absolute top-5.5 right-3 h-4 w-4 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <div className="relative">
            <select className="w-full appearance-none rounded-lg border border-white/10 bg-surface px-3.5 py-3 text-foreground text-xs transition focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 sm:text-sm">
              <option value="">Min Price</option>
              <option value="20k">$20,000</option>
              <option value="50k">$50,000</option>
              <option value="100k">$100,000</option>
            </select>
            <HiMiniChevronDown
              className="pointer-events-none absolute top-5.5 right-3 h-4 w-4 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <div className="relative">
            <select className="w-full appearance-none rounded-lg border border-white/10 bg-surface px-3.5 py-3 text-foreground text-xs transition focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 sm:text-sm">
              <option value="">Max Price</option>
              <option value="50k">$50,000</option>
              <option value="100k">$100,000</option>
              <option value="200k">$200,000+</option>
            </select>
            <HiMiniChevronDown
              className="pointer-events-none absolute top-5.5 right-3 h-4 w-4 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <div className="relative">
            <select className="w-full appearance-none rounded-lg border border-white/10 bg-surface px-3.5 py-3 text-foreground text-xs transition focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 sm:text-sm">
              <option value="">Body Type</option>
              <option value="coupe">Coupe</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="convertible">Convertible</option>
            </select>
            <HiMiniChevronDown
              className="pointer-events-none absolute top-5.5 right-3 h-4 w-4 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <Button
            className="h-auto py-3"
            fullWidth
            type="button"
            variant="primary"
          >
            <HiOutlineMagnifyingGlass size={20} />
            <span>Search Car</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
