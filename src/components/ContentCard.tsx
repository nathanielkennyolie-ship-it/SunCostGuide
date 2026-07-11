import Link from "next/link";

interface ContentCardProps {
  href: string;
  category: string;
  title: string;
  excerpt: string;
  date?: string;
  readTime?: string;
  image?: string;
}

export default function ContentCard({
  href,
  category,
  title,
  excerpt,
  date,
  readTime,
  image,
}: ContentCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-surface rounded-xl border border-warm-gray-200 overflow-hidden hover:border-amber-300 hover:shadow-[0_0_0_1px_#f59e0b22] transition-all duration-200"
    >
      {image ? (
        <img
          src={image}
          alt=""
          className="w-full aspect-[16/9] object-cover"
        />
      ) : (
        <div className="w-full aspect-[16/9] bg-amber-500 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12 opacity-70"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </div>
      )}
      <div className="p-6 lg:p-8">
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
      </div>
    </Link>
  );
}
