import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Screens/Home.js';
import More from './Screens/More.js';
import Impressum from './Screens/Impressum.js';
import Research from './Screens/Research.js';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/more'>
            <More />
          </Route>
          <Route path='/impressum'>
            <Impressum />
          </Route>
          <Route path='/research'>
            <Research />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
