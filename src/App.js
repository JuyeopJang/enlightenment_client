import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import SideNav from './components/SideNav';
import Main from './pages/Main';
import Map from './pages/Map';
import News from './pages/News';
import Opinions from './pages/Opinions';
import Promise from './pages/Promise';
import { useDispatch } from 'react-redux'
import { loadElections } from './actions/index'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:5000/map/elections')
    .then(res => res.json())
    .then(elections => {        
      dispatch(loadElections(elections.elections))
    })
  }, []);
  return (
    <div>
    <HeaderNav />
    <SideNav />
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/map" component={Map}/>
        <Route path="/news" component={News}/>
        <Route path="/opinions" component={Opinions}/>
        <Route path="/promise" component={Promise}/>
      </Switch>
    </Router>
    </div>
  );
};

export default App;