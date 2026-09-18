"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  MdClose,
  MdMenu,
  MdOutlineFavoriteBorder,
  MdRoomService,
} from "react-icons/md";
import { ThemeToggle } from "@/shared/components/theme-toggle";
import { Button } from "@/shared/components/ui/button";

export interface NavItem {
  href: string;
  isActive?: boolean;
  label: string;
}

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu when route changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

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

      {!!isOpen &&
        mounted &&
        createPortal(
          <div className="fixed inset-0 top-20 z-100 bg-surface/80 backdrop-blur-xl md:top-30">
            <div className="h-full w-full p-6 shadow-xl">
              <nav className="flex flex-1 flex-col gap-6">
                {items.map((item) => (
                  <Link
                    className={`text-label-lg transition-colors md:text-headline-sm ${
                      item.isActive
                        ? "font-bold text-primary"
                        : "text-on-surface hover:text-primary"
                    }`}
                    href={item.href}
                    key={item.label}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 flex flex-col gap-6 border-border border-t pt-6">
                <Link
                  className="flex items-center gap-3 text-on-surface transition-colors hover:text-primary"
                  href="#"
                >
                  <MdOutlineFavoriteBorder className="text-primary text-xl" />
                  <span className="font-semibold text-label-lg">
                    Saved Vehicles
                  </span>
                  <span className="ml-auto rounded-full bg-surface-container-high px-2 py-0.5 font-bold text-[10px] text-on-surface-variant shadow-sm">
                    0
                  </span>
                </Link>

                <Link
                  className="flex items-center gap-3 text-on-surface transition-colors hover:text-primary"
                  href="#"
                >
                  <MdRoomService className="text-primary text-xl" />
                  <span className="font-semibold text-label-lg">
                    Speak with Concierge
                  </span>
                </Link>

                <div className="mt-2 flex items-center justify-between">
                  <span className="font-semibold text-label-lg text-on-surface">
                    Appearance
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
