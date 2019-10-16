import React, { Component } from 'react'
import Input from './input';
import './App.css';

export default class AppClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: ""

        }
    }
    handleInputChange = (e) => {
        this.setState({
            todo: e.target.value,

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`The task is : ${this.state.todo}`);
    }

    isValid = () => {
        if (this.state.todo === '') {
            return false;
        }
        return true;
    }
    render() {
        return (
            <div className="App">
                <h2>Controlled Components with React</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input onChange={this.handleInputChange} id="todo"
                        errorMessage={this.isValid() ? '' : ' * field required'}
                        placeholder="Type something here...."
                        type="text" value={this.state.todo} />
                    <div>
                        <button className='btn btn-info' disabled={!this.isValid()}
                            type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

