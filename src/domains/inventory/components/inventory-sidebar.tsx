import { MdClose, MdSearch } from "react-icons/md";

export function InventorySidebar() {
  return (
    <aside
      className="w-full shrink-0 space-y-6 rounded-xl border border-border bg-surface p-5 shadow-level-1 lg:w-70"
      data-purpose="inventory-sidebar"
    >
      {/* Header & Reset */}
      <div className="flex items-center justify-between border-border-strong border-b pb-3">
        <div className="flex items-center gap-2">
          <h2 className="font-label-lg text-on-surface uppercase tracking-tight">
            Filter Selection
          </h2>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary font-bold font-label-sm text-on-primary">
            3
          </span>
        </div>
        <button
          className="font-label-sm font-semibold text-on-surface-variant underline hover:text-on-surface"
          type="button"
        >
          Reset All
        </button>
      </div>

      {/* Active Filter Tags */}
      <div className="flex flex-wrap gap-1.5 pb-2">
        {["Certified Pre-Owned", "AWD", "< $90,000"].map((tag) => (
          <span
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-container-low px-2.5 py-1 font-label-md font-medium text-on-surface"
            key={tag}
          >
            {tag}
            <button className="font-bold hover:text-error" type="button">
              <MdClose className="text-sm" />
            </button>
          </span>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-on-surface-variant">
          <MdSearch className="text-lg" />
        </span>
        <input
          className="w-full rounded-lg border border-border bg-surface-container-low py-2 pr-3 pl-9 font-body-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Search make, model, trim..."
          type="text"
        />
      </div>

      {/* SEGMENT / ALLOCATION */}
      <div className="space-y-2.5">
        <h3 className="font-label-sm text-on-surface-variant uppercase tracking-wider">
          Segment / Allocation
        </h3>
        <div className="space-y-2 font-label-md font-medium text-on-surface">
          {[
            "All Dimensions",
            "Performance ($68k+)",
            "Everyday Excellence ($24k-$45k)",
          ].map((label, idx) => (
            <label
              className="flex cursor-pointer items-center justify-between"
              key={label}
            >
              <span className="flex items-center gap-2">
                <input
                  className="h-3.5 w-3.5 text-primary focus:ring-primary"
                  defaultChecked={idx === 0}
                  name="segment"
                  type="radio"
                />
                <span>{label}</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* PRICE RANGE */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between font-label-sm">
          <span className="text-on-surface-variant uppercase tracking-wider">
            Price Range
          </span>
          <span className="font-semibold text-on-surface">$20k – $250k+</span>
        </div>
        <input
          className="w-full"
          defaultValue="90"
          max="250"
          min="20"
          type="range"
        />
        <div className="grid grid-cols-2 gap-1.5 pt-1 font-label-md font-medium text-on-surface">
          <button
            className="rounded border border-border py-1 text-center transition hover:bg-surface-container-low"
            type="button"
          >
            &lt; $35,000
          </button>
          <button
            className="rounded border border-border py-1 text-center transition hover:bg-surface-container-low"
            type="button"
          >
            $35k - $60k
          </button>
          <button
            className="rounded bg-on-surface py-1 text-center font-semibold text-surface"
            type="button"
          >
            $60k - $100k
          </button>
          <button
            className="rounded border border-border py-1 text-center transition hover:bg-surface-container-low"
            type="button"
          >
            $100k +
          </button>
        </div>
      </div>

      {/* MAKE & MARQUE */}
      <div className="space-y-2.5 pt-2">
        <div className="flex items-center justify-between font-label-sm">
          <span className="text-on-surface-variant uppercase tracking-wider">
            Make & Marque
          </span>
          <span className="text-on-surface-variant">8 Selected</span>
        </div>
        <div className="max-h-48 space-y-1.5 overflow-y-auto pr-1 font-label-md text-on-surface">
          {[
            { checked: true, count: 42, label: "Porsche" },
            { checked: true, count: 58, label: "BMW" },
            { checked: true, count: 51, label: "Mercedes-Benz" },
            { checked: true, count: 39, label: "Audi" },
            { checked: true, count: 28, label: "Genesis" },
            { checked: true, count: 64, label: "Lexus" },
            { checked: false, count: 14, label: "Aston Martin" },
            { checked: false, count: 31, label: "Volvo" },
          ].map((item) => (
            <label
              className="flex cursor-pointer items-center justify-between hover:text-primary"
              key={item.label}
            >
              <span className="flex items-center gap-2">
                <input
                  className="h-3.5 w-3.5 rounded border-border text-primary focus:ring-primary"
                  defaultChecked={item.checked}
                  type="checkbox"
                />
                <span>{item.label}</span>
              </span>
              <span className="font-label-sm text-on-surface-variant">
                {item.count}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* BODY ARCHITECTURE */}
      <div className="space-y-2 pt-2">
        <h3 className="font-label-sm text-on-surface-variant uppercase tracking-wider">
          Body Architecture
        </h3>
        <div className="flex flex-wrap gap-1.5 font-label-sm">
          <button
            className="rounded bg-on-surface px-2.5 py-1 font-medium text-surface"
            type="button"
          >
            Sedan
          </button>
          <button
            className="rounded border border-border px-2.5 py-1 font-medium hover:bg-surface-container-low"
            type="button"
          >
            SUV / Crossover
          </button>
          <button
            className="rounded border border-border px-2.5 py-1 font-medium hover:bg-surface-container-low"
            type="button"
          >
            Coupe
          </button>
          <button
            className="rounded border border-border px-2.5 py-1 font-medium hover:bg-surface-container-low"
            type="button"
          >
            Grand Tourer
          </button>
          <button
            className="rounded border border-border px-2.5 py-1 font-medium hover:bg-surface-container-low"
            type="button"
          >
            Wagon / Touring
          </button>
        </div>
      </div>

      {/* POWERTRAIN */}
      <div className="space-y-2 pt-2">
        <h3 className="font-label-sm text-on-surface-variant uppercase tracking-wider">
          Powertrain
        </h3>
        <div className="space-y-1.5 font-label-md text-on-surface">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              className="h-3.5 w-3.5 rounded border-border text-primary focus:ring-primary"
              defaultChecked
              type="checkbox"
            />
            <span>Electric</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2">
            <input
              className="h-3.5 w-3.5 rounded border-border text-primary focus:ring-primary"
              defaultChecked
              type="checkbox"
            />
            <span>Hybrid / PHEV</span>
          </label>
        </div>
      </div>
    </aside>
  );
}
