import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import SplashCarousel from './SplashCarousel';
import HotPicks from './HotPicks';
import './App.css';

function App(){
  return (
    <div className="contentContainer">
      <NavBar />
      <div className="contentMain">
        <Switch>
          <Route exact path='/' component={SplashCarousel} />
          <Route path='/hotpicks' component={HotPicks} />
        </Switch>
      </div>

      <div className="test"></div>
    </div>
  );
}

export default App;