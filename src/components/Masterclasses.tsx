const topics = [
  {
    code: "NTR-01",
    title: "Optimisation du Jour de Match",
    desc: "Stratégie nutritionnelle pré-compétition, timing des apports glucidiques, protocole d'hydratation individualisé selon le poste et les conditions climatiques.",
    metrics: ["Glycogène +18%", "VO2 stable", "Hydratation cible"],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    code: "RCV-02",
    title: "Protocoles de Récupération Accélérée",
    desc: "Fenêtre anabolique post-effort, ratio protéines/glucides optimal, chronobiologie de la récupération. Application directe pour réduire la fatigue résiduelle entre deux matchs.",
    metrics: ["CK -24%", "Sommeil +12%", "RPE optimisé"],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    code: "INF-03",
    title: "Gestion de l'Inflammation",
    desc: "Identification des signaux inflammatoires chroniques, stratégies anti-inflammatoires nutritionnelles (oméga-3, polyphénols), monitoring des marqueurs biologiques associés.",
    metrics: ["CRP contrôlée", "O3 Index > 8%", "TNF-a suivi"],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    code: "HYD-04",
    title: "Hydratation de Précision",
    desc: "Test de sudation individualisé, calcul des pertes hydriques par poste, élaboration de plans d'hydratation match et entraînement avec suivi de l'osmolalité urinaire.",
    metrics: ["Sweat rate", "Na+ ajusté", "Osmol. < 700"],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-1.2 0-3.8 4.3-5 7-1.5 3.5-.8 7 2 9s5.5 1.5 7-.5c1.5-2 2.5-5 1-8.5C15.8 7.3 13.2 3 12 3z" />
      </svg>
    ),
  },
];

const formats = [
  { label: "Conférence Staff", duration: "90 min", icon: "01" },
  { label: "Atelier Pratique", duration: "3h", icon: "02" },
  { label: "Programme Saison", duration: "Sur mesure", icon: "03" },
];

export default function Masterclasses() {
  return (
    <section id="masterclasses" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Decorative telemetry lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-cyan-accent" />
              <p className="text-cyan-accent text-xs font-medium tracking-[0.3em] uppercase">
                Formation &amp; Performance
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Conférences &amp; Ateliers{" "}
              <span className="text-cyan-accent">Staff</span>.
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              L&apos;excellence se construit au quotidien : formez vos athlètes
              et votre staff aux derniers protocoles de nutrition de pointe.
            </p>
          </div>

          {/* Data badge */}
          <div className="flex items-center gap-4 bg-bg-card border border-white/5 rounded-lg px-5 py-3 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-cyan-accent/10 border border-cyan-accent/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
              </svg>
            </div>
            <div>
              <p className="text-text-primary text-sm font-semibold">Centres de Formation</p>
              <p className="text-text-muted text-xs">&amp; Clubs Professionnels</p>
            </div>
          </div>
        </div>

        {/* Topic cards — 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {topics.map((topic) => (
            <div
              key={topic.code}
              className="group bg-bg-card border border-white/5 rounded-xl p-6 hover:border-cyan-accent/20 transition-all relative overflow-hidden"
            >
              {/* Telemetry code */}
              <div className="absolute top-4 right-4 font-mono text-[10px] text-text-muted/40 tracking-widest">
                {topic.code}
              </div>

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-cyan-accent/10 border border-cyan-accent/20 flex items-center justify-center text-cyan-accent shrink-0 group-hover:bg-cyan-accent/20 transition-colors">
                  {topic.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-2 group-hover:text-cyan-accent transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {topic.desc}
                  </p>

                  {/* Metrics tags — F1 telemetry style */}
                  <div className="flex flex-wrap gap-2">
                    {topic.metrics.map((m) => (
                      <span
                        key={m}
                        className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium text-cyan-accent bg-cyan-accent/5 border border-cyan-accent/10 rounded-full px-2.5 py-1 tracking-wide"
                      >
                        <span className="w-1 h-1 rounded-full bg-cyan-accent animate-pulse-slow" />
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Format bar + CTA */}
        <div className="bg-bg-secondary border border-white/5 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            {/* Available formats */}
            <div>
              <p className="text-text-muted text-xs font-medium tracking-widest uppercase mb-4">
                Formats disponibles
              </p>
              <div className="flex flex-wrap gap-4">
                {formats.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 bg-bg-card border border-white/5 rounded-lg px-4 py-3"
                  >
                    <span className="text-cyan-accent font-mono text-xs font-bold opacity-40">
                      {f.icon}
                    </span>
                    <div>
                      <p className="text-text-primary text-sm font-semibold">{f.label}</p>
                      <p className="text-text-muted text-xs">{f.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-cyan-accent text-bg-primary px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-cyan-accent/90 transition-all shrink-0 group"
            >
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Demander un catalogue d&apos;interventions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
