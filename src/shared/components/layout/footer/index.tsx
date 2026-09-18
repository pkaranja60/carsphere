// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { FooterBottomBar } from "./footer-bottom-bar";
import { FooterGuarantees } from "./footer-guarantees";
import { FooterNavigation } from "./footer-navigation";
import { FooterNewsletter } from "./footer-newsletter";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="w-full border-surface-variant border-t bg-surface-container-low shadow-[0_-1px_6px_rgba(0,0,0,0.02)]">
      <div className="mx-auto max-w-400 px-margin-mobile pt-space-xl md:px-margin">
        <FooterGuarantees />

        <div className="grid grid-cols-1 gap-space-xl pt-space-xl pb-space-xl md:grid-cols-2 lg:grid-cols-5">
          <FooterNewsletter />
          <FooterNavigation />
        </div>

        <FooterBottomBar />
      </div>
    </footer>
  );
}
