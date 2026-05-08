
import { ThemeToggle } from "@/components/ThemeToggle";

// Closed beta. CTAs route to a Google Form (or any URL) collecting invite
// requests. Override via NEXT_PUBLIC_INVITE_FORM_URL in env if you ever
// need to swap the form (e.g. point at the live app sign-in once we open).
const INVITE_URL =
  process.env.NEXT_PUBLIC_INVITE_FORM_URL ?? "https://forms.gle/TqmoQowcGULhtTLL6";

const features = [
  {
    title: "Auto-clipping",
    body:
      "Drop a YouTube URL. We pull the stream, scan the transcript, and surface the moments most likely to go viral — no manual scrubbing.",
  },
  {
    title: "Review & one-click publish",
    body:
      "Browse the candidate clips, pick the ones you want, edit title and hashtags, then publish or schedule to TikTok — built-in queue, retries, and status.",
  },
  {
    title: "Library of every clip",
    body:
      "Every clip you generate stays catalogued by stream and channel, ready to recut, re-export, or republish later.",
  },
];

const roadmap = [
  {
    title: "Auto-clip the moment a stream ends",
    body:
      "The instant your stream goes offline, encyclipedia.ai starts processing — your first vertical clips are ready before you've even shut down OBS. Built for streamers, not VOD editors.",
  },
  {
    title: "Smart vertical reframing",
    body:
      "Auto 9:16 reframing with speaker tracking and captions, so clips are TikTok-ready without an editor. Currently in development.",
  },
  {
    title: "Every streaming platform as a source",
    body:
      "Today: YouTube. Next: Twitch, Kick, Rumble, X/Twitter Spaces, and direct file uploads. If it streams, we'll clip it.",
  },
  {
    title: "Every social platform as a destination",
    body:
      "Today: TikTok. Next: Instagram Reels, YouTube Shorts, X, Facebook, LinkedIn — publish or schedule from one queue.",
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
    price: 20,
    tagline: "For one creator, one channel.",
    features: [
      "Bind one YouTube channel to your account",
      "Unlimited clipping from your bound channel",
      "Real-time auto-clipping the moment your stream goes live",
      "Full clip library with recut & re-export",
      "Publish or schedule to TikTok from one queue",
    ],
    highlighted: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: 50,
    tagline: "Clip from anywhere on YouTube.",
    features: [
      "Everything in Basic",
      "Clip from any YouTube URL — not just your bound channel",
      "Browse and clip from any creator's uploads or VODs",
      "Priority job processing",
    ],
    highlighted: true,
  },
  {
    id: "network",
    name: "Network",
    price: 100,
    tagline: "Manage a roster of channels.",
    features: [
      "Everything in Premium",
      "Bind up to 12 YouTube channels under one account",
      "Run a network of creators from a single dashboard",
      "Real-time auto-clipping across every bound channel",
      "White-glove onboarding",
    ],
    highlighted: false,
    comingSoon: true,
  },
];

const faqs: { q: string; a: string }[] = [
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
    q: "Does it work with Twitch / Kick / Rumble yet?",
    a: "Today, only YouTube. Twitch, Kick, Rumble, and direct file uploads are next on the roadmap. Your subscription includes them automatically when they ship — no upgrade tier.",
  },
  {
    q: "How does publishing work?",
    a: "After a stream is processed, you review the candidate clips in your dashboard, pick the ones you like, edit titles and hashtags, and publish or schedule each one to TikTok. Fully automatic publishing is on the roadmap — today you stay in control of which clips go live.",
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
              href={INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-serif rounded-md bg-accent text-accent-contrast px-3 py-1.5 hover:bg-accent-strong transition"
            >
              Request invite
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 text-center">
          <p className="smallcaps text-[11px] text-accent mb-4">Long form in · short form out</p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl mx-auto">
            Turn every stream into a <span className="text-accent">library of clips</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted max-w-2xl mx-auto font-serif italic">
            Built for streamers. Paste a YouTube URL — encyclipedia.ai watches the whole stream,
            finds the moments worth clipping, and reframes them vertical. You review, pick your
            favorites, and publish to TikTok in a click.
          </p>
          <p className="mt-3 text-xs text-muted max-w-2xl mx-auto">
            Today: YouTube → TikTok. Soon: every streaming platform → every social platform.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            <a
              href={INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent text-accent-contrast px-6 py-3 font-serif text-base hover:bg-accent-strong transition"
            >
              Request an invite
            </a>
          </div>
          <p className="mt-4 text-xs text-muted">Closed beta · invite-only while we onboard our first creators</p>
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
                className="rounded-lg border border-border bg-surface px-6 py-5"
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
            Three plans. Unlimited clipping.
          </h3>
          <p className="text-center text-muted text-sm mb-12 max-w-xl mx-auto">
            No credits. No per-clip metering. Pick the plan that matches how
            you stream. Cancel anytime.
          </p>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-lg border bg-surface px-7 py-8 flex flex-col ${
                  plan.highlighted
                    ? "border-accent shadow-[0_0_0_1px_var(--color-accent)]"
                    : "border-border"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="smallcaps text-[10px] text-accent">{plan.name}</p>
                  {plan.comingSoon && (
                    <p className="smallcaps text-[10px] text-bronze">Coming soon</p>
                  )}
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-serif text-5xl font-bold">${plan.price}</span>
                  <span className="text-sm text-muted">/ month</span>
                </div>
                <p className="text-sm text-muted italic font-serif mb-6">{plan.tagline}</p>
                <ul className="space-y-2 mb-7 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <span className="text-accent mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-md font-serif text-center px-4 py-3 transition ${
                    plan.highlighted
                      ? "bg-accent text-accent-contrast hover:bg-accent-strong"
                      : "border border-border-strong text-ink hover:bg-surface"
                  }`}
                >
                  {plan.comingSoon ? "Join the waitlist" : "Request an invite"}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            No credits. No per-clip charges. Cancel anytime.
          </p>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="max-w-[1200px] mx-auto px-6 py-16 border-t border-border">
          <p className="smallcaps text-[10px] text-accent mb-2 text-center">Where this is going</p>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-3">
            Today YouTube → TikTok. Tomorrow, everything.
          </h3>
          <p className="text-center text-muted text-sm mb-10 max-w-2xl mx-auto">
            We're shipping the smallest possible product first. Here's what we're building next —
            and committing to.
          </p>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {roadmap.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-surface px-6 py-5"
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
          <p className="text-muted max-w-xl mx-auto mb-8 font-serif italic">
            Your next viral clip is already inside a stream you&apos;ve already recorded.
          </p>
          <a
            href={INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-accent text-accent-contrast px-8 py-3 font-serif text-base hover:bg-accent-strong transition"
          >
            Request an invite
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
          </div>
          <p>© {new Date().getFullYear()} encyclipedia.ai</p>
        </div>
      </footer>
    </div>
  );
}
