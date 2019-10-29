import React, { Component } from 'react'
import Me1 from '../img/me1.jpg'

export default class Me extends Component {
    render() {
        return (
            <div className='Me'>
                <img alt='' src={Me1}></img>
                <h1>Daniel Lewis</h1>
                <h3>Born in the south of England, moved to Hamburg in 2006, began web development course in 2018.
                <br />
                    Find me on the following social media platforms
                 <br />
                    <a href='http://www.google.com'>Facebook</a><br />
                    <a href='http://www.google.com'>Instagram</a><br />
                    <a href='http://www.google.com'>LinkedIn</a></h3>
            </div>
        )
    }
}
