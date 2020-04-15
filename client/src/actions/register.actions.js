import store from '../store'
import axios from 'axios'
import fire from '../config/fire'
import { navigate } from '@reach/router'
import { grabUserDetails } from './user.actions'

export function registerUser(fName, lName, email, username, password) {
    fire.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(resp => {
        axios.post('/api/signup', {
            firstName: fName,
            lastName: lName,
            email,
            password,
            username,
            fireData: resp,
        }).then(resp => {
            grabUserDetails(resp.data.user_info.user.uid)
            navigate('/')
        }).catch(e => {
            store.dispatch({
                type: "REGISTER_ERROR",
                payload: "Error Registering via API. Please contact support."
            })
        })
    })
    .catch(e => {
        store.dispatch({
            type: "REGISTER_ERROR",
            payload: e.message
        })
    })
}