import React from 'react';
import { Casseette } from '../../img';
import retroSongs from '../../assets/data.js';
import './Songs.css';

const Songs = ({ search, onDragStart }) => {
  const filteredSongs = retroSongs.filter((song) => {
    return (
      song.title.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="songs-container">
      {filteredSongs.length > 0 ? (
        filteredSongs.map((song) => (
          <div
            key={song.id}
            className="song-item"
            draggable="true"
            onDragStart={(e) => onDragStart(e, song)} // Inicia el arrastre y pasa la canción
          >
            <img src={song.image} alt={song.title} className="song-image" />
            <div className="song-details">
              <h3 className="song-title">{song.title}</h3>
              <p className="song-artist">{song.artist}</p>
            </div>
            <img src={Casseette} alt="" className="Casseette" />
          </div>
        ))
      ) : (
        <p>No songs found</p>
      )}
    </div>
  );
};

export default Songs;
