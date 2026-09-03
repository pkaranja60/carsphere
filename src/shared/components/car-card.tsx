"use client";

import { Card } from "@heroui/react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";

export interface CarCardProps {
  fuelType: string;
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
}: CarCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = useCallback(() => {
    setIsFavorite((prev) => !prev);
    onFavorite?.();
  }, [onFavorite]);

  return (
    <Card className="flex flex-col justify-between overflow-hidden rounded-xl border border-border p-0 shadow-sm">
      <div>
        <div className="relative aspect-4/3 w-full bg-neutral-950">
          <Image
            alt={name}
            className="object-cover object-center"
            fill
            src={image}
          />
          <button
            className={`absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 backdrop-blur transition hover:text-red-500 md:h-8 md:w-8 ${
              isFavorite ? "text-red-500" : "text-white"
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
          onClick={onViewDetails}
          size="sm"
          variant="primary"
        >
          View Details
        </Button>
      </Card.Footer>
    </Card>
  );
}
