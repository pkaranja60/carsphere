export interface FooterLinkGroupData {
  links: { href: string; label: string }[];
  title: string;
}

export const footerLinkGroups: FooterLinkGroupData[] = [
  {
    links: [
      { href: "#", label: "Home" },
      { href: "#", label: "Inventory" },
      { href: "#", label: "Brands" },
      { href: "#", label: "Services" },
      { href: "#", label: "Finance" },
      { href: "#", label: "Contact Us" },
    ],
    title: "Quick Links",
  },
  {
    links: [
      { href: "#", label: "Car Sales" },
      { href: "#", label: "Car Finance" },
      { href: "#", label: "Trade-In" },
      { href: "#", label: "Insurance" },
      { href: "#", label: "Extended Warranty" },
      { href: "#", label: "Test Drive" },
    ],
    title: "Our Services",
  },
  {
    links: [
      { href: "#", label: "About Us" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Blog" },
      { href: "#", label: "FAQs" },
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms & Conditions" },
    ],
    title: "Company",
  },
];
