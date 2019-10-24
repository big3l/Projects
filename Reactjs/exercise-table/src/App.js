import React, { Component } from 'react';
import Header from './Component/header';
import SearchResult from './Component/searchResult';
import About from './Component/about';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      lastSearchTerm: '',
      currentPage: 'Search'
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

  navigate = (page) => {
    this.setState({
      currentPage: (page)
    })
  }


  render() {
    // console.log(this.state)
    return (
      <div className="App">

        <Header navigationHandler={this.navigate} ></Header>

        {this.state.currentPage === 'About' && <About />}

        {this.state.currentPage === 'Search' &&
          <React.Fragment>
            <input onChange={this.search} type='text' placeholder='Enter Search Term' value={this.state.searchTerm}></input>

            <button onClick={this.click}>Search</button>

            <SearchResult searchFor={this.state.lastSearchTerm} />
          </React.Fragment>
        }
      </div>
    )
  }
}

