import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | encyclipedia.ai",
};

const EFFECTIVE_DATE = "2026-07-03";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <p className="smallcaps text-[11px] text-accent mb-2">Legal</p>
        <h1 className="font-serif text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-xs text-muted mb-10">Effective date: {EFFECTIVE_DATE}</p>

        <section className="space-y-4 text-sm leading-7 text-muted">
          <p>
            This Privacy Policy explains how encyclipedia.ai collects, uses, and stores personal
            information when you use the service.
          </p>
        </section>

        <section className="mt-10 space-y-3">
          <h2 className="font-serif text-2xl text-ink">1. Information We Collect</h2>
          <p className="text-sm leading-7 text-muted">
            We collect account details, product usage signals, and operational logs needed for
            reliability, support, and abuse prevention.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">2. How We Use Information</h2>
          <p className="text-sm leading-7 text-muted">
            We use data to authenticate users, deliver product features, improve service quality, and
            protect the platform from misuse.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">3. Sharing</h2>
          <p className="text-sm leading-7 text-muted">
            We do not sell personal data. We share data only with service providers required to
            operate the platform and when legally required.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">4. Retention and Security</h2>
          <p className="text-sm leading-7 text-muted">
            We retain data for as long as necessary for product operation and legal obligations and use
            technical safeguards to protect it.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">5. Contact</h2>
          <p className="text-sm leading-7 text-muted">
            Privacy requests: mau@encyclipedia.ai
          </p>
        </section>

        <div className="mt-12 text-sm">
          <Link href="/" className="underline text-accent hover:text-ink transition">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
