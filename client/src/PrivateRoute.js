import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from '@reach/router'

export default ({ as: Component, ...rest }) => {
    const user = useSelector(appState => appState.user);

    return user === null ? <Redirect from="" to="/login" noThrow/> : <Component {...rest}/>
}