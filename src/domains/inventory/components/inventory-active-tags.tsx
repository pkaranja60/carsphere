"use client";

import { useCallback } from "react";
import { MdClose } from "react-icons/md";
import { useInventory } from "../hooks/use-inventory";

const segmentRegex = / \(\$[^)]+\)/;

export function InventoryActiveTags() {
  const {
    searchQuery,
    setSearchQuery,
    priceRange,
    setPriceRange,
    selectedMakes,
    toggleMake,
    selectedBodyTypes,
    toggleBodyType,
    selectedPowertrains,
    togglePowertrain,
    selectedSegments,
    toggleSegment,
    isCPO,
    toggleCPO,
  } = useInventory();

  const activeCount =
    (searchQuery ? 1 : 0) +
    selectedMakes.size +
    selectedBodyTypes.size +
    selectedPowertrains.size +
    (selectedSegments.has("All Dimensions") ? 0 : selectedSegments.size) +
    (priceRange[0] > 20_000 || priceRange[1] < 250_000 ? 1 : 0) +
    (isCPO ? 1 : 0);

  const tagClass =
    "inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-container-low px-2.5 py-1 text-xs font-medium text-on-surface";

  const clearSearchQuery = useCallback(
    () => setSearchQuery(""),
    [setSearchQuery]
  );
  const resetPriceRange = useCallback(
    () => setPriceRange([20_000, 250_000]),
    [setPriceRange]
  );

  const handleMakeTagRemove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { make } = e.currentTarget.dataset;
      if (make) {
        toggleMake(make);
      }
    },
    [toggleMake]
  );

  const handleBodyTypeRemove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { bt } = e.currentTarget.dataset;
      if (bt) {
        toggleBodyType(bt);
      }
    },
    [toggleBodyType]
  );

  const handlePowertrainRemove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { pt } = e.currentTarget.dataset;
      if (pt) {
        togglePowertrain(pt);
      }
    },
    [togglePowertrain]
  );

  const handleSegmentRemove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { seg } = e.currentTarget.dataset;
      if (seg) {
        toggleSegment(seg);
      }
    },
    [toggleSegment]
  );

  const formatPrice = (val: number) => {
    if (val >= 250_000) {
      return "$250k+";
    }
    return `$${(val / 1000).toFixed(0)}k`;
  };

  if (activeCount === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-1.5 pb-2">
      {searchQuery !== "" && (
        <span className={tagClass}>
          "{searchQuery}"
          <button
            className="font-bold hover:text-error"
            onClick={clearSearchQuery}
            type="button"
          >
            <MdClose className="text-sm" />
          </button>
        </span>
      )}
      {Boolean(isCPO) && (
        <span className={tagClass}>
          Certified Pre-Owned
          <button
            className="font-bold hover:text-error"
            onClick={toggleCPO}
            type="button"
          >
            <MdClose className="text-sm" />
          </button>
        </span>
      )}
      {Array.from(selectedMakes).map((make) => (
        <span className={tagClass} key={make}>
          {make}
          <button
            className="font-bold hover:text-error"
            data-make={make}
            onClick={handleMakeTagRemove}
            type="button"
          >
            <MdClose className="text-sm" />
          </button>
        </span>
      ))}
      {Array.from(selectedBodyTypes).map((bt) => (
        <span className={tagClass} key={bt}>
          {bt}
          <button
            className="font-bold hover:text-error"
            data-bt={bt}
            onClick={handleBodyTypeRemove}
            type="button"
          >
            <MdClose className="text-sm" />
          </button>
        </span>
      ))}
      {Array.from(selectedPowertrains).map((pt) => (
        <span className={tagClass} key={pt}>
          {pt}
          <button
            className="font-bold hover:text-error"
            data-pt={pt}
            onClick={handlePowertrainRemove}
            type="button"
          >
            <MdClose className="text-sm" />
          </button>
        </span>
      ))}
      {Array.from(selectedSegments)
        .filter((seg) => seg !== "All Dimensions")
        .map((seg) => (
          <span className={tagClass} key={seg}>
            {seg.replace(segmentRegex, "")}
            <button
              className="font-bold hover:text-error"
              data-seg={seg}
              onClick={handleSegmentRemove}
              type="button"
            >
              <MdClose className="text-sm" />
            </button>
          </span>
        ))}
      {(priceRange[0] > 20_000 || priceRange[1] < 250_000) && (
        <span className={tagClass}>
          {priceRange[0] > 20_000 ? `${formatPrice(priceRange[0])} - ` : "< "}
          {formatPrice(priceRange[1])}
          <button
            className="font-bold hover:text-error"
            onClick={resetPriceRange}
            type="button"
          >
            <MdClose className="text-sm" />
          </button>
        </span>
      )}
    </div>
  );
}
