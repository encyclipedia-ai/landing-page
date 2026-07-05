import Link from "next/link";

export const metadata = {
  title: "Terms of Service | encyclipedia.ai",
};

const EFFECTIVE_DATE = "2026-07-05";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <p className="smallcaps text-[11px] text-accent mb-2">Legal</p>
        <h1 className="font-serif text-4xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-xs text-muted mb-10">Effective date: {EFFECTIVE_DATE}</p>

        <section className="space-y-4 text-sm leading-7 text-muted">
          <p>
            These Terms of Service ("Terms") are a legally binding agreement between you and
            encyclipedia.ai ("encyclipedia", "we", "our", or "us") and govern your access to and
            use of our websites, applications, APIs, and related services (collectively, the
            "Service").
          </p>
          <p>
            By creating an account, clicking to accept, or using the Service, you agree to these
            Terms. If you are using the Service on behalf of a business or other entity, you
            represent that you are authorized to bind that entity to these Terms.
          </p>
        </section>

        <section className="mt-10 space-y-3">
          <h2 className="font-serif text-2xl text-ink">1. Eligibility and Account Registration</h2>
          <p className="text-sm leading-7 text-muted">
            You must be at least 18 years old and able to form a binding contract to use the
            Service. You agree to provide accurate registration information, keep it updated, and
            keep your credentials confidential.
          </p>
          <p className="text-sm leading-7 text-muted">
            You are responsible for all activity under your account, including activity by authorized
            team members. You must promptly notify us at mau@encyclipedia.ai if you suspect
            unauthorized access.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">2. Service Scope and License</h2>
          <p className="text-sm leading-7 text-muted">
            Subject to your ongoing compliance with these Terms, we grant you a limited,
            non-exclusive, non-transferable, revocable license to access and use the Service for its
            intended business purpose.
          </p>
          <p className="text-sm leading-7 text-muted">
            We may modify, improve, suspend, or discontinue any part of the Service at any time.
            Features, processing speeds, storage windows, and third-party integrations may change.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">3. User Content, Rights, and Responsibility</h2>
          <p className="text-sm leading-7 text-muted">
            "User Content" means all content, data, links, prompts, metadata, account information,
            and media that you submit, connect, or generate through the Service.
          </p>
          <p className="text-sm leading-7 text-muted">
            You retain ownership of your User Content. You grant us a worldwide, non-exclusive,
            royalty-free license to host, copy, process, transform, transmit, and display User
            Content solely as necessary to provide, secure, improve, and support the Service.
          </p>
          <p className="text-sm leading-7 text-muted">
            You represent and warrant that you have all rights, permissions, and legal bases required
            to upload and process User Content and to authorize us to process it on your behalf.
            You are solely responsible for User Content and downstream publishing decisions.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">4. Third-Party Platforms and Integrations</h2>
          <p className="text-sm leading-7 text-muted">
            The Service may integrate with third-party services (for example, video platforms,
            identity providers, cloud providers, and payment processors). Your use of those services
            is governed by their terms and policies, not ours.
          </p>
          <p className="text-sm leading-7 text-muted">
            We are not responsible for changes, outages, access restrictions, policy enforcement, or
            API behavior imposed by third-party services.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">5. Acceptable Use and Prohibited Conduct</h2>
          <p className="text-sm leading-7 text-muted">
            You may not use the Service for unlawful, infringing, deceptive, or abusive purposes.
            Prohibited conduct includes:
          </p>
          <ul className="list-disc pl-6 text-sm leading-7 text-muted space-y-1">
            <li>Uploading content you do not own or have permission to process.</li>
            <li>Circumventing access controls, paywalls, geo-restrictions, or security mechanisms.</li>
            <li>Attempting to scrape, reverse engineer, or disrupt the Service.</li>
            <li>Using bots or automation in ways that materially degrade service stability.</li>
            <li>Publishing content that violates applicable law or third-party rights.</li>
          </ul>
          <p className="text-sm leading-7 text-muted">
            We may investigate suspected violations and may suspend or terminate accounts to protect
            users, the Service, or third parties.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">6. Billing, Subscriptions, and Trials</h2>
          <p className="text-sm leading-7 text-muted">
            Paid plans are billed in advance on a recurring basis until canceled. Trial offers,
            credits, and promotional pricing may be modified or discontinued at any time.
          </p>
          <p className="text-sm leading-7 text-muted">
            You authorize us and our payment processor to charge all applicable fees, taxes, and
            surcharges using your selected payment method. Except where required by law, fees are
            non-refundable.
          </p>
          <p className="text-sm leading-7 text-muted">
            If payment fails, we may retry charges, suspend paid features, or downgrade the account.
            Canceling prevents future renewal but does not retroactively refund prior periods.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">7. Intellectual Property</h2>
          <p className="text-sm leading-7 text-muted">
            The Service, including software, branding, designs, and documentation, is owned by
            encyclipedia.ai and protected by intellectual property laws. Except as expressly granted,
            no rights are transferred to you.
          </p>
          <p className="text-sm leading-7 text-muted">
            If you provide suggestions or feedback, you grant us a perpetual, irrevocable,
            worldwide, royalty-free right to use that feedback without restriction.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">8. Copyright and Takedown Policy</h2>
          <p className="text-sm leading-7 text-muted">
            We respond to valid notices of alleged copyright infringement and may remove or disable
            access to content in appropriate circumstances. Repeat infringers may have accounts
            terminated.
          </p>
          <p className="text-sm leading-7 text-muted">
            To report infringement, contact mau@encyclipedia.ai with sufficient detail to locate
            the content, identify the claimed rights, and provide contact information.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">9. Privacy and Data Processing</h2>
          <p className="text-sm leading-7 text-muted">
            Our Privacy Policy describes how we collect, use, and protect personal information. By
            using the Service, you acknowledge the practices described in that policy.
          </p>
          <p className="text-sm leading-7 text-muted">
            You are responsible for ensuring you have appropriate legal grounds to provide personal
            data and content to us for processing.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">10. Disclaimers</h2>
          <p className="text-sm leading-7 text-muted">
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE MAXIMUM EXTENT
            PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND
            UNINTERRUPTED OR ERROR-FREE OPERATION.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">11. Limitation of Liability</h2>
          <p className="text-sm leading-7 text-muted">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, ENCYCLIPEDIA.AI AND ITS AFFILIATES, OFFICERS,
            EMPLOYEES, AND SUPPLIERS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, DATA, OR
            GOODWILL.
          </p>
          <p className="text-sm leading-7 text-muted">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS
            ARISING FROM OR RELATED TO THE SERVICE WILL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE
            TWELVE MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">12. Indemnification</h2>
          <p className="text-sm leading-7 text-muted">
            You agree to defend, indemnify, and hold harmless encyclipedia.ai and its affiliates,
            officers, employees, and suppliers from and against claims, liabilities, damages, losses,
            and expenses (including reasonable legal fees) arising out of or related to your User
            Content, your use of the Service, or your violation of these Terms or applicable law.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">13. Suspension and Termination</h2>
          <p className="text-sm leading-7 text-muted">
            You may stop using the Service at any time. We may suspend or terminate your access,
            with or without notice, if we reasonably believe you violated these Terms, created risk
            for users or third parties, or if required by law.
          </p>
          <p className="text-sm leading-7 text-muted">
            After termination, rights granted to you under these Terms end immediately. Sections that
            by their nature should survive termination will survive.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">14. Governing Law and Venue</h2>
          <p className="text-sm leading-7 text-muted">
            These Terms are governed by applicable laws of the jurisdiction where encyclipedia.ai is
            established, excluding conflict-of-law rules. Any dispute will be brought in courts of
            competent jurisdiction in that location, unless applicable law requires otherwise.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">15. Changes to These Terms</h2>
          <p className="text-sm leading-7 text-muted">
            We may update these Terms from time to time. If we make material changes, we will post an
            updated effective date and may provide additional notice in-product or by email. Your
            continued use of the Service after changes take effect constitutes acceptance of the
            revised Terms.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">16. Contact</h2>
          <p className="text-sm leading-7 text-muted">
            Questions about these Terms should be sent to mau@encyclipedia.ai.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-serif text-2xl text-ink">5. Contact</h2>
          <p className="text-sm leading-7 text-muted">
            Questions about these Terms: mau@encyclipedia.ai
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
