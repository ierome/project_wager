import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
 
} from "reactstrap";
import { Image } from "react-bootstrap";
import avatar from "../assets/images/kaizen.png";
import "../styles/MatchStatus.css";

export default props => {

  return (
    <div className="MatchStatus-container mt-3">
        <Form className="MatchStatus ">
        <div className="playerImage1 text-dark mb-3">
            <Image
              className="player1 text-dark"
              src={avatar}
              width={91}
              height={100}
              roundedCircle
            />
           <div className="player1Info">
          <div className="gamerTag1">KING9144848</div>
          <div className="playerRecord1">W-L</div>
          </div>
          <div className='score1'>score</div>
          </div>
            <h5 className="m-1 text-dark text-center">VS</h5>

            <div className="playerImage2 text-dark mb-3">
            <Image
              className="player2 text-dark"
              src={avatar}
              width={91}
              height={100}
              roundedCircle
            />
           
          
          <div className="player2Info">
          <div className="gamerTag2">IMDAKING</div>
          <div className="playerRecord2">W-L</div>
          </div>
          <div className='score2'>score</div>
          </div>

          <h5 className="text-center text-dark">Wagered: <span>$5</span></h5>
          <h5 className="text-center text-dark">Total Pot: <span>$10</span></h5>
          <h5 className="text-center text-dark">Game Status: <span className="text-success">In Progress</span></h5>
          <h4 className="text-center text-info">Opponent Information:</h4>
        
            <h5 className="text-center text-info">Gamertag</h5>
            <FormGroup>
        <Label className="Your Score text-center mt-4 mb-0">Your Score</Label>
        <Input type="numer" name="score"  placeholder="Your Score" />
      </FormGroup>
      <FormGroup>
        <Label className="opponent Score text-center mt-4 mb-0">Opponent Score</Label>
        <Input type="numer" name="score" 
         placeholder="Opponent Score " />
      </FormGroup>
         
          <div className="gameresults">
            <legend className="text-center text-dark">Game Results</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> Win
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> loss
              </Label>
            </FormGroup>
          </div>
          
          
          <div className="gamestatus">          
            <Button className="btn-md btn-info btn-block mt-2 ">Upload Proof/Score</Button>
          </div>
          <div className="gamestatus">
            <Button className="btn-md btn-info  mt-4 mb-3 pr-4 pl-4">
              Dispute
            </Button>
            <Button className="btn-md btn-info  mt-4 mb-3 pr-4 pl-4">Submit</Button>
          </div>
        </Form>
      </div>
  )
}
