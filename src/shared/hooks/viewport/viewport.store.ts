import {
  DEFAULT_BREAKPOINTS,
  KEYBOARD_HEIGHT_THRESHOLD,
  SERVER_SNAPSHOT,
} from "./viewport.constants";
import {
  readAvailableScreen,
  readCapabilities,
  readDevicePixelRatio,
  readLayoutViewport,
  readSafeArea,
  readScreen,
  readSegments,
  readVisualViewport,
} from "./viewport.readers";
import type { ViewportState } from "./viewport.types";
import {
  hasSnapshotChanged,
  resolveBreakpoint,
  resolveOrientation,
} from "./viewport.utils";

// ─────────────────────────────────────────────
// SECTION: Store State
// ─────────────────────────────────────────────

const listeners = new Set<() => void>();
let snapshot: ViewportState = SERVER_SNAPSHOT;
let rafId: number | null = null;
let initialized = false;

// ─────────────────────────────────────────────
// SECTION: Snapshot Computation
// ─────────────────────────────────────────────

function computeSnapshot(): ViewportState {
  const layout = readLayoutViewport();
  const visual = readVisualViewport();
  const screenInfo = readScreen();
  const availableScreen = readAvailableScreen();
  const dpr = readDevicePixelRatio();
  const segments = readSegments();
  const safeArea = readSafeArea();
  const capabilities = readCapabilities();

  const { width, height } = layout;
  const orientation = resolveOrientation(width, height);
  const breakpoint = resolveBreakpoint(width, DEFAULT_BREAKPOINTS);

  const visualHeight = visual?.height ?? height;
  const viewportHeightDifference = height - visualHeight;
  const keyboardLikelyVisible =
    viewportHeightDifference > KEYBOARD_HEIGHT_THRESHOLD;
  const isZoomed = visual !== null && Math.abs(visual.scale - 1) > 0.01;

  return {
    aspectRatio: height > 0 ? width / height : 0,
    availableScreen,

    breakpoint,
    capabilities,

    devicePixelRatio: dpr,
    height,
    isHighDPR: dpr > 1,
    isLandscape: orientation === "landscape",
    isPortrait: orientation === "portrait",
    isSegmented: segments.length > 1,
    isZoomed,

    keyboardLikelyVisible,

    layout,

    orientation,

    safeArea,

    screen: screenInfo,
    segmentCount: segments.length,

    segments,
    viewportHeightDifference,

    visual,
    width,
  };
}

// ─────────────────────────────────────────────
// SECTION: Event Handling
// ─────────────────────────────────────────────

function scheduleUpdate(): void {
  if (rafId !== null) {
    return;
  }

  rafId = requestAnimationFrame(() => {
    rafId = null;
    const next = computeSnapshot();

    if (hasSnapshotChanged(snapshot, next)) {
      snapshot = next;

      for (const listener of listeners) {
        listener();
      }
    }
  });
}

// ─────────────────────────────────────────────
// SECTION: Listener Lifecycle
// ─────────────────────────────────────────────

const cleanupFns: Array<() => void> = [];

/**
 * Watches for DPR changes caused by browser zoom, window moving
 * between monitors, or OS display scaling. Uses a self-refreshing
 * matchMedia listener because the DPR value itself changes with
 * each event, requiring a new query for the updated value.
 */
function setupDprWatcher(): () => void {
  let active = true;

  const watch = () => {
    if (!active) {
      return;
    }

    const mql = window.matchMedia(
      `(resolution: ${window.devicePixelRatio}dppx)`
    );

    mql.addEventListener(
      "change",
      () => {
        if (!active) {
          return;
        }
        scheduleUpdate();
        watch();
      },
      { once: true }
    );
  };

  watch();
  return () => {
    active = false;
  };
}

function attachListeners(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.addEventListener("resize", scheduleUpdate);
  cleanupFns.push(() => window.removeEventListener("resize", scheduleUpdate));

  if (window.visualViewport) {
    const vv = window.visualViewport;
    vv.addEventListener("resize", scheduleUpdate);
    vv.addEventListener("scroll", scheduleUpdate);
    cleanupFns.push(() => {
      vv.removeEventListener("resize", scheduleUpdate);
      vv.removeEventListener("scroll", scheduleUpdate);
    });
  }

  if (typeof screen !== "undefined" && screen.orientation) {
    screen.orientation.addEventListener("change", scheduleUpdate);
    cleanupFns.push(() =>
      screen.orientation?.removeEventListener("change", scheduleUpdate)
    );
  }

  cleanupFns.push(setupDprWatcher());
}

function detachListeners(): void {
  for (const cleanup of cleanupFns) {
    cleanup();
  }
  cleanupFns.length = 0;

  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

// ─────────────────────────────────────────────
// SECTION: Public API
// ─────────────────────────────────────────────

function initialize(): void {
  if (initialized || typeof window === "undefined") {
    return;
  }
  snapshot = computeSnapshot();
  initialized = true;
}

export function subscribe(listener: () => void): () => void {
  initialize();

  if (listeners.size === 0) {
    attachListeners();
  }

  listeners.add(listener);

  return () => {
    listeners.delete(listener);

    if (listeners.size === 0) {
      detachListeners();
    }
  };
}

export function getSnapshot(): ViewportState {
  initialize();
  return snapshot;
}

export function getServerSnapshot(): ViewportState {
  return SERVER_SNAPSHOT;
}
