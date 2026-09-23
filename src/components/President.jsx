import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

const President = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="president" className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background warm golden radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-amber-500/10 via-orange-500/10 to-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm shadow-amber-500/15">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>{t.president.headingBadge}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight ${
            lang === 'te' ? 'font-telugu' : 'font-sacred'
          }`}>
            {t.president.heading}
          </h2>
          <p className="text-amber-200/80 text-sm sm:text-base mt-3">
            {t.president.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* President Profile Card in Vibrant Royal Styling */}
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950 p-8 sm:p-12 rounded-3xl border-2 border-amber-500/40 shadow-2xl shadow-amber-500/20 relative">
          
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 text-amber-400/30 text-lg">✦</div>
          <div className="absolute top-4 right-4 text-amber-400/30 text-lg">✦</div>
          <div className="absolute bottom-4 left-4 text-amber-400/30 text-lg">✦</div>
          <div className="absolute bottom-4 right-4 text-amber-400/30 text-lg">✦</div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Respectful Framed Photo with Radiant Golden Ring and Natural Color Photo */}
            <div className="relative shrink-0 group">
              {/* Outer Golden Gradient Ring */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 aspect-square rounded-full p-1.5 bg-gradient-to-tr from-amber-400 via-yellow-300 to-orange-500 shadow-2xl shadow-amber-500/40 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-900">
                  <img
                    src="/images/president.jpg"
                    alt={t.president.name}
                    className="w-full h-full object-cover object-[50%_35%] scale-125 brightness-105 contrast-105 transition-transform duration-500 group-hover:scale-130"
                    loading="lazy"
                  />
                  {/* Subtle inner golden vignette ring */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-amber-400/30 pointer-events-none" />
                </div>
              </div>

              {/* Verified Leadership Badge in Vibrant Saffron-Gold */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-extrabold tracking-wide whitespace-nowrap shadow-lg shadow-amber-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 fill-current" />
                <span>{t.president.badge}</span>
              </div>
            </div>

            {/* Information Column */}
            <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start space-y-3">
              <div className="inline-block text-xs uppercase tracking-widest text-amber-400 font-bold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40">
                {t.president.title}
              </div>

              <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight ${
                lang === 'te' ? 'font-telugu' : 'font-sans'
              }`}>
                {t.president.name}
              </h3>

              <p className={`text-base sm:text-lg text-amber-300 font-semibold ${
                lang === 'te' ? 'font-telugu' : 'font-sans'
              }`}>
                {t.president.org}
              </p>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 pt-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.president.location}</span>
              </div>

              {/* Devotional Quote Box with Golden Accent Line */}
              <div className="mt-4 pt-4 border-t border-slate-800/90 w-full">
                <blockquote className={`text-sm italic text-slate-200 leading-relaxed border-l-4 border-amber-500 pl-4 text-left ${
                  lang === 'te' ? 'font-telugu' : 'font-sans'
                }`}>
                  "{t.president.quote}"
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default President;
