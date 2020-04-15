import React, { Component, useState } from 'react'
import "../../styles/Register.css"
import fire from "../../config/fire";
import { navigate } from '@reach/router'

import {Button, Form, FormGroup, Label, Input} from "reactstrap"

export default props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('');


  function login(e) {
    e.preventDefault();
    if (email === "" || password === "" || password.length < 6) {
      setErrMsg("Please check your email or password and try again");
    } else {
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(resp => {
          navigate('/')
        })
        .catch(e => {
          setErrMsg("Please check your email or password and try again");
        });
    }
  }

  return (
    <Form className='loginBox mt-5'>
    <h1 className="header1">Game<span className="headerSpan" >Boss</span>.co</h1>
    <p>{errMsg}</p>
    <FormGroup>
      <Label>Email</Label>
      <Input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>          
    </FormGroup>
    <FormGroup>
      <Label>Password</Label>
      <Input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>          
    </FormGroup>
    <Button onClick={login} className="btn-lg btn-info btn-block mt-4 mb-3">
      Log In
    </Button>
    <div className='loginBoxLinks text-center'>
    <a href="/register">Sign Up</a>
    
      {/* <a href="/forgot-password">Forgot Password</a> */}
    </div>
  </Form>
  )
}