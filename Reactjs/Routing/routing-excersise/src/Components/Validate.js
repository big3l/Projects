import React, { Component } from 'react'

export default class Validate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:''
            email: ''
            message: ''
        }
    }

nameVal = (e) =>{
    this.state.name = e.target.name
}

    render() {
        return (
            <div>

            </div>
        )
    }
}
