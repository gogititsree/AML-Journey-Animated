import { useState } from 'react';
import VideoWithControls from "@/components/video/VideoWithControls";
import QuizApp from "@/components/quiz/QuizApp";
import { Play, BookOpen } from 'lucide-react';

type Tab = 'video' | 'quiz';

export default function App() {
  const [tab, setTab] = useState<Tab>('video');

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col bg-gray-950">
      {/* Tab bar */}
      <div className="shrink-0 flex items-center gap-1 px-4 py-2 bg-black/70 backdrop-blur-sm border-b border-white/10 z-50">
        <button
          onClick={() => setTab('video')}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
            tab === 'video'
              ? 'bg-amber-400 text-gray-900'
              : 'text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          <Play size={14} /> Animated Story
        </button>
        <button
          onClick={() => setTab('quiz')}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
            tab === 'quiz'
              ? 'bg-amber-400 text-gray-900'
              : 'text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          <BookOpen size={14} /> 200 Practice Questions
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden relative">
        <div className={`absolute inset-0 ${tab === 'video' ? 'block' : 'hidden'}`}>
          <VideoWithControls />
        </div>
        <div className={`absolute inset-0 overflow-y-auto ${tab === 'quiz' ? 'block' : 'hidden'}`}>
          <QuizApp />
        </div>
      </div>
    </div>
  );
}
