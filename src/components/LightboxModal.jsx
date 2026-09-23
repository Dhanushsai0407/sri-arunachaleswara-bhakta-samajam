import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LightboxModal = ({ images, activeIndex, onClose, onNext, onPrev }) => {
  const { lang, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (activeIndex === null || !images[activeIndex]) return null;

  const currentImg = images[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Image Preview"
    >
      {/* Top action bar: Close and Counter */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
        <div className="px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/50 text-xs font-mono font-bold text-amber-300 shadow-md">
          {activeIndex + 1} / {images.length}
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-slate-900 border border-amber-500/50 text-amber-300 hover:text-white hover:bg-slate-800 transition-colors shadow-md"
          aria-label={t.gallery.close}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-slate-900/90 border border-amber-500/50 text-amber-300 hover:text-white hover:bg-slate-800 transition-all z-20 shadow-xl shadow-black/80"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image Preview and Caption */}
      <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center z-10">
        <img
          src={currentImg.src}
          alt={currentImg.title}
          className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl border-2 border-amber-500/40 shadow-2xl shadow-amber-500/20"
        />

        <div className="mt-4 text-center max-w-lg">
          <h3 className={`text-base sm:text-lg font-bold text-amber-300 ${lang === 'te' ? 'font-telugu' : 'font-sans'}`}>
            {currentImg.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {currentImg.desc}
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-slate-900/90 border border-amber-500/50 text-amber-300 hover:text-white hover:bg-slate-800 transition-all z-20 shadow-xl shadow-black/80"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default LightboxModal;
