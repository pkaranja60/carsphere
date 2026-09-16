import type {
  HoverType,
  PointerType,
  SafeArea,
  ScreenInfo,
  ViewportCapabilities,
  ViewportSegment,
  VisualViewportInfo,
} from "./viewport.types";

// ─────────────────────────────────────────────
// SECTION: Layout Viewport
// ─────────────────────────────────────────────

/**
 * Reads the layout viewport from document.documentElement.client*.
 * This excludes the scrollbar, giving the true CSS layout area.
 * Prefer this over window.innerWidth which includes the scrollbar.
 */
export function readLayoutViewport(): ScreenInfo {
  if (typeof document === "undefined") {
    return { height: 0, width: 0 };
  }

  return {
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
  };
}

// ─────────────────────────────────────────────
// SECTION: Visual Viewport
// ─────────────────────────────────────────────

/**
 * Reads the Visual Viewport API which accounts for pinch-zoom,
 * virtual keyboard, and mobile browser chrome changes independently
 * of the layout viewport. Returns null when the API is unavailable.
 */
export function readVisualViewport(): VisualViewportInfo | null {
  if (typeof window === "undefined" || !window.visualViewport) {
    return null;
  }

  const vv = window.visualViewport;

  return {
    height: vv.height,
    offsetLeft: vv.offsetLeft,
    offsetTop: vv.offsetTop,
    scale: vv.scale,
    width: vv.width,
  };
}

// ─────────────────────────────────────────────
// SECTION: Screen
// ─────────────────────────────────────────────

export function readScreen(): ScreenInfo {
  if (typeof screen === "undefined") {
    return { height: 0, width: 0 };
  }

  return { height: screen.height, width: screen.width };
}

export function readAvailableScreen(): ScreenInfo {
  if (typeof screen === "undefined") {
    return { height: 0, width: 0 };
  }

  return { height: screen.availHeight, width: screen.availWidth };
}

// ─────────────────────────────────────────────
// SECTION: Device Pixel Ratio
// ─────────────────────────────────────────────

export function readDevicePixelRatio(): number {
  if (typeof window === "undefined") {
    return 1;
  }

  return window.devicePixelRatio ?? 1;
}

// ─────────────────────────────────────────────
// SECTION: Window Segments (Foldables)
// ─────────────────────────────────────────────

/**
 * Reads viewport segments from the experimental Window Segments API.
 * Currently only supported in Microsoft Edge on Surface Duo-class devices.
 * Returns an empty array when unsupported — never fabricates segment data.
 */
export function readSegments(): ViewportSegment[] {
  if (typeof window === "undefined") {
    return [];
  }

  const win = window as unknown as Record<string, unknown>;
  const getSegments = win.getWindowSegments as (() => DOMRect[]) | undefined;

  if (typeof getSegments !== "function") {
    return [];
  }

  try {
    return getSegments().map((rect) => ({
      height: rect.height,
      width: rect.width,
      x: rect.x,
      y: rect.y,
    }));
  } catch {
    return [];
  }
}

// ─────────────────────────────────────────────
// SECTION: Safe Area
// ─────────────────────────────────────────────

/**
 * Invisible probe element that maps CSS env(safe-area-inset-*) values
 * to computed padding so JavaScript can read them. Injected once into
 * document.body and reused across all subsequent reads.
 *
 * Limitation: CSS env() values are only available in browsers that support
 * them (Safari/iOS, Chrome 87+). On unsupported browsers, all insets
 * will read as 0.
 */
let safeAreaProbe: HTMLElement | null = null;

function ensureSafeAreaProbe(): HTMLElement | null {
  if (typeof document === "undefined") {
    return null;
  }

  if (safeAreaProbe && document.body.contains(safeAreaProbe)) {
    return safeAreaProbe;
  }

  safeAreaProbe = document.createElement("div");
  safeAreaProbe.id = "viewport-safe-area-probe";
  safeAreaProbe.style.cssText = [
    "position:fixed",
    "visibility:hidden",
    "pointer-events:none",
    "padding-top:env(safe-area-inset-top,0px)",
    "padding-right:env(safe-area-inset-right,0px)",
    "padding-bottom:env(safe-area-inset-bottom,0px)",
    "padding-left:env(safe-area-inset-left,0px)",
    "width:0",
    "height:0",
  ].join(";");

  document.body.appendChild(safeAreaProbe);
  return safeAreaProbe;
}

export function readSafeArea(): SafeArea {
  const probe = ensureSafeAreaProbe();

  if (!probe) {
    return { bottom: 0, left: 0, right: 0, top: 0 };
  }

  const style = window.getComputedStyle(probe);

  return {
    bottom: Number.parseFloat(style.paddingBottom) || 0,
    left: Number.parseFloat(style.paddingLeft) || 0,
    right: Number.parseFloat(style.paddingRight) || 0,
    top: Number.parseFloat(style.paddingTop) || 0,
  };
}

// ─────────────────────────────────────────────
// SECTION: Capabilities
// ─────────────────────────────────────────────

function queryMedia(query: string): boolean {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return false;
  }

  try {
    return window.matchMedia(query).matches;
  } catch {
    return false;
  }
}

function resolvePointer(): PointerType {
  if (queryMedia("(pointer: fine)")) {
    return "fine";
  }
  if (queryMedia("(pointer: coarse)")) {
    return "coarse";
  }
  return "none";
}

function resolveHover(): HoverType {
  return queryMedia("(hover: hover)") ? "hover" : "none";
}

/**
 * Touch detection uses multiple signals to avoid false negatives on
 * hybrid devices. A desktop with a touch monitor will correctly
 * report hasTouch = true while still having pointer = 'fine'.
 */
function resolveTouch(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return (
    queryMedia("(any-pointer: coarse)") ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0
  );
}

export function readCapabilities(): ViewportCapabilities {
  if (typeof window === "undefined") {
    return {
      hasTouch: false,
      hover: "hover",
      pointer: "fine",
      supportsResizeObserver: false,
      supportsScreenOrientation: false,
      supportsVisualViewport: false,
      supportsWindowSegments: false,
    };
  }

  const win = window as unknown as Record<string, unknown>;

  return {
    hasTouch: resolveTouch(),
    hover: resolveHover(),
    pointer: resolvePointer(),
    supportsResizeObserver: typeof ResizeObserver !== "undefined",
    supportsScreenOrientation:
      typeof screen !== "undefined" && "orientation" in screen,
    supportsVisualViewport: "visualViewport" in window,
    supportsWindowSegments: typeof win.getWindowSegments === "function",
  };
}
