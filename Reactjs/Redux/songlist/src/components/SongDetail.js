import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log('Detail', this.props);
		if (!this.props.song) {
			return <div><br />Select a song!</div>;
		}
		return (
			<div>
				<h3>Your chosen song details:</h3>
				<p>
					Title: {this.props.song.title}
					<br />
					Duration: {this.props.song.duration}
				</p>
				<br />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);