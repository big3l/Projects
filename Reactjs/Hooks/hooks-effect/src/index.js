import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Photos from './hooks';
import Posts from './hooksa';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Photos />, document.getElementById('photos'));
ReactDOM.render(<Posts />, document.getElementById('posts'));


