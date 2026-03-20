"use client";

import { Check, Presentation } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const plans = [
  {
    badge: "Audit Ponctuel",
    name: "Bilan Épuisement & Stress",
    subtitle: null,
    price: "Sur devis",
    priceNote: null,
    features: [
      "Analyse complète des biomarqueurs du stress.",
      "Évaluation du ratio Cortisol / DHEA.",
      "Profil Oméga-3 et inflammation silencieuse.",
      "Entretien de restitution personnalisé (45 min).",
    ],
    cta: "Demander un bilan",
    href: "#contact",
    highlight: false,
  },
  {
    badge: "Mentoring Annuel",
    name: "Mentoring Biologique 360",
    subtitle: "Suivi annuel pour cadres dirigeants.",
    price: "Sur devis",
    priceNote: null,
    features: [
      "4 bilans biologiques aux moments clés de l'année.",
      "Suivi longitudinal de vos marqueurs.",
      "Stratégie nutritionnelle anti-fatigue.",
      "Disponibilité prioritaire & visios mensuelles.",
    ],
    cta: "Rejoindre le programme",
    href: "#contact",
    highlight: true,
  },
];

export default function OffresExecutive() {
  return (
    <section id="offres-executive" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── En-tête ── */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
            Nos offres
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Un accompagnement à la hauteur de vos{" "}
            <span className="text-cyan-accent">ambitions</span>.
          </h2>
        </ScrollReveal>

        {/* ── Grille 2 cartes ── */}
        <StaggerContainer stagger={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`relative bg-bg-card rounded-xl border overflow-hidden flex flex-col transition-all h-full ${
                  plan.highlight
                    ? "border-cyan-accent/30 glow-border"
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                {plan.highlight && (
                  <div className="bg-cyan-accent text-bg-primary text-xs font-bold text-center py-1.5 tracking-widest uppercase">
                    Recommandé
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <span
                    className={`inline-block w-fit text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded mb-4 ${
                      plan.highlight
                        ? "bg-cyan-accent/10 text-cyan-accent"
                        : "bg-white/5 text-text-secondary"
                    }`}
                  >
                    {plan.badge}
                  </span>

                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  {plan.subtitle && (
                    <p className="text-text-muted text-sm mb-2">{plan.subtitle}</p>
                  )}

                  <div className="mb-6 mt-4">
                    <p className="text-2xl font-bold text-cyan-accent">{plan.price}</p>
                    {plan.priceNote && (
                      <p className="text-white/50 text-sm mt-1">{plan.priceNote}</p>
                    )}
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-accent/30 to-transparent mb-6" />

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm">
                        <Check className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.href}
                    className={`block text-center py-3 rounded font-semibold text-sm transition-all ${
                      plan.highlight
                        ? "bg-cyan-accent text-bg-primary hover:bg-cyan-accent/90"
                        : "border border-white/10 text-text-secondary hover:border-cyan-accent/30 hover:text-text-primary"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── Bannière Conférences & CODIR ── */}
        <ScrollReveal>
          <div className="bg-[#111113] border border-white/5 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-14 h-14 rounded-xl bg-cyan-accent/10 flex items-center justify-center shrink-0">
                <Presentation className="w-7 h-7 text-cyan-accent" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-bold mb-2">
                  Conférences &amp; Ateliers CODIR
                </h3>
                <p className="text-text-muted text-[0.9rem] leading-relaxed">
                  Sensibilisez vos équipes de direction à l&apos;hygiène de vie décisionnelle.
                  Masterclass nutrition &amp; performance cognitive, ateliers pratiques en
                  entreprise et optimisation de la vitalité des collaborateurs.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 border border-white/10 text-text-secondary hover:border-cyan-accent/30 hover:text-text-primary px-6 py-3 rounded font-semibold text-sm transition-all whitespace-nowrap"
              >
                Organiser une conférence
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
