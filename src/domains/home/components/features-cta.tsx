import {
  HiOutlineArrowPath,
  HiOutlineShieldCheck,
  HiOutlineTruck,
  HiOutlineUsers,
} from "react-icons/hi2";

export function FeaturesCta() {
  return (
    <div className="rounded-t-2xl bg-[#0b0c0e] p-4 text-white sm:p-6">
      <div className="grid grid-cols-4 divide-x divide-neutral-800">
        <div className="flex flex-col items-center justify-center px-1 text-center sm:flex-row sm:justify-start sm:space-x-3.5 sm:px-4 sm:text-left">
          <div className="shrink-0 text-gray-300">
            <HiOutlineTruck className="mb-1 h-5 w-5 stroke-[1.5] sm:mb-0 sm:h-7 sm:w-7" />
          </div>
          <div>
            <h4 className="font-bold text-[9px] text-white leading-tight sm:text-xs md:text-sm">
              Free Delivery
            </h4>
            <p className="hidden font-normal text-[11px] text-gray-400 sm:block md:text-xs">
              On All Orders
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-1 text-center sm:flex-row sm:justify-start sm:space-x-3.5 sm:px-4 sm:text-left">
          <div className="shrink-0 text-gray-300">
            <HiOutlineArrowPath className="mb-1 h-5 w-5 stroke-[1.5] sm:mb-0 sm:h-7 sm:w-7" />
          </div>
          <div>
            <h4 className="font-bold text-[9px] text-white leading-tight sm:text-xs md:text-sm">
              7-Day Returns
            </h4>
            <p className="hidden font-normal text-[11px] text-gray-400 sm:block md:text-xs">
              Money Back Guarantee
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-1 text-center sm:flex-row sm:justify-start sm:space-x-3.5 sm:px-4 sm:text-left">
          <div className="shrink-0 text-gray-300">
            <HiOutlineShieldCheck className="mb-1 h-5 w-5 stroke-[1.5] sm:mb-0 sm:h-7 sm:w-7" />
          </div>
          <div>
            <h4 className="font-bold text-[9px] text-white leading-tight sm:text-xs md:text-sm">
              Secure Payment
            </h4>
            <p className="hidden font-normal text-[11px] text-gray-400 sm:block md:text-xs">
              100% Protected
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-1 text-center sm:flex-row sm:justify-start sm:space-x-3.5 sm:px-4 sm:text-left">
          <div className="shrink-0 text-gray-300">
            <HiOutlineUsers className="mb-1 h-5 w-5 stroke-[1.5] sm:mb-0 sm:h-7 sm:w-7" />
          </div>
          <div>
            <h4 className="font-bold text-[9px] text-white leading-tight sm:text-xs md:text-sm">
              Expert Support
            </h4>
            <p className="hidden font-normal text-[11px] text-gray-400 sm:block md:text-xs">
              24/7 Friendly Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
