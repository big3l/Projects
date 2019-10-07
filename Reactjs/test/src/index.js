import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Person, app} from './App';
import Todo from './todo/todo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App name = "Daniel" city = "Hamburg" jobtitle = "Developer" />, document.getElementById('root'));
ReactDOM.render(<Person name = "Mansour" job = "React Specialist"/>, document.getElementById("Result1"));
ReactDOM.render(<Person name = "Abi" job = "VueJS Specialist"/>, document.querySelector("#Result2"));
ReactDOM.render(app, document.querySelector("#Result3"))
ReactDOM.render(<Todo />, document.getElementById('todo'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
