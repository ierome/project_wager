import React, { useState } from "react";
import "../styles/siteRules.css";
import { NavItem, NavLink, Nav } from "react-bootstrap";
import CodRules from './CodRules'
import FortniteRules from './FortniteRules'
import Nba2kRules from './Nba2kRules'
import MaddenRules from './MaddenRules'
import GeneralSiteRules from './GeneralSiteRules'

export default props => {
  const [step, setStep] = useState(1)

  return (
    <div className="rules-site-container">
      <div className="rules-site-hero">
        <h1 className="general-site-title">Rules</h1>
        <Nav
          className="rules-nav-links "
          activeKey="/home"
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link onClick={() => setStep(1)} >GENERAL</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setStep(2)}>COD</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setStep(3)}>NBA2K</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setStep(4)}>FORTNITE</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setStep(5)}>MADDEN</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div>
        {step === 1 && <GeneralSiteRules /> }
        {step === 2 && <CodRules /> }
        {step === 3 && <Nba2kRules /> }
        {step === 4 && <FortniteRules /> }
        {step === 5 && <MaddenRules /> }
      </div>


    </div>
  );
};
