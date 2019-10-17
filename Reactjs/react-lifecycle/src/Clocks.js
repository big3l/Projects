import React, { Component } from 'react'
import Ctime from './Ctime'
import './App.css';

export default class Clocks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: ['Canada/Mountain', 'Pacific/Fiji', 'Asia/Hong_Kong', 'Europe/Berlin', 'Africa/Maseru'],
            time: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(), 1000
        );
    }

    tick = () => { this.setState({ time: new Date() }) }

    render() {
        const clockList = this.state.countries.map((item) => {
            return <Ctime timezone={item} time={this.state.time} />
        })
        return (
            <div>
                {clockList}
            </div>
        )
    }
}
