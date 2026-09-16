import type { ViewportBreakpoints, ViewportState } from "./viewport.types";

// ─────────────────────────────────────────────
// SECTION: Breakpoint Defaults
// ─────────────────────────────────────────────

export const DEFAULT_BREAKPOINTS: ViewportBreakpoints = {
  "2xl": 1536,
  lg: 1024,
  md: 768,
  sm: 640,
  xl: 1280,
  xs: 0,
};

// ─────────────────────────────────────────────
// SECTION: Thresholds
// ─────────────────────────────────────────────

/**
 * Minimum height difference between layout and visual viewport
 * before we infer that a virtual keyboard is likely visible.
 * This is a heuristic, not a reliable detection mechanism.
 */
export const KEYBOARD_HEIGHT_THRESHOLD = 150;

// ─────────────────────────────────────────────
// SECTION: SSR Defaults
// ─────────────────────────────────────────────

export const SERVER_SNAPSHOT: ViewportState = {
  aspectRatio: 0,
  availableScreen: { height: 0, width: 0 },

  breakpoint: "xs",

  capabilities: {
    hasTouch: false,
    hover: "hover",
    pointer: "fine",
    supportsResizeObserver: false,
    supportsScreenOrientation: false,
    supportsVisualViewport: false,
    supportsWindowSegments: false,
  },

  devicePixelRatio: 1,
  height: 0,
  isHighDPR: false,
  isLandscape: false,
  isPortrait: true,
  isSegmented: false,
  isZoomed: false,

  keyboardLikelyVisible: false,

  layout: { height: 0, width: 0 },

  orientation: "portrait",

  safeArea: { bottom: 0, left: 0, right: 0, top: 0 },

  screen: { height: 0, width: 0 },
  segmentCount: 0,

  segments: [],
  viewportHeightDifference: 0,

  visual: null,
  width: 0,
};
