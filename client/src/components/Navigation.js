import React, { useState } from "react";
import logo from "../assets/images/GBLOGO.png";
import "../styles/Navbar.css";
import { Navbar, Button, Nav, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import fire from "../config/fire";

import { FaCommentAlt, FaPlaystation, FaXbox } from "react-icons/fa";
import { navigate } from "@reach/router";
import { IconContext } from "react-icons";
export default props => {
  const user = useSelector(appState => appState.user);
  const [showChat, setShowChat] = useState(false);

  function signOut(e) {
    e.preventDefault();
    fire.auth().signOut();
    navigate("/");
  }
  console.log(user);

  return (
    <Navbar className="color-nav" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" style={{ width: "60px " }} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {user === null ? (
          <Nav className=" ml-auto">
            {/* <Button onClick={() => setShowChat(!showChat)}>View Chat</Button> */}

            <Nav.Link className="nav-log-in text-info mt-2  " href="/login">
              Log In
            </Nav.Link>
            <Nav.Link className="nav-sign-in text-info mt-2" href="/register">Sign Up</Nav.Link>
            <Nav.Link className="log-in text-info mt-2 " href="/chat">
              <FaCommentAlt />
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className=" ml-auto mt-1">
            <NavDropdown 
  alignRight
  title="Dropdown right"
  id="dropdown-menu-align-right"
title="Games" >
              <NavDropdown.Item
                href="#action/3.1"
                onClick={() => navigate("/lobby/fortnite/ps4")}
              >
                Fortnite{" "}
                <IconContext.Provider
                  value={{ color: "blue", className: "nav-ps4-icon" }}
                >
                  <FaPlaystation size={25} />
                </IconContext.Provider>
              </NavDropdown.Item>

              <NavDropdown.Item
                href="#action/3.2"
                onClick={() => navigate("/lobby/fortnite/xbox")}
              >
                Fortnite{" "}
                <IconContext.Provider
                  value={{ color: "green", className: "nav-xbox-icon" }}
                >
                  <FaXbox size={20} />
                </IconContext.Provider>
              </NavDropdown.Item>

              <NavDropdown.Item
                href="#action/3.3"
                onClick={() => navigate("/lobby/nba/ps4")}
              >
                {" "}
                <IconContext.Provider
                  value={{ color: "blue", className: "nav-ps4-icon" }}
                >
                  NBA 2K
                  <FaPlaystation size={25} />
                </IconContext.Provider>
              </NavDropdown.Item>

              <NavDropdown.Item
                href="#action/3.4"
                onClick={() => navigate("/lobby/nba/xbox")}
              >
                NBA 2K{" "}
                <IconContext.Provider
                  value={{ color: "green", className: "nav-xbox-icon" }}
                >
                  <FaXbox size={20} />
                </IconContext.Provider>
              </NavDropdown.Item>

              <NavDropdown.Item
                href="#action/3.5"
                onClick={() => navigate("/lobby/madden/ps4")}
              >
                Madden{" "}
                <IconContext.Provider
                  value={{ color: "blue", className: "nav-ps4-icon" }}
                >
                  <FaPlaystation size={25} />
                </IconContext.Provider>
              </NavDropdown.Item>

              <NavDropdown.Item
                href="#action/3.6"
                onClick={() => navigate("/lobby/madden/xbox")}
              >
                Madden{" "}
                <IconContext.Provider
                  value={{ color: "green", className: "nav-xbox-icon" }}
                >
                  <FaXbox size={20} />
                </IconContext.Provider>
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.7"
                onClick={() => navigate("/lobby/cod/ps4")}
              >
                Call of Duty{" "}
                <IconContext.Provider
                  value={{ color: "blue", className: "nav-ps4-icon" }}
                >
                  <FaPlaystation size={25} />
                </IconContext.Provider>
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => navigate("/lobby/cod/xbox")}>
                Call of Duty{" "}
                <IconContext.Provider
                  value={{ color: "green", className: "nav-xbox-icon" }}
                >
                  <FaXbox size={20} />
                </IconContext.Provider>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
            alignRight
  title="Dropdown right"
  id="dropdown-menu-align-right"
              title={user.user_info ? user.user_info.username : ""}
             
            >
              <NavDropdown.Item>Balance: ${user.user_info ? user.user_info.balance : 'NaN'}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/profile/settings")}>
                Account Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="/profile/top-up">
                Deposit
              </NavDropdown.Item>
              <NavDropdown.Item href="/profile/withdraw">
                Withdraw
              </NavDropdown.Item>
              <NavDropdown.Item href="/profile/settings">
                Match History
              </NavDropdown.Item>
              <NavDropdown.Item href="/profile/transaction-history">
                Withdraw History
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Button
              className="log-out-btn text-white btn-info mt-1"
              onClick={signOut}
            >
              Log Out
            </Button>
          </Nav>
        )}
      </Navbar.Collapse>
      {/* {showChat ? <Chat /> : ""} */}
    </Navbar>
  );
};
