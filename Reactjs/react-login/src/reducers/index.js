import { loadState } from '../storage';

let initialState = {
    usersArray: [
        {
            id: 1,
            username: 'Steven',
            age: 25,
            password: 'banana10'
        },
        {
            id: 2,
            username: 'Bronson',
            age: 44,
            password: 'hammock10'
        }
    ],
    loggedIn: false,
    loggedUser: {}
}

let defaultState = loadState();
if (defaultState === null) {
    console.log('Empty Local Storage')
}
else {
    initialState = defaultState;
    console.log(initialState)
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ACTION':
            let success = false;
            let loggedUser = {};
            state.usersArray.forEach((user) => {
                if (user.username === action.username
                    && user.password === action.password) {
                    success = true;
                    loggedUser = user;
                }
            })
            return {
                ...state,
                loggedIn: success,
                loggedUser: loggedUser
            }
        case 'REGISTER_ACTION':
            let newUserArray = [...state.usersArray];
            let newID = newUserArray.length + 1;
            let newUser = {
                id: newID,
                ...action.userinfo,
                // ...action =
                // username: action.userinfo.username,
                // password: action.userinfo.password,
                // age: action.userinfo.age
            }
            newUserArray.push(newUser)
            return ({
                usersArray: newUserArray,
                loggedIn: true,
                loggedUser: newUser
            })
        case 'LOGOUT_ACTION':
            return ({
                ...state,
                loggedIn: false,
                loggedOut: {}
            })
        default:
            return state
    }
}
export default usersReducer;