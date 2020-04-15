import React from "react";
import { Form, FormGroup,  CustomInput } from "reactstrap";
import {FormControl, InputGroup} from "react-bootstrap";
import '../../styles/Game-style.css'

const Checkbox = props => {
  return (
    <Form>
      <FormGroup>
      
        <div id="match-setting-modal">
          
          <CustomInput
            type="switch"
            id="CustomSwitch2"
            label="Allow Custom Playbook"
          />
          <CustomInput
            type="switch"
            id="CustomSwitch4"
            label="Not Alowed To Use Ravens"
          />
            <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Append>
      <InputGroup.Text>.00</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
        </div>
      </FormGroup>
      <FormGroup></FormGroup>
    </Form>
  );
};

export default Checkbox;
