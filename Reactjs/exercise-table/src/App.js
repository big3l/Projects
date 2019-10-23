import React, { Component } from 'react';
import Header from './Component/header';
import SearchResult from './Component/searchResult';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      lastSearchTerm: ''
    }
  }

  search = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  click = (e) => {
    this.setState({
      lastSearchTerm: this.state.searchTerm
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">

        <Header></Header>

        <input onChange={this.search} type='text' placeholder='Enter Search Term'></input>

        <button onClick={this.click}>Search</button>

        <SearchResult searchFor = {this.state.lastSearchTerm}></SearchResult>

      </div>
    )
  }
}

