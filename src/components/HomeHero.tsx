import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="min-h-[90vh] flex items-center pt-24 lg:pt-0">
      <div className="content-width w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-ink leading-tight text-balance">
              Real Solar Reviews and Cost Guides — No Sales Pitch, Just What
              Actually Works
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-ink-muted leading-relaxed max-w-xl">
              I compare solar costs, installers, and incentives honestly — so
              you can make a decision without sitting through a sales pitch
              first.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-white font-semibold text-sm rounded-full hover:bg-amber-600 transition-colors duration-200 shadow-lg shadow-amber-500/20"
              >
                Calculate Your Solar Savings
              </Link>
              <Link
                href="/cost-and-savings"
                className="inline-flex items-center justify-center px-8 py-4 border border-warm-gray-300 text-ink font-semibold text-sm rounded-full hover:border-amber-300 hover:text-amber-700 transition-colors duration-200"
              >
                Browse Cost Guides
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-amber-100 via-amber-50 to-warm-gray-100 border border-warm-gray-200 flex items-center justify-center overflow-hidden">
                <div className="p-8 text-center">
                  <div className="text-6xl font-display font-semibold text-amber-500/30 leading-none">
                    $0
                  </div>
                  <div className="mt-2 text-sm text-ink-muted">
                    — your starting point before a sales pitch
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                    {[
                      ["Avg. System Cost", "$20,000–$30,000"],
                      ["Payback Period", "7–12 years"],
                      ["Tax Credit", "30% Federal"],
                      ["Lifetime Savings", "$35,000–$60,000"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="bg-white/80 rounded-lg p-3 border border-warm-gray-200"
                      >
                        <div className="text-xs text-ink-muted">{label}</div>
                        <div className="text-sm font-semibold text-ink mt-0.5 font-mono">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
