import Link from "next/link";
import type { ReactNode } from "react";

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
      className="border-border border-b bg-surface pt-8 pb-5"
      data-purpose="header-context"
    >
      <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
        {/* Breadcrumb & Live Status */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-on-surface-variant text-xs uppercase tracking-wider">
          <div className="flex items-center space-x-1 font-medium">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <div className="flex items-center space-x-1" key={item.label}>
                  {item.href ? (
                    <Link
                      className="transition-colors hover:text-primary hover:underline"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className={item.isCurrent ? "text-on-surface" : ""}>
                      {item.label}
                    </span>
                  )}
                  {!isLast && <span>/</span>}
                </div>
              );
            })}
            {itemCount !== undefined && (
              <span className="ml-1 font-normal text-on-surface-variant normal-case opacity-70">
                ({itemCount})
              </span>
            )}
          </div>

          {liveStatus ? (
            <div className="flex items-center gap-1.5 font-medium text-on-surface-variant">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span>{liveStatus}</span>
            </div>
          ) : null}
        </div>

        {/* Main Headline */}
        <h1 className="mb-2 font-display font-medium text-3xl text-on-surface tracking-tight">
          {title}
        </h1>
        <p className="max-w-4xl font-light text-on-surface-variant text-sm leading-relaxed">
          {description}
        </p>

        {/* Horizontal Curated Pills */}
        {children ? (
          <div className="mt-6 flex flex-wrap items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
