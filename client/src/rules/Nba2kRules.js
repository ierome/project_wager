import React from "react";
import "../styles/GameRules.css"
export default props => {
  return (
    <div>
      <h1 title="nba2kRules">NBA2k Rules</h1>
      <p>
        Players have 2 hours to play the match. If neither Player reports a
        result within 2 hours of the MATCH being confirmed, the MATCH will be
        considered abandoned. Abandoned matches are not reported on a Player’s
        profile and the funds are returned to each Player’s account Once a match
        is abandoned, it can no longer be played. Both Player’s can challenge
        each other again, but they must do so under a new MATCH. When a player
        in a head to head match reports the score, the opponent must confirm or
        counter the results within 30 minutes or the initial reported score will
        automatically be confirmed. This is to prevent sore losers from not
        reporting their score.
      </p>
      <ul>
        <h2>Game rules</h2>
        <li>All matches will be played in All-Madden level.</li>
        <li>Lower ranking team will be home team.</li>
        <li>Fatigue will be turned off.</li>
        <li>Five minute quarters.</li>
        <li>Accelerated shot clock off.</li>
        <li>No fake punts or onside kicks until 4th quater AND LOSING</li>
      </ul>
    </div>
  );
};
