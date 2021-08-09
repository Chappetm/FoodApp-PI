import './App.css';
import { Route } from 'react-router-dom'
import React from 'react';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Create from './components/Create/Create';

function App() {

  return (
    <React.Fragment>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/detail/:id' component={Detail} />
      <Route exact path='/create' component={Create} />
    </React.Fragment>
  );
}

export default App;
