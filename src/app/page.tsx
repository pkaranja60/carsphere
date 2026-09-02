import { Typography } from "@heroui/react";
import Image from "next/image";
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
          <Image
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
        <div className="container mx-auto bg-white">
          {/* Browse By Category */}
          <div>
            <section>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-bold text-neutral-900 text-xl tracking-tight sm:text-2xl">
                  Browse By Category
                </h2>
                <a
                  className="inline-flex items-center gap-1.5 font-semibold text-neutral-800 text-xs transition hover:text-red-600 sm:text-sm"
                  href="#"
                >
                  <span>View All Categories</span>
                  <i className="h-4 w-4" data-lucide="arrow-right" />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                <div className="rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm transition hover:shadow-md">
                  <div className="relative h-28 w-full overflow-hidden rounded-lg bg-neutral-950 sm:h-32">
                    <Image
                      alt="SUVs"
                      className="h-full w-full object-cover object-center"
                      fill
                      src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                  <div className="relative px-1 pt-4 pb-1">
                    <div className="absolute -top-4 left-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-white shadow">
                      <i className="h-3.5 w-3.5" data-lucide="car" />
                    </div>
                    <h3 className="font-bold text-neutral-900 text-sm">SUVs</h3>
                    <p className="font-medium text-[11px] text-neutral-400">
                      Spacious & Powerful
                    </p>
                    <a
                      className="mt-2 inline-flex items-center gap-1 font-bold text-[11px] text-neutral-900 transition hover:text-red-600"
                      href="#"
                    >
                      Explore{" "}
                      <i className="h-3 w-3" data-lucide="arrow-right" />
                    </a>
                  </div>
                </div>

                <div className="rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm transition hover:shadow-md">
                  <div className="relative h-28 w-full overflow-hidden rounded-lg bg-neutral-950 sm:h-32">
                    <Image
                      alt="Sedans"
                      className="h-full w-full object-cover object-center"
                      fill
                      src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                  <div className="relative px-1 pt-4 pb-1">
                    <div className="absolute -top-4 left-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-white shadow">
                      <i className="h-3.5 w-3.5" data-lucide="armchair" />
                    </div>
                    <h3 className="font-bold text-neutral-900 text-sm">
                      Sedans
                    </h3>
                    <p className="font-medium text-[11px] text-neutral-400">
                      Comfort & Style
                    </p>
                    <a
                      className="mt-2 inline-flex items-center gap-1 font-bold text-[11px] text-neutral-900 transition hover:text-red-600"
                      href="#"
                    >
                      Explore{" "}
                      <i className="h-3 w-3" data-lucide="arrow-right" />
                    </a>
                  </div>
                </div>

                <div className="rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm transition hover:shadow-md">
                  <div className="relative h-28 w-full overflow-hidden rounded-lg bg-neutral-950 sm:h-32">
                    <Image
                      alt="Sports Cars"
                      className="h-full w-full object-cover object-center"
                      fill
                      src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                  <div className="relative px-1 pt-4 pb-1">
                    <div className="absolute -top-4 left-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-white shadow">
                      <i className="h-3.5 w-3.5" data-lucide="gauge" />
                    </div>
                    <h3 className="font-bold text-neutral-900 text-sm">
                      Sports Cars
                    </h3>
                    <p className="font-medium text-[11px] text-neutral-400">
                      High Performance
                    </p>
                    <a
                      className="mt-2 inline-flex items-center gap-1 font-bold text-[11px] text-neutral-900 transition hover:text-red-600"
                      href="#"
                    >
                      Explore{" "}
                      <i className="h-3 w-3" data-lucide="arrow-right" />
                    </a>
                  </div>
                </div>

                <div className="rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm transition hover:shadow-md">
                  <div className="relative h-28 w-full overflow-hidden rounded-lg bg-neutral-950 sm:h-32">
                    <Image
                      alt="Hatchbacks"
                      className="h-full w-full object-cover object-center"
                      fill
                      src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                  <div className="relative px-1 pt-4 pb-1">
                    <div className="absolute -top-4 left-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-white shadow">
                      <i className="h-3.5 w-3.5" data-lucide="zap" />
                    </div>
                    <h3 className="font-bold text-neutral-900 text-sm">
                      Hatchbacks
                    </h3>
                    <p className="font-medium text-[11px] text-neutral-400">
                      Smart & Efficient
                    </p>
                    <a
                      className="mt-2 inline-flex items-center gap-1 font-bold text-[11px] text-neutral-900 transition hover:text-red-600"
                      href="#"
                    >
                      Explore{" "}
                      <i className="h-3 w-3" data-lucide="arrow-right" />
                    </a>
                  </div>
                </div>

                <div className="col-span-2 rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm transition hover:shadow-md sm:col-span-1">
                  <div className="relative h-28 w-full overflow-hidden rounded-lg bg-neutral-950 sm:h-32">
                    <Image
                      alt="Luxury Cars"
                      className="h-full w-full object-cover object-center"
                      fill
                      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
                    />
                  </div>
                  <div className="relative px-1 pt-4 pb-1">
                    <div className="absolute -top-4 left-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-white shadow">
                      <i className="h-3.5 w-3.5" data-lucide="gem" />
                    </div>
                    <h3 className="font-bold text-neutral-900 text-sm">
                      Luxury Cars
                    </h3>
                    <p className="font-medium text-[11px] text-neutral-400">
                      Ultimate Luxury
                    </p>
                    <a
                      className="mt-2 inline-flex items-center gap-1 font-bold text-[11px] text-neutral-900 transition hover:text-red-600"
                      href="#"
                    >
                      Explore{" "}
                      <i className="h-3 w-3" data-lucide="arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Features */}
          <div>
            <section>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-bold text-neutral-900 text-xl tracking-tight sm:text-2xl">
                  Featured Cars
                </h2>
                <a
                  className="inline-flex items-center gap-1.5 font-semibold text-neutral-800 text-xs transition hover:text-red-600 sm:text-sm"
                  href="#"
                >
                  <span>View All Cars</span>
                  <i className="h-4 w-4" data-lucide="arrow-right" />
                </a>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <div className="flex flex-col justify-between rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm">
                  <div>
                    <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-neutral-950">
                      <Image
                        alt="BMW M4 Competition"
                        className="h-full w-full object-cover object-center"
                        fill
                        src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80"
                      />
                      <button className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:text-red-500">
                        <i className="h-3.5 w-3.5" data-lucide="heart" />
                      </button>
                    </div>
                    <h3 className="font-bold text-neutral-900 text-xs leading-tight sm:text-sm">
                      BMW M4 Competition
                    </h3>
                    <p className="mt-0.5 text-[11px] text-neutral-400">
                      2024 | Automatic | Petrol
                    </p>
                    <div className="mt-2 font-extrabold text-base text-neutral-950">
                      $89,900
                    </div>
                  </div>
                  <button className="mt-3 w-full rounded-md bg-red-600 py-2 font-semibold text-white text-xs shadow-sm transition hover:bg-red-700">
                    View Details
                  </button>
                </div>

                <div className="flex flex-col justify-between rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm">
                  <div>
                    <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-neutral-950">
                      <Image
                        alt="Mercedes-Benz E-className"
                        className="h-full w-full object-cover object-center"
                        fill
                        src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80"
                      />
                      <button className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:text-red-500">
                        <i className="h-3.5 w-3.5" data-lucide="heart" />
                      </button>
                    </div>
                    <h3 className="font-bold text-neutral-900 text-xs leading-tight sm:text-sm">
                      Mercedes-Benz E-className
                    </h3>
                    <p className="mt-0.5 text-[11px] text-neutral-400">
                      2024 | Automatic | Petrol
                    </p>
                    <div className="mt-2 font-extrabold text-base text-neutral-950">
                      $64,500
                    </div>
                  </div>
                  <button className="mt-3 w-full rounded-md bg-red-600 py-2 font-semibold text-white text-xs shadow-sm transition hover:bg-red-700">
                    View Details
                  </button>
                </div>

                <div className="flex flex-col justify-between rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm">
                  <div>
                    <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-neutral-950">
                      <Image
                        alt="Audi RS5 Sportback"
                        className="h-full w-full object-cover object-center"
                        fill
                        src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80"
                      />
                      <button className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:text-red-500">
                        <i className="h-3.5 w-3.5" data-lucide="heart" />
                      </button>
                    </div>
                    <h3 className="font-bold text-neutral-900 text-xs leading-tight sm:text-sm">
                      Audi RS5 Sportback
                    </h3>
                    <p className="mt-0.5 text-[11px] text-neutral-400">
                      2024 | Automatic | Petrol
                    </p>
                    <div className="mt-2 font-extrabold text-base text-neutral-950">
                      $76,800
                    </div>
                  </div>
                  <button className="mt-3 w-full rounded-md bg-red-600 py-2 font-semibold text-white text-xs shadow-sm transition hover:bg-red-700">
                    View Details
                  </button>
                </div>

                <div className="flex flex-col justify-between rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm">
                  <div>
                    <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-neutral-950">
                      <Image
                        alt="Porsche 911 Carrera"
                        className="h-full w-full object-cover object-center"
                        fill
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
                      />
                      <button className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:text-red-500">
                        <i className="h-3.5 w-3.5" data-lucide="heart" />
                      </button>
                    </div>
                    <h3 className="font-bold text-neutral-900 text-xs leading-tight sm:text-sm">
                      Porsche 911 Carrera
                    </h3>
                    <p className="mt-0.5 text-[11px] text-neutral-400">
                      2024 | Automatic | Petrol
                    </p>
                    <div className="mt-2 font-extrabold text-base text-neutral-950">
                      $122,900
                    </div>
                  </div>
                  <button className="mt-3 w-full rounded-md bg-red-600 py-2 font-semibold text-white text-xs shadow-sm transition hover:bg-red-700">
                    View Details
                  </button>
                </div>

                <div className="flex flex-col justify-between rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm">
                  <div>
                    <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-neutral-950">
                      <Image
                        alt="Range Rover Velar"
                        className="h-full w-full object-cover object-center"
                        fill
                        src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80"
                      />
                      <button className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:text-red-500">
                        <i className="h-3.5 w-3.5" data-lucide="heart" />
                      </button>
                    </div>
                    <h3 className="font-bold text-neutral-900 text-xs leading-tight sm:text-sm">
                      Range Rover Velar
                    </h3>
                    <p className="mt-0.5 text-[11px] text-neutral-400">
                      2024 | Automatic | Diesel
                    </p>
                    <div className="mt-2 font-extrabold text-base text-neutral-950">
                      $71,300
                    </div>
                  </div>
                  <button className="mt-3 w-full rounded-md bg-red-600 py-2 font-semibold text-white text-xs shadow-sm transition hover:bg-red-700">
                    View Details
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Offers */}
          <div>
            <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="relative flex min-h-42.5 flex-col justify-between overflow-hidden rounded-2xl bg-black p-6">
                <div className="absolute inset-0 z-0">
                  <Image
                    alt="Promo Car"
                    className="h-full w-full object-cover object-right opacity-60"
                    fill
                    src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />
                </div>
                <div className="relative z-10">
                  <p className="font-semibold text-[11px] text-neutral-400 uppercase tracking-wider">
                    Limited Time Offer
                  </p>
                  <h4 className="mt-0.5 font-extrabold text-white text-xl">
                    Up to 20% Off
                  </h4>
                  <p className="mt-0.5 text-neutral-300 text-xs">
                    On Selected Cars
                  </p>
                </div>
                <div className="relative z-10 pt-4">
                  <a
                    className="inline-block rounded-lg bg-red-600 px-4 py-2 font-semibold text-white text-xs shadow transition hover:bg-red-700"
                    href="#"
                  >
                    Explore Offers
                  </a>
                </div>
              </div>

              <div className="relative flex min-h-42.5 flex-col justify-between overflow-hidden rounded-2xl bg-[#ce2029] p-6">
                <div className="absolute top-0 right-0 bottom-0 z-0 w-3/5">
                  <Image
                    alt="Finance Car"
                    className="h-full w-full object-cover object-left"
                    fill
                    src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-[#ce2029] via-[#ce2029]/70 to-transparent" />
                </div>
                <div className="relative z-10">
                  <p className="font-semibold text-[11px] text-red-100 uppercase tracking-wider">
                    Easy Finance
                  </p>
                  <h4 className="mt-0.5 font-extrabold text-white text-xl">
                    Get Your Dream Car
                  </h4>
                  <p className="mt-0.5 text-red-100 text-xs">
                    With Low Monthly Plans
                  </p>
                </div>
                <div className="relative z-10 pt-4">
                  <a
                    className="inline-block rounded-lg bg-white px-4 py-2 font-semibold text-neutral-900 text-xs shadow transition hover:bg-neutral-100"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="relative flex min-h-42.5 flex-col justify-between overflow-hidden rounded-2xl bg-neutral-950 p-6">
                <div className="absolute top-0 right-0 bottom-0 z-0 w-1/2">
                  <Image
                    alt="Steering Wheel"
                    className="h-full w-full object-cover object-center opacity-70"
                    fill
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-extrabold text-lg text-white">
                    Book a Test Drive
                  </h4>
                  <p className="mt-1 text-neutral-300 text-xs leading-snug">
                    Experience Before
                    <br />
                    You Buy
                  </p>
                </div>
                <div className="relative z-10 pt-4">
                  <a
                    className="inline-block rounded-lg bg-white px-4 py-2 font-semibold text-neutral-900 text-xs shadow transition hover:bg-neutral-100"
                    href="#"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Brands */}
          <section>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-bold text-neutral-900 text-xl tracking-tight sm:text-2xl">
                Our Top Brands
              </h2>
              <a
                className="inline-flex items-center gap-1.5 font-semibold text-neutral-800 text-xs transition hover:text-red-600 sm:text-sm"
                href="#"
              >
                <span>View All Brands</span>
                <i className="h-4 w-4" data-lucide="arrow-right" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-8">
              <a
                className="group flex h-24 items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-3 transition hover:border-neutral-300 hover:shadow-md"
                href="#"
              >
                <Image
                  alt="BMW"
                  className="h-10 w-auto object-contain transition group-hover:scale-105"
                  height={120}
                  src="https://cdn.simpleicons.org/bmw/000000"
                  width={120}
                />
              </a>

              <a
                className="group flex h-24 flex-col items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-2 transition hover:border-neutral-300 hover:shadow-md"
                href="#"
              >
                <Image
                  alt="Mercedes-Benz"
                  className="h-8 w-auto object-contain transition group-hover:scale-105"
                  height={120}
                  src="https://cdn.simpleicons.org/mercedes/000000"
                  width={120}
                />
                <span className="mt-1.5 text-center font-semibold text-[10px] text-neutral-800 tracking-tight">
                  Mercedes-Benz
                </span>
              </a>

              <a
                className="group flex h-24 flex-col items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-2 transition hover:border-neutral-300 hover:shadow-md"
                href="#"
              >
                <Image
                  alt="Audi"
                  className="h-6 w-auto object-contain transition group-hover:scale-105"
                  height={120}
                  src="https://cdn.simpleicons.org/audi/000000"
                  width={120}
                />
                <span className="mt-1.5 font-bold text-red-600 text-xs uppercase tracking-wider">
                  Audi
                </span>
              </a>

              <a
                className="group flex h-24 flex-col items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-2 transition hover:border-neutral-300 hover:shadow-md"
                href="#"
              >
                <Image
                  alt="Porsche"
                  className="h-7 w-auto object-contain transition group-hover:scale-105"
                  height={120}
                  src="https://cdn.simpleicons.org/porsche/D5001C"
                  width={120}
                />
                <span className="mt-1 font-extrabold text-[9px] text-neutral-800 uppercase tracking-[0.2em]">
                  PORSCHE
                </span>
              </a>

              <a
                className="group flex h-24 items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-3 transition hover:border-neutral-300 hover:shadow-md"
                href="#"
              >
                <span className="rounded-full bg-[#005a2b] px-2.5 py-1.5 text-center font-black text-[9px] text-white uppercase leading-none tracking-wider">
                  LAND-
                  <br />
                  ROVER
                </span>
              </a>

              <a
                className="group flex h-24 flex-col items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-2 transition hover:border-neutral-300 hover:shadow-md"
                href="#"
              >
                <Image
                  alt="Toyota"
                  className="h-7 w-auto object-contain transition group-hover:scale-105"
                  height={120}
                  src="https://cdn.simpleicons.org/toyota/EB0A1E"
                  width={120}
                />
                <span className="mt-1 font-bold text-[10px] text-red-600 uppercase tracking-wider">
                  TOYOTA
                </span>
              </a>

              <a
                className="group flex h-24 flex-col items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-2 transition hover:border-neutral-300 hover:shadow-md"
                href="#"
              >
                <Image
                  alt="Honda"
                  className="h-7 w-auto object-contain transition group-hover:scale-105"
                  height={120}
                  src="https://cdn.simpleicons.org/honda/CC0000"
                  width={120}
                />
                <span className="mt-1 font-extrabold text-[10px] text-red-600 uppercase tracking-wider">
                  HONDA
                </span>
              </a>

              <a
                className="group flex h-24 flex-col items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-2 transition hover:border-neutral-300 hover:shadow-md"
                href="#"
              >
                <Image
                  alt="Tesla"
                  className="h-6 w-auto object-contain transition group-hover:scale-105"
                  height={120}
                  src="https://cdn.simpleicons.org/tesla/E82127"
                  width={120}
                />
                <span className="mt-1.5 font-bold text-[9px] text-red-600 uppercase tracking-[0.25em]">
                  TESLA
                </span>
              </a>
            </div>
          </section>

          {/* CTA */}
          <div className="rounded-2xl border border-neutral-800 bg-[#0b0c0e] p-6 text-white shadow-xl">
            <div className="grid grid-cols-1 gap-6 divide-y divide-neutral-800 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              <div className="flex items-center space-x-3.5 pt-4 first:px-0 first:pt-0 sm:px-4 sm:pt-0">
                <div className="shrink-0 text-gray-300">
                  <i className="h-7 w-7 stroke-[1.5]" data-lucide="truck" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs">
                    Free Delivery
                  </h4>
                  <p className="font-normal text-[11px] text-gray-400">
                    On All Orders
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 pt-4 sm:px-4 sm:pt-0">
                <div className="shrink-0 text-gray-300">
                  <i
                    className="h-7 w-7 stroke-[1.5]"
                    data-lucide="rotate-ccw"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs">
                    7-Day Returns
                  </h4>
                  <p className="font-normal text-[11px] text-gray-400">
                    Money Back Guarnatee
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 pt-4 sm:px-4 sm:pt-0">
                <div className="shrink-0 text-gray-300">
                  <i
                    className="h-7 w-7 stroke-[1.5]"
                    data-lucide="shield-check"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs">
                    Secure Payment
                  </h4>
                  <p className="font-normal text-[11px] text-gray-400">
                    100% Protected
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 pt-4 sm:px-4 sm:pt-0">
                <div className="shrink-0 text-gray-300">
                  <i className="h-7 w-7 stroke-[1.5]" data-lucide="users" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs">
                    Expert Support
                  </h4>
                  <p className="font-normal text-[11px] text-gray-400">
                    24/7 Friendly Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-10 border-neutral-900 border-t bg-black pt-12 pb-6 text-gray-400 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-2 lg:grid-cols-6">
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center gap-2">
                <div className="relative flex h-8 w-8 -rotate-45 items-center justify-center rounded-full border-2 border-red-600 border-t-transparent">
                  <i className="h-4 w-4 text-white" data-lucide="gauge" />
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
                <a
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-red-600"
                  href="#"
                >
                  <i className="h-3.5 w-3.5" data-lucide="facebook" />
                </a>
                <a
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-red-600"
                  href="#"
                >
                  <i className="h-3.5 w-3.5" data-lucide="instagram" />
                </a>
                <a
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-red-600"
                  href="#"
                >
                  <i className="h-3.5 w-3.5" data-lucide="twitter" />
                </a>
                <a
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-red-600"
                  href="#"
                >
                  <i className="h-3.5 w-3.5" data-lucide="youtube" />
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-bold text-white text-xs tracking-wider">
                Quick Links
              </h5>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a className="transition hover:text-white" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#">
                    Inventory
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#">
                    Brands
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#">
                    Finance
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="font-bold text-white text-xs tracking-wider">
                Our Services
              </h5>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a className="transition hover:text-white" href="#">
                    Car Sales
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#">
                    Car Finance
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#">
                    Trade-In
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#">
                    Insurance
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#">
                    Extended Warranty
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#">
                    Test Drive
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="font-bold text-white text-xs tracking-wider">
                Company
              </h5>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a className="transition hover:text-white" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#">
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#">
                    Terms & Conditions
                  </a>
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
                  <i className="h-4 w-4" data-lucide="arrow-right" />
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
                  <i className="h-2.5 w-2.5" data-lucide="apple" />
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
    </div>
  );
}
