import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { Context } from "../Store/AppContext";

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
            style={{
              width: "13rem",
              display: "inline-block",
              textAlign: "center",
            }}
            key={index}
          >
            <Card.Img
              variant="top"
              src={`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`}
            />
            <Card.Body>
              <Card.Title>{personaje.name}</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary" href="/learnmore">
                Learn More
              </Button>
              <Button onClick={() => handleFavoriteClick(personaje.name)}>
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
