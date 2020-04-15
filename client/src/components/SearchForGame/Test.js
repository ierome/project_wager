import React, { useEffect } from 'react'
import { createGame, grabGames } from '../../actions/searching.actions'
import { useSelector } from 'react-redux'


export default props => {
    const user = useSelector(appState => appState.user);
    

    return (<div><button onClick={e => createGame({game: props.game, platform: props.console, userId: user.uid})}>Create Game</button></div>)
}