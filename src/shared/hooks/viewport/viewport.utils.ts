import type {
  Orientation,
  ViewportBreakpoints,
  ViewportState,
} from "./viewport.types";

// ─────────────────────────────────────────────
// SECTION: Breakpoint Resolution
// ─────────────────────────────────────────────

/**
 * Resolves the current breakpoint key from a width value and a breakpoints map.
 * Sorts breakpoints descending and returns the first where width >= threshold.
 * Injects a zero-width fallback ('xs') if none is defined in the map.
 */
export function resolveBreakpoint(
  width: number,
  breakpoints: ViewportBreakpoints
): string {
  const hasZeroBreakpoint = Object.values(breakpoints).some((v) => v === 0);
  const effective: ViewportBreakpoints = hasZeroBreakpoint
    ? breakpoints
    : { xs: 0, ...breakpoints };

  const sorted = Object.entries(effective).sort(([, a], [, b]) => b - a);

  for (const [key, minWidth] of sorted) {
    if (width >= minWidth) {
      return key;
    }
  }

  return "xs";
}

// ─────────────────────────────────────────────
// SECTION: Orientation
// ─────────────────────────────────────────────

export function resolveOrientation(width: number, height: number): Orientation {
  return width > height ? "landscape" : "portrait";
}

// ─────────────────────────────────────────────
// SECTION: Snapshot Equality
// ─────────────────────────────────────────────

/**
 * Checks whether two viewport snapshots differ on any field that
 * would require consumers to re-render. Uses explicit field comparisons
 * rather than JSON.stringify for performance on high-frequency updates.
 */
export function hasSnapshotChanged(
  prev: ViewportState,
  next: ViewportState
): boolean {
  return (
    prev.width !== next.width ||
    prev.height !== next.height ||
    prev.orientation !== next.orientation ||
    prev.breakpoint !== next.breakpoint ||
    prev.devicePixelRatio !== next.devicePixelRatio ||
    prev.isZoomed !== next.isZoomed ||
    prev.keyboardLikelyVisible !== next.keyboardLikelyVisible ||
    prev.viewportHeightDifference !== next.viewportHeightDifference ||
    prev.visual?.width !== next.visual?.width ||
    prev.visual?.height !== next.visual?.height ||
    prev.visual?.scale !== next.visual?.scale ||
    prev.visual?.offsetLeft !== next.visual?.offsetLeft ||
    prev.visual?.offsetTop !== next.visual?.offsetTop ||
    prev.safeArea.top !== next.safeArea.top ||
    prev.safeArea.right !== next.safeArea.right ||
    prev.safeArea.bottom !== next.safeArea.bottom ||
    prev.safeArea.left !== next.safeArea.left ||
    prev.segmentCount !== next.segmentCount ||
    prev.screen.width !== next.screen.width ||
    prev.screen.height !== next.screen.height ||
    prev.availableScreen.width !== next.availableScreen.width ||
    prev.availableScreen.height !== next.availableScreen.height ||
    prev.capabilities.hasTouch !== next.capabilities.hasTouch ||
    prev.capabilities.pointer !== next.capabilities.pointer ||
    prev.capabilities.hover !== next.capabilities.hover
  );
}
