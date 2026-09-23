import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Flame, HeartHandshake, CalendarCheck, ChevronRight } from 'lucide-react';

const Activities = () => {
  const { t, lang } = useLanguage();

  const activityThemes = {
    'shiva-pooja': {
      icon: <Flame className="w-6 h-6 text-amber-400" />,
      tagColor: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
      iconBg: 'bg-amber-500/10 border-amber-500/30 group-hover:border-amber-400 group-hover:bg-amber-500/20',
      borderHover: 'hover:border-amber-500/80 hover:shadow-amber-500/20',
      numColor: 'text-amber-500',
    },
    'bhakti': {
      icon: <Sparkles className="w-6 h-6 text-yellow-300" />,
      tagColor: 'bg-yellow-500/15 text-yellow-200 border-yellow-500/40',
      iconBg: 'bg-yellow-500/10 border-yellow-500/30 group-hover:border-yellow-400 group-hover:bg-yellow-500/20',
      borderHover: 'hover:border-yellow-500/80 hover:shadow-yellow-500/20',
      numColor: 'text-yellow-400',
    },
    'seva': {
      icon: <HeartHandshake className="w-6 h-6 text-emerald-400" />,
      tagColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
      iconBg: 'bg-emerald-500/10 border-emerald-500/30 group-hover:border-emerald-400 group-hover:bg-emerald-500/20',
      borderHover: 'hover:border-emerald-500/80 hover:shadow-emerald-500/20',
      numColor: 'text-emerald-400',
    },
    'festivals': {
      icon: <CalendarCheck className="w-6 h-6 text-rose-400" />,
      tagColor: 'bg-rose-500/15 text-rose-300 border-rose-500/40',
      iconBg: 'bg-rose-500/10 border-rose-500/30 group-hover:border-rose-400 group-hover:bg-rose-500/20',
      borderHover: 'hover:border-rose-500/80 hover:shadow-rose-500/20',
      numColor: 'text-rose-400',
    },
  };

  return (
    <section id="activities" className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-amber-500/[0.08] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm shadow-amber-500/15">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>{t.activities.headingBadge}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight ${
            lang === 'te' ? 'font-telugu' : 'font-sacred'
          }`}>
            {t.activities.heading}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            {t.activities.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Activities Cards Grid with Colorful Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.activities.items.map((item, idx) => {
            const theme = activityThemes[item.id] || activityThemes['shiva-pooja'];

            return (
              <div
                key={item.id}
                className={`group p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 transition-all duration-300 flex flex-col justify-between shadow-xl backdrop-blur-sm hover:-translate-y-2 ${theme.borderHover}`}
              >
                <div>
                  {/* Category Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all ${theme.iconBg}`}>
                      {theme.icon}
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${theme.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors ${
                    lang === 'te' ? 'font-telugu' : 'font-sans'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className={`text-sm text-slate-300 leading-relaxed font-normal ${
                    lang === 'te' ? 'font-telugu' : 'font-sans'
                  }`}>
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Decorative Divider */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-slate-300">{lang === 'te' ? 'సమాజ సేవ' : 'Community Outreach'}</span>
                  <span className={`font-mono font-bold ${theme.numColor}`}>0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;
