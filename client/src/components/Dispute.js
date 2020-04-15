import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../styles/Dispute.css"

export default class Dispute extends Component {
  render() {
    return (
      <div className="dispute-container">
      <h1 className="mt-5 mb-5 text-center text-dark">Dispute Page</h1>
      <FormGroup>
          <Label>User Name</Label>

          <Input type="name" placeholder="User Name" />
        </FormGroup>
        <FormGroup>
        <Label for="exampleDate">Date of Game Disputed</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
        <FormGroup>
          <Label>Wagered</Label>

          <Input type="number" placeholder="Wagered" />
        </FormGroup>
        <FormGroup>
          <Label>Prize Amount</Label>

          <Input type="number" placeholder="Prize Amount" />
        </FormGroup>
        <div className="gameresults">
          <legend className="text-center text-dark">Game Results</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Disconnected
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Incomplete
            </Label>
          </FormGroup>
        </div>
        <div className="gameconsole">
          <legend className="text-center text-dark">Game Console</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" /> Playstation
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" /> X-Box
            </Label>
          </FormGroup>
          <FormGroup>
        <Label className="mt-4 mb-1 text-center text-dark" for="exampleText">Game score and dispute details</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button className="btn-md btn-info btn-block mt-4 mb-3">
          Submit
        </Button>
          
        </div>
      </div>
    );
  }
}
