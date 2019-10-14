import React, { Component } from 'react'
import Person from './person'
import './App.css'

export default class App extends Component {
  state = {
    persons: [
      { name: " Max", city: " Keil", job: " Baker" },
      { name: " Dave", city: " Putney", job: " Geezer" },
      { name: " Gaynor", city: " Rio De Janero", job: " Assistant" }
    ],
    country: "Germany",
    currency: "Euro"
  }

  changeData = () => {
    // alert(this.state.persons[1].name)
    this.setState({
      persons: [
        { name: " Peter", city: " London", job: " Teacher" },
        { name: " James", city: " Birmingham", job: " Salesman" },
        { name: " Debbie", city: " New Jersey", job: " Farmer" }
      ],
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is React Class Component</h1>
        <Person name=" Leonard" city=" Glocestershire" job=" Business" />
        <Person name={this.state.persons[0].name} city={this.state.persons[0].city} job={this.state.persons[0].job} />
        <Person name={this.state.persons[1].name} city={this.state.persons[1].city} job={this.state.persons[1].job} />
        <Person name={this.state.persons[2].name} city={this.state.persons[2].city} job={this.state.persons[2].job} >
        <button onClick = {this.changeData}>Change Data</button>
        </Person>
      </div>
    )
  }
}

