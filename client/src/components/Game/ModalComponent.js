import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Matchsettings from "./Matchsettings";
import { createGame } from "../../actions/searching.actions";
import { useSelector } from 'react-redux'
import { Form, FormGroup,  CustomInput } from "reactstrap";
import {FormControl, InputGroup} from "react-bootstrap";
import '../../styles/Game-style.css'

const ModalExample = props => {
  const [wager, setWager] = useState(0)
  const user = useSelector(appState => appState.user)
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  console.log(user)

  function createMatch() {
    createGame({
      userId: user.user_info.fire_id,
      game: props.props.game,
      platform: props.props.platform,
      wager: wager,
    })
    setModal(!modal)
  }

  return (
    <div className="modal-match-settings">
      <Button className="modal-button-container" onClick={toggle} hover>
       Create Match
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="text-dark" toggle={toggle}>Select Match Settings And Wager Options</ModalHeader>
        <Form>
      <FormGroup>
      
        <div id="match-setting-modal">
          <CustomInput
            type="switch"
            id="CustomSwitch1"
            name="customSwitch"
            label="Willing to have a re-match"
          />
          <CustomInput
            type="switch"
            id="CustomSwitch2"
            name="customSwitch"
            label="Use All-Pro/4min quarters"
          />
          <CustomInput
            type="switch"
            id="CustomSwitch3"
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
    <FormControl onChange={e => setWager(e.target.value)} aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Append>
      <InputGroup.Text>.00</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
        </div>
      </FormGroup>
      <FormGroup></FormGroup>
    </Form>
        <ModalBody className="text-dark">Submit And Good Luck </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={createMatch}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
