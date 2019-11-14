import React from 'react';
import './App.css';
import Hangman from './Components/Hangman';

export default function App() {
  let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


  const buttonValues = (e) => {
    console.log(e.target.value)
  }

  let letters = abc.map((item) => {
    return <input className='btn' type={'button'} key={item}
      value={item} onClick={(e) => buttonValues(e)} />
  })

  let word = 'javascript';

  let guessed_letters = ['a', 'b', 'c']
  function Compare() {
    let guessArray = word.split('').map((letter) => {
      if (guessed_letters.includes(letter)) {
        return letter
      } else {
        return ('_')
      }
    })
    console.log(guessArray)
  }

  return (
    <div className="App" >
      <h1>Hang-Man Game</h1>
      <Hangman />
      {letters}
      {Compare()}

    </div>
  );

}


