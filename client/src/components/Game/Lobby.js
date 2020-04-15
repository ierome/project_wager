import React, { useEffect, useState } from "react";
import "../../styles/Gamepage.css";
import Modal from "./ModalComponent";

import { Container, Row, Col, Table } from "react-bootstrap";
import { useSelector } from 'react-redux'
import { navigate } from "@reach/router";
import MatchOffer from "../matchOffer";

export default props => {
  const [logo, setLogo] = useState("GBLOGO.png");
  const [showChat, setShowChat] = useState(false);
  const allGames = useSelector(appState => appState.allGames.filter(game => game.name === props.game));

  function getLogo() {
    if (props.game === "fortnite") {
      setLogo("fort-nitelogo.png");
    } else if (props.game === "cod") {
      setLogo("codlogo.png");
    } else if (props.game === "madden") {
      setLogo("maddenlogo.png");
    } else if (props.game === "nba") {
      setLogo("nba2klogo.png");
    } else {
      navigate("/");
    }
  }
  useEffect(() => {
    getLogo();
    window.scrollTo(0, 0);
  }, [logo, props]);

  return (
    <div>
      <div className="lobby-container">
        <section className={`bgimage${props.game}`}>
          <img
            src={require(`../../assets/images/${logo}`)}
            class="rounded mx-auto d-block mt-2 "
            alt="logo"
            style={{ width: "350px" }}
          />{" "}
          <div className="banner-container">
            <Container className="opponents-container ">
              <Row>
                <Col className="opponents text-white text-center table-borderless">
                  <h3>Recent Opponents</h3>

                  <Table className="table-opponents text-center" hover>
                    <thead>
                      <tr>
                        <th>opponent</th>
                        <th>score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>LarrydaBook</td>
                        <td>26-35</td>
                      </tr>
                      <tr>
                        <td>Jake550</td>
                        <td>23-43</td>
                      </tr>
                      <tr>
                        <td>LarrydaBomb</td>
                        <td>26-35</td>
                      </tr>
                      <tr>
                        <td>LarrydaBomb</td>
                        <td>26-35</td>
                      </tr>
                      <tr>
                        <td>LarrydaBomb</td>
                        <td>26-35</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>

            <Container className="modal-container">
              <Modal props={props}/>
            </Container>

            <Container className="top-five-container ">
              <Row>
                <Col className=" top-five  text-center">
                  <h3>Daily Top-5 Winners</h3>
                  <Table
                    className="table-top-five text-center table-borderless"
                    hover
                  >
                    <thead>
                      <tr>
                        <th colSpan="2">Player</th>
                        <th></th>
                        <th>Winnings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="2">MarkdaKilla</td>
                        <td></td>
                        <td>$500</td>
                      </tr>

                      <tr>
                        <td colSpan="2">MarkdaKilla</td>
                        <td></td>
                        <td>$496</td>
                      </tr>

                      <tr>
                        <td colSpan="2">MarkdaKilla</td>
                        <td></td>
                        <td>$287</td>
                      </tr>

                      <tr>
                        <td colSpan="2">MarkdaKilla</td>
                        <td></td>
                        <td>$279</td>
                      </tr>

                      <tr>
                        <td colSpan="2">MarkdaKilla</td>
                        <td></td>
                        <td>$496</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
      {allGames.length > 0 ? allGames.map(game => {
        return <MatchOffer game={game}/>
      }): <div id="noGames"><h1>There are currently no matches for this game</h1></div>}
    </div>
  );
};
