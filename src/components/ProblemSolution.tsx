const problemItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
      </svg>
    ),
    title: "Balances impédancemètres",
    desc: "Résultats faussés par l'hydratation, le dernier repas, l'heure de la journée. Jusqu'à 8% de marge d'erreur sur le taux de masse grasse.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.98 8.223A10.477 10.477 0 001.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
    title: "Les données invisibles",
    desc: "Aucune information sur la répartition segmentaire. Impossible de détecter une asymétrie musculaire avant qu'elle ne devienne une blessure.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Décisions à l'aveugle",
    desc: "Sans données fiables, chaque décision sur la nutrition, la charge d'entraînement ou la récupération repose sur de l'intuition — pas sur de la science.",
  },
];

const solutionItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Protocole ISAK standardisé",
    desc: "21 mesures anthropométriques selon le protocole international. Reproductible. Vérifiable. Utilisé aux Jeux Olympiques depuis 40 ans.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: "Pince Harpenden",
    desc: "L'outil de référence des laboratoires de physiologie du sport. Précision au dixième de millimètre. Aucune estimation algorithmique : la donnée brute.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Dashboard actionnable",
    desc: "Chaque mesure se traduit en décisions concrètes : ajustement nutritionnel, répartition des charges, détection précoce de sur-fatigue.",
  },
];

export default function ProblemSolution() {
  return (
    <section id="methode" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
            Méthode
          </p>
          <h2 className="text-3xl md:text-5xl mb-4">
            <span className="font-normal md:font-medium text-text-secondary">Votre balance vous </span>
            <span className="font-black text-white">ment.</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Les technologies grand public mesurent un signal électrique perturbé
            par l&apos;eau corporelle. Le protocole ISAK mesure directement le
            tissu adipeux sous-cutané, millimètre par millimètre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* ── Problem column — Fully greyed out / muted ── */}
          <div className="opacity-60">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-muted">
                Le problème
              </h3>
            </div>

            <div className="space-y-6">
              {problemItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-bg-card/50 border border-white/5 rounded-lg p-5"
                >
                  <div className="flex gap-4">
                    <div className="text-text-muted/60 shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-secondary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Solution column — Accent color, stands out ── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded bg-cyan-accent/10 border border-cyan-accent/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-cyan-accent">
                La solution PRofiling
              </h3>
            </div>

            <div className="space-y-6">
              {solutionItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-bg-card border border-white/5 rounded-lg p-5 hover:border-cyan-accent/20 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="text-cyan-accent/70 shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
