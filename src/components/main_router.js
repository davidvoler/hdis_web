import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from "./home/home";
import Dashboard from "./dashboard/dashboard";
import Editor from "./editor/editor";
import CreateLesson from "./editor/create_lesson";
import EditLesson from "./editor/edit_lesson";
import IconButtonBar from './layout/bar';
import BottomNavigationExampleSimple  from './layout/navigation';
import { createLesson } from '../actions/editor';
      


export const MainRouter = () => (
  <Router>
    <div>
      <IconButtonBar />
      <Route exact path="/" component={ Home } />
      <Route exact path="/dashboard" component={ Dashboard } />
      <Route exact path="/editor" component={ Editor } />
      <Route exact path="/create_lesson" component={ CreateLesson } />
      <Route exact path="/edit_lesson" component={ EditLesson } />
      <BottomNavigationExampleSimple />
    </div>
  </Router>
)


