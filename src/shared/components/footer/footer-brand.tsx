import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { RiSpeedUpLine } from "react-icons/ri";

export function FooterBrand() {
  return (
    <div className="space-y-4 sm:col-span-2 lg:col-span-4 xl:col-span-2">
      <div className="flex items-center gap-2">
        <div className="relative flex h-14 w-14 -rotate-45 items-center justify-center rounded-full border-4 border-foreground border-t-transparent dark:border-red-600 dark:border-t-transparent">
          <RiSpeedUpLine className="h-10 w-10 rotate-45 text-foreground dark:text-white" />
        </div>
        <div className="italic leading-none">
          <span className="font-extrabold text-foreground text-xl tracking-tight md:text-2xl dark:text-white">
            DRIV
          </span>
          <span className="font-extrabold text-red-600 text-xl md:text-2xl">
            EZ
          </span>
          <span className="mt-0.5 block font-semibold text-muted text-xs uppercase tracking-widest md:text-xs">
            Premium Motors
          </span>
        </div>
      </div>

      <p className="max-w-xs text-muted text-sm leading-relaxed md:text-base">
        Your trusted partner in finding the perfect car. Quality, trust and
        customer satisfaction drive everything we do.
      </p>

      <div className="flex items-center space-x-2 pt-1">
        <Link
          className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-alt text-foreground transition hover:bg-primary hover:text-white dark:text-white"
          href="#"
        >
          <FaFacebookF className="h-3.5 w-3.5" />
        </Link>
        <Link
          className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-alt text-foreground transition hover:bg-primary hover:text-white dark:text-white"
          href="#"
        >
          <FaInstagram className="h-3.5 w-3.5" />
        </Link>
        <Link
          className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-alt text-foreground transition hover:bg-primary hover:text-white dark:text-white"
          href="#"
        >
          <FaXTwitter className="h-3.5 w-3.5" />
        </Link>
        <Link
          className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-alt text-foreground transition hover:bg-primary hover:text-white dark:text-white"
          href="#"
        >
          <FaYoutube className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
