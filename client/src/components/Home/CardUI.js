import React from "react";
import { Link } from "@reach/router";
import{FaXbox, FaPlaystation} from "react-icons/fa"

import "../../styles/Game-style.css";

const Game = props => {
  console.log(props);
  return (

    
    
  
    <div className="game text-center">
    
      <div className="overflow">
        <img src={props.imgsrc} alt="image1" className="card-img-top" />
      </div>
      <div className="game-body text-light"></div>
      <h3 className="game-title">{props.title}</h3>
      <p className="game-text text-light">Select your game system.</p>
      <Link
        to={"/lobby/" + props.link + "/ps4"}
        className="ps4-btn btn-primary btn-block"
      >
       <FaPlaystation size="30"/>
      </Link>
      <br />
      <Link
        to={"/lobby/" + props.link + "/xbox"}
        className="xbox-btn btn-success btn-block"
      >
        <FaXbox size="30"/>
      </Link>
    </div>
  );
};
export default Game;
