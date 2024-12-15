import { useState } from 'react'
import { Walkman, Songs } from './components'
import { IconSearc, IconDiscord, IconGitHub, IconInstagram } from './img'
import './App.css'

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="body">
      <div className="header">
        <div>
          <h1>Home Retrofy Favorites</h1>
        </div>
      </div>
      <div className="main">
        <Songs search={search} />
        
      </div>
      <div className="footer">
        <div className="search">
          <div className="search-container">
            <img
              src={IconSearc}
              alt="Pixelated magnifying glass"
              className="search-icon"
            />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
        <div className="smedia">
          <a href="https://www.instagram.com/andres_14agst/" target="_blank" rel="noopener noreferrer">
            <img src={IconInstagram} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <img src={IconDiscord} alt="Discord" className="social-icon" />
          </a>
          <a href="https://github.com/AnvidMora1408" target="_blank" rel="noopener noreferrer">
            <img src={IconGitHub} alt="GitHub" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;



