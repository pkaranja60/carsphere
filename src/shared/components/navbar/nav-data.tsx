import {
  HiMiniPhone,
  HiOutlineSparkles,
  HiOutlineTruck,
} from "react-icons/hi2";

export interface NavLinkItem {
  href: string;
  items?: { href: string; label: string }[];
  label: string;
}

export const topNavs = [
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

export const navLinks: NavLinkItem[] = [
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
