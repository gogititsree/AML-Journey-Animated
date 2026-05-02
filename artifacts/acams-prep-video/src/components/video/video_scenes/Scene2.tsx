import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video';
import { ShieldCheck } from 'lucide-react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setPhase(4), 3800),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-start px-[10vw] z-20"
      {...sceneTransitions.slideLeft}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative large text in background */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[30vw] font-display font-black text-white/[0.03] select-none leading-none z-0"
        initial={{ x: '100%' }}
        animate={{ x: '20%' }}
        transition={{ duration: 6, ease: "linear" }}
      >
        BSA
      </motion.div>

      <div className="max-w-[45vw] z-10">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center border border-accent/50">
            <ShieldCheck className="w-6 h-6 text-accent" />
          </div>
          <span className="text-[1.5vw] font-bold text-accent tracking-wider uppercase">Foundation</span>
        </motion.div>

        <motion.h2 
          className="text-[4vw] font-display font-bold leading-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bank Secrecy Act
        </motion.h2>

        <div className="space-y-6">
          {[
            "Recordkeeping of cash purchases",
            "Reporting of suspicious activities",
            "AML program requirements"
          ].map((text, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 text-[1.8vw] text-white/80"
              initial={{ opacity: 0, x: -20 }}
              animate={phase >= i + 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2 h-2 rounded-full bg-accent" />
              {text}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}