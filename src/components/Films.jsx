import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Context } from "../Store/AppContext";

function Films() {
    const { store } = useContext(Context);

    console.log(store.films, "films");

    return (
        <>
        {store.films.map((film, index) => (
            <Card
            className="Cards"
            style={{ width: "10rem", display: "inline-block", textAlign: "center" }}
            key={index}
            >
            <Card.Img
                variant="top"
                src={`https://starwars-visualguide.com/assets/img/films/${index + 1}.jpg`}
            />
            <Card.Body>
                <Card.Title>{film.title}</Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary">Learn More</Button>
            </Card.Body>
            </Card>
        ))}
        </>
    );
}

export default Films;
