"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  MdClose,
  MdKeyboardArrowDown,
  MdMenu,
  MdOutlineFavoriteBorder,
  MdPersonOutline,
  MdRoomService,
} from "react-icons/md";
import { ThemeToggle } from "@/shared/components/theme-toggle";
import { Button } from "@/shared/components/ui/button";

export interface NavItem {
  children?: { label: string; href: string }[];
  href?: string;
  isActive?: boolean;
  label: string;
}

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  // Close menu when route changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu when resizing past the xl breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Manage dialog state and body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (!dialogRef.current?.open) {
        dialogRef.current?.show();
      }
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      if (dialogRef.current?.open) {
        dialogRef.current?.close();
      }
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

      <dialog
        className="fixed inset-0 top-20 z-100 m-0 h-[calc(100vh-80px)] w-full max-w-full overflow-y-auto bg-surface/90 p-0 backdrop-blur-xl backdrop:bg-transparent open:block md:top-30 md:h-[calc(100vh-120px)]"
        onClose={handleToggle}
        ref={dialogRef}
      >
        <div className="flex h-full w-full flex-col p-6 pb-24 shadow-xl">
          <nav className="flex flex-1 flex-col gap-6">
            {items.map((item) => (
              <div className="flex flex-col gap-2" key={item.label}>
                {item.href ? (
                  <Link
                    className={`text-label-lg transition-colors md:text-headline-sm ${
                      item.isActive
                        ? "font-bold text-primary"
                        : "text-on-surface hover:text-primary"
                    }`}
                    href={item.href}
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
                        className="text-label-md text-on-surface-variant hover:text-primary"
                        href={child.href}
                        key={child.label}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-6 border-border border-t pt-6">
            <Link
              className="flex items-center gap-3 text-on-surface transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              href="/account"
            >
              <MdPersonOutline className="text-primary text-xl" />
              <span className="font-semibold text-label-lg">My Account</span>
            </Link>

            <Link
              className="flex items-center gap-3 text-on-surface transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              href="/garage"
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
              className="flex items-center gap-3 text-on-surface transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              href="/concierge"
            >
              <MdRoomService className="text-primary text-xl" />
              <span className="font-semibold text-label-lg">
                Speak with Concierge
              </span>
            </Link>

            <div className="mt-2 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-label-lg text-on-surface">
                  Currency
                </span>
                <div className="relative flex items-center">
                  <select
                    aria-label="Select Currency"
                    className="cursor-pointer appearance-none rounded-md border border-border bg-surface-container-low py-1.5 pr-7 pl-3 font-semibold text-label-md text-on-surface outline-none transition-colors hover:text-primary focus:ring-0"
                    defaultValue="USD"
                    name="currency-mobile"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="KES">KES (KSh)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="EUR">EUR (€)</option>
                  </select>
                  <MdKeyboardArrowDown className="pointer-events-none absolute right-2 text-on-surface-variant" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-label-lg text-on-surface">
                  Appearance
                </span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
