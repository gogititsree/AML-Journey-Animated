import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 2000),
      setTimeout(() => setPhase(4), 4000), // start exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center z-20"
      {...sceneTransitions.fadeBlur}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center px-10">
        <motion.div
          className="text-accent font-bold tracking-widest uppercase mb-4 text-[1.5vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Enrolled Agent → AML Analyst
        </motion.div>
        
        <h1 className="text-[6vw] leading-[1.1] font-display font-bold text-text-inverse tracking-tight">
          {'ACAMS'.split('').map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 40, rotateX: -40 }}
              animate={phase >= 2 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 40, rotateX: -40 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25, delay: phase >= 2 ? i * 0.05 : 0 }}
            >
              {char}
            </motion.span>
          ))}
          <br/>
          <motion.span
            className="text-[4vw] text-text-inverse/80 block mt-2"
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
            animate={phase >= 2 ? { opacity: 1, filter: "blur(0px)", scale: 1 } : { opacity: 0, filter: "blur(10px)", scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Certification Prep
          </motion.span>
        </h1>
        
        <motion.div
          className="mt-8 border border-white/20 rounded-full px-6 py-2 inline-block text-[1.2vw] backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={phase >= 3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Master the Bank Secrecy Act
        </motion.div>
      </div>
    </motion.div>
  );
}