import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Characters from "./components/Characters";
import Vehicles from "./components/Vehicles";
import Planets from "./components/Planets";

function MainDropDown() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Characters</Accordion.Header>
        <Accordion.Body>
          <Characters />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Vehicles</Accordion.Header>
        <Accordion.Body>
          <Vehicles />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Planets</Accordion.Header>
        <Accordion.Body>
          <Planets />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MainDropDown;
