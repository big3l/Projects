import React from 'react';
import Person from './person'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React - (Props) Children</h1>
      <Person name="Abi" city="Hamburg" job="Being Awesome" />
      <Person class= "blue" name="Justin" city="Southampton" job="Commercial Finance" />
      <Person name="Neil" city="Titchfield" job="Retired" />
      <Person class= "blue" name="Daniel" city="Hamburg" job="Web Dev Student">
        <h2>My name is Daniel and my job is Web Dev Student</h2>
        <h4>I live in Hamburg</h4>
        <div>I am also a child of "Person"</div></Person>
    </div>
  );
}

export default App;
