import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(info) {
  return (
    <div className="App">
      <h1>This is the React App</h1>
      <p>{info.name}</p>
      <h2>{info.city}</h2>
      <h3>{info.jobtitle}</h3>
    </div>
  );
}

function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p> Job: {props.job}</p>
      <p> Age: {Math.floor(Math.random() * (60 - 20 + 1) + 20)} </p>  
      <p> Age: {parseInt(Math.random() * (60 - 20 + 1) + 20)} </p>
      {/* Math.random() * (max - min + 1) + min */}
    </div>
  );
}


var app = (
  <div className="row">
    <Person name="William" job="Java Developer" />
    <Person name="Oliver" job="Frontend Dev" />
    <Person name="Neil" job="Retired Dev" />
  </div>
);

export { Person, app };
export default App;

