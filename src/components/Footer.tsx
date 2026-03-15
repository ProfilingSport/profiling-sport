"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const typeChoices = [
  "Athlète (Audit & Suivi)",
  "Forfait Club / Équipe",
  "Conférences & Ateliers",
  "Bilan Dirigeant (Executive)",
  "Autre",
];

export default function Footer() {
  const [selectedType, setSelectedType] = useState(typeChoices[0]);
  const pathname = usePathname();

  const contactDescriptions: Record<string, string> = {
    "/athletes":
      "Que vous prépariez votre premier marathon, que vous visiez un nouveau RP ou que vous souhaitiez optimiser votre composition corporelle, remplissez le formulaire et je reviendrai vers vous sous 24h.",
    "/executive":
      "Que vous souhaitiez un bilan santé sur-mesure, optimiser votre énergie ou mettre en place un programme QVT pour votre entreprise, remplissez le formulaire et je reviendrai vers vous sous 24h.",
  };
  const contactDescription =
    contactDescriptions[pathname] ??
    "Que vous soyez un club cherchant à optimiser le suivi de son effectif ou un athlète souhaitant un audit précis de sa composition corporelle, remplissez le formulaire et je reviendrai vers vous sous 24h.";

  return (
    <footer id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: CTA text */}
          <div>
            <p className="text-[#D90429] text-sm font-medium tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à mesurer votre{" "}
              <span className="text-[#D90429]">potentiel</span> ?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              {contactDescription}
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#D90429]/10 border border-[#D90429]/20 flex items-center justify-center text-[#D90429]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="text-text-secondary text-sm">
                  contact@profiling-sport.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#D90429]/10 border border-[#D90429]/20 flex items-center justify-center text-[#D90429]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="text-text-secondary text-sm">
                  Basé à Rouen &mdash; Déplacements sur site (Normandie, Hauts-de-France, Île-de-France)
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#0c0c0e] border border-white/5 rounded-xl p-6 md:p-8">
            <form
              action="https://formsubmit.co/paul.rettien92@gmail.com"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label htmlFor="contact-name" className="block text-text-secondary text-xs font-medium uppercase tracking-wider mb-2">
                  Nom complet
                </label>
                <input
                  id="contact-name"
                  name="Nom"
                  type="text"
                  required
                  className="w-full bg-[#0c0c0e] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#D90429] focus:ring-0 outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-text-secondary text-xs font-medium uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="Email"
                  type="email"
                  required
                  className="w-full bg-[#0c0c0e] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#D90429] focus:ring-0 outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-text-secondary text-xs font-medium uppercase tracking-wider mb-2">
                  Téléphone (Optionnel)
                </label>
                <input
                  id="contact-phone"
                  name="Telephone"
                  type="tel"
                  className="w-full bg-[#0c0c0e] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#D90429] focus:ring-0 outline-none transition-colors"
                  placeholder="06 00 00 00 00"
                />
              </div>

              {/* Pills / Type de demande */}
              <div>
                <span className="block text-text-secondary text-xs font-medium uppercase tracking-wider mb-3">
                  Type de demande
                </span>
                <div className="flex flex-wrap gap-3">
                  {typeChoices.map((choice) => (
                    <button
                      key={choice}
                      type="button"
                      onClick={() => setSelectedType(choice)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedType === choice
                          ? "bg-[#D90429] text-white border border-transparent"
                          : "bg-white/5 text-white/60 border border-white/10 hover:border-white/30"
                      }`}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="Type_Demande" value={selectedType} />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-text-secondary text-xs font-medium uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="Message"
                  rows={4}
                  className="w-full bg-[#0c0c0e] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#D90429] focus:ring-0 outline-none transition-colors resize-none"
                  placeholder="Décrivez votre projet ou vos besoins..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D90429] text-white py-3.5 rounded font-semibold text-sm hover:bg-[#B80324] transition-colors"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#D90429] font-bold text-sm">PR</span>
            <span className="text-text-muted text-sm">
              <span className="font-semibold text-text-secondary">PR</span>
              ofiling &copy; {new Date().getFullYear()}
            </span>
          </div>
          <p className="text-text-muted text-xs">
            Anthropométrie Sportive de Haut Niveau &mdash; Certifié ISAK Niveau 1
          </p>
        </div>
      </div>
    </footer>
  );
}
