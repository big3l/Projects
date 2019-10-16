import React from 'react';
import './App.css';
import Input from './input';

function App() {
  return (
    <div className="App">
      <h2>Control Component in React</h2>
      <form onSubmit={handleSubmit}>
        <Input />
        <button> Submit</button>
      </form>
    </div>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  alert("Submitted");
  console.log(e.target.todo.value);
}




export default App;
