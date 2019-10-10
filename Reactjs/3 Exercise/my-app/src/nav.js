import React from 'react';
import './nav.css';

function Nav() {
    return (
        <nav>
            <a href="#html"><i class="fab fa-html5 fa-1x"></i> Html5</a>
            <a href="#css"><i class="fab fa-css3-alt fa-1x"></i> CSS</a>
            <a href="#javascript"><i class="fab fa-js-square fa-1x"></i> Javascript</a>
            <a href="#node"><i class="fab fa-node-js fa-1x"></i> Node JS</a>
        </nav>
    );
}

export default Nav;