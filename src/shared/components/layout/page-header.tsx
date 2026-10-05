import Link from "next/link";
import type { ReactNode } from "react";
import { MdChevronRight } from "react-icons/md";

export interface BreadcrumbItem {
  href?: string;
  isCurrent?: boolean;
  label: string;
}

export interface PageHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  children?: ReactNode; // For the pills/filters
  description: string;
  itemCount?: number;
  liveStatus?: string;
  title: string;
}

export function PageHeader({
  breadcrumbs,
  title,
  description,
  liveStatus,
  itemCount,
  children,
}: PageHeaderProps) {
  return (
    <section
      className="border-border border-b bg-surface pt-6 pb-5 sm:pt-8"
      data-purpose="header-context"
    >
      <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
        {/* Breadcrumb & Live Status */}
        <div className="mb-3 flex items-center justify-between gap-2">
          <nav
            aria-label="Breadcrumb navigation"
            className="flex min-w-0 items-center gap-1 overflow-x-auto whitespace-nowrap font-label-sm text-on-surface-variant text-xs [-ms-overflow-style:none] [scrollbar-width:none] sm:text-label-sm [&::-webkit-scrollbar]:hidden"
          >
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <div
                  className="flex shrink-0 items-center gap-1"
                  key={item.label}
                >
                  {item.href ? (
                    <Link
                      className="transition-colors hover:text-primary hover:underline"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className={
                        item.isCurrent ? "font-medium text-on-surface" : ""
                      }
                    >
                      {item.label}
                    </span>
                  )}
                  {!isLast && (
                    <MdChevronRight className="text-on-surface-variant/40 text-sm" />
                  )}
                </div>
              );
            })}
            {itemCount !== undefined && (
              <span className="ml-1 text-on-surface-variant/70">
                ({itemCount})
              </span>
            )}
          </nav>

          {liveStatus ? (
            <div className="hidden shrink-0 items-center gap-1.5 font-medium text-on-surface-variant text-xs sm:flex">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span>{liveStatus}</span>
            </div>
          ) : null}
        </div>

        {/* Main Headline */}
        <h1 className="mb-2 font-display font-medium text-2xl text-on-surface tracking-tight sm:text-3xl">
          {title}
        </h1>
        <p className="max-w-4xl font-light text-on-surface-variant text-xs leading-relaxed sm:text-sm">
          {description}
        </p>

        {/* Horizontal Curated Pills */}
        {children ? (
          <div className="mt-5 hidden flex-nowrap items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-6 sm:flex [&::-webkit-scrollbar]:hidden">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
