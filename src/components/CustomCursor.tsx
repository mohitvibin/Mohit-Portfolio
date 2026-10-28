
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useFinePointer } from '../hooks/useMedia';

const LABELS: Record<string, string> = {
  view: 'VIEW',
  play: '▶',
  link: '↗',
  drag: '↔',
  close: '✕',
};

export default function CustomCursor() {
  const fine = useFinePointer();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 });

  const [mode, setMode] = useState<string | null>(null);
  const [hoverLink, setHoverLink] = useState(false);
  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!fine) {
      document.documentElement.classList.remove('has-custom-cursor');
      return;
    }

    document.documentElement.classList.add('has-custom-cursor');

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target instanceof Element ? e.target : null;
      const tagged = target?.closest<HTMLElement>('[data-cursor]');

      setMode(tagged?.dataset.cursor ?? null);
      setHoverLink(
        !tagged && !!target?.closest('a,button,[role="button"]')
      );
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);
    const press = () => setDown(true);
    const release = () => setDown(false);

    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    document.documentElement.addEventListener('pointerenter', enter);
    window.addEventListener('pointerdown', press);
    window.addEventListener('pointerup', release);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
      document.documentElement.removeEventListener('pointerenter', enter);
      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
    };
  }, [fine, x, y]);

  if (!fine) return null;

  const label = mode ? LABELS[mode] : null;
  const size = label ? (mode === 'view' ? 72 : 52) : hoverLink ? 34 : 10;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full"
      style={{
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        scale: down ? 0.85 : 1,
        backgroundColor: label
          ? 'rgba(229,19,43,0.92)'
          : hoverLink
            ? 'rgba(244,241,236,0.08)'
            : 'rgba(244,241,236,1)',
        borderColor: hoverLink && !label
          ? 'rgba(244,241,236,0.7)'
          : 'rgba(244,241,236,0)',
      }}
      transition={{ type: 'spring', stiffness: 420, damping: 30 }}
    >
      <span
        className="absolute inset-0 rounded-full border"
        style={{ borderColor: 'inherit' }}
      />
      <AnimatePresence>
        {label && (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="font-sans text-[11px] font-bold tracking-[0.18em] text-white"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
