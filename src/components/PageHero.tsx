interface PageHeroProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function PageHero({ badge, title, subtitle, ctaText, ctaHref }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden grid-pattern">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 border border-cyan-accent/20 bg-cyan-accent/5 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse-slow" />
          <span className="text-cyan-accent text-xs font-medium tracking-widest uppercase">
            {badge}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          {title}
        </h1>

        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {ctaText && ctaHref && (
          <div className="mt-8">
            <a
              href={ctaHref}
              className="inline-block bg-cyan-accent text-bg-primary px-8 py-3.5 rounded font-semibold text-base hover:bg-cyan-accent/90 transition-all glow-cyan"
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
