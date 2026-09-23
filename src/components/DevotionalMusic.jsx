import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAudio } from '../context/AudioContext';
import { songsData } from '../data/songs';
import {
  Play,
  Pause,
  Search,
  Music2,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
  Radio,
  Sparkles,
  Info
} from 'lucide-react';

const DevotionalMusic = () => {
  const { t, lang } = useLanguage();
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    playSong,
    togglePlay,
    seek,
    changeVolume,
    toggleMute,
    handleNext,
    handlePrev,
    formatTime,
  } = useAudio();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Categories list
  const categories = [
    { key: 'all', label: t.music.categories.all },
    { key: 'veera-brahmam', label: t.music.categories['veera-brahmam'] },
    { key: 'tatvalu', label: t.music.categories.tatvalu },
    { key: 'ammavari', label: t.music.categories.ammavari },
    { key: 'shirdi-sai', label: t.music.categories['shirdi-sai'] },
  ];

  // Filter songs by category and search query
  const filteredSongs = useMemo(() => {
    return songsData.filter((song) => {
      const matchCat = selectedCategory === 'all' || song.category === selectedCategory;
      const title = lang === 'te' ? song.titleTe : song.titleEn;
      const matchSearch =
        searchQuery.trim() === '' ||
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.titleTe.includes(searchQuery);
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery, lang]);

  const handleProgressChange = (e) => {
    const val = parseFloat(e.target.value);
    seek(val);
  };

  return (
    <section id="music" className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background Sacred Ambient Aura */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-amber-500/[0.08] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm shadow-amber-500/15">
            <Radio className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.music.headingBadge}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight ${
            lang === 'te' ? 'font-telugu' : 'font-sacred'
          }`}>
            {t.music.heading}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            {t.music.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs (Desktop & Mobile) with Saffron/Gold Accents */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2.5 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                selectedCategory === cat.key
                  ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 border-amber-300 shadow-lg shadow-orange-500/30 scale-105'
                  : 'bg-slate-900/80 text-amber-200/80 border-slate-800 hover:border-amber-500/50 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Devotional Audio Studio UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Song Search & Playlist List */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Search Box */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.music.searchPlaceholder}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-amber-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Playlist Container */}
            <div className="bg-slate-900/70 rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl backdrop-blur-md">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between text-xs text-amber-300/80">
                <span className="font-bold uppercase tracking-wider">{t.music.trackList}</span>
                <span className="font-mono text-amber-400 font-semibold">{filteredSongs.length} {lang === 'te' ? 'గీతాలు' : 'Tracks'}</span>
              </div>

              {filteredSongs.length === 0 ? (
                /* Empty state */
                <div className="py-16 px-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-slate-800 border border-amber-500/40 mx-auto flex items-center justify-center text-amber-400 mb-4">
                    <Music2 className="w-7 h-7" />
                  </div>
                  <h4 className={`text-lg font-bold text-white mb-2 ${lang === 'te' ? 'font-telugu' : 'font-sans'}`}>
                    {t.music.emptyMessage}
                  </h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    {t.music.emptySubtext}
                  </p>
                </div>
              ) : (
                /* List of Songs */
                <div className="divide-y divide-slate-800/80 max-h-[460px] overflow-y-auto">
                  {filteredSongs.map((song) => {
                    const isThisActive = currentSong?.id === song.id;
                    const title = lang === 'te' ? song.titleTe : song.titleEn;
                    const catLabel = t.music.categories[song.category] || song.category;

                    return (
                      <div
                        key={song.id}
                        onClick={() => playSong(song, filteredSongs)}
                        className={`group px-4 py-3.5 flex items-center justify-between cursor-pointer transition-all duration-200 ${
                          isThisActive
                            ? 'bg-amber-500/15 border-l-4 border-amber-400 pl-3 text-white'
                            : 'hover:bg-slate-800/60 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0 pr-2">
                          {/* Play Button with Gold/Saffron Hover */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (isThisActive) {
                                togglePlay();
                              } else {
                                playSong(song, filteredSongs);
                              }
                            }}
                            className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                              isThisActive && isPlaying
                                ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 border-amber-300 shadow-md shadow-amber-500/30'
                                : 'bg-slate-800 text-amber-300 border-slate-700 group-hover:border-amber-400 group-hover:text-amber-200'
                            }`}
                            aria-label={`Play ${title}`}
                          >
                            {isThisActive && isPlaying ? (
                              <Pause className="w-4 h-4 fill-current" />
                            ) : (
                              <Play className="w-4 h-4 fill-current ml-0.5" />
                            )}
                          </button>

                          <div className="min-w-0">
                            <h4 className={`text-sm font-bold truncate ${
                              isThisActive ? 'text-amber-300' : 'group-hover:text-white'
                            } ${lang === 'te' ? 'font-telugu' : 'font-sans'}`}>
                              {title}
                            </h4>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-[11px] text-amber-400/90 font-semibold">
                                {catLabel}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">• {song.duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* Right side playing wave animation in warm gold */}
                        {isThisActive && isPlaying ? (
                          <div className="flex items-end gap-1 h-4 shrink-0 pr-1">
                            <span className="w-1 bg-amber-400 h-full animate-pulse" />
                            <span className="w-1 bg-orange-400 h-2/3 animate-bounce" />
                            <span className="w-1 bg-yellow-300 h-4/5 animate-pulse" />
                          </div>
                        ) : (
                          <span className="text-xs text-slate-400 font-mono shrink-0">
                            {song.duration}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Devotional audio note */}
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-2.5 text-xs text-amber-200/90">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p>
                {lang === 'te'
                  ? 'భక్తి గీతాలు నిరంతరాయంగా వినడానికి కింద ఉన్న ఆధునిక ప్లేయర్‌ను ఉపయోగించండి. నచ్చిన పాటపై క్లిక్ చేసి వినవచ్చు.'
                  : 'Use the interactive devotional player to listen to sacred hymns and tatvas. Click on any track to start listening.'}
              </p>
            </div>
          </div>

          {/* Right Column: Featured Devotional Audio Player Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 p-6 sm:p-8 rounded-3xl border-2 border-amber-500/40 shadow-2xl shadow-amber-500/15 relative">
              
              {/* Devotional Rotating Golden Mandala / Music Icon */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto my-4 flex items-center justify-center">
                {/* Rotating Golden Sacred Ring */}
                <div
                  className={`absolute inset-0 rounded-full border-2 border-dashed border-amber-400/60 ${
                    isPlaying ? 'animate-spin-slow' : ''
                  }`}
                />
                <div className="absolute inset-3 rounded-full border-2 border-amber-500/40 bg-slate-950/90 backdrop-blur-md flex items-center justify-center shadow-inner">
                  {/* Sacred Trishul & Om Icon in Radiant Gold */}
                  <div className="flex flex-col items-center justify-center text-amber-400">
                    <span className="text-4xl font-serif mb-1 font-bold text-amber-300 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]">ॐ</span>
                    <span className="text-[10px] tracking-widest text-amber-400 font-extrabold uppercase">ARUNACHALA</span>
                  </div>
                </div>

                {/* Subtle active golden glow */}
                {isPlaying && (
                  <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-xl animate-pulse" />
                )}
              </div>

              {/* Current Track Details */}
              <div className="text-center mt-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 inline-block mb-2">
                  {t.music.categories[currentSong?.category] || currentSong?.category}
                </span>

                <h3 className={`text-lg sm:text-xl font-extrabold text-white tracking-tight ${
                  lang === 'te' ? 'font-telugu' : 'font-sans'
                }`}>
                  {currentSong ? (lang === 'te' ? currentSong.titleTe : currentSong.titleEn) : t.music.emptyMessage}
                </h3>

                <p className="text-xs text-slate-300 mt-1 max-w-xs mx-auto line-clamp-2">
                  {currentSong ? (lang === 'te' ? currentSong.descriptionTe : currentSong.descriptionEn) : ''}
                </p>
              </div>

              {/* Progress Scrubber */}
              <div className="mt-6">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleProgressChange}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 hover:accent-yellow-300 transition-all"
                  aria-label="Seek audio timeline"
                />
                <div className="flex items-center justify-between text-[11px] font-mono text-amber-300/80 mt-1 font-semibold">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Player Primary Controls */}
              <div className="flex items-center justify-center gap-5 mt-6">
                {/* Prev */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-3 rounded-full text-amber-300 hover:text-white hover:bg-slate-800 border border-slate-700 hover:border-amber-500/60 transition-all"
                  aria-label="Previous track"
                >
                  <SkipBack className="w-5 h-5" />
                </button>

                {/* Play / Pause Main CTA in Vibrant Saffron-Gold */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-400 to-orange-500 text-slate-950 flex items-center justify-center shadow-xl shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all font-bold"
                  aria-label={isPlaying ? "Pause music" : "Play music"}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 fill-current" />
                  ) : (
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  )}
                </button>

                {/* Next */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-3 rounded-full text-amber-300 hover:text-white hover:bg-slate-800 border border-slate-700 hover:border-amber-500/60 transition-all"
                  aria-label="Next track"
                >
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>

              {/* Volume Slider Bar */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="text-amber-400 hover:text-white transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-slate-500" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => changeVolume(parseFloat(e.target.value))}
                  className="w-28 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  aria-label="Volume slider"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DevotionalMusic;
