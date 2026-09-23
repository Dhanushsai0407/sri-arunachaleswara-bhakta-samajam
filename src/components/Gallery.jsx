import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LightboxModal from './LightboxModal';
import { Camera, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const galleryImages = [
    {
      src: '/images/gallery/gallery1.jpg',
      title: t.gallery.items[0].title,
      desc: t.gallery.items[0].desc,
    },
    {
      src: '/images/gallery/gallery2.jpg',
      title: t.gallery.items[1].title,
      desc: t.gallery.items[1].desc,
    },
    {
      src: '/images/gallery/gallery3.jpg',
      title: t.gallery.items[2].title,
      desc: t.gallery.items[2].desc,
    },
    {
      src: '/images/gallery/gallery4.jpg',
      title: t.gallery.items[3].title,
      desc: t.gallery.items[3].desc,
    },
    {
      src: '/images/gallery/gallery5.jpg',
      title: t.gallery.items[4].title,
      desc: t.gallery.items[4].desc,
    },
    {
      src: '/images/gallery/gallery6.jpg',
      title: t.gallery.items[5].title,
      desc: t.gallery.items[5].desc,
    },
  ];

  const handleNext = () => {
    setActiveLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setActiveLightboxIndex((prev) => (prev <= 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-500/[0.08] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm shadow-amber-500/15">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.gallery.headingBadge}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight ${
            lang === 'te' ? 'font-telugu' : 'font-sacred'
          }`}>
            {t.gallery.heading}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            {t.gallery.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Gallery Grid with Natural Vibrant Images & Golden Hover Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-400/80 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-all duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              </div>

              {/* Hover overlay with maximize icon and info */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
                <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2.5 rounded-full bg-slate-950/80 border border-amber-400 text-amber-300 backdrop-blur-sm shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className={`text-base sm:text-lg font-bold text-white leading-tight group-hover:text-amber-300 transition-colors ${
                    lang === 'te' ? 'font-telugu' : 'font-sans'
                  }`}>
                    {img.title}
                  </h3>
                  <p className="text-xs text-amber-200/80 mt-1 font-medium">
                    {img.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <LightboxModal
          images={galleryImages}
          activeIndex={activeLightboxIndex}
          onClose={() => setActiveLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};

export default Gallery;
