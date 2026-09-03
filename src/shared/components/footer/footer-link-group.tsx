import { NavLink } from "../nav-link";
import type { FooterLinkGroupData } from "./footer-data";

export function FooterLinkGroup({ group }: { group: FooterLinkGroupData }) {
  return (
    <div className="space-y-3">
      <h5 className="font-bold text-base text-white tracking-wider md:text-lg">
        {group.title}
      </h5>
      <ul className="space-y-2 text-sm md:text-base">
        {group.links.map((link) => (
          <li key={link.label}>
            <NavLink
              className="transition hover:text-white"
              href={link.href}
              label={link.label}
              variant="default"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
