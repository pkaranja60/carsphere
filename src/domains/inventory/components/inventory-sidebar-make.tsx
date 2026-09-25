"use client";

import { useCallback } from "react";
import { useInventory } from "../hooks/use-inventory";

export function InventorySidebarMake() {
  const { selectedMakes, toggleMake } = useInventory();

  const handleMakeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { make } = e.currentTarget.dataset;
      if (make) {
        toggleMake(make);
      }
    },
    [toggleMake]
  );

  const makes = [
    { count: 42, label: "Porsche" },
    { count: 58, label: "BMW" },
    { count: 51, label: "Mercedes-Benz" },
    { count: 39, label: "Audi" },
    { count: 28, label: "Genesis" },
    { count: 64, label: "Lexus" },
    { count: 14, label: "Aston Martin" },
    { count: 31, label: "Volvo" },
  ];

  return (
    <div className="space-y-2.5 pt-2">
      <div className="flex items-center justify-between font-label-sm">
        <span className="text-on-surface-variant uppercase tracking-wider">
          Make & Marque
        </span>
        <span className="text-on-surface-variant">
          {selectedMakes.size} Selected
        </span>
      </div>
      <div className="max-h-48 space-y-1.5 overflow-y-auto pr-1 text-on-surface text-sm">
        {makes.map((item) => (
          <label
            className="flex cursor-pointer items-center justify-between hover:text-primary"
            key={item.label}
          >
            <span className="flex items-center gap-2">
              <input
                checked={selectedMakes.has(item.label)}
                className="h-3.5 w-3.5 rounded border-border text-primary focus:ring-primary"
                data-make={item.label}
                onChange={handleMakeChange}
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
  );
}
