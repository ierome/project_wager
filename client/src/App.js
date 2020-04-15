import React, { useEffect } from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import { Router } from "@reach/router";
import Foot from "./components/Footer";
import Navigation from "./components/Navigation";
import Login from "./components/Signin/Login";
import Register from "./components/Signin/Register";
import fire from "./config/fire";
import Home from "./components/Home/index";
import { setUser } from "./actions/firebase.actions";
import Lobby from "./components/Game/Lobby";
import "./styles/root.css";
import RerouteChat from "./components/RerouteChat/RerouteChat";
import SiteRules from "./rules/SiteRules";
import Profile from "./components/playerProfile/Profile";
import { Card } from "reactstrap";

// import Chat from "./components/Chat";
// import ChatJoin from "./components/ChatJoin";
import SearchForGame from "./components/SearchForGame/SearchForGame";
import PrivateRoute from "./PrivateRoute";
import Actions, { appendUser } from "./actions/searching.actions";
import { grabGames } from "./actions/searching.actions";
import { grabUserDetails } from "./actions/user.actions";

import Funding from "./components/Topup/Deposit";
import Transactions from "./components/playerProfile/TransHistory";
import MatchStatus from "./components/MatchStatus";
import Dispute from "./components/Dispute";
import Withdraw from "./components/Withdraw";
import matchOffer from "./components/matchOffer";


export default props => {
  function authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        grabUserDetails(user.uid);
      } else {
        setUser(null);
      }
    });
  }

  useEffect(() => {
    authListener();
    grabGames();
  }, []);

  

  return (
    <Provider store={store}>
      <Navigation />
      <Router>
        <Home exact path="/" />
        <Login path="/login" />
        <RerouteChat path="/chat" />
        <PrivateRoute as={MatchStatus} exact path="/match/progress/:id" />
        <PrivateRoute as={SearchForGame} exact path="/match/:id" />
        <Lobby exact path="/lobby/:game/:console" />
        <SiteRules path="/site-rules" />
        <Profile path="/profile/settings" />
        <Transactions path="/profile/transaction-history"/>
        <Funding path="/profile/top-up"/>
        <Register path="/register"/>
        <Withdraw path="/profile/withdraw"/>
      </Router>
      <Foot />
      {/*<MatchStatus/>
      <Dispute />
      <Withdraw /> */}
      <matchOffer/>
    </Provider>
  );
};
