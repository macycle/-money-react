import React from 'react';
import './reset.scss'
import Nav from './components/Nav';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Money from './views/Money'
import NoMatch from './views/Nomatch'
import Tag from './views/Tag'
import Statistic from './views/Statistic'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/tag'>
          <Tag />
        </Route>

        <Route path='/money'>
          <Money />
        </Route>

        <Route path='/statistic'>
          <Statistic />
        </Route>

        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}



export default App;
