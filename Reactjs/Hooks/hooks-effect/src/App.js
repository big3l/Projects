//useState manages State from a function component
//useEffect is similar to componentDidMount and componentDidUpdate in React Lifecycle

import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${counter} times`;  // Update the document title using the browser API
  });

  return (
    <div className='App'>
      <p>You clicked {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>
        Click me
      </button>
    </div>
  );
}
