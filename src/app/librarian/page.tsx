import type { Metadata } from "next";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LatestLibrarianDownloads } from "@/components/LatestLibrarianDownloads";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://app.encyclipedia.ai";

export const metadata: Metadata = {
  title: "Encyclipedia Librarian",
  description:
    "Learn why Encyclipedia uses the required Librarian desktop app and download the latest release for macOS, Windows, or Linux.",
};

const steps = [
  {
    number: "01",
    title: "Sign in",
    body: "Use the same Encyclipedia account as the web app. Onboarding confirms Librarian is connected before enabling clipping.",
  },
  {
    number: "02",
    title: "Download locally",
    body: "Librarian claims your queued jobs and downloads source media on your computer, where browser authentication is available.",
  },
  {
    number: "03",
    title: "Hand off securely",
    body: "It uploads only the media and captions required for your job. The renderer creates vertical clips and returns them to your library.",
  },
  {
    number: "04",
    title: "Stay current",
    body: "Updates download automatically and install only after queued, local, and renderer-waiting jobs have finished.",
  },
];

export default function LibrarianPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border-strong shrink-0">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <span className="crest" aria-hidden>Æ</span>
            <div className="leading-tight text-left">
              <p className="text-xl font-serif tracking-tight text-ink">
                encyclipedia<span className="text-accent">.ai</span>
              </p>
              <p className="text-[10px] smallcaps text-muted">A Library of Clips</p>
            </div>
          </a>
          <nav className="flex items-center gap-3 sm:gap-5">
            <a href="/" className="hidden sm:inline text-sm font-serif text-muted hover:text-ink transition">
              Home
            </a>
            <ThemeToggle />
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center text-sm leading-none font-serif rounded-md bg-accent text-accent-contrast px-3 py-2 hover:bg-accent-strong transition"
            >
              Start clipping
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-[1000px] mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
          <p className="smallcaps text-[11px] text-accent mb-4">
            Required desktop companion
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Meet the <span className="text-accent">Librarian</span>.
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted max-w-3xl mx-auto font-serif italic leading-relaxed">
            Librarian bridges your browser and Encyclipedia&apos;s renderer. It
            downloads source videos on your computer, prepares the media your
            jobs need, and keeps the web app informed while work moves through
            the queue.
          </p>
          <p className="mt-4 text-sm text-ink max-w-2xl mx-auto">
            It is required because cloud servers cannot reliably access every
            source video or your local browser session.
          </p>
        </section>

        <section className="border-y border-border bg-surface/40">
          <div className="max-w-[1100px] mx-auto px-6 py-16">
            <p className="smallcaps text-[10px] text-accent mb-2 text-center">
              Why a desktop app?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-10">
              Reliable downloads without sharing your browser.
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Browser access stays local",
                  body: "When YouTube requires authentication, Librarian can use supported browser profiles on your computer. Encyclipedia never receives your browser cookie files.",
                },
                {
                  title: "Jobs wait safely",
                  body: "If Librarian is offline, jobs remain queued instead of failing. Open the app and they resume under the account that submitted them.",
                },
                {
                  title: "The cloud does the rendering",
                  body: "Librarian handles source acquisition and caption preparation. Compute-heavy analysis and vertical rendering still run in Encyclipedia's managed renderer.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-border bg-surface px-6 py-6 text-center"
                >
                  <h3 className="font-serif text-xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-[1100px] mx-auto px-6 py-16 md:py-20">
          <p className="smallcaps text-[10px] text-accent mb-2 text-center">
            How it works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            From your queue to your clip library.
          </h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.number} className="text-center">
                <p className="font-serif text-5xl font-bold text-[var(--color-border-strong)] leading-none">
                  {step.number}
                </p>
                <h3 className="mt-3 font-serif text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="download" className="border-t border-border">
          <div className="max-w-[900px] mx-auto px-6 py-16 md:py-20">
            <p className="smallcaps text-[10px] text-accent mb-2 text-center">
              Latest stable release
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center">
              Download Librarian
            </h2>
            <p className="mt-3 mb-9 text-center text-sm text-muted max-w-2xl mx-auto leading-relaxed">
              Choose your platform, install the app, then sign in with the same
              account you use on Encyclipedia. These links resolve directly from
              the latest stable GitHub release, so this page always offers the
              newest installer.
            </p>
            <LatestLibrarianDownloads />
            <p className="mt-8 text-center text-xs text-muted">
              Already installed? Librarian downloads future updates in the
              background and restarts only when its job queue is idle.
            </p>
          </div>
        </section>

        <section className="max-w-[1000px] mx-auto px-6 py-20 border-t border-border text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Install once. Keep clipping.
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-7 font-serif italic">
            Onboarding verifies Librarian is signed in and online before your
            first clipping job.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#download"
              className="inline-flex items-center justify-center rounded-md bg-accent text-accent-contrast px-7 py-3 font-serif leading-none hover:bg-accent-strong transition"
            >
              Download Librarian
            </a>
            <a
              href={`${APP_URL}/onboarding`}
              className="inline-flex items-center justify-center rounded-md border border-border-strong px-7 py-3 font-serif leading-none text-ink hover:border-accent transition"
            >
              Start guided setup
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-strong">
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <a href="/" className="flex items-center gap-3 hover:text-ink transition">
            <span className="crest" aria-hidden>Æ</span>
            <span className="font-serif">
              encyclipedia<span className="text-accent">.ai</span>
            </span>
          </a>
          <div className="flex items-center gap-5">
            <a href="/librarian" className="text-ink">Librarian</a>
            <a href="/terms" className="hover:text-ink transition">Terms</a>
            <a href="/privacy" className="hover:text-ink transition">Privacy</a>
          </div>
          <p>© {new Date().getFullYear()} encyclipedia.ai</p>
        </div>
      </footer>
    </div>
  );
}
