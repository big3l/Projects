import React, { Component } from 'react'
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import CounterOutput from '../components/CounterOutput';

export class CounterContainer extends Component {
    render() {
        return (
            <div className='CounterContainer'>
                <CounterOutput value={this.props.ctr} />
                <Counter label='Increment' clicked={this.props.onIncrement} />
                <Counter label='Decrement' clicked={this.props.onDecrement} />
                <Counter label='Add Five' clicked={this.props.onaddfive} />
                <Counter label='Subtract Five' clicked={this.props.onsubractfive} />
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        ctr: state.counter
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        onIncrement: () => { dispatch({ type: 'CTR_INCREMENT' }) },
        onDecrement: () => { dispatch({ type: 'CTR_DECREMENT' }) },
        onaddfive: () => { dispatch({ type: 'CTR_ADDFIVE' }) },
        onsubractfive: () => { dispatch({ type: 'CTR_SUBTRACTFIVE' }) }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(CounterContainer)