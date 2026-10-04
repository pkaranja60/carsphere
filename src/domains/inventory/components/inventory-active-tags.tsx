"use client";

import { MdClose } from "react-icons/md";
import { useInventory } from "../hooks/use-inventory";

const segmentRegex = / \(\$[^)]+\)/;

const BUDGET_LABELS: Record<string, string> = {
  "45-75k": "$45k - $75k",
  "75-150k": "$75k - $150k",
  "150k": "$150,000+",
  "under-45k": "< $45k",
};

const PROVENANCE_LABELS: Record<string, string> = {
  "1owner": "1-Owner Verified",
  cpo: "Certified Pre-Owned",
  low: "< 15,000 Miles",
  new: "Arrived This Week",
};

const BODY_STYLE_LABELS: Record<string, string> = {
  coupe: "Grand Tourer & Coupe",
  sedan: "Executive Sedan",
  suv: "Touring & Luxury SUV",
  wagon: "Estate & Sport Wagon",
};

const POWERTRAIN_LABELS: Record<string, string> = {
  all: "All Powertrains",
  awd: "All-Wheel Drive",
  electric: "Electric (EV)",
  hybrid: "Hybrid / PHEV",
  "naturally-aspirated": "Naturally Aspirated V8/F6",
  "turbo-inline": "Turbocharged Inline",
  "twin-turbo": "Twin-Turbo",
};

interface ActiveTagItem {
  id: string;
  label: string;
  onRemove: () => void;
}

function getMakeAndBodyTags(
  inv: ReturnType<typeof useInventory>
): ActiveTagItem[] {
  const tags: ActiveTagItem[] = [];

  if (inv.searchQuery) {
    tags.push({
      id: "search",
      label: `"${inv.searchQuery}"`,
      onRemove: () => inv.setSearchQuery(""),
    });
  }

  if (inv.selectedMake && inv.selectedMake !== "all") {
    tags.push({
      id: "make",
      label: inv.selectedMake,
      onRemove: () => inv.setSelectedMake("all"),
    });
  } else {
    for (const make of inv.selectedMakes) {
      tags.push({
        id: `make-${make}`,
        label: make,
        onRemove: () => inv.toggleMake(make),
      });
    }
  }

  if (inv.selectedBodyStyle && inv.selectedBodyStyle !== "all") {
    tags.push({
      id: "body",
      label: BODY_STYLE_LABELS[inv.selectedBodyStyle] || inv.selectedBodyStyle,
      onRemove: () => inv.setSelectedBodyStyle("all"),
    });
  }

  return tags;
}

function getFilterOptionsTags(
  inv: ReturnType<typeof useInventory>
): ActiveTagItem[] {
  const tags: ActiveTagItem[] = [];

  if (inv.targetBudget && inv.targetBudget !== "all") {
    tags.push({
      id: "budget",
      label: BUDGET_LABELS[inv.targetBudget] || inv.targetBudget,
      onRemove: () => inv.setTargetBudget("all"),
    });
  }

  if (inv.provenance && inv.provenance !== "all") {
    tags.push({
      id: "provenance",
      label: PROVENANCE_LABELS[inv.provenance] || inv.provenance,
      onRemove: () => inv.setProvenance("all"),
    });
  }

  if (inv.selectedPowertrain && inv.selectedPowertrain !== "all") {
    tags.push({
      id: "powertrain",
      label:
        POWERTRAIN_LABELS[inv.selectedPowertrain] || inv.selectedPowertrain,
      onRemove: () => inv.setSelectedPowertrain("all"),
    });
  } else {
    for (const pt of inv.selectedPowertrains) {
      tags.push({
        id: `pt-${pt}`,
        label: pt,
        onRemove: () => inv.togglePowertrain(pt),
      });
    }
  }

  for (const seg of inv.selectedSegments) {
    if (seg !== "All Dimensions") {
      tags.push({
        id: `seg-${seg}`,
        label: seg.replace(segmentRegex, ""),
        onRemove: () => inv.toggleSegment(seg),
      });
    }
  }

  return tags;
}

function FilterTagItem({ item }: { item: ActiveTagItem }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-container-low px-2.5 py-1 font-medium text-on-surface text-xs">
      {item.label}
      <button
        className="font-bold hover:text-error"
        onClick={item.onRemove}
        type="button"
      >
        <MdClose className="text-sm" />
      </button>
    </span>
  );
}

export function InventoryActiveTags() {
  const inventory = useInventory();
  const tags = [
    ...getMakeAndBodyTags(inventory),
    ...getFilterOptionsTags(inventory),
  ];

  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-1.5 pb-2">
      {tags.map((tag) => (
        <FilterTagItem item={tag} key={tag.id} />
      ))}
    </div>
  );
}
