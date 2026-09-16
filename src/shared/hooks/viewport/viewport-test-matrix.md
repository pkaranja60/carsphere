# Viewport Hook — Device & Environment Test Matrix

This document covers every scenario the viewport hook system must handle correctly, which browser APIs provide the relevant data, and what limitations exist.

---

## 1. Phones

| Scenario | Key Measurements | API Source | Limitations |
|---|---|---|---|
| Small Android (360×640) | width=360, height=640, DPR=2-3 | `clientWidth`, `devicePixelRatio` | — |
| Large Android (412×915) | width=412, height=915, DPR=2.6 | `clientWidth`, `devicePixelRatio` | DPR varies by OEM |
| iPhone-style (390×844) | width=390, safeArea.top>0, safeArea.bottom>0 | `clientWidth`, CSS `env()` probe | Safe area only readable via computed style trick |
| Landscape phone | orientation='landscape', width>height | `clientWidth/Height`, `screen.orientation` | Orientation API may lag behind actual rotation by ~100ms |

---

## 2. Tablets

| Scenario | Key Measurements | API Source | Limitations |
|---|---|---|---|
| Small tablet portrait (768×1024) | breakpoint='md' | `clientWidth` | — |
| Large tablet portrait (1024×1366) | breakpoint='lg' | `clientWidth` | — |
| iPad split view (50/50) | width ≈ 507 on 10.9" iPad | `clientWidth` | The device is a "tablet" but the viewport is phone-sized. `screen.width` still reports 1024. |
| iPad slide-over | width ≈ 320 | `clientWidth` | App viewport is tiny despite large screen. This is why responsive decisions must use viewport width, not device classification. |
| Android split screen | width = ~50% of screen | `clientWidth` | `screen.width` is unchanged. Only the layout viewport reflects the split. |

---

## 3. Foldables

| Scenario | Key Measurements | API Source | Limitations |
|---|---|---|---|
| Single-screen mode | segments=[], isSegmented=false | `getWindowSegments()` | API is experimental, Edge-only |
| Dual-segment (unfolded) | segments=[{...}, {...}], isSegmented=true | `getWindowSegments()` | Returns DOMRect[] with hinge gap |
| Folded orientation | Narrower width, orientation changes | `clientWidth`, `screen.orientation` | No API to detect fold angle |

> **Browser support:** The Window Segments API (`getWindowSegments()`) is only available in Microsoft Edge on Surface Duo-class devices. On all other browsers, `segments` will be an empty array and `isSegmented` will be false. The hook never fabricates segment data.

---

## 4. Desktop

| Scenario | Key Measurements | API Source | Limitations |
|---|---|---|---|
| 1080p (1920×1080) fullscreen | width=1920, DPR=1 | `clientWidth`, `devicePixelRatio` | — |
| 1440p (2560×1440) | width=2560, DPR=1 | `clientWidth` | — |
| 4K (3840×2160) with 200% scaling | width=1920, DPR=2 | `clientWidth`, `devicePixelRatio` | OS scaling is indistinguishable from browser zoom in DPR |
| Ultrawide (3440×1440) | width=3440, aspectRatio≈2.39 | `clientWidth` | — |
| Browser at 100% width | width = screen.availWidth | `clientWidth` | — |
| Browser at 50% width | width ≈ screen.availWidth/2 | `clientWidth` | `screen.width` unchanged; only viewport reflects window size |
| Arbitrary resized window | width/height = whatever | `clientWidth/Height` | — |

---

## 5. Interaction Modes

| Scenario | Detected Via | Values | Limitations |
|---|---|---|---|
| Mouse only | `matchMedia('(pointer: fine)')`, `matchMedia('(hover: hover)')` | pointer='fine', hover='hover', hasTouch=false | — |
| Touch only | `matchMedia('(pointer: coarse)')`, `'ontouchstart' in window` | pointer='coarse', hover='none', hasTouch=true | — |
| Mouse + touch (hybrid) | `matchMedia('(any-pointer: coarse)')` | pointer='fine', hover='hover', hasTouch=true | Primary pointer is fine (mouse), but touch is available |
| Stylus (fine touch) | `matchMedia('(pointer: fine)')` | pointer='fine', hasTouch=true | Some styluses report fine pointer |

> **Critical:** `hasTouch === true` does NOT mean "mobile device". Desktops with touch monitors, Chromebooks, and convertible laptops all report touch. Never equate touch with device class.

---

## 6. Browser Zoom

| Scenario | Key Measurements | API Source | Limitations |
|---|---|---|---|
| 100% zoom | DPR = native display DPR | `devicePixelRatio` | — |
| 125% zoom | DPR increases proportionally | `devicePixelRatio` + matchMedia `(resolution:)` | Cannot distinguish browser zoom from OS scaling |
| 200% zoom | width halves (in CSS pixels), DPR doubles | `clientWidth`, `devicePixelRatio` | Layout viewport shrinks because CSS pixels get larger |
| Pinch zoom (mobile) | visual.scale > 1, visual.width < layout.width | `visualViewport.scale` | Only available via Visual Viewport API |

