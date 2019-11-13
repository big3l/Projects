// with Hooks there is no need to use render and write less code

import React, { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const [food, setFood] = useState(['Banana, Steak, Beans, Crisps, Biscuits'])

  const [color, setColor] = useState('lightgreen')
  document.body.style.background = color;


  return (
    <div className="App">
      <p> You Clicked {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>Click Me</button>

      <p> Your favourate food is {food}</p>
      <button onClick={() => setFood('')}>Click Me</button>

      <div>
        <button onClick={() => setColor('red')}> Red</button>
        <button onClick={() => setColor('yellow')}>Yellow</button>
        <button onClick={() => setColor('blue')}> Blue</button>
      </div>

    </div>
  );
}
export default App;



// Same result as above but using normal class with render..
// import React, { Component } from 'react'
// import './App.css'

// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       counter: 0
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <p>You Clicked {this.state.counter} times
//           <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
//             Click Me </button>
//         </p>
//       </div>
//     )
//   }
// }
