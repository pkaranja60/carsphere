import Link from "next/link";

interface NotFoundBannerProps {
  message?: string;
  title?: string;
}

export function NotFoundBanner({
  title = "Destination Unknown",
  message = "The page you are looking for has been moved, deleted, or never existed.",
}: NotFoundBannerProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center">
      <div className="relative mb-space-xl flex justify-center text-primary">
        {/* Ambient glow behind the illustration */}
        <div className="absolute inset-0 z-0 m-auto h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

        <svg
          className="relative z-10 opacity-90"
          fill="none"
          height="280"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 400 280"
          width="400"
        >
          <title>404 Not Found</title>

          {/* Subtle 404 text in background */}
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

          {/* Base Grid Plane - Sparse and broken */}
          <g strokeOpacity="0.15" strokeWidth="1">
            <path d="M 200 40 L 40 120 M 240 60 L 80 140 M 280 80 L 120 160" />
            <path d="M 200 40 L 360 120 M 160 60 L 320 140" />
            <path
              d="M 200 200 L 200 240 M 160 180 L 160 220"
              strokeDasharray="2 4"
            />
          </g>

          {/* An isometric road/bridge that suddenly ends */}
          <g transform="translate(80, 60)">
            {/* Bridge Surface */}
            <path
              d="M 100 40 L 220 100 L 160 130 L 40 70 Z"
              fill="var(--color-surface-container-highest)"
              strokeOpacity="0.5"
            />
            <path d="M 100 40 L 220 100 L 160 130 L 40 70 Z" strokeWidth="2" />

            {/* Bridge depth */}
            <path d="M 40 70 L 40 90 L 160 150 L 220 120 L 220 100" />
            <path d="M 160 130 L 160 150" />

            {/* Centerline */}
            <path d="M 70 55 L 190 115" strokeDasharray="8 8" />

            {/* The broken edge warning marker */}
            <circle
              className="animate-pulse"
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

          {/* Floating detached blocks falling into the void */}
          <g transform="translate(240, 160)">
            <g className="animate-bounce" style={{ animationDuration: "6s" }}>
              <path
                d="M 20 10 L 40 20 L 20 30 L 0 20 Z"
                fill="var(--color-surface)"
              />
              <path d="M 20 10 L 40 20 L 20 30 L 0 20 Z" />
              <path d="M 0 20 L 0 30 L 20 40 L 40 30 L 40 20" />
              <path d="M 20 30 L 20 40" />
            </g>
          </g>

          <g transform="translate(180, 180) scale(0.5)">
            <g
              className="animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "4s" }}
            >
              <path
                d="M 20 10 L 40 20 L 20 30 L 0 20 Z"
                fill="var(--color-surface)"
              />
              <path d="M 20 10 L 40 20 L 20 30 L 0 20 Z" />
              <path d="M 0 20 L 0 30 L 20 40 L 40 30 L 40 20" />
              <path d="M 20 30 L 20 40" />
            </g>
          </g>

          {/* Measurement line pointing to the void */}
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
