
import { ThemeToggle } from "@/components/ThemeToggle";
import { BooksIntroVisual } from "@/components/BooksIntroVisual";
import { ScrollProductSimulation } from "@/components/ScrollProductSimulation";
import { FadeInOnView } from "@/components/FadeInOnView";

// Every CTA sends visitors straight into the product. Override via
// NEXT_PUBLIC_APP_URL in env if the app ever moves off app.encyclipedia.ai.
// Treat empty strings as unset — `||` falls back on "" too, so a
// misconfigured CI env var that expands to "" won't bake `href=""` into
// every CTA.
const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://app.encyclipedia.ai";

const features = [
  {
    title: "Auto-clipping",
    body:
      "Drop a stream or video URL. Librarian downloads it securely on your computer, then our AI surfaces the moments most likely to go viral — no manual scrubbing.",
  },
  {
    title: "Review & download",
    body:
      "Browse the candidate clips, pick the ones you want, and download polished vertical MP4s — ready to post to TikTok or anywhere else, on your schedule.",
  },
  {
    title: "Edit & recut in-browser",
    body:
      "Fine-tune any clip without leaving the dashboard — adjust the start and end, recut on the spot, and re-export a fresh vertical version in seconds.",
  },
  {
    title: "Library of every clip",
    body:
      "Every clip you generate stays catalogued by stream and channel, ready to recut, re-export, or re-download later.",
  },
];

