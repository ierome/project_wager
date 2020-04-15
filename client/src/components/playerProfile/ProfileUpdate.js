import React, { Component, useEffect } from "react";
import {
  Nav,
  Image,
  Accordion,
  Button,
  Card,
  Form,
  FormControl,
  Container,
  Row,
  Col,
  InputGroup
} from "react-bootstrap";
import avatar from "../../assets/images/kaizen.png";
import "../../styles/ProfileUpdate.css";
import { grabUserDetails } from "../../actions/user.actions";
import { useSelector } from "react-redux";

export default props => {
  const user = useSelector(appState => appState.user);
  console.log(user);

  return (
    <div className="profileUdate   ">
      <h2>Update/Edit Profile</h2>
      <div className="avatar-image">
        <Col xs={6} md={4}>
          <Image src={avatar} width={171} height={180} roundedCircle />
        </Col>
        
      </div>

      <Accordion className="profileUpdate-accordian">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Email
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="profileUpdate-input ">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="formInput"
                    type="email"
                    placeholder="Enter Email "
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Button variant="info" type="submit ">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Xbox Username
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <InputGroup className="formInput">
                <FormControl placeholder="Xbox username" />
                <InputGroup.Append>
                  <Button variant="info">Submit</Button>
                </InputGroup.Append>
              </InputGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Playstation Username
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <InputGroup className="formInput">
                <FormControl placeholder="Playstation username" />
                <InputGroup.Append>
                  <Button variant="info">submit</Button>
                </InputGroup.Append>
              </InputGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Image/Avatar
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body className="imageEdit">
              <Image src={avatar} width={91} height={100} roundedCircle />

              <InputGroup className="formInput">
                <FormControl placeholder="Upload Image" />
                <InputGroup.Append>
                  <Button variant="info">submit</Button>
                </InputGroup.Append>
              </InputGroup>

              <Image src={avatar} width={91} height={100} roundedCircle />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              Password
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <InputGroup className="formInput">
                <FormControl placeholder="Password" />
                <InputGroup.Append>
                  <Button variant="info">submit</Button>
                </InputGroup.Append>
              </InputGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};
