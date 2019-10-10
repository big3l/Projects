import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Home from './home';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapApp from './BootstrapApp';
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(<BootstrapApp />, document.getElementById('root'));


serviceWorker.unregister();
