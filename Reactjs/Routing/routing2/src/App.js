import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Error from './components/error';
import Navigator from './components/navigator';


export default function App() {
  return (
    <BrowserRouter>
    <Navigator/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
