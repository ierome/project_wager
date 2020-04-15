import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'
import { pulse, bounceInLeft, bounce } from 'react-animations'
import { StyleSheet, css } from 'aphrodite';
import bounceInRight from 'react-animations/lib/bounce-in-right';
import fadeInDownBig from 'react-animations/lib/fade-in-down-big';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { navigate } from '@reach/router'
import "../../styles/SearchForGame.css"

function SearchForGame(props) {
    const [searchingForGame, setSearchingForGame] = useState(true)
    const gameDetails = useSelector(appState => appState.allGames).filter(game => game.id === Number(props.id)).map(game => {
        if (game.p2_username && searchingForGame === true) {
            console.log("Exists!")
            setSearchingForGame(false)
            setTimeout(() => {
                navigate('/match/progress/' + props.id)
            }, 2000)
            return game
        } else {
            console.log("Doesnt exist!")
            return game
        }
    })
    const useStyles = makeStyles(theme => ({
       
        searchGameContainer: {
            height: '100%',
            width: '90vw',
            padding: '50px',
            display: 'flex',
            flexDirection:"column",
            justifyContent:'space-between',
            alignItems: 'center',
            margin: 'auto'
        },
      
   
   
      

        playerOneContainer: {
            width: '45%',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
        },
        
        playerTwoContainer: {
            width: '45%',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'

        },
        searchingText: {
            color: 'black',
            margin: '30px 0 15px 0'
        }

    }))

    const styles = StyleSheet.create({
        bounce: {
            animationName: pulse,
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            color: '#fffff78',
            margin: '30px 0 25px 0'
        },
        playerOneAvatar: {
            background: `url('/kobeee.jpg')`,
            backgroundSize: 'cover',
            height: '150px',
            width: '150px',
            borderRadius: '50%',
            boxShadow: '5px 5px 10px purple',
        },
        playerOneContainer: {
            width: '45%',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            animationName: bounceInRight,
            animationDuration: '3.5s',
        },
        searchingBox: {
            animationName: bounceInLeft,
            animationDuration: '3.5s',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        playerOneName: {
            animationName: bounce,
            animationsDuration: '1s',
            animationIterationCount: "infinite",
            color: '#64769c',
            margin: '10px 0 5px 0'
        },
        vsBox: {
            animationName: fadeInDownBig,
            animationDuration: '1s',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50px',
            color:'#64769c',
        },
        playerTwoAvatar: {
            animationName: 'pulse',
            animationDuration: '1s',
            animationIterationCount: '5',
            animationDelay: '4s',
            background: `url('/lebron.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '150px',
            width: '150px',
            borderRadius: '50%',
            boxShadow: '5px 5px 10px skyblue'
        },
    })


    const classes = useStyles()
    return (
       <div className={classes.searchGameContainer}>
           <div className={css(styles.playerOneContainer)} >
                <div className={css(styles.playerOneAvatar)} />
                    <h2 className={css(styles.playerOneName)}>{gameDetails[0] === undefined ? "" : gameDetails[0].username}</h2>
                <div className={classes.playerOneRatio}>14-7</div>
           </div>
           <div className={classes.playerTwoContainer}> 
               {searchingForGame ? 
                <div className={css(styles.searchingBox)}>
                <h3 className={css(styles.bounce)}>Searching for Opponent...</h3>
                <CircularProgress style={{height: '200px', width: '200px', color: 'rgb(157,224,97)', margin: 'auto'}}/>
                </div>
                 :
                <>
                <div className={css(styles.playerTwoAvatar)} />
               <h2 className={css(styles.playerOneName)}>{gameDetails[0] === undefined ? "" : gameDetails[0].p2_username}</h2>
                <div className={classes.playerTwoRatio}>21-2</div>
                </>
               }
           </div>
       </div>
    )
}

export default SearchForGame
