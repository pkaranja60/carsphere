import type { Metadata } from "next";
import { CategoriesView } from "@/domains/categories";

export const metadata: Metadata = {
  description: "Browse all available car categories on DriveEz.",
  title: "Categories | DriveEz",
};

import { Suspense } from "react";

export default function CategoriesPage() {
  return (
    <Suspense fallback={<div>Loading categories...</div>}>
      <CategoriesView />
    </Suspense>
  );
}
