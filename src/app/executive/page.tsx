import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Biomarkers from "@/components/Biomarkers";
import WhyIsak from "@/components/WhyIsak";

export const metadata: Metadata = {
  title: "Entreprises & Dirigeants | PRofiling",
  description:
    "Bilan Executive Health sur-mesure. Audit clinique ISAK, stratégie nutritionnelle et prévention santé pour dirigeants et entreprises.",
  openGraph: {
    title: "Entreprises & Dirigeants | PRofiling",
    description:
      "Bilan Executive Health sur-mesure. Audit clinique ISAK, stratégie nutritionnelle et prévention santé pour dirigeants et entreprises.",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entreprises & Dirigeants | PRofiling",
    description:
      "Bilan Executive Health sur-mesure. Audit clinique ISAK, stratégie nutritionnelle et prévention santé pour dirigeants et entreprises.",
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
        badge="Entreprises &amp; Dirigeants"
        title={
          <>
            L&apos;exigence du{" "}
            <span className="text-cyan-accent">haut niveau</span>, appliquée
            à votre quotidien.
          </>
        }
        subtitle="Gestion du stress, optimisation de l'énergie et prévention santé. Un accompagnement clinique sur-mesure pour les décideurs."
      />
      <div className="gradient-line" />
      <WhyIsak />
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

      {/* Offres Entreprises */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
              Nos offres
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Un accompagnement à la hauteur de vos{" "}
              <span className="text-cyan-accent">ambitions</span>.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {/* CARTE 1 — Bilan Santé Dirigeant */}
            <div className="relative bg-bg-card rounded-xl border border-white/5 hover:border-white/10 overflow-hidden flex flex-col transition-all">
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block w-fit text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded mb-4 bg-white/5 text-text-secondary">
                  Audit Individuel
                </span>
                <h3 className="text-xl font-bold mb-1">Bilan Santé Dirigeant</h3>
                <div className="mb-6 mt-4">
                  <p className="text-2xl font-bold text-cyan-accent">Sur devis</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Mesure ISAK complète (15 points).",
                    "Stratégie Nutrition-Santé personnalisée.",
                    "Analyse Récupération & Sommeil.",
                  ].map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <svg className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center py-3 rounded font-semibold text-sm transition-all border border-white/10 text-text-secondary hover:border-cyan-accent/30 hover:text-text-primary"
                >
                  Demander un bilan
                </a>
              </div>
            </div>

            {/* CARTE 2 — Signature 360 (Noir & Argent) */}
            <div className="relative rounded-xl border border-[#6B7280] overflow-hidden flex flex-col transition-all hover:border-[#9CA3AF]" style={{ background: "#050505", boxShadow: "0 4px 14px rgba(107,114,128,0.15)" }}>
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block w-fit text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded mb-4 bg-[#888888]/10 border border-[#888888]/20 text-[#BBBBBB]">
                  Offre Signature
                </span>
                <h3 className="text-xl font-bold mb-1 text-white">Accompagnement Signature 360</h3>
                <div className="mb-6 mt-4">
                  <p className="text-2xl font-bold text-[#CCCCCC]">Sur devis</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#888888]/30 to-transparent mb-6" />
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Disponibilité prioritaire & déplacements à discrétion.",
                    "Suivi nutritionnel continu.",
                    "Recommandation bilans sanguins ciblés.",
                    "Monitoring Cortisol & stress.",
                  ].map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <svg className="w-4 h-4 text-[#AAAAAA] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#B0B0B0]">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center py-3 rounded font-semibold text-sm transition-all bg-[#2A2A2A] border border-[#888888]/30 text-[#CCCCCC] hover:bg-[#333333] hover:border-[#AAAAAA]/40 hover:text-white"
                >
                  Prendre rendez-vous
                </a>
              </div>
            </div>

            {/* CARTE 3 — Conférences & Workshops */}
            <div className="relative bg-bg-card rounded-xl border border-white/5 hover:border-white/10 overflow-hidden flex flex-col transition-all">
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block w-fit text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded mb-4 bg-white/5 text-text-secondary">
                  Bilan Équipe
                </span>
                <h3 className="text-xl font-bold mb-1">Conférences &amp; Workshops</h3>
                <div className="mb-6 mt-4">
                  <p className="text-2xl font-bold text-cyan-accent">Sur devis</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Masterclass Nutrition & Performance (1h30).",
                    "Ateliers pratiques en entreprise.",
                    "Optimisation de la vitalité des collaborateurs.",
                    "Support digital inclus.",
                  ].map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <svg className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center py-3 rounded font-semibold text-sm transition-all border border-white/10 text-text-secondary hover:border-cyan-accent/30 hover:text-text-primary"
                >
                  Organiser une conférence
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
