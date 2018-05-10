import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import AppBarExampleIconButton from './components/layout/bar'
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <AppBarExampleIconButton />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
