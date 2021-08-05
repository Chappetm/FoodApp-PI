import './App.css';
import { Route } from 'react-router-dom'
import React from 'react';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home';

function App() {
  return (
    <React.Fragment>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route exact path='/home'>
        <Home />
      </Route>
    </React.Fragment>
  );
}

export default App;
