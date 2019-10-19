import React from 'react';
import './styles/main.css';
import './styles/style.css';

import YksNav from './components/yks-nav';
import YksNavPoint from './components/yks-nav-point';
import YksPortrait from './components/yks-portrait';

function App() {
  return (
    <YksNav>
      <YksNavPoint title="Start">
        <div className="flex-column fx-center fill-page">
          <div id="title-container">
            <div className="flex-row fx-center">
              <h1 id="main-title">Yikes</h1>
            </div>
          </div>
        </div>
      </YksNavPoint>
      <YksNavPoint title="Fotos">
        <div className="flex fill-page">Fotos Page</div>
      </YksNavPoint>
      <YksNavPoint title="Bär Grillt">
        <div className="flex fill-page">Bär grillt Page</div>
      </YksNavPoint>
      <YksNavPoint title="Livestream">
        <div className="flex fill-page">Livestream Page</div>
      </YksNavPoint>
      <YksNavPoint title="Autoren">
        <div className="flex fx-center fill-page">
          <div className="flex fx-wrap full-width fx-space-evenly">
            <YksPortrait imageSrc="https://avatars0.githubusercontent.com/u/36076364?s=400&v=4">
              <div>Benny Schärer</div>
              <button className="yks-button">Mehr...</button>
            </YksPortrait>
            <YksPortrait imageSrc="https://avatars2.githubusercontent.com/u/31304747?s=400&v=4">
              <div>Sophia Menger</div>
              <button className="yks-button">Mehr...</button>
            </YksPortrait>
          </div>
        </div>
      </YksNavPoint>
    </YksNav>
  );
}

export default App;