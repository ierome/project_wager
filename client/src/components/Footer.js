import React from "react";
import { Container } from "reactstrap";
import "../styles/Footer.css";
import {
  FaBitcoin,
  FaCcPaypal,
  FaHandHoldingUsd,
  FaGamepad,
  FaHandshake,
  FaPenAlt,
  FaQuestionCircle
} from "react-icons/fa";
import payments from "../assets/images/creditCardLogo.jpg";
import withdraw from "../assets/images/withdraw.png";
import { GoLaw } from "react-icons/go";

const Foot = () => {
  return (
    <div className="footerContainer">
      <div   className=" main-footer text-center ">
        <div className="headerSection">
          <h3 className="title text-center">Easy As 1-2-3.</h3>
          <ul>
            <li className="list-unstyled">
              <FaHandshake className="handshake-icon" />{" "}
              <p>Create or agree to a match offer.</p>
            </li>
            <li className="list-unstyled">
              <FaGamepad className="gamepad-icon" />
              <p>COMPLETE AND RECORD YOUR GAME RESULTS.</p>
            </li>
            <li className="list-unstyled">
              <FaHandHoldingUsd className="collect-icon" />
              <p>Winnings are instantly funded to your account.</p>
            </li>
          </ul>
        </div>

        <div className="readSection">
          <h3 className="title">Important Things To Read.</h3>
          <ul>
            <li>
              <a href="/site-rules">
                <GoLaw className="rules-icon" />
                site & game rules.
              </a>
            </li>
            <li>
              <a href="#!">
                {" "}
                <FaQuestionCircle className="faq-icon" />
                general faq.
              </a>
            </li>
          </ul>
        </div>

        <div className="funding">
          <h3 className="title">Deposit/Withdraw.</h3>
          <ul>
            <li>
              <a href="#!">
                <img
                  src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png"
                  alt="PayPal"
                />
              </a>
            </li>
            <li>
              <a href="#!">
                <img src={payments} alt="Payments" width="100px" />
              </a>
            </li>
            <li>
              <a href="#!">
                <FaBitcoin className="bitcoin-icon" />
                bitcoin
              </a>
            </li>
            <li>
              <a href="#!">
                <img src={withdraw} alt="Withdraw" width="35px" />
                Withdraw
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright text-center  py-3">
        <section fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.gameboss.co"> GameBoss.co </a>
        </section>
      </div>
    </div>
  );
};

export default Foot;
