import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Header from './header.js';
import Nav from './nav.js';
import Main from './main.js';
import Section from './section.js';
import Footer from './footer.js';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Main />, document.getElementById('main'));
ReactDOM.render(<Section />, document.getElementById('section'));
ReactDOM.render(<Footer />, document.getElementById('footer'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
