import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = ({ className = "" }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`inline-flex items-center rounded-full p-1 bg-slate-900/90 border border-amber-500/40 shadow-inner backdrop-blur-md ${className}`}>
      <button
        onClick={() => setLang('te')}
        className={`px-3.5 py-1 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${
          lang === 'te'
            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold shadow-md shadow-amber-500/30'
            : 'text-amber-200/80 hover:text-white'
        }`}
        aria-label="తెలుగు భాషను ఎంచుకోండి"
      >
        తెలుగు
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3.5 py-1 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${
          lang === 'en'
            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold shadow-md shadow-amber-500/30'
            : 'text-amber-200/80 hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        English
      </button>
    </div>
  );
};

export default LanguageToggle;
