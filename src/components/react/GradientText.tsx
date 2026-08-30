import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from 'motion/react';

type Props = {
  text: string;
  className?: string;
};

export default function GradientText({ text, className = '' }: Props) {
  const reduce = useReducedMotion();
  const progress = useMotionValue(0);
  const started = useRef(performance.now());

  useAnimationFrame((t) => {
    if (reduce) return;
    const elapsed = t - started.current;
    const duration = 7000;
    const cycle = duration * 2;
    const ct = elapsed % cycle;
    progress.set(ct < duration ? (ct / duration) * 100 : 100 - ((ct - duration) / duration) * 100);
  });

  const backgroundPosition = useTransform(progress, (p) => `${p}% 50%`);

  return (
    <motion.span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(100deg, #ffffff 0%, #22d3ee 35%, #a855f7 60%, #ffffff 100%)',
        backgroundSize: '280% 100%',
        backgroundPosition: reduce ? '0% 50%' : backgroundPosition,
      }}
    >
      {text}
    </motion.span>
  );
}
