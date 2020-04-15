import React from "react";
import {
  Card,
  InputGroup,
  Accordion,
  Button,
  FormControl
} from "react-bootstrap";
import { FaBitcoin } from "react-icons/fa";
import { IconContext } from "react-icons";
import "../../styles/Deposit.css";
import { InputGroupAddon, Input } from "reactstrap";
import payments from "../../assets/images/creditCardLogo.jpg";
import { paypalPaymentInitiate } from '../../actions/payment.actions';

function Deposit() {
  return (
    <div className="funding-contianer">
      <h3>Payment Method</h3>
      <Accordion className="payment-accordion">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <IconContext.Provider
                value={{ color: "orange", className: "accordian-btc" }}
              >
                <FaBitcoin size={35} />
                Bitcoin
              </IconContext.Provider>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="btc-section">
              <InputGroup className="btc-amount">
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              <p>
                You are set to deposit the above amount into your account. You
                will recieve an email and notification when your account has
                been credited.
              </p>
              <p>
                ***NETWORK FEES to facilitate the transaction will be added to
                your total amount. Continue if you agree.***
              </p>
              <button className="btc-continue">Continue</button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <img
                src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png"
                alt="PayPal"
              />
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <div className="paypal-section">
              <Card.Body>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                  <Input
                    placeholder="Amount"
                    min={0}
                    max={100}
                    type="number"
                    step="1"
                  />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>

                <button className="paypal-btn" onClick={paypalPaymentInitiate}> </button>
              </Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              <img src={payments} alt="Payments" width="120px" />
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body
              className="creditCard-section 
      "
            >
              <InputGroup>
                <div className="CardInput">
                  <FormControl className="fullName " placeholder="Amount " />

                  <FormControl
                    className="fullName "
                    placeholder="Exact Name On Card "
                  />

                  <FormControl
                    className="fullName "
                    placeholder="Credit Card Number"
                  />
                  <FormControl
                    className="fullName "
                    placeholder="Expiration Date"
                    aria-label="Expiration Date"
                    aria-describedby="basic-addon2"
                  />
                  <FormControl
                    className="fullName "
                    placeholder="CVV"
                    aria-label="CVV"
                    aria-describedby="basic-addon2"
                  />
                  <Button className="add ">Add Card</Button>
                  <Button className="submit ">Submit</Button>
                </div>
              </InputGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
       
      </Accordion>
    </div>
  );
}
export default Deposit;