> **DPR reactivity:** The hook uses a self-refreshing `matchMedia('(resolution: Xdppx)')` listener. When DPR changes (zoom, monitor switch), the query stops matching, triggers our handler, and we re-register with the new value.

---

## 7. Mobile Browser States

| Scenario | Key Measurements | API Source | Limitations |
|---|---|---|---|
| Chrome expanded (address bar visible) | visual.height < layout.height | `visualViewport` | Amount of chrome varies by browser |
| Chrome collapsed (scrolled) | visual.height ≈ layout.height | `visualViewport` | — |
| Virtual keyboard visible | keyboardLikelyVisible=true, viewportHeightDifference > 150 | `visualViewport.height` vs `clientHeight` | **Inference only.** No reliable keyboard API exists. The 150px threshold is a heuristic. |
| Virtual keyboard dismissed | keyboardLikelyVisible=false | — | — |

> **keyboardLikelyVisible is explicitly an inference.** The browser does not provide a definitive "keyboard is open" API. We compare visual viewport height to layout viewport height and flag it when the difference exceeds `KEYBOARD_HEIGHT_THRESHOLD` (150px). Some browsers (like iOS Safari) also shrink the visual viewport when the address bar expands, which can produce false positives.

---

## 8. Safe Areas

| Scenario | Key Measurements | API Source | Limitations |
|---|---|---|---|
| iPhone notch (portrait) | safeArea.top ≈ 47-59px | CSS `env(safe-area-inset-top)` via probe element | Requires `viewport-fit=cover` in meta tag for non-zero values |
| Dynamic Island | safeArea.top ≈ 59px | CSS `env()` | Same as notch, slightly taller |
| Home indicator | safeArea.bottom ≈ 34px | CSS `env(safe-area-inset-bottom)` | — |
| Android rounded corners | safeArea = 0 on most devices | CSS `env()` | Most Android browsers don't expose corner radius via safe-area |
| Desktop (no safe areas) | safeArea = {0, 0, 0, 0} | — | — |

> **Limitation:** The `<meta name="viewport" content="viewport-fit=cover">` meta tag must be present for CSS `env(safe-area-inset-*)` to report non-zero values. Without it, the browser's default safe-area behavior hides the insets from CSS.

---

## 9. Rendering Environments

| Scenario | Behavior | Notes |
|---|---|---|
| SSR (Next.js/Remix/Astro) | Returns `SERVER_SNAPSHOT` (all zeros, conservative capabilities) | `getServerSnapshot()` is used by `useSyncExternalStore` |
| Hydration | Client reads real values on first render; may differ from server | Use `suppressHydrationWarning` on viewport-dependent elements or defer with `useIsClient()` |
| Client-only rendering | Normal operation | `getSnapshot()` reads DOM immediately |
| React Strict Mode | Subscribe/unsubscribe/re-subscribe cycle | Store handles this via ref-counted listeners |
| React concurrent rendering | Multiple `getSnapshot()` calls per render | Store returns stable reference; no tearing |

---

## 10. Container Viewport Scenarios

| Scenario | useViewport() | useContainerViewport(ref) | Why Container Wins |
|---|---|---|---|
| Full-width content panel | breakpoint='xl' | breakpoint='xl' | Same result — no split |
| Content with 250px sidebar | breakpoint='xl' (window=1440) | breakpoint='lg' (content=1190) | Container correctly reflects reduced space |
| Collapsed sidebar (50px) | breakpoint='xl' (window=1440) | breakpoint='xl' (content=1390) | Container adapts when sidebar collapses |
| Split-pane drag (content=400px) | breakpoint='xl' (window=1440) | breakpoint='xs' (content=400) | Container shows compact layout despite wide window |
| CSS Grid with auto columns | Unchanged | Updates via ResizeObserver | No window resize event fires — only ResizeObserver catches this |

---

## 11. What This Hook Still Cannot Know

| Unknown | Why |
|---|---|
| Physical device dimensions (mm/inches) | No browser API exposes physical measurements |
| Whether the user is holding the device | No sensor API for grip detection |
| Whether a hardware keyboard is connected | `navigator.keyboard` is limited; no reliable detection |
| Whether the virtual keyboard is *definitely* visible | Only inferable via visual viewport height delta (heuristic) |
| Exact hinge geometry on unsupported browsers | Window Segments API is experimental, Edge-only |
| Whether browser chrome is currently visible | Only inferable via visual viewport changes |
| User's physical distance from screen | No API |
| Whether the device is a "phone" vs "tablet" | Meaningless; use viewport width instead |
| Whether the app is in Picture-in-Picture mode | Limited browser support for PiP detection |
| Exact notch dimensions (width, shape) | CSS `env()` gives insets, not geometry |
| OS display scaling vs browser zoom | Both contribute to `devicePixelRatio`; cannot be separated |
| Whether the user has reduced motion preference | Detectable via `matchMedia('(prefers-reduced-motion: reduce)')` but not included in this hook (separate concern) |
