import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const { t, lang } = useLanguage();

  const phoneNum = "9493377492";
  const whatsappUrl = "https://wa.me/919493377492";
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Sivaji+Colony+Harijanawada+Hanuman+Junction+Bapulapadu+Andhra+Pradesh";

  return (
    <section id="contact" className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/[0.08] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm shadow-amber-500/15">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.contact.headingBadge}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight ${
            lang === 'te' ? 'font-telugu' : 'font-sacred'
          }`}>
            {t.contact.heading}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Cards Grid with Colorful Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card 1: Phone & Instant Call / WhatsApp Actions */}
          <div className="p-8 rounded-3xl bg-slate-900/80 border-2 border-amber-500/40 shadow-2xl shadow-amber-500/10 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30 text-slate-950 font-bold">
                <Phone className="w-7 h-7 fill-current" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {t.contact.phoneLabel}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-amber-300 mt-1 mb-2 font-mono tracking-tight drop-shadow-sm">
                {phoneNum}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {t.contact.directCallDesc}
              </p>
            </div>

            {/* Action Buttons: Saffron Call & WhatsApp Vibrant Green */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              {/* Call button */}
              <a
                href={`tel:${phoneNum}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 font-extrabold text-sm hover:from-yellow-400 hover:to-orange-500 transition-all shadow-lg shadow-orange-500/30 active:scale-95"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{t.contact.callBtn}</span>
              </a>

              {/* WhatsApp button with Authentic Vibrant Green */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm transition-all shadow-lg shadow-[#25D366]/30 active:scale-95"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.491 1.196.534 1.284.043.088.072.19.014.305-.058.115-.087.19-.173.289l-.26.303c-.087.088-.177.185-.077.356.101.173.447.737.96 1.194.66.589 1.217.771 1.39.858.173.086.274.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.435 5.176L2 22l4.981-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                </svg>
                <span>{t.contact.whatsappBtn}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Physical Address & Google Maps Direction */}
          <div className="p-8 rounded-3xl bg-slate-900/80 border-2 border-amber-500/40 shadow-2xl shadow-amber-500/10 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-sky-500/30 text-white font-bold">
                <MapPin className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {t.contact.addressLabel}
              </span>
              <p className={`text-base sm:text-lg font-medium text-slate-100 mt-2 leading-relaxed ${
                lang === 'te' ? 'font-telugu' : 'font-sans'
              }`}>
                {t.contact.address}
              </p>
            </div>

            {/* Map Action Button in Celestial Blue Gradient */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-sm transition-all shadow-lg shadow-indigo-600/30 active:scale-95"
              >
                <MapPin className="w-4 h-4" />
                <span>{t.contact.mapBtn}</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
