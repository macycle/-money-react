import React from 'react';
import './reset.scss'
import {Tag} from './views/Tag'
import Money from './views/Money'
import NoMatch from './views/Nomatch'
import Tags from './views/Tags'
import Statistic from './views/Statistic'

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";





function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/tags'>
          <Tags />
        </Route>

        <Route exact path='/tags/:id'>
          <Tag />
        </Route>

        <Route exact path='/money'>
          <Money />
        </Route>

        <Route exact path='/statistic'>
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
