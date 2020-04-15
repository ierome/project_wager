import store from '../store'

export function setUser(user) {
    store.dispatch({
        type: 'SET_USER',
        payload: user
    })
}