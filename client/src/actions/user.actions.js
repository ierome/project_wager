import store from '../store'
import axios from 'axios'

export function grabUserDetails(id) {
    axios.get('/api/grabUserDetails?id=' + id).then(resp => {
        store.dispatch({
            type: 'SET_USER',
            payload: resp.data
        })
    })
}