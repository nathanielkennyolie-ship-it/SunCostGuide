import Link from "next/link";

interface ContentCardProps {
  href: string;
  category: string;
  title: string;
  excerpt: string;
  date?: string;
  readTime?: string;
}

export default function ContentCard({
  href,
  category,
  title,
  excerpt,
  date,
  readTime,
}: ContentCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-surface rounded-xl border border-warm-gray-200 p-6 lg:p-8 hover:border-amber-300 hover:shadow-[0_0_0_1px_#f59e0b22] transition-all duration-200"
    >
      <span className="inline-block text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-4">
        {category}
      </span>
      <h3 className="font-display text-xl lg:text-2xl font-semibold tracking-tight text-ink group-hover:text-amber-700 transition-colors duration-150">
        {title}
      </h3>
      <p className="mt-3 text-sm text-ink-muted leading-relaxed">{excerpt}</p>
      {(date || readTime) && (
        <div className="mt-4 flex items-center gap-3 text-xs text-ink-muted">
          {date && <span>{date}</span>}
          {date && readTime && <span className="w-1 h-1 rounded-full bg-warm-gray-300" />}
          {readTime && <span>{readTime}</span>}
        </div>
      )}
    </Link>
  );
}
