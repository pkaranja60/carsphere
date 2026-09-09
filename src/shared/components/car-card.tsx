"use client";

import { Card } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";

export interface CarCardProps {
  fuelType: string;
  href?: string;
  id?: string;
  image: string;
  name: string;
  onFavorite?: () => void;
  onViewDetails?: () => void;
  price: string | number;
  transmission: string;
  year: number | string;
}

export function CarCard({
  name,
  image,
  year,
  transmission,
  fuelType,
  price,
  onFavorite,
  onViewDetails,
  href,
}: CarCardProps) {
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

  return (
    <Card className="flex flex-col justify-between overflow-hidden rounded-xl border border-border p-0 shadow-sm">
      <div>
        <div className="relative aspect-4/3 w-full bg-surface-alt">
          <Image
            alt={name}
            className="object-cover object-center"
            fill
            src={image}
          />
          <button
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

        <Card.Content className="p-3 sm:p-4">
          <Typography
            className="text-sm md:text-base"
            type="h3"
            variant="subheading"
          >
            {name}
          </Typography>
          <Typography
            className="mt-0.5 text-xs md:text-sm"
            color="muted"
            variant="metadata"
          >
            {year} | {transmission} | {fuelType}
          </Typography>
          <div className="mt-2 font-extrabold text-base text-foreground md:text-lg">
            {typeof price === "number" ? (
              `$${price.toLocaleString()}`
            ) : (
              <span>{price}</span>
            )}
          </div>
        </Card.Content>
      </div>

      <Card.Footer className="p-3 pt-0 sm:p-4 sm:pt-0">
        <Button
          className="w-full"
          onClick={handleViewDetails}
          size="sm"
          variant="primary"
        >
          View Details
        </Button>
      </Card.Footer>
    </Card>
  );
}
