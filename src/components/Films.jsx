import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



function Films() {
    const [films, setfilms] = useState([]);

    useEffect(() => {
        const FetchData = async () => {
        try {
            const responsefilms = await fetch(
            "https://www.swapi.tech/api/films"
            );
            const datafilms = await responsefilms.json();
            setfilms(datafilms.result);
        } catch (error) {
            console.error(error);
        }
        };
        FetchData();
    }, []);

        return (
            <>
            {films.map((film) => (
                <Card
                className="Cards"
                style={{ width: "10rem", display: "inline-block", textAlign: "center" }}
                key={film.properties.episode_id}
                >
                <Card.Img
                    variant="top"
                    src={`https://starwars-visualguide.com/assets/img/films/${film.properties.episode_id}.jpg`}/>
                <Card.Body>
                    <Card.Title>{film.properties.title}</Card.Title>
                    <Card.Text></Card.Text>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
                </Card>
            ))}
            </>
        );
        }

export default Films;
