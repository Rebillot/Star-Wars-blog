import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { Context } from "../Store/AppContext";

function Planets() {
const {store} = useContext(Context)

    return (
        <>
        {store.planets.map((planets,index) => (
            <Card className="Cards" style={{ width: "13rem", display: "inline-block", textAlign: "center"}} key={index}>
            <Card.Img
                variant="top"
                src={`https://starwars-visualguide.com/assets/img/planets/${index +1}.jpg`}
                onError={(e) => {e.target.src ='https://starwars-visualguide.com/assets/img/big-placeholder.jpg'}}
            />
            <Card.Body>
                <Card.Title>{planets.name}</Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary" href="/learnmore">Go somewhere</Button>
            </Card.Body>
            </Card>
        ))}
        </>
    );
}

export default Planets;
