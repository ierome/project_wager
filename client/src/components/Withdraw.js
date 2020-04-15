import React, { Component } from "react";
import "../styles/Withdraw.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export class Withdraw extends Component {
  render() {
    return (
      <div className="withdraw-container mt-5">
        <h4 className="text-center mt-5 mb-3 text-dark">Balance: $.00</h4>
        <FormGroup className="mt-5 text-center text-dark">
          <Label className="text-center text-dark">Withdraw Ammount</Label>

          <Input type="number" placeholder="Ammount" />
        </FormGroup>
        <div className="withdrawMethod mt-4 text-dark">
            <legend className="text-center text-dark">Withdraw Option</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> PayPal
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> Bitcoin
              </Label>
            </FormGroup>
            <Button className="btn-md btn-block btn-info mt-3">Submit</Button>
          </div>
      </div>
    );
  }
}

export default Withdraw;
