const biomarkers = [
  {
    id: "COR",
    name: "Cortisol",
    range: "138 — 690 nmol/L",
    role: "Marqueur de stress physiologique et charge allostatique. Un ratio cortisol/DHEA déséquilibré signale un état catabolique prolongé incompatible avec la performance.",
    zone: "stress",
    barWidth: "72%",
  },
  {
    id: "DHEA",
    name: "DHEA-S",
    range: "2.4 — 11.6 \u00B5mol/L",
    role: "Hormone anabolique antagoniste du cortisol. Son ratio avec le cortisol constitue le gold standard pour quantifier le risque de surentra\u00EEnement.",
    zone: "recovery",
    barWidth: "58%",
  },
  {
    id: "O3I",
    name: "Index Om\u00E9ga-3",
    range: "Cible > 8%",
    role: "Concentration en EPA+DHA dans les membranes \u00E9rythrocytaires. Marqueur de r\u00E9solution inflammatoire, de neuroprotection et de fluidit\u00E9 membranaire.",
    zone: "inflammation",
    barWidth: "45%",
  },
  {
    id: "AGE",
    name: "Acides Gras \u00C9rythrocytaires",
    range: "Profil complet",
    role: "Cartographie des acides gras membranaires : rapport \u03C9-6/\u03C9-3, acide arachidonique, index de st\u00E9arique. Reflet de 120 jours d\u2019alimentation r\u00E9elle.",
    zone: "nutrition",
    barWidth: "83%",
  },
  {
    id: "HVA",
    name: "Marqueurs HVA",
    range: "Panel sp\u00E9cifique",
    role: "Acide homovanillique et m\u00E9tabolites dopaminergiques. Indicateurs de fatigue centrale et de motivation neuro-endocrinienne chez l\u2019athl\u00E8te surcharg\u00E9.",
    zone: "neuro",
    barWidth: "38%",
  },
];

const useCases = [
  {
    label: "Retour de blessure (LCA)",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-3.05a1.45 1.45 0 01-.57-1.97l3.07-5.11a1.45 1.45 0 011.97-.57l5.1 3.05c.66.4.88 1.26.57 1.97l-3.07 5.11a1.45 1.45 0 01-1.97.57z" />
      </svg>
    ),
  },
  {
    label: "Suspicion de surentra\u00EEnement",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
      </svg>
    ),
  },
  {
    label: "Baisse de performance inexpliquée",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
      </svg>
    ),
  },
];

const zoneStyles: Record<string, { text: string; bar: string }> = {
  stress: { text: "text-red-400", bar: "bg-red-400/30" },
  recovery: { text: "text-emerald-400", bar: "bg-emerald-400/30" },
  inflammation: { text: "text-amber-400", bar: "bg-amber-400/30" },
  nutrition: { text: "text-cyan-accent", bar: "bg-cyan-accent/30" },
  neuro: { text: "text-purple-400", bar: "bg-purple-400/30" },
};

interface BiomarkersProps {
  badge?: string;
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  customUseCases?: { label: string; icon: React.ReactNode }[];
}

