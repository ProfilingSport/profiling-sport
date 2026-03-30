"use client";

import { ClipboardList, Ruler, LineChart, Target } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const steps = [
  {
    icon: ClipboardList,
    title: "L'Analyse du Profil",
    desc: "Échange sur vos objectifs de la saison, vos antécédents de blessures et votre ressenti actuel. Nous fixons le point de départ de votre performance.",
  },
  {
    icon: Ruler,
    title: "L'Audit Clinique (ISAK)",
    desc: "Prise de mesures sur 21 points anatomiques à l'aide de la pince Harpenden. Une cartographie millimétrée, loin des approximations des balances.",
  },
  {
    icon: LineChart,
    title: "Le Décodage des Datas",
    desc: "Remise de votre Dashboard PRofiling. Nous décryptons ensemble votre somatotype (répartition musculaire/adipeuse) pour comprendre comment votre corps réagit à l'entraînement.",
  },
  {
    icon: Target,
    title: "Le Plan d'Action",
    desc: "Transformation de vos données en directives nutritionnelles concrètes. Vous repartez avec des leviers précis pour optimiser votre récupération et vos charges de travail.",
  },
];

export default function ProtocoleAthlete() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">

        {/* ── En-tête centré ── */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
            Protocole Individuel
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Comprendre votre{" "}
            <span className="text-cyan-accent">moteur</span>.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Un process clinique en 4&nbsp;étapes pour décoder votre composition corporelle.
          </p>
        </ScrollReveal>

        {/* ── Grille 2x2 desktop / 1 col mobile ── */}
        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title}>
                <div className="bg-bg-card border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-cyan-accent" />
                    </div>
                    <div>
                      <span className="text-cyan-accent text-xs font-semibold tracking-widest uppercase">
                        Étape {i + 1}
                      </span>
                      <h4 className="text-sm font-bold">{step.title}</h4>
                    </div>
                  </div>
                  <p className="text-text-muted text-[0.9rem] leading-relaxed">
                    {step.desc}
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
