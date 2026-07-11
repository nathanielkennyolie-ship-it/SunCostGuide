import ContentCard from "./ContentCard";

const categories = [
  {
    href: "/cost-and-savings",
    category: "Cost & Savings",
    title: "What solar really costs — no hidden numbers",
    excerpt:
      "Transparent breakdowns of installation prices, financing, payback periods, and lifetime savings across different states and system sizes.",
  },
  {
    href: "/installer-reviews",
    category: "Installer Reviews",
    title: "Honest comparisons of the biggest solar companies",
    excerpt:
      "Unbiased reviews of national and local installers based on real customer experiences, pricing transparency, and warranty quality.",
  },
  {
    href: "/how-solar-works",
    category: "How Solar Works",
    title: "The tech explained in plain English",
    excerpt:
      "No jargon explainers on panels, inverters, batteries, net metering, and everything else that actually matters for your decision.",
  },
  {
    href: "/incentives-and-rebates",
    category: "Incentives & Rebates",
    title: "Every tax credit, rebate, and incentive you qualify for",
    excerpt:
      "Up-to-date guides on federal tax credits, state rebates, SRECs, and utility programs — organized by where you live.",
  },
];

export default function CategoryGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="content-width">
        <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-ink text-balance">
          Everything you need to make a smart solar decision
        </h2>
        <p className="mt-4 text-lg text-ink-muted max-w-2xl leading-relaxed">
          No matter where you are in your research, these four guides will get
          you up to speed faster than any sales call.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <div
              key={cat.href}
              className={`${i === 0 ? "md:translate-y-8" : ""} ${
                i === 3 ? "md:-translate-y-8" : ""
              }`}
            >
              <ContentCard {...cat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
