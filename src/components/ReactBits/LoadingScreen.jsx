import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import ShinyText from './ShinyText';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const statuses = [
    'Initializing core environment...',
    'Loading modules & assets...',
    'Mounting distributed systems...',
    'System Ready',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 6;
        return next > 100 ? 100 : next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress > 75) setStatusIndex(3);
    else if (progress > 50) setStatusIndex(2);
    else if (progress > 25) setStatusIndex(1);
    else setStatusIndex(0);
  }, [progress]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#090d16] text-slate-100 select-none overflow-hidden"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-amber-500/12 rounded-full blur-[100px] pointer-events-none" />

          {/* Central Logo Monogram with Dual Orbit Rings */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex items-center justify-center mb-9"
          >
            {/* Outer Spinning Ring */}
            <div className="absolute w-28 h-28 rounded-full border-2 border-purple-500/20 border-t-purple-500 border-r-amber-400 animate-spin-slow shadow-lg shadow-purple-500/10" />

            {/* Inner Counter-Spinning Ring */}
            <div className="absolute w-22 h-22 rounded-full border border-dashed border-purple-400/40 animate-spin-reverse" />

            {/* Center Glass Monogram Box */}
            <div className="w-18 h-18 p-4 rounded-2xl bg-slate-900/90 border border-purple-500/40 backdrop-blur-xl flex items-center justify-center shadow-2xl shadow-purple-500/20 relative group">
              <span className="font-mono text-2xl font-black bg-gradient-to-r from-amber-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
                S
              </span>
              <Sparkles size={11} className="absolute top-2 right-2 text-amber-400 animate-pulse" />
            </div>
          </motion.div>

          {/* Brand Title & Status */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-center mb-7"
          >
            <h1 className="text-2xl font-bold tracking-tight text-slate-100 flex items-center justify-center gap-1">
              Sidharth<span className="text-purple-400 font-mono font-bold">.dev</span>
            </h1>
            <p className="text-xs font-mono text-slate-400 mt-1.5 flex items-center justify-center gap-2">
              <ShinyText text={statuses[statusIndex]} speed={2.5} />
            </p>
          </motion.div>

          {/* Progress Bar & Percentage */}
          <div className="w-72 max-w-[85vw] flex flex-col gap-2.5 items-center">
            <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-purple-500/20 p-0.5 relative shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-amber-400 to-purple-400 rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              >
                {/* Laser highlight tip */}
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
              </motion.div>
            </div>
            <span className="text-[11px] font-mono text-slate-400 font-bold tracking-widest uppercase">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
