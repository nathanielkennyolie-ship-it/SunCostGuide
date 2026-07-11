import ContentCard from "./ContentCard";

const previewPosts = [
  {
    href: "/blog/solar-panel-cost-2026",
    category: "Cost & Savings",
    title: "Solar Panel Cost in 2026: What You'll Actually Pay",
    excerpt:
      "A state-by-state breakdown of real installation prices, financing options, and hidden costs most salespeople won't mention.",
    date: "Jun 15, 2026",
    readTime: "12 min read",
  },
  {
    href: "/blog/how-to-choose-a-solar-installer",
    category: "Installer Reviews",
    title: "How to Choose a Solar Installer: 7 Questions to Ask First",
    excerpt:
      "The exact questions I'd ask every installer before signing anything — and what to listen for in their answers.",
    date: "Jun 10, 2026",
    readTime: "10 min read",
  },
  {
    href: "/blog/federal-solar-tax-credit-explained",
    category: "Incentives & Rebates",
    title: "Federal Solar Tax Credit Explained (Simple, No Jargon)",
    excerpt:
      "How the 30% federal tax credit actually works, who qualifies, and how to claim it on your taxes without an accountant.",
    date: "Jun 5, 2026",
    readTime: "8 min read",
  },
];

export default function BlogPreview() {
  return (
    <section className="section-padding">
      <div className="content-width">
        <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-ink text-balance">
          Latest from the blog
        </h2>
        <p className="mt-4 text-lg text-ink-muted max-w-2xl leading-relaxed">
          Honest, research-backed articles to help you navigate the solar
          industry without the sales pitch.
        </p>
        <div className="mt-12 space-y-6">
          {previewPosts.map((post) => (
            <ContentCard key={post.href} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
