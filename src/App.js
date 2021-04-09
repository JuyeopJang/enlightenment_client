import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
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
    fetch('http://ec2-3-34-52-239.ap-northeast-2.compute.amazonaws.com:5000/map/elections')
    .then(res => res.json())
    .then(elections => {     
      dispatch(loadElections(elections.elections))
    })
  }, []);
  return (
    <div className='body'>
      <div className='wrapper'>
        <Router>
          <HeaderNav />
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/map" component={Map}/>
            <Route path="/news" component={News}/>
            <Route path="/opinion" component={Opinions}/>
            <Route path="/promise" component={Promise}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;