import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 2000),
      setTimeout(() => setPhase(4), 3000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-20"
      {...sceneTransitions.scaleFade}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-[1.5vw] font-bold text-accent tracking-widest uppercase mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      >
        Core Pillar
      </motion.div>

      <motion.h2
        className="text-[6vw] font-display font-bold leading-none mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
      >
        Know Your Customer
      </motion.h2>

      <div className="flex gap-8 px-10 w-full max-w-[80vw]">
        {[
          { title: "Identify", desc: "Verify identity of clients" },
          { title: "Understand", desc: "Understand nature of activities" },
          { title: "Assess", desc: "Assess money laundering risks" }
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            animate={phase >= i + 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="text-[2vw] font-bold text-white mb-2">{item.title}</div>
            <div className="text-[1.2vw] text-white/60">{item.desc}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}