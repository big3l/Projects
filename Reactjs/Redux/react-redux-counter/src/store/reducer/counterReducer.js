const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CTR_INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'CTR_DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'CTR_ADDFIVE':
            return {
                ...state,
                counter: state.counter + 5
            }
        case 'CTR_SUBTRACTFIVE':
            return {
                ...state,
                counter: state.counter - 5
            }
        default:
            return state
    }
}

export default counterReducer

