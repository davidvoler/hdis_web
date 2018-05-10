import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import { MainRouter }  from './components/main_router';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <MainRouter />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
