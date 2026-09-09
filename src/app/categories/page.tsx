import type { Metadata } from "next";
import { CategoriesView } from "@/domains/categories";

export const metadata: Metadata = {
  description: "Browse all available car categories on DriveEz.",
  title: "Categories | DriveEz",
};

export default function CategoriesPage() {
  return <CategoriesView />;
}
