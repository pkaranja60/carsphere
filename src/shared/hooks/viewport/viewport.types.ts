// ─────────────────────────────────────────────
// SECTION: Configuration
// ─────────────────────────────────────────────

export interface ViewportBreakpoints {
  [key: string]: number;
}

export interface ViewportConfig {
  breakpoints?: ViewportBreakpoints;
}

// ─────────────────────────────────────────────
// SECTION: Primitives
// ─────────────────────────────────────────────

export type Orientation = "portrait" | "landscape";

export type PointerType = "none" | "coarse" | "fine";

export type HoverType = "none" | "hover";

// ─────────────────────────────────────────────
// SECTION: Composite Types
// ─────────────────────────────────────────────

export interface SafeArea {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

export interface ViewportSegment {
  height: number;
  width: number;
  x: number;
  y: number;
}

export interface VisualViewportInfo {
  height: number;
  offsetLeft: number;
  offsetTop: number;
  scale: number;
  width: number;
}

export interface ScreenInfo {
  height: number;
  width: number;
}

export interface ViewportCapabilities {
  hasTouch: boolean;
  hover: HoverType;
  pointer: PointerType;
  supportsResizeObserver: boolean;
  supportsScreenOrientation: boolean;
  supportsVisualViewport: boolean;
  supportsWindowSegments: boolean;
}

// ─────────────────────────────────────────────
// SECTION: State Types
// ─────────────────────────────────────────────

export interface ViewportState {
  /** Width / height ratio. 0 when height is 0. */
  aspectRatio: number;
  /** Available screen minus OS chrome (taskbar, dock) */
  availableScreen: ScreenInfo;

  /** Current breakpoint key based on width and configured breakpoints */
  breakpoint: string;

  /** Input and API capabilities detected via matchMedia and feature checks */
  capabilities: ViewportCapabilities;

  devicePixelRatio: number;
  /** Layout viewport height in CSS pixels (excludes scrollbar) */
  height: number;
  /** True when devicePixelRatio > 1 */
  isHighDPR: boolean;
  isLandscape: boolean;
  isPortrait: boolean;
  /** True when device exposes multiple viewport segments */
  isSegmented: boolean;
  /** True when visual viewport scale deviates from 1.0 */
  isZoomed: boolean;

  /**
   * Inferred from visual viewport height being substantially smaller
   * than layout viewport height. NOT a reliable keyboard detection API.
   */
  keyboardLikelyVisible: boolean;

  /** Layout viewport dimensions (document.documentElement.client*) */
  layout: ScreenInfo;

  orientation: Orientation;

  /** Device safe-area insets (notch, home indicator, rounded corners) */
  safeArea: SafeArea;

  /** Physical screen dimensions in CSS pixels */
  screen: ScreenInfo;
  segmentCount: number;

  /** Foldable device viewport segments. Empty when unsupported. */
  segments: ViewportSegment[];
  /** Layout viewport height minus visual viewport height in CSS pixels */
  viewportHeightDifference: number;

  /** Visual viewport state, null when API unavailable */
  visual: VisualViewportInfo | null;
  /** Layout viewport width in CSS pixels (excludes scrollbar) */
  width: number;
}

export interface ContainerViewportState {
  aspectRatio: number;
  breakpoint: string;
  /** Container element height in CSS pixels */
  height: number;
  orientation: Orientation;
  /** Container element width in CSS pixels */
  width: number;
}
