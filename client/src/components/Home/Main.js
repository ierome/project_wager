import React from "react";
import logo from "../../assets/images/GBLOGO.png";
import topfour from "../../assets/images/top-four.png";
import "../../styles/Main.css";
import { Button, Row, Table } from "react-bootstrap";
import Chat from "../ChatRoom/Chat";






const Main = () => (
  <div className="Hero">
    <Row className="hero-grid text-center  " style={{ display: "flex" }}>
      {/* <div className="hero-chat  " >
        <Chat  />
      </div> */}
      <div className="hero-middle	">
        <div className="HeroGroup .d-none .d-md-block">
          <img className="hero-logo" src={logo} alt="logo" />
        <p>
          Earn money with your game skills vs other players. Join and take the
          challange to become the Boss.
        </p>
        <Button className="Hero-button text-white" href="/register">
          JOIN NOW
        </Button>
      </div>
      </div>
      <div className=" daily-top-4  text-center sm">
        <div className="topfour">
          <img src={topfour} alt="Top Four" width="100px" />
        </div>

        <Table
          className="table-daily-4  table-borderless text-center align-center"
          hover
        >
          <thead className="table-titles">
            <tr>
              <th>Player</th>
              <th>game</th>
              <th>Win</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MarkdaKilla</td>
              <td>NBA2K</td>
              <td>$500</td>
            </tr>
            {/* <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr> */}
            <tr>
              <td>MarkdaKilla</td>
              <td>FORTNITE</td>
              <td>$496</td>
            </tr>
            {/* <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr> */}
            <tr>
              <td>MarkdaKilla</td>
              <td>COD</td>
              <td>$287</td>
            </tr>
            {/* <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr> */}
            <tr>
              <td>MarkdaKilla</td>
              <td>MADDEN</td>
              <td>$279</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Row>
    <svg className="wave" width="110%" height="172" fill="none">
      <path fill="#f5f5f5">
        <animate
          repeatCount="indefinite"
          fill="freeze"
          attributeName="d"
          dur="10s"
          values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"
        />
      </path>
    </svg>
  </div>
);

export default Main;
