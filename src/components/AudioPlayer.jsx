import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Note: Most browsers block autoplay without user interaction.
    // The state is just restored, user might still need to click if browser blocks it.
    const savedAudioState = localStorage.getItem('hcm_audio_playing');
    if (savedAudioState === 'true') {
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.play().catch(e => {
          console.log('Autoplay prevented by browser', e);
          setIsPlaying(false);
        });
      }
    }
  }, []);

  const toggleAudio = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    localStorage.setItem('hcm_audio_playing', newState);
    
    if (newState) {
      audioRef.current.play().catch(() => setHasError(true));
    } else {
      audioRef.current.pause();
    }
  };

  if (hasError) return null;

  return (
    <div className="audio-player-widget" style={{position: 'fixed', bottom: '20px', left: '20px', zIndex: 100}}>
      <audio ref={audioRef} loop onError={() => setHasError(true)}>
        <source src="/audio/background.mp3" type="audio/mpeg" />
      </audio>
      
      <button 
        onClick={toggleAudio}
        className="btn-audio"
        style={{
          width: '50px', height: '50px', 
          borderRadius: '50%', 
          background: isPlaying ? 'var(--red-primary)' : 'var(--ink-light)', 
          color: 'var(--white)',
          border: '2px solid var(--gold-dark)',
          boxShadow: 'var(--shadow-lg)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem',
          transition: 'all 0.3s ease'
        }}
        title={isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
      >
        {isPlaying ? '🎵' : '🔇'}
      </button>
    </div>
  );
}
