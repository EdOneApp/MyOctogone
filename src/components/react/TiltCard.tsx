import { useRef, type ReactNode, type PointerEvent } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'motion/react';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  /** max tilt in degrees */
  max?: number;
};

export default function TiltCard({ href, children, className = '', max = 7 }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const sx = useSpring(px, { stiffness: 220, damping: 22 });
  const sy = useSpring(py, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const glareX = useTransform(sx, [0, 1], ['0%', '100%']);
  const glareY = useTransform(sy, [0, 1], ['0%', '100%']);

  function onMove(e: PointerEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  if (reduce) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`group relative block [transform-style:preserve-3d] ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ z: 12 }}
    >
      {children}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([x, y]) =>
              `radial-gradient(220px circle at ${x} ${y}, rgba(34,211,238,0.18), transparent 60%)`
          ),
        }}
      />
    </motion.a>
  );
}
