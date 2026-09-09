"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import {
  HiCalendarDateRange,
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";
import { RiSpeedUpLine } from "react-icons/ri";
import { Button } from "../button";
import { NavLink } from "../nav-link";
import { MobileNavItem } from "./mobile-nav-item";
import { navLinks, topNavs } from "./nav-data";
import { NavDropdown } from "./nav-dropdown";
import { NavbarAuth } from "./navbar-auth";
import { NavbarSearch } from "./navbar-search";
import { TopNav } from "./top-nav";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = useCallback(() => setIsMobileMenuOpen(true), []);
  const handleCloseMobileMenu = useCallback(
    () => setIsMobileMenuOpen(false),
    []
  );

  return (
    <>
      <nav className="relative z-50 w-full border-border border-b bg-surface backdrop-blur-md dark:border-white/10">
        {/* Top bar - hidden on mobile */}
        <div className="hidden border-border border-b py-3.5 md:block dark:border-white/10">
          <div className="mx-auto flex w-full max-w-384 flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 sm:px-6 lg:justify-between lg:px-8">
            {topNavs.map((nav) => (
              <TopNav icon={nav.icon} key={nav.label} label={nav.label} />
            ))}
          </div>
        </div>

        <div className="py-4 lg:py-5">
          <div className="mx-auto flex w-full max-w-384 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <button
                aria-label="Open mobile menu"
                className="group flex min-h-11 min-w-11 items-center justify-center text-foreground hover:text-primary min-[1100px]:hidden dark:text-white"
                onClick={handleOpenMobileMenu}
                type="button"
              >
                <HiOutlineBars3
                  className="group-hover:text-primary"
                  size={28}
                />
              </button>

              <Link className="flex items-center gap-2" href="/">
                <div className="relative flex h-7.5 w-7.5 -rotate-45 items-center justify-center rounded-full border-4 border-foreground border-t-transparent md:h-14 md:w-14 dark:border-red-600 dark:border-t-transparent">
                  <RiSpeedUpLine className="h-5.5 w-5.5 rotate-45 text-foreground md:h-10 md:w-10 dark:text-white" />
                </div>
                <div className="italic leading-none">
                  <span className="font-extrabold text-foreground text-lg tracking-tight md:text-xl lg:text-2xl dark:text-white">
                    DRIV
                  </span>
                  <span className="font-extrabold text-lg text-red-600 md:text-xl lg:text-2xl">
                    EZ
                  </span>
                  <span className="mt-0.5 hidden font-semibold text-muted text-xs uppercase tracking-[0.2em] sm:block md:text-xs">
                    Premium Motors
                  </span>
                </div>
              </Link>
            </div>

            <div className="hidden items-center gap-4 xl:gap-8 min-[1100px]:flex">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.items ? (
                    <NavDropdown link={link} />
                  ) : (
                    <NavLink href={link.href} label={link.label} />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-foreground sm:gap-4 lg:gap-2">
              <NavbarSearch />
              <NavbarAuth />

              <Button
                className="flex items-center gap-2"
                type="button"
                variant="primary"
              >
                <HiCalendarDateRange className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="hidden xl:inline-block">
                  Book a Test Drive
                </span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen ? (
        <div className="fixed inset-0 z-100 bg-surface/95 backdrop-blur-md min-[1100px]:hidden">
          <div className="mx-auto flex h-full w-full max-w-384 flex-col px-4 py-6 sm:px-6">
            <div className="flex items-center justify-between border-border border-b pb-4 dark:border-white/10">
              <span className="font-extrabold text-foreground text-xl tracking-tight dark:text-white">
                DRIV<span className="text-red-600">EZ</span>
              </span>
              <button
                aria-label="Close mobile menu"
                className="flex min-h-11 min-w-11 items-center justify-center text-foreground hover:text-primary dark:text-white"
                onClick={handleCloseMobileMenu}
                type="button"
              >
                <HiOutlineXMark size={32} />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-start space-y-8 overflow-y-auto py-8">
              {navLinks.map((link) => (
                <MobileNavItem
                  key={link.href}
                  link={link}
                  onClose={handleCloseMobileMenu}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
