import React from 'react';
import './styles/main.css';
import './styles/style.css';

import YksNav from './components/yks-nav';
import YksNavPoint from './components/yks-nav-point';

function App() {
  return (
    <YksNav>
      <YksNavPoint renderNavPoint={false}>
        <div className="flex-column fx-center fill-point-container">
          <div id="title-container">
            <div className="flex-row fx-center">
              <h1 id="main-title">Yikes</h1>
            </div>
          </div>
        </div>
      </YksNavPoint>
      <YksNavPoint title="title2">
        <div>test2</div>
      </YksNavPoint>
      <YksNavPoint title="title3">
        <div>alskdjf</div>
      </YksNavPoint>
      <YksNavPoint title="title6">
        <div>alskdjf</div>
      </YksNavPoint>
    </YksNav>
  );
}

export default App;