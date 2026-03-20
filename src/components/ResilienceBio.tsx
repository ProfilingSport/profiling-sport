"use client";

import { Activity, Brain, Zap } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const pillars = [
  {
    icon: Activity,
    title: "L'Axe du Stress (Cortisol / DHEA)",
    desc: "Évaluation de votre capacité d'adaptation et de votre niveau d'épuisement surrénalien.",
  },
  {
    icon: Brain,
    title: "L'Inflammation Silencieuse",
    desc: "Analyse des marqueurs (Oméga 3/6) responsables du brouillard mental et de la baisse de concentration.",
  },
  {
    icon: Zap,
    title: "Le Profil Métabolique",
    desc: "Cartographie de votre production d'énergie cellulaire pour des journées sans coup de pompe.",
  },
];

export default function ResilienceBio() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">

        {/* ── En-tête centré ── */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
            Bilan de Résilience Biologique
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            La biologie du{" "}
            <span className="text-cyan-accent">leadership</span>.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Le stress chronique modifie silencieusement votre chimie interne avant même
            l&apos;apparition des premiers symptômes d&apos;épuisement. Nous mesurons ce
            que vous ne ressentez pas encore.
          </p>
        </ScrollReveal>

        {/* ── Grille 3 cartes ── */}
        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={pillar.title}>
                <div className="bg-bg-card border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all h-full text-center">
                  <div className="w-12 h-12 rounded-lg bg-cyan-accent/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-5 h-5 text-cyan-accent" />
                  </div>
                  <h4 className="text-sm font-bold mb-3">{pillar.title}</h4>
                  <p className="text-text-muted text-[0.9rem] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
