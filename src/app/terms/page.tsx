import Link from "next/link";

export const metadata = {
  title: "Terms of Service | encyclipedia.ai",
};

const EFFECTIVE_DATE = "2026-07-03";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <p className="smallcaps text-[11px] text-accent mb-2">Legal</p>
        <h1 className="font-serif text-4xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-xs text-muted mb-10">Effective date: {EFFECTIVE_DATE}</p>

        <section className="space-y-4 text-sm leading-7 text-muted">
          <p>
            These Terms govern your use of encyclipedia.ai. By creating an account or using the
            service, you agree to these Terms.
          </p>
          <p>
            You are responsible for the content you submit, process, and publish. You must only use
            content you have the legal right to use.
          </p>
        </section>

        <section className="mt-10 space-y-3">
          <h2 className="font-serif text-2xl text-ink">1. Account and Access</h2>
          <p className="text-sm leading-7 text-muted">
            You must provide accurate account information and keep your credentials secure. You are
            responsible for activity under your account.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">2. Acceptable Use</h2>
          <p className="text-sm leading-7 text-muted">
            You may not use the service for unlawful activity, abuse, platform manipulation, or
            rights infringement. We may suspend or terminate accounts that violate these rules.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">3. Content and Rights</h2>
          <p className="text-sm leading-7 text-muted">
            You retain ownership of your content. You grant encyclipedia.ai a limited license to
            process and store content as needed to provide the service.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">4. Billing and Cancellation</h2>
          <p className="text-sm leading-7 text-muted">
            Paid plans are billed on a recurring basis until canceled. Fees are non-refundable except
            where required by law.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">5. Contact</h2>
          <p className="text-sm leading-7 text-muted">
            Questions about these Terms: support@encyclipedia.ai
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
