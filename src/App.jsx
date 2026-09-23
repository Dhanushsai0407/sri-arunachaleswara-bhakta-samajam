import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AudioProvider } from './context/AudioContext';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import President from './components/President';
import Activities from './components/Activities';
import DevotionalMusic from './components/DevotionalMusic';
import ShivaSacred from './components/ShivaSacred';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MusicPlayerBar from './components/MusicPlayerBar';

function AppContent() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-100 flex flex-col selection:bg-zinc-200 selection:text-black">
      {/* Background Sacred Ash / Smoke Floating Particles */}
      <ParticleCanvas />

      {/* Main Sticky Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1" id="main-content">
        <Hero />
        <About />
        <President />
        <Activities />
        <DevotionalMusic />
        <ShivaSacred />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Devotional Audio Player Bar */}
      <MusicPlayerBar />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AudioProvider>
        <AppContent />
      </AudioProvider>
    </LanguageProvider>
  );
}

export default App;
