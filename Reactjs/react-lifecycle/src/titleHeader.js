import React, { Component } from 'react'

export default class TitleHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('sync props to state');
        console.log('new props', props.newTitle);
        console.log('old state', state.title);
        if (state.title !== props.newTitle) {
            return {
                title: props.newTitle
            }
        }
        else {
            return null
        }
    }

    componentDidMount() {
        console.log('Component mounted', this.state.title)
        let header = document.querySelector('h1');
        header.style.background = 'palegreen';
    
    }

    getSnapshotBeforeUpdate() {
        console.log('updating...getSnapshotBeforeUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('updated...componentDidUpdate', this.state.title);
        let header = document.querySelector('h1');
        header.style.background = 'yellow';
        
    }

    componentWillUnmount(){
        alert('Component will unmount!')
        console.log('Unmounted component', this.state.title)
    }

    render() {
        return (
            <div className='App'>
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}
