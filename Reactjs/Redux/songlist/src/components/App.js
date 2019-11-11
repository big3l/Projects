import React, { Component } from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log('App', this.props);
		return (
			<div className="ui container grid">
				<br />
				<h1>Song List Selector</h1>
				<div className="ui row">
					<div className="column eight wide">
						<SongList />
					</div>
					<div className="column eight wide">
						<SongDetail />
					</div>
				</div>
			</div>
		);
	}
}