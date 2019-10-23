import React, { Component } from 'react'
import './App.css'
import InputField from './Components/inputField'
import Videos from './Components/videos'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      root: 'https://pixabay.com/api/videos',
      key: '13971331-8822b0edaceb38cd2067912c9',
      query: '',
      url: '',
      letSearch: false,
      loadedVideos: null
    }
  }

  saveQuery = (e) => {
    this.setState({ query: e.target.value, letSearch: false })
  }

  searchVideos = () => {
    let words = this.state.query.split(' ');
    let newURL = this.state.root + '?key=' + this.state.key + '&per_page=50' + '&q=';
    words.forEach((word) => {
      newURL += `${word}+`
      console.log(newURL)
    })
    this.setState({ url: newURL, letSearch: true, loadedVideos: null })
  }

  loadVideo = () => {
    let newVideos = <Videos url={this.state.url} />
    this.setState({ loadedVideos: newVideos, letSearch: false })
  }

  render() {
    if (this.state.letSearch) {
      this.loadVideo()
    }
    return (
      <div>
        <InputField change={this.saveQuery} click={this.searchVideos} />
        {this.state.loadedVideos}
      </div>
    )
  }
}

