import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { Context } from "../Store/AppContext";
import { Link } from "react-router-dom";

function Characters() {
  const { store, actions } = useContext(Context);

  const isFavorite = (character) => store.favoritos.includes(character);

  const handleFavoriteClick = (character) => {
    if (isFavorite(character)) {
      actions.removeFromFavorites(character);
    } else {
      actions.addToFavorites(character);
    }
  };

  return (
    <>
      {store.personajes.map((personaje, index) => {
        return (
          <Card
            className="m-3"
            style={{
              width: "15rem",
              display: "inline-block",
              textAlign: "center",
            }}
            key={index}
          >
            <Card.Img
              variant="top"
              src={`https://starwars-visualguide.com/assets/img/characters/${
                index + 1
              }.jpg`}
            />
            <Card.Body className="">
              <Card.Title>{personaje.name}</Card.Title>
              <Card.Text></Card.Text>

              <Link to={`/learnmore/people/${index + 1}`}>
                <button className="btn btn-primary">Learn More</button>
              </Link>

              <Button
                onClick={() => handleFavoriteClick(personaje.name)}
                className="mx-2"
              >
                {isFavorite(personaje.name) ? "♥" : "♡"}
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default Characters;
