import React, { Component } from 'react';
import './App.css';
import A from './Components/A'
import B from './Components/B'
import C from './Components/C'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Redux Demo</h1>
        <A />
        <B />
        <C />
      </div>
    );
  }
}

export default App;