export default function Biomarkers({
  badge = "Biologie Avancée",
  title,
  subtitle = "Mesurer l\u2019invisible pour garantir la longévité de vos joueurs.",
  description = "Une investigation clinique profonde via l\u2019analyse de biomarqueurs clés : cortisol, DHEA, Index Oméga-3, acides gras érythrocytaires, marqueurs HVA. Le tableau de bord biologique qui manque à votre staff.",
  customUseCases,
}: BiomarkersProps) {
  const defaultTitle = (
    <>
      Audit Biologique &amp; Prévention
      <br />
      du <span className="text-cyan-accent">Surentraînement</span>.
    </>
  );

  return (
    <section id="biomarkers" className="py-24 md:py-32 bg-bg-secondary relative overflow-hidden">
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Decorative DNA helix dots */}
      <div className="absolute top-20 right-10 opacity-[0.03]">
        <svg width="200" height="400" viewBox="0 0 200 400">
          {Array.from({ length: 20 }).map((_, i) => (
            <g key={i}>
              <circle cx={100 + Math.sin(i * 0.6) * 60} cy={i * 20} r="3" fill="#D90429" />
              <circle cx={100 - Math.sin(i * 0.6) * 60} cy={i * 20} r="2" fill="#D90429" />
              <line
                x1={100 + Math.sin(i * 0.6) * 60}
                y1={i * 20}
                x2={100 - Math.sin(i * 0.6) * 60}
                y2={i * 20}
                stroke="#D90429"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-cyan-accent" />
            <p className="text-cyan-accent text-xs font-medium tracking-[0.3em] uppercase">
              {badge}
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {title || defaultTitle}
          </h2>
          <p className="text-text-secondary leading-relaxed text-lg">
            {subtitle}
          </p>
          <p className="text-text-secondary leading-relaxed mt-3">
            {description}
          </p>
        </div>

        {/* Main content: biomarker cards + sidebar */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Biomarker panel — takes 2 cols */}
          <div className="lg:col-span-2 space-y-3">
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-bg-card/50 border border-white/5 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse-slow" />
                <span className="text-text-muted text-[10px] font-mono tracking-widest uppercase">
                  Panel Biomarqueurs — PRofiling Labo
                </span>
              </div>
              <span className="text-text-muted/40 text-[10px] font-mono">
                v2.1
              </span>
            </div>

            {/* Biomarker rows */}
            {biomarkers.map((bm) => {
              const style = zoneStyles[bm.zone] || { text: "text-cyan-accent", bar: "bg-cyan-accent/30" };

              return (
                <div
                  key={bm.id}
                  className="group bg-bg-card border border-white/5 rounded-xl p-5 hover:border-cyan-accent/15 transition-all"
                >
                  <div className="flex items-start gap-4">
                    {/* ID badge */}
                    <div className="w-12 h-12 rounded-lg bg-bg-primary border border-white/5 flex items-center justify-center shrink-0">
                      <span className={`font-mono text-xs font-bold ${style.text}`}>
                        {bm.id}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-bold group-hover:text-text-primary transition-colors">
                          {bm.name}
                        </h3>
                        <span className="text-text-muted/60 text-[10px] font-mono">
                          {bm.range}
                        </span>
                      </div>

                      {/* Level bar */}
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden mb-3">
                        <div
                          className={`h-full rounded-full ${style.bar}`}
                          style={{ width: bm.barWidth }}
                        />
                      </div>

                      <p className="text-text-secondary text-xs leading-relaxed">
                        {bm.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar — use cases + CTA */}
          <div className="space-y-6">
            {/* Use cases */}
            <div className="bg-bg-card border border-white/5 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <svg className="w-4 h-4 text-cyan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <p className="text-xs font-medium tracking-widest uppercase text-text-muted">
                  Cas d&apos;usage
                </p>
              </div>
              <div className="space-y-3">
                {(customUseCases || useCases).map((uc) => (
                  <div
                    key={uc.label}
                    className="flex items-center gap-3 bg-bg-primary border border-white/5 rounded-lg px-4 py-3 group hover:border-cyan-accent/20 transition-all"
                  >
                    <div className="w-8 h-8 rounded bg-cyan-accent/10 border border-cyan-accent/20 flex items-center justify-center text-cyan-accent shrink-0">
                      {uc.icon}
                    </div>
                    <p className="text-text-secondary text-sm font-medium group-hover:text-text-primary transition-colors">
                      {uc.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Data flow diagram */}
            <div className="bg-bg-card border border-white/5 rounded-xl p-6">
              <p className="text-xs font-medium tracking-widest uppercase text-text-muted mb-5">
                Processus
              </p>
              <div className="space-y-4">
                {[
                  { step: "01", label: "Recommandation du bilan", detail: "Sélection des marqueurs pertinents" },
                  { step: "02", label: "Prélèvement laboratoire", detail: "LIMS-MBNext ou partenaires" },
                  { step: "03", label: "Interprétation PRofiling", detail: "Analyse croisée sport-spécifique" },
                  { step: "04", label: "Plan d'action", detail: "Recommandations individualisées" },
                ].map((s, i, arr) => (
                  <div key={s.step} className="relative">
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 flex items-center justify-center">
                          <span className="text-cyan-accent font-mono text-[10px] font-bold">{s.step}</span>
                        </div>
                        {i < arr.length - 1 && (
                          <div className="w-px h-6 bg-cyan-accent/10 mt-1" />
                        )}
                      </div>
                      <div className="pt-1">
                        <p className="text-text-primary text-sm font-semibold">{s.label}</p>
                        <p className="text-text-muted text-xs">{s.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-cyan-accent text-bg-primary w-full py-3.5 rounded-lg font-semibold text-sm hover:bg-cyan-accent/90 transition-all group"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              Consulter un expert
            </a>
          </div>
        </div>

        {/* Transparency note */}
        <div className="mt-12 flex items-start gap-3 bg-bg-card/50 border border-white/5 rounded-lg px-5 py-4 max-w-3xl">
          <svg className="w-4 h-4 text-text-muted shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <p className="text-text-muted text-xs leading-relaxed">
            Service d&apos;expertise incluant la recommandation de bilans et
            l&apos;interprétation scientifique des résultats. Les frais de
            laboratoire (LIMS-MBNext ou partenaires) sont indépendants des
            honoraires d&apos;audit PRofiling.
          </p>
        </div>
      </div>
    </section>
  );
}
