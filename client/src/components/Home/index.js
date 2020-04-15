import React from "react";
import Main from "./Main";
import Game from "./Games";
import "../../styles/App.css";
import axios from 'axios'

export default props => {

  return (
    <div>
      <Main />
      
      <h1 className="options">SELECT YOUR GAME</h1>
      <Game />
    </div>
  );
};
