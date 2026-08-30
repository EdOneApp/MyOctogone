import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

type Link = { label: string; href: string };

type Props = {
  links: Link[];
  cta: { label: string; href: string };
  langSwitch: { label: string; href: string };
  openLabel: string;
  closeLabel: string;
};

export default function MobileNav({
  links,
  cta,
  langSwitch,
  openLabel,
  closeLabel,
}: Props) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={openLabel}
        className="grid h-10 w-10 place-items-center rounded-lg border border-[#333a5c] text-white"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col bg-[#05060a]/98 backdrop-blur-xl"
            initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: 'circle(0% at 90% 6%)' }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, clipPath: 'circle(150% at 90% 6%)' }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, clipPath: 'circle(0% at 90% 6%)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container-page flex items-center justify-between py-5">
              <span className="font-display text-lg font-bold tracking-tight text-white">
                OCTOGONE
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={closeLabel}
                className="grid h-10 w-10 place-items-center rounded-lg border border-[#333a5c] text-white"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="container-page flex flex-1 flex-col justify-center gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-4 font-display text-3xl font-semibold text-white"
                  initial={reduce ? undefined : { opacity: 0, x: -24 }}
                  animate={reduce ? undefined : { opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <div className="container-page flex items-center justify-between gap-4 pb-10 pt-4">
              <a href={langSwitch.href} className="chip" onClick={() => setOpen(false)}>
                {langSwitch.label}
              </a>
              <a
                href={cta.href}
                onClick={() => setOpen(false)}
                className="btn btn-primary clip-octagon-sm flex-1 justify-center"
              >
                {cta.label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
