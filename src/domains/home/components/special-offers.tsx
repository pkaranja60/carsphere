// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

interface OfferCardProps {
  badge?: string;
  badgeColor?: string;
  bgColor: string;
  buttonHref: string;
  buttonStyle?: "primary" | "white";
  buttonText: string;
  description: ReactNode;
  descriptionColor?: string;
  gradientFrom: string;
  gradientVia?: string;
  imageAlt: string;
  imageOpacity?: string;
  imagePosition?: string;
  imageSrc: string;
  imageWidth?: string;
  title: ReactNode;
}

function OfferCard({
  imageSrc,
  imageAlt,
  imageWidth = "w-full",
  imageOpacity = "opacity-60",
  imagePosition = "object-right",
  gradientFrom,
  gradientVia,
  badge,
  badgeColor = "text-neutral-400",
  title,
  description,
  descriptionColor = "text-neutral-300",
  buttonText,
  buttonHref,
  buttonStyle = "primary",
  bgColor,
}: OfferCardProps) {
  return (
    <Card
      className={`relative flex min-h-44 flex-col justify-between overflow-hidden rounded-2xl border-none ${bgColor}`}
    >
      <div className={`absolute top-0 right-0 bottom-0 z-0 ${imageWidth}`}>
        <Image
          alt={imageAlt}
          className={`h-full w-full object-cover ${imagePosition} ${imageOpacity}`}
          fill
          src={imageSrc}
        />
        <div
          className={`absolute inset-0 bg-linear-to-r ${gradientFrom} ${
            gradientVia || ""
          } to-transparent`}
        />
      </div>

      <Card.Header className="relative z-10 flex flex-col items-start gap-0.5 p-6 pb-0">
        {badge ? (
          <p
            className={`font-semibold ${badgeColor} text-xs uppercase tracking-wider md:text-xs`}
          >
            {badge}
          </p>
        ) : null}
        <Card.Title className="font-extrabold text-lg text-white md:text-2xl">
          {title}
        </Card.Title>
        <Card.Description
          className={`${descriptionColor} text-xs leading-snug md:text-sm`}
        >
          {description}
        </Card.Description>
      </Card.Header>

      <Card.Footer className="relative z-10 p-6 pt-4">
        <Link
          className={`inline-block rounded-lg px-4 py-2 font-semibold text-xs shadow transition md:text-sm ${
            buttonStyle === "primary"
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-white text-neutral-900 hover:bg-neutral-100"
          }`}
          href={buttonHref}
        >
          {buttonText}
        </Link>
      </Card.Footer>
    </Card>
  );
}

export function SpecialOffers() {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <OfferCard
        badge="Limited Time Offer"
        bgColor="bg-black"
        buttonHref="#"
        buttonText="Explore Offers"
        description="On Selected Cars"
        gradientFrom="from-black"
        gradientVia="via-black/80"
        imageAlt="Promo Car"
        imageSrc="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
        title="Up to 20% Off"
      />

      <OfferCard
        badge="Easy Finance"
        badgeColor="text-red-100"
        bgColor="bg-red-700"
        buttonHref="#"
        buttonStyle="white"
        buttonText="Learn More"
        description="With Low Monthly Plans"
        descriptionColor="text-red-100"
        gradientFrom="from-red-700"
        gradientVia="via-red-700/70"
        imageAlt="Finance Car"
        imageOpacity="opacity-100"
        imagePosition="object-left"
        imageSrc="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"
        imageWidth="w-3/5"
        title="Get Your Dream Car"
      />

      <OfferCard
        bgColor="bg-neutral-950"
        buttonHref="#"
        buttonStyle="white"
        buttonText="Book Now"
        description={
          <>
            Experience Before
            <br />
            You Buy
          </>
        }
        gradientFrom="from-neutral-950"
        gradientVia="via-neutral-950/80"
        imageAlt="Steering Wheel"
        imageOpacity="opacity-70"
        imagePosition="object-center"
        imageSrc="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
        imageWidth="w-1/2"
        title="Book a Test Drive"
      />
    </section>
  );
}
