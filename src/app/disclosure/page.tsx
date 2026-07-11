import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "How SunCostGuide uses affiliate links — transparent, FTC-compliant disclosure of our monetization practices.",
};

export default function DisclosurePage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 lg:pb-32">
      <div className="content-width">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-ink text-balance">
            Affiliate Disclosure
          </h1>
          <div className="mt-4 w-16 h-[3px] bg-amber-500 rounded-full" />
          <p className="mt-2 text-sm text-ink-muted">Last updated: July 2026</p>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-ink">
            <p>
              SunCostGuide is committed to being transparent about how this site
              operates. Some of the links on this website are affiliate links.
              This means that if you click on one of these links and make a
              purchase or sign up for a service, we may earn a small commission
              at no additional cost to you.
            </p>

            <p>
              These affiliate relationships never affect our reviews,
              recommendations, or rankings. We do not accept payment for positive
              coverage, and we will never recommend a product or service we
              wouldn&apos;t consider for ourselves.
            </p>

            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink mt-10 mb-4">
              How Affiliate Links Work
            </h2>

            <p>
              When you click an affiliate link on SunCostGuide, a cookie is placed
              on your browser that tracks the referral. If you make a purchase
              within the cookie&apos;s window, we earn a commission. The price
              you pay is the same whether or not you use our link.
            </p>

            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink mt-10 mb-4">
              Our Commitment
            </h2>

            <p>
              SunCostGuide is an independent resource. We have no installer
              partnerships, no sponsored rankings, and no financial incentives
              tied to specific companies or products. Every review and cost guide
              on this site is written based on research and experience, not on
              who pays us.
            </p>

            <p>
              If you have any questions about our affiliate relationships, please{" "}
              <a
                href="/contact"
                className="text-amber-600 font-medium hover:text-amber-700 underline underline-offset-2 decoration-amber-300 transition-colors"
              >
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
