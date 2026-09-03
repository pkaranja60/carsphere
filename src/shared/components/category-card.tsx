import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

import { Typography } from "@/shared/components/typography";

export interface CategoryCardProps {
  href?: string;
  icon: React.ReactNode;
  image: string;
  subtitle: string;
  title: string;
}

export function CategoryCard({
  icon,
  image,
  subtitle,
  title,
  href = "#",
}: CategoryCardProps) {
  return (
    <div className="group relative transition">
      <Link className="absolute inset-0 z-10" href={href}>
        <span className="sr-only">View {title}</span>
      </Link>

      <div className="relative">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-950 sm:aspect-4/3">
          <Image
            alt={title}
            className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            fill
            src={image}
          />
        </div>
        <div className="absolute -bottom-3 left-3 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-neutral-900 text-white shadow md:h-8 md:w-8">
          {icon}
        </div>
      </div>

      <div className="px-1 pt-5 pb-1">
        <Typography type="h3" variant="subheading">
          {title}
        </Typography>
        <p className="font-medium text-neutral-400 text-xs md:text-sm">
          {subtitle}
        </p>
        <div className="mt-2 inline-flex items-center gap-1 font-bold text-foreground text-xs transition group-hover:text-red-600 md:text-sm">
          Explore <HiOutlineArrowRight className="h-3 w-3 md:h-4 md:w-4" />
        </div>
      </div>
    </div>
  );
}
