// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

"use client";

import { Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { useCallback, useState } from "react";
import {
  HiCalendarDateRange,
  HiMiniMagnifyingGlass,
  HiMiniPhone,
  HiMiniUser,
  HiOutlineBars3,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineXMark,
} from "react-icons/hi2";
import { RiSpeedUpLine } from "react-icons/ri";
import { Button } from "./button";
import { NavLink } from "./nav-link";
import { Typography } from "./typography";

// ─────────────────────────────────────────────
// SECTION: Helpers
// ─────────────────────────────────────────────

const topNavs = [
  { icon: <HiOutlineTruck size={20} />, label: "Free Shipping & Delivery" },
  {
    icon: <HiOutlineSparkles size={20} />,
    label: "Exclusive Offers On Premium Cars",
  },
  {
    icon: <HiMiniPhone size={20} />,
    label: "24/7 Customer Support: +254 700 000 000",
  },
];

interface NavLinkItem {
  href: string;
  items?: { href: string; label: string }[];
  label: string;
}

const navLinks: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Browse Cars" },
  {
    href: "/services",
    items: [
      { href: "/services/car-sales", label: "Car Sales" },
      { href: "/services/car-finance", label: "Car Finance" },
      { href: "/services/trade-in", label: "Trade-In" },
      { href: "/services/insurance", label: "Insurance" },
      { href: "/services/extended-warranty", label: "Extended Warranty" },
      { href: "/services/test-drive", label: "Test Drive" },
    ],
    label: "Services",
  },
  { href: "/financing", label: "Financing" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

function TopNav({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-red-400/80">
      {icon}
      <Typography type="body">{label}</Typography>
    </div>
  );
}

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

function NavDropdown({ link }: { link: NavLinkItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = useCallback(() => setIsOpen(true), []);
  const handleMouseLeave = useCallback(() => setIsOpen(false), []);

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: wrapper for hover detection
    // biome-ignore lint/a11y/noNoninteractiveElementInteractions: wrapper for hover detection
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Dropdown isOpen={isOpen} onOpenChange={setIsOpen}>
        <Dropdown.Trigger>
          <div className="cursor-pointer">
            <NavLink href={link.href} label={link.label} />
          </div>
        </Dropdown.Trigger>
        <Dropdown.Popover className="dark rounded-lg border border-white/10 bg-neutral-950 p-2 shadow-2xl">
          <Dropdown.Menu
            aria-label={`${link.label} submenu`}
            className="text-gray-300"
          >
            {link.items?.map((item) => (
              <Dropdown.Item
                className="cursor-pointer rounded-md px-3 py-2 transition-colors hover:bg-red-600 hover:text-white"
                href={item.href}
                id={item.href}
                key={item.href}
                textValue={item.label}
              >
                <Label className="cursor-pointer font-medium">
                  {item.label}
                </Label>
              </Dropdown.Item>
            )) || []}
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
}

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
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {topNavs.map((nav) => (
            <TopNav icon={nav.icon} key={nav.label} label={nav.label} />
          ))}
        </div>
      </div>

      <div className="border-b border-b-gray-700/20 py-4 lg:py-5">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              aria-label="Open mobile menu"
              className="text-white hover:text-red-600 lg:hidden"
              onClick={handleOpenMobileMenu}
              type="button"
            >
              <HiOutlineBars3 size={28} />
            </button>

            <Link className="flex items-center gap-2" href="/">
              <div className="relative flex h-14 w-14 -rotate-45 items-center justify-center rounded-full border-4 border-red-600 border-t-transparent md:h-8 md:w-8">
                <RiSpeedUpLine className="h-10 w-10 rotate-45 text-white md:h-4 md:w-4" />
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

          <div className="hidden items-center gap-8 lg:flex">
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
            <button className="hover:text-red-600" type="button">
              <HiMiniMagnifyingGlass className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button className="hover:text-red-600" type="button">
              <HiMiniUser className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <Button
              className="flex items-center gap-2"
              type="button"
              variant="primary"
            >
              <HiCalendarDateRange className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:inline-block">Book a Test Drive</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen ? (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm lg:hidden">
          <div className="container mx-auto flex h-full flex-col px-4 py-6 sm:px-6">
            <div className="flex items-center justify-between border-white/10 border-b pb-4">
              <span className="font-extrabold text-white text-xl tracking-tight">
                DRIVE<span className="text-red-600">EZ</span>
              </span>
              <button
                aria-label="Close mobile menu"
                className="text-white hover:text-red-600"
                onClick={handleCloseMobileMenu}
                type="button"
              >
                <HiOutlineXMark size={32} />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center space-y-8 overflow-y-auto py-8">
              {navLinks.map((link) => (
                <div className="text-center font-bold text-2xl" key={link.href}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    onClick={handleCloseMobileMenu}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
