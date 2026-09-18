import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { SectionLayout, VehicleCard } from "@/shared/components";

export function EverydayVehicles() {
  return (
    <SectionLayout className="mt-space-2xl pb-space-xl">
      <div className="mb-space-lg flex flex-col items-start justify-between gap-space-sm md:flex-row md:items-end">
        <div>
          <h2 className="font-headline-lg font-semibold text-headline-lg text-on-surface tracking-tight">
            Practicality Meets Prestige
          </h2>
        </div>
        <Link
          className="inline-flex items-center gap-space-xs font-label-lg font-semibold text-label-lg text-on-surface transition-colors hover:text-primary"
          href="#"
        >
          <span>View All Everyday Vehicles</span>
          <MdArrowForward className="text-lg" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-4">
        <VehicleCard
          badgeText="Family Pick"
          colorString="Wind Chill Pearl · Black SofTex"
          historyText="1-Owner"
          imageAlt="Wind Chill Pearl 2024 Toyota Highlander Hybrid"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDvFD36KWowFHdEqLqqe_8AI1yNDuUU8-nWut89ppy-Dh_oQIfQHSFxs0uPLI9G7dSZ6FS4rJdebysFwUcST_X9DmJkClnbYlSzx0T6eE1RAa2oF2yPbXueim9CqeGgB13Dcz3VSfcEGuJlo-vtRKv25n8WUqs7WpeE41dcrODCbc8zJ-KCvs3pHmCHhdkXlPysdxWjgJmjXYABL24XSdEsSk40ejBfAbAE4QSn7IzkM-MEnHrCMCKX"
          make="Toyota"
          model="Highlander"
          monthlyEstimate="$540"
          price="$42,500"
          specs={{
            label1: "Miles",
            label2: "Drive",
            label3: "Hybrid",
            stat1: "12,000",
            stat2: "AWD",
            stat3: "36 MPG",
            stat3Color: "tertiary",
          }}
          trim="XLE Hybrid"
          year="2024"
        />

        <VehicleCard
          badgeText="Commuter Choice"
          colorString="Meteorite Gray · Black Leather"
          historyText="Clean Hist."
          imageAlt="Meteorite Gray 2024 Honda Civic Touring"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB4y51NaFw6ubrlTwufIXvESgVK45wkjNz0F26Tt6opz0v_4o2FaM0EiCffyeyDUrLc6RlXxTRf6z0YoyeFPzmtrvm2hXyUt-jrW4M3wY7mrO4TkVbWlHnVuwKQoS-GC7SwLeAZbna1DirgfBeYCAFY2sGkUaeeft_5FwordFm3hj49h9BULU8sACuEXaW1bCP-xk9ANnG-bIZEE6BLrs29Ez1nXRXuzikGAqMsnWojbONjch6zmOxj"
          make="Honda"
          model="Civic"
          monthlyEstimate="$380"
          price="$29,900"
          specs={{
            label1: "Miles",
            label2: "Drive",
            label3: "Engine",
            stat1: "8,500",
            stat2: "FWD",
            stat3: "1.5L Turbo",
          }}
          trim="Touring"
          year="2024"
        />

        <VehicleCard
          badgeText="Adventure Ready"
          colorString="Polymetal Gray · Terracotta"
          historyText="1-Owner"
          imageAlt="Polymetal Gray 2024 Mazda CX-50"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDr2_bITmSTcZp03iAq9rcunw2LxlANHO1VHGLbHYBgUlY8I7C0r5ZZP5eu8hQ1W8MCBC0M8Z0kPdrNA_rXBJ2cqUk8-_S_srvnI6uaeKZYauBua2NkQNp36tgyQCna2NgETpqQ1zqSyFy2iCCeEwbXOay3nG2UmIBffEHZYIsCCr6lM1U5LHCee3sMbC4MWYGQxbgEdxQvKQINNC76B5Ctzn-K98GYL4G0Qbu8_WAOMqf6Y4znDnNV"
          make="Mazda"
          model="CX-50"
          monthlyEstimate="$460"
          price="$35,800"
          specs={{
            label1: "Miles",
            label2: "Drive",
            label3: "Engine",
            stat1: "5,200",
            stat2: "AWD",
            stat3: "2.5L Turbo",
          }}
          trim="Turbo Premium"
          year="2024"
        />

        <VehicleCard
          badgeText="Reliable Value"
          colorString="Crystal Black Silica · Black Cloth"
          historyText="Certified"
          imageAlt="Crystal Black 2024 Subaru Crosstrek"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuA3tAIGVTNf7ozkuQSrOImeqnpFc2u8Ug6c2Q6-T2c3Wy9nQkOULfTXmRQU23u8zJq5_bBLPxD6tXeGKyvlW65HwX16AJ3rDTUHUpeHwIymtkNwTxo_s5zZ90DhvYUfIk3rdBlZ4C5IjGBsKJQ1G8n2AyUykYH7ZA9mp_ql3N20pkFvM0PCkelsbgkh2yeVJyi5hX0TCSBykvwZX3mPxUoqfbl86jB1Zi0Ry-h8edLj1PXdzAtIdscm"
          make="Subaru"
          model="Crosstrek"
          monthlyEstimate="$340"
          price="$26,500"
          specs={{
            label1: "Miles",
            label2: "Drive",
            label3: "Engine",
            stat1: "9,100",
            stat2: "S-AWD",
            stat3: "2.5L Boxer",
          }}
          trim="Sport"
          year="2024"
        />
      </div>
    </SectionLayout>
  );
}
