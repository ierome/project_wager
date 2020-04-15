import React from "react";
import avatar from "../assets/images/kaizen.png";
import { Image } from "react-bootstrap";
import "../styles/matchOffer.css";
import { joinGame } from "../actions/searching.actions";
import { useSelector } from "react-redux";
import { navigate } from "@reach/router";



 export default props => {
  const user = useSelector(appState => appState.user);
  // const [ seconds, setSeconds ] = useState(600)
  console.log(props);
  console.log(user)

  // useEffect(() => {
  //    let myInterval = setInterval(() => {
  //     setSeconds(seconds - 1)} , 1000)
  // }, [seconds])

  return (
    <>
      {!props.game.in_progress ? (
        <div className="offerGrid-container">
          <div className="avatarImage">
            <Image src={avatar} width={91} height={100} roundedCircle />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className="avatarName text-dark">{props.game.username}</h3>
              <div className="gameRecord text-dark">Game Record</div>
            </div>
          </div>

          <div className="matchSettings text-dark">Match Settings</div>

          <div className="wagerAmount">${props.game.pot_amount}</div>
          <div className="acceptMatch">
            {user.user_info ? props.game.player1_id === user.user_info.fire_id
             ? 
             <button className="accept-button" onClick={e => navigate('/match/' + props.game.id)}>View Match</button>
              : 
              <button className="accept-button" onClick={e => joinGame({
                player2Id: user.user_info.fire_id,
                gameId: props.game.id
              })}>Accept</button>
               : <p>...</p>}
          </div>
        </div>
      ) : (
        <div className="offerGrid-container">
          <div className="avatarImage">
            <Image src={avatar} width={91} height={100} roundedCircle />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className="avatarName text-dark">{props.game.username}</h3>
              <div className="gameRecord text-dark">Game Record</div>
            </div>
          </div>

          <div className="inProgressTimer text-dark">10:00</div>
          <div className="inProgressWagerAmount text-dark">${props.game.pot_amount}</div>

          <div className="playerTwoAvatarImage">
            <Image src={avatar} width={91} height={100} roundedCircle />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className="playerTwoAvatarName text-dark">{props.game.username}</h3>
              <div className="playerTwoGameRecord text-dark">Game Record</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
