import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Biomarkers from "@/components/Biomarkers";
import OffresExecutive from "@/components/OffresExecutive";
import ResilienceBio from "@/components/ResilienceBio";

export const metadata: Metadata = {
  title: "Dirigeants & Prévention | PRofiling",
  description:
    "Bilan de résilience biologique pour dirigeants. Prévention du burn-out, gestion du stress et optimisation de l'énergie des décideurs.",
  openGraph: {
    title: "Dirigeants & Prévention | PRofiling",
    description:
      "Bilan de résilience biologique pour dirigeants. Prévention du burn-out, gestion du stress et optimisation de l'énergie des décideurs.",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dirigeants & Prévention | PRofiling",
    description:
      "Bilan de résilience biologique pour dirigeants. Prévention du burn-out, gestion du stress et optimisation de l'énergie des décideurs.",
    images: ["/images/og-image.jpg"],
  },
};

const executiveUseCases = [
  {
    label: "Prévention du Burn-out",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    label: "Fatigue & Sommeil",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
  },
  {
    label: "Clarté mentale (Brain fog)",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

export default function ExecutivePage() {
  return (
    <>
      <PageHero
        badge="Santé Dirigeant &amp; Prévention"
        title={
          <>
            Protégez votre premier capital :{" "}
            <span className="text-cyan-accent">Vous</span>.
          </>
        }
        subtitle="Le burn-out n'est pas qu'une fatigue mentale, c'est un effondrement physiologique. Découvrez l'approche clinique pour mesurer, anticiper et optimiser la résilience des décideurs."
      />
      <div className="gradient-line" />

      <ResilienceBio />
      <div className="gradient-line" />

      {/* Biomarkers – customized for Executive */}
      <Biomarkers
        badge="Biologie Avancée"
        title={
          <>
            Audit Biologique &amp; Optimisation
            <br />
            <span className="text-cyan-accent">Énergétique</span>.
          </>
        }
        subtitle="Mesurer l'invisible pour préserver votre capital santé et votre performance cognitive."
        description="Une investigation clinique via l'analyse de biomarqueurs clés : cortisol, DHEA, Index Oméga-3, acides gras érythrocytaires, marqueurs HVA. Le tableau de bord biologique qui manque aux décideurs."
        customUseCases={executiveUseCases}
      />
      <div className="gradient-line" />

      <OffresExecutive />
    </>
  );
}
