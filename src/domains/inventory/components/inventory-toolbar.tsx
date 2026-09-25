import { MdGridView, MdKeyboardArrowDown, MdViewList } from "react-icons/md";

export function InventoryToolbar() {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-border border-b pb-4">
      <div className="flex items-center gap-3">
        <span className="font-bold font-label-lg text-on-surface">
          Showing 1 - 9 of 482 Vehicles
        </span>
        <span className="flex items-center gap-1.5 font-label-md font-medium text-on-surface-variant">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Instant
          Availability
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 font-label-md">
          <span className="font-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">
            Sort:
          </span>
          <div className="relative flex items-center">
            <select
              className="appearance-none rounded-lg border border-border bg-surface py-1.5 pr-8 pl-2.5 font-medium text-on-surface focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              defaultValue="featured"
            >
              <option className="bg-surface text-on-surface" value="featured">
                Featured & Curated Allocation
              </option>
              <option className="bg-surface text-on-surface" value="price-asc">
                Price: Low to High
              </option>
              <option className="bg-surface text-on-surface" value="price-desc">
                Price: High to Low
              </option>
              <option
                className="bg-surface text-on-surface"
                value="mileage-asc"
              >
                Mileage: Low to High
              </option>
            </select>
            <MdKeyboardArrowDown className="pointer-events-none absolute right-2 text-on-surface-variant" />
          </div>
        </div>
        {/* View toggle icons */}
        <div className="flex items-center overflow-hidden rounded-lg border border-border bg-surface">
          <button
            className="bg-surface-container-low p-1.5 text-on-surface"
            title="Grid View"
            type="button"
          >
            <MdGridView className="text-base" />
          </button>
          <button
            className="p-1.5 text-on-surface-variant transition-colors hover:text-on-surface"
            title="List View"
            type="button"
          >
            <MdViewList className="text-base" />
          </button>
        </div>
      </div>
    </div>
  );
}
