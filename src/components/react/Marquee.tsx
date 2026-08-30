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
        className="mx-3 flex h-16 w-[168px] shrink-0 items-center justify-center rounded-xl border border-[#e9edf4] bg-white px-5 shadow-[0_1px_2px_rgba(28,41,81,0.04)] transition-all duration-300 hover:border-[#d7ddea] hover:shadow-[0_10px_24px_-12px_rgba(28,41,81,0.18)]"
      >
        <img
          src={`${base}/${it.logo}`}
          alt={it.name}
          loading="lazy"
          className="max-h-9 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
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
