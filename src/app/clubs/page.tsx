import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProblemSolution from "@/components/ProblemSolution";
import Dashboard from "@/components/Dashboard";
import Services from "@/components/Services";
import Masterclasses from "@/components/Masterclasses";
import Biomarkers from "@/components/Biomarkers";
import MiniAbout from "@/components/MiniAbout";

export const metadata: Metadata = {
  title: "Clubs & Staffs | PRofiling",
  description:
    "Suivi anthropométrique saisonnier pour clubs professionnels. Protocole ISAK, dashboard partagé, prévention des blessures.",
  openGraph: {
    title: "Clubs & Staffs | PRofiling",
    description:
      "Suivi anthropométrique saisonnier pour clubs professionnels. Protocole ISAK, dashboard partagé, prévention des blessures.",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clubs & Staffs | PRofiling",
    description:
      "Suivi anthropométrique saisonnier pour clubs professionnels. Protocole ISAK, dashboard partagé, prévention des blessures.",
    images: ["/images/og-image.jpg"],
  },
};

export default function ClubsPage() {
  return (
    <>
      <PageHero
        badge="Clubs professionnels &amp; Staffs médicaux"
        title={
          <>
            L&apos;audit clinique pour{" "}
            <span className="text-cyan-accent">votre effectif</span>.
          </>
        }
        subtitle="Protocole ISAK standardisé, dashboard digital partagé avec votre staff, suivi longitudinal sur la saison."
        ctaText="Demander un devis pour mon équipe"
        ctaHref="#club-services"
      />
      <div className="gradient-line" />
      <ProblemSolution />
      <Dashboard />
      <div className="gradient-line" />
      <Services />
      <div className="gradient-line" />
      <Masterclasses />
      {/* TODO: Réactiver cette section quand le service biologie sera officiellement lancé */}
      {/* <Biomarkers /> */}
      <div className="gradient-line" />
      <MiniAbout
        roleLabel="Votre intervenant"
        description="Anthropométriste certifié ISAK Niveau 1, formé au Campus du Paris Saint-Germain. Titulaire d'un Master en Nutrition du Sport. Une expertise clinique au service de la performance de vos effectifs."
      />
    </>
  );
}
