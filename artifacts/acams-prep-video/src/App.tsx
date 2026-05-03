import { useState } from 'react';
import VideoWithControls from "@/components/video/VideoWithControls";
import QuizApp from "@/components/quiz/QuizApp";
import MockTestApp from "@/components/quiz/MockTestApp";
import FlashCardApp from "@/components/quiz/FlashCardApp";
import CrosswordApp from "@/components/quiz/CrosswordApp";
import WordSearchApp from "@/components/quiz/WordSearchApp";
import ExamApp from "@/components/quiz/ExamApp";
import { Play, BookOpen, ClipboardList, Layers, Grid3x3, Search, GraduationCap } from 'lucide-react';

type Tab = 'video' | 'quiz' | 'mock' | 'flash' | 'crossword' | 'wordsearch' | 'exam';

export default function App() {
  const [tab, setTab] = useState<Tab>('video');

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col bg-gray-950">
      {/* Tab bar */}
      <div className="shrink-0 flex items-center gap-1 px-3 py-2 bg-black/70 backdrop-blur-sm border-b border-white/10 z-50 overflow-x-auto">
        <button
          onClick={() => setTab('video')}
          className={`shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
            tab === 'video' ? 'bg-amber-400 text-gray-900' : 'text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          <Play size={13} /> Animated Story
        </button>
        <button
          onClick={() => setTab('quiz')}
          className={`shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
            tab === 'quiz' ? 'bg-amber-400 text-gray-900' : 'text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          <BookOpen size={13} /> 200 Practice Qs
        </button>
        <button
          onClick={() => setTab('mock')}
          className={`shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
            tab === 'mock' ? 'bg-amber-400 text-gray-900' : 'text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          <ClipboardList size={13} /> 5 Mock Tests
        </button>
        <button
          onClick={() => setTab('flash')}
          className={`shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
            tab === 'flash' ? 'bg-amber-400 text-gray-900' : 'text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          <Layers size={13} /> 200 Flashcards
        </button>
        <button
          onClick={() => setTab('crossword')}
          className={`shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
            tab === 'crossword' ? 'bg-violet-500 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          <Grid3x3 size={13} /> Crossword
        </button>
        <button
          onClick={() => setTab('wordsearch')}
          className={`shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
            tab === 'wordsearch' ? 'bg-cyan-500 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          <Search size={13} /> Word Search
        </button>
        <button
          onClick={() => setTab('exam')}
          className={`shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
            tab === 'exam' ? 'bg-emerald-500 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          <GraduationCap size={13} /> Exam Simulator
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
        <div className={`absolute inset-0 overflow-y-auto ${tab === 'mock' ? 'block' : 'hidden'}`}>
          <MockTestApp />
        </div>
        <div className={`absolute inset-0 overflow-y-auto ${tab === 'flash' ? 'block' : 'hidden'}`}>
          <FlashCardApp />
        </div>
        <div className={`absolute inset-0 overflow-y-auto ${tab === 'crossword' ? 'block' : 'hidden'}`}>
          <CrosswordApp />
        </div>
        <div className={`absolute inset-0 overflow-hidden ${tab === 'wordsearch' ? 'block' : 'hidden'}`}>
          <WordSearchApp />
        </div>
        <div className={`absolute inset-0 overflow-hidden ${tab === 'exam' ? 'block' : 'hidden'}`}>
          <ExamApp />
        </div>
      </div>
    </div>
  );
}
