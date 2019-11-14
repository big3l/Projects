import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shipInfo: []
    }
  }

  componentDidMount() {
    let initialShipInfos = [];
    fetch('https://swapi.co/api/starships/')
      .then(res => res.json())
      .then(data => {
        initialShipInfos = data.results;
        console.log('Star Wars data - initialShipInfos :' ,initialShipInfos)
        this.setState({
          shipInfo: initialShipInfos
        })

      })
  }

  render() {

    let allData = this.state.shipInfo.map((item) => {
      return (<div className='card card-1' key={item.id}>
        <p>Ship Name: {item.name} </p>
        <p>Ship Model: {item.model} </p>
        <p>Ship Class: {item.starship_class} </p>
        <p>Ship Manufacturer: {item.manufacturer} </p>
      </div>
      )
    })

    return (
      <div className='App'>
        <h1>Star Wars Data</h1>
        <ul>{allData}</ul>
      </div>
    )
  }
}
