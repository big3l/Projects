
// reducer
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1000
        case 'DECREMENT':
            return state - 1000
        case 'ODD_INCREMENT':
            return state + 2000
        default:
            return state
    }
}

// store  {subscribe, dispatch, getState}
let store = Redux.createStore(counter)

//subscribe
function printState() {
    console.log(store.getState())
}
store.subscribe(printState)

//actions
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })

store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'INCREMENT' })

store.dispatch({ type: '' }) // returns current state again

store.dispatch({ type: 'ODD_INCREMENT' })
store.dispatch({ type: 'ODD_INCREMENT' })
store.dispatch({ type: 'ODD_INCREMENT' })

