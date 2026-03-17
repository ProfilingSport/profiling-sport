"use client";

import {
  Check,
  Zap,
  CalendarCheck,
  Star,
  ClipboardList,
  BarChart3,
  MonitorDot,
  RefreshCcw,
  ShieldCheck,
  Activity,
  SlidersHorizontal,
  UserRoundCog,
  Dumbbell,
} from "lucide-react";

/* ───────────────────────── DATA ───────────────────────── */

const offers = [
  {
    badge: "Audit Flash",
    name: "L'état des lieux ponctuel",
    price: "À partir de 55 € / joueur",
    priceNote: "(Tarif adapté selon la taille de l'effectif)",
    features: [
      "Intervention sur site (1/2 journée, sans perturber le planning).",
      "Mesure ISAK complète de l'effectif pro (15 points).",
      "Cartographie des profils morphologiques.",
      "Rapport global remis au staff médical et technique.",
    ],
    highlight: false,
  },
  {
    badge: "Protocole Saisonnier",
    name: "L'externalisation complète",
    price: "Sur devis personnalisé",
    priceNote: "L'externalisation complète de votre data morphologique",
    features: [
      "4 Audits ISAK aux moments clés (Reprise, Fin de prépa, Trêve, Sprint final).",
      "Génération du Dashboard PRofiling de l'effectif après chaque passage.",
      "Suivi longitudinal des courbes de progression par joueur.",
      "Directives nutritionnelles stratégiques après chaque passage.",
    ],
    bonus: "Intégration et croisement avec vos bilans sanguins.",
    highlight: true,
  },
];

const timeline = [
  {
    icon: Zap,
    title: "L'Audit Terrain",
    desc: "Déplacement sur votre lieu d'entraînement. Prises de mesures intégrées à vos soins, sans perturber le planning.",
  },
  {
    icon: BarChart3,
    title: "Le Traitement Data",
    desc: "Calcul des somatotypes sous 24h. Option : croisement direct avec les bilans sanguins.",
  },
  {
    icon: MonitorDot,
    title: "Restitution & Stratégie",
    desc: "Remise du Dashboard analytique. Ciblage des profils à risque et livraison des directives.",
  },
  {
    icon: RefreshCcw,
    title: "Le Monitoring Annuel",
    desc: "Répétition du protocole aux moments clés de la saison pour ajuster la charge d'entraînement.",
  },
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "Validation de votre travail",
    desc: "Objectivez le résultat de vos entraînements. Ne confondez plus perte de masse grasse et fonte musculaire liée à la charge de travail.",
  },
  {
    icon: Activity,
    title: "Prévention des blessures",
    desc: "Détectez la perte de masse musculaire liée à la fatigue accumulée avant la blessure. Un joueur cadre qui évite l'infirmerie sécurise votre saison sportive et financière.",
  },
  {
    icon: SlidersHorizontal,
    title: "Aide à la décision",
    desc: "Identifiez facilement les profils morphologiques (Endomorphe, Ectomorphe) de votre vestiaire. Vous disposez de datas fiables pour adapter vos propres programmes athlétiques et nutritionnels.",
  },
];

const annexes = [
  {
    icon: UserRoundCog,
    title: "Joueurs à risque (Pack 360)",
    desc: "L'audit a révélé un profil nécessitant une intervention urgente (surpoids, retour de blessure) ? Nous pouvons prendre le joueur en charge au quotidien (menus, suivi bi-mensuel) en option individuelle.",
  },
];

/* ───────────────────────── COMPONENT ───────────────────────── */

