import React from 'react';
import './reset.scss'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Nav from './components/Nav';


const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
    
`

const Main=styled.div`
    flex-grow:1;
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tag">
              <Tag />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistic">
              <Statistic />
            </Route>
            <Redirect exact from='/' to='/money'></Redirect>
            <Route path="*">
              <Nomatch />
            </Route>
          </Switch>
        </Main>
       <Nav />
      </Wrapper>
    </Router>
  );
}

function Tag() {
  return <h2>标签页</h2>;
}

function Money() {
  return <h2>记账页</h2>;
}

function Statistic() {
  return <h2>统计页</h2>;
}

function Nomatch(){
  return <h2>找不到该网页</h2>;
}


export default App;
