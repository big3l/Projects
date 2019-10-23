import React, { Component } from 'react';
import './App.css';
import Home from './Components/home';
import About from './Components/about';
import Dashboard from './Components/dash';
import Topics from './Components/topics';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
            <ul >
              <li>
                <Link to='/Home'>Home</Link>
              </li>
              <li>
                <Link to='/About'>About</Link>
              </li>
              <li>
                <Link to='/Dashboard'>Dashboard</Link>
              </li>
              <li className="dropdown" >
                <Link  to='/Topics' className="dropbtn">Topics </Link>
              </li>
            </ul>
        
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Dashboard">
              <Dashboard />
            </Route>
            <Route path="/Topics">
              <Topics />
            </Route>
          </Switch>
        </div>
      </Router >
    )
  }
}



