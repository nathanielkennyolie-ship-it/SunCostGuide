import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SunCostGuide collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 lg:pb-32">
      <div className="content-width">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-ink text-balance">
            Privacy Policy
          </h1>
          <div className="mt-4 w-16 h-[3px] bg-amber-500 rounded-full" />
          <p className="mt-2 text-sm text-ink-muted">Last updated: July 2026</p>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-ink">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink mt-6 mb-4">
              Information We Collect
            </h2>

            <p>
              <strong>Analytics.</strong> We use standard web analytics to
              understand how visitors use this site. This includes anonymized
              data such as pages visited, time on site, and referring website.
              No personally identifiable information is collected through
              analytics.
            </p>

            <p>
              <strong>Cookies.</strong> This site uses cookies for basic
              functionality and analytics. Affiliate links set a cookie to track
              referrals as described in our Affiliate Disclosure. You can disable
              cookies in your browser settings.
            </p>

            <p>
              <strong>Calculator.</strong> The Solar Savings Calculator does not
              store or transmit the data you enter. All calculations are
              performed entirely in your browser. No personal information is
              collected through the calculator.
            </p>

            <p>
              <strong>Contact Form.</strong> If you use our contact form, we
              receive your name, email address, and message. This information is
              used solely to respond to your inquiry and is not shared with third
              parties.
            </p>

            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink mt-10 mb-4">
              Third-Party Services
            </h2>

            <p>
              This site may use third-party services for analytics and
              advertising. These services have their own privacy policies
              governing data collection and use.
            </p>

            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink mt-10 mb-4">
              Your Rights
            </h2>

            <p>
              You have the right to request access to, correction of, or deletion
              of any personal data we hold about you. To exercise these rights,
              please contact us using the information below.
            </p>

            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink mt-10 mb-4">
              Contact
            </h2>

            <p>
              For privacy-related questions, please reach out through our{" "}
              <a
                href="/contact"
                className="text-amber-600 font-medium hover:text-amber-700 underline underline-offset-2 decoration-amber-300 transition-colors"
              >
                contact page
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
