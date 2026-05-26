interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:pt-32">
        <div className="text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</div>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
