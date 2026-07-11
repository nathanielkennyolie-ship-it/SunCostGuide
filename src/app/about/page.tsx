import type { Metadata } from "next";
import Link from "next/link";
import TrustBanner from "@/components/TrustBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Independent solar reviews and cost guides. No installer partnerships, no sponsored rankings — just honest information.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 lg:pb-32">
      <div className="content-width">
        <div className="max-w-3xl mx-auto">
          <TrustBanner />

          <div className="mt-16">
            <div className="relative pl-8 lg:pl-12">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-amber-500 rounded-full" />

              <div className="space-y-6 text-lg leading-relaxed text-ink">
                <p className="font-display text-2xl lg:text-3xl font-semibold tracking-tight">
                  I&apos;m not a solar installer, and I don&apos;t work for one.
                </p>

                <p>
                  Before this, I spent years in recruiting — connecting people
                  with the right opportunities and learning, the hard way, how
                  much trust matters when someone&apos;s making a decision that
                  affects their life. When the industry started shifting online,
                  I moved into digital work, and along the way I got tired of
                  watching solar shopping work the same way bad recruiting used
                  to: confusing pitches, inflated promises, and no one giving a
                  straight answer.
                </p>

                <p>
                  So I built this site to do the opposite. No installer
                  partnerships pulling my opinions in one direction, no fake
                  numbers, no &ldquo;trusted by thousands since [year]&rdquo;
                  nonsense. Just real cost breakdowns, honest comparisons, and
                  answers to the questions people actually ask before they commit
                  to something this expensive.
                </p>

                <p>
                  If a page here includes an affiliate link, I&apos;ll tell you
                  — see my{" "}
                  <Link
                    href="/disclosure"
                    className="text-amber-600 font-medium hover:text-amber-700 underline underline-offset-2 decoration-amber-300 transition-colors"
                  >
                    disclosure page
                  </Link>{" "}
                  for exactly how that works. My goal is that you leave with a
                  clearer picture than when you arrived, whether or not you ever
                  click one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
