import {
  HiOutlineBanknotes,
  HiOutlineCheckBadge,
  HiOutlineCurrencyDollar,
  HiOutlinePhone,
} from "react-icons/hi2";

export function HeroValueBadges() {
  return (
    <div className="grid grid-cols-2 gap-6 border-white/10 border-t pt-10 sm:grid-cols-4">
      <div className="flex flex-col space-y-1">
        <div className="flex items-center gap-2 font-semibold text-white text-xs sm:text-sm">
          <HiOutlineCheckBadge className="h-4 w-4 text-gray-300" />
          <span>Certified Cars</span>
        </div>
        <p className="font-light text-[11px] text-gray-400">
          100% Quality Check
        </p>
      </div>

      <div className="flex flex-col space-y-1">
        <div className="flex items-center gap-2 font-semibold text-white text-xs sm:text-sm">
          <HiOutlineCurrencyDollar className="h-4 w-4 text-gray-300" />
          <span>Best Price</span>
        </div>
        <p className="font-light text-[11px] text-gray-400">Guaranteed</p>
      </div>

      <div className="flex flex-col space-y-1">
        <div className="flex items-center gap-2 font-semibold text-white text-xs sm:text-sm">
          <HiOutlineBanknotes className="h-4 w-4 text-gray-300" />
          <span>Easy Finance</span>
        </div>
        <p className="font-light text-[11px] text-gray-400">Fast Approval</p>
      </div>

      <div className="flex flex-col space-y-1">
        <div className="flex items-center gap-2 font-semibold text-white text-xs sm:text-sm">
          <HiOutlinePhone className="h-4 w-4 text-gray-300" />
          <span>24/7 Support</span>
        </div>
        <p className="font-light text-[11px] text-gray-400">
          We're Here to Help
        </p>
      </div>
    </div>
  );
}
