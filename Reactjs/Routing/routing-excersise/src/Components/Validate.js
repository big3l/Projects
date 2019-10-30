import React, { Component } from 'react'


export default class Validate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            message: '',
            valid: false
        }
    }

    submitName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    submitEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    submitMsg = (e) => {
        this.setState({
            message: e.target.value
        })
    };

    formVal = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
            alert('Please complete all fields')
            return false;
        }
        else {
            alert('Thanks for completing the form!');
            this.setState({
                valid: true
            )
        }
        return true;
    }

}

render() {
    if (this.state.valid == true) {
        return (
            <div>
                <h1>Thanks for your message</h1>
            </div>
        )
    }
    else {
        return <div><Contact /></div>
    }
}

