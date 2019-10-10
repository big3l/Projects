import React, { Component } from 'react';
import './App.css';
import Persons from "./Persons/Persons"

class App extends Component {
  state = {
    persons: [
      { name: 'Abigail', job: 'Director', age: 38 },
      { name: 'Alex', job: 'Dancer', age: 37 }
    ]
  }

  changeContent = () => {
    alert('You clicked the button, now the persons will change');
    document.querySelector('body').style.background = 'lightgreen';
    this.setState({
      persons: [
        { name: 'Steven', job: 'Pole Dance', age: 48, class: 'vip' },
        { name: 'Lucy', job: 'Lumberjack', age: 12 }
      ]
    })
  }

  render() {
    const myStyle = {
      background: 'pink',
      border: '3px solid orange',
      padding: '10px',
      borderRadius: '40px',
      cursor: 'pointer',
      fontWeight: 'bold',
      color: 'orange'
    };

    return (
      <div className="App" onMouseDown={this.changeContent}>
        <Persons name="Mansour" job="Teacher" age="28" />
        <Persons name="Daniel" job="FrontEnd Dev" age="30" />
        <Persons name="Mahdia" job="Backend Dev" age="20" />
        <Persons name="Sebastian" job="FullStack Dev" age="40" />

        <div className='dark'>
          <button style={myStyle} onClick={this.changeContent}>Change Content</button>
        </div>

        <Persons name={this.state.persons[0].name} job={this.state.persons[0].job} age={this.state.persons[0].age} class={this.state.persons[0].class} />
        <Persons name={this.state.persons[1].name} job={this.state.persons[1].job} age={this.state.persons[1].age} />
      </div>
    );

    // return React.createElement('div',null,'h1','this is React'); 
    //the div is created but h1 is not

    // return React.createElement('div',{className:"App"},React.createElement('h1',null,'This is React App')); 
    //this h1 is now inside the div and the App className has been included

  }
}

export default App;
