"use client";

import { useState } from "react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const faqs = [
  {
    question: "À qui s'adresse l'anthropométrie ISAK ?",
    answer:
      "À tous ceux qui veulent piloter leur corps avec de la vraie donnée. Des sportifs de haut niveau cherchant l'optimisation de la performance (ratio poids/puissance), aux sportifs amateurs souhaitant un suivi précis de leur perte de masse grasse ou prise de masse musculaire.",
  },
  {
    question: "Quelle est la différence avec une balance connectée (impédancemétrie) ?",
    answer:
      "Les balances connectées sont extrêmement sensibles à votre niveau d'hydratation, de stress, ou à votre dernier repas. La méthode ISAK est une mesure purement mécanique et anatomique. Votre taux de masse grasse est mesuré au millimètre près avec une pince Harpenden, indépendamment de votre hydratation.",
  },
  {
    question: "Pourquoi faire appel à un technicien certifié ISAK ?",
    answer:
      "La composition corporelle ne tolère pas l'à-peu-près. Un mauvais placement de pince d'un centimètre fausse toute la donnée. La certification internationale ISAK vous garantit un protocole biomécanique strict, reproductible, et un calibrage professionnel du matériel.",
  },
  {
    question: "Combien de temps dure un bilan ISAK complet ?",
    answer:
      "La consultation dure en moyenne 45 minutes. Cela comprend la prise des 21 points de mesure et l'envoi de votre rapport anthropométrique dans la journée.",
  },
  {
    question: "Dois-je venir à jeun ou au repos ?",
    answer:
      "Il est impératif de ne pas avoir fait d'entraînement intense dans les 12 heures précédant la mesure (pour éviter la congestion et la rétention d'eau). Être à jeun n'est pas obligatoire pour l'ISAK, mais recommandé si vous faites la prise de sang le même jour.",
  },
  {
    question: "Comment dois-je m'habiller pour la séance ?",
    answer:
      "La précision de la pince Harpenden nécessite un accès direct à la peau. Prévoyez un short court (type cycliste ou maillot de bain) et, pour les femmes, une brassière de sport sans dos nageur.",
  },
  {
    question: "Réalisez-vous vous-même les prises de sang ?",
    answer:
      "Non. Je vous fournis la liste précise des biomarqueurs à transmettre à votre médecin (ou à réaliser en laboratoire à vos frais). J'intègre ensuite vos résultats dans le Dashboard PRofiling pour croiser les données.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Questions fréquentes
          </h2>
        </ScrollReveal>

        <StaggerContainer stagger={0.08} className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <StaggerItem key={i}>
                <div className="border border-white/10 rounded-lg overflow-hidden transition-colors duration-300">
                  <button
                    onClick={() => toggle(i)}
                    className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 cursor-pointer ${
                      isOpen
                        ? "text-[#D90429]"
                        : "text-white hover:text-[#D90429]"
                    }`}
                  >
                    <span className="font-semibold text-base md:text-lg">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`px-6 pb-5 text-gray-400 leading-relaxed transition-opacity duration-300 ${
                          isOpen ? "opacity-100 delay-100" : "opacity-0"
                        }`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
