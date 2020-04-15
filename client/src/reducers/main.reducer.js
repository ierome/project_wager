const initialState = {
    info: [],
    user: {},
    allGames: [],
    registerError: '',
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {...state, user: action.payload}
        case 'GRAB_GAMES':
            return {...state, allGames: action.payload}
        case 'REGISTER_ERROR':
            return { ...state, registerError: action.payload}
        default:
            return state
    }
}