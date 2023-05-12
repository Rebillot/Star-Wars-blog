import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Characters from "./Characters";
import Vehicles from "./Vehicles";
import Planets from "./Planets";
import Films from "./Films";

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
        <Accordion.Item eventKey="3">
            <Accordion.Header>Films</Accordion.Header>
            <Accordion.Body>
            <Films />
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    );
}

export default MainDropDown;