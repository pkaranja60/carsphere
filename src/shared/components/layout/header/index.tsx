// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { HeaderMainNav } from "./header-main-nav";
import { HeaderTopBar } from "./header-top-bar";

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full">
      <HeaderTopBar />
      <HeaderMainNav />
    </header>
  );
}
