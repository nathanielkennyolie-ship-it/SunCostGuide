"use client";

import Link from "next/link";
import { useState } from "react";
import { blogPosts, categories } from "@/data/blog-posts";
import ContentCard from "@/components/ContentCard";

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filtered = activeCategory
    ? sorted.filter((p) => p.categorySlug === activeCategory)
    : sorted;

  return (
    <div className="pt-24 lg:pt-32 pb-24 lg:pb-32">
      <div className="content-width">
        <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-ink text-balance">
          Blog
        </h1>
        <p className="mt-4 text-lg text-ink-muted max-w-2xl leading-relaxed">
          Honest solar reviews, cost breakdowns, and myth-busting guides — no
          sales pitch, just what actually works.
        </p>
        <div className="mt-4 w-16 h-[3px] bg-amber-500 rounded-full" />

        <div className="mt-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 text-sm rounded-full border transition-colors duration-150 ${
              !activeCategory
                ? "bg-amber-500 text-white border-amber-500"
                : "bg-white text-ink-muted border-warm-gray-200 hover:border-amber-300"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 text-sm rounded-full border transition-colors duration-150 ${
                activeCategory === cat.slug
                  ? "bg-amber-500 text-white border-amber-500"
                  : "bg-white text-ink-muted border-warm-gray-200 hover:border-amber-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <ContentCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              category={post.category}
              title={post.title}
              excerpt={post.metaDescription}
              date={post.date}
              readTime={post.readTime}
              image={post.featured_image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
