import type { Metadata } from "next";
import Link from "next/link";
import { getPostsByCategory } from "@/data/blog-posts";
import ContentCard from "@/components/ContentCard";
import SectionHeading from "@/components/SectionHeading";
import ComparisonTable from "@/components/ComparisonTable";

const installerRows = [
  {
    company: "Sunrun",
    rating: "3.8 / 5",
    price: "$2.90 / W",
    warranty: "25 yr equipment, 10 yr workmanship",
    pros: "National coverage, strong monitoring app",
    cons: "Aggressive sales tactics, mixed service quality",
  },
  {
    company: "SolarCity / Tesla",
    rating: "3.5 / 5",
    price: "$2.70 / W",
    warranty: "25 yr equipment, 25 yr workmanship",
    pros: "Lowest prices, integrated Powerwall",
    cons: "Customer service delays, pushy upgrades",
  },
  {
    company: "Momentum Solar",
    rating: "4.0 / 5",
    price: "$2.80 / W",
    warranty: "25 yr equipment, 25 yr workmanship",
    pros: "Good communication, streamlined process",
    cons: "Limited availability, financing-focused sales",
  },
  {
    company: "Palmetto Solar",
    rating: "4.2 / 5",
    price: "$2.85 / W",
    warranty: "25 yr equipment, 25 yr workmanship",
    pros: "Strong warranty, good customer reviews",
    cons: "Higher prices, limited to select states",
  },
  {
    company: "Blue Raven Solar",
    rating: "4.0 / 5",
    price: "$2.75 / W",
    warranty: "25 yr equipment, 10 yr workmanship",
    pros: "Competitive pricing, good financing options",
    cons: "Regional focus, variable service quality",
  },
  {
    company: "SunPower (Maxeon)",
    rating: "4.3 / 5",
    price: "$3.10 / W",
    warranty: "40 yr equipment, 10 yr workmanship",
    pros: "Highest efficiency panels, best warranty",
    cons: "Premium pricing, dealer-dependent service",
  },
];

interface Props {
  name: string;
  description: string;
  slug: string;
}

export function generateCategoryMetadata(
  name: string,
  description: string
): Metadata {
  return { title: name, description };
}

export default function CategoryPage({ name, description, slug }: Props) {
  const posts = getPostsByCategory(slug);

  return (
    <div className="pt-24 lg:pt-32 pb-24 lg:pb-32">
      <div className="content-width">
        <SectionHeading title={name} subtitle={description} />

        {slug === "installer-reviews" && (
          <div className="mb-16">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink mb-6">
              National Installers Comparison
            </h3>
            <ComparisonTable rows={installerRows} />
            <p className="mt-4 text-xs text-ink-muted leading-relaxed">
              Ratings based on aggregated customer reviews, pricing
              transparency, and warranty quality as of July 2026. Prices are
              national averages — actual quotes vary by location.
            </p>
          </div>
        )}

        {posts.length === 0 ? (
          <p className="text-ink-muted">No articles yet. Check back soon.</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <ContentCard
                key={post.slug}
                href={`/blog/${post.slug}`}
                category={post.category}
                title={post.title}
                excerpt={post.metaDescription}
                date={post.date}
                readTime={post.readTime}
              />
            ))}
          </div>
        )}
        <div className="mt-16 pt-8 border-t border-warm-gray-200">
          <Link
            href="/"
            className="text-sm text-ink-muted hover:text-amber-600 transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
