import CheckIcon from "./CheckIcon";

interface PricingCardProps {
  badge: string;
  name: string;
  subtitle?: string;
  price: string;
  priceNote?: string;
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
}

export default function PricingCard({
  badge,
  name,
  subtitle,
  price,
  priceNote,
  features,
  cta,
  href,
  highlight = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-bg-card rounded-xl border overflow-hidden flex flex-col h-full ${
        highlight
          ? "border-cyan-accent/30 glow-border"
          : "border-white/5 hover:border-white/10"
      } transition-all`}
    >
      {highlight && (
        <div className="bg-cyan-accent text-bg-primary text-xs font-bold text-center py-1.5 tracking-widest uppercase">
          Recommandé
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <span
          className={`inline-block w-fit text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded mb-4 ${
            highlight
              ? "bg-cyan-accent/10 text-cyan-accent"
              : "bg-white/5 text-text-secondary"
          }`}
        >
          {badge}
        </span>

        <h3 className="text-xl font-bold mb-1">{name}</h3>
        {subtitle && (
          <p className="text-text-muted text-sm mb-6">{subtitle}</p>
        )}

        <div className={subtitle ? "mb-6" : "mb-6 mt-4"}>
          <p className="text-2xl font-bold text-cyan-accent">{price}</p>
          {priceNote && (
            <p className="text-white/50 text-sm mt-1">{priceNote}</p>
          )}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-cyan-accent/30 to-transparent mb-6" />

        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm">
              <CheckIcon />
              <span className="text-text-secondary">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={href}
          className={`block text-center py-3 rounded font-semibold text-sm transition-all ${
            highlight
              ? "bg-cyan-accent text-bg-primary hover:bg-cyan-accent/90"
              : "border border-white/10 text-text-secondary hover:border-cyan-accent/30 hover:text-text-primary"
          }`}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
