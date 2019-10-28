import React from 'react'
import './App.css';
import Navigation from './Components/Navigation';
import About from './Components/about';
import { BrowserRouter, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <main className='main-content-container col-lg-12 col-md-12 cold-sm-12'>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
          
          <BrowserRouter>
            <Route path='/about' component={About} />
          </BrowserRouter>
        </main>
      </div>
    </div>
  )
}

