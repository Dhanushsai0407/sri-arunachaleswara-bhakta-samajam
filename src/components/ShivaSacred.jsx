import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ShivaSacred = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="relative py-28 sm:py-36 bg-slate-950 overflow-hidden flex items-center justify-center text-center">
      {/* Background Shiva Image in Natural Cosmic Splendor */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/shiva-sacred.jpg"
          alt="Lord Shiva Mahadev Sacred Transcendence"
          className="w-full h-full object-cover object-center scale-100 brightness-75 contrast-115"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.2)_0%,rgba(15,23,42,0.85)_65%,rgba(5,7,14,0.98)_100%)]" />
      </div>

      {/* Floating Sacred Golden Aura Ring */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-500/20 via-orange-500/15 to-yellow-400/20 blur-3xl pointer-events-none animate-pulse-subtle" />

      {/* Center Sacred Text */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Sacred Trishul & Om Crest Symbol in Radiant Gold */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-orange-500 mx-auto flex items-center justify-center mb-6 shadow-2xl shadow-amber-500/40 p-0.5">
          <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
            <span className="text-2xl font-serif font-bold text-amber-300">ॐ</span>
          </div>
        </div>

        {/* First Sacred Mantra in Radiant Gold Text */}
        <h2 className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-widest leading-tight mb-4 bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(245,158,11,0.7)] ${
          lang === 'te' ? 'font-telugu' : 'font-sacred'
        }`}>
          {t.shivaSection.mantra1}
        </h2>

        {/* Second Sacred Mantra in Warm Saffron Amber */}
        <h3 className={`text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-wider mb-6 text-amber-300 drop-shadow-[0_0_20px_rgba(249,115,22,0.6)] ${
          lang === 'te' ? 'font-telugu' : 'font-sacred'
        }`}>
          {t.shivaSection.mantra2}
        </h3>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-amber-500" />
          <span className="text-amber-400 text-sm">✦</span>
          <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-amber-500" />
        </div>

        {/* Spiritual Quote */}
        <p className={`text-sm sm:text-base md:text-lg text-amber-100/90 max-w-xl mx-auto font-medium italic ${
          lang === 'te' ? 'font-telugu' : 'font-sans'
        }`}>
          {t.shivaSection.quote}
        </p>

      </div>
    </section>
  );
};

export default ShivaSacred;
