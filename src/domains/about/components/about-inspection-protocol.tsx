// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import {
  MdElectricMeter,
  MdLayers,
  MdPrecisionManufacturing,
  MdSpa,
  MdWorkspacePremium,
} from "react-icons/md";
import { aboutService } from "../services/about.service";

// ─────────────────────────────────────────────
// SECTION: Icons Map
// ─────────────────────────────────────────────

const STEP_ICONS = [MdLayers, MdElectricMeter, MdPrecisionManufacturing, MdSpa];

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function AboutInspectionProtocol() {
  const steps = aboutService.getInspectionSteps();

  return (
    <section className="mx-auto w-full max-w-400 px-margin-mobile py-16 md:px-margin md:py-24">
      <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <span className="font-label-md font-semibold text-label-md text-primary uppercase tracking-wider">
            Empirical Verification
          </span>
          <h2 className="mt-2 font-bold font-display text-headline-lg text-on-surface">
            The 150-Point Heritage Protocol.
          </h2>
          <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We treat vehicle evaluation not as an automotive inspection, but as
            forensic architectural assessment. Four stages of non-destructive
            testing, telemetry logging, and physical verification.
          </p>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-border bg-surface-container px-5 py-3.5 shadow-xs">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MdWorkspacePremium className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm font-semibold text-label-sm text-secondary uppercase">
              Archival Grade
            </span>
            <span className="font-label-md font-semibold text-label-md text-on-surface">
              Every car receives a signed Heritage Dossier
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, idx) => {
          const Icon = STEP_ICONS[idx] ?? MdLayers;
          return (
            <div
              className="group flex flex-col justify-between border-0 bg-transparent p-0 shadow-none transition-all sm:rounded-xl sm:border sm:border-border sm:bg-surface-container-lowest sm:p-6 sm:shadow-xs sm:hover:-translate-y-1 sm:hover:shadow-md md:p-8"
              key={step.id}
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-bold font-display text-2xl text-surface-container-highest transition-colors group-hover:text-primary">
                    {step.stepNumber}
                  </span>
                  <Icon className="text-2xl text-primary" />
                </div>
                <h3 className="mb-3 font-bold font-display text-headline-sm text-on-surface">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 rounded-lg border border-border bg-surface-container-low/70 p-3.5">
                <span className="block font-label-sm font-semibold text-secondary text-xs">
                  {step.specLabel}
                </span>
                <span className="font-body-sm font-semibold text-body-sm text-on-surface">
                  {step.specValue}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