const roadmap = [
  {
    title: "Auto-clip the moment a stream ends",
    body:
      "The instant your stream goes offline, encyclipedia.ai starts processing — your first vertical clips are ready before you've even shut down OBS. Built for streamers, not VOD editors.",
  },
  {
    title: "Broader source coverage",
    body:
      "Connect and clip across major streaming and video platforms with one workflow. Included in your subscription, no upgrade tier.",
  },
  {
    title: "Sharper clip generation",
    body:
      "Ongoing upgrades to how we find and cut moments — tighter boundaries, better hooks, and fewer misses, so more of every stream turns into clips worth posting.",
  },
  {
    title: "Deeper clip editing",
    body:
      "More control in the editor: trim and reframe, tweak captions, swap hooks, and tune each clip before it ships — all in the browser.",
  },
  {
    title: "Smart vertical reframing",
    body:
      "Auto 9:16 reframing with speaker tracking and captions, so clips are TikTok-ready without an editor. Currently in development.",
  },
  {
    title: "Every streaming platform as a source",
    body:
      "From livestream platforms to uploaded video libraries and direct file uploads. If it has moments, we'll clip it.",
  },
  {
    title: "One-click publishing",
    body:
      "Today you download your clips and post them yourself. Next: review, pick, and publish or schedule straight to TikTok from one queue — with retries and status, no manual upload.",
  },
  {
    title: "Every social platform as a destination",
    body:
      "After TikTok publishing: Instagram Reels, Shorts, X, Facebook, and LinkedIn — publish or schedule from one queue.",
  },
  {
    title: "Creator-tuned vision models",
    body:
      "A vision model fine-tuned per creator that learns what your audience reacts to — your bits, your callbacks, your faces. The biggest leap in clip quality nobody else is building.",
  },
  {
    title: "Mobile review app",
    body:
      "Review and approve clips on the go, with the same workflow as the desktop dashboard. Currently in development.",
  },
];

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: 10,
    tagline: "For one creator, one channel.",
    features: [
      "Bind one creator profile to your account",
      "Unlimited clipping from your bound channel",
      "Real-time auto-clipping the moment your stream goes live",
      "Full clip library with recut & re-export",
      "Clips stored for 30 days",
      "Download every clip as a ready-to-post vertical MP4",
      "Required Librarian desktop companion included",
    ],
    highlighted: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: 30,
    tagline: "Clip from anywhere across platforms.",
    features: [
      "Everything in Basic",
      "Clip from any supported URL — not just your bound channel",
      "Browse and clip from any creator's uploads, streams, or VODs",
      "Clips stored for 90 days",
      "Priority job processing",
    ],
    highlighted: true,
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need to install anything?",
    a: "Yes. Encyclipedia Librarian is a required desktop companion for macOS, Windows, or Linux. It signs in to your account, downloads source media on your computer, and hands it securely to our renderer. Onboarding verifies that Librarian is installed, signed in, and online before you can continue.",
  },
  {
    q: "Is it really unlimited?",
    a: "Yes. No credits, no per-clip charges, no monthly cap on streams or clips. As long as you're using it the way a creator would, you'll never see a limit.",
  },
  {
    q: "How is this different from Opus, Spikes, or Wayin?",
    a: "They sell credits. We don't. Their pricing is built around limiting how much you can clip; ours is built around clipping as much as you want for a flat monthly rate. We're also building specifically for live streamers, not VOD editors — see the auto-clip-when-stream-ends roadmap.",
  },
  {
    q: "What if I stream for 4+ hours?",
    a: "Long streams are exactly what this is built for. encyclipedia.ai watches the entire stream, no length cap.",
  },
  {
    q: "Does it work across streaming and video platforms?",
    a: "Yes. The product is designed to work across major streaming and video platforms with one workflow. Coverage keeps expanding and your subscription includes new platform support as it ships — no upgrade tier.",
  },
  {
    q: "How do I get my clips out?",
    a: "After a stream is processed, you review the candidate clips in your dashboard, pick the ones you like, and download them as ready-to-post vertical MP4s — then post to TikTok or anywhere else yourself. One-click publishing and scheduling straight from the dashboard is on the roadmap.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Monthly subscription, cancel from your dashboard. No annual lock-in.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border-strong shrink-0">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <span className="crest" aria-hidden>Æ</span>
            <div className="leading-tight text-left">
              <h1 className="text-xl font-serif tracking-tight">
                encyclipedia<span className="text-accent">.ai</span>
              </h1>
              <p className="text-[10px] smallcaps text-muted">A Library of Clips</p>
            </div>
          </a>
          <nav className="flex items-center gap-3 sm:gap-5">
            <a href="#features" className="hidden sm:inline text-sm font-serif text-muted hover:text-ink transition">
              Features
            </a>
            <a href="#pricing" className="hidden sm:inline text-sm font-serif text-muted hover:text-ink transition">
              Pricing
            </a>
            <a href="#roadmap" className="hidden md:inline text-sm font-serif text-muted hover:text-ink transition">
              Roadmap
            </a>
            <a href="#faq" className="hidden md:inline text-sm font-serif text-muted hover:text-ink transition">
              FAQ
            </a>
            <ThemeToggle />
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center text-sm leading-none font-serif rounded-md bg-accent text-accent-contrast px-3 py-2 hover:bg-accent-strong transition"
            >
              Clip now
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <BooksIntroVisual />

        {/* Product showcase */}
        <ScrollProductSimulation />

        {/* Hero */}
        <FadeInOnView
          unlockEventName="timeline-third-unlocked"
          className="max-w-[1200px] mx-auto px-6 pt-2 pb-20 md:pt-3 md:pb-28 text-center"
        >
          <p className="smallcaps text-[11px] text-accent mb-4">Long form in · short form out</p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl mx-auto">
            Turn every stream into a <span className="text-accent">library of clips</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted max-w-2xl mx-auto font-serif italic">
            Built for streamers. Paste a stream or video URL — encyclipedia.ai watches the whole stream,
            finds the moments worth clipping, and reframes them vertical. You review, pick your
            favorites, and download them ready to post.
          </p>
          <p className="mt-3 text-xs text-muted max-w-2xl mx-auto">
            Every major streaming and video platform in, one-click publishing out.
          </p>
          <div className="mt-7 md:mt-8 flex items-center justify-center gap-3 flex-wrap">
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center rounded-md bg-accent text-accent-contrast px-6 py-3 font-serif text-base leading-none hover:bg-accent-strong transition"
            >
              Clip now
            </a>
          </div>
          <p className="mt-4 text-xs text-muted">Start free · 7-day trial, then $10/mo (Basic) or $30/mo (Premium) · no charge until your trial ends · cancel anytime</p>
          <p className="mt-2 text-xs font-medium text-ink">
            Requires the free Encyclipedia Librarian desktop app for macOS, Windows, or Linux.
          </p>
        </FadeInOnView>

        {/* Required desktop companion */}
        <section className="max-w-[1000px] mx-auto px-6 pb-16 md:pb-20">
          <div className="rounded-xl border border-accent/50 bg-accent-soft/30 px-6 py-7 md:px-10 md:py-9 text-center">
            <p className="smallcaps text-[10px] text-accent mb-2">Required desktop companion</p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold">
              Librarian handles downloads on your computer.
            </h3>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-2xl mx-auto">
              Install Librarian during onboarding, sign in with the same account,
              and leave it open while jobs run. Your browser login and YouTube
              cookies stay local; only the media needed for your clipping jobs is
              handed to our renderer.
            </p>
            <a
              href={`${APP_URL}/onboarding`}
              className="mt-5 inline-flex items-center justify-center rounded-md border border-accent px-5 py-2.5 font-serif text-sm text-accent hover:bg-accent hover:text-accent-contrast transition"
            >
              Start guided setup
            </a>
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-[1200px] mx-auto px-6 py-16 border-t border-border">
          <p className="smallcaps text-[10px] text-accent mb-2 text-center">How it works</p>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Paste. Wait. Download.
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                num: "01",
                title: "Install Librarian",
                body: "Download the required desktop app, open it, and sign in. Onboarding confirms it is online before unlocking the product.",
                visual: (
                  <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 flex items-center justify-center gap-2 mt-4">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-[11px] text-ink">Librarian online</span>
                  </div>
                ),
              },
              {
                num: "02",
                title: "Drop a stream or video URL",
                body: "Paste any supported link — a stream, upload, or VOD. We resolve the source and queue it instantly.",
                visual: (
                  <div className="rounded-lg border border-border bg-surface px-4 py-2.5 flex items-center gap-2 mt-4">
                    <span className="text-muted text-xs flex-1 font-mono truncate">stream.example/video/…</span>
                    <span className="text-[10px] smallcaps font-semibold bg-accent text-accent-contrast rounded px-2 py-0.5">Clip</span>
                  </div>
                ),
              },
              {
                num: "03",
                title: "Librarian and AI get to work",
                body: "Librarian downloads locally; our AI identifies viral moments and the renderer creates vertical 9:16 clips.",
                visual: (
                  <div className="rounded-lg border border-border bg-surface px-4 py-2.5 flex items-center gap-3 mt-4">
                    <div className="h-3 w-3 rounded-full border-2 border-accent border-t-transparent animate-spin shrink-0" />
                    <span className="text-[11px] text-muted">Detecting clips · 1h 42m scanned…</span>
                  </div>
                ),
              },
              {
                num: "04",
                title: "Review, pick, download",
                body: "Browse clips in your dashboard, fine-tune any start/end point, and download polished vertical MP4s ready to post.",
                visual: (
                  <div className="rounded-lg border border-border bg-surface px-4 py-2.5 mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-[11px] font-semibold text-ink">3 clips ready</span>
                    <span className="inline-flex items-center justify-center text-[10px] smallcaps font-semibold border border-border-strong text-muted rounded px-2 py-0.5 sm:shrink-0">↓ Download all</span>
                  </div>
                ),
              },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <p className="font-serif text-5xl font-bold text-[var(--color-border-strong)] leading-none mb-3">
                  {step.num}
                </p>
                <h4 className="font-serif text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{step.body}</p>
                {step.visual}
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="max-w-[1200px] mx-auto px-6 py-16 border-t border-border">
          <p className="smallcaps text-[10px] text-accent mb-2 text-center">What it does</p>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Everything between the upload and the post.
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-border bg-surface px-6 py-5 text-center"
              >
                <h4 className="font-serif text-xl mb-2">{f.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="max-w-[1200px] mx-auto px-6 py-16 border-t border-border">
          <p className="smallcaps text-[10px] text-accent mb-2 text-center">Pricing</p>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-3">
            Two plans. Unlimited clipping.
          </h3>
          <p className="text-center text-muted text-sm mb-12 max-w-xl mx-auto">
            No credits. No per-clip metering. Every plan starts with a 7-day
            free trial. Pick the one that matches how you stream. Cancel anytime.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-lg border bg-surface px-7 py-8 flex flex-col text-center ${
                  plan.highlighted
                    ? "border-accent shadow-[0_0_0_1px_var(--color-accent)]"
                    : "border-border"
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  <p className="smallcaps text-[10px] text-accent">{plan.name}</p>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-1">
                  <span className="font-serif text-5xl font-bold">${plan.price}</span>
                  <span className="text-sm text-muted">/ month</span>
                </div>
                <p className="text-sm text-muted italic font-serif mb-6">{plan.tagline}</p>
                <ul className="space-y-2 mb-7 flex-1 text-left mx-auto">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <span className="text-accent mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={APP_URL}
                  className={`inline-flex items-center justify-center self-center rounded-md font-serif text-center leading-none px-4 py-3 transition ${
                    plan.highlighted
                      ? "bg-accent text-accent-contrast hover:bg-accent-strong"
                      : "border border-border-strong text-ink hover:bg-surface"
                  }`}
                >
                  Clip now
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            7-day free trial on every plan. No credits. No per-clip charges. Cancel anytime.
          </p>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="max-w-[1200px] mx-auto px-6 py-16 border-t border-border">
          <p className="smallcaps text-[10px] text-accent mb-2 text-center">Where this is going</p>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-3">
            Today clip & download. Tomorrow, everything.
          </h3>
          <p className="text-center text-muted text-sm mb-10 max-w-2xl mx-auto">
            We're shipping the smallest possible product first. Here's what we're building next —
            and committing to.
          </p>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {roadmap.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-surface px-6 py-5 text-center"
              >
                <p className="smallcaps text-[10px] text-bronze mb-2">Coming</p>
                <h4 className="font-serif text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-[1200px] mx-auto px-6 py-16 border-t border-border">
          <p className="smallcaps text-[10px] text-accent mb-2 text-center">Frequently asked</p>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-10">
            The questions everyone asks first.
          </h3>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-lg border border-border bg-surface px-5 py-4 open:border-accent/60 transition"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="font-serif text-base text-ink">{item.q}</span>
                  <span className="text-accent text-xl leading-none transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-[1200px] mx-auto px-6 py-20 border-t border-border text-center">
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Stop scrubbing. Start shipping.
          </h3>
          <p className="text-muted max-w-xl mx-auto mb-6 font-serif italic">
            Your next viral clip is already inside a stream you&apos;ve already recorded.
          </p>
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center rounded-md bg-accent text-accent-contrast px-8 py-3 font-serif text-base leading-none hover:bg-accent-strong transition"
          >
            Clip now
          </a>
        </section>
      </main>

      <footer className="border-t border-border-strong">
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div className="flex items-center gap-3">
            <span className="crest" aria-hidden>Æ</span>
            <span className="font-serif">
              encyclipedia<span className="text-accent">.ai</span> — A Library of Clips
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#features" className="hover:text-ink transition">Features</a>
            <a href="#pricing" className="hover:text-ink transition">Pricing</a>
            <a href="#roadmap" className="hover:text-ink transition">Roadmap</a>
            <a href="#faq" className="hover:text-ink transition">FAQ</a>
            <a href="/terms" className="hover:text-ink transition">Terms</a>
            <a href="/privacy" className="hover:text-ink transition">Privacy</a>
          </div>
          <p>© {new Date().getFullYear()} encyclipedia.ai</p>
        </div>
      </footer>
    </div>
  );
}
