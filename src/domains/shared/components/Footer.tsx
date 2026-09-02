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
import { HiOutlineArrowRight, HiOutlineRocketLaunch } from "react-icons/hi2";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="mt-10 bg-black pt-12 pb-6 text-gray-400 text-xs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="relative flex h-8 w-8 -rotate-45 items-center justify-center rounded-full border-2 border-red-600 border-t-transparent">
                <HiOutlineRocketLaunch className="h-4 w-4 rotate-45 text-white" />
              </div>
              <div className="leading-none">
                <span className="font-extrabold text-base text-white tracking-tight">
                  DRIVE
                </span>
                <span className="font-extrabold text-base text-red-600">
                  EZ
                </span>
                <span className="mt-0.5 block font-semibold text-[8px] text-gray-400 uppercase tracking-[0.2em]">
                  Premium Motors
                </span>
              </div>
            </div>

            <p className="max-w-xs text-[11px] text-gray-400 leading-relaxed">
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
            <h5 className="font-bold text-white text-xs tracking-wider">
              Quick Links
            </h5>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link className="transition hover:text-white" href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="#">
                  Inventory
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="#">
                  Brands
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="#">
                  Services
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="#">
                  Finance
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="#">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-white text-xs tracking-wider">
              Our Services
            </h5>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link className="transition hover:text-white" href="#">
                  Car Sales
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="#">
                  Car Finance
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="#">
                  Trade-In
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="#">
                  Insurance
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="#">
                  Extended Warranty
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="#">
                  Test Drive
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-white text-xs tracking-wider">
              Company
            </h5>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link className="transition hover:text-white" href="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="#">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="#">
                  FAQs
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="#">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-white text-xs tracking-wider">
              Newsletter
            </h5>
            <p className="text-[11px] text-gray-400">
              Subscribe to get the latest updates and exclusive offers.
            </p>

            <form className="flex items-center">
              <input
                className="w-full rounded-l-md border border-neutral-800 bg-[#141518] px-3 py-2.5 text-[11px] text-white placeholder-gray-500 focus:border-red-600 focus:outline-none"
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
              <span className="rounded bg-white px-2 py-1 font-black text-[9px] text-blue-800 italic">
                VISA
              </span>
              <span className="rounded bg-white px-2 py-1 font-black text-[9px] text-orange-600">
                MC
              </span>
              <span className="rounded bg-white px-2 py-1 font-bold text-[9px] text-blue-600">
                PayPal
              </span>
              <span className="flex items-center gap-0.5 rounded bg-white px-2 py-1 font-bold text-[9px] text-neutral-900">
                <FaApple className="h-2.5 w-2.5" />
                Pay
              </span>
            </div>
          </div>
        </div>

        <div className="border-neutral-900 border-t pt-6 text-center">
          <p className="text-[10px] text-gray-500">
            &copy; 2024 Drivez Premium Motors. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
