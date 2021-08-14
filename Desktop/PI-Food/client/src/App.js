import './App.css';
import { Route } from 'react-router-dom'
import React from 'react';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Create from './components/Create/Create';
import Fav from './components/Fav/Fav';

function App() {

  return (
    <React.Fragment>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/detail/:id' component={Detail} />
      <Route exact path='/create' component={Create} />
      <Route exact path='/favorite' component={Fav} />
    </React.Fragment>
  );
}

export default App;
