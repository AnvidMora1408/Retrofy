import React, { useState } from 'react';
import { Casseette } from '../../img';
import retroSongs from '../../assets/data.js';
import { Walkman } from '../../components';
import './Songs.css';

const Songs = ({ search }) => {
  const [selectedSongId, setSelectedSongId] = useState(null);

  const filteredSongs = retroSongs.filter((song) => {
    return (
      song.title.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase())
    );
  });

  // Handle dragging the song
  const handleDragStart = (e, song) => {
    e.dataTransfer.setData('songId', song.id); 
  };

  return (
    <>
      <div className="songs-container">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <div
              key={song.id}
              className="song-item"
              draggable
              onDragStart={(e) => handleDragStart(e, song)} 
            >
              <img src={song.image} alt={song.title} className="song-image" />
              <div className="song-details">
                <h3 className="song-title">{song.title}</h3>
                <p className="song-artist">{song.artist}</p>
              </div>
              <img
                src={Casseette}
                alt="Cassette"
                className="Casseette"
              />
            </div>
          ))
        ) : (
          <p>No songs found</p>
        )}
      </div>
      <Walkman currentSongId={selectedSongId} />
    </>
  );
};

export default Songs;
