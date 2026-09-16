// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface ConstructionBannerProps {
  message?: string;
  title?: string;
}

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function ConstructionBanner({
  title = "Showroom is under construction",
  message = "Our digital experience is currently being built. We'll be ready for your visit soon.",
}: ConstructionBannerProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center">
      <div className="relative mb-space-xs flex w-full max-w-xl justify-center text-primary">
        <div className="absolute inset-0 z-0 m-auto h-40 w-40 rounded-full bg-primary/20 blur-3xl" />

        <svg
          className="relative z-10 h-auto w-full max-w-xl opacity-90"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 400 280"
        >
          <title>CarSphere Showroom Under Construction</title>

          <g strokeOpacity="0.15" strokeWidth="1">
            <path d="M 200 40 L 40 120 M 240 60 L 80 140 M 280 80 L 120 160 M 320 100 L 160 180 M 360 120 L 200 200" />
            <path d="M 200 40 L 360 120 M 160 60 L 320 140 M 120 80 L 280 160 M 80 100 L 240 180 M 40 120 L 200 200" />
            <path
              d="M 200 200 L 200 240 M 160 180 L 160 220 M 240 180 L 240 220"
              strokeDasharray="2 4"
            />
          </g>

          <g
            className="font-mono text-[10px] text-primary"
            strokeOpacity="0.4"
            strokeWidth="1"
          >
            <path d="M 40 130 L 190 205" />
            <path d="M 40 125 L 40 135 M 190 200 L 190 210" />
            <text
              fill="currentColor"
              stroke="none"
              transform="rotate(26 100 185)"
              x="100"
              y="185"
            >
              GRID_X: 840
            </text>

            <path d="M 360 130 L 210 205" />
            <path d="M 360 125 L 360 135 M 210 200 L 210 210" />
            <text
              fill="currentColor"
              stroke="none"
              transform="rotate(-26 280 185)"
              x="280"
              y="185"
            >
              LAYOUT_Y: 1024
            </text>
          </g>

          <g transform="translate(100, 20)">
            <path
              d="M 100 80 L 160 110 L 100 140 L 40 110 Z"
              fill="var(--color-surface-container-highest)"
              strokeOpacity="0.3"
            />
            <path d="M 100 80 L 160 110 L 100 140 L 40 110 Z" strokeWidth="2" />
            <path d="M 40 110 L 40 120 L 100 150 L 160 120 L 160 110" />
            <path d="M 100 140 L 100 150" />
            <path
              d="M 95 110 L 105 110 M 100 105 L 100 115"
              strokeOpacity="0.5"
            />
          </g>

          <g transform="translate(140, 0)">
            <g
              className="motion-safe:animate-bounce"
              style={{ animationDuration: "4s" }}
            >
              <path
                d="M 100 80 L 130 95 L 100 110 L 70 95 Z"
                fill="var(--color-surface)"
              />
              <path d="M 100 80 L 130 95 L 100 110 L 70 95 Z" />
              <path d="M 70 95 L 70 125 L 100 140 L 130 125 L 130 95" />
              <path d="M 100 110 L 100 140" />
            </g>
          </g>

          <g transform="translate(100, 12) scale(0.6)">
            <g
              className="motion-safe:animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "5s" }}
            >
              <path
                d="M 100 80 L 130 95 L 100 110 L 70 95 Z"
                fill="var(--color-surface)"
              />
              <path d="M 100 80 L 130 95 L 100 110 L 70 95 Z" />
              <path d="M 70 95 L 70 125 L 100 140 L 130 125 L 130 95" />
              <path d="M 100 110 L 100 140" />
            </g>
          </g>

          <g transform="translate(60, 90)">
            <ellipse
              cx="60"
              cy="50"
              fill="var(--color-surface-container)"
              rx="30"
              ry="15"
            />
            <ellipse cx="60" cy="50" rx="30" ry="15" />
            <path d="M 30 50 L 30 70 A 30 15 0 0 0 90 70 L 90 50" />
            <ellipse cx="60" cy="50" rx="15" ry="7.5" strokeOpacity="0.5" />
            <path d="M 45 50 L 75 50 M 60 42.5 L 60 57.5" strokeOpacity="0.3" />
          </g>

          <g transform="translate(258, 118) scale(1.8)">
            <g
              className="motion-safe:animate-spin"
              style={{ animationDuration: "8s", transformOrigin: "12px 12px" }}
            >
              <circle cx="12" cy="12" fill="var(--color-surface)" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06-.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </g>
          </g>

          <g
            className="motion-safe:animate-pulse"
            style={{ animationDuration: "3s" }}
            transform="translate(90, 160) rotate(-30) scale(1.4)"
          >
            <path
              d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
              fill="var(--color-surface)"
            />
          </g>

          <g strokeOpacity="0.8" transform="translate(200, 70)">
            <circle cx="0" cy="0" fill="var(--color-surface)" r="4" />
            <path d="M -8 0 L 8 0 M 0 -8 L 0 8" strokeWidth="1" />
          </g>
          <g strokeOpacity="0.8" transform="translate(130, 210)">
            <circle cx="0" cy="0" fill="var(--color-surface)" r="4" />
            <path d="M -8 0 L 8 0 M 0 -8 L 0 8" strokeWidth="1" />
          </g>

          <path
            className="motion-safe:animate-ping"
            d="M 320 60 L 320 70 M 315 65 L 325 65"
            strokeWidth="1.5"
            style={{ animationDuration: "2s" }}
          />
          <path
            className="motion-safe:animate-ping"
            d="M 80 40 L 80 50 M 75 45 L 85 45"
            strokeWidth="1.5"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          />
        </svg>
      </div>
      <h2 className="mb-space-sm max-w-lg text-headline-lg text-primary leading-tight">
        {title}
      </h2>
      <p className="max-w-md text-body-lg text-secondary">{message}</p>
    </div>
  );
}
