import React from 'react';
import './reset.scss'

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import Money from './views/Money'
import NoMatch from './views/Nomatch'
import Tags from './views/Tags'
import Statistic from './views/Statistic'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/tag'>
          <Tags />
        </Route>

        <Route path='/money'>
          <Money />
        </Route>

        <Route path='/statistic'>
          <Statistic />
        </Route>
        <Redirect exact from="/" to="/money"/>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}



export default App;
