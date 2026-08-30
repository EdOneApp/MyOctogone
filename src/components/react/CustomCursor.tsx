import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

export default function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      setActive(Boolean(el.closest('a, button, [data-cursor="hover"]')));
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden lg:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          width: active ? 46 : 18,
          height: active ? 46 : 18,
          borderColor: active ? 'rgba(34,211,238,0.9)' : 'rgba(199,203,224,0.5)',
          backgroundColor: active ? 'rgba(34,211,238,0.08)' : 'rgba(34,211,238,0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        style={{ border: '1.5px solid' }}
      />
    </motion.div>
  );
}
