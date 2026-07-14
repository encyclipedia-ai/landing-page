export function BooksIntroVisual() {
  const books = [
    {
      title: "Sunday VOD",
      subtitle: "4h 12m stream",
      width: "w-[72%]",
      depth: "h-14",
      tone: "from-[#b56b50] to-[#8f3f2a]",
      border: "border-[#7b3624]",
    },
    {
      title: "Late Night Ranked",
      subtitle: "Queued clips",
      width: "w-[82%]",
      depth: "h-16",
      tone: "from-[#a88c58] to-[#7e6438]",
      border: "border-[#66502c]",
    },
    {
      title: "Patch Day Session",
      subtitle: "Exports ready",
      width: "w-[92%]",
      depth: "h-16",
      tone: "from-[#8b6f4a] to-[#654f33]",
      border: "border-[#564329]",
    },
  ] as const;

  return (
    <section id="books-intro-visual" className="max-w-[1200px] mx-auto px-6 pt-12 md:pt-16 pb-3 md:pb-4">
      <div className="relative rounded-2xl border border-border-strong bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-bg)] px-6 py-10 md:px-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(176,74,47,0.16),_transparent_58%)]" />

        <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="text-center md:text-left">
            <p className="smallcaps text-[10px] text-accent/90 mb-2">Creator clip engine</p>
            <div className="inline-flex items-baseline gap-0.5">
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight leading-none text-ink">
                encyclipedia
              </h2>
              <span className="font-serif text-4xl md:text-5xl font-bold tracking-tight leading-none text-accent">.ai</span>
            </div>
            <div className="mt-3 h-px w-40 md:w-56 bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-border-strong)] to-transparent mx-auto md:mx-0" />
            <p className="mt-3 text-sm md:text-base text-muted max-w-md mx-auto md:mx-0">
              Stream titles on the shelf, ready to be turned into polished short-form clips.
            </p>
          </div>

          <div className="relative h-[260px] md:h-[300px] flex items-end justify-center md:justify-end">
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 w-[95%] md:w-[88%] h-12 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(31,29,26,0.25),_transparent_70%)]" />
            <div className="w-full max-w-[520px] flex flex-col items-center md:items-end gap-3">
              {books.map((book) => (
                <div
                  key={book.title}
                  className={`${book.width} ${book.depth} relative rounded-md border ${book.border} bg-gradient-to-r ${book.tone} shadow-[0_8px_20px_rgba(0,0,0,0.22)]`}
                >
                  <div className="absolute inset-y-0 left-0 w-3 rounded-l-md bg-black/20" />
                  <div className="absolute inset-y-0 left-4 right-3 flex items-center justify-between text-[var(--color-accent-contrast)]">
                    <span className="font-serif text-sm md:text-base tracking-wide">{book.title}</span>
                    <span className="text-[10px] md:text-[11px] font-mono uppercase opacity-90">{book.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
