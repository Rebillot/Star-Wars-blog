import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FavoriteButton from "./FavoriteButton";

function Vehicles() {
    const [vehicles, setvehicles] = useState([]);
    

    useEffect(() => {
        const FetchData = async () => {
        try {
            const responsevehicles = await fetch(
            "https://www.swapi.tech/api/vehicles"
            );
            const datavehicles = await responsevehicles.json();
            setvehicles(datavehicles.results);
        } catch (error) {
            console.error(error);
        }
        };
        FetchData();
    }, []);

    return (
        <>
        {vehicles.slice(0, 10).map((vehicles) => (
            <Card className="Cards" style={{ width: "13rem", display: "inline-block", textAlign: "center"}} key={vehicles.uid}>
            <Card.Img
                variant="top"
                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
            />
            <Card.Body>
                <Card.Title>{vehicles.name}</Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary">Go somewhere</Button>
                <FavoriteButton item={vehicles} />
            </Card.Body>
            </Card>
        ))}
        </>
    );
}

export default Vehicles;
