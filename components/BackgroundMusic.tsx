
import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';

const BackgroundMusic: React.FC = () => {
  const { content } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (content.settings.musicEnabled && isPlaying) {
        audioRef.current.play().catch(() => {
          // Autoplay blocked
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, content.settings.musicEnabled, content.settings.backgroundMusicUrl]);

  if (!content.settings.musicEnabled) return null;

  return (
    <div className="fixed bottom-24 left-6 z-[40] md:bottom-10">
      <audio 
        ref={audioRef} 
        src={content.settings.backgroundMusicUrl} 
        loop 
      />
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl transition-all hover:scale-110 active:scale-95 glass border-2 ${isPlaying ? 'bg-blue-500 text-white border-blue-400 animate-pulse' : 'bg-white text-blue-600 border-blue-100'}`}
        title={isPlaying ? "השתק מוזיקה" : "נגן מוזיקת רקע"}
      >
        {isPlaying ? '🎵' : '🔇'}
      </button>
    </div>
  );
};

export default BackgroundMusic;
