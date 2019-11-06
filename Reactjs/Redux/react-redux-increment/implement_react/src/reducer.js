const initialState = {
    x: 0,
    y: 0,
    z: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT_X':
            return {
                x: state.x + 100, 
                y: state.y,
                z: state.z
            }
        case 'INCREMENT_Y':
            return {
                y: state.y + 100,
                x: state.x,
                z: state.z
            }
        case 'INCREMENT_Z':
            return {
                z: state.z + 100,
                y: state.y,
                x: state.x
            }
        default: return state
    }
}