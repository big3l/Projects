import React, { Component } from 'react'

export default class Me extends Component {
    render() {
        return (
            <div className ='Me'>
                <img alt ='' src = 'https://picsum.photos/id/1005/200/200'></img>
                <h1>My Name</h1>
                <h3>Some nice text about my home-town, where I was born and what my skills are. 
                <br/>
                 Some websites I frequently use:
                <a href = 'http://www.google.com'>http://www.google.com</a><br/>
                <a href = 'http://www.google.com'>http://www.google.com</a><br/>
                <a href = 'http://www.google.com'>http://www.google.com</a></h3>
            </div>
        )
    }
}
