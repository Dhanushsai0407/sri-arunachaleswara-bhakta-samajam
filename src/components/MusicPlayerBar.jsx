import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAudio } from '../context/AudioContext';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, X, Music2 } from 'lucide-react';

const MusicPlayerBar = () => {
  const { lang, t } = useLanguage();
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    handleNext,
    handlePrev,
    formatTime,
    seek,
    hasUserStartedPlayback,
  } = useAudio();

  const [isDismissed, setIsDismissed] = useState(false);

  // Only display the bottom player bar after the visitor explicitly clicks to play a song
  if (!hasUserStartedPlayback || !currentSong || isDismissed) return null;

  const title = lang === 'te' ? currentSong.titleTe : currentSong.titleEn;
  const category = t.music.categories[currentSong.category] || currentSong.category;

  return (
    <aside
      className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t-2 border-amber-500/40 backdrop-blur-xl shadow-2xl shadow-black px-4 py-2.5 transition-all duration-300"
      aria-label="Now Playing Mini Player"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Left: Song Info with radiant golden rotating icon */}
        <div className="flex items-center gap-3 min-w-0 max-w-xs sm:max-w-sm">
          <div className="w-10 h-10 rounded-full bg-slate-900 border border-amber-500/50 flex items-center justify-center shrink-0 relative shadow-md shadow-amber-500/20">
            <span className="text-xs font-serif font-bold text-amber-300">ॐ</span>
            {isPlaying && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
            )}
          </div>
          <div className="min-w-0">
            <h4 className={`text-xs sm:text-sm font-bold text-white truncate ${lang === 'te' ? 'font-telugu' : 'font-sans'}`}>
              {title}
            </h4>
            <p className="text-[10px] text-amber-300/80 truncate">
              {category} • <span className="font-mono text-slate-300">{formatTime(currentTime)} / {formatTime(duration)}</span>
            </p>
          </div>
        </div>

        {/* Center: Controls + Scrubber */}
        <div className="flex-1 max-w-md flex flex-col items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="text-amber-300 hover:text-white p-1 transition-colors"
              aria-label="Previous song"
            >
              <SkipBack className="w-4 h-4" />
            </button>
            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center hover:scale-105 transition-all shadow-md shadow-amber-500/30"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>
            <button
              onClick={handleNext}
              className="text-amber-300 hover:text-white p-1 transition-colors"
              aria-label="Next song"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Mini progress line */}
          <div className="w-full hidden sm:block mt-1">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={(e) => seek(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
          </div>
        </div>

        {/* Right: Close/Dismiss Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 text-slate-400 hover:text-amber-300 hover:bg-slate-900 rounded-full transition-colors"
            title="Minimize Player"
            aria-label="Minimize Player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
};

export default MusicPlayerBar;
