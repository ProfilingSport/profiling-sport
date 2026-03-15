import Image from "next/image";

const credentials = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    label: "Certifié ISAK Niveau 1",
    detail: "Formation au Campus du Paris Saint-Germain",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "1h17 au semi-marathon / 2h54 au marathon",
    detail: "Athlète — je comprends les exigences du terrain",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    label: "Master en Nutrition du Sport",
    detail: "Expertise nutrition appliquée à la performance",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-3.05a1.45 1.45 0 01-.57-1.97l3.07-5.11a1.45 1.45 0 011.97-.57l5.1 3.05c.66.4.88 1.26.57 1.97l-3.07 5.11a1.45 1.45 0 01-1.97.57z" />
      </svg>
    ),
    label: "Pince Harpenden",
    detail: "Outil de référence — précision au dixième de mm",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    label: "Approche scientifique",
    detail: "Données brutes, protocole reproductible, zéro estimation",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-bg-secondary relative">
      {/* Banner image — course de nuit */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/hero-race.jpg"
          alt="Paul Rettien en compétition de course à pied"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />
        {/* Dark overlay to mask original text and blend with site */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary via-bg-primary/70 to-bg-secondary" />
        <div className="absolute inset-0 bg-bg-primary/50" />
        {/* Subtle cyan tint */}
        <div className="absolute inset-0 bg-cyan-accent/5" />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-10 pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Visual side — portrait + profile card */}
          <div className="relative">
            <div className="bg-bg-card border border-white/5 rounded-xl overflow-hidden">
              {/* Portrait photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/paul-portrait.jpg"
                  alt="Paul Rettien, fondateur de PRofiling"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Bottom gradient for smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg-card to-transparent" />
              </div>

              {/* Profile info under the photo */}
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Paul Rettien</h3>
                    <p className="text-cyan-accent text-sm font-medium">
                      Fondateur &mdash; PRofiling
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-cyan-accent/10 border border-cyan-accent/20 flex items-center justify-center">
                    <span className="text-cyan-accent text-sm font-bold">PR</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="gradient-line mb-4" />

                {/* Stats */}
                <div className="grid grid-cols-4 gap-3">
                  <div className="text-center">
                    <p className="text-xl font-bold text-cyan-accent">1h17</p>
                    <p className="text-text-muted text-[9px] mt-1 uppercase tracking-wider">
                      Semi
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-cyan-accent">2h54</p>
                    <p className="text-text-muted text-[9px] mt-1 uppercase tracking-wider">
                      Marathon
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-cyan-accent">N1</p>
                    <p className="text-text-muted text-[9px] mt-1 uppercase tracking-wider">
                      ISAK
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-cyan-accent">PSG</p>
                    <p className="text-text-muted text-[9px] mt-1 uppercase tracking-wider">
                      Campus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="pt-4 md:pt-8">
            <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
              À propos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              La donnée au service
              <br />
              de la <span className="text-cyan-accent">performance</span>.
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Je suis Paul Rettien, athlète, titulaire d&apos;un Master en
              Nutrition du Sport et anthropométriste certifié ISAK Niveau 1.
              Ma formation ISAK a été réalisée au Campus du Paris
              Saint-Germain, aux côtés des référents de la mesure
              anthropométrique en France.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              En tant que coureur de fond (1h17 au semi, 2h54 au marathon), je connais
              les exigences de la performance : chaque gramme, chaque
              pourcentage, chaque asymétrie compte. C&apos;est cette obsession
              du détail que j&apos;apporte à chaque session PRofiling, avec un
              outil de laboratoire — la pince Harpenden — et un protocole qui ne
              laisse aucune place à l&apos;approximation.
            </p>

            {/* Credentials */}
            <div className="space-y-4">
              {credentials.map((cred) => (
                <div key={cred.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-cyan-accent/10 border border-cyan-accent/20 flex items-center justify-center text-cyan-accent shrink-0 mt-0.5">
                    {cred.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{cred.label}</p>
                    <p className="text-text-muted text-xs">{cred.detail}</p>
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
