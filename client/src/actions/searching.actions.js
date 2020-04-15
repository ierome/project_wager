import store from '../store'
import io from 'socket.io-client'
import axios from 'axios'
import { navigate } from '@reach/router'

const socket = io.connect('http://localhost:8000')
socket.on('UPDATE_GAMES', () => {
    grabGames()
})
// socket.on('GAME_JOINED', (id) => {

// })

export function grabGames() {
    axios.get(`/api/getGames`).then(resp => {
        store.dispatch({
            type: 'GRAB_GAMES',
            payload: resp.data
        })
    })
}

export function createGame(gameOptions) {
    axios.post('/api/createGame', gameOptions).then(resp => {
        socket.emit('GAME_CREATED');
        navigate('/match/' + resp.data[0].id)
    })
}

export function joinGame(gameOptions) {
    axios.post('/api/joinGame', gameOptions).then(resp => {
        socket.emit('GAME_CREATED');
    })
}