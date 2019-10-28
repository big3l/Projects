import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navigator extends Component {
    render() {
        return (
            <div>
                <h1>React Router</h1>
                <ul>
                    <li>
                        <Link to={'/'}>Home Page</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
