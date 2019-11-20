import './App.css';
import { softShadow } from 'softshadows'
import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount() {
    softShadow({
      shadow_type: 'hard',
      padding: false
    })
  }
  render() {
    return (
      <div>
        <img src="https://picsum.photos/id/171/300/300" title="" className="softShadow" alt= 'img' />
        <img src="https://picsum.photos/id/191/300/300" title="" className="softShadow" alt= 'img'/>
        <img src="https://picsum.photos/id/193/300/300" title="" className="softShadow" alt= 'img'/>
      </div>
    )
  }
}
