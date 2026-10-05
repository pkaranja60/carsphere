// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { redirect } from "next/navigation";

// ─────────────────────────────────────────────
// SECTION: Page Component
// ─────────────────────────────────────────────

interface BookViewingPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function BookViewingPage({
  searchParams,
}: BookViewingPageProps) {
  const params = await searchParams;
  const search = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (typeof value === "string") {
      search.set(key, value);
    }
  }

  const query = search.toString();
  redirect(query ? `/contact?${query}` : "/contact");
}
