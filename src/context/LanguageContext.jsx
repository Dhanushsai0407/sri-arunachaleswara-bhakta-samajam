import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('sab_lang');
      return saved === 'en' ? 'en' : 'te'; // Telugu-first default
    } catch {
      return 'te';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sab_lang', lang);
      document.documentElement.lang = lang;
    } catch (e) {
      console.warn('Could not persist language preference:', e);
    }
  }, [lang]);

  const toggleLang = () => {
    setLangState((prev) => (prev === 'te' ? 'en' : 'te'));
  };

  const setLang = (newLang) => {
    if (newLang === 'te' || newLang === 'en') {
      setLangState(newLang);
    }
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
