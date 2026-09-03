"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import {
  HiCalendarDateRange,
  HiMiniMagnifyingGlass,
  HiMiniUser,
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";
import { RiSpeedUpLine } from "react-icons/ri";
import { Button } from "../button";
import { NavLink } from "../nav-link";
import { MobileNavItem } from "./mobile-nav-item";
import { navLinks, topNavs } from "./nav-data";
import { NavDropdown } from "./nav-dropdown";
import { TopNav } from "./top-nav";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = useCallback(() => setIsMobileMenuOpen(true), []);
  const handleCloseMobileMenu = useCallback(
    () => setIsMobileMenuOpen(false),
    []
  );

  return (
    <nav className="relative w-full bg-black">
      {/* Top bar - hidden on mobile */}
      <div className="hidden border-b border-b-gray-300/20 py-3.5 md:block">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 sm:px-6 lg:justify-between lg:px-8">
          {topNavs.map((nav) => (
            <TopNav icon={nav.icon} key={nav.label} label={nav.label} />
          ))}
        </div>
      </div>

      <div className="border-b border-b-gray-700/20 py-4 lg:py-5">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              aria-label="Open mobile menu"
              className="flex min-h-11 min-w-11 items-center justify-center text-white hover:text-red-600 min-[1100px]:hidden"
              onClick={handleOpenMobileMenu}
              type="button"
            >
              <HiOutlineBars3 size={28} />
            </button>

            <Link className="flex items-center gap-2" href="/">
              <div className="relative flex h-7.5 w-7.5 -rotate-45 items-center justify-center rounded-full border-4 border-red-600 border-t-transparent md:h-14 md:w-14">
                <RiSpeedUpLine className="h-5.5 w-5.5 rotate-45 text-white md:h-10 md:w-10" />
              </div>
              <div className="italic leading-none">
                <span className="font-extrabold text-lg text-white tracking-tight md:text-xl lg:text-2xl">
                  DRIV
                </span>
                <span className="font-extrabold text-lg text-red-600 md:text-xl lg:text-2xl">
                  EZ
                </span>
                <span className="mt-0.5 hidden font-semibold text-gray-400 text-xs uppercase tracking-[0.2em] sm:block md:text-xs">
                  Premium Motors
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-8 min-[1100px]:flex">
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

          <div className="flex items-center gap-3 text-white sm:gap-4 lg:gap-2">
            <button
              className="flex min-h-11 min-w-11 items-center justify-center hover:text-red-600"
              type="button"
            >
              <HiMiniMagnifyingGlass className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              className="flex min-h-11 min-w-11 items-center justify-center hover:text-red-600"
              type="button"
            >
              <HiMiniUser className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <Button
              className="flex items-center gap-2"
              type="button"
              variant="primary"
            >
              <HiCalendarDateRange className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden min-[1100px]:inline-block">
                Book a Test Drive
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen ? (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm min-[1100px]:hidden">
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-4 py-6 sm:px-6">
            <div className="flex items-center justify-between border-white/10 border-b pb-4">
              <span className="font-extrabold text-white text-xl tracking-tight">
                DRIVE<span className="text-red-600">EZ</span>
              </span>
              <button
                aria-label="Close mobile menu"
                className="flex min-h-11 min-w-11 items-center justify-center text-white hover:text-red-600"
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
    </nav>
  );
}
