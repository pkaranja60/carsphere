"use client";

import { useCallback } from "react";
import { useInventory } from "../hooks/use-inventory";

export function InventorySidebarPrice() {
  const { priceRange, setPriceRange } = useInventory();

  const handlePriceMaxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPriceRange([priceRange[0], Number.parseInt(e.target.value, 10)]);
    },
    [priceRange, setPriceRange]
  );

  const handlePriceOptionClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const min = Number.parseInt(e.currentTarget.dataset.min || "0", 10);
      const max = Number.parseInt(e.currentTarget.dataset.max || "0", 10);
      setPriceRange([min, max]);
    },
    [setPriceRange]
  );

  const formatPrice = (val: number) => {
    if (val >= 250_000) {
      return "$250k+";
    }
    return `$${(val / 1000).toFixed(0)}k`;
  };

  const priceOptions = [
    { label: "< $35,000", range: [0, 35_000] },
    { label: "$35k - $60k", range: [35_000, 60_000] },
    { label: "$60k - $100k", range: [60_000, 100_000] },
    { label: "$100k +", range: [100_000, 250_000] },
  ] as const;

  return (
    <div className="space-y-3 pt-2">
      <div className="flex items-center justify-between font-label-sm">
        <span className="text-on-surface-variant uppercase tracking-wider">
          Price Range
        </span>
        <span className="font-medium text-on-surface">
          {formatPrice(priceRange[0])} – {formatPrice(priceRange[1])}
        </span>
      </div>

      <input
        className="w-full"
        max={250_000}
        min={20_000}
        onChange={handlePriceMaxChange}
        step={5000}
        type="range"
        value={priceRange[1]}
      />

      <div className="grid grid-cols-2 gap-1.5 pt-1 font-medium text-on-surface text-sm">
        {priceOptions.map((opt) => {
          const isSelected =
            priceRange[0] === opt.range[0] && priceRange[1] === opt.range[1];
          return (
            <button
              className={`rounded py-1 text-center transition ${isSelected ? "bg-on-surface text-surface" : "border border-border hover:bg-surface-container-low"}`}
              data-max={opt.range[1]}
              data-min={opt.range[0]}
              key={opt.label}
              onClick={handlePriceOptionClick}
              type="button"
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
