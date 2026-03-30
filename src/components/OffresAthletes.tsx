"use client";

import PricingCard from "./PricingCard";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const plans = [
  {
    badge: "Audit Ponctuel",
    name: "Bilan Initial ISAK",
    price: "75 €",
    features: [
      "Mesure clinique complète (21 points).",
      "Détermination du profil morphologique.",
      "Remise du Dashboard PRofiling.",
      "Entretien de restitution (30 min).",
    ],
    cta: "Réserver mon audit",
    href: "#contact",
    highlight: false,
  },
  {
    badge: "Pack Saisonnier",
    name: "Suivi Longitudinal",
    price: "270 € / an",
    priceNote: "À la place de 300 €",
    subtitle: "4 passages aux moments clés de la saison.",
    features: [
      "4 Audits ISAK complets.",
      "Suivi des courbes d'évolution.",
      "Ajustement des cibles physiologiques.",
      "Idéal : prépas marathon, triathlon, sports à catégories de poids.",
    ],
    cta: "S'engager sur la saison",
    href: "#contact",
    highlight: true,
  },
  {
    badge: "Full Service",
    name: "Pack Performance 360",
    price: "À partir de 129 € / mois",
    subtitle: "L'externalisation totale de votre nutrition.",
    features: [
      "Audits ISAK trimestriels inclus.",
      "Planification nutritionnelle sur-mesure.",
      "Protocoles de recharge (course/match).",
      "Suivi bi-mensuel et ajustements.",
    ],
    cta: "Postuler pour ce suivi",
    href: "#contact",
    highlight: false,
  },
];

export default function OffresAthletes() {
  return (
    <section id="offres" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* En-tête */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
            Nos offres
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Un accompagnement à votre{" "}
            <span className="text-cyan-accent">mesure</span>.
          </h2>
        </ScrollReveal>

        {/* Cartes de prix */}
        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <StaggerItem key={plan.name} className="h-full">
              <PricingCard {...plan} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bannière Événement en salle */}
        <ScrollReveal delay={0.2} className="mt-12 max-w-6xl mx-auto">
          <div className="rounded-xl border border-white/5 bg-[#111113] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">
                Faites intervenir PRofiling dans votre{" "}
                <span className="text-cyan-accent">structure</span>.
              </h3>
              <p className="text-text-muted text-[0.9rem] leading-relaxed">
                Box de CrossFit, clubs d&apos;arts martiaux, salles de sport…
                Organisez une session d&apos;audits ISAK groupés au sein de
                votre établissement. Offrez une plus-value scientifique à vos
                adhérents et des données fiables à vos coachs.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded font-semibold text-sm bg-cyan-accent text-bg-primary hover:bg-cyan-accent/90 transition-all whitespace-nowrap"
            >
              Organiser un événement
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
