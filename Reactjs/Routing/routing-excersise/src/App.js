import React from 'react'
import './App.css';
import Navi from './Components/nav';
import Me from './Components/me';
import Hobbies from './Components/Hobbies';
import Contact from './Components/Contact';
import { BrowserRouter, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <main className='main-content-container col-lg-12 col-md-12 cold-sm-12'></main>

      </div>
      <BrowserRouter>
        <Navi />
      </BrowserRouter>
      <BrowserRouter>
        <Route path='/' component={Me} exact />
        <Route path='/me' component={Me} />
        <Route path='/hobbies' component={Hobbies} />
        <Route path='/contact' component={Contact} />
      </BrowserRouter>
    </div>

  )
}

