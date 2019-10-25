import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './styles/main.css';
import './styles/style.css';

import YksMainPage from './components/yks-main-page';
import YksAutorPage from './components/yks-autor-page';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={YksMainPage}/>
        <Route path="/autor" component={YksAutorPage}/>
      </div>
    </Router>
  );
}

export default App;