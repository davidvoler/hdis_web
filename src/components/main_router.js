import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from "./home/home";
import Dashboard from "./dashboard/dashboard";
import IconButtonBar from './layout/bar';
import BottomNavigationExampleSimple  from './layout/navigation';
      


export const MainRouter = () => (
  <Router>
    <div>
      <IconButtonBar />
      <Route exact path="/" component={ Home } />
      <Route exact path="/dashboard" component={ Dashboard } />
      <BottomNavigationExampleSimple />
    </div>
  </Router>
)


