import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');

  useEffect(() => {
    // Phase 1: Enter animation plays (~700ms)
    // Phase 2: Hold for a moment (~800ms)
    // Phase 3: Exit slide up (~600ms), then call onComplete
    const enterTimer = setTimeout(() => setPhase('hold'), 700);
    const holdTimer = setTimeout(() => setPhase('exit'), 1500);
    const exitTimer = setTimeout(() => onComplete(), 2500);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-gray-950 overflow-hidden"
        >
          {/* Background accent orb */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute w-[600px] h-[600px] rounded-full bg-teal-500 blur-[120px] pointer-events-none"
          />

          <div className="relative text-center select-none">
            {/* Name reveal */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: phase === 'enter' ? '0%' : '0%' }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="text-6xl md:text-8xl font-extrabold text-white tracking-tight leading-none"
              >
                Birva
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.76, 0, 0.24, 1] }}
                className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 tracking-tight leading-none"
              >
                Vaghasiya
              </motion.h2>
            </div>

            {/* Animated line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="h-[2px] w-full bg-gradient-to-r from-transparent via-teal-400 to-transparent origin-left mb-4"
            />

            {/* Tagline */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 0.6 }}
                transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
                className="text-sm md:text-base font-light text-gray-400 tracking-[0.3em] uppercase"
              >
                Creative Developer &amp; Designer
              </motion.p>
            </div>

            {/* Loading bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 0.1, ease: 'easeInOut' }}
              className="mt-10 h-[3px] w-48 mx-auto bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full origin-left"
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default SplashScreen;
