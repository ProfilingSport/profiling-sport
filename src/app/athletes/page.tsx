import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhyIsak from "@/components/WhyIsak";
import PricingCard from "@/components/PricingCard";
import MiniAbout from "@/components/MiniAbout";

export const metadata: Metadata = {
  title: "Athlètes Individuels | PRofiling",
  description:
    "Audit premium de composition corporelle pour athlètes individuels. Coaching packs course à pied et suivi personnalisé.",
  openGraph: {
    title: "Athlètes Individuels | PRofiling",
    description:
      "Audit premium de composition corporelle pour athlètes individuels. Coaching packs course à pied et suivi personnalisé.",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athlètes Individuels | PRofiling",
    description:
      "Audit premium de composition corporelle pour athlètes individuels. Coaching packs course à pied et suivi personnalisé.",
    images: ["/images/og-image.jpg"],
  },
};

const plans = [
  {
    badge: "Audit Clinique",
    name: "Audit Premium ISAK",
    price: "75 €",
    features: [
      "Mesure des 15 points (ISAK).",
      "Analyse de composition corporelle.",
      "Dashboard digital.",
      "Recommandations nutritionnelles.",
    ],
    cta: "Réserver mon audit",
    href: "#contact",
    highlight: false,
  },
  {
    badge: "Distance",
    name: "Programmation Évolutive",
    price: "49 € / mois",
    features: [
      "Plan d'entraînement ciblé.",
      "Calcul des allures.",
      "Ajustement selon la charge.",
      "100% en ligne.",
    ],
    cta: "Démarrer l'entraînement",
    href: "#contact",
    highlight: false,
  },
  {
    badge: "Hybride Premium",
    name: "Pack Performance 360",
    price: "À partir de 129 € / mois",
    features: [
      "Prog course sur-mesure.",
      "Suivi nutrition.",
      "1 Audit ISAK inclus par trimestre.",
      "2 visios par mois.",
    ],
    cta: "Postuler pour ce suivi",
    href: "#contact",
    highlight: true,
  },
];

export default function AthletesPage() {
  return (
    <>
      <PageHero
        badge="Athlètes individuels &amp; Compétiteurs"
        title={
          <>
            Votre audit{" "}
            <span className="text-cyan-accent">personnalisé</span>.
          </>
        }
        subtitle="Programmation course à pied, nutrition d'endurance, audit de composition corporelle et optimisation de la performance."
      />
      <div className="gradient-line" />
      <WhyIsak />
      <div className="gradient-line" />

      {/* Offres Athlètes */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
              Nos offres
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Un accompagnement à votre{" "}
              <span className="text-cyan-accent">mesure</span>.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-line" />
      <MiniAbout
        roleLabel="Votre coach"
        description="Coureur de fond (1h17 au semi-marathon, 2h54 au marathon), diplômé en STAPS et titulaire d'un Master en Nutrition du Sport. Athlète et scientifique, je parle le même langage que vous."
      />
    </>
  );
}
