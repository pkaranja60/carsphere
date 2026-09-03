import { FooterBrand } from "./footer-brand";
import { footerLinkGroups } from "./footer-data";
import { FooterLinkGroup } from "./footer-link-group";
import { FooterNewsletter } from "./footer-newsletter";

export function Footer() {
  return (
    <footer className="bg-black pt-12 pb-6 text-gray-400 text-sm md:text-base">
      <div className="mx-auto w-full max-w-384 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          <FooterBrand />

          {footerLinkGroups.map((group) => (
            <FooterLinkGroup group={group} key={group.title} />
          ))}

          <div className="sm:col-span-2 lg:col-span-4 xl:col-span-1">
            <FooterNewsletter />
          </div>
        </div>

        <div className="border-neutral-900 border-t pt-6 text-center">
          <p className="text-gray-500 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Drivez Premium Motors. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
