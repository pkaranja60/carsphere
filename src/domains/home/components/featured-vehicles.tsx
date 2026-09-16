// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { VehicleCard } from "./vehicle-card";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function FeaturedVehicles() {
  return (
    <section className="mx-auto mt-space-lg w-full max-w-345 px-margin-mobile pt-space-xl md:px-margin">
      <div className="mb-space-lg flex flex-col items-start justify-between gap-space-sm md:flex-row md:items-end">
        <div>
          <span className="mb-space-xs block font-label-sm font-semibold text-label-sm text-primary uppercase tracking-widest">
            Current Showroom Showcase
          </span>
          <h2 className="font-headline-lg font-semibold text-headline-lg text-on-surface tracking-tight">
            Handpicked Featured Acquisitions
          </h2>
        </div>
        <Link
          className="inline-flex items-center gap-space-xs font-label-lg font-semibold text-label-lg text-on-surface transition-colors hover:text-primary"
          href="#"
        >
          <span>View Full 482 Vehicles</span>
          <span className="material-symbols-outlined text-lg">east</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-4">
        <VehicleCard
          badgeText="Certified Pre-Owned"
          colorString="Frozen Blue Metallic · Performance Battery Plus"
          historyText="Clean Hist."
          imageAlt="Metallic Frozen Blue 2023 Porsche Taycan 4S"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB4y51NaFw6ubrlTwufIXvESgVK45wkjNz0F26Tt6opz0v_4o2FaM0EiCffyeyDUrLc6RlXxTRf6z0YoyeFPzmtrvm2hXyUt-jrW4M3wY7mrO4TkVbWlHnVuwKQoS-GC7SwLeAZbna1DirgfBeYCAFY2sGkUaeeft_5FwordFm3hj49h9BULU8sACuEXaW1bCP-xk9ANnG-bIZEE6BLrs29Ez1nXRXuzikGAqMsnWojbONjch6zmOxj"
          make="Porsche"
          model="Taycan"
          monthlyEstimate="$1,240"
          price="$89,500"
          specs={{
            label1: "Miles",
            label2: "Drive",
            label3: "Electric",
            stat1: "8,200",
            stat2: "AWD Dual",
            stat3: "522 hp",
            stat3Color: "tertiary",
          }}
          trim="4S AWD"
          year="2023"
        />

        <VehicleCard
          badgeText="Single Owner"
          colorString="Matterhorn White · Seville Red Nappa"
          historyText="1-Owner"
          imageAlt="Matterhorn White 2024 Genesis GV70 SUV"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDr2_bITmSTcZp03iAq9rcunw2LxlANHO1VHGLbHYBgUlY8I7C0r5ZZP5eu8hQ1W8MCBC0M8Z0kPdrNA_rXBJ2cqUk8-_S_srvnI6uaeKZYauBua2NkQNp36tgyQCna2NgETpqQ1zqSyFy2iCCeEwbXOay3nG2UmIBffEHZYIsCCr6lM1U5LHCee3sMbC4MWYGQxbgEdxQvKQINNC76B5Ctzn-K98GYL4G0Qbu8_WAOMqf6Y4znDnNV"
          make="Genesis"
          model="GV70"
          monthlyEstimate="$580"
          price="$42,900"
          specs={{
            label1: "Miles",
            label2: "Drive",
            label3: "Turbo I4",
            stat1: "11,400",
            stat2: "AWD",
            stat3: "300 hp",
          }}
          trim="2.5T Sport"
          year="2024"
        />

        <VehicleCard
          badgeText="Clean Provenance"
          colorString="Isle of Man Green · Kyalami Orange"
          historyText="1-Owner"
          imageAlt="Isle of Man Green 2023 BMW M3 Competition"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuA3tAIGVTNf7ozkuQSrOImeqnpFc2u8Ug6c2Q6-T2c3Wy9nQkOULfTXmRQU23u8zJq5_bBLPxD6tXeGKyvlW65HwX16AJ3rDTUHUpeHwIymtkNwTxo_s5zZ90DhvYUfIk3rdBlZ4C5IjGBsKJQ1G8n2AyUykYH7ZA9mp_ql3N20pkFvM0PCkelsbgkh2yeVJyi5hX0TCSBykvwZX3mPxUoqfbl86jB1Zi0Ry-h8edLj1PXdzAtIdscm"
          make="BMW"
          model="M3"
          monthlyEstimate="$1,090"
          price="$78,900"
          specs={{
            label1: "Miles",
            label2: "Drive",
            label3: "Twin Turbo",
            stat1: "6,100",
            stat2: "xDrive AWD",
            stat3: "503 hp",
          }}
          trim="Competition"
          year="2023"
        />

        <VehicleCard
          badgeText="150-Pt Inspected"
          colorString="Caviar Black · Macadamia Semi-Aniline"
          historyText="Certified"
          imageAlt="Caviar Black 2024 Lexus RX 350h Luxury hybrid SUV"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCZtTMmHDXTOzpUK3j3kIwlO6ZpJ_l0pTlQvK-BuAURrPo6_i7TZYKEvp5ZAxFRb0RO8KNJJv5lPm2ChyTZtB_ayE4qswKS8VbX5pWAGWixLB3qG7-MSMALOlMqmhRybev-azrNPJB_lXNGjCK2lM2inNXIFRjBgJOZwj6ir187NjczLJam04DrWZ8ttfq4vvcimAbxSmD9LC96dLGduc94EaUAdijYbaY6h1jjrk3G7wEl9yAcpl2x"
          make="Lexus"
          model="RX 350h"
          monthlyEstimate="$625"
          price="$46,500"
          specs={{
            label1: "Miles",
            label2: "Drive",
            label3: "Combined",
            stat1: "14,300",
            stat2: "E-Four AWD",
            stat3: "37 MPG",
            stat3Color: "tertiary",
          }}
          trim="Luxury Hybrid"
          year="2024"
        />
      </div>
    </section>
  );
}
