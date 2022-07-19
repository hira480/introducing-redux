// constant decleration
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';
// state
const initialCounterState = {
    count: 0,
}
const initialUserState = {
    user: [
        { name: 'Mannan Hira' }
    ]
}


// action  -- object (type, payload)
// Increment Counter
const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}
const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
}

// Decrement Counter
