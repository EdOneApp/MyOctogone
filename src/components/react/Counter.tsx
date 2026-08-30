import { useEffect, useRef, useState } from 'react';

type Props = {
  value: number;
  prefix?: string;
  suffix?: string;
  locale?: string;
};

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function Counter({ value, prefix = '', suffix = '', locale = 'fr-FR' }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState('0');
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finish = () => setDisplay(value.toLocaleString(locale));

    if (reduce || !('IntersectionObserver' in window)) {
      finish();
      return;
    }

    const run = () => {
      if (done.current) return;
      done.current = true;
      const duration = 1600;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setDisplay(Math.round(easeOutExpo(p) * value).toLocaleString(locale));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            run();
            io.disconnect();
          }
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, locale]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
