import React from 'react';

import Content from './components/Content'
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom'

import {
  Home,
  React_01,
  React_02
} from './pages/index'

function App() {
  
  return (
    <div className="App">
      
      {/* <Content /> */}
      <Switch >
        <Route exact path='/' component={Home} />
        {/* <Route path='/react_01' component={React_01_ticTacToe}/>
        <Route path='/react_02' component={React_02_HOC}/> */}
      </Switch>
    </div>
  );
}

export default App;
