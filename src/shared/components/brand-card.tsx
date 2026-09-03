import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export interface BrandCardProps {
  brandName?: string;
  children?: ReactNode;
  containerClassName?: string;
  href: string;
  imageClassName?: string;
  labelClassName?: string;
  logoSrc?: string;
  showLabel?: boolean;
}

export function BrandCard({
  href,
  brandName,
  logoSrc,
  imageClassName = "h-8 w-auto object-contain transition group-hover:scale-105",
  labelClassName = "mt-1.5 text-center font-semibold text-foreground text-xs tracking-tight md:text-xs",
  containerClassName = "flex-col p-2",
  showLabel = true,
  children,
}: BrandCardProps) {
  return (
    <Link
      className={`group flex h-24 items-center justify-center rounded-xl border border-border bg-surface transition hover:border-neutral-300 hover:shadow-md ${containerClassName}`}
      href={href}
    >
      {children ? (
        children
      ) : (
        <>
          {logoSrc ? (
            <Image
              alt={brandName || "Brand Logo"}
              className={imageClassName}
              height={120}
              src={logoSrc}
              width={120}
            />
          ) : null}
          {showLabel && brandName ? (
            <span className={labelClassName}>{brandName}</span>
          ) : null}
        </>
      )}
    </Link>
  );
}
