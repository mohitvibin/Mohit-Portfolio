
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const bootMessages = [
  'INITIALIZING SECURE SESSION...',
  'CHECKING NETWORK INTERFACES...',
  'SYSTEM READY',
];

export default function PlayIntro({
  onClose,
}: {
  onClose: () => void;
}) {
  const [bootIndex, setBootIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Enter') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKey);

    const bootTimer = window.setInterval(() => {
      setBootIndex((current) =>
        Math.min(current + 1, bootMessages.length - 1)
      );
    }, 850);

    const cursorTimer = window.setInterval(() => {
      setShowCursor((current) => !current);
    }, 530);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
      window.clearInterval(bootTimer);
      window.clearInterval(cursorTimer);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center
        overflow-hidden bg-[#080808] px-5 text-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      role="dialog"
      aria-modal="true"
      aria-label="Mohit Budhathoki introduction"
    >
      {/* Portfolio-matching red and black background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(229,19,43,0.12),_transparent_65%)]" />

      {/* Subtle technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(229,19,43,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(229,19,43,0.18) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Cinematic scanning line */}
      <motion.div
        className="pointer-events-none absolute left-0 right-0 h-px bg-red-500/40 shadow-[0_0_18px_rgba(229,19,43,0.7)]"
        initial={{ top: '-5%' }}
        animate={{ top: '105%' }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Soft red ambient glow */}
      <motion.div
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-red-600/15 blur-[100px] sm:h-96 sm:w-96"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 25, 0],
          y: [0, -15, 0],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main intro */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-4xl"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* System status */}
        <motion.div
          className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-red-500/25 bg-red-500/[0.05] px-4 py-2 font-mono text-[10px] tracking-[0.18em] text-red-400 sm:text-xs"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.span
            className="h-2 w-2 rounded-full bg-red-500"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.3, repeat: Infinity }}
          />
          SYSTEM ONLINE
          <span className="text-red-900">/</span>
          ACCESS GRANTED
        </motion.div>

        {/* Upper heading */}
        <motion.p
          className="mb-6 font-mono text-[10px] tracking-[0.18em] text-red-400 sm:text-sm sm:tracking-[0.3em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          NETWORKING <span className="text-red-900">·</span>{' '}
          IT SUPPORT <span className="text-red-900">·</span>{' '}
          CYBERSECURITY
        </motion.p>

        {/* Cinematic name reveal */}
        <motion.h1
          className="text-4xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl"
          initial={{
            opacity: 0,
            y: 25,
            filter: 'blur(12px)',
            letterSpacing: '0.08em',
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            letterSpacing: '0em',
          }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: 'easeOut',
          }}
        >
          MOHIT
          <span className="text-red-500"> BUDHATHOKI</span>

        </motion.h1>

        {/* Animated divider */}
        <div className="mx-auto mt-7 flex max-w-xs items-center gap-3">
          <motion.div
            className="h-px flex-1 bg-red-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{ transformOrigin: 'left' }}
          />

          <span className="font-mono text-[10px] tracking-widest text-red-400">
            
          </span>

          <motion.div
            className="h-px flex-1 bg-red-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{ transformOrigin: 'right' }}
          />
        </div>

        {/* Short professional introduction */}
        <motion.p
          className="mx-auto mt-7 max-w-xl text-sm leading-7 text-gray-400 sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          Building reliable networks. Troubleshooting systems.
          Exploring the world of cybersecurity.
        </motion.p>

        {/* Terminal status animation */}
        <motion.div
          className="mx-auto mt-7 min-h-5 font-mono text-[10px] tracking-wider text-red-400 sm:text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          aria-live="polite"
        >
        
          {bootMessages[bootIndex]}
        </motion.div>

        {/* Enter portfolio button */}
        <motion.button
          type="button"
          onClick={onClose}
          whileHover={{
            scale: 1.04,
            boxShadow: '0 0 28px rgba(229,19,43,0.3)',
          }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="group mt-9 inline-flex items-center gap-3 border border-red-500/60 bg-red-500/[0.06] px-7 py-3.5 font-mono text-xs font-semibold tracking-[0.15em] text-red-400 transition-colors hover:border-red-400 hover:bg-red-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        >
  
          ENTER PORTFOLIO
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </motion.button>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="absolute bottom-5 left-0 right-0 flex justify-center gap-3 font-mono text-[9px] tracking-[0.15em] text-gray-600 sm:text-[10px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
      >
        <span>LOCATION: KATHMANDU, NP</span>
        <span className="text-red-900">|</span>
        <span>STATUS: READY</span>
      </motion.div>
    </motion.div>
  );
}
