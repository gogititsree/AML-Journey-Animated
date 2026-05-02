import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video';
import { CheckCircle2 } from 'lucide-react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center z-20"
      {...sceneTransitions.zoomThrough}
    >
      <div className="text-center px-10 w-full max-w-[60vw]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-bg-dark" />
          </div>
        </motion.div>

        <motion.h2
          className="text-[4vw] font-display font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        >
          Your EA background is an asset.
        </motion.h2>

        <motion.p
          className="text-[1.8vw] text-white/70"
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Tax expertise translates directly to understanding complex financial flows. You are ready for AML.
        </motion.p>
      </div>
    </motion.div>
  );
}