// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import { MdCall, MdMail } from "react-icons/md";
import type { DedicatedHost } from "../types/contact.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface ContactSpecialistCardProps {
  host: DedicatedHost;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ContactSpecialistCard({ host }: ContactSpecialistCardProps) {
  return (
    <div className="flex flex-col gap-4 border-0 bg-transparent p-0 shadow-none sm:rounded-xl sm:border sm:border-border sm:bg-surface-container-lowest sm:p-space-lg sm:shadow-xs">
      <div className="flex items-center gap-3.5 sm:gap-space-md">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-primary/40 shadow-xs">
          <Image
            alt={host.name}
            className="h-full w-full object-cover"
            height={64}
            src={host.avatarUrl}
            width={64}
          />
        </div>
        <div className="flex min-w-0 flex-col">
          <span className="font-label-sm font-semibold text-label-sm text-primary uppercase tracking-wider">
            {host.tag}
          </span>
          <h4 className="truncate font-bold font-display text-headline-sm text-on-surface">
            {host.name}
          </h4>
          <p className="truncate font-body-sm text-body-sm text-on-surface-variant">
            {host.role}
          </p>
        </div>
      </div>

      <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
        &ldquo;{host.quote}&rdquo;
      </p>

      <div className="flex items-center gap-2.5 pt-1 sm:gap-space-sm">
        <a
          className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-surface font-label-sm font-semibold text-label-sm text-on-surface transition-colors hover:bg-surface-container hover:text-primary active:translate-y-0.5"
          href={`tel:${host.directDeskPhone.replace(/\D/g, "")}`}
        >
          <MdCall className="text-base text-primary" />
          <span>Direct Desk</span>
        </a>
        <a
          className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-surface font-label-sm font-semibold text-label-sm text-on-surface transition-colors hover:bg-surface-container hover:text-primary active:translate-y-0.5"
          href={`mailto:${host.email}`}
        >
          <MdMail className="text-base text-primary" />
          <span>Confidential Email</span>
        </a>
      </div>
    </div>
  );
}
