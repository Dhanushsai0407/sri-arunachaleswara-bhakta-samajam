import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDown, Flame, Music, ChevronRight } from 'lucide-react';

const Hero = () => {
  const { t, lang } = useLanguage();

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20"
      aria-label="Hero Section"
    >
      {/* Background Image with Rich Natural Devotional Presence and Golden Radial Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/shiva-hero.jpg"
          alt="Lord Shiva Mahadev in Kailash Meditation"
          className="w-full h-full shiva-hero-bg object-cover object-[70%_30%] md:object-center transition-all duration-1000 ease-out brightness-95 contrast-110"
          loading="eager"
        />
        {/* Devotional Radiant Gradients: Calibrated for Lord Shiva's divine visibility on mobile and desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/30 sm:via-slate-950/75 sm:to-slate-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(245,158,11,0.22)_0%,rgba(15,23,42,0.65)_60%,rgba(5,7,14,0.92)_100%)]" />
      </div>

      {/* Floating Sacred Golden Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-gradient-to-tr from-amber-500/15 via-yellow-400/20 to-orange-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 pb-14 sm:py-16 flex flex-col items-center">
        
        {/* Sacred Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/85 border border-amber-500/60 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide mb-6 backdrop-blur-md shadow-lg shadow-amber-500/10">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span>{t.hero.locationBadge}</span>
        </div>

        {/* Sacred Maha Mantra in Radiant Gold */}
        <p className={`text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-widest mb-3 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(245,158,11,0.6)] ${
          lang === 'te' ? 'font-telugu' : 'font-sacred'
        }`}>
          {t.hero.mantra}
        </p>

        {/* Main Organization Title */}
        <h1 className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] ${
          lang === 'te' ? 'font-telugu' : 'font-sacred'
        }`}>
          {t.hero.orgName}
        </h1>

        {/* Subtitle: Devotion • Service • Dharma • Community */}
        <div className="relative mb-6">
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4" />
          <h2 className={`text-lg sm:text-2xl text-amber-300 font-bold tracking-wider ${lang === 'te' ? 'font-telugu' : 'font-sans'}`}>
            {t.hero.subtitle}
          </h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4" />
        </div>

        {/* Descriptive Statement */}
        <p className="max-w-2xl text-slate-200 text-sm sm:text-base md:text-lg font-normal mb-10 leading-relaxed drop-shadow">
          {t.hero.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Saffron Gradient Primary CTA */}
          <button
            onClick={() => handleScrollTo('#about')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-orange-500/35 hover:shadow-orange-500/60 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none"
          >
            <span>{t.hero.btnAbout}</span>
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </button>

          {/* Golden Bordered Secondary CTA */}
          <button
            onClick={() => handleScrollTo('#contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900/90 text-amber-200 border border-amber-500/60 hover:border-amber-400 hover:text-white hover:bg-slate-800 transition-all duration-300 font-semibold text-sm sm:text-base focus:outline-none shadow-md"
          >
            <span>{t.hero.btnContact}</span>
          </button>

          {/* Devotional Music Button */}
          <button
            onClick={() => handleScrollTo('#music')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900/60 text-amber-300 hover:text-white border border-amber-500/40 hover:border-amber-400 hover:bg-amber-500/10 transition-all duration-300 text-sm focus:outline-none"
          >
            <Music className="w-4 h-4 text-amber-400" />
            <span>{t.hero.btnMusic}</span>
          </button>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <button
        onClick={() => handleScrollTo('#about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-amber-400/80 hover:text-amber-300 transition-colors duration-200 focus:outline-none group"
        aria-label="Scroll down to content"
      >
        <span className="text-[11px] tracking-widest uppercase mb-1 font-semibold text-amber-400 group-hover:text-amber-200">
          {t.hero.scrollDown}
        </span>
        <div className="w-8 h-8 rounded-full border border-amber-500/50 flex items-center justify-center group-hover:border-amber-400 transition-colors animate-bounce shadow-sm shadow-amber-500/20">
          <ArrowDown className="w-4 h-4 text-amber-300" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
