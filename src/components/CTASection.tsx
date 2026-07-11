import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  href: string;
  label: string;
}

export default function CTASection({
  title,
  description,
  href,
  label,
}: CTASectionProps) {
  return (
    <section className="bg-amber-500 py-20 lg:py-28">
      <div className="content-width text-center">
        <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-white text-balance">
          {title}
        </h2>
        <p className="mt-4 text-lg text-amber-50 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
        <Link
          href={href}
          className="inline-block mt-8 px-8 py-3.5 bg-white text-amber-700 font-semibold text-sm rounded-full hover:bg-amber-50 transition-colors duration-200"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
