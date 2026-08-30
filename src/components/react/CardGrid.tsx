import { useEffect, useRef } from 'react';
import TiltCard from './TiltCard';

export type CardItem = {
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  /** Real screenshot path. */
  image?: string;
  /** Amber line-icon path (subsidiary cards). Takes precedence over generated cover. */
  icon?: string;
  tags?: string[];
  badge?: string;
  index?: string;
  cta?: string;
};

type Props = {
  items: CardItem[];
  columns?: string;
  variant?: 'default' | 'compact';
};

const NAVY = '#1c2951';
const AMBER = '#f5a623';

function GeneratedCover({ label }: { label: string }) {
  return (
    <div className="dot-grid absolute inset-0 bg-[var(--color-cream)]">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 220"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M270 24h56l32 32v56l-32 32h-56l-32-32V56z"
          stroke={NAVY}
          strokeOpacity="0.14"
          strokeWidth="1.5"
        />
        <path
          d="M296 52h30l18 18v30l-18 18h-30l-18-18V70z"
          stroke={AMBER}
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      </svg>
      <span className="absolute bottom-4 left-5 max-w-[80%] font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-faint)]">
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
    <div ref={root} className={`grid grid-cols-1 gap-6 ${columns}`}>
      {items.map((c, i) => (
        <div
          key={c.href + i}
          className="reveal h-full"
          style={{ transitionDelay: `${(i % 3) * 70}ms` }}
        >
          <TiltCard href={c.href} className="h-full">
            <article className="card card-hover flex h-full flex-col overflow-hidden">
              {c.icon ? (
                <div className="flex items-center gap-4 p-6 pb-0">
                  <span className="icon-tile h-16 w-16 shrink-0">
                    <img
                      src={c.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-10 w-10 object-contain"
                      loading="lazy"
                    />
                  </span>
                  {c.index && (
                    <span className="font-display text-xs font-semibold tracking-[0.28em] text-[var(--color-faint)]">
                      {c.index}
                    </span>
                  )}
                </div>
              ) : (
                <div className="relative aspect-[16/10] overflow-hidden">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.05]"
                    />
                  ) : (
                    <GeneratedCover label={c.subtitle ?? c.title} />
                  )}
                  {c.index && (
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2 py-0.5 font-display text-xs font-semibold tracking-[0.2em] text-[var(--color-navy)] backdrop-blur">
                      {c.index}
                    </span>
                  )}
                  {c.badge && (
                    <span className="chip chip-amber absolute right-3 top-3 max-w-[72%] text-right">
                      {c.badge}
                    </span>
                  )}
                </div>
              )}

              <div className={`flex flex-1 flex-col ${variant === 'compact' ? 'p-6' : 'p-6'}`}>
                {c.subtitle && (
                  <span className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-600)]">
                    {c.subtitle}
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">
                  {c.description}
                </p>

                {c.tags && c.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.tags.slice(0, 4).map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {c.badge && c.icon && (
                  <span className="chip chip-amber mt-4 self-start">{c.badge}</span>
                )}

                <span className="link-arrow mt-5 pt-1">
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
            </article>
          </TiltCard>
        </div>
      ))}
    </div>
  );
}
