import React, { Component } from 'react'
import './App.css';
import TitleHeader from './titleHeader'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: true,
      value: 'default title',
      data: [
        { id: 1, title: 'First Item' },
        { id: 2, title: 'Second Item' },
        { id: 3, title: 'Third Item' }
      ]
    }
  }

  changeTitle = (title) => {
    this.setState({ value: title });
  }

  showHandler() {
    // this.setState({show:!this.state.show})
    this.setState((prevState) => ({ show: !prevState.show }))
  }

  render() {
    const list = this.state.data.map((item) => {
      return <li key={item.id} onClick={() => this.changeTitle(item.title)}>{item.title}</li>
    })

    return (
      <div className="wrapper">
        {this.state.show ? <TitleHeader newTitle={this.state.value} /> : null}
        <ul className="list">
          {list}
        </ul>
        <button onClick={() => this.showHandler()} className='btn'>Show and hide</button>
      </div>
    )
  }
}

