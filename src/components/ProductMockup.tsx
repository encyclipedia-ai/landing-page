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

export function ProductMockup() {
  return (
    <div
      aria-hidden="true"
      className="rounded-xl border border-[var(--color-border-strong)] shadow-[0_24px_80px_rgba(0,0,0,0.18)] overflow-hidden select-none"
    >
      {/* ── Browser chrome ──────────────────────────────── */}
      <div className="bg-[var(--color-surface-2)] border-b border-[var(--color-border)] px-4 py-2.5 flex items-center gap-3">
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
      <div className="bg-[var(--color-bg)] px-5 py-6 md:px-8 md:py-8">
        {/* Stream header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <p
              className="mb-1 font-mono uppercase tracking-widest text-[var(--color-accent)]"
              style={{ fontSize: "9px" }}
            >
              Latest stream · done
            </p>
            <h4 className="font-serif font-bold text-[var(--color-ink)] leading-tight text-sm md:text-base">
              Sunday VOD — 4h 12m stream
            </h4>
            <p className="mt-0.5 text-[var(--color-muted)]" style={{ fontSize: "11px" }}>
              3 clips generated · youtube.com
            </p>
          </div>
          <span
            className="rounded-full border border-[var(--color-border)] text-[var(--color-muted)] px-2 py-0.5 shrink-0"
            style={{ fontSize: "10px" }}
          >
            Done
          </span>
        </div>

        {/* Clip card rail */}
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {MOCK_CLIPS.map((clip) => (
            <div
              key={clip.title}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden flex flex-col"
            >
              {/* 9:16 video area */}
              <div
                className="aspect-[9/16] relative"
                style={{ background: clip.bg }}
              >
                {/* Viral score badge */}
                <div className="absolute top-2 right-2">
                  <span
                    className="font-bold rounded-full bg-[var(--color-accent)] text-[var(--color-accent-contrast)] px-1.5 py-0.5"
                    style={{ fontSize: "9px" }}
                  >
                    {clip.score}
                  </span>
                </div>
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white pl-0.5" style={{ fontSize: "11px" }}>
                      ▶
                    </span>
                  </div>
                </div>
                {/* Duration */}
                <div
                  className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-0.5 font-mono"
                  style={{ fontSize: "9px" }}
                >
                  {clip.duration}
                </div>
              </div>

              {/* Card content */}
              <div className="p-2.5 flex flex-col gap-2 flex-1">
                <p
                  className="font-semibold leading-tight line-clamp-2 text-[var(--color-ink)]"
                  style={{ fontSize: "10px" }}
                >
                  {clip.title}
                </p>
                <p
                  className="text-[var(--color-muted)] leading-snug line-clamp-2 hidden md:block"
                  style={{ fontSize: "9px" }}
                >
                  {clip.summary}
                </p>
                <div className="mt-auto flex gap-1.5">
                  <button
                    className="flex-1 uppercase tracking-wide rounded py-1 bg-[var(--color-accent)] text-[var(--color-accent-contrast)] font-semibold"
                    style={{ fontSize: "9px" }}
                  >
                    Play
                  </button>
                  <button
                    className="flex-1 uppercase tracking-wide rounded py-1 border border-[var(--color-border-strong)] text-[var(--color-muted)]"
                    style={{ fontSize: "9px" }}
                  >
                    ↓ Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
