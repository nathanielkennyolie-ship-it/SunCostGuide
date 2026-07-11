interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeading({
  title,
  subtitle,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className="mb-12 lg:mb-16">
      <Tag className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-ink text-balance">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-lg text-ink-muted max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 w-16 h-[3px] bg-amber-500 rounded-full" />
    </div>
  );
}
