/**
 * Browser-frame mockup of the encyclipedia.ai dashboard.
 *
 * Replicates the real DrawerClipCard design using the same CSS variable
 * tokens as the app so the mockup stays in sync with any theme changes.
 * Marked aria-hidden — purely decorative for sighted users.
 *
 * To replace with real screenshots later, swap the card inner content
 * with an <img> tag; the outer grid and browser-chrome shell stay the same.
 */

const MOCK_CLIPS = [
  {
    title: "The moment nobody saw coming",
    summary: "Unexpected twist that sent chat into meltdown — pure reaction gold.",
    score: 9.4,
    duration: "0:24",
    bg: "#1c1917",
  },
  {
    title: "Four hours of pain in 28 seconds",
    summary: "The overtime clutch play condensed into a perfect short-form arc.",
    score: 8.7,
    duration: "0:28",
    bg: "#1e1b18",
  },
  {
    title: '"I can\'t believe chat did that"',
    summary: "Streamer reaction moment — pure comedic timing, no context needed.",
    score: 8.1,
    duration: "0:19",
    bg: "#1a1a18",
  },
];

type ProductMockupProps = {
  activeStep?: number;
};

const SCENES = [
  {
    eyebrow: "Connected profile mode",
    title: "Clip your latest stream with one click",
    subtitle: "Profile connected: @atlas_streams · Source linked",
    status: "Queued",
    action: "connected" as const,
    readyCount: 0,
  },
  {
    eyebrow: "Premium mode",
    title: "Paste any stream or video URL to clip",
    subtitle: "Premium unlocks clipping from any creator link",
    status: "Processing",
    action: "premium-url" as const,
    readyCount: 1,
  },
  {
    eyebrow: "Library ready",
    title: "Review and download your best moments",
    subtitle: "Three vertical clips exported and ready to post",
    status: "Ready",
    action: "results" as const,
    readyCount: 3,
  },
];

export function ProductMockup({ activeStep = 2 }: ProductMockupProps) {
  const scene = SCENES[Math.min(Math.max(activeStep, 0), SCENES.length - 1)];

  return (
    <div
      aria-hidden="true"
      className="rounded-xl border border-[var(--color-border-strong)] bg-transparent shadow-[0_24px_80px_rgba(0,0,0,0.18)] overflow-hidden select-none min-h-[520px] md:min-h-[600px]"
    >
      {/* ── Browser chrome ──────────────────────────────── */}
      <div className="bg-transparent border-b border-[var(--color-border)] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-[var(--color-bg)] rounded border border-[var(--color-border)] text-[11px] text-[var(--color-muted)] px-3 py-0.5 w-60 text-center truncate font-mono">
            app.encyclipedia.ai/dashboard
          </div>
        </div>
      </div>

      {/* ── App shell ───────────────────────────────────── */}
      <div className="bg-transparent px-5 py-8 md:px-8 md:py-10">
        <div className="mb-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-3.5">
          <p className="smallcaps text-[10px] text-[var(--color-accent)] mb-1">{scene.eyebrow}</p>
          <h5 className="font-serif font-bold text-[var(--color-ink)] text-sm leading-tight">{scene.title}</h5>
          <p className="mt-1 text-[11px] text-[var(--color-muted)]">{scene.subtitle}</p>

          <div className="mt-3 overflow-hidden">
            <div
              className={`transition-all duration-700 ease-in-out ${
                scene.action === "results"
                  ? "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
                  : "max-h-48 opacity-100 translate-y-0"
              }`}
            >
              {scene.action === "connected" && (
                <div className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] p-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] text-[var(--color-muted)] font-mono">Latest from connected profile</span>
                    <span className="rounded-full border border-[var(--color-border)] px-1.5 py-0.5 text-[9px] text-[var(--color-muted)]">Live</span>
                  </div>
                  <button
                    className="mt-2 w-full uppercase tracking-wide rounded py-1.5 bg-[var(--color-accent)] text-[var(--color-accent-contrast)] font-semibold"
                    style={{ fontSize: "9px" }}
                  >
                    Clip latest stream
                  </button>
                </div>
              )}

              {scene.action === "premium-url" && (
                <div className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] p-2.5">
                  <div className="flex items-center gap-2 rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1">
                    <span className="text-[9px] text-[var(--color-muted)] font-mono truncate">stream.example/video/clip-source-123</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="rounded-full bg-[var(--color-accent)] px-1.5 py-0.5 text-[9px] font-semibold text-[var(--color-accent-contrast)]">Premium</span>
                    <button
                      className="flex-1 uppercase tracking-wide rounded py-1.5 bg-[var(--color-accent)] text-[var(--color-accent-contrast)] font-semibold"
                      style={{ fontSize: "9px" }}
                    >
                      Clip this URL
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div
              className={`transition-all duration-700 ease-in-out ${
                scene.action === "results"
                  ? "max-h-[260px] opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <div className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] p-2.5">
                <p className="text-[10px] text-[var(--color-muted)] font-mono">3 clips ready · 2 sources · 9:16 export</p>
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  {MOCK_CLIPS.map((clip) => (
                    <div key={clip.title} className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
                      <div className="aspect-[9/16] relative" style={{ background: clip.bg }}>
                        <div className="absolute top-1 right-1">
                          <span className="font-bold rounded-full bg-[var(--color-accent)] text-[var(--color-accent-contrast)] px-1 py-0.5" style={{ fontSize: "8px" }}>
                            {clip.score}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-0.5 font-mono" style={{ fontSize: "8px" }}>
                          {clip.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex gap-1.5">
                  <button
                    className="flex-1 uppercase tracking-wide rounded py-1.5 bg-[var(--color-accent)] text-[var(--color-accent-contrast)] font-semibold"
                    style={{ fontSize: "9px" }}
                  >
                    Download all
                  </button>
                  <button
                    className="flex-1 uppercase tracking-wide rounded py-1.5 border border-[var(--color-border-strong)] text-[var(--color-muted)]"
                    style={{ fontSize: "9px" }}
                  >
                    Recut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stream header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <p
              className="mb-1 font-mono uppercase tracking-widest text-[var(--color-accent)]"
              style={{ fontSize: "9px" }}
            >
              Stream library · {scene.status.toLowerCase()}
            </p>
            <h4 className="font-serif font-bold text-[var(--color-ink)] leading-tight text-sm md:text-base">
              Sunday VOD — 4h 12m stream
            </h4>
            <p className="mt-0.5 text-[var(--color-muted)]" style={{ fontSize: "11px" }}>
              {scene.readyCount}/3 clips ready · multi-platform source
            </p>
          </div>
          <span
            className={`rounded-full border px-2 py-0.5 shrink-0 ${
              scene.status !== "Ready"
                ? "border-[var(--color-accent)] text-[var(--color-accent)]"
                : "border-[var(--color-border)] text-[var(--color-muted)]"
            }`}
            style={{ fontSize: "10px" }}
          >
            {scene.status}
          </span>
        </div>

      </div>
    </div>
  );
}
