import React, { useState, useRef } from 'react';
import './Walkman.css';
import { WalkmanImage, play, pause, next, prev } from '../../img';
import retroSongs from '../../assets/data.js';  // Asegúrate de que este archivo contenga las canciones con su propiedad audioSrc

const Walkman = () => {
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null); // Referencia al elemento <audio>

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const nextTrack = () => {
    const currentIndex = retroSongs.findIndex(song => song.id === currentSong.id);
    const nextSong = retroSongs[(currentIndex + 1) % retroSongs.length];
    setCurrentSong(nextSong);
  };

  const prevTrack = () => {
    const currentIndex = retroSongs.findIndex(song => song.id === currentSong.id);
    const prevSong = retroSongs[(currentIndex - 1 + retroSongs.length) % retroSongs.length];
    setCurrentSong(prevSong);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const song = JSON.parse(e.dataTransfer.getData('song'));
    setCurrentSong(song);
    setPlaying(true);  // Reproducir la canción automáticamente
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="walkman" onDrop={onDrop} onDragOver={onDragOver}>
      <img src={WalkmanImage} alt="Walkman" className="walkman-image" />
      <div className="MusicName">
        <h1>{currentSong ? currentSong.title : 'Select a Song'}</h1>
        <p>{currentSong ? currentSong.artist : ''}</p>
      </div>

      {/* Reproductor de audio */}
      {currentSong && (
        <audio ref={audioRef} src={currentSong.audioSrc} onEnded={() => setPlaying(false)} />
      )}

      <div className="controls">
        <button className="control-btn" onClick={prevTrack}>
          <img src={prev} alt="Previous" />
        </button>
        <button className="control-btn" onClick={togglePlay}>
          <img src={playing ? pause : play} alt="Play/Pause" />
        </button>
        <button className="control-btn" onClick={nextTrack}>
          <img src={next} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Walkman;
