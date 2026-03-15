"use client";

import { useState } from "react";

const features = [
  {
    tag: "Somatotype",
    title: "Somato-charte",
    desc: "Positionnement précis sur le triangle de Heath-Carter. Visualisez le profil morphologique de chaque athlète : endomorphe, mésomorphe, ectomorphe. Comparez avec les références de la discipline.",
    visual: (
      <div className="relative w-full h-48 flex items-center justify-center">
        <svg viewBox="0 0 200 180" className="w-full h-full max-w-[200px]">
          <polygon points="100,10 10,170 190,170" fill="none" stroke="#A0A0A0" strokeWidth="1.5" />
          <line x1="55" y1="90" x2="145" y2="90" stroke="rgba(160,160,160,0.3)" strokeWidth="0.8" />
          <line x1="32" y1="130" x2="168" y2="130" stroke="rgba(160,160,160,0.3)" strokeWidth="0.8" />
          <circle cx="115" cy="100" r="5" fill="#D90429" className="animate-pulse-slow" />
          <circle cx="115" cy="100" r="10" fill="none" stroke="#D90429" strokeWidth="0.5" opacity="0.5" />
          <text x="100" y="8" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="600" fontFamily="Inter">ECTO</text>
          <text x="5" y="180" textAnchor="start" fill="#FFFFFF" fontSize="9" fontWeight="600" fontFamily="Inter">ENDO</text>
          <text x="195" y="180" textAnchor="end" fill="#FFFFFF" fontSize="9" fontWeight="600" fontFamily="Inter">MÉSO</text>
        </svg>
      </div>
    ),
  },
  {
    tag: "Adiposité",
    title: "Somme des 8 plis cutanés",
    desc: "Triceps, subscapulaire, biceps, crête iliaque, supra-épineux, abdominal, cuisse antérieure, mollet médial. Le gold standard pour quantifier l'adiposité sous-cutanée.",
    visual: (
      <div className="relative w-full h-48 flex flex-col justify-end px-3">
        {/* Total + progress bar */}
        <div className="text-center mb-3">
          <p className="text-text-primary text-sm font-bold">Total mesuré : 52.4 mm</p>
          <div className="mt-1.5 mx-auto max-w-[180px]">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-accent/60 to-cyan-accent rounded-full" style={{ width: "80%" }} />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-text-muted text-[8px]">0</span>
              <span className="text-text-muted text-[8px]">Objectif &lt; 48 mm</span>
            </div>
          </div>
        </div>
        {/* Bar chart */}
        <div className="flex items-end justify-center gap-2 flex-1">
          {[
            { label: "TRI", h: "60%", val: "8.2" },
            { label: "SUB", h: "45%", val: "6.1" },
            { label: "BIC", h: "35%", val: "4.8" },
            { label: "ILI", h: "70%", val: "9.4" },
            { label: "SUP", h: "50%", val: "6.8" },
            { label: "ABD", h: "65%", val: "8.9" },
            { label: "CUI", h: "55%", val: "7.3" },
            { label: "MOL", h: "40%", val: "5.5" },
          ].map((bar) => (
            <div key={bar.label} className="flex flex-col items-center gap-1 flex-1">
              <span className="text-cyan-accent text-[9px] font-medium">{bar.val}</span>
              <div className="w-full bg-cyan-accent/10 rounded-t relative overflow-hidden" style={{ height: bar.h }}>
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-accent/40 to-cyan-accent/10 rounded-t" />
              </div>
              <span className="text-text-muted text-[8px] font-medium">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    tag: "Biologie Sportive",
    title: "Monitoring Sanguin",
    desc: "Intégration et analyse des biomarqueurs clés de la performance (transport d'oxygène, statut hormonal, inflammation). Croisement des données anthropométriques et sanguines pour un profilage complet du moteur physiologique.",
    visual: (
      <div className="relative w-full h-48 flex flex-col justify-center px-4">
        <div className="space-y-2">
          {[
            { name: "Vitamine D", value: "11.08", unit: "ng/mL", pct: 15, color: "bg-[#E11D48]", textColor: "text-[#E11D48]", danger: true },
            { name: "Ferritine", value: "46", unit: "ng/mL", pct: 38, color: "bg-[#F59E0B]", textColor: "text-[#F59E0B]", danger: false },
            { name: "Hémoglobine", value: "14.9", unit: "g/dL", pct: 82, color: "bg-[#10B981]", textColor: "text-[#10B981]", danger: false },
            { name: "Testostérone", value: "4.71", unit: "ng/mL", pct: 65, color: "bg-[#10B981]", textColor: "text-[#10B981]", danger: false },
            { name: "Ratio T/C", value: "0.041", unit: "", pct: 55, color: "bg-[#10B981]", textColor: "text-[#10B981]", danger: false },
            { name: "CRP", value: "1.3", unit: "mg/L", pct: 70, color: "bg-[#10B981]", textColor: "text-[#10B981]", danger: false },
          ].map((m) => (
            <div key={m.name} className="flex items-center gap-2">
              <span className="text-[10px] text-text-muted w-[72px] text-right shrink-0 truncate">{m.name}</span>
              <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.pct}%` }} />
              </div>
              <span className={`text-[10px] font-mono ${m.textColor} w-[52px] shrink-0`}>{m.value}</span>
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full px-3 py-1" style={{ backgroundColor: "rgba(225,29,72,0.15)" }}>
          <span className="text-[#E11D48] text-[10px] font-medium">🚨 Vit D : 11.08 ng/mL</span>
        </div>
      </div>
    ),
  },
];

function ExampleDashboard({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Exemple de rapport Performance Dashboard"
      tabIndex={-1}
      onKeyDown={(e) => { if (e.key === "Escape") onClose(); }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-bg-card border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-bg-card border-b border-white/5 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <p className="text-cyan-accent text-xs font-medium tracking-widest uppercase">Exemple de rapport</p>
            <h3 className="text-xl font-bold mt-1">Performance Dashboard &mdash; Jordan D.</h3>
            <p className="text-text-muted text-xs mt-0.5">Milieu de terrain central &bull; Saison 2025-2026 &bull; Bilan Mi-Saison</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-text-secondary hover:text-white hover:border-white/40 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* 1. Composition corporelle */}
          <div>
            <h4 className="text-sm font-bold text-cyan-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              Profil de Composition Corporelle
            </h4>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-bg-primary rounded-lg p-4 border border-white/5">
                <p className="text-text-muted text-xs uppercase tracking-wider mb-2">Somme des 6 plis</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-[#10B981]">45.9</span>
                  <span className="text-text-muted text-sm mb-1">mm</span>
                </div>
                <p className="text-text-muted text-xs mt-3">Norme milieu central : 38–52 mm</p>
                <div className="mt-2 flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="text-[#10B981] text-xs font-medium">Dans la cible</span>
                </div>
              </div>
              <div className="bg-bg-primary rounded-lg p-4 border border-white/5">
                <p className="text-text-muted text-xs uppercase tracking-wider mb-2">Somme des 8 plis</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-blue-400">59.1</span>
                  <span className="text-text-muted text-sm mb-1">mm</span>
                </div>
                <p className="text-text-muted text-xs mt-3">∑6 + biceps + crête iliaque</p>
              </div>
              <div className="bg-bg-primary rounded-lg p-4 border border-white/5">
                <p className="text-text-muted text-xs uppercase tracking-wider mb-2">Masse grasse estimée</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-[#10B981]">10.8</span>
                  <span className="text-text-muted text-sm mb-1">%</span>
                </div>
                <p className="text-text-muted text-xs mt-3">Fourchette cible milieu : 8–13%</p>
                <div className="mt-2 flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="text-[#10B981] text-xs font-medium">Dans la cible</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Évolution des plis cutanés */}
          <div>
            <h4 className="text-sm font-bold text-cyan-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              Évolution des Plis Cutanés (Harpenden)
            </h4>
            <div className="bg-bg-primary rounded-lg p-4 border border-white/5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-accent mb-3">∑6 Plis — Indicateur Principal</p>
              <div className="space-y-2.5">
                {[
                  { label: "Triceps", val: 6.8, pct: 30, color: "bg-[#10B981]/50", delta: -0.9 },
                  { label: "Subscapulaire", val: 8.5, pct: 38, color: "bg-[#10B981]/40", delta: -0.4 },
                  { label: "Supraspinal", val: 6.4, pct: 30, color: "bg-[#10B981]/50", delta: -0.7 },
                  { label: "Abdominal", val: 10.3, pct: 46, color: "bg-[#F59E0B]/40", delta: -1.1 },
                  { label: "Cuisse ant.", val: 10.3, pct: 46, color: "bg-[#F59E0B]/40", delta: -1.2 },
                  { label: "Mollet médial", val: 3.6, pct: 16, color: "bg-[#10B981]/50", delta: -0.4 },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <span className="text-text-muted text-xs w-24 text-right shrink-0">{s.label}</span>
                    <div className="flex-1 h-2.5 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                    </div>
                    <span className="text-text-primary text-xs font-mono w-14 shrink-0">{s.val} mm</span>
                    <span className="text-[#10B981] text-[10px] font-mono w-12 shrink-0">▼ {Math.abs(s.delta).toFixed(1)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2">
                <span className="text-text-secondary text-xs">∑6 plis actuelle :</span>
                <span className="text-[#10B981] text-sm font-bold">45.9 mm</span>
                <span className="text-text-muted text-xs ml-1">(pré-saison : 50.6 mm)</span>
              </div>

              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mt-5 mb-3">Plis Complémentaires (hors ∑6)</p>
              <div className="space-y-2.5">
                {[
                  { label: "Biceps", val: 4.1, pct: 18, color: "bg-[#10B981]/50", delta: -0.5 },
                  { label: "Crête iliaque", val: 9.1, pct: 40, color: "bg-[#F59E0B]/40", delta: -0.3 },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <span className="text-text-muted text-xs w-24 text-right shrink-0">{s.label}</span>
                    <div className="flex-1 h-2.5 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                    </div>
                    <span className="text-text-primary text-xs font-mono w-14 shrink-0">{s.val} mm</span>
                    <span className="text-[#10B981] text-[10px] font-mono w-12 shrink-0">▼ {Math.abs(s.delta).toFixed(1)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2">
                <span className="text-text-secondary text-xs">∑8 plis (indicatif) :</span>
                <span className="text-blue-400 text-sm font-bold">59.1 mm</span>
                <span className="text-text-muted text-xs ml-1">(pré-saison : 63.9 mm)</span>
              </div>
            </div>
          </div>

          {/* 3. Somatotype */}
          <div>
            <h4 className="text-sm font-bold text-cyan-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              Somatotype (Heath-Carter)
            </h4>
            <div className="bg-bg-primary rounded-lg p-4 border border-white/5">
              <div className="grid sm:grid-cols-2 gap-6 items-center">
                {/* Triangle */}
                <div className="flex justify-center">
                  <svg viewBox="0 0 200 180" className="w-full max-w-[220px]">
                    <polygon points="100,10 10,170 190,170" fill="none" stroke="#A0A0A0" strokeWidth="1.5" />
                    <line x1="55" y1="90" x2="145" y2="90" stroke="rgba(160,160,160,0.3)" strokeWidth="0.8" />
                    <line x1="32" y1="130" x2="168" y2="130" stroke="rgba(160,160,160,0.3)" strokeWidth="0.8" />
                    {/* Player point: Endo 2.3, Méso 5.1, Ecto 2.7 */}
                    <circle cx="112" cy="95" r="5" fill="#D90429" className="animate-pulse-slow" />
                    <circle cx="112" cy="95" r="10" fill="none" stroke="#D90429" strokeWidth="0.5" opacity="0.5" />
                    <text x="100" y="8" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="600" fontFamily="Inter">ECTO</text>
                    <text x="5" y="180" textAnchor="start" fill="#FFFFFF" fontSize="9" fontWeight="600" fontFamily="Inter">ENDO</text>
                    <text x="195" y="180" textAnchor="end" fill="#FFFFFF" fontSize="9" fontWeight="600" fontFamily="Inter">MÉSO</text>
                  </svg>
                </div>
                {/* Values */}
                <div>
                  <div className="grid grid-cols-3 gap-4 text-center mb-4">
                    <div>
                      <p className="text-2xl font-bold text-blue-400">2.3</p>
                      <p className="text-text-muted text-xs uppercase tracking-wider mt-1">Endo</p>
                      <div className="mt-2 h-1.5 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-blue-400/50 rounded-full" style={{ width: "33%" }} /></div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-cyan-accent">5.1</p>
                      <p className="text-text-muted text-xs uppercase tracking-wider mt-1">Méso</p>
                      <div className="mt-2 h-1.5 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-cyan-accent/50 rounded-full" style={{ width: "73%" }} /></div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-400">2.7</p>
                      <p className="text-text-muted text-xs uppercase tracking-wider mt-1">Ecto</p>
                      <div className="mt-2 h-1.5 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-purple-400/50 rounded-full" style={{ width: "39%" }} /></div>
                    </div>
                  </div>
                  <div className="text-center pt-3 border-t border-white/5">
                    <span className="text-cyan-accent text-sm font-semibold">Mésomorphe équilibré</span>
                    <p className="text-text-muted text-xs mt-1">Profil adapté pour un milieu de terrain central</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Bilan Sanguin */}
          <div>
            <h4 className="text-sm font-bold text-cyan-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              Bilan Sanguin — Marqueurs Clés Mi-Saison
            </h4>
            <div className="bg-bg-primary rounded-lg p-4 border border-white/5">
              <div className="space-y-3">
                {[
                  { name: "25-OH Vitamine D 🚨", value: "11.08", unit: "ng/mL", range: "Optimal > 40", color: "text-[#E11D48]", barColor: "bg-[#E11D48]", pct: 15, tag: "Carence sévère", tagBg: "rgba(225,29,72,0.15)", tagText: "#E11D48" },
                  { name: "Ferritine ⚠", value: "46", unit: "ng/mL", range: "Optimal sportif > 50", color: "text-[#F59E0B]", barColor: "bg-[#F59E0B]", pct: 38, tag: "Sous-optimal", tagBg: "rgba(245,158,11,0.15)", tagText: "#F59E0B" },
                  { name: "Hémoglobine", value: "14.9", unit: "g/dL", range: "Norme : 13–17", color: "text-[#10B981]", barColor: "bg-[#10B981]", pct: 82, tag: "Optimal", tagBg: "rgba(16,185,129,0.15)", tagText: "#10B981" },
                  { name: "Testostérone", value: "4.71", unit: "ng/mL", range: "Optimal sportif : 5–9", color: "text-[#F59E0B]", barColor: "bg-[#F59E0B]", pct: 55, tag: "Sous-optimal", tagBg: "rgba(245,158,11,0.15)", tagText: "#F59E0B" },
                  { name: "Ratio T/C", value: "0.041", unit: "", range: "Seuil critique : 0.035", color: "text-[#10B981]", barColor: "bg-[#10B981]", pct: 60, tag: "OK", tagBg: "rgba(16,185,129,0.15)", tagText: "#10B981" },
                  { name: "CRP", value: "1.3", unit: "mg/L", range: "Norme < 3", color: "text-[#10B981]", barColor: "bg-[#10B981]", pct: 70, tag: "Normal", tagBg: "rgba(16,185,129,0.15)", tagText: "#10B981" },
                ].map((m) => (
                  <div key={m.name} className="flex items-center gap-3 py-1">
                    <span className="text-text-secondary text-xs w-40 shrink-0">{m.name}</span>
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${m.barColor} rounded-full`} style={{ width: `${m.pct}%` }} />
                    </div>
                    <span className={`text-sm font-mono font-semibold w-16 text-right shrink-0 ${m.color}`}>{m.value}</span>
                    <span className="text-text-muted text-[10px] w-12 shrink-0">{m.unit}</span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full shrink-0" style={{ backgroundColor: m.tagBg, color: m.tagText }}>{m.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Interprétation Technique */}
          <div>
            <h4 className="text-sm font-bold text-cyan-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              Interprétation Technique
            </h4>
            <div className="space-y-3">
              <div className="bg-bg-primary rounded-lg p-4 border-l-2 border-[#E11D48]">
                <p className="text-text-primary text-sm font-semibold mb-1">🚨 Carence sévère en Vitamine D (11.08 ng/mL)</p>
                <p className="text-text-secondary text-sm leading-relaxed">Taux critique nécessitant une supplémentation de charge immédiate. Impact direct sur la récupération musculaire, le risque de blessure et la fonction immunitaire. Recommandation : Supplémentation journalière adaptée (ex: 2 000 à 4 000 UI/jour en gouttes) ou orientation vers le médecin du club pour prescription d'une dose de charge. Contrôle à J+60. Objectif : &gt; 40 ng/mL.</p>
              </div>
              <div className="bg-bg-primary rounded-lg p-4 border-l-2 border-[#F59E0B]">
                <p className="text-text-primary text-sm font-semibold mb-1">⚠ Ferritine fonctionnellement basse (46 ng/mL)</p>
                <p className="text-text-secondary text-sm leading-relaxed">Pas en carence absolue (&gt; 30), mais sous le seuil optimal sportif (&gt; 50, idéal 80–150). L&apos;hémoglobine compense encore (14.9 g/dL), mais les réserves s&apos;épuisent. Recommandation : fer héminique 3x/semaine, supplémentation bisglycinate 20–30 mg/jour à distance de l&apos;entraînement.</p>
              </div>
              <div className="bg-bg-primary rounded-lg p-4 border-l-2 border-[#F59E0B]">
                <p className="text-text-primary text-sm font-semibold mb-1">⚠ Testostérone légèrement sous-optimale (4.71 ng/mL)</p>
                <p className="text-text-secondary text-sm leading-relaxed">Dans la norme labo mais sous la fourchette optimale sportif (5.0–9.0). Combiné à la CRP légèrement élevée (1.3 mg/L), signe de fatigue accumulée mi-saison. Le ratio T/C (0.041) reste au-dessus du seuil critique. Recommandation : audit sommeil (8h/nuit min.), vérifier l&apos;absence de déficit calorique, zinc alimentaire.</p>
              </div>
              <div className="bg-bg-primary rounded-lg p-4 border-l-2 border-[#10B981]">
                <p className="text-text-primary text-sm font-semibold mb-1">✓ Marqueurs de transport d&apos;oxygène et métabolisme</p>
                <p className="text-text-secondary text-sm leading-relaxed">Hémoglobine (14.9) et hématocrite (43.7%) dans la zone optimale. CK à 455 U/L dans la norme athlète. TSH idéale (1.20). Bilan métabolique (glycémie, HbA1c, triglycérides, créatinine) excellent. VS à 2 mm/h confirmant l&apos;absence d&apos;inflammation chronique.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-white/5 text-center">
          <p className="text-text-muted text-xs">PRofiling &mdash; Anthropométrie Sportive de Haut Niveau &mdash; Exemple de rapport (données fictives)</p>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [showExample, setShowExample] = useState(false);

  return (
    <section id="dashboard" className="py-24 md:py-32 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-accent text-sm font-medium tracking-widest uppercase mb-3">Dashboard</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Vos données, <span className="text-cyan-accent">décodées</span>.</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Chaque session PRofiling génère un rapport complet et visuel. Trois axes d&apos;analyse pour des décisions éclairées.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.tag} className="bg-bg-card border border-white/5 rounded-xl overflow-hidden hover:border-cyan-accent/20 transition-all group">
              <div className="border-b border-white/5 bg-bg-primary/50 p-4">{feature.visual}</div>
              <div className="p-6">
                <span className="text-cyan-accent text-xs font-medium tracking-widest uppercase">{feature.tag}</span>
                <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-cyan-accent transition-colors">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button onClick={() => setShowExample(true)} className="inline-flex items-center gap-3 border border-cyan-accent/30 text-cyan-accent px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-cyan-accent/10 transition-all group">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Voir un exemple de Dashboard
          </button>
        </div>
      </div>

      {showExample && <ExampleDashboard onClose={() => setShowExample(false)} />}
    </section>
  );
}
