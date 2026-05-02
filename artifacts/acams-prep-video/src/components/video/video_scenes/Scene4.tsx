import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video';
import { AlertTriangle } from 'lucide-react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 3000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-end px-[10vw] z-20"
      {...sceneTransitions.slideRight}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[45vw] text-right z-10">
        <motion.div
          className="flex items-center justify-end gap-4 mb-6"
          initial={{ opacity: 0, x: 30 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        >
          <span className="text-[1.5vw] font-bold text-accent tracking-wider uppercase">Action</span>
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center border border-accent/50">
            <AlertTriangle className="w-6 h-6 text-accent" />
          </div>
        </motion.div>

        <motion.h2 
          className="text-[4.5vw] font-display font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2 }}
        >
          Suspicious Activity Report
        </motion.h2>

        <motion.div
          className="text-[2vw] text-white/80 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          A document that financial institutions must file with the Financial Crimes Enforcement Network (FinCEN) following a suspected incident of money laundering or fraud.
        </motion.div>

        <motion.div
          className="mt-8 inline-block bg-accent text-bg-dark font-bold px-8 py-3 rounded-full text-[1.5vw]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={phase >= 3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          Must be filed within 30 days
        </motion.div>
      </div>

      <motion.div
        className="absolute left-[10vw] top-1/2 -translate-y-1/2 w-[30vw] h-[30vw] border-[1px] border-white/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <motion.div 
          className="absolute -top-3 left-1/2 w-6 h-6 bg-accent rounded-full shadow-[0_0_20px_rgba(242,169,0,0.8)]"
        />
      </motion.div>
    </motion.div>
  );
}