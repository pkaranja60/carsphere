import { FaApple } from "react-icons/fa6";
import { HiOutlineArrowRight } from "react-icons/hi2";

export function FooterNewsletter() {
  return (
    <div className="space-y-3">
      <h5 className="font-bold text-base text-white tracking-wider md:text-lg">
        Newsletter
      </h5>
      <p className="text-gray-400 text-sm md:text-base">
        Subscribe to get the latest updates and exclusive offers.
      </p>

      <form className="mt-4 flex max-w-sm sm:max-w-md">
        <input
          className="w-full rounded-l-md border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:border-red-600 focus:outline-none md:text-base"
          placeholder="Enter your email"
          type="email"
        />
        <button
          className="flex items-center justify-center rounded-r-md bg-red-600 px-3 py-2.5 text-white transition hover:bg-red-700"
          type="submit"
        >
          <HiOutlineArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="flex items-center gap-1.5 pt-2">
        <span className="rounded bg-white px-2 py-1 font-black text-blue-800 text-xs italic md:text-xs">
          VISA
        </span>
        <span className="rounded bg-white px-2 py-1 font-black text-orange-600 text-xs md:text-xs">
          MC
        </span>
        <span className="rounded bg-white px-2 py-1 font-bold text-blue-600 text-xs md:text-xs">
          PayPal
        </span>
        <span className="flex items-center gap-0.5 rounded bg-white px-2 py-1 font-bold text-neutral-900 text-xs md:text-xs">
          <FaApple className="h-2.5 w-2.5" />
          Pay
        </span>
      </div>
    </div>
  );
}
