// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import {
  MdEngineering,
  MdHandshake,
  MdOutlineDescription,
  MdVerified,
} from "react-icons/md";
import { aboutService } from "../services/about.service";

// ─────────────────────────────────────────────
// SECTION: Icons Map
// ─────────────────────────────────────────────

const CREDENTIAL_ICONS = [MdVerified, MdEngineering, MdHandshake];

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function AboutLeadershipSection() {
  const members = aboutService.getTeamMembers();

  return (
    <section className="w-full bg-surface-container-low py-16 md:py-24">
      <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
        <div className="mb-12 max-w-3xl md:mb-16">
          <span className="font-label-md font-semibold text-label-md text-primary uppercase tracking-wider">
            Leadership & Advisory
          </span>
          <h2 className="mt-2 font-bold font-display text-headline-lg text-on-surface">
            Custodians of the Craft.
          </h2>
          <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We operate without commissioned sales reps or predatory finance
            closers. You consult exclusively with marque specialists, technical
            directors, and private client advisers whose remuneration is tied
            directly to satisfaction and vehicle longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {members.map((member, idx) => {
            const CredentialIcon = CREDENTIAL_ICONS[idx] ?? MdVerified;

            return (
              <div
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface-container-lowest shadow-xs transition-all hover:shadow-md"
                key={member.id}
              >
                <div className="relative aspect-4/5 w-full overflow-hidden bg-surface-container">
                  <Image
                    alt={member.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    height={600}
                    src={member.imageUrl}
                    width={480}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    <span className="font-label-sm font-semibold text-label-sm text-primary uppercase tracking-wider">
                      {member.role}
                    </span>
                    <h3 className="mt-1 font-bold font-display text-headline-sm text-on-surface">
                      {member.name}
                    </h3>
                    <p className="mt-3 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 rounded-lg border border-border bg-surface-container-low/60 p-3">
                    <CredentialIcon className="shrink-0 text-base text-primary" />
                    <span className="font-label-sm font-medium text-secondary text-xs">
                      {member.credential}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-xl border border-border bg-surface-container-lowest p-6 shadow-xs md:p-8 lg:flex-row lg:p-10">
          <div className="flex items-center gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:h-14 md:w-14">
              <MdOutlineDescription className="text-2xl md:text-3xl" />
            </div>
            <div>
              <h3 className="font-bold font-display text-headline-sm text-on-surface">
                Our Client Bill of Rights
              </h3>
              <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                Zero negotiation games. Zero documentation fee upcharges.
                Complete electronic dossier delivered prior to any reservation.
              </p>
            </div>
          </div>
          <button
            className="w-full shrink-0 rounded-lg border border-border bg-surface-container px-6 py-3 font-label-lg font-semibold text-label-lg text-on-surface transition-colors hover:bg-surface-container-high sm:w-auto"
            type="button"
          >
            Download Charter PDF
          </button>
        </div>
      </div>
    </section>
  );
}
