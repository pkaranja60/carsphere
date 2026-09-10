import { FaBoltLightning, FaCar, FaCouch, FaGaugeHigh } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";

export interface Category {
  colSpan?: boolean;
  icon: React.ReactNode;
  image: string;
  subtitle: string;
  title: string;
}

export const MOCK_CATEGORIES: Category[] = [
  {
    colSpan: false,
    icon: <FaCar className="h-3.5 w-3.5" />,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80",
    subtitle: "Spacious & Powerful",
    title: "SUV",
  },
  {
    colSpan: false,
    icon: <FaCouch className="h-3.5 w-3.5" />,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80",
    subtitle: "Comfort & Style",
    title: "Sedan",
  },
  {
    colSpan: false,
    icon: <FaGaugeHigh className="h-3.5 w-3.5" />,
    image:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
    subtitle: "High Performance",
    title: "Sports",
  },
  {
    colSpan: false,
    icon: <FaBoltLightning className="h-3.5 w-3.5" />,
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80",
    subtitle: "Smart & Efficient",
    title: "Electric",
  },
  {
    colSpan: true,
    icon: <HiOutlineSparkles className="h-3.5 w-3.5" />,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
    subtitle: "Ultimate Luxury",
    title: "Luxury",
  },
];
