import React, { Component } from 'react'
import InputField from './Components/InputField'
import Images from './Components/Images'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      root: 'https://pixabay.com/api/',
      key: '13971331-8822b0edaceb38cd2067912c9',
      query: '',
      url: '',
      letSearch: false,
      loadImages: null
    }
  }

  saveQuery = (e) => {
    this.setState({ query: e.target.value, letSearch: false })
  }

  searchImages = () => {
    let words = this.state.query.split(" ");
    let newURL = this.state.root + '?key=' + this.state.key + '&per_page=100' + "&q=";
    words.forEach((words) => {
      newURL += words + '+'
      console.log(newURL)
    })
    this.setState({ url: newURL, letSearch: true, loadImages: null })
  }

  loadImage = () => {
    let newImages = <Images url={this.state.url} />
    this.setState({ loadImages: newImages, letSearch: false })
  }

  render() {
    if (this.state.letSearch) {
      this.loadImage()
    }
    return (
      <div className='App'>
        <InputField change={this.saveQuery} click={this.searchImages} />
        {this.state.loadImages}
      </div>
    )
  }
}
