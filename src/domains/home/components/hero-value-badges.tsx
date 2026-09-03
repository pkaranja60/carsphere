import {
  HiOutlineBanknotes,
  HiOutlineCheckBadge,
  HiOutlineCurrencyDollar,
  HiOutlinePhone,
} from "react-icons/hi2";

export function HeroValueBadges() {
  return (
    <div className="grid grid-cols-2 gap-6 border-white/10 border-t pt-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 min-[480px]:grid-cols-2">
      <div className="flex flex-col space-y-1">
        <div className="flex items-center gap-2 font-semibold text-white text-xs sm:text-sm md:text-base">
          <HiOutlineCheckBadge className="h-4 w-4 text-gray-300 md:h-5 md:w-5" />
          <span>Certified Cars</span>
        </div>
        <p className="font-light text-gray-400 text-xs md:text-xs">
          100% Quality Check
        </p>
      </div>

      <div className="flex flex-col space-y-1">
        <div className="flex items-center gap-2 font-semibold text-white text-xs sm:text-sm md:text-base">
          <HiOutlineCurrencyDollar className="h-4 w-4 text-gray-300 md:h-5 md:w-5" />
          <span>Best Price</span>
        </div>
        <p className="font-light text-gray-400 text-xs md:text-xs">
          Guaranteed
        </p>
      </div>

      <div className="flex flex-col space-y-1">
        <div className="flex items-center gap-2 font-semibold text-white text-xs sm:text-sm md:text-base">
          <HiOutlineBanknotes className="h-4 w-4 text-gray-300 md:h-5 md:w-5" />
          <span>Easy Finance</span>
        </div>
        <p className="font-light text-gray-400 text-xs md:text-xs">
          Fast Approval
        </p>
      </div>

      <div className="flex flex-col space-y-1">
        <div className="flex items-center gap-2 font-semibold text-white text-xs sm:text-sm md:text-base">
          <HiOutlinePhone className="h-4 w-4 text-gray-300 md:h-5 md:w-5" />
          <span>24/7 Support</span>
        </div>
        <p className="font-light text-gray-400 text-xs md:text-xs">
          We're Here to Help
        </p>
      </div>
    </div>
  );
}
