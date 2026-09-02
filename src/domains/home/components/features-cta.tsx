import {
  HiOutlineArrowPath,
  HiOutlineShieldCheck,
  HiOutlineTruck,
  HiOutlineUsers,
} from "react-icons/hi2";

export function FeaturesCta() {
  return (
    <div className="rounded-t-2xl bg-[#0b0c0e] p-6 text-white sm:p-8">
      <div className="grid grid-cols-1 gap-6 divide-y divide-neutral-800 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        <div className="flex items-center space-x-3.5 pt-4 first:px-0 first:pt-0 sm:px-4 sm:pt-0">
          <div className="shrink-0 text-gray-300">
            <HiOutlineTruck className="h-7 w-7 stroke-[1.5]" />
          </div>
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm">
              Free Delivery
            </h4>
            <p className="font-normal text-[11px] text-gray-400 sm:text-xs">
              On All Orders
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3.5 pt-4 sm:px-4 sm:pt-0">
          <div className="shrink-0 text-gray-300">
            <HiOutlineArrowPath className="h-7 w-7 stroke-[1.5]" />
          </div>
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm">
              7-Day Returns
            </h4>
            <p className="font-normal text-[11px] text-gray-400 sm:text-xs">
              Money Back Guarantee
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3.5 pt-4 sm:px-4 sm:pt-0">
          <div className="shrink-0 text-gray-300">
            <HiOutlineShieldCheck className="h-7 w-7 stroke-[1.5]" />
          </div>
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm">
              Secure Payment
            </h4>
            <p className="font-normal text-[11px] text-gray-400 sm:text-xs">
              100% Protected
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3.5 pt-4 sm:px-4 sm:pt-0">
          <div className="shrink-0 text-gray-300">
            <HiOutlineUsers className="h-7 w-7 stroke-[1.5]" />
          </div>
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm">
              Expert Support
            </h4>
            <p className="font-normal text-[11px] text-gray-400 sm:text-xs">
              24/7 Friendly Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
