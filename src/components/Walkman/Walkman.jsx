import React, { useState, useEffect, useRef } from 'react';
import './Walkman.css';
import { WalkmanImage, play, pause, next, prev, emptyWalkman } from '../../img';
import retroSongs from '../../assets/data.js'; // Ensure this contains the songs with their audio

const Walkman = ({ currentSongId }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null); 

  useEffect(() => {
    if (currentSongId) {
      const song = retroSongs.find((s) => s.id === currentSongId);
      setCurrentSong(song);
    }
  }, [currentSongId]);

  const onDrop = (e) => {
    e.preventDefault();
    const songId = e.dataTransfer.getData('songId'); 
    const song = retroSongs.find((s) => s.id === parseInt(songId)); 
    setCurrentSong(song); 
    setPlaying(true); 
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const nextTrack = () => {
    const currentIndex = retroSongs.findIndex((song) => song.id === currentSong.id);
    const nextSong = retroSongs[(currentIndex + 1) % retroSongs.length];
    setCurrentSong(nextSong);
  };

  const prevTrack = () => {
    const currentIndex = retroSongs.findIndex((song) => song.id === currentSong.id);
    const prevSong = retroSongs[(currentIndex - 1 + retroSongs.length) % retroSongs.length];
    setCurrentSong(prevSong);
  };

  const extractCassette = () => {
    setCurrentSong(null)
  }

  return (
    <div
      className="walkman"
      onDrop={onDrop} 
      onDragOver={onDragOver} 
    >
      <img src={currentSong ? WalkmanImage : emptyWalkman} alt="Walkman" className="walkman-image" />
      <div className="MusicName">
        <h1>{currentSong ? currentSong.title : 'Select a Song'}</h1>
      </div>

      {currentSong && (
        <audio
          ref={audioRef}
          src={currentSong.audio}  
          autoPlay  
          onEnded={() => setPlaying(false)}  
        />
      )}

      <div className="controls">
        <button className="control-btn" onClick={extractCassette}>
          🟥
        </button>
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
