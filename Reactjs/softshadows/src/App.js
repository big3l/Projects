import './App.css';
import React, { Component } from 'react';
import { softshadows } from 'softshadows';

export default class App extends Component {
  componentDidMount() {
    softshadows({
      shadow_type: 'hard',
      padding: true
    })
  }

  render() {
    return (
      <div>
        <img src="https://picsum.photos/id/111/300/300" title="" className="softshadows" alt='img' />
        <img src="https://picsum.photos/id/121/300/300" title="" className="softshadows" alt='img' />
        <img src="https://picsum.photos/id/123/300/300" title="" className="softshadows" alt='img' />
      </div>
    )
  }
}
