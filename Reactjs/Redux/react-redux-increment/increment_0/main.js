// reducer

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1000
        case 'DECTEMENT':
            return state - 1000
        default:
            return state
    }
}

// store  {subscribe, dispatch, getState}
let store = Redux.createStore(counter)

//subscribe
function printState(){
    console.log(store.getState())
}
store.subscribe (printState)

//actions
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1
store.dispatch({ type: 'DECREMENT' })