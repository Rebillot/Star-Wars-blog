import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { Context } from "../Store/AppContext";

function Planets() {
    const { store, actions } = useContext(Context);

    const isFavorite = (planets) => store.favoritos.includes(planets);

    const handleFavoriteClick = (planets) => {
        if (isFavorite(planets)) {
        actions.removeFromFavorites(planets);
        } else {
        actions.addToFavorites(planets);
        }
    };

    return (
        <>
        {store.planets.map((planets, index) => (
            <Card
            className="m-3"
            style={{
                width: "13rem",
                display: "inline-block",
                textAlign: "center",
            }}
            key={index}
            >
            <Card.Img
                variant="top"
                src={`https://starwars-visualguide.com/assets/img/planets/${
                index + 1
                }.jpg`}
                onError={(e) => {
                e.target.src =
                    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
                }}
            />
            <Card.Body>
                <Card.Title>{planets.name}</Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary" href={`/learnmore/planets/${index+1}`}>
                Learn More
                </Button>
                <Button onClick={() => handleFavoriteClick(planets.name)}className="mx-2">
                {isFavorite(planets.name) ? "♥" : "♡"}
                </Button>
            </Card.Body>
            </Card>
        ))}
        </>
    );
    }

export default Planets;
