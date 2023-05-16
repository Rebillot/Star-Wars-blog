import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Context } from "../Store/AppContext";

function Vehicles() {
    const { store, actions } = useContext(Context);

    const isFavorite = (vehicles) => store.favoritos.includes(vehicles);

    const handleFavoriteClick = (vehicles) => {
        if (isFavorite(vehicles)) {
        actions.removeFromFavorites(vehicles);
        } else {
        actions.addToFavorites(vehicles);
        }
    };
    return (
        <>
        {store.vehicles.map((vehicles) => (
            <Card
            className="Cards"
            style={{
                width: "13rem",
                display: "inline-block",
                textAlign: "center",
            }}
            key={vehicles.name}
            >
            <Card.Img
                variant="top"
                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
            />
            <Card.Body>
                <Card.Title>{vehicles.name}</Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary" href={`/learnmore/vehicles/${vehicles.name}`}>
                Learn More
                </Button>
                <Button onClick={() => handleFavoriteClick(vehicles.name)}>
                {isFavorite(vehicles.name) ? "♥" : "♡"}
                </Button>
            </Card.Body>
            </Card>
        ))}
        </>
    );
}

export default Vehicles;
