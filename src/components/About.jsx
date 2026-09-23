import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Flame, Heart, Users, MapPin } from 'lucide-react';

const About = () => {
  const { t, lang } = useLanguage();

  const pillarStyles = [
    {
      icon: <Flame className="w-5 h-5 text-amber-400" />,
      bg: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
      badgeBg: 'bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950',
    },
    {
      icon: <Heart className="w-5 h-5 text-emerald-400" />,
      bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
      badgeBg: 'bg-gradient-to-tr from-emerald-500 to-teal-500 text-slate-950',
    },
    {
      icon: <Users className="w-5 h-5 text-sky-400" />,
      bg: 'bg-sky-500/10 border-sky-500/30 text-sky-300',
      badgeBg: 'bg-gradient-to-tr from-sky-500 to-indigo-500 text-slate-950',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background ambient warm saffron glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/[0.08] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm shadow-amber-500/10">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>{t.about.headingBadge}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight ${
            lang === 'te' ? 'font-telugu' : 'font-sacred'
          }`}>
            {t.about.heading}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Descriptive text and values */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/60 border border-amber-500/30 shadow-2xl backdrop-blur-sm relative">
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-amber-500 text-slate-950 font-bold text-[11px] uppercase tracking-wider shadow">
                {lang === 'te' ? 'లక్ష్యం & ఆశయం' : 'Mission & Vision'}
              </div>

              <p className={`text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed font-normal pt-2 ${
                lang === 'te' ? 'font-telugu' : 'font-sans'
              }`}>
                {t.about.content}
              </p>
              
              <div className="mt-6 pt-6 border-t border-slate-800 flex items-center gap-2 text-xs sm:text-sm text-amber-300/90 font-medium">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.about.locationTag}</span>
              </div>
            </div>

            {/* 3 Core Pillars with Distinctive Jewel Tones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {t.about.values.map((val, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${pillarStyles[idx].bg}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center mb-3 shadow-md">
                    {pillarStyles[idx].icon}
                  </div>
                  <h3 className={`text-base font-bold text-white mb-1.5 ${lang === 'te' ? 'font-telugu' : 'font-sans'}`}>
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-normal">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sacred Temple / Shiva visual in Full Color */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl shadow-amber-500/10 group bg-slate-900">
              <img
                src="/images/shiva-about.jpg"
                alt="Lord Shiva Sanctum Lingam worship"
                className="w-full h-[470px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              {/* Bottom Badge with Radiant Golden Om */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-slate-950/85 border border-amber-500/40 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 shrink-0 font-bold shadow-md shadow-amber-500/30">
                    <span className="text-base font-serif">ॐ</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-amber-300 tracking-wide uppercase">
                      {lang === 'te' ? 'సనాతన ధర్మ వేదిక' : 'Sanatana Dharma Platform'}
                    </h4>
                    <p className="text-[11px] text-slate-300">
                      {lang === 'te' ? 'భక్తి, సేవ, మరియు ఆత్మశాంతి' : 'Devotion, Service, and Inner Peace'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing amber offset shadow frame */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-2 border-amber-500/20 -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
