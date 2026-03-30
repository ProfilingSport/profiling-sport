"use client";

import Image from "next/image";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const features = [
  {
    title: "Précision Clinique",
    description:
      "Mesure manuelle au pied à coulisse (Harpenden) précise au 0,1 mm près. Zéro marge d'erreur des balances électroniques.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: "Standard Olympique",
    description:
      "Le protocole utilisé par les staffs médicaux du CIO, de la FIFA et des plus grands clubs pros.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    title: "Data Actionnable",
    description:
      "La seule méthode capable de valider scientifiquement votre prise de masse musculaire réelle.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
];

export default function WhyIsak() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Lab grid pattern background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,4,41,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(217,4,41,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left column: Text ── */}
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-cyan-accent" />
              <p className="text-cyan-accent text-xs font-medium tracking-[0.3em] uppercase">
                Pourquoi ISAK ?
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              Bien plus qu&apos;une simple{" "}
              <span className="text-cyan-accent">mesure</span>.
            </h2>

            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              Pourquoi le standard ISAK est la référence mondiale.
            </p>

            <StaggerContainer stagger={0.1} className="space-y-8">
              {features.map((feature, i) => (
                <StaggerItem key={feature.title}>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-cyan-accent/10 flex items-center justify-center text-cyan-accent">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">
                        <span className="text-cyan-accent mr-2 font-mono text-xs opacity-50">
                          0{i + 1}
                        </span>
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          {/* ── Right column: Image ── */}
          <ScrollReveal delay={0.2} variant="scale-in">
            <div className="relative max-w-sm mx-auto lg:max-w-md">
              <div className="rounded-2xl bg-[#0a0a0a] p-3 relative" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)" }}>
                <Image
                  src="/images/Harpenden.jpg"
                  alt="Pince Harpenden — Instrument de mesure ISAK"
                  width={480}
                  height={640}
                  priority
                  className="w-full h-auto block rounded-xl"
                />
                <div className="absolute inset-3 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none rounded-xl" />
              </div>

              <div className="mt-4 flex items-center gap-2 justify-end">
                <div className="h-px w-6 bg-cyan-accent/30" />
                <span className="text-[10px] text-text-secondary tracking-widest uppercase">
                  Protocole ISAK — 21 points de mesure
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
