export default function Hero() {
  return (
    <section className="relative md:min-h-screen flex flex-col items-center md:justify-center grid-pattern scanline">
      {/* Gradient orbs — contained to avoid overflow issues on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center pt-24 pb-16 md:pt-20 md:pb-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-cyan-accent/20 bg-cyan-accent/5 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse-slow" />
          <span className="text-cyan-accent text-xs font-medium tracking-widest uppercase">
            Certifié ISAK Niveau 1 &mdash; Paris Saint-Germain
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          Là où les autres{" "}
          <span className="text-text-muted line-through decoration-text-muted/50">
            estiment
          </span>
          ,<br />
          nous{" "}
          <span className="text-cyan-accent glow-text">mesurons</span>.
        </h1>

        {/* Subtitle */}
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          Audit clinique de composition corporelle par anthropométrie ISAK.
          <br className="hidden sm:block" />
          La précision au millimètre pour piloter la performance.
        </p>

        {/* Slogan */}
        <p className="text-cyan-accent/70 text-sm font-medium tracking-[0.3em] uppercase mb-10">
          La Science au Service de la Performance
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-cyan-accent text-bg-primary px-8 py-3.5 rounded font-semibold text-base hover:bg-cyan-accent/90 transition-all glow-cyan"
          >
            Réserver un audit clinique
          </a>
          <a
            href="#services"
            className="border border-white/10 text-text-secondary px-8 py-3.5 rounded font-medium text-base hover:border-cyan-accent/30 hover:text-text-primary transition-all"
          >
            Découvrir nos services
          </a>
        </div>

        {/* Metrics bar */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "15", label: "Points de mesure" },
            { value: "±0.1", label: "mm de précision" },
            { value: "ISAK", label: "Standard olympique" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-cyan-accent">
                {item.value}
              </p>
              <p className="text-text-muted text-xs mt-1 uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Trust banner – Marquee */}
        <div className="mt-16 mb-8">
          <p className="text-[#888888] text-[11px] font-medium tracking-[0.35em] uppercase mb-6">
            Références & Certifications
          </p>
          <div className="relative overflow-hidden max-w-2xl mx-auto">
            {/* Gradient masks left & right */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />
            <div className="marquee-track flex items-center gap-16 w-max">
              {/* Duplicate set for seamless loop */}
              {[0, 1].map((setIndex) => (
                <div key={setIndex} className="flex items-center gap-16 shrink-0">
                  {/* ISAK 1 */}
                  <div className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
                    <svg className="w-7 h-7 text-[#CCCCCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    <span className="text-[#CCCCCC] text-base font-semibold tracking-widest uppercase whitespace-nowrap">
                      ISAK 1
                    </span>
                  </div>
                  {/* PSG Campus */}
                  <div className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
                    <svg className="w-7 h-7 text-[#CCCCCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    <span className="text-[#CCCCCC] text-base font-semibold tracking-widest uppercase whitespace-nowrap">
                      PSG Campus
                    </span>
                  </div>
                  {/* Master en Nutrition du Sport */}
                  <div className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
                    <svg className="w-7 h-7 text-[#CCCCCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"/>
                    </svg>
                    <span className="text-[#CCCCCC] text-base font-semibold tracking-widest uppercase whitespace-nowrap">
                      Master en Nutrition du Sport
                    </span>
                  </div>
                  {/* Licence STAPS */}
                  <div className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
                    <svg className="w-7 h-7 text-[#CCCCCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="16" rx="2"/>
                      <path d="M7 8h10M7 12h6M7 16h8"/>
                    </svg>
                    <span className="text-[#CCCCCC] text-base font-semibold tracking-widest uppercase whitespace-nowrap">
                      Licence STAPS
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
