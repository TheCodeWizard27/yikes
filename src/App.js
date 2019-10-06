import React from 'react';
import './styles/main.css';

import YksNav from './components/yks-nav';
import YksNavPoint from './components/yks-nav-point';

function App() {
  return (
    <YksNav>
      <YksNavPoint title="title1">
        <div>asdf</div>
      </YksNavPoint>
      <YksNavPoint title="title2">
        <div>test2</div>
      </YksNavPoint>
      <YksNavPoint title="title3">
        <div>alskdjf</div>
      </YksNavPoint>
    </YksNav>
  );
}

export default App;
