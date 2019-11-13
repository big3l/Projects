import React, { Component } from 'react'
import './App.css';

const Url = 'http://jsonplaceholder.typicode.com/users'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [{ name: 'No name' }],
      index: 0
    }
  }

  componentDidMount() {
    fetch(Url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json
        })
      })
  }

  // function myStopFunction() {
  // clearInterval(this.nextEntry);
  // }

  nextEntry() {
    this.setState({
      index: ++this.state.index,
      setInterval({ this.state.index
    }, 2000)
  })
}

render() {
  return (
    <div>
      {this.state.users[this.state.index].name}
      <button onClick={this.nextEntry.bind(this)}>Next Entry</button>
    </div>
  )
}
}


