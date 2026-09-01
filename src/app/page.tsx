import { Typography } from "@heroui/react";
import Link from "next/link";
import { BiSolidOffer } from "react-icons/bi";
import { FaTruckFast } from "react-icons/fa6";
import {
  HiArrowLongRight,
  HiCalendarDateRange,
  HiMiniChevronDown,
  HiMiniPhone,
  HiOutlineMagnifyingGlass,
  HiOutlineUser,
} from "react-icons/hi2";

const topNavs = [
  { icon: <FaTruckFast size={20} />, label: "Free Shipping & Delivery" },
  {
    icon: <BiSolidOffer size={20} />,
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

const footerLinks = {
  // Company
  company: [
    {
      href: "#",
      label: "Services",
    },
    {
      href: "#",
      label: "Financing",
    },
  ],

  // Our Services
  ourServices: [
    {
      href: "#",
      label: "Services",
    },
    {
      href: "#",
      label: "Financing",
    },
  ],
  // Quick Links
  quicklinks: [
    {
      href: "#",
      label: "About Us",
    },
    {
      href: "#",
      label: "Contact Us",
    },
    {
      href: "#",
      label: "Services",
    },
    {
      href: "#",
      label: "Financing",
    },
    {
      href: "#",
      label: "About Us",
    },
    {
      href: "#",
      label: "Contact Us",
    },
  ],
};

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

export default function Home() {
  return (
    <div>
      {/* Navigation */}
      <nav className="w-full bg-black">
        {/* Top Navigation */}
        <div className="border-b-[0.5px] border-b-gray-300/20 py-3.5">
          <div className="container mx-auto flex items-center justify-between">
            {topNavs.map((nav) => (
              <TopNav icon={nav.icon} key={nav.label} label={nav.label} />
            ))}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="border-b-[0.5px] border-b-gray-700/20 py-5">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <div />

            {/* Navigation */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <NavLink href={link.href} label={link.label} />
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <HiOutlineMagnifyingGlass size={24} />
              <HiOutlineUser size={24} />

              <button
                className="flex items-center gap-2 rounded-sm bg-red-600 px-3 py-1.5 hover:bg-red-700"
                type="button"
              >
                <HiCalendarDateRange size={24} />
                <Typography type="body">Book a Test Drive</Typography>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero */}

      <section className="relative flex min-h-[50vh] w-full flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0b0c10]/40 via-transparent to-[#0b0c10]">
        {/*Background Image with Overlay*/}
        <div className="absolute inset-0 -z-10">
          {/* Replace the image URL with your actual car image */}
          <img
            alt="Luxury Sports Car"
            className="h-full w-full object-cover object-center"
            height={500}
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80"
            width={500}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-black/50" />
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto flex w-full flex-1 flex-col justify-center pt-10 pb-10">
          <div className="max-w-2xl space-y-7">
            {/* Subheading Tag */}
            <div className="flex items-center space-x-3">
              <span className="inline-block h-[2.5px] w-6 bg-red-600" />
              <span className="font-bold text-gray-300 text-xs uppercase tracking-[0.25em]">
                Drive Your Dream
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-racing text-4xl text-white uppercase italic leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Find The Perfect <br />
              Car For{" "}
              <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                You
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-lg font-light text-gray-300 text-sm leading-relaxed sm:text-base">
              Explore our premium collection of luxury, performance, and
              everyday cars.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 font-medium text-sm text-white shadow-lg shadow-red-600/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700"
                href="#"
              >
                <span>View Inventory</span>
                <HiArrowLongRight size={24} />
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 font-medium text-sm text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10"
                href="#"
              >
                Book a Test Drive
              </Link>
            </div>

            {/* Value Badges */}
            <div className="grid grid-cols-2 gap-6 border-white/10 border-t pt-10 sm:grid-cols-4">
              {/* Item 1 */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-2 font-semibold text-white text-xs sm:text-sm">
                  <i className="h-4 w-4 text-gray-300" data-lucide="car" />
                  <span>Certified Cars</span>
                </div>
                <p className="font-light text-[11px] text-gray-400">
                  100% Quality Check
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-2 font-semibold text-white text-xs sm:text-sm">
                  <i
                    className="h-4 w-4 text-gray-300"
                    data-lucide="shield-check"
                  />
                  <span>Best Price</span>
                </div>
                <p className="font-light text-[11px] text-gray-400">
                  Guaranteed
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-2 font-semibold text-white text-xs sm:text-sm">
                  <i className="h-4 w-4 text-gray-300" data-lucide="wallet" />
                  <span>Easy Finance</span>
                </div>
                <p className="font-light text-[11px] text-gray-400">
                  Fast Approval
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-2 font-semibold text-white text-xs sm:text-sm">
                  <i className="h-4 w-4 text-gray-300" data-lucide="headset" />
                  <span>24/7 Support</span>
                </div>
                <p className="font-light text-[11px] text-gray-400">
                  We're Here to Help
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex w-full items-center justify-center gap-2 py-4 pb-10">
          <span className="h-1.5 w-6 cursor-pointer rounded-full bg-red-600" />
          <span className="h-1.5 w-3 cursor-pointer rounded-full bg-white/30 transition hover:bg-white/60" />
          <span className="h-1.5 w-3 cursor-pointer rounded-full bg-white/30 transition hover:bg-white/60" />
        </div>

        {/* Floating Search & Filter Bar */}
        <div className="container mx-auto w-full">
          <div className="rounded-2xl border border-white/10 bg-[#121316]/90 p-5 shadow-2xl backdrop-blur-md sm:p-6">
            <h2 className="mb-4 font-bold text-base text-white sm:text-lg">
              Find Your <span className="text-red-600">Perfect Car</span>
            </h2>

            <form className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {/* Make Dropdown */}
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-white/10 bg-[#1c1d22] px-3.5 py-3 text-gray-300 text-xs transition focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 sm:text-sm">
                  <option value="">All Makes</option>
                  <option value="bmw">BMW</option>
                  <option value="audi">Audi</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="porsche">Porsche</option>
                </select>
                <HiMiniChevronDown
                  className="pointer-events-none absolute top-5.5 right-3 h-4 w-4 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>

              {/* Model Dropdown */}
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-white/10 bg-[#1c1d22] px-3.5 py-3 text-gray-300 text-xs transition focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 sm:text-sm">
                  <option value="">All Models</option>
                  <option value="m4">M4 Competition</option>
                  <option value="rs6">RS6 Avant</option>
                  <option value="amg-gt">AMG GT</option>
                </select>
                <HiMiniChevronDown
                  className="pointer-events-none absolute top-5.5 right-3 h-4 w-4 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>

              {/* Min Price */}
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-white/10 bg-[#1c1d22] px-3.5 py-3 text-gray-300 text-xs transition focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 sm:text-sm">
                  <option value="">Min Price</option>
                  <option value="20k">$20,000</option>
                  <option value="50k">$50,000</option>
                  <option value="100k">$100,000</option>
                </select>
                <HiMiniChevronDown
                  className="pointer-events-none absolute top-5.5 right-3 h-4 w-4 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>

              {/* Max Price */}
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-white/10 bg-[#1c1d22] px-3.5 py-3 text-gray-300 text-xs transition focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 sm:text-sm">
                  <option value="">Max Price</option>
                  <option value="50k">$50,000</option>
                  <option value="100k">$100,000</option>
                  <option value="200k">$200,000+</option>
                </select>
                <HiMiniChevronDown
                  className="pointer-events-none absolute top-5.5 right-3 h-4 w-4 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>

              {/* Body Type */}
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-white/10 bg-[#1c1d22] px-3.5 py-3 text-gray-300 text-xs transition focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 sm:text-sm">
                  <option value="">Body Type</option>
                  <option value="coupe">Coupe</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="convertible">Convertible</option>
                </select>
                <HiMiniChevronDown
                  className="pointer-events-none absolute top-5.5 right-3 h-4 w-4 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>

              {/* Search Button */}
              <button
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 font-medium text-sm text-white shadow-md shadow-red-600/20 transition duration-200 hover:bg-red-700"
                type="button"
              >
                <HiOutlineMagnifyingGlass size={20} />
                <span>Search Car</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <main className="bg-white">
        {/* Browse By Category */}
        <div>
          <Typography type="h3">Browse by Category </Typography>
        </div>

        {/* Features */}
        <div>
          <Typography type="h3">Featured Cars</Typography>
        </div>
        {/* Offers */}
        <div>
          <Typography type="h3">Hot Offers</Typography>
        </div>
        {/* Brands */}
        <div>
          <Typography type="h3">Our Top Brands</Typography>
        </div>
        {/* CTA */}
      </main>

      {/* Footer */}
      <footer className="w-full bg-black">
        <div />
      </footer>
    </div>
  );
}
