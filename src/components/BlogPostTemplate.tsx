import Link from "next/link";

interface BlogPost {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  metaDescription: string;
  body: string;
}

export default function BlogPostTemplate({ post }: { post: BlogPost }) {
  return (
    <article className="content-width py-24 lg:py-32">
      <div className="max-w-3xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-ink-muted mb-8">
          <Link href="/blog" className="hover:text-amber-600 transition-colors">
            Blog
          </Link>
          <span>/</span>
          <Link
            href={`/${post.categorySlug}`}
            className="hover:text-amber-600 transition-colors"
          >
            {post.category}
          </Link>
          <span>/</span>
          <span className="text-ink truncate max-w-[200px]">
            {post.title}
          </span>
        </nav>

        <div className="flex items-center gap-3 text-sm text-ink-muted mb-6">
          <Link
            href={`/${post.categorySlug}`}
            className="text-amber-600 font-medium hover:text-amber-700 transition-colors"
          >
            {post.category}
          </Link>
          <span className="w-1 h-1 rounded-full bg-warm-gray-300" />
          <time dateTime={post.date}>{post.date}</time>
          <span className="w-1 h-1 rounded-full bg-warm-gray-300" />
          <span>{post.readTime}</span>
        </div>

        <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-ink text-balance leading-tight">
          {post.title}
        </h1>

        <p className="mt-4 text-lg text-ink-muted leading-relaxed">
          {post.metaDescription}
        </p>

        <hr className="my-10 border-warm-gray-200" />

        <div
          className="prose prose-lg max-w-none
            prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-ink
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-ink prose-p:leading-relaxed prose-p:mb-5
            prose-a:text-amber-600 prose-a:no-underline hover:prose-a:text-amber-700
            prose-strong:text-ink prose-strong:font-semibold
            prose-ul:list-disc prose-ul:pl-6 prose-ul:text-ink
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:text-ink
            prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-amber-50/50 prose-blockquote:py-3 prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
            prose-code:text-amber-800 prose-code:bg-amber-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-img:rounded-xl prose-img:my-8"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </div>
    </article>
  );
}
