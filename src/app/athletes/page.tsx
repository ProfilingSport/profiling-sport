import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhyIsak from "@/components/WhyIsak";
import MiniAbout from "@/components/MiniAbout";
import ProtocoleAthlete from "@/components/ProtocoleAthlete";
import OffresAthletes from "@/components/OffresAthletes";

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
        subtitle="Audit de composition corporelle clinique (ISAK) et optimisation nutritionnelle de la performance."
      />
      <div className="gradient-line" />
      <WhyIsak />
      <div className="gradient-line" />

      <ProtocoleAthlete />
      <div className="gradient-line" />

      <OffresAthletes />

      <div className="gradient-line" />
      <MiniAbout
        roleLabel="Votre coach"
        description="Coureur de fond (1h17 au semi-marathon, 2h54 au marathon), diplômé en STAPS et titulaire d'un Master en Nutrition du Sport. Athlète et scientifique, je parle le même langage que vous."
      />
    </>
  );
}
