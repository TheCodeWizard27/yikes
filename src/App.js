import React from 'react';
import './styles/main.css';

import YksNav from './components/yks-nav';
import YksNavPoint from './components/yks-nav-point';

function App() {
  return (
    <YksNav>
      <YksNavPoint title="title1">
        Test 1
      </YksNavPoint>
      <YksNavPoint title="title2">
        Test 2
      </YksNavPoint>
      <YksNavPoint title="title3">
        Test 3
      </YksNavPoint>
    </YksNav>
  );
}

export default App;
