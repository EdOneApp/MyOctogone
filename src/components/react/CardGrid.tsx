import { useEffect, useRef } from 'react';
import TiltCard from './TiltCard';

export type CardItem = {
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  /** Real image path. Omit to render a generated geometric cover. */
  image?: string;
  tags?: string[];
  badge?: string;
  index?: string;
  cta?: string;
  /** Accent for the generated cover. */
  accent?: { from: string; to: string };
};

type Props = {
  items: CardItem[];
  columns?: string;
  variant?: 'default' | 'compact';
};

function GeneratedCover({ label, accent }: { label: string; accent?: { from: string; to: string } }) {
  const from = accent?.from ?? '#22d3ee';
  const to = accent?.to ?? '#2563eb';
  return (
    <div
      className="absolute inset-0"
      style={{ background: `radial-gradient(120% 120% at 15% 0%, ${from}2e, transparent 55%), radial-gradient(120% 120% at 100% 100%, ${to}24, transparent 55%), #080a12` }}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.5]"
        viewBox="0 0 400 250"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id="cg-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1.4" cy="1.4" r="1.4" fill={`${from}`} fillOpacity="0.18" />
          </pattern>
        </defs>
        <rect width="400" height="250" fill="url(#cg-dots)" />
        <path
          d="M250 30h70l40 40v70l-40 40h-70l-40-40V70z"
          stroke={from}
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
        <path
          d="M280 60h40l24 24v40l-24 24h-40l-24-24V84z"
          stroke={to}
          strokeOpacity="0.28"
          strokeWidth="1.5"
        />
      </svg>
      <span className="absolute bottom-4 left-5 max-w-[80%] font-display text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/45">
        {label}
      </span>
    </div>
  );
}

export default function CardGrid({
  items,
  columns = 'sm:grid-cols-2 lg:grid-cols-3',
  variant = 'default',
}: Props) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>('.reveal'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      cards.forEach((c) => c.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.12 }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={root} className={`grid grid-cols-1 gap-5 ${columns}`}>
      {items.map((c, i) => (
        <div
          key={c.href + i}
          className="reveal h-full"
          style={{ transitionDelay: `${(i % 3) * 70}ms` }}
        >
          <TiltCard href={c.href} className="clip-octagon-sm h-full">
            <article className="glass clip-octagon-sm relative flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-85 transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06]"
                  />
                ) : (
                  <GeneratedCover label={c.subtitle ?? c.title} accent={c.accent} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-[#05060a]/40 to-transparent" />
                {c.index && (
                  <span className="absolute left-4 top-4 font-display text-xs font-semibold tracking-[0.3em] text-white/60">
                    {c.index}
                  </span>
                )}
                {c.badge && (
                  <span className="absolute right-3 top-3 max-w-[70%] rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-right text-[0.68rem] font-medium text-cyan-200 backdrop-blur">
                    {c.badge}
                  </span>
                )}
              </div>

              <div className={`flex flex-1 flex-col ${variant === 'compact' ? 'p-5' : 'p-6'}`}>
                {c.subtitle && (
                  <span className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
                    {c.subtitle}
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8b90ad]">{c.description}</p>

                {c.tags && c.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.tags.slice(0, 4).map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <span className="link-arrow mt-5 pt-1 text-cyan-300">
                  {c.cta ?? 'Voir'}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 border border-white/5 transition-colors duration-300 group-hover:border-cyan-300/25 clip-octagon-sm"
              />
            </article>
          </TiltCard>
        </div>
      ))}
    </div>
  );
}
