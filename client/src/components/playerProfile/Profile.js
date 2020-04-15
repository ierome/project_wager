import React, { Component, useEffect } from "react";
import {
  Col,
  Nav,
  Image,
  Accordion,
  Button,
  Card,
  Table
} from "react-bootstrap";
import avatar from "../../assets/images/kaizen.png";
import "../../styles/Profile.css";
import { grabUserDetails } from "../../actions/user.actions";
import { useSelector } from "react-redux";

export default props => {
  const user = useSelector(appState => appState.user);
  console.log(user);

  return (
    <div className="profileContainer ">
      <h2>Profile</h2>
      <div className="avatar-image">
        <Image src={avatar} width={171} height={180} roundedCircle />
      </div>
      <Nav.Link href="/player/update">Edit Profile</Nav.Link>
      <Accordion className="profile-Accordian">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Game Records
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Table responsive="sm" striped bordered hover>
                <thead>
                  <tr>
                    <th>Madden</th>

                    <th>Wins</th>
                    <th>Loss</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Fortnite</th>

                    <th>Wins</th>
                    <th>Loss</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>C.O.D</th>
                    <th>Wins</th>
                    <th>Loss</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>8</td>
                    <td>5</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>NBA2K</th>

                    <th>Wins</th>
                    <th>Loss</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Match History
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <Table striped bordered hover responsive="sm">
                <thead>
                  <tr>
                    <th>Game</th>
                    <th>Result</th>
                    <th>Score</th>
                    <th>Opponent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>NBA2K</td>
                    <td>W</td>
                    <td>125-120</td>
                    <td>JOEYDABEAST</td>
                  </tr>
                  <tr>
                    <td>FORTNITE</td>
                    <td>W</td>
                    <td></td>
                    <td>fatHEAD788</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Wager History
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <Table striped bordered hover responsive="sm">
                <thead>
                  <tr>
                    <th>Current Balance</th>
                    <th>Total Wagered</th>
                    <th>Earnings </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>$86</td>
                    <td>$525</td>
                    <td>-$122</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};
