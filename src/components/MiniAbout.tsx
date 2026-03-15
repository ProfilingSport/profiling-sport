import Link from "next/link";
import ArrowIcon from "./ArrowIcon";

interface MiniAboutProps {
  roleLabel: string;
  description: string;
}

export default function MiniAbout({ roleLabel, description }: MiniAboutProps) {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-bg-card border border-white/5 rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-6">
          <div className="w-12 h-12 rounded-xl bg-cyan-accent/10 border border-cyan-accent/20 flex items-center justify-center shrink-0">
            <span className="text-cyan-accent font-bold text-lg">PR</span>
          </div>
          <div>
            <p className="text-cyan-accent text-xs font-medium tracking-widest uppercase mb-2">
              {roleLabel}
            </p>
            <h3 className="text-xl font-bold mb-3">Paul Rettien</h3>
            <p className="text-text-secondary leading-relaxed">{description}</p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-cyan-accent text-sm font-semibold mt-4 hover:gap-3 transition-all"
            >
              En savoir plus
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
