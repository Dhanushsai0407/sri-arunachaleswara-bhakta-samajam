import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t, lang } = useLanguage();

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#president', label: t.nav.president },
    { href: '#activities', label: t.nav.activities },
    { href: '#music', label: t.nav.music },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t-2 border-amber-500/30 text-slate-300 py-16 relative z-10" aria-label="Website Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-6 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/30">
                <span className="text-base font-serif">ॐ</span>
              </div>
              <span className={`text-lg sm:text-xl font-extrabold text-white ${lang === 'te' ? 'font-telugu' : 'font-sacred'}`}>
                {t.footer.orgName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
              {lang === 'te'
                ? 'భక్తి, సేవ, ధర్మం మరియు సామాజిక ఐక్యతను ప్రోత్సహించే పవిత్ర సమాజం.'
                : 'Dedicated to preserving dharma, spiritual harmony, and selfless service.'}
            </p>

            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-amber-200/90 pt-2 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.footer.location} ({t.footer.addressShort})</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:9493377492" className="hover:text-amber-300 transition-colors font-mono font-bold">
                  {t.footer.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {t.footer.quickLinks}
            </h4>
            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs sm:text-sm text-slate-300 hover:text-amber-400 font-medium transition-colors ${
                    lang === 'te' ? 'font-telugu' : 'font-sans'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Language Switcher Col */}
          <div className="md:col-span-2 flex flex-col space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {lang === 'te' ? 'భాష' : 'Language'}
            </h4>
            <div className="pt-1">
              <LanguageToggle />
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Sacred Motto */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="text-slate-400">{t.footer.copyright}</p>
          <div className="flex items-center gap-2 text-amber-300 font-semibold">
            <span>{t.footer.designedFor}</span>
            <span>•</span>
            <span>హనుమాన్ జంక్షన్</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
