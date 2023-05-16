import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Context } from "../Store/AppContext";

function Films() {
    const { store, actions } = useContext(Context);
const isFavorite = (films) => store.films.includes(films);

const handleFavoriteClick = (films) => {
    if (isFavorite(films)) {
      actions.removeFromFavorites(films);
    } else {
      actions.addToFavorites(films);
    }
  };

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
                <Button onClick={() => handleFavoriteClick(film.title)}>
                {isFavorite(film.title) ? "♥" : "♡"}
              </Button>
            </Card.Body>
            </Card>
        ))}
        </>
    );
}

export default Films;
