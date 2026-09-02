// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { Typography } from "@heroui/react";
import Link from "next/link";
import {
  HiCalendarDateRange,
  HiMiniPhone,
  HiOutlineMagnifyingGlass,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineUser,
} from "react-icons/hi2";

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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Browse Cars" },
  { href: "/services", label: "Services" },
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

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href}>
      <Typography
        className="text-gray-300 transition-colors duration-200 hover:text-red-400"
        type="body"
      >
        {label}
      </Typography>
    </Link>
  );
}

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function Navbar() {
  return (
    <nav className="w-full bg-black">
      <div className="border-b-[0.5px] border-b-gray-300/20 py-3.5">
        <div className="container mx-auto flex items-center justify-between">
          {topNavs.map((nav) => (
            <TopNav icon={nav.icon} key={nav.label} label={nav.label} />
          ))}
        </div>
      </div>

      <div className="border-b-[0.5px] border-b-gray-700/20 py-5">
        <div className="container mx-auto flex items-center justify-between">
          <div />

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href}>
                <NavLink href={link.href} label={link.label} />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-white">
            <HiOutlineMagnifyingGlass size={24} />
            <HiOutlineUser size={24} />

            <button
              className="flex items-center gap-2 rounded-sm bg-red-600 px-3 py-1.5 text-white hover:bg-red-700"
              type="button"
            >
              <HiCalendarDateRange size={24} />
              <Typography type="body">Book a Test Drive</Typography>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
