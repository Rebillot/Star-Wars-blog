import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Planets() {
    const [planets, setplanets] = useState([]);
    

    useEffect(() => {
        const FetchData = async () => {
        try {
            const responseplanets = await fetch(
            "https://www.swapi.tech/api/planets"
            );
            const dataplanets = await responseplanets.json();
            setplanets(dataplanets.results);
        } catch (error) {
            console.error(error);
        }
        };
        FetchData();
    }, []);

    return (
        <>
        {planets.slice(0, 10).map((planets) => (
            <Card className="Cards" style={{ width: "13rem", display: "inline-block", textAlign: "center"}} key={planets.uid}>
            <Card.Img
                variant="top"
                src={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`}
                onError={(e) => {e.target.src ='https://starwars-visualguide.com/assets/img/big-placeholder.jpg'}}
            />
            <Card.Body>
                <Card.Title>{planets.name}</Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        ))}
        </>
    );
}

export default Planets;
