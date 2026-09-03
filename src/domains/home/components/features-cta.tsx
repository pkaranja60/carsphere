import {
  HiOutlineArrowPath,
  HiOutlineShieldCheck,
  HiOutlineTruck,
  HiOutlineUsers,
} from "react-icons/hi2";
import { Typography } from "@/shared";

export function FeaturesCta() {
  return (
    <div className="rounded-t-2xl bg-[#0b0c0e] p-6 text-white lg:p-8">
      <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:divide-x sm:divide-neutral-800">
        <div className="flex flex-col items-center justify-center px-2 text-center sm:flex-row sm:justify-start sm:space-x-4 sm:px-6 sm:text-left">
          <div className="shrink-0 text-gray-300">
            <HiOutlineTruck className="mb-2 h-6 w-6 stroke-[1.5] sm:mb-0 sm:h-8 sm:w-8" />
          </div>
          <div>
            <Typography color="inverse" variant="subheading">
              Free Delivery
            </Typography>
            <Typography
              className="mt-0.5 hidden sm:block"
              color="muted"
              variant="metadata"
            >
              On All Orders
            </Typography>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-2 text-center sm:flex-row sm:justify-start sm:space-x-4 sm:px-6 sm:text-left">
          <div className="shrink-0 text-gray-300">
            <HiOutlineArrowPath className="mb-2 h-6 w-6 stroke-[1.5] sm:mb-0 sm:h-8 sm:w-8" />
          </div>
          <div>
            <Typography color="inverse" variant="subheading">
              7-Day Returns
            </Typography>
            <Typography
              className="mt-0.5 hidden sm:block"
              color="muted"
              variant="metadata"
            >
              Money Back Guarantee
            </Typography>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-2 text-center sm:flex-row sm:justify-start sm:space-x-4 sm:px-6 sm:text-left">
          <div className="shrink-0 text-gray-300">
            <HiOutlineShieldCheck className="mb-2 h-6 w-6 stroke-[1.5] sm:mb-0 sm:h-8 sm:w-8" />
          </div>
          <div>
            <Typography color="inverse" variant="subheading">
              Secure Payment
            </Typography>
            <Typography
              className="mt-0.5 hidden sm:block"
              color="muted"
              variant="metadata"
            >
              100% Protected
            </Typography>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-2 text-center sm:flex-row sm:justify-start sm:space-x-4 sm:px-6 sm:text-left">
          <div className="shrink-0 text-gray-300">
            <HiOutlineUsers className="mb-2 h-6 w-6 stroke-[1.5] sm:mb-0 sm:h-8 sm:w-8" />
          </div>
          <div>
            <Typography color="inverse" variant="subheading">
              Expert Support
            </Typography>
            <Typography
              className="mt-0.5 hidden sm:block"
              color="muted"
              variant="metadata"
            >
              24/7 Friendly Support
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
