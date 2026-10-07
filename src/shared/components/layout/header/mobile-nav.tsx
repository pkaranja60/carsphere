"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { Button } from "@/shared/components/ui/button";
import { MobileNavPreferences } from "./mobile-nav-preferences";

// ─────────────────────────────────────────────
// SECTION: Interfaces & Helpers
// ─────────────────────────────────────────────

export interface NavItem {
  href?: string;
  isActive?: boolean;
  label: string;
}

interface MobileNavProps {
  items: NavItem[];
}

function subscribe() {
  return () => undefined;
}

function useBodyElement() {
  return useSyncExternalStore(
    subscribe,
    () => (typeof document === "undefined" ? null : document.body),
    () => null
  );
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const portalTarget = useBodyElement();
  const pathname = usePathname();

  // Close menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu when resizing past xl breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Manage body scroll and escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const drawerContent =
    portalTarget && isOpen ? (
      <dialog
        aria-label="Mobile Navigation Menu"
        aria-modal="true"
        className="fixed inset-x-0 top-20 z-100 m-0 h-[calc(100dvh-80px)] w-full max-w-full overflow-y-auto border-border/80 border-t bg-surface p-0 shadow-2xl backdrop:bg-transparent md:top-30 md:h-[calc(100dvh-120px)] xl:hidden"
        open
      >
        <div className="flex min-h-full w-full flex-col p-6 pb-24">
          <nav className="flex flex-1 flex-col gap-5">
            {items.map((item) => (
              <div className="flex flex-col gap-2" key={item.label}>
                {item.href ? (
                  <Link
                    className={`font-semibold text-label-lg outline-none transition-colors focus:outline-none ${
                      item.isActive
                        ? "text-primary"
                        : "text-on-surface hover:text-primary"
                    }`}
                    href={item.href}
                    onClick={handleClose}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-label-lg text-on-surface">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </nav>

          <MobileNavPreferences onClose={handleClose} />
        </div>
      </dialog>
    ) : null;

  return (
    <div className="flex xl:hidden">
      <Button
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        onClick={handleToggle}
        size="icon-lg"
        variant="icon"
      >
        {isOpen ? (
          <MdClose className="text-2xl" />
        ) : (
          <MdMenu className="text-2xl" />
        )}
      </Button>

      {drawerContent && portalTarget
        ? createPortal(drawerContent, portalTarget)
        : null}
    </div>
  );
}
