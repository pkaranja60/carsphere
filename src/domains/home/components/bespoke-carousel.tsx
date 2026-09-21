"use client";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { buttonVariants } from "@/shared/components/ui/button";

interface SlideData {
  actionText: string;
  align: "left" | "center" | "right";
  bgPosition?: string;
  description: string;
  imageSrc: string;
  title: string;
}

const CAROUSEL_SLIDES: SlideData[] = [
  {
    actionText: "Calculate Terms",
    align: "left",
    bgPosition: "center 70%",
    description:
      "Incentivized 4.9% finance terms across select executive portfolios, with seamless equity transfers from your existing lease structure.",
    imageSrc: "/images/carousel_slide_1.jpg",
    title: "Selected Seasonal Offers",
  },
  {
    actionText: "Start Instant Valuation",
    align: "center",
    description:
      "Submit vehicle specifications for a binding fair market valuation within 15 minutes. We collect nationwide with prompt wire settlement.",
    imageSrc: "/images/carousel_slide_2.jpg",
    title: "Seamless Digital Trade-In",
  },
  {
    actionText: "Book VIP Appointment",
    align: "right",
    description:
      "Experience our Beverly Hills lounge, or arrange a private enclosed demonstration vehicle delivered directly to your home or office.",
    imageSrc: "/images/carousel_slide_3.jpg",
    title: "Private Showroom Viewing",
  },
];

export function BespokeCarousel() {
  const [emblaRef] = useEmblaCarousel({ duration: 60, loop: true }, [
    Autoplay({ delay: 7000, stopOnInteraction: false }),
    Fade(),
  ]);

  return (
    <section className="px-margin-mobile py-space-xl md:px-margin">
      <div
        className="relative mx-auto max-w-400 overflow-hidden rounded-full"
        ref={emblaRef}
      >
        <div className="flex">
          {CAROUSEL_SLIDES.map((slide) => {
            const alignClasses = {
              center: "items-center text-center",
              left: "items-start text-left",
              right: "items-end text-right",
            };
            const innerAlignClasses = {
              center: "items-center",
              left: "items-start",
              right: "items-end",
            };

            return (
              <div
                className="relative min-w-0 shrink-0 grow-0 basis-full bg-black"
                key={slide.title}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${slide.imageSrc})`,
                    backgroundPosition: slide.bgPosition || "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Content */}
                <div
                  className={`relative z-10 flex h-87.5 flex-col justify-center px-space-xl md:h-87.5 md:px-space-3xl ${alignClasses[slide.align]}`}
                >
                  <div
                    className={`flex max-w-2xl flex-col text-white ${innerAlignClasses[slide.align]}`}
                  >
                    <h2 className="mb-space-sm font-bold font-display text-headline-lg tracking-tight">
                      {slide.title}
                    </h2>
                    <p className="mb-space-lg font-body-lg text-white/90">
                      {slide.description}
                    </p>
                    <Link
                      className={buttonVariants({
                        className:
                          "gap-2 border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20",
                        size: "lg",
                        variant: "secondary",
                      })}
                      href="/inventory"
                    >
                      {slide.actionText}
                      <MdArrowForward />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
