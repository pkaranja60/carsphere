// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import {
  FaApple,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { RiSpeedUpLine } from "react-icons/ri";
import { NavLink } from "./nav-link";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="bg-black pt-12 pb-6 text-gray-400 text-sm md:text-base">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="relative flex h-14 w-14 -rotate-45 items-center justify-center rounded-full border-4 border-red-600 border-t-transparent">
                <RiSpeedUpLine className="h-10 w-10 rotate-45 text-white" />
              </div>
              <div className="italic leading-none">
                <span className="font-extrabold text-white text-xl tracking-tight md:text-2xl">
                  DRIV
                </span>
                <span className="font-extrabold text-red-600 text-xl md:text-2xl">
                  EZ
                </span>
                <span className="mt-0.5 block font-semibold text-gray-400 text-xs uppercase tracking-widest md:text-xs">
                  Premium Motors
                </span>
              </div>
            </div>

            <p className="max-w-xs text-gray-400 text-sm leading-relaxed md:text-base">
              Your trusted partner in finding the perfect car. Quality, trust
              and customer satisfaction drive everything we do.
            </p>

            <div className="flex items-center space-x-2 pt-1">
              <Link
                className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-red-600"
                href="#"
              >
                <FaFacebookF className="h-3.5 w-3.5" />
              </Link>
              <Link
                className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-red-600"
                href="#"
              >
                <FaInstagram className="h-3.5 w-3.5" />
              </Link>
              <Link
                className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-red-600"
                href="#"
              >
                <FaXTwitter className="h-3.5 w-3.5" />
              </Link>
              <Link
                className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-red-600"
                href="#"
              >
                <FaYoutube className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-base text-white tracking-wider md:text-lg">
              Quick Links
            </h5>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Home"
                  variant="default"
                />
              </li>
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Inventory"
                  variant="default"
                />
              </li>
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Brands"
                  variant="default"
                />
              </li>
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Services"
                  variant="default"
                />
              </li>
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Finance"
                  variant="default"
                />
              </li>
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Contact Us"
                  variant="default"
                />
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-base text-white tracking-wider md:text-lg">
              Our Services
            </h5>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Car Sales"
                  variant="default"
                />
              </li>
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Car Finance"
                  variant="default"
                />
              </li>
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Trade-In"
                  variant="default"
                />
              </li>
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Insurance"
                  variant="default"
                />
              </li>
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Extended Warranty"
                  variant="default"
                />
              </li>
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Test Drive"
                  variant="default"
                />
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-base text-white tracking-wider md:text-lg">
              Company
            </h5>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="About Us"
                  variant="default"
                />
              </li>
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Careers"
                  variant="default"
                />
              </li>
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Blog"
                  variant="default"
                />
              </li>
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="FAQs"
                  variant="default"
                />
              </li>
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Privacy Policy"
                  variant="default"
                />
              </li>
              <li>
                <NavLink
                  className="transition hover:text-white"
                  href="#"
                  label="Terms & Conditions"
                  variant="default"
                />
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-base text-white tracking-wider md:text-lg">
              Newsletter
            </h5>
            <p className="text-gray-400 text-sm md:text-base">
              Subscribe to get the latest updates and exclusive offers.
            </p>

            <form className="mt-4 flex">
              <input
                className="w-full rounded-l-md border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:border-red-600 focus:outline-none md:text-base"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="flex items-center justify-center rounded-r-md bg-red-600 px-3 py-2.5 text-white transition hover:bg-red-700"
                type="submit"
              >
                <HiOutlineArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="flex items-center gap-1.5 pt-2">
              <span className="rounded bg-white px-2 py-1 font-black text-blue-800 text-xs italic md:text-xs">
                VISA
              </span>
              <span className="rounded bg-white px-2 py-1 font-black text-orange-600 text-xs md:text-xs">
                MC
              </span>
              <span className="rounded bg-white px-2 py-1 font-bold text-blue-600 text-xs md:text-xs">
                PayPal
              </span>
              <span className="flex items-center gap-0.5 rounded bg-white px-2 py-1 font-bold text-neutral-900 text-xs md:text-xs">
                <FaApple className="h-2.5 w-2.5" />
                Pay
              </span>
            </div>
          </div>
        </div>

        <div className="border-neutral-900 border-t pt-6 text-center">
          <p className="text-gray-500 text-xs md:text-sm">
            &copy; 2024 Drivez Premium Motors. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
