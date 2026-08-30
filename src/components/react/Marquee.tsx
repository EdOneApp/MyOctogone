import type { CSSProperties } from 'react';

type Item = { name: string; logo: string };

type Props = {
  items: Item[];
  /** seconds for a full loop */
  duration?: number;
  base?: string;
};

/**
 * Pure CSS marquee (animation defined in global.css). Rendered on the client
 * only so the duplicated track doesn't bloat the HTML payload, but it needs no
 * JS to run — falls back to a wrapped static row under reduced motion.
 */
export default function Marquee({ items, duration = 40, base = '' }: Props) {
  const row = (key: string) =>
    items.map((it, i) => (
      <div
        key={`${key}-${i}`}
        className="mx-4 flex h-16 w-[168px] shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] px-5 opacity-80 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.06] hover:opacity-100"
      >
        <img
          src={`${base}/${it.logo}`}
          alt={it.name}
          loading="lazy"
          className="max-h-9 w-auto object-contain grayscale transition-[filter] duration-300 hover:grayscale-0"
        />
      </div>
    ));

  return (
    <div
      className="relative flex w-full overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
      aria-label="Partenaires"
    >
      <div
        className="marquee-track"
        style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
      >
        {row('a')}
        {row('b')}
      </div>
    </div>
  );
}
