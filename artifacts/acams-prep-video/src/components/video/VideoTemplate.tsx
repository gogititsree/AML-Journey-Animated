import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

const SCENE_DURATIONS = {
  open: 5000,
  bsa: 7000,
  kyc: 7000,
  sar: 8000,
  close: 6000,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-bg-dark text-text-inverse">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/finance-bg.jpg)` }}
          animate={{
            scale: [1, 1.1, 1.2, 1.1, 1],
            x: ['0%', '-2%', '2%', '-1%', '0%'],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent" />
      </div>

      {/* Persistent Midground Accents */}
      <motion.div
        className="absolute h-1 bg-accent z-10"
        animate={{
          left: ['0%', '20%', '0%', '40%', '10%'][currentScene],
          width: ['100%', '60%', '80%', '30%', '50%'][currentScene],
          top: ['95%', '10%', '90%', '15%', '85%'][currentScene],
          opacity: currentScene >= 4 ? 0 : 1,
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <AnimatePresence initial={false} mode="wait">
        {currentScene === 0 && <Scene1 key="open" />}
        {currentScene === 1 && <Scene2 key="bsa" />}
        {currentScene === 2 && <Scene3 key="kyc" />}
        {currentScene === 3 && <Scene4 key="sar" />}
        {currentScene === 4 && <Scene5 key="close" />}
      </AnimatePresence>
    </div>
  );
}