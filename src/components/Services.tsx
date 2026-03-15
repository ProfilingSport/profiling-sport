import PricingCard from "./PricingCard";

const plans = [
  {
    badge: "Audit Flash",
    name: "État des lieux Effectif",
    subtitle: "Pré-saison & Trêve",
    price: "À partir de 55 € / joueur",
    priceNote: "(Tarif adapté selon la taille de l'effectif)",
    features: [
      "Intervention sur site (1 à 2 demi-journées).",
      "Mesure complète de l'effectif (15 points ISAK).",
      "Cartographie des profils morphologiques.",
      "Rapport global remis au staff technique.",
    ],
    cta: "Demander un devis",
    href: "#contact",
    highlight: false,
  },
  {
    badge: "Premium",
    name: "Forfait Club / Staff Médical",
    subtitle: "Suivi saisonnier continu",
    price: "Sur devis",
    priceNote: "",
    features: [
      "3 à 4 sessions de profiling sur la saison.",
      "Analyse de l'évolution du somatotype.",
      "Dashboard digital partagé avec le staff.",
      "Rapport de synthèse pour chaque période.",
    ],
    cta: "Demander un devis",
    href: "#contact",
    highlight: true,
  },
  {
    badge: "Événementiel",
    name: "Matinées PRofiling en Box",
    subtitle: "CrossFit & Salles privées",
    price: "Sur demande",
    priceNote: "",
    features: [
      "Sessions groupées organisées dans votre structure.",
      "Audit individuel ISAK pour vos adhérents.",
      "Dashboard individuel remis à chaque participant.",
      "Idéal pour animer vos challenges internes.",
    ],
    cta: "Organiser un événement",
    href: "#contact",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="club-services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Des solutions adaptées à votre{" "}
            <span className="text-cyan-accent">structure</span>.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            De l&apos;audit ponctuel de votre effectif à l&apos;événementiel
            pour votre salle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