export default function Services() {
  return (
    <section id="club-services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* ════════════════ 1. NOS OFFRES CLUBS ════════════════ */}
        <div className="text-center mb-16">
          <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
            Nos offres
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Des solutions adaptées à votre{" "}
            <span className="text-cyan-accent">effectif</span>.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            De l&apos;audit ponctuel à l&apos;externalisation complète de votre suivi morphologique.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-32">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className={`relative bg-bg-card rounded-xl border overflow-hidden flex flex-col transition-all ${
                offer.highlight
                  ? "border-cyan-accent/30 glow-border"
                  : "border-white/5 hover:border-white/10"
              }`}
            >
              {offer.highlight && (
                <div className="bg-cyan-accent text-bg-primary text-xs font-bold text-center py-1.5 tracking-widest uppercase">
                  Recommandé
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <span
                  className={`inline-block w-fit text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded mb-4 ${
                    offer.highlight
                      ? "bg-cyan-accent/10 text-cyan-accent"
                      : "bg-white/5 text-text-secondary"
                  }`}
                >
                  {offer.badge}
                </span>

                <h3 className="text-xl font-bold mb-1">{offer.name}</h3>

                <div className="mb-6 mt-4">
                  <p className="text-2xl font-bold text-cyan-accent">{offer.price}</p>
                  <p className="text-text-muted text-xs mt-1">{offer.priceNote}</p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-cyan-accent/30 to-transparent mb-6" />

                <ul className="space-y-3 mb-8 flex-1">
                  {offer.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Check className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{f}</span>
                    </li>
                  ))}
                  {offer.bonus && (
                    <li className="flex gap-3 text-sm">
                      <Star className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                      <span className="text-text-secondary">
                        <span className="text-[#F59E0B] font-semibold">Bonus : </span>
                        {offer.bonus}
                      </span>
                    </li>
                  )}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center py-3 rounded font-semibold text-sm transition-all ${
                    offer.highlight
                      ? "bg-cyan-accent text-bg-primary hover:bg-cyan-accent/90"
                      : "border border-white/10 text-text-secondary hover:border-cyan-accent/30 hover:text-text-primary"
                  }`}
                >
                  Demander un devis
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ════════════════ 2. TIMELINE PROTOCOLE ════════════════ */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
              Protocole
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Zéro friction pour{" "}
              <span className="text-cyan-accent">votre staff</span>.
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Un processus clé en main, intégré à votre planning sans le perturber.
            </p>
          </div>

          {/* Desktop : horizontal */}
          <div className="hidden md:block relative max-w-5xl mx-auto">
            {/* Ligne horizontale */}
            <div className="absolute top-8 left-0 right-0 h-px bg-white/10" />
            <div className="grid grid-cols-4 gap-6">
              {timeline.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative flex flex-col items-center text-center">
                    {/* Point lumineux */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-bg-card border border-cyan-accent/30 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-cyan-accent" />
                      <div className="absolute inset-0 rounded-full bg-cyan-accent/5" />
                    </div>
                    <span className="text-cyan-accent text-xs font-semibold tracking-widest uppercase mb-2">
                      Étape {i + 1}
                    </span>
                    <h4 className="text-sm font-bold mb-2">{step.title}</h4>
                    <p className="text-text-muted text-xs leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile : vertical */}
          <div className="md:hidden relative pl-8">
            {/* Ligne verticale */}
            <div className="absolute left-[1.15rem] top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-10">
              {timeline.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative flex gap-5">
                    {/* Point */}
                    <div className="relative z-10 shrink-0 w-10 h-10 -ml-8 rounded-full bg-bg-card border border-cyan-accent/30 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-cyan-accent" />
                    </div>
                    <div>
                      <span className="text-cyan-accent text-xs font-semibold tracking-widest uppercase">
                        Étape {i + 1}
                      </span>
                      <h4 className="text-sm font-bold mt-1 mb-1">{step.title}</h4>
                      <p className="text-text-muted text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ════════════════ 3. POURQUOI ADOPTER LE PROTOCOLE ════════════════ */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
              Bénéfices
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Pourquoi adopter le{" "}
              <span className="text-cyan-accent">protocole</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-bg-card border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan-accent/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-cyan-accent" />
                  </div>
                  <h4 className="text-base font-bold mb-3">{item.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ════════════════ 4. SOLUTIONS ANNEXES ════════════════ */}
        <div>
          <div className="text-center mb-10">
            <p className="text-text-muted text-sm font-medium tracking-widest uppercase mb-3">
              Solutions annexes
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {annexes.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-bg-secondary/60 border border-white/5 rounded-xl p-8 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-text-muted" />
                  </div>
                  <h4 className="text-sm font-bold mb-3">{item.title}</h4>
                  <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
