"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { Card } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface CarCardProps {
  fuelType: string;
  href?: string;
  id?: string;
  image: string;
  layout?: "grid" | "list" | "grid-compact";
  name: string;
  onFavorite?: () => void;
  onViewDetails?: () => void;
  price: string | number;
  transmission: string;
  year: number | string;
}

interface CarCardLayoutProps extends CarCardProps {
  handleFavoriteClick: () => void;
  handleViewDetails: () => void;
  isFavorite: boolean;
}

// ─────────────────────────────────────────────
// SECTION: Layout Components
// ─────────────────────────────────────────────

function CarCardListLayout({
  fuelType,
  image,
  name,
  price,
  transmission,
  year,
  handleFavoriteClick,
  handleViewDetails,
  isFavorite,
}: CarCardLayoutProps) {
  return (
    <Card className="flex flex-row overflow-hidden rounded-xl border border-border p-0 shadow-sm transition-shadow hover:shadow-md">
      {/* Left: Image */}
      <div className="relative w-2/5 shrink-0 bg-surface-alt sm:w-1/3 sm:min-w-70">
        <Image
          alt={name}
          className="object-cover object-center"
          fill
          sizes="(max-width: 640px) 40vw, 33vw"
          src={image}
        />
        <button
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          className={`absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-surface/40 backdrop-blur transition hover:text-primary ${
            isFavorite ? "text-primary" : "text-foreground"
          }`}
          onClick={handleFavoriteClick}
          type="button"
        >
          {isFavorite ? (
            <HiHeart className="h-4 w-4" />
          ) : (
            <HiOutlineHeart className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Right: Content */}
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
          <div>
            <Typography
              className="text-base sm:text-lg md:text-xl"
              type="h3"
              variant="subheading"
            >
              {name}
            </Typography>
            <Typography
              className="mt-1 text-xs sm:text-sm"
              color="muted"
              variant="metadata"
            >
              {year} | {transmission} | {fuelType}
            </Typography>
          </div>
          <div className="font-extrabold text-foreground text-lg sm:text-xl">
            {typeof price === "number" ? (
              `$${price.toLocaleString()}`
            ) : (
              <span>{price}</span>
            )}
          </div>
        </div>
        <div className="mt-4 flex justify-end sm:mt-6">
          <Button
            className="w-full sm:w-auto"
            onClick={handleViewDetails}
            size="sm"
            variant="primary"
          >
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
}

function CarCardGridLayout({
  fuelType,
  image,
  layout,
  name,
  price,
  transmission,
  year,
  handleFavoriteClick,
  handleViewDetails,
  isFavorite,
}: CarCardLayoutProps) {
  const isCompact = layout === "grid-compact";

  return (
    <Card className="flex flex-col justify-between overflow-hidden rounded-xl border border-border p-0 shadow-sm transition-shadow hover:shadow-md">
      <div>
        <div className="relative aspect-4/3 w-full bg-surface-alt">
          <Image
            alt={name}
            className="object-cover object-center"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            src={image}
          />
          <button
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            className={`absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-surface/40 backdrop-blur transition hover:text-primary md:h-8 md:w-8 ${
              isFavorite ? "text-primary" : "text-foreground"
            }`}
            onClick={handleFavoriteClick}
            type="button"
          >
            {isFavorite ? (
              <HiHeart className="h-3.5 w-3.5 md:h-4 md:w-4" />
            ) : (
              <HiOutlineHeart className="h-3.5 w-3.5 md:h-4 md:w-4" />
            )}
          </button>
        </div>

        <Card.Content className={isCompact ? "p-2 sm:p-3" : "p-3 sm:p-4"}>
          <Typography
            className={
              isCompact ? "truncate text-sm md:text-sm" : "text-sm md:text-base"
            }
            type="h3"
            variant="subheading"
          >
            {name}
          </Typography>
          <Typography
            className={`mt-0.5 ${isCompact ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}
            color="muted"
            variant="metadata"
          >
            {year} | {transmission} | {fuelType}
          </Typography>
          <div
            className={`mt-2 font-extrabold text-foreground ${isCompact ? "text-sm md:text-base" : "text-base md:text-lg"}`}
          >
            {typeof price === "number" ? (
              `$${price.toLocaleString()}`
            ) : (
              <span>{price}</span>
            )}
          </div>
        </Card.Content>
      </div>

      <Card.Footer
        className={
          isCompact ? "p-2 pt-0 sm:p-3 sm:pt-0" : "p-3 pt-0 sm:p-4 sm:pt-0"
        }
      >
        <Button
          className="w-full"
          onClick={handleViewDetails}
          size={isCompact ? "sm" : "md"}
          variant="primary"
        >
          View Details
        </Button>
      </Card.Footer>
    </Card>
  );
}

// ─────────────────────────────────────────────
// SECTION: Main Component
// ─────────────────────────────────────────────

export function CarCard(props: CarCardProps) {
  const { onFavorite, onViewDetails, href, layout = "grid" } = props;
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = useCallback(() => {
    setIsFavorite((prev) => !prev);
    onFavorite?.();
  }, [onFavorite]);

  const handleViewDetails = useCallback(() => {
    if (onViewDetails) {
      onViewDetails();
    } else if (href) {
      router.push(href);
    }
  }, [onViewDetails, href, router]);

  const layoutProps = {
    ...props,
    handleFavoriteClick,
    handleViewDetails,
    isFavorite,
    layout,
  };

  if (layout === "list") {
    return <CarCardListLayout {...layoutProps} />;
  }

  return <CarCardGridLayout {...layoutProps} />;
}
