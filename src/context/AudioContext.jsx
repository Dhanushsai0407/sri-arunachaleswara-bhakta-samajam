import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { songsData } from '../data/songs';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(songsData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserStartedPlayback, setHasUserStartedPlayback] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(272);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [activePlaylist, setActivePlaylist] = useState(songsData);

  const audioRef = useRef(null);
  const synthAudioCtxRef = useRef(null);
  const synthOscRef = useRef(null);
  const synthGainRef = useRef(null);

  // Initialize Audio element
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(Math.floor(audio.duration));
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      // Auto play next in active playlist
      handleNext();
    };

    const handleError = (e) => {
      console.warn('Audio playback notice:', e);
      // Gracefully maintain simulated timeline for uninterrupted devotional experience
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      stopSacredSynth();
    };
  }, []);

  // Web Audio Meditative Harmonics
  const startSacredSynth = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!synthAudioCtxRef.current) {
        synthAudioCtxRef.current = new AudioCtx();
      }
      if (synthAudioCtxRef.current.state === 'suspended') {
        synthAudioCtxRef.current.resume();
      }

      stopSacredSynth();

      const ctx = synthAudioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Sacred Om frequency: 136.1 Hz
      osc.type = 'sine';
      osc.frequency.setValueAtTime(136.1, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.06 * volume, ctx.currentTime + 1.5);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      synthOscRef.current = osc;
      synthGainRef.current = gain;
    } catch (err) {
      console.warn('Web Audio synthesis notice:', err);
    }
  };

  const stopSacredSynth = () => {
    try {
      if (synthOscRef.current) {
        synthOscRef.current.stop();
        synthOscRef.current.disconnect();
        synthOscRef.current = null;
      }
    } catch {
      // Ignore cleanup error
    }
  };

  // Sync volume with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
    if (synthGainRef.current && synthAudioCtxRef.current) {
      synthGainRef.current.gain.setValueAtTime(
        isMuted ? 0 : 0.06 * volume,
        synthAudioCtxRef.current.currentTime
      );
    }
  }, [volume, isMuted]);

  const playSong = (song, playlist = null) => {
    setHasUserStartedPlayback(true);
    if (playlist) {
      setActivePlaylist(playlist);
    }
    setCurrentSong(song);
    setDuration(song.durationSec || 240);
    setCurrentTime(0);

    if (audioRef.current) {
      audioRef.current.src = song.audio;
      audioRef.current.currentTime = 0;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // In case browser autoplay policy or mock file, start ambient devotional tone
          startSacredSynth();
          setIsPlaying(true);
        });
    }
  };

  const togglePlay = () => {
    setHasUserStartedPlayback(true);
    if (!currentSong) {
      if (activePlaylist.length > 0) {
        playSong(activePlaylist[0]);
      }
      return;
    }

    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      stopSacredSynth();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        if (!audioRef.current.src || audioRef.current.src === '') {
          audioRef.current.src = currentSong.audio;
        }
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            startSacredSynth();
            setIsPlaying(true);
          });
      }
    }
  };

  const pause = () => {
    if (audioRef.current) audioRef.current.pause();
    stopSacredSynth();
    setIsPlaying(false);
  };

  const seek = (timeInSec) => {
    setCurrentTime(timeInSec);
    if (audioRef.current) {
      audioRef.current.currentTime = timeInSec;
    }
  };

  const changeVolume = (newVol) => {
    const val = Math.max(0, Math.min(1, newVol));
    setVolume(val);
    if (val > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleNext = () => {
    const list = activePlaylist.length > 0 ? activePlaylist : songsData;
    const currentIndex = list.findIndex((s) => s.id === currentSong?.id);
    const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % list.length;
    playSong(list[nextIndex], list);
  };

  const handlePrev = () => {
    const list = activePlaylist.length > 0 ? activePlaylist : songsData;
    const currentIndex = list.findIndex((s) => s.id === currentSong?.id);
    const prevIndex = currentIndex <= 0 ? list.length - 1 : currentIndex - 1;
    playSong(list[prevIndex], list);
  };

  const formatTime = (secs) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const minutes = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${minutes}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  return (
    <AudioContext.Provider
      value={{
        currentSong,
        isPlaying,
        hasUserStartedPlayback,
        currentTime,
        duration,
        volume,
        isMuted,
        activePlaylist,
        setActivePlaylist,
        playSong,
        togglePlay,
        pause,
        seek,
        changeVolume,
        toggleMute,
        handleNext,
        handlePrev,
        formatTime,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
