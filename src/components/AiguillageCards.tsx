"use client";

import Link from "next/link";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function AiguillageCards() {
  return (
    <section id="services" className="py-24 md:py-32 relative scroll-mt-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section intro */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">
            Choisissez votre profil
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Qui êtes-vous ?
          </h2>
        </ScrollReveal>

        {/* Three cards */}
        <StaggerContainer stagger={0.12} className="grid md:grid-cols-3 gap-6">
          {/* Card: Clubs & Staffs */}
          <StaggerItem>
            <Link
              href="/clubs"
              className="group relative bg-bg-card border border-white/5 rounded-xl p-7 md:p-8 hover:border-cyan-accent/30 transition-all overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-cyan-accent/10 border border-cyan-accent/20 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-cyan-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-cyan-accent transition-colors">
                  Clubs &amp; Staffs
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Suivi saisonnier de l&apos;effectif, dashboard partagé avec le
                  staff médical, détection des asymétries et prévention des
                  blessures. Protocole ISAK de référence et conférences en
                  nutrition sportive.
                </p>
                <span className="inline-flex items-center gap-2 text-cyan-accent text-sm font-semibold group-hover:gap-3 transition-all mt-auto">
                  Découvrir l&apos;offre clubs
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </StaggerItem>

          {/* Card: Athlètes Individuels */}
          <StaggerItem>
            <Link
              href="/athletes"
              className="group relative bg-bg-card border border-white/5 rounded-xl p-7 md:p-8 hover:border-cyan-accent/30 transition-all overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-cyan-accent/10 border border-cyan-accent/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-cyan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-cyan-accent transition-colors">
                  Athlètes Individuels
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Audit premium de votre composition corporelle, programmation
                  course à pied, nutrition d&apos;endurance et optimisation de la
                  performance. Coaching personnalisé.
                </p>
                <span className="inline-flex items-center gap-2 text-cyan-accent text-sm font-semibold group-hover:gap-3 transition-all mt-auto">
                  Découvrir l&apos;offre athlètes
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </StaggerItem>

          {/* Card: Entreprises & Dirigeants */}
          <StaggerItem>
            <Link
              href="/executive"
              className="group relative bg-bg-card border border-white/5 rounded-xl p-7 md:p-8 hover:border-cyan-accent/30 transition-all overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-cyan-accent/10 border border-cyan-accent/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-cyan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-cyan-accent transition-colors">
                  Entreprises &amp; Dirigeants
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Bilan &laquo;&nbsp;Executive Health&nbsp;&raquo; sur-mesure. Audit
                  clinique ISAK et stratégie nutritionnelle pour optimiser votre
                  énergie, gérer le stress et préserver votre capital santé.
                </p>
                <span className="inline-flex items-center gap-2 text-cyan-accent text-sm font-semibold group-hover:gap-3 transition-all mt-auto">
                  Découvrir l&apos;offre entreprises
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
