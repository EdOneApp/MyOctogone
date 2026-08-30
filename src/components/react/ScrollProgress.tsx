import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';

export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left"
    >
      <div
        className="h-full w-full"
        style={{
          background:
            'linear-gradient(90deg, #2563eb, #22d3ee 55%, #a855f7)',
          boxShadow: '0 0 12px rgba(34,211,238,0.7)',
        }}
      />
    </motion.div>
  );
}
