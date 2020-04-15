import React, { useState } from "react";
import { registerUser } from "../../actions/register.actions";
import "../../styles/Register.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useSelector } from "react-redux";

export default props => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const registerErr = useSelector(appState => appState.registerError);
  const [registerValidationErr, setRegisteredValidationErr] = useState("");

  function register(e) {
    e.preventDefault();
    if (
      password === confirmPassword &&
      fName.length > 0 &&
      lName.length > 0 &&
      email.length > 0 &&
      username.length > 5
    ) {
      registerUser(fName, lName, email, username, password);
    } else {
      setRegisteredValidationErr(
        "Please check the fields provided and try again."
      );
    }
  }
  return (
    <Form className="loginBox mt-5">
      <h1 className="header1">
        Game<span className="headerSpan">Boss</span>.co
      </h1>
      <p className="error">
        {registerErr.length > 0 ? registerErr : registerValidationErr}
      </p>
      <FormGroup>
        <Label>First Name</Label>
        <Input
          type="name"
          placeholder="First name"
          onChange={e => setFName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <Input
          type="name"
          placeholder="Last Name"
          onChange={e => setLName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Username</Label>
        <Input
          type="name"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Confirm Password</Label>
        <Input
          type="password"
          placeholder="Confirm Password"
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </FormGroup>
      <Button
        className="btn-lg btn-info btn-block mt-4 mb-3"
        onClick={register}
      >
        Sign Up
      </Button>
      <div className="loginBoxLinks text-center">
        <a href="/log-in">Log In</a>

        <a href="/forgot-password">Forgot Password</a>
      </div>
    </Form>
  );
};
