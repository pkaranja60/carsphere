"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { Button } from "@/shared/components/ui/button";
import { MobileNavPreferences } from "./mobile-nav-preferences";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface NavItem {
  children?: { label: string; href: string }[];
  href?: string;
  isActive?: boolean;
  label: string;
}

interface MobileNavProps {
  items: NavItem[];
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

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
    mounted && isOpen ? (
      <div
        aria-label="Mobile Navigation Menu"
        aria-modal="true"
        className="fixed inset-x-0 top-20 z-100 h-[calc(100dvh-80px)] w-full overflow-y-auto border-border/80 border-t bg-surface p-0 shadow-2xl md:top-30 md:h-[calc(100dvh-120px)] xl:hidden"
        role="dialog"
      >
        <div className="flex min-h-full w-full flex-col p-6 pb-24">
          <nav className="flex flex-1 flex-col gap-5">
            {items.map((item) => (
              <div className="flex flex-col gap-2" key={item.label}>
                {item.href ? (
                  <Link
                    className={`text-label-lg outline-none transition-colors focus:outline-none md:text-headline-sm ${
                      item.isActive
                        ? "font-bold text-primary"
                        : "text-on-surface hover:text-primary"
                    }`}
                    href={item.href}
                    onClick={handleClose}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-bold text-label-lg text-on-surface md:text-headline-sm">
                    {item.label}
                  </span>
                )}
                {item.children ? (
                  <div className="ml-4 flex flex-col gap-3 border-border border-l-2 pl-4">
                    {item.children.map((child) => (
                      <Link
                        className="text-label-md text-on-surface-variant outline-none transition-colors hover:text-primary focus:outline-none"
                        href={child.href}
                        key={child.label}
                        onClick={handleClose}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <MobileNavPreferences onClose={handleClose} />
        </div>
      </div>
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

      {mounted && drawerContent
        ? createPortal(drawerContent, document.body)
        : null}
    </div>
  );
}
