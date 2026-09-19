// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface NotFoundBannerProps {
  message?: string;
  title?: string;
}

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function NotFoundBanner({
  title = "Destination Unknown",
  message = "The page you are looking for has been moved, deleted, or never existed.",
}: NotFoundBannerProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center">
      <div className="relative mb-space-xs flex w-full max-w-xl justify-center text-primary">
        <div className="absolute inset-0 z-0 m-auto h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

        <svg
          className="relative z-10 h-auto w-full max-w-xl opacity-90"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 400 280"
        >
          <title>404 Not Found</title>

          <text
            className="tracking-widest"
            fill="currentColor"
            fontSize="100"
            fontWeight="900"
            opacity="0.05"
            textAnchor="middle"
            x="200"
            y="140"
          >
            404
          </text>

          <g strokeOpacity="0.15" strokeWidth="1">
            <path d="M 200 40 L 40 120 M 240 60 L 80 140 M 280 80 L 120 160" />
            <path d="M 200 40 L 360 120 M 160 60 L 320 140" />
            <path
              d="M 200 200 L 200 240 M 160 180 L 160 220"
              strokeDasharray="2 4"
            />
          </g>

          <g transform="translate(80, 60)">
            <path
              d="M 100 40 L 220 100 L 160 130 L 40 70 Z"
              fill="var(--color-surface-container-highest)"
              strokeOpacity="0.5"
            />
            <path d="M 100 40 L 220 100 L 160 130 L 40 70 Z" strokeWidth="2" />

            <path d="M 40 70 L 40 90 L 160 150 L 220 120 L 220 100" />
            <path d="M 160 130 L 160 150" />

            <path d="M 70 55 L 190 115" strokeDasharray="8 8" />

            <circle
              className="motion-safe:animate-pulse"
              cx="210"
              cy="115"
              fill="var(--color-error)"
              r="4"
              stroke="none"
              style={{ animationDuration: "2s" }}
            />
            <path
              d="M 210 105 L 210 110"
              stroke="var(--color-error)"
              strokeWidth="2"
            />
          </g>

          <g transform="translate(60, 60)">
            <path
              d="M 135 122 L 205 87 L 195 82 L 125 117 Z"
              fill="currentColor"
              opacity="0.05"
            />
            <path
              d="M 140 120 L 200 90 L 200 75 L 140 105 Z"
              fill="var(--color-surface-container-highest)"
              stroke="currentColor"
              strokeLinejoin="round"
            />
            <path
              d="M 140 105 L 200 75 L 195 72 L 135 102 Z"
              fill="var(--color-surface)"
              stroke="currentColor"
              strokeLinejoin="round"
            />
            <path
              d="M 135 102 L 140 105 L 140 120 L 135 117 Z"
              fill="var(--color-surface-container)"
              stroke="currentColor"
              strokeLinejoin="round"
            />
            <g opacity="0.6" stroke="var(--color-error)" strokeWidth="4">
              <path d="M 145 117 L 145 102" />
              <path d="M 155 112 L 155 97" />
              <path d="M 165 107 L 165 92" />
              <path d="M 175 102 L 175 87" />
              <path d="M 185 97 L 185 82" />
              <path d="M 195 92 L 195 77" />
            </g>
          </g>

          <g transform="translate(160, 35) scale(2)">
            <g
              fill="var(--color-surface)"
              stroke="var(--color-error)"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M 0 20 L 10 0 L 20 20 Z" />
              <path d="M 5 17 L 10 7 L 15 17 Z" fill="none" strokeWidth="1" />
              <circle
                cx="10"
                cy="14"
                fill="var(--color-error)"
                r="1.5"
                stroke="none"
              />
              <path d="M 10 9 L 10 12" fill="none" />
            </g>
          </g>

          <g
            className="font-mono text-[10px] text-primary"
            strokeOpacity="0.4"
            strokeWidth="1"
          >
            <path d="M 320 100 L 320 180" strokeDasharray="4 4" />
            <path d="M 315 180 L 325 180" />
            <text fill="currentColor" stroke="none" x="330" y="140">
              END_OF_ROUTE
            </text>
          </g>
        </svg>
      </div>

      <h2 className="mb-space-sm max-w-lg text-headline-lg text-primary leading-tight">
        {title}
      </h2>
      <p className="mb-space-lg max-w-md text-body-lg text-secondary">
        {message}
      </p>

      <Link
        className="inline-flex cursor-pointer items-center justify-center rounded-md bg-primary px-8 py-3 text-label-lg text-on-primary uppercase tracking-widest transition-colors hover:bg-primary-container hover:text-on-primary-container"
        href="/"
      >
        Return to Showroom
      </Link>
    </div>
  );
}
