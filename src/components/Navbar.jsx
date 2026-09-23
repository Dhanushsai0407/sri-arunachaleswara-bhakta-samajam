import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const { t, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-amber-500/30 shadow-2xl shadow-black/80 py-3'
          : 'bg-gradient-to-b from-slate-950/95 via-slate-950/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-500 p-0.5 shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-amber-400 group-hover:text-yellow-300 transition-colors">
                {/* Sacred Trishul Vector Icon */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20" />
                  <path d="M7 6v6a5 5 0 0 0 10 0V6" />
                  <circle cx="12" cy="4" r="1.2" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <span className={`text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors leading-tight ${
                lang === 'te' ? 'font-telugu' : 'font-sacred'
              }`}>
                {t.nav.orgName}
              </span>
              <span className="text-[11px] text-amber-400/90 font-semibold tracking-wider uppercase">
                {lang === 'te' ? 'హనుమాన్ జంక్షన్ • ఆంధ్రప్రదేశ్' : 'Hanuman Junction • Andhra Pradesh'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm text-slate-200 hover:text-amber-400 font-medium transition-colors duration-200 relative py-1 hover:border-b-2 hover:border-amber-400 ${
                  lang === 'te' ? 'font-telugu' : 'font-sans'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle />
            <a
              href="tel:9493377492"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-orange-500 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all"
              title="Call 9493377492"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>9493377492</span>
            </a>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-300 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-amber-500/40 px-4 pt-4 pb-6 mt-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-amber-300 hover:bg-slate-900 border border-transparent hover:border-amber-500/30 transition-all ${
                  lang === 'te' ? 'font-telugu' : 'font-sans'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-3 border-t border-slate-800">
              <a
                href="tel:9493377492"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold shadow-lg shadow-orange-500/30 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{t.nav.callNow}: 9493377492</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
